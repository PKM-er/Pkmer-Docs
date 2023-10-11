---
uid: 20230925191629
title: GPT 配合文本向量搜索
tags: [AI, 搜索, OpenAI]
description: 
author: windilycloud
type: other
draft: false
editable: false
modified: 20230925232637
aliases: []
mtime: 20230925222143
---

# GPT 配合文本向量搜索

## 由来

在个人实践中，对于文本信息的搜索有下列几种方式：

1. 自建规则搜索：自建结构化的目录，有规则的打标签，命名标题。
2. 文本向量搜索：向量数据库查询
3. 高级搜索语法：通过布尔搜索，条件搜索，联合查询，正则搜索
4. 普通搜索

| 搜索方式     | 优点                             | 缺点                                   |
| ------------ | -------------------------------- | -------------------------------------- |
| 自建规则搜索 | 检索速度快，体验好               | 维护压力大，前期花费时间长             |
| 高级搜索语法 | 通用                             | 输入速度慢，效果不确定，有一定学习成本 |
| 文本向量搜索 | 通用，应用场景比高级搜索语法更广 | 金钱成本较高，效果比自己搜索要好       |
| 普通搜索     | 检索速度快，                     | 效果不确定，大量冗余信息                             |

其中文本向量搜索可以理解为自动创建的自建规则，本文试图尝试使用这种方式构建个人文本搜索引擎，进一步提升检索效率。

## 基本思路

对于个人笔记库，我采用的是自建规则搜索，目前来看体验是最好的，我甚至在绝大部分情况都用不上全局搜索了。于是我将尝试从网络书签下手：

1. 随机选取 100 个书签
2. 在 Supabase 数据库中配置好 pgvector ，建立索引，创建搜索函数
3. 使用 OpenAI 的 `text-embedding-ada-002` 模型生成文本向量，存入 Supabase 数据库中
4. 根据提问，使用 Supabase 的 api，获取最佳的 10 个向量，一起喂给 OpenAI 的 ChatGPT3.5
5. 得到答案

> 选取 100 个书签的原因：一方面是这玩意儿得花钱，对于免费用户，OpenAI 有 3RPM 频率限制，即一分钟最多请求 3 次；另一方面是太多了不好进行展示，私以为将数据集一并放出来，更能评估效果

## 实现步骤

### 配置 Supabase

**安装 postgres 扩展插件以支持向量**

```sql
create extension vector;
```

**创建数据库表**

```sql
create table documents (
  id bigserial primary key,
  title text,
  description text,
  url text,
  content text,
  checksum text,
  embedding vector(1536)
);
```

**创建数据库函数**

```sql
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;

```

- `text-embedding-ada-002` 生成的就是 1536 维的向量
- 直接在 `sql editor` 里运行即可

**创建数据库索引**

```sql
create index on documents using ivfflat (embedding vector_cosine_ops)
with
  (lists = 100);
```

- 这里使用余弦距离，这也是 OpenAI 推荐的

### 生成 embeddings

```ts
import { createClient } from '@supabase/supabase-js'
import BOOKMARKS from './constants/bookmarks'
import type { Database } from './types/supabase'
import md5 from 'md5'
import { OpenAI, ClientOptions } from 'openai'

const supabaseUrl = 'https://xxxxxxxxxx.supabase.co'
const publicToken = 'xxxxxxxxx'
const openAIKey = 'sk-dxxxxxxxxxxxxnYVaeoxxxxxxxxxxxxxxxx'


// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(supabaseUrl, privateToken)
const openai = new OpenAI({ apiKey: openAIKey } as ClientOptions)

BOOKMARKS.forEach(async (bookmark, index) => {
    const content = bookmark.title + ' ' + bookmark.excerpt
    // const embeddingResponse = await openai.embeddings.create({
    //     model: "text-embedding-ada-002",
    //     input: content,
    // })

    // const embedding = embeddingResponse.data[0].embedding
    const currentMd5 = md5(content)
    const { data: selectedData, error: selectedError } = await supabase
        .from('documents')
        .select()
        .eq('checksum', currentMd5)
        .single()

    if (selectedData) {
        console.log(index)
        return
    }
    const embeddingResponse = await fetch("https://api.openai.com/v1/embeddings", {
        method: "POST",
        headers: {
            Authorization: "Bearer xxxxxxxxxxxx04d6xxxxxxxxxxxxxxxxxxxxxxxxx",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            input: content,
            model: "text-embedding-ada-002",
        }),
    });
    const responseJson = await embeddingResponse.json()
    const embedding = responseJson.data[0].embedding

    const generateContentMd5 = (content: string) => {
        const md5Hash = md5(content)
        return md5Hash
    }

    const bookmarkData = {
        title: bookmark.title,
        url: bookmark.link,
        description: bookmark.excerpt ?? "",
        checksum: generateContentMd5(content),
        content,
        embedding,
    }

    const { data, error } = await supabase
        .from('documents')
        //@ts-ignore
        .insert(bookmarkData)
        .single()
})
```

基本思路如下：

1. 我是从 raindrop 的 api 获取书签的，一次最多 50 个，endpoint：`/raindrops/0?perpage=50&page=2`。
2. 初始化 supabase，通过 checksum 判断是否需要生成向量
3. 初始化 openai，试了才知道白嫖用户最多 1 分钟三次，遂改用第三方的接口
4. 插回 supabase

### 基础检索

```ts
async function askEmbedding(question: string) {
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: question,
    })

    const embedding = embeddingResponse.data[0].embedding

    const { data: documents } = await supabase.rpc('match_documents', {
        //@ts-ignore
        query_embedding: embedding,
        match_threshold: 0.78, // Choose an appropriate threshold for your data
        match_count: 10, // Choose the number of matches
    })

    return documents
}


askEmbedding("roadmap").then((data) => {
    console.log(data)
})
```

### 结合 GPT 的检索

```ts
async function askGPT(question: string) {
    const documents = await askEmbedding(question)

    if (!documents || documents?.length === 0) {
        return
    }

    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' })
    let tokenCount = 0
    let contextText = ''

    // Concat matched documents
    for (let i = 0; i < documents.length; i++) {
        const document = documents[i]
        const content = document.content
        const encoded = tokenizer.encode(content)
        tokenCount += encoded.text.length

        // Limit context to max 1500 tokens (configurable)
        if (tokenCount > 1500) {
            break
        }

        contextText += `${content.trim()}\n---\n`
    }

    const prompt = stripIndent`${oneLine`
    你是一个书签管理员，你的工作是帮助用户找到他们想要的书签。接下来我将给你一些上下文信息，然后你需要回答用户的问题。你可以使用以下文档中的任何信息来回答问题。如果你不确定，或者上下文中没有明确写出答案，你可以说"对不起，我不知道怎么回答这个问题。"`}

    Context sections:
    ${contextText}

    Question: """
    ${question}
    """

    Answer as markdown (including related code snippets if available):
  `

    // In production we should handle possible errors
    const completionResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages:[
            {
                "role": "system",
                "content": prompt
            }
        ],
    
```

## 测试评估

### obsidian

仅询问关键字

**ask embedding**

```ts
[
  {
    id: 60,
    content: 'Obsidian Observer Welcome to The Obsidian Observer, a hub for all Obsidian enthusiasts. Whether you’re a beginner or a seasoned pro, our publication delivers in-depth how-to guides, innovative workflows, and captivating opinions to help unlock your note-taking potential.',
    similarity: 0.829482535062233
  },
  {
    id: 14,
    content: "Obsidian Roadmap We're chipping away at improvements to Obsidian. Learn about what's coming next.",
    similarity: 0.824207814523189
  },
  {
    id: 40,
    content: 'Obsidian 个人插件开发纪实——0x01 Obsidian 插件开发纪实会是一个系列的文章，主要是记录我真正从零开始开发 Obsidian 插件做为副业项目的过程，这中间会涉及到 js、nodejs、css、React 等技术',
    similarity: 0.820029113306582
  },
  {
    id: 42,
    content: '入门指南 | Obsidian 插件开发文档 ',
    similarity: 0.81381394000391
  },
  {
    id: 73,
    content: 'platers/obsidian-linter: An Obsidian plugin that formats and styles your notes with a focus on configurability and extensibility. An Obsidian plugin that formats and styles your notes with a focus on configurability and extensibility. - platers/obsidian-linter: An Obsidian plugin that formats and styles your notes with a focu...',
    similarity: 0.811287905804211
  },
  {
    id: 49,
    content: 'Actions for Obsidian The missing link between Obsidian and macOS/iOS. 30+ Shortcuts actions to bring your notes and your automations together.',
    similarity: 0.806316246861092
  },
  {
    id: 104,
    content: 'esm7/obsidian-vimrc-support: A plugin for the Obsidian.md note-taking software A plugin for the Obsidian.md note-taking software. Contribute to esm7/obsidian-vimrc-support development by creating an account on GitHub.',
    similarity: 0.804955411252818
  },
  {
    id: 33,
    content: 'epwalsh/obsidian.nvim: Neovim plugin for Obsidian, written in Lua Neovim plugin for Obsidian, written in Lua. Contribute to epwalsh/obsidian.nvim development by creating an account on GitHub.',
    similarity: 0.804544974998846
  },
  { id: 38, content: 'Quail.ink ', similarity: 0.801935791969442 },
  {
    id: 24,
    content: 'PKM-er/Pkmer-Obsidian Contribute to PKM-er/Pkmer-Obsidian development by creating an account on GitHub.',    
    similarity: 0.801866460514018
  }
]
```

**ask GPT**

Obsidian is a note-taking app that allows users to create and organize their notes using a markdown-based system. It offers features such as backlinks, graph view, and plugins to enhance the note-taking experience. There are also various plugins available for Obsidian, such as Obsidian Linter, Actions for Obsidian, obsidian-vimrc-support, and obsidian.nvim. Additionally, there are resources available for plugin development, such as the Obsidian Plugin Development Documentation and the Obsidian 插件开发纪实 series.

### 关于 obsidian 的内容有哪些？

自然语言询问

**普通搜索 obsidian**

- PKMer-obsidian
- obsidian roadmap
- obsidian.nvim
- actions for obsidian
- obsidian 插件开发文档
- obsidian 插件开发纪实
- obsidian observer
- obsidian-vimrc-support
- obsidian linter

**ask embedding**

```ts
[
  {
    id: 42,
    content: '入门指南 | Obsidian 插件开发文档 ',
    similarity: 0.874166488647467
  },
  {
    id: 40,
    content: 'Obsidian 个人插件开发纪实——0x01 Obsidian 插件开发纪实会是一个系列的文章，主要是记录我真正从零开始开发 Obsidian 插件做为副业项目的过程，这中间会涉及到 js、nodejs、css、React 等技术',
    similarity: 0.863220897488814
  },
  {
    id: 60,
    content: 'Obsidian Observer Welcome to The Obsidian Observer, a hub for all Obsidian enthusiasts. Whether you’re a beginner or a seasoned pro, our publication delivers in-depth how-to guides, innovative workflows, and captivating opinions to help unlock your note-taking potential.',
    similarity: 0.82348354774912
  },
  {
    id: 14,
    content: "Obsidian Roadmap We're chipping away at improvements to Obsidian. Learn about what's coming next.",
    similarity: 0.805123281936939
  },
  {
    id: 18,
    content: 'LearnData 开源笔记 开源工具、效率方法、心理学探索的自我提升笔记',
    similarity: 0.803631544113165
  },
  {
    id: 107,
    content: '语雀知识库推荐 · 语雀 本文档收录各个领域的优质知识库，欢迎关注与自荐。如果还...',
    similarity: 0.802435183960532
  },
  {
    id: 49,
    content: 'Actions for Obsidian The missing link between Obsidian and macOS/iOS. 30+ Shortcuts actions to bring your notes and your automations together.',
    similarity: 0.802080309639014
  },
  { id: 83, content: '前端笔记 · 语雀 前端笔记', similarity: 0.798161459078714 },
  {
    id: 104,
    content: 'esm7/obsidian-vimrc-support: A plugin for the Obsidian.md note-taking software A plugin for the Obsidian.md note-taking software. Contribute to esm7/obsidian-vimrc-support development by creating an account on GitHub.',
    similarity: 0.79218731066219
  },
  {
    id: 73,
    content: 'platers/obsidian-linter: An Obsidian plugin that formats and styles your notes with a focus on configurability and extensibility. An Obsidian plugin that formats and styles your notes with a focus on configurability and extensibility. - platers/obsidian-linter: An Obsidian plugin that formats and styles your notes with a focu...',
    similarity: 0.787319732468157
  }
]
```

**ask GPT**

- Obsidian 插件开发文档
- Obsidian 个人插件开发纪实
- Obsidian Observer
- Obsidian Roadmap
- Actions for Obsidian
- esm7/obsidian-vimrc-support
- platers/obsidian-linter

### 罗列所有关于 obsidian 的书签

**ask embedding**

```ts
[
  {
    id: 42,
    content: '入门指南 | Obsidian 插件开发文档 ',
    similarity: 0.843693043103616
  },
  {
    id: 40,
    content: 'Obsidian 个人插件开发纪实——0x01 Obsidian 插件开发纪实会是一个系列的文章，主要是记录我真正从零开始开发 Obsidian 插件做为副业项目的过程，这中间会涉及到 js、nodejs、css、React 等技术',
    similarity: 0.817094783599769
  },
  {
    id: 18,
    content: 'LearnData 开源笔记 开源工具、效率方法、心理学探索的自我提升笔记',
    similarity: 0.80540289894948
  },
  { id: 83, content: '前端笔记 · 语雀 前端笔记', similarity: 0.805221772038305 },
  { id: 44, content: '时光印记经典珍藏系列 ', similarity: 0.799947762479978 },
  {
    id: 107,
    content: '语雀知识库推荐 · 语雀 本文档收录各个领域的优质知识库，欢迎关注与自荐。如果还...',
    similarity: 0.791587517890711
  }
]
```

**ask GPT**

- [Obsidian 插件开发文档](https://obsidian.md/developers/plugins/index.html)
- [Obsidian 个人插件开发纪实——0x01](https://www.yuque.com/learn-data/obsidian-plugin-development/obsidian-plugin-development-0x01)
- [时光印记经典珍藏系列](https://www.yuque.com/learn-data/obsidian-plugin-development/obsidian-plugin-development-0x01)

### Obsidian 开发文档

**普通搜索**

混杂了大量 obsidian 相关的内容，单搜索 `obsidian 开发文档`，vscode，typora 均搜不到对应内容，后采用布尔搜索，正则搜索才能勉强找到。

**ask embedding**

```ts
[
  {
    id: 42,
    content: '入门指南 | Obsidian 插件开发文档 ',
    similarity: 0.915111829651838
  },
  {
    id: 40,
    content: 'Obsidian 个人插件开发纪实——0x01 Obsidian 插件开发纪实会是一个系列的文章，主要是记录我真正从零开始开发 Obsidian 插件做为副业项目的过程，这中间会涉及到 js、nodejs、css、React 等技术',
    similarity: 0.870881690102228
  },
  { id: 83, content: '前端笔记 · 语雀 前端笔记', similarity: 0.806549775990866 },
  {
    id: 18,
    content: 'LearnData 开源笔记 开源工具、效率方法、心理学探索的自我提升笔记',
    similarity: 0.80422810366491
  },
  {
    id: 14,
    content: "Obsidian Roadmap We're chipping away at improvements to Obsidian. Learn about what's coming next.",
    similarity: 0.800547170753196
  },
  { id: 12, content: '思绪思维导图 ', similarity: 0.794258569131113 },
  {
    id: 104,
    content: 'esm7/obsidian-vimrc-support: A plugin for the Obsidian.md note-taking software A plugin for the Obsidian.md note-taking software. Contribute to esm7/obsidian-vimrc-support development by creating an account on GitHub.',
    similarity: 0.793179583956097
  },
  {
    id: 60,
    content: 'Obsidian Observer Welcome to The Obsidian Observer, a hub for all Obsidian enthusiasts. Whether you’re a beginner or a seasoned pro, our publication delivers in-depth how-to guides, innovative workflows, and captivating opinions to help unlock your note-taking potential.',
    similarity: 0.792051255703023
  },
  {
    id: 107,
    content: '语雀知识库推荐 · 语雀 本文档收录各个领域的优质知识库，欢迎关注与自荐。如果还...',
    similarity: 0.792004582883295
  },
  {
    id: 49,
    content: 'Actions for Obsidian The missing link between Obsidian and macOS/iOS. 30+ Shortcuts actions to bring your notes and your automations together.',
    similarity: 0.787538179764319
  }
]
```

**ask GPT**

[Obsidian 插件开发文档](https://github.com/obsidianmd/obsidian-api) 是 Obsidian 的官方开发文档，提供了有关如何开发 Obsidian 插件的详细信息和示例代码。你可以在这里找到有关插件开发的所有必要信息。

## 总结

目前篇幅过长，仅能展现部分测试，遂给出个人主观倾向的总结：

1. 普通搜索在**单关键字的情况下**检全率很高，检准率或者说相关性比较差，因为混杂了大量无关但含有关键字的信息。而向量搜索和 GPT 配合向量搜索在相关性上做得很好，但是只能返回部分结果。
2. GPT 在不同的提问方式返回的是不同的内容，相对来说不怎么稳定。向量搜索比较稳定。
3. 向量搜索添加关键字可以提升检索质量，GPT 能优化输出内容。
4. **在多关键字的情况下**普通搜索和高级搜索的难度上升，即使很简单的搜索也提升了心智压力。相较而言，向量搜索和 GPT 则能较为轻松的获取相关内容。

针对个人大文本量的检索场景，做出如下选择：

> 主要权衡在于：是否能立刻返回有效易读的信息，也即检准率
> 全局搜索在大文本量的场景无疑会出现大量关键字，人眼无法立刻准确的，优雅的找到想要的内容，这是我所摈弃的，这玩意儿适合机器读，不适合人读。
> 自定义规则搜索则提出建立人脑搜索引擎，建立并熟悉后可避免上述情况。但问题是人脑是有限的，对于产出不高，性价比低的情况，向量搜索加 GPT 能很好的补足这种场景。

- 个人笔记库：自定义规则搜索配合普通和高级搜索。考虑到建立个人笔记库的目的是建立系统的，完备的笔记系统，向量搜索和 GPT 的信息丢失是不可接受的，妨碍整体的思考，重构笔记。
- 琐碎记录：普通和高级搜索。考虑到琐碎记录如日志，习惯记录这些，检全率十分重要，可以配合自动化手段，自定义标签等手段完备的收集，再进行处理。
- 备忘记录：向量搜索配合 GPT。考虑到网络书签，代码搜索这些组织起来性价比低，收效甚微且颇占心智压力的场景。即使向量搜索检索不全，但是能立刻返回易读，相关的内容，也瑕不掩瑜了。

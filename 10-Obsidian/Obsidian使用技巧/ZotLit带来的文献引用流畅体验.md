---
uid: 20231118135546
title: ZotLit：文献引用的流畅体验
tags: [Obsidian, 插件, Zotero, 导入]
description: ZotLit插件有灵活的模板，可以适应非常丰富的使用场景。
author: alephpiece
type: other
draft: false
editable: false
modified: 20231118183506
---

# ZotLit：文献引用的流畅体验

[[zotlit|Obsidian ZotLit]] 的 `[@` 语法带来了如同原生 Obsidian 内链一样的体验。如果说 ZotLit 的 `[@` 是手指的享受，那么 ZotLit 灵活的模板一定是眼睛的享受。

**如果笔记中的文献引用是 author-year 格式，会不会倍感舒适？**

![[ZotLit_authoryear_citation.gif]]

**如果笔记中的文献引用跳转到参考文献列表，是不是一时之间忘了自己在写 Markdown？**

![[ZotLit_footnote_number_citation.gif]]

## ZotLit 模板编辑

Obsidian ZotLit 插件使用模板来确定要导出的 Zotero 条目内容，模板使用 [Eta 模板引擎](https://eta.js.org/) 实现。

Eta 的语法和 Obsidian Templater 插件的模板语法很像，具体介绍可以参考 ZotLit 文档：[模板基础知识 – ZotLit (aidenlx.top)](https://zotlit.aidenlx.top/zh-CN/getting-started/basic-usage/template-basics)。

下面简单介绍一下 ZotLit 模板语法和编辑器。

### Eta 语法简介

要想用 ZotLit 在 Obsidian 中获取一个 Zotero 条目的作者列表，可以在模板文件中写

```Eta
<%= it.authors %>
```

这段代码的含义如下：

- `<%` 和 `%>` 是 Eta 的分隔符，在里面的都是 Eta 代码，这里面也可以写 JavaScript。
- `=` 表示要输出分隔符里面的变量，在这里就是输出 `it.authors`。
- `it` 是 Eta 的一个全局变量，它包含了当前文献的题录、笔记、注释等信息。
- `it.authors` 就是从 `it` 中取出当前文献的作者列表。

### ZotLit 有哪些模板？

ZotLit 目前有 1 个简单模板和 7 个模板文件，用于指定要从 Zotero 导出的内容、格式，都是可以自定义的。这些模板都在 ZotLit 设置的 `Template` 选项卡中列出来了。

> 下面所说的文献笔记（literature note）是指从 Zotero 导出到 Obsidian 的 Markdown 笔记，可以包含一个 Zotero 文献条目的几乎所有信息。

下图是 ZotLit 1.1.4 的设置界面。

![[Pasted image 20231118150252.png]]

这 8 个模板分别是：

- **笔记文件名（note filename）**：文献笔记的文件名。简单模板，只能在 ZotLit 设置中修改。
- **笔记内容（note content）**：文献笔记的内容。模板文件，可自定义要从 Zotero 条目导出的笔记内容。
- **笔记属性（note properties）**：文献笔记的属性。模板文件，指定 Obsidian properties。
- **注释（annotations）**：PDF 注释列表。模板文件，指定从 Zotero PDF 导出注释列表的格式。
- **单条注释（single annotation）**：PDF 的单条注释。模板文件，指定一条注释在文献笔记中的格式。
- **主要 Markdown 引用（primary Markdown citation）**：引用一篇文献的链接格式。模板文件。
- **次要 Markdown 引用（secondary Markdown citation）**：引用一篇文献的链接格式。模板文件。
- **彩色高亮（colored highlight）**：在文献笔记中显示有颜色的 PDF 高亮块。

### 模板文件编辑器

除了文件名模板可在设置中修改，其他可自定义模板都只能在文件中修改。这些模板文件可以通过 `Template` 选项卡中的 `Eject` 按钮生成。

![[Pasted image 20231118150537.png]]

之后，可以随时从这个选项卡跳转到生成的模板文件。

![[Pasted image 20231118150655.png]]

为了方便编辑模板文件，ZotLit 提供了一个模板文件实时编辑器。截至 ZotLit 1.1.4，这个编辑器都是可以从注释面板打开的，步骤如下。

- 在 Obsidian 中打开命令面板。
- 找到 `ZotLit: Open Zotero annotation view in side panel`。

![[Pasted image 20231118150827.png]]

- 打开注释面板后，点击链接图标，选择链接模式 `Link with selected literature`。

> 也可以使用其他链接模式，总之要链接到一个文献来展示模板的效果。

![[Pasted image 20231118150855.png]]

- 在弹出的搜索框中搜索要链接的 Zotero 文献。
- 完成后，该文献的注释就出现在面板里。

![[Pasted image 20231118151226.png]]

- 点击 info 图标，`Show details`。

![[Pasted image 20231118151251.png]]

- 实时编辑器启动。

![[Pasted image 20231118151840.png]]

编辑器分为三个区域：

1. 模板文件。当前正在编辑的模板显示在此。
2. 导出预览。用这个模板导出的文献笔记显示在此（就是前面的步骤链接的那个文献）。
3. 条目数据。当前文献的所有可导出的数据显示在此。

终于准备完了！虽然步骤很多，但是只要接下来把模板文件准备好，就再也不用折腾了！

## 笔记文件名

### 修改笔记文件名

用 ZotLit 导出一篇 Zotero 文献，于是在你的 Obsidian 仓库里多了一个文件：

![[Pasted image 20231118152725.png]]

什么？你不喜欢这个文件名？可以改！

打开 ZotLit 设置的 `Template` 选项卡，找到里面的 `Note filename`，把它改成你想要的样子就可以。

![[Pasted image 20231118153015.png|700]]

它的默认值是

```Eta
<%= it.citekey ?? it.DOI ?? it.title ?? it.key %>.md
```

意思是以当前文件的 `citekey` 或 `DOI` 或 `title` 或 `key` 作为文件名，首选 `citekey`。

如果把文件名模板改成 `<%= it.key %>.md`，就会看到这样的文件名：

![[Pasted image 20231118163347.png]]

如果你喜欢给文件名加一些前缀，像我一样：

```Eta
@<%= it.citekey ?? it.DOI ?? it.title ?? it.key %>.md
```

就会看到这样的文件名：

![[Pasted image 20231118163515.png]]

### 中文文献笔记名太长

#### 有多长？

如果用 ZotLit 导入一篇中文文献，会发现文件名和英文文献的格式不太一样，尤其是文件名可能超级长，这怎么办？

比如说，同样的一本书，英文标题和作者名是

```text
Title: Ultralearning: Master hard skills, outsmart the competition, and accelerate your career
Author: Scott Young
```

换成中文存起来的话，中文标题和作者名是

```Text
Title: 终极学习：精通技能赢得竞争平步青云！
Author: 斯考特 杨
```

看看这两条记录用 ZotLit 导入 Obsidian 会得到什么样的文件名。

![[Pasted image 20231118171514.png]]

- 英文作者名是小写开头，中文作者名是大写字母开头，强迫症要犯了！
- 英文标题截取了三个词，中文标题截取了三个“词”，这中文“词”也太长了吧！

#### 怎么办？

其实，这是由于 Better BibTeX 本身提供的默认 `citekey` 对中文拼音不友好，ZotLit 从 Better BibTeX 那里直接拿过来就成这样了。还好 Better BibTeX 对此是有解决方案的。

在 Zotero 里打开 Better BibTeX 的设置，可以看到 `citekey` 的默认值。

![[Pasted image 20231118172303.png]]

这里面的 `auth.lower + shorttitle(3,3)` 就是导致中文文献笔记名太长的罪魁祸首！

> 设置界面底下有行叫 *“启动引用格式的 "jieba"/"pinyin" 过滤器。将消耗大量内存。“* ，我还是不打算消耗大量内存，所以不用它。

怎么办？请看下面这两个讨论提供的信息：

- [Citation key formula not generating lowercase for Chinese authors · Issue #2450 · retorquere/zotero-better-bibtex (github.com)](https://github.com/retorquere/zotero-better-bibtex/issues/2450)
- [Chinese pinyin transliteration cite key gets too long · Issue #1678 · retorquere/zotero-better-bibtex (github.com)](https://github.com/retorquere/zotero-better-bibtex/issues/1678)

**太长不看版**：直接把 `citekey` 的格式改成

```text
auth.transliterate.lower + shorttitle.ideographs.capitalize.select(1,3) + year
```

文件名瞬间清爽了。

![[Pasted image 20231118172942.png]]

这个方法只是把中文文献 `citekey` 里面的标题限制到三个字，如果大家有更好的分词方法请分享给我！

## 文献引用格式

文章开头的两个图片中的效果怎么实现？

先打开 ZotLit 配置，切换到 `Template` 选项卡，找到下面两个模板，点旁边的按钮生成模板文件。

![[Pasted image 20231118174220.png]]

这两个模板决定了在 Obsidian 笔记中用 `[@` 插入文献引用的时候会得到什么。

### 默认值的效果

如果就用默认的，当你在自己的笔记里用 `[@` 搜索一篇文献并按下回车，得到的引用按照 `Primary Markdown citation` 模板说的来。

![[ZotLit_default_primary_citation.gif]]

当你在笔记里用 `[@` 搜索文献后加上个 `/` 再按下回车，得到的引用就按照 `Secondary Markdown citation` 模板说的来。

![[ZotLit_default_secondary_citation.gif]]

### 修改文献引用格式

> 如果你像我前面说的一样给笔记文件名加了个 `@`，那么下面的代码直接就能用。
> 如果你的笔记文件名前面没有 `@`，请把下面代码中的 `@` 删掉。

打开 `Primary Markdown citation` 这个模板，把里面的内容换成

```Eta
<%= it.map(lit => `[[@${lit.citekey}|(${lit.authors.first()}${lit.authors.length>1?" et al.":""}, ${lit.year?lit.year:lit.date})]]`).join("; ") %>
```

再打开 `Secondary Markdown citation` 这个模板，把里面的内容换成

```Eta
<%= it.map(lit => `[[@${lit.citekey}|${lit.authors.first()}${lit.authors.length>1?", et al":""}. ${lit.year?lit.year:lit.date}. ${lit.title}.]]`).join("; ") %>
```

我知道这两句代码有点长，但效果还是不错的，先来试试。

在自己的笔记中，如果输入 `[@`，搜索一篇文献并按回车，看起来是这样。

![[ZotLit_new_primary_citation.gif]]

如果输入 `[@`，搜索文献，再输入 `/`，再回车，看起来是这样。

![[ZotLit_new_secondary_citation.gif]]

有没有感觉好看一点？下面说说前面的代码是什么意思，这样一来你自己也可以修改了。

`Primary Markdown citation` 这个模板刚刚改成了

```Eta
<%= it.map(lit => `[[@${lit.citekey}|(${lit.authors.first()}${lit.authors.length>1?" et al.":""}, ${lit.year?lit.year:lit.date})]]`).join("; ") %>
```

它和默认值的区别主要是 `it.map(...)` 括号中的内容。

这块内容用 Wikilink 格式引用文件，并且创建别名，所以整个看起来是 `[[@${lit.citekey}|...]]`。为了把别名弄成 author-year 格式，代码里分别处理了作者名和年份：

- 取第一个作者名：`${lit.authors.first()}`
- 有多个作者就加尾巴：`${lit.authors.length>1?" et al.":""`
- 最后加上年份：`${lit.date?lit.date:lit.year}`

### 参考文献列表

如果你以为我有自动生成的参考文献列表，那你上当了 :)

下面这个图里的参考文献列表仅仅是 Markdown 脚注而已。

![[ZotLit_footnote_number_citation.gif]]

## 文献笔记内容

ZotLit 导出的文献笔记也可以做的很好看，只要修改 `Template` 选项卡中的 `Note content` 模板就可以，大家可以自己探索！

下面分享一下我自己的简单配置，效果如下。

![[Pasted image 20231118182505.png]]

我的模板文件如下。

```Eta
# <%= it.title %>

> [!INFO]
> - **Authors**: <%=
it.authors
.map(author => `[[${author}]]`)
.join(', ')
%>
> - **Date**: <%= it.year ?? it.date %>
> - **DOI**: <%= it.DOI %>
> - **Groups**: <%= it.collections %>
> - **Tags**: <%=
it.tags
.map(tag => '#' + tag.toString().replaceAll(' ', '-'))
.join(', ')
%>
> - **Links**：[Zotero](<%= it.backlink %>)

<% it.notes.forEach(note => { -%>
<%= `${note}` %>
<% }) %>
# 注释
<%~ include("annots", it.annotations) %>
```

简单解释一下。

- 文献题目直接作为标题，前面加上 Markdown 一级标题标记 `#`。

```Eta
# <%= it.title %>
```

> 除了 `<%` 和 `%>` 之间的内容被解释为 Eta 代码，其他都是原样输出到文献笔记。

- 元信息放在高亮块里面。

```Eta
> [!INFO]
```

> 可以去掉，或者换成 Admonitions。

- 作者名逐个输出，用逗号加空格分隔，每个名字都改成 Obsidian 链接。

```Eta
> - **Authors**: <%=
it.authors
.map(author => `[[${author}]]`)
.join(', ')
%>
```

> 直接输出作者列表用 `<%= it.authors %>`。
> 这里是一段包裹在 `<%=` 和 `%>` 之间的 JavaScript 代码。

- 日期从 Zotero 条目的 `year` 或 `date` 获取，优先选 `year`。

```Eta
> - **Date**: <%= it.year ?? it.date %>
```

- Tags 输出时加上 `#`，并且把空格换成 `-`，这样就成了 Obsidian tags。

```Eta
> - **Tags**: <%=
it.tags
.map(tag => '#' + tag.toString().replaceAll(' ', '-'))
.join(', ')
%>
```
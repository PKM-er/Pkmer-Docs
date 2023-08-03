---
uid: 20230803205033
title: Obsidian 插件：【Readme】Wordy
tags: ['obsidian插件', 'readme']
description: 使用 Datamuse API 查找同义词、押韵词等等。
author: nqthqn
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Wordy

> [!Note] 插件名片
> - 插件名称：Wordy
> - 插件作者：nqthqn
> - 插件说明：使用 Datamuse API 查找同义词、押韵词等等。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/nqthqn/obsidian-wordy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-wordy)

## 概述

使用 Datamuse API 查找同义词、押韵词等等。

![Wordy](https://cdn.pkmer.cn/covers/obsidian-wordy.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nqthqn/obsidian-wordy/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-wordy]] 插件的自述翻译


寻找同义词和更多相关信息，请使用[Datamuse API](https://www.datamuse.com/api/)。这是一个[Obsidian](https://obsidian.md/)插件。

# 演示

![](demo.gif)

# 用法
选择一个单词，运行“Wordy: Synonyms”命令，找到一个替代词。当前的命令有：

- `Wordy: Synonyms` — 找到具有相似意义的单词
- `Wordy: Rhymes` — 找到一个单词的押韵词
- `Wordy: Alliterative Synonyms` — 找到头韵同义词。在“food”上运行并将“Good food”转换为“Good grub”
- `Wordy: Antonyms` — 找到与选中单词相反的单词

**提示：为此命令设置一个热键。**

# 更新日志

## 1.2.0
- 添加了`ml`以查找更多的同义词

## 1.1.0
- 添加了`Wordy: Alliterative Synonyms`命令。`good food`变为`good grub`
- 添加了`Wordy: Rhymes`命令。

## 1.0.1
- 添加了`Wordy: Antonyms`命令。
- 进行了代码重构，并启用了严格的TypeScript。

## 0.1.0
- 添加了`Wordy: Synonyms`命令到调色板。选择一个单词并运行该命令以查找同义词。该列表包括上义词、下义词、整体词和部分词。

路线图

提出一个功能请求，我会将其加入路线图 :)

我喜欢写诗。有一天，在创作一首短信诗时，我问自己：“有哪个以‘P’开头的词是‘美丽’的同义词？”我们的目标是以聚合的方式映射[Datamuse API](https://www.datamuse.com/api/)。例如，在搜索同义词时，也会包括上位词和同音词。
- [ ] 编写端到端测试
- [x] 意思相似
- [ ] 听起来像
- [ ] 拼写相似
- [ ] jja	由给定形容词修饰的常见名词，根据Google Books Ngrams	gradual → increase
- [ ] jjb	用于修饰给定名词的常见形容词，根据Google Books Ngrams	beach → sandy
- [x] syn	同义词（在同一个WordNet同义词集中的词）	ocean → sea
- [ ] trg	与查询词在同一段文本中具有统计关联的“触发词”	cow → milking
- [x] ant	反义词（根据WordNet）	late → early
- [x] spc	“种类”（直接上位词，根据WordNet）	gondola → boat
- [x] gen	“比…更一般”（直接下位词，根据WordNet）	boat → gondola
- [x] com	“包括”（直接整体词，根据WordNet）	car → accelerator
- [x] par	“部分”（直接部分词，根据WordNet）	trunk → tree
- [ ] bga	常见的后继词（w′满足P(w′|w) ≥ 0.001，根据Google Books Ngrams）	wreak → havoc
- [ ] bgb	常见的前导词（w′满足P(w|w′) ≥ 0.001，根据Google Books Ngrams）	havoc → wreak
- [x] rhy	押韵词（“完美”押韵，根据RhymeZone）	spade → aid
- [x] nry	近似押韵词（根据RhymeZone）	forest → chorus
- [x] hom	同音词（发音相似的词）	course → coarse
- [x] cns	辅音匹配	sample → simple
- [ ] topics	主题词：对正在撰写的文档主题的系统的可选提示
- [ ] md	元数据标志，用于确定额外的词汇数据
	- [ ] 定义
	- [ ] 词性
	- [ ] 音节计数
	- [ ] 发音
	- [ ] 词频




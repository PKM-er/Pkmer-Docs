---
uid: 2023080322254952
title: Obsidian 插件：【Readme】Reference Map
tags: ['obsidian插件', 'readme']
description: 文献综述和发现的参考文献和引文图谱。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Reference Map

> [!Note] 插件名片
> - 插件名称：Reference Map
> - 插件作者：Anoop K. Chandran
> - 插件说明：文献综述和发现的参考文献和引文图谱。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/anoopkcn/obsidian-reference-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reference-map)

## 概述

文献综述和发现的参考文献和引文图谱。

![Reference Map](https://cdn.pkmer.cn/covers/reference-map.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anoopkcn/obsidian-reference-map/master/README.md)
>

---

## Readme(翻译）

下面是 [[reference-map]] 插件的自述翻译

![ORM-Header-logo](./images/reference-map.png)

# 参考地图

参考地图是一个用于 [Obsidian](https://obsidian.md/) 的插件，帮助您管理和发现您的参考文献和引用。它提供了一个侧边栏视图，用于管理您的参考文献中被引用和引用的文献。它可以用于创建论文或项目的参考地图。

## 要求

- [Obsidian](https://obsidian.md/) 已启用社区插件

## 安装

该插件可通过 Obsidian 的社区插件选项卡进行安装：设置 → 社区插件 → 浏览 → 搜索 "Reference Map"。

### 手动安装

1. 从 [这里](https://github.com/anoopkcn/obsidian-reference-map/releases) 下载并解压最新版本。
2. 将 `obsidian-reference-map` 文件夹复制到您的 vault 的 `.obsidian/plugins` 文件夹中。
3. 重新加载 Obsidian。
4. 在社区插件部分启用插件。

您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat/) 插件来安装最新版本。

## 用法

这个 `README.md` 文件包含了插件的基本描述，详细的指南请**参考 [Wiki](https://github.com/anoopkcn/obsidian-reference-map/wiki) 页面**。

![ORM-demo](./images/orm-demo-0.7.5.png)

### 参考地图视图

参考地图视图包含索引卡和参考卡。

**索引卡**是通过使用 ID 从 Markdown 文档中检测到的（请参阅下面的*静态参考列表*部分）。

**参考卡**显示引用卡中包含的参考的引用和被引用论文的可搜索和可排序列表。

视图中的每个索引/参考卡将显示以下信息：

|按钮|部分|描述|点击事件|
|---|---|---|---|
|文本|标题|论文的标题|在 [Semantic Scholar](https://www.semanticscholar.org/) 中打开论文|
||摘要|论文的摘要（默认=关闭）|-|
|文本|作者|论文的作者|在 [Semantic Scholar](https://www.semanticscholar.org/) 中打开作者的详细信息|
||年份|出版年份|-|
|文本|引用键|Pandoc 引用键（默认=关闭）|在 Zotero 图书馆中打开引用|
|(1)|元数据复制|用户定义的元数据格式。默认为论文的 `bibtex`|将 `<bibtex>` 复制到剪贴板（如果启用批量复制，则会复制所有引用论文的 `<bibtex>`）|
|(2)|元数据复制|用户定义的元数据格式。默认为格式化的 `metadata` 详细信息|将 `<metadata>` 复制到剪贴板（如果启用批量复制，则会复制所有引用论文的 `<metadata>`）|
|(3)|元数据复制|用户定义的元数据格式。默认为引用标题作为 `wikilink`（默认=关闭）|将 `<wikilink>` 复制到剪贴板（如果启用批量复制，则会复制所有引用论文的 `<wikilink>`）|
|(4)|PDF|论文的开放获取 PDF|如果引用的论文存在开放获取 PDF，则打开该论文的 [开放获取](https://de.wikipedia.org/wiki/Open_Access) PDF|
|(5)|引用计数|引用数量|打开所有引用论文（参考文献）的可搜索列表|
|(6)|引用计数|引用数量|打开所有引用该论文的论文（引用文献）的可搜索列表|
||有影响力的引用计数|[有影响力的引用数量](https://www.semanticscholar.org/paper/Identifying-Meaningful-Citations-Valenzuela-Ha/1c7be3fc28296a97607d426f9168ad4836407e4b)（默认=关闭）|-|

*您可以根据自己的工作流程自定义元数据按钮（1、2、3）的内容，按钮复制/创建内容的元数据模板的可能变量列在设置选项卡中*

*批量操作仅适用于索引卡*

![ORM-ref-cite](./images/orm-list-demo.png)

### 静态引用列表

在当前文档中找到的引用 ID（DOI、arxiv、corpusID、URL、citeKey 等）将在“引用地图”视图中列出。有效的 ID 可以在文档的任何位置添加，它们将被检测到。

支持以下类型的 ID：

| ID 语法 | 描述 | 示例 |
| --- | --- | --- |
`DOI:<doi>` | [数字对象标识符](http://doi.org/) | `DOI:10.18653/v1/N18-3011` 或 `10.18653/v1/N18-3011v1`
`@<citekey>`| [Zotero](https://www.zotero.org/) 引用键（默认关闭）* | `@smith2019attention`
`ARXIV:<id>`| [arXiv.org](https://arxiv.org/) | `ARXIV:2106.15928`
`MAG:<id>` | Microsoft 学术图谱 | `MAG:112218234`
`PMID:<id>`| PubMed/Medline | `PMID:19872477`
`PMCID:<id>`| PubMed Central | `PMCID:2323736`
`URL:<url>`| 来自网站的 URL | `URL:https://arxiv.org/abs/2003.05991`
`CorpusId:<id>` | Semantic Scholar 数字 ID | `CorpusId:215416146`

* 要启用 CiteKey 支持（用于 Zotero 或其他参考管理器），必须提供一个 `Bibtex CSL JSON`（Better BibTex Zotero 插件功能，随库中的更改自动更新）或 `CSL JSON`（来自任何参考管理器的通用 CSL 库）文件。一旦在设置中启用，插件可以识别 Pandoc 引用格式。

**注意**：CiteKey 不应包含 `空格`、`[`、`(` 或 `*`。还请确保在 Zotero 库的 DOI 字段中包含有效的 ID。

### 动态参考列表

参考地图视图还可以配置为显示与笔记文件名或前置关键字相对应的参考列表。

*请查看设置选项卡以配置插件的行为*

**示例：**对于名为 `Attention is all you need.md` 的文件，将显示与 `Attention+all+need` 匹配的参考卡片。

对于前置关键字，您可以配置一个关键字用于参考搜索。默认情况下，关键字是 `keywords`。

**示例：**对于以下给定的前置内容：

```
---
keywords: autoencoders, machine learning
---
```

将显示与 `autoencoders+machine+learning` 匹配的参考卡片。

请注意，由于新的参考资料定期添加到数据库中，动态列表可能每次打开文件时都不相同。特别是对于像 `machine learning`、`deep learning`、`history` 等通用关键字。

**此功能还可用于及时了解特定领域的最新研究进展**。

## 配置

如果您想配置视图的样式，可以使用 [Obsidian-style-settings](https://github.com/mgmeyers/obsidian-style-settings) 插件。

设置选项卡包含配置插件行为的选项。

**如果您发现任何错误或有任何建议，请随时在 [GitHub问题页面](https://github.com/anoopkcn/obsidian-reference-map/issues) 上提出问题**。

---
uid: 2023080322240030
title: Obsidian 插件：Omnisearch
tags: ['搜索/排序', '效率', 'obsidian插件', 'readme']
description: 提供更强大的智能搜索，可以搜索 PDF文件和图像中的文字内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Omnisearch

> [!Note] 插件名片
> - 插件名称：Omnisearch
> - 插件作者：Simon Cambier
> - 插件说明：提供更强大的智能搜索，可以搜索 PDF 文件和图像中的文字内容。
> - 插件分类：[' 搜索/排序 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/scambier/obsidian-omnisearch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?omnisearch)

## 概述

提供更强大的智能搜索，可以搜索 PDF 文件和图像中的文字内容。

![Omnisearch](https://cdn.pkmer.cn/covers/omnisearch.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/scambier/obsidian-omnisearch/master/README.md)
>

---

## Readme(翻译）

下面是 [[omnisearch]] 插件的自述翻译

# Obsidian 的 Omnisearch

[![赞助我](https://img.shields.io/badge/%E2%9D%A4%20喜欢这个插件吗？-赞助我！-ff69b4)](https://github.com/sponsors/scambier)
![Obsidian插件](https://img.shields.io/endpoint?url=https%3A%2F%2Fscambier.xyz%2Fobsidian-endpoints%2Fomnisearch.json)

![GitHub发布（按日期和文件）](https://img.shields.io/github/downloads/scambier/obsidian-omnisearch/latest/main.js)
![GitHub发布（包括预发布）](https://img.shields.io/github/v/release/scambier/obsidian-omnisearch)

![GitHub发布（包括预发布）](https://img.shields.io/github/v/release/scambier/obsidian-omnisearch?include_prereleases&label=BRAT%20beta)

> **Omnisearch**是一个“即刻生效”的搜索引擎。由于其智能加权算法，它总是立即显示最相关的结果。

在内部，它使用了优秀的 [MiniSearch](https://github.com/lucaong/minisearch) 库。

![](https://raw.githubusercontent.com/scambier/obsidian-omnisearch/master/images/omnisearch.gif)

## 特点

> Omnisearch 的首要目标是即时“定位”文件。您可以将其视为功能强大的“快速切换器”。

- 比以往更快地找到您的**📝笔记、📄PDF 和🖼图片**
  - 通过 [Text Extractor](https://github.com/scambier/obsidian-text-extractor) 可用于图像和 PDF 索引
- 使用 [BM25算法](https://github.com/lucaong/minisearch/issues/129#issuecomment-1046257399) 进行自动文档评分
  - 文档与查询的相关性取决于查询词在文档中出现的次数、文件名和标题
- 键盘优先：您永远不必使用鼠标
- 与“快速切换器”核心插件类似的工作流程
- 抗打字错误
- 在 Vault 和 In-file 搜索之间切换，以便在单个笔记中快速浏览多个结果
- 支持“用引号括起来的表达式”和“- 排除”
- 直接从搜索结果中插入 `[[链接]]`
- 支持 Vim 导航键

**注意：**对于中文、日文、韩文等的支持取决于 [此附加插件](https://github.com/aidenlx/cm-chs-patch)。请阅读其文档以获取更多信息。

## 安装

- Omnisearch 可在 [官方社区插件仓库](https://obsidian.md/plugins?search=Omnisearch) 上获取。
- Beta 版本可以通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装。**请注意，这些版本可能存在错误并可能导致问题。**

您可以查看 [CHANGELOG](./CHANGELOG.md) 以获取有关不同版本的更多信息。

用法

Omnisearch 可以在两个不同的上下文中使用：

### Vault Search

Omnisearch 的核心功能，通过命令面板 "**_Omnisearch: Vault search_**" 可以访问。这个模态搜索你的存储库并返回最相关的笔记。这就是你需要的全部来 _ 找到 _ 一条笔记。

如果你想列出单个笔记的所有搜索匹配项，可以使用 `tab` 键打开文件内搜索。

### 在文件中搜索

也可以通过命令面板 "**_Omnisearch: In-file search_**" 进行访问。该模态搜索活动笔记的内容并列出匹配的结果。只需按下回车键即可自动滚动到正确的位置。

URL Scheme & 公共 API

您可以使用以下 scheme 打开 Omnisearch：`obsidian://omnisearch?query=foo bar`

----

对于插件开发者和 Dataview 用户，Omnisearch 也可以通过全局对象 `omnisearch` (`window.omnisearch`) 进行访问。

> 此 API 是一个实验性功能，`ResultNote` 接口可能会在将来发生变化。`search()` 函数最多返回 50 个结果。

```ts
// API:
{
  // 返回一个包含与 Vault 模态窗口相同结果的 Promise
  search: (query: string) => Promise<ResultNoteApi[]>
}

type ResultNoteApi = {
  score: number
  path: string
  basename: string
  foundWords: string[]
  matches: SearchMatchApi[]
}

type SearchMatchApi = {
  match: string
  offset: number
}
```

### Dataview 集成

您可以直接在 [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) 插件中使用 Omnisearch API。

~~~js
```dataviewjs
const results = await omnisearch.search('your query')
const arr = dv.array(results).sort(r => r.score, 'desc')
dv.table(['文件', '得分'], arr.map(o => [dv.fileLink(o.path), Math.round(o.score)]))
```
~~~

## CSS 自定义

有几个 CSS 类可以用来自定义 Omnisearch 的外观。

```css
.omnisearch-modal
.omnisearch-result
.omnisearch-result__title
.omnisearch-result__counter
.omnisearch-result__body
.omnisearch-highlight
.omnisearch-input-container
.omnisearch-input-field
```

更多信息请参见 [styles.css](./assets/styles.css)。

问题与解决方案

**Omnisearch 使 Obsidian 在启动时变得缓慢/冻结。**

- 虽然 Omnisearch 尽力在后台平稳运行，但是较大的存储库和文件可能会导致 Obsidian 在索引过程中出现卡顿。
- 如果您有数千个文件，当 Omnisearch 缓存加载到内存中时，Obsidian 在启动时可能会冻结几秒钟。

**Omnisearch 似乎使 Obsidian 变慢。**

- 一旦 Obsidian 在启动时对您的文件进行了索引，当其模态关闭时，它不会执行任何操作。只有当您再次打开模态时，您的更改才会被索引。如果您在使用 Obsidian 时遇到减速，那么 Omnisearch 不太可能是原因。
- 但是，当首次为 PDF 和图像进行索引时，Text Extractor 可能会使 Obsidian 变慢。如果您不需要这些功能，可以在插件设置中禁用它们。

**Omnisearch 在对我的 PDF 和图像进行索引时速度很慢**

- 当 Text Extractor 首次读取这些文件时，提取其文本可能需要很长时间。然后将结果缓存到文本启动中。

**Omnisearch 给出了不一致/无效的结果，在开发者控制台中出现错误**

- 重新启动 Obsidian 以强制重新索引 Omnisearch。
- 缓存可能已损坏；您可以在设置页面底部清除缓存，然后重新启动 Obsidian。

**查询应返回一个未显示的结果。**

- 如果适用，请确保启用了“忽略变音符号”。
- 如果您已对其进行修改，请将权重重置为其原始值。
- 重新编写查询并避免使用数字和常见词语。

**我仍然遇到问题**

您可以在 [此处](https://github.com/scambier/obsidian-omnisearch/issues) 详细描述您的问题。

## 许可证

Omnisearch 在 [GPL-3](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)) 下获得许可。

感谢所有通过 [Ko-Fi](https://ko-fi.com/scambier) 或 [Github赞助商](https://github.com/sponsors/scambier) 捐赠的人们❤

![JetBrains Logo (Main) logo](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)

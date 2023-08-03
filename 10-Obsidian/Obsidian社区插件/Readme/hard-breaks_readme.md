---
uid: 20230803231105
title: Obsidian 插件：Hard Breaks
tags: ['obsidian插件', 'readme']
description: 将Markdown中的软换行转换为硬换行
author: AI
type: readme
draft: false
editable: false
modified: 20230803232554
---

# Obsidian 插件：Hard Breaks

> [!Note] 插件名片
> - 插件名称：Hard Breaks
> - 插件作者：Börge Kiss
> - 插件说明：将 Markdown 中的软换行转换为硬换行
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bkis/obsidian-hard-breaks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hard-breaks)

## 概述

将 Markdown 中的软换行转换为硬换行

![Hard Breaks](https://cdn.pkmer.cn/covers/hard-breaks.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bkis/obsidian-hard-breaks/master/README.md)
>

---

## Readme(翻译）

下面是 [[hard-breaks]] 插件的自述翻译

# Obsidian 硬换行插件 <!-- 在目录中省略 -->

> ✅ 经过测试，可以与 Obsidian 的新主要版本（1.0.x）一起使用！

这是一个为 [Obsidian](https://obsidian.md/) 设计的插件，它添加了一个编辑器命令，用于在当前打开的文档中强制使用 [*硬*换行](https://spec.commonmark.org/0.17/#hard-line-breaks)（与 [*软*换行](https://spec.commonmark.org/0.17/#soft-line-breaks) 相对）。硬换行仅在**文本段落和引用块**中强制使用！该插件不会影响表格、链接、列表等中的文本。

Obsidian 硬换行插件利用了 [一组强大的开源Markdown解析工具](#acknowledgements) 来确保它能够完成预期的功能。

- [功能](#features)
- [我需要这个插件吗？](#do-i-need-this-plugin)
- [软换行和硬换行有什么区别？](#what-are-soft-vs-hard-line-breaks)
- [为什么要强制使用硬换行？](#why-force-hard-line-breaks)
- [安装](#installation)
- [关于可能的附加功能的想法](#thoughts-on-possible-additional-features)
  - [在写作时自动使用硬换行](#automatic-hard-breaks-while-writing)
  - [在多个文档中强制使用换行](#force-line-breaks-in-multiple-documents)
- [开发](#development)
- [致谢](#acknowledgements)

## 特点

该插件提供以下功能：

1）...一个编辑器命令，用于将当前文档中的所有换行符替换为*硬*换行符（**仅在文本段落和引用块中**，不包括代码块、前置内容等）。

2）...在设置中提供一个选项，用于选择要使用的硬换行符格式（`  ` 或 `\`）。

> ℹ️ *硬*换行符的格式在 [CommonMark规范](https://spec.commonmark.org/0.17/#hard-line-breaks) 中有所规定。它允许在行尾使用两个空格或一个反斜杠。虽然反斜杠在 Markdown 源代码中更加明显，但它不太常见并且会使文本显得混乱。但这是个人喜好的问题...

![插件设置截图](doc/screen_settings.png)

我需要这个插件吗？

也许需要，也许不需要。如果你已经了解了 Markdown 中软换行和硬换行的区别，请直接跳到“为什么需要自动硬换行？”以了解这个插件的原理。

长话短说：如果你...

- ...需要在段落内部使用实际的换行（例如写诗...）
- ...从不故意使用软换行（因为 [为什么要使用自动硬换行？](#why-automatic-hard-line-breaks)）
- ...不想在需要时手动输入硬换行，但仍希望使用可移植的 Markdown 文档

...那么你可能会喜欢这个插件。

如果你因某种原因经常使用软换行（这只存在于编辑中，从不在“阅读”模式或任何其他解析和渲染版本中存在，如 HTML），那么这个插件可能不适合你。

什么是软换行和硬换行？

在 Markdown 中，Markdown 源代码中的简单换行被视为 [*软换行*](https://spec.commonmark.org/0.17/#soft-line-breaks)。在将 Markdown 解析为 HTML 时，它将被解析为空格字符或者普通换行（在 HTML 中没有区别）。看下面的例子：

```md
foo
bar
```

...将被解析为以下其中之一（它们是相同的，因为 HTML 中的任何空格都将被渲染为一个单一的空格）：

```html
<p>foo bar</p>

<p>foo
bar</p>
```

对于常见的文本流程和段落，这是可以的。但有时您需要换行而不会打断整个段落。这就是 [*硬换行*](https://spec.commonmark.org/0.17/#hard-line-breaks) 的用途。在 Markdown 中，*硬*换行是由两个空格字符（`  `）前置的换行。看下面的例子（选择文本以查看空格）：

```md
foo
bar
```

这将被解析为：

```html
<p>foo<br/>bar</p>
```

...带有*实际*换行。

为什么要强制使用硬换行？

为什么要使用软换行呢？它们在文档解析/渲染方面没有任何区别。只有一个原因可以使用它们（证明我错了！）：在 Markdown 源文本中手动换行段落。这可能在文本流中的长行不会自动换行的环境中是可取的（例如在 shell 中），或者编辑器宽度很大，长行变得难以阅读。

但是 Obsidian 并不是这样的环境。它会自动换行文本。编辑器的宽度很好。在 Obsidian 中没有必要使用软换行。

Obsidian 有一个名为“Strict line breaks”的设置。如果关闭它，Obsidian 在“阅读”模式下不再区分软换行和硬换行，并将任何内容显示为硬换行。这是一个方便的功能，但它也是对文档的错误视图，因为它不遵循 Markdown 规范。试试在 Obsidian 中编写的俳句，而不使用硬换行...

```md
An ancient pond!
With a sound from the water
Of the frog as it plunges in.
```

...给一个严格遵守 [CommonMark规范](https://spec.commonmark.org) 的软件的朋友看看。你的俳句将会变成这样：

> An ancient pond! With a sound from the water Of the frog as it plunges in.

在这种情况下，你需要在文本中使用硬换行来编写实际的 Markdown。如果你想在 Markdown 的段落中插入换行，你必须使用硬换行。否则，你的文档在其他 Markdown 平台上并不真正可移植。但是，为了换行而在一行的末尾输入两个空格（或一个反斜杠）并不理想。特别是如果你在流动文本中根本不需要软换行。

## 安装

有两种方式：

- 使用 [Obsidian社区插件浏览器](https://obsidian.md/plugins?id=hard-breaks)（推荐！）
- 手动安装插件（为什么要这样做？）：将下载的压缩文件解压到 Obsidian 的插件目录中。警告：这种方式无法自动更新！

对可能的附加功能的思考

### 在写作时自动插入硬换行

这个插件的第一个版本有一个功能，可以在编辑器中自动将软换行替换为硬换行。尽管这个功能是一个不错的想法，但由于以下原因被移除：

- 在写作时，无法检测到你是在段落内部还是在未完成（未闭合）的代码块、前置内容块等内部。
- Obsidian API 没有提供所需的事件来安全地自动化此操作：编辑器更改无效（参见上一点），文件更改无效（Obsidian 会定期保存文件，因此在写作时会改变文档）。希望将来能改变这一点。这将是很好的！

### 强制在多个文档中插入换行符

另一个命令可以让您不仅在当前文档中强制插入硬换行符，还可以在可选择的一组文档中（整个文件夹、整个存储库等）插入硬换行符。这可能会在将来被添加进来。

## 开发

首先，使用以下命令安装依赖项：

```bash
npm i
```

然后，可以使用以下命令编译插件：

```bash
npm run build
```

这将在项目根目录中创建一个 `main.js` 文件，该文件是插件的入口点。

要进行测试，必须将 `main.js` 和 `manifest.json` 放置在 `.obsidian/plugins/hard-breaks/` 文件夹中（位于您的存储库中），以便在下次启动 Obsidian 时被识别。

## 致谢

该插件基于以下项目：

- [remark](https://github.com/remarkjs/remark)
- [unified](https://github.com/unifiedjs/unified)
- [unist-util-select](https://github.com/syntax-tree/unist-util-select)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter)

此外，感谢 [THeK3nger](https://github.com/THeK3nger) 提供的优秀的 [Obsidian 插件项目模板](https://github.com/THeK3nger/obsidian-plugin-template)。它使事情变得更加容易。

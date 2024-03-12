---
uid: 20231220115812
title: Obsidian 插件：【Readme】Air Quotes
tags: ['obsidian插件', 'readme']
description: 边输入边搜索并插入源文本中的引用
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Air Quotes

> [!Note] 插件名片
> - 插件名称：Air Quotes
> - 插件作者：Alan Grainger
> - 插件说明：边输入边搜索并插入源文本中的引用
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/alangrainger/obsidian-air-quotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?air-quotes)

## 概述

边输入边搜索并插入源文本中的引用

![Air Quotes](https://cdn.pkmer.cn/covers/air-quotes.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alangrainger/obsidian-air-quotes/main/README.md)

---

## Readme(翻译）

下面是 [[air-quotes]] 插件的自述翻译

# 空气引号插件

![](https://img.shields.io/github/license/alangrainger/obsidian-air-quotes) ![](https://img.shields.io/github/v/release/alangrainger/obsidian-air-quotes?style=flat-square) ![](https://img.shields.io/github/downloads/alangrainger/obsidian-air-quotes/total)

我喜欢在笔记本电脑或手机上阅读纸质书籍或电子阅读器上的书籍，并在阅读时做笔记，但是从书中摘录引用会严重打断我的思路。

现有的解决方案基本上有两种：

- 自己重新输入整个引用，或者
- 使用高亮/截图并与类似 Readwise 的工具同步。

Obsidian 的**空气引号**是一种从源文本中几乎即时插入直接引用的方法。

以下是我目前正在阅读的书籍的演示：

我找到了一句很棒的引用，我想要插入它。我开始输入引用的前几个单词，它会立即在书中找到。我使用箭头键增加/减少引用的大小，然后按 Enter 键将其插入到我的笔记中。

![](https://cdn.pkmer.cn/covers/air-quotes_2_0.gif)

以下是使用纸质书籍的演示。当然，前提是您还需要一本电子书。使用移动设备进行此操作非常方便 - 非常快速的笔记记录体验。

[![](https://cdn.pkmer.cn/covers/air-quotes_2_1.jpeg!pkmer)](https://www.youtube.com/watch?v=G-hpPOMCQys)

它是如何工作的

#### 步骤 1

首先，您需要在您的保险库中拥有一本以 Markdown 格式编写的书籍版本。这是引用文本的源。

使用 [Pandoc](https://pandoc.org/) 可以轻松将几乎任何内容转换为 Markdown 格式。

您不需要使用 Air Quotes 插件来完成转换 - 您可以自己进行转换，但如果您使用的是 Windows 操作系统，

插件中有一个命令可以为您执行转换（需要先安装 Pandoc）。

我在 Windows 中使用的具体 Pandoc 命令是：

```
pandoc -s "c:\Path\To\Source.epub" -t markdown_strict-raw_html-native_divs-native_spans-fenced_divs-bracketed_spans --wrap=none -o "c:\Obsidian folder\Some\Path\Output.md"
```

#### 第二步

将源文本注释链接到当前注释。这是你的 Obsidian 保险库中的 Markdown（或纯文本）格式的注释。

你可以使用标准的 YAML 格式：

```
---
source_text: [[路径/到/神奇的书]]
---
```

或者使用 Dataview 格式：

```
source_text:: [[路径/到/神奇的书]]
```

#### 第三步

就是这样！现在你可以运行“插入引用”命令了。

常见问题解答

**这个工具在手机上可以使用吗？**

可以的。你可能需要在桌面上添加源文本，因为 Pandoc 不支持手机，但插入引用功能完全正常。

**为什么不使用内置的块链接 `#^`，它已经有自己的搜索功能了？**

1. 我不喜欢模糊搜索。如果你输入的单词在书中非常常见，你会得到很多错误的结果，甚至可能找不到正确的结果。
2. 我喜欢使用箭头键来增加/减少引用的大小的功能。




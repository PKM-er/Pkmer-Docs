---
uid: 2023120719411747
title: Obsidian 插件：【Readme】Rant-Lang
tags: ['obsidian插件', 'readme']
description: Rant是一个高级过程模板语言的薄包装。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Rant-Lang

> [!Note] 插件名片
> - 插件名称：Rant-Lang
> - 插件作者：Leander Neiß
> - 插件说明：Rant 是一个高级过程模板语言的薄包装。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lanice/obsidian-rant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-rant)

## 概述

Rant 是一个高级过程模板语言的薄包装。

![Rant-Lang](https://cdn.pkmer.cn/covers/obsidian-rant.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lanice/obsidian-rant/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-rant]] 插件的自述翻译

# Obsidian Rant-Lang

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/lanice/obsidian-rant?style=for-the-badge)

![GitHub所有发布](https://img.shields.io/github/downloads/lanice/obsidian-rant/total?style=for-the-badge)

这是一个围绕 [Rant语言](https://rant-lang.org/) Rust 库的薄包装，用于在 Obsidian 中使用。

> "**Rant**是一种高级过程化模板语言，具有多种工具，可轻松创建动态代码模板、游戏对话、故事、名称生成器、测试数据等等。" - 来自 [Rant的GitHub页面](https://github.com/rant-lang/rant)

## 目录

- [使用方法](#usage)
- [示例](#examples)
  - [内联](#inline)
  - [样式](#styling)
  - [链接](#links)
  - [骰子掷子](#dice-roller)
  - [列表](#lists)
- [嵌入Rant块](#embedding-rant-blocks)
  - [内联](#inline-1)
  - [在代码块中](#within-codeblocks)
- [安装](#installation)
  - [从Obsidian内部安装](#from-within-obsidian)
  - [通过BRAT安装](#via-brat)
  - [手动安装](#manually)

## 用法

使用 `rant` 类型的代码块，您可以在其中输入 Rant 程序。

然后使用 Rant 编译和执行该程序，并在 Obsidian 预览模式中显示结果。

使用命令 `Re-rant with random seed (active file)`（默认快捷键：`Cmd+R`/`Ctrl+R`）在活动（预览）文件中再次运行 Rant 以处理每个块。

还可以通过在内联代码块前加上 "`rant:`" 来插入 Rant 程序。

在 `rant` 块（包括内联和代码块）中，程序的结果将使用 Obsidian MarkdownParser 进行渲染。

这意味着您可以在 `rant` 块中添加样式、链接或其他 Markdown 处理元素，并且它们将被相应地渲染。

为了避免 Rant 语法错误，您可以将这些元素用双引号括起来，因为 Rant 将双引号内的所有内容视为 [字符串字面量](https://docs.rant-lang.org/language/text.html#string-literals)，并且不会对内容进行求值。

对于常见的 Markdown 操作，Rant 上下文中添加了以下全局函数：`bold`、`italic`、`bold-italic`、`highlight`、`link`

您还可以使用 [块链接](https://help.obsidian.md/How+to/Link+to+blocks) 将现有 rant 代码块的结果嵌入到任何其他文档或其他 rant 块中，请参阅 [这些示例](#embedding-rant-blocks) 了解详细信息。

一个产生洗牌的扑克牌的 Rant 程序，取自 [官方Rant示例](https://github.com/rant-lang/rant/tree/master/examples/rant)：

````markdown
```rant
[shuffle: 
  [rep: 2] {(:Joker)} 
  [cat: **(A;2;3;4;5;6;7;8;9;10;J;Q;K); **(♠;♥;♣;♦) |> list]
]
```
````

可能会产生以下输出（每次重新运行都会有不同的顺序）：

![Cards example](https://cdn.pkmer.cn/covers/obsidian-rant_1_2.png!pkmer)

### 内联

一个内联的 Rant 程序：

````markdown
这个内联的Rant块是 `rant: {neat|awesome|fantastic}`！
````

结果：

![内联示例](https://cdn.pkmer.cn/covers/obsidian-rant_1_3.png!pkmer)

### 样式化

这是一个使用全局 markdown 函数应用 markdown 样式的示例（在 `bold` 函数之前的单个反引号用作 [提示](https://docs.rant-lang.org/language/text.html#hinting)）：

````markdown
```rant
`[bold: {Hello|Hi|Hey}] world!
```
````

结果：

![样式化示例](https://cdn.pkmer.cn/covers/obsidian-rant_1_4.png!pkmer)

### 链接

您可以在 Rant 代码块中使用任何形式的链接，并且它会正确地渲染（包括悬停时的页面预览）：

````markdown
```rant
[rep:10][sep:"-"]{[link: A Page]|"[External link](https://www.wikipedia.org)"|Just text}
```
````

结果：

![Link example](https://cdn.pkmer.cn/covers/obsidian-rant_1_5.png!pkmer)

### 骰子掷出器

在 Rant 块中使用 [骰子掷出器插件](https://github.com/valentine195/obsidian-dice-roller) 的示例：

````markdown
```rant
突然 "`dice: 2d4`" {goblins|dragons|gelatinous cubes} 向你冲过来！
```
````

结果：

![骰子掷出器示例](https://cdn.pkmer.cn/covers/obsidian-rant_1_6.png!pkmer)

### 列表

Rant 程序可以输出如下的列表：

````markdown
```rant
各种东西的列表：\n
[rep:5][sep:\n]{"- [[A page]]"|"- Just text"|"- `dice: 2d12`"}
```
````

结果：

![列表示例](https://cdn.pkmer.cn/covers/obsidian-rant_1_7.png!pkmer)

嵌入 Rant 块

### 内联

当你在一个名为 `Programs` 的文档中有一个称为 `rant` 的代码块，你想要将其嵌入到另一个文档中时，首先使用 `^` 符号给它一个 ID：

````markdown
```rant
{heads|tails|edge}
```
^coin-flip
````

然后你可以这样嵌入它：

````markdown
Flipping a coin... It landed on `rant: [[Programs#^coin-flip]]`!
````

### 在代码块中

在 rant 代码块中，您可以通过在代码块的开头使用 `import: [[File#^{block-id}]]` 语句来导入其他文档中的 rant 代码块。

> 重要提示：`import:` 语句只能作为 rant 代码块的第一行使用。一旦任何行不以 `import:` 开头，就会启动常规的 `rant` 程序，您将无法再导入其他内容。每行只能导入一个。

以下是一个示例，我们定义了定义函数的 rant 代码块，导入该代码块，并调用这些函数：

````markdown
```rant
[$flip-coin: heads; tails] {
    {<heads>|<tails>}
}
```
^flip-coin

```rant
import: [[Programs#^flip-coin]]

[$flip-coin-with-values] {
    [flip-coin: Heads; Tails]
}
```
^flip-coin-with-values

```rant
import: [[Programs#^flip-coin-with-values]]

"Flipping a coin... "[flip-coin-with-values]!
```
````

正如您所见，支持嵌套的 `import`，因此您可以在一个代码块中导入一个（或多个）程序，然后在另一个代码块中导入该代码块，依此类推。

## 安装

### 从 Obsidian 内部

1. 打开设置 > 社区插件
2. 确保“安全模式”处于关闭状态
3. 在社区插件浏览器中搜索“Rant-Lang”
4. 安装并启用
5. 获得收益

### 通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 方式

1. 将 `lanice/obsidian-rant` 添加到 `Obsidian42 - BRAT` 设置菜单中的 Beta 插件列表中
2. 在 [Community plugins](https://help.obsidian.md/Advanced+topics/Community+plugins) 设置菜单中启用插件

### 手动安装

1. 下载 [最新版本](https://github.com/lanice/obsidian-rant/releases/latest)
2. 从压缩包中提取 `obsidian-rant` 文件夹到你的笔记库 `<vault>/.obsidian/plugins/`
3. 重新加载 Obsidian
4. 在 [Community plugins](https://help.obsidian.md/Advanced+topics/Community+plugins) 设置菜单中启用插件




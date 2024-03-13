---
uid: 2023080322255139
title: Obsidian 插件：Regex Pipeline
tags: ['文件重构', 'obsidian插件', 'readme']
description: 允许用户设置自定义正则规则以自动格式化笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Regex Pipeline

> [!Note] 插件名片
> - 插件名称：Regex Pipeline
> - 插件作者：No3371
> - 插件说明：允许用户设置自定义正则规则以自动格式化笔记。
> - 插件分类：[' 文件重构 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/No3371/obsidian-regex-pipeline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-regex-pipeline)

## 概述

允许用户设置自定义正则规则以自动格式化笔记。

![Regex Pipeline](https://cdn.pkmer.cn/covers/obsidian-regex-pipeline_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/No3371/obsidian-regex-pipeline/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-regex-pipeline]] 插件的自述翻译

# 正则表达式管道

![](https://img.shields.io/github/downloads/no3371/obsidian-regex-pipeline/total?style=plastic)

（欢迎在讨论中共享规则集）

正则表达式管道是一款 [Obsidian](https://obsidian.md/) 插件，允许用户设置自定义的正则表达式规则来自动格式化笔记，这在构建个人知识数据库等场景中特别有用，因为你经常从相同的来源剪辑网页。

![](https://raw.githubusercontent.com/No3371/obsidian-regex-pipeline/master/assets/regex-pipeline-newmenu.gif)

最新更新：v1.3

1. 不再需要用空白替换 `x`（之前的规则不会受到影响，`x` 仍然有效）。

```
:: 任何"SEARCH"都变成""
"SEARCH"->""
```

1. 现在支持更灵活的格式。可读性更高 ++

✅ 以下格式有效：

```
"SEARCH"->"REPLACE"
```

```
"SEARCH"
->"REPLACE"
```

```
"SEARCH"
->
"REPLACE"
```

```
"SEARCH"->
"REPLACE"
```

❌ 以下格式无效（不允许在中间有空行；在 `->` 之前和之后只允许有换行符）：

```
"SEARCH"

->
"REPLACE"
```

```
"SEARCH"->

"REPLACE"
```

```
"SEARCH"
->

"REPLACE"
```

## 用法

> [Mr. Partan](www.lpartan.com) 提供了一个关于如何使用该插件的很好的 [说明](https://gist.github.com/No3371/f1750b178376f0659df6650ccaf57c12)，如果你对正则表达式或软件的使用不熟悉，我推荐阅读它。（2021 年 9 月，v1.0.9）

首先，启用插件，会在 `.obsidian/regex-rulesets/` 目录下创建一个名为 index.txt 的文件。由于 Obsidian 保护您的磁盘的方式，您必须指定要读取的规则集文件，这就是为什么我们需要一个索引文件。

从 1.0.8 版本开始，插件包含了一个应用内的“添加规则集”功能。您可以通过菜单中的 + 按钮添加规则集，但是您仍然需要转到 `.obsidian/regex-rulesets/` 目录并修改您想要编辑/删除的文件，主要是因为任何更改已经存在于您的磁盘上的内容的 UI 都不安全，而且很难提供像常见编辑器（例如 VSCode）那样良好的编辑体验。

从 1.1.0 版本开始，您可以通过右键菜单应用规则集。可用选项的数量可以在设置中进行调整。

从 1.2.0 版本开始，在设置中切换“快速命令”后，可以通过 Obsidian 的命令系统调用快速规则集（上面提到的）。

#### 编写规则集

现在您可以开始编辑自己的规则集。

一个规则集包含一个或多个规则，格式如下：

```
:: 任何 "SEARCH" 变为 "REPLACE"
"SEARCH"->"REPLACE"
```

#### 多行替换字符串

```
"SEARCH"->"REP
LACE"
:: 任何 "SEARCH" 都会变成 "REP
:: LACE"
```

#### 正则表达式标志

默认情况下，`gm`（多行）标志会附加到**搜索**正则表达式中，您可以通过提供自己的标志来覆盖此行为，例如，可以使用以下方式使用 `gmu` 标志：

```
"SEARCH"gmu->"REPLACE"
```

请注意，`gm` 标志基本上对于此插件的实用性是必需的，您很少希望仅替换一个出现或仅对包含 1 行的注释进行操作。

#### 替换为空

由于插件的解析规则，替换字符串不能是长度为零的字符串，如果你想用正则表达式删除（替换为空），你需要添加一个自定义的 `x` 标志：

```
"SEARCH"->"REPLACE"x
:: 任何"SEARCH"都会变成""
```

在这种情况下，无论 REPLACE 是什么，插件都会将其视为 ""。

#### 索引

规则集必须保存在 `.obsidian/regex-rulesets/` 目录下，并且必须在 `index.txt` 中包含，每行一个文件。顺序也决定了应用程序中的显示顺序。

#### 应用规则集

点击插件的侧边栏按钮以显示规则集菜单，选择您的规则集，然后它将应用。

该菜单是一个命令，因此您也可以将其绑定到快捷键上。

**注意**：该插件仅支持将规则应用于所选内容，如果有任何内容被选中，只有选中内容会被修改！

## 示例

**NumberToAlphabet**

.obsidian/regex-rulesets/number-to-alphabet.txt

```
"1"->"A"
"2"->"B"
"3"->"C"
"4"->"D"
"5"->"E"
"6"->"F"
"7"->"G"
"8"->"H"
"9"->"I"
```

**Table_c2**

这个规则集可以帮助您将选定的内容转换为 2 列的表格！每 2 行非空行将形成一行。

.obsidian/regex-rulesets/Table_c2

```
"^(.+)$\n\n^(.+)$"->"| $1 | $2 |"
```

请查看 [samples文件夹](https://github.com/No3371/obsidian-regex-pipeline/tree/master/samples) 以获取更多示例，包括像上面的 gif 那样非常复杂的示例！

## 推荐

- Markdownload（<https://github.com/deathau/markdownload>）：用于剪辑网页，请不要忘记根据您的编辑偏好进行配置。

常见问题解答

我的规则集文件不起作用，通知显示没有替换，但我确定格式是正确的。

可能是你的规则集文件使用的是非 UTF8 编码，这在一些编辑器应用程序中会发生，请参考 [#12](https://github.com/No3371/obsidian-regex-pipeline/issues/12)。

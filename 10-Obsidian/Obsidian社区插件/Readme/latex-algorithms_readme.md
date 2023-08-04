---
uid: 2023080322211540
title: Obsidian 插件：【Readme】LaTeX Algorithms
tags: ['obsidian插件', 'readme']
description: 在LaTeX中编写算法块的插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：LaTeX Algorithms

> [!Note] 插件名片
> - 插件名称：LaTeX Algorithms
> - 插件作者：SamZhang02
> - 插件说明：在 LaTeX 中编写算法块的插件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SamZhang02/obsidian-latex-algorithms)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-algorithms)

## 概述

在 LaTeX 中编写算法块的插件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SamZhang02/obsidian-latex-algorithms/master/README.md)
>

---

## Readme(翻译）

下面是 [[latex-algorithms]] 插件的自述翻译

# Obsidian 中的 LaTeX 算法

一个用于在 Obsidian 中编写算法和伪代码的简单插件。

<p align="center">
  <img src="media/short_demo.gif">
</p>

关于

Obsidian 是一个很棒的笔记工具，我经常发现自己打开 Obsidian 而不是编译一个新的 `.tex` 文档，因为它非常容易使用，而且我不需要提交这些文档。然而，Obsidian 使用 MathJax 作为其 LaTeX 功能，这不允许导入包，比如 `algpseudocode`。

我编写了这个插件，以便我可以在 Obsidian 中轻松地为我的算法和基于证明的课程做笔记。

## 用法

该插件会读取先前用户的输入，并在检测到关键词（如 `\If`、`\For` 等）时将其转换为标准的 LaTeX 算法格式。

建议在对齐的 LaTeX 块中使用此插件，并在每行的第一个字符处对齐（使用 `&`）。

<p align="center">
  <img src="media/long_demo.gif">
</p>

对于这个插件来说，一个很好的补充可能是 [Obsidian的快速LaTeX](https://github.com/joeyuping/quick_latex_obsidian) 和/或 VIM 键绑定。使用这些工具，您可以通过该插件实现相当快速的工作流程。

该插件目前的功能包括：

- 使用 `Shift+Tab` 进行快速缩进。
- 算法标题和副标题。
- 条件语句（If/ElseIf/Else，Switch cases）。
- For/While 循环。
- 证明关键词。

### 当前支持的关键字

| 标题和副标题 | 条件语句 | 循环语句 | 证明语句 |
| ----------- | -------- | -------- | -------- |
| \\Algorithm | \\If     | \\For    | \\Theorem |
| \\Input     | \\Elseif | \\EndFor | \\Lemma   |
| \\Output    | \\Else   | \\While  | \\Corollary |
| \\Ensure    | \\Endif  | \\EndWhile | \\Definition |
| \\Return    | \\Switch | \\Break  | \\Remark |
| \\State     | \\Case   | \\Continue | \\Proof |
|             | \\Default |          | \\QED |

## 鸣谢

本插件的开发使用了 [Obsidian](https://github.com/obsidianmd/obsidian-api) 的 API 包装器。

本插件的灵感主要来自于 [Quick LaTeX for Obsidian](https://github.com/joeyuping/quick_latex_obsidian)。（事实上，我的代码中的一个函数直接来自于他们，因为它非常出色）

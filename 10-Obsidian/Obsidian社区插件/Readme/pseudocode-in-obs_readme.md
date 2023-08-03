---
uid: 20230803204600
title: Obsidian 插件：【Readme】Pseudocode
tags: ['obsidian插件', 'readme']
description: 帮助在代码块中渲染类似LaTeX风格的伪代码。
author: Yaotian Liu
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pseudocode

> [!Note] 插件名片
> - 插件名称：Pseudocode
> - 插件作者：Yaotian Liu
> - 插件说明：帮助在代码块中渲染类似LaTeX风格的伪代码。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ytliu74/obsidian-pseudocode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pseudocode-in-obs)

## 概述

帮助在代码块中渲染类似LaTeX风格的伪代码。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ytliu74/obsidian-pseudocode/master/README.md)
> 

---

## Readme(翻译）

下面是 [[pseudocode-in-obs]] 插件的自述翻译


# Obsidian-Pseudocode
- [Obsidian-Pseudocode](#obsidian-pseudocode)
  - [功能](#功能)
    - [未来功能](#未来功能)
  - [使用方法](#使用方法)
    - [基本用法](#基本用法)
    - [自定义导言样式](#自定义导言样式)
      - [使用`.sty`文件](#使用sty文件)
      - [使用块内导言](#使用块内导言)
      - [支持的宏](#支持的宏)
    - [导出为可编译的LaTeX文件](#导出为可编译的LaTeX文件)
  - [安装](#安装)
  - [致谢](#致谢)

这是一个为[Obsidian](https://obsidian.md/)设计的插件，允许您在代码块中渲染类似LaTeX风格的伪代码。该插件基于[pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js)，这是一个将伪代码美观地排版为HTML的JavaScript库。

## 特点

- 直观的语法：该插件采用类似于LaTeX的输入方式，支持LaTeX算法包中的算法结构。无论是否有LaTeX经验，用户都应该会发现该语法相当直观。
- 打印质量：该插件生成的HTML输出与由LaTeX排版的出版物上打印的漂亮算法（几乎）完全相同。
- 数学公式支持：在伪代码中插入数学公式就像LaTeX一样简单。只需用`$...$`或`\(...\)`将数学表达式括起来即可。
- 在`pseudo`代码块内自动补全。（1.1.0版本发布）
- [自定义导言样式（宏）。](#preamble-style-customization)（1.2.0和1.5.0版本发布）
- [导出可编译的LaTeX文件，包括任何所需的额外宏。](#export-to-a-compilable-latex-file)（1.3.0版本发布）

### 未来功能

- [ ] 语法高亮。

使用方法

### 基本

要使用该插件，只需在Obsidian笔记中创建一个代码块，并在其中添加伪代码。然后，在代码块中添加语言指示符`pseudo`（代表"伪代码"）。插件将自动将伪代码渲染为LaTeX。

**推荐：使用命令`Pseudocode: Insert a new pseudocode block`开始。**

以下是一个示例：

```
    ```pseudo
    \begin{algorithm}
    \caption{快速排序}
    \begin{algorithmic}
      \Procedure{Quicksort}{$A, p, r$}
        \If{$p < r$}
          \State $q \gets $ \Call{Partition}{$A, p, r$}
          \State \Call{Quicksort}{$A, p, q - 1$}
          \State \Call{Quicksort}{$A, q + 1, r$}
        \EndIf
      \EndProcedure
      \Procedure{Partition}{$A, p, r$}
        \State $x \gets A[r]$
        \State $i \gets p - 1$
        \For{$j \gets p$ \To $r - 1$}
          \If{$A[j] < x$}
            \State $i \gets i + 1$
            \State 交换
            $A[i]$ 和 $A[j]$
          \EndIf
        \State 交换 $A[i]$ 和 $A[r]$
        \EndFor
      \EndProcedure
      \end{algorithmic}
    \end{algorithm}
    ```
```

这将被渲染为（要渲染行号，您需要在设置选项卡中切换）：

<div align="center">
<img src="assets/example.png" alt="example" width="70%">
</div>

### 导言样式定制

使用`.sty`文件

您可以使用`.sty`文件（实际上后缀无关紧要）来自定义一些宏。插件将根据设置来定位文件。默认路径为`preamble.sty`。

在更改导言文件后，请重新加载插件。

#### 在块内引导中使用

您可以在`\begin{algorithm}`之前的伪代码块中编写自己的宏。这些宏仅适用于此特定块内。

#### 支持的宏

目前支持的宏可以在[此链接](https://katex.org/docs/supported.html#macros)和下方找到（可能不完全支持）：

1. `\DeclarePairedDelimiter`
2. `\DeclareMathOperator*`
3. `\DeclareMathOperator`

您可以通过单击每个伪代码块右下角的“导出到剪贴板”按钮，轻松导出一个可编译的LaTeX文件。插件将自动将一个可编译的LaTeX文件，包括任何所需的额外宏，生成到您的剪贴板中。

## 安装

:tada: 伪代码插件现在可以在Obsidian的社区插件部分找到。要安装它，只需搜索**Pseudocode**并点击安装按钮。

<!-- ### 使用[BRAT](https://github.com/TfTHacker/obsidian42-brat#Quick-Guide-for-using-BRAT)

1. 从Obsidian的社区插件中安装**Obsidian-42 BRAT**。
2. 打开命令面板，运行命令`BRAT: Add a beta plugin for testing`。输入此存储库的URL `https://github.com/Yaotian-Liu/obsidian-pseudocode`。
3. 点击**Add Plugin** -- 等待几秒钟，BRAT会告诉你正在发生什么。
4. 在BRAT确认安装后，在设置中转到**Community plugins**选项卡。
5. 刷新列表，找到`Pseudocode`并启用它。 -->

### 手动安装

1. 在Obsidian的插件文件夹（即{你的Vault}/.obsidian/plugins）中创建一个名为`pseudocode-in-obs`的文件夹。
2. 从[发布页面](https://github.com/yaotian-liu/obsidian-pseudocode/releases/latest)下载`main.js`、`manifest.json`和`styles.css`，并将它们放入步骤1中创建的文件夹中。
3. 打开Obsidian，在“Community Plugins”设置页面中启用该插件。
4. 尽情使用。

## 鸣谢

该插件基于[pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js)开发，这是一个将伪代码美观地排版为HTML的JavaScript库。非常感谢pseudocode.js团队的出色工作！




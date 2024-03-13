---
uid: 2024022122532382
title: Obsidian 插件：【Readme】Wypst
tags: ['obsidian插件', 'readme']
description: 使用Typst渲染数学块
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Wypst

> [!Note] 插件名片
> - 插件名称：Wypst
> - 插件作者：0xpapercut
> - 插件说明：使用 Typst 渲染数学块
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/0xpapercut/obsidian-wypst)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wypst)

## 概述

使用 Typst 渲染数学块

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/0xpapercut/obsidian-wypst/master/README.md)

---

## Readme(翻译）

下面是 [[wypst]] 插件的自述翻译

【机翻】

# Wypst

在 Obsidian 中对 [Typst](https://github.com/typst/typst) 进行高质量渲染，由 [wypst](https://github.com/0xpapercut/wypst) 提供支持。

## 用法

此插件覆盖了常规的数学块（`$<...>$` 和 `$$<...>$$`），使它们呈现为 Typst 数学。

![示例](https://cdn.pkmer.cn/covers/wypst_2_0.png!pkmer)

## 兼容性

为了最大限度地与 LaTeX 数学块兼容，当遇到诸如 `\begin{environment}<...>\end{environment}` 或 `\<some-symbol>` 等结构时，渲染后端会切换到 MathJax。

例如，`$pi$` 将使用 Typst 进行渲染，而 `$\pi$` 将被渲染为常规的 LaTeX。

一般来说，如果 Typst 和 LaTeX 中的表达式是等价的，它们应该渲染为 _ 完全相同 _ 的输出。如果不是这种情况，您可以将其报告为问题。

## 问题

我欢迎所有遇到问题的人在 [0xpapercut/obsidian-wypst](https://github.com/0xpapercut/obsidian-wypst/issues/new) 上开启一个问题。

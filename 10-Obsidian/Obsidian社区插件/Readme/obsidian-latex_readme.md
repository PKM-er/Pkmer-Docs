---
uid: 2023080322180156
title: Obsidian 插件：Extended MathJax
tags: ['数学', 'obsidian插件', 'readme']
description: 启用额外的 MathJax 包并为 MathJax 添加全局序言
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Extended MathJax

> [!Note] 插件名片
> - 插件名称：Extended MathJax
> - 插件作者：Xavier Denis & Ng Wei En
> - 插件说明：启用额外的 MathJax 包并为 MathJax 添加全局序言
> - 插件分类：[' 数学 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/wei2912/obsidian-latex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-latex)

## 概述

启用额外的 MathJax 包并为 MathJax 添加全局序言

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wei2912/obsidian-latex/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-latex]] 插件的自述翻译

## Obsidian 扩展 MathJax

该插件通过在启动时加载 MathJax 导言文件来扩展 Obsidian 中的 MathJax 支持。它还启用了一些额外的 MathJax 扩展（特别是 `mhchem` 和 `bussproofs`）。

导言文件存储在 vault 的根目录中的 `preamble.sty` 文件中。要重新加载导言的更改，请使用 `Cmd + R` / `Ctrl + R` 刷新 vault。

### 安装

1. 从 Obsidian 社区插件浏览器中安装 'Extended MathJax'。
2. 使用您选择的文本编辑器，在您的 vault 根目录中创建一个 `preamble.sty` 文件。
3. 将您的宏添加到 `preamble.sty` 中。

### 更改前言

如果您对前言进行了更改，您需要重新加载它。要做到这一点，请运行 `⌘ + R` / `Ctrl + R` 来刷新 Obsidian。这将重新加载所有的 Obsidian 插件并更新您的前言。

### 示例

查看 `examples/stlc` 以获取使用前言定义自定义宏的黑曜石保险库的示例。

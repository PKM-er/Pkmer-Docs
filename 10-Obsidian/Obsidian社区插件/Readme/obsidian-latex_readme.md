---
uid: 20230803203930
title: Obsidian 插件：【Readme】Extended MathJax
tags: ['数学', 'obsidian插件', 'readme']
description: 启用额外的 MathJax 包并为 MathJax 添加全局序言
author: Xavier Denis & Ng Wei En
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
> - 插件分类：['数学', 'obsidian插件', 'readme']
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


## Obsidian扩展MathJax

该插件通过在启动时加载MathJax导言文件来扩展Obsidian中的MathJax支持。它还启用了一些额外的MathJax扩展（特别是`mhchem`和`bussproofs`）。

导言文件存储在vault的根目录中的`preamble.sty`文件中。要重新加载导言的更改，请使用`Cmd + R` / `Ctrl + R`刷新vault。

### 安装

1. 从Obsidian社区插件浏览器中安装'Extended MathJax'。
2. 使用您选择的文本编辑器，在您的vault根目录中创建一个`preamble.sty`文件。
3. 将您的宏添加到`preamble.sty`中。

### 更改前言

如果您对前言进行了更改，您需要重新加载它。要做到这一点，请运行 `⌘ + R` / `Ctrl + R` 来刷新 Obsidian。这将重新加载所有的 Obsidian 插件并更新您的前言。

### 示例

查看 `examples/stlc` 以获取使用前言定义自定义宏的黑曜石保险库的示例。




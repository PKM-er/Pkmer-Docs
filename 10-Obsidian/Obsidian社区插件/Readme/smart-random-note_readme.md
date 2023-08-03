---
uid: 2023080322270625
title: Obsidian 插件：Smart Random Note
tags: ['搜索/排序', '插件', 'obsidian插件', 'readme']
description: 插件增强了核心插件笔记漫游的功能。让每日随机笔记，增添了三个新功能。从搜索中打开随机说明：从搜索结果列表中打开随机说明。从搜索中插入光标上的链接到随机笔记：插入一个链接，其中光标位于搜索结果列表中的随机笔记中。打开标记的随机笔记：打开具有选定标签的随机音符。打开随机笔记：行为与核心随机音符插件相似。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Smart Random Note

> [!Note] 插件名片
> - 插件名称：Smart Random Note
> - 插件作者：Eric Hall
> - 插件说明：插件增强了核心插件笔记漫游的功能。让每日随机笔记，增添了三个新功能。从搜索中打开随机说明：从搜索结果列表中打开随机说明。从搜索中插入光标上的链接到随机笔记：插入一个链接，其中光标位于搜索结果列表中的随机笔记中。打开标记的随机笔记：打开具有选定标签的随机音符。打开随机笔记：行为与核心随机音符插件相似。
> - 插件分类：[' 搜索/排序 ', ' 插件 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/erichalldev/obsidian-smart-random-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-random-note)

## 概述

插件增强了核心插件笔记漫游的功能。让每日随机笔记，增添了三个新功能。从搜索中打开随机说明：从搜索结果列表中打开随机说明。从搜索中插入光标上的链接到随机笔记：插入一个链接，其中光标位于搜索结果列表中的随机笔记中。打开标记的随机笔记：打开具有选定标签的随机音符。打开随机笔记：行为与核心随机音符插件相似。

![Smart Random Note](https://cdn.pkmer.cn/covers/smart-random-note.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/erichalldev/obsidian-smart-random-note/master/README.md)
>

---

## Readme(翻译）

下面是 [[smart-random-note]] 插件的自述翻译

![下载量](https://img.shields.io/github/downloads/erichalldev/obsidian-smart-random-note/total.svg)

# 智能随机笔记 Obsidian 插件

该插件增强了打开随机笔记的功能。

有三个可用的命令：

- 从搜索结果中打开随机笔记：从搜索结果列表中打开一个随机笔记。
- 在光标位置插入指向随机笔记的链接：在光标位置插入一个链接，指向搜索结果列表中的一个随机笔记。
- 打开带有标签的随机笔记：打开一个带有选定标签的随机笔记。
- 打开随机笔记：与核心随机笔记插件类似的行为。

![截图](https://raw.githubusercontent.com/erichalldev/obsidian-smart-random-note/master/screenshot.gif)

## 未来计划

- 最初我计划实现间隔重复功能，但是已经有其他插件很好地处理了这个领域。它们是：
    - [Flashcards](https://github.com/reuseman/flashcards-obsidian)
    - [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition)
    - [Recall](https://github.com/martin-jw/obsidian-recall)
- 我希望尽可能地接近 Unix 的格言“做好一件事”，因此任何功能和改进都必须与其核心功能保持密切联系：以更大的控制打开随机笔记。

安装

### 从 Obsidian 内部

从 Obsidian 0.9.8 开始，您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索 "Smart Random Note"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活插件

兼容性

自定义插件在 Obsidian 版本 0.9.7 中得到官方支持。该插件当前针对 API 版本 0.9.15，但应与 0.9.7 或更高版本兼容。

版本历史

### 0.2.1

- 添加命令，在光标处插入一个链接到搜索结果中的随机笔记
- 修复当选择打开一个图片时打开一个新的 Markdown 笔记的问题。除了 Markdown 文件，不支持打开其他文件。

### 0.1.3

- 修复了在 Obsidian 0.9.18 中搜索命令中打开随机笔记的错误问题

### 0.1.2

- 添加对 Obsidian 0.9.16 中引入的 frontmatter 标签的支持

### 0.1.1

- 添加命令以从当前搜索结果中打开随机笔记
- 添加设置以在功能区中添加一个按钮，用于从当前搜索结果中打开随机笔记
- 添加设置以在活动窗格或新窗格中打开随机笔记

### 0.0.5

- 初始版本
- 添加了一个命令，可以打开所有笔记中的一个随机笔记
- 添加了一个命令，可以打开给定标签的一个随机笔记




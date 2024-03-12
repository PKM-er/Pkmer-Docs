---
uid: 20231220115812
title: Obsidian 插件：【Readme】Review
tags: ['链接处理', '日期相关', 'obsidian插件', 'readme']
description: 允许你将当前的笔记添加到未来的笔记(或者过去的笔记。以确保你在指定的日期，有机会再次能够回顾该笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Review

> [!Note] 插件名片
> - 插件名称：Review
> - 插件作者：ryanjamurphy
> - 插件说明：允许你将当前的笔记添加到未来的笔记 (或者过去的笔记。以确保你在指定的日期，有机会再次能够回顾该笔记。
> - 插件分类：[' 链接处理 ', ' 日期相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ryanjamurphy/review-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?review-obsidian)

## 概述

允许你将当前的笔记添加到未来的笔记 (或者过去的笔记。以确保你在指定的日期，有机会再次能够回顾该笔记。

![Review](https://cdn.pkmer.cn/covers/review-obsidian_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryanjamurphy/review-obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[review-obsidian]] 插件的自述翻译

## 评论

一个用于 [Obsidian](https://obsidian.md) 的插件。

评论允许您将当前的笔记添加到未来的笔记中（或者如果您愿意的话，也可以添加到过去的笔记中），以确保在那个日期再次进行评论。

这对于项目评论（例如，完成任务），作为一个提示文件（例如，再次完成任务），间隔重复以及提醒您过去的失败或昨天您做的尴尬的事情非常有用。

评论与 [自然语言日期插件](https://github.com/argenos/nldates-obsidian) 集成（因此需要该插件）。请先安装它。

### 设置

确保你**查看**（嘿）插件的设置来分配：

- 评论部分的标题（默认为 `## Review`）。
- 调用评论时每行添加的前缀（例如，使用 `!` 将使每个块自动成为嵌入块）。
- 调用评论块时每个块添加的前缀（例如，使用 `!` 将使每个块自动成为嵌入块）。
- 每个评论的默认值（例如，如果你使用 `tomorrow`，当你调用评论时，只需按<kbd>enter</kbd>将你要评论的事物放在明天的日记中）。

### 如何使用

- 使用命令面板访问“Review”命令（或为其分配一个热键）。
- 一旦调用命令面板，插件会要求输入一个日期。可以使用自然语言（如“明天”，“三周后”，“两天前”，“11 月 5 日”）。
- 该插件依赖于“Natural Language Dates”插件，根据该插件中的设置将您提供的日期转换为每日笔记名称。
- 然后，该插件会为给定的日期创建一个新的每日笔记，并添加一个新的复习部分（如果已经存在一个每日笔记，则将此部分追加到该笔记中）。

### 演示

![一个gif展示了如上所述的插件的使用。](https://cdn.pkmer.cn/covers/review-obsidian_1_0.gif)

### 手动安装插件

- 将 `main.js` 和 `manifest.json` 复制到你的 vault 的插件文件夹中，路径为 `[YourVaultFolder]/.obsidian/plugins/review-obsidian/`。




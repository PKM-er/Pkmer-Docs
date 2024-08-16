---
uid: 20240603103524
title: Obsidian 插件：Smart Gantt 简单易用的甘特图生成插件
tags: ['图表与可视化', '任务管理', '数据处理', 'obsidian插件']
description: 智能地从您的任务中生成甘特图
author: OS
type: auto
draft: false
editable: false
modified: 20240816004759
---

# Obsidian 插件：Smart Gantt 简单易用的甘特图生成插件

## 概述

Obsidian Smart Gantt 可以智能地根据你笔记中的任务，在 Obsidian 中生成甘特图。

一般来说如果你想要在笔记中生成甘特图，可以考虑 [[Mermaid语法]] 或者其他插件如 [[obsidian-charts]] 等，但这些插件和语法，都需要进行一定的学习，而且面对甘特图这种需要经常调节变更的，每次都需修改特殊语法格式，显然并不经济。

通过此插件，你可以跟踪你的任务，并生成基于它们的甘特图。你可以使用右侧边栏或在文件中创建 Gantt 代码块来使用插件。插件的限制是它只能跟踪有效的任务，并且任务中必须包含可以解释为时间/时间范围的字符串。此外，插件对自然语言处理不完美，对于只有年份的文本无法解析，时间（小时、分钟）必须在日期之后。相对时间诸如“今天”、“明天”、“昨天”、“上周五”、“5 小时后”在理论上可以工作，但实际上并不实用。插件无法解析相对时间。

> [!Note] 插件名片
> - 插件名称：Smart Gantt
> - 插件作者：Nhan Nguyen
> - 插件说明：智能地从您的任务中生成甘特图
> - 插件分类：[' 图表与可视化 ', ' 任务管理 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/nhannht/obsidian-smart-gantt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-gantt)

## 效果&特性

![Smart Gantt](https://cdn.pkmer.cn/covers/smart-gantt.png!pkmer)

- 跟踪在仓库中的所有任务【依赖 md 任务语法】
- 基于它们生成甘特图
- 点击可以快速跳到您的任务位置。

## 使用

- 使用插件特有的格式，添加甘特图到你的笔记

 ````语法
 ```gantt
 ```
 ````
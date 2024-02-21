---
uid: 2024022121243785
title: Obsidian 插件：【Readme】Single File Daily Notes
tags: ['obsidian插件', 'readme']
description: 创建和管理每日笔记在一个单一的文件中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Single File Daily Notes

> [!Note] 插件名片
> - 插件名称：Single File Daily Notes
> - 插件作者：Pranav Mangal
> - 插件说明：创建和管理每日笔记在一个单一的文件中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/pranavmangal/obsidian-single-file-daily-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?single-file-daily-notes)

## 概述

创建和管理每日笔记在一个单一的文件中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pranavmangal/obsidian-single-file-daily-notes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[single-file-daily-notes]] 插件的自述翻译


# 单文件每日笔记

一个用于在单个文件中创建和管理每日笔记的 [Obsidian](https://obsidian.md) 插件。

<img src='images/showcase.png' width='755'>
## 特点
### 创建和管理每日笔记

该插件将自动为今天创建一个新的笔记，并选择虚拟条目以立即进行编辑。如果今天的笔记已经存在，它将尝试定位光标以进行追加/编辑现有笔记。

<img src='images/editing.png' width='500'>

结果是一个单一的标准Markdown文件：
```md
#### 02-01-2024, 星期二
-   条目
#### 01-01-2024，星期一
- 开始规划第一季度的目标
- 清理了储藏室，需要为新的手提箱腾出空间
- 读了几章[[黑暗森林]]
### 查看大纲视图
由于每日笔记是使用标准的Markdown标题形成的，Obsidian内置的大纲视图可以用来浏览它们。

<img src='images/outline.png' width='890'>
### 可配置性
您可以配置：
- 每日笔记文件的名称
- 文件的位置
- 用于每日笔记的标题类型
- 用于每日笔记的日期格式
## 安装

该插件可以在 Obsidian 维护的[官方社区插件列表](https://obsidian.md/plugins?id=single-file-daily-notes)上找到。

否则，该插件可以通过[BRAT](https://github.com/TfTHacker/obsidian42-brat)进行安装。
## 用法
-   打开插件设置，根据您的喜好进行配置
-   点击蝴蝶结图标或通过命令面板选择“打开每日笔记”（`⌘ + P`）来创建每日笔记文件。
-   创建完成后，该文件可以像普通文件一样打开，通过蝴蝶结图标或命令面板。
-   开始编辑！
## 为什么
Obsidian中内置的每日笔记系统相当不错，但是它是通过为每个笔记创建单独的文件来工作的。有一些插件可以更好地管理这些笔记并以不同的视图显示它们，但它们仍然不会改变底层的文件结构。

我不想在我的保险库中有数百个专门用于这些每日笔记的文件，特别是当它们单独很小的时候，这就是为什么创建了这个插件。




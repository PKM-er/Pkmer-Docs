---
uid: 2023120719441423
title: Obsidian 插件：【Readme】Task Marker
tags: ['obsidian插件', 'readme']
description: 使用热键和上下文菜单更改任务状态。完成、取消和标记任务，以及在所选任务状态之间循环。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Task Marker

> [!Note] 插件名片
> - 插件名称：Task Marker
> - 插件作者：wenlzhang
> - 插件说明：使用热键和上下文菜单更改任务状态。完成、取消和标记任务，以及在所选任务状态之间循环。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/wenlzhang/obsidian-task-marker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-task-marker)

## 概述

使用热键和上下文菜单更改任务状态。完成、取消和标记任务，以及在所选任务状态之间循环。

![Task Marker](https://cdn.pkmer.cn/covers/obsidian-task-marker_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenlzhang/obsidian-task-marker/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-task-marker]] 插件的自述翻译

# 任务标记器

[![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/wenlzhang/obsidian-task-marker)](https://github.com/wenlzhang/obsidian-task-marker/releases) ![GitHub所有发布](https://img.shields.io/github/downloads/wenlzhang/obsidian-task-marker/total?color=success)

一个 [Obsidian](https://obsidian.md/) 插件，可以使用热键和右键菜单来更改任务状态和追加文本。

## 特点

### 主要功能

- 创建任务
    - 使用 `[ ]` 标记列表项
    - 可选择附加文本，如 `📝 2023-01-01`
- 完成和取消任务
    - 使用 `[x]` 和 `[-]` 标记任务
    - 可选择附加文本，如 `✅ 2023-01-01`
- 标记任务
    - 使用 `[>]` 和 `[/]` 等状态标记任务
    - 使用快捷键标记单个任务状态
    - 可选择附加文本，如 `❎ 2023-01-01`
- 循环任务状态
    - 在配置的状态中循环，如 `[x]`、`[-]`、`[>]` 和 `[/]`
    - 在配置的状态中逆向循环
- 追加文本
    - 命令将文本，如 `📝 2023-01-01`，追加到任意行
    - 命令将文本，如 `✅ 2023-01-01`，追加到任意行
    - 命令将文本，如 `❎ 2023-01-01`，追加到任意行
- 自动追加文本 📝 2023-03-04
    - 根据任务/行的状态自动追加文本

![演示](https://cdn.pkmer.cn/covers/obsidian-task-marker_2_0.gif)

### 其他

- 支持对以 `-+*` 开头的项目进行操作 📝 2023-07-24

使用方法

### 如何使用

详见 [使用方法](docs/Usage.md)。

### 如何配置

任务标记器使用 [moment.js](https://momentjs.com/docs/#/displaying/format/) 来格式化要附加的日期和时间。此外，需要用**方括号**将不属于格式字符串的内容括起来。

- 例如，如果希望附加的文本是 `[completion::2023-01-01]`，那么在设置中需要配置 `[[completion::]YYYY-MM-DD[]]`。

有关更详细的设置，请参阅 [设置](docs/Setting.md)。

### 如何安装

从 Obsidian 社区插件商店安装插件：

1. 进入 `设置 > 社区插件`，禁用 " 限制模式 "
2. 点击 " 浏览 " 搜索插件，输入 " 任务标记 "
3. 选择**任务标记**并点击 " 安装 "
4. 启用任务标记并按需配置

<!-- 该插件已提交至Obsidian **社区插件**进行审核，但目前尚未在社区插件商店中提供。暂时有两种方法可以安装该插件：

- 手动下载`main.js`、`manifest.json`和`styles.css`，并将它们放置在Obsidian存储库的`.obsidian/obsidian-task-marker`文件夹中。
- 或者，您可以使用[obsidian42-brat](https://github.com/TfTHacker/obsidian42-brat)来安装和更新该插件。 -->

### 资源

有关详细信息，请参阅 [资源](docs/Resource.md)。

开发过程

您可以从头开始查看此插件的开发过程，如下所示：

- [项目操作 - 开发一个用于更改任务状态的Obsidian插件 - 202212262317 - PTKM实验](https://exp.ptkm.net/220-Development/Project+action/Project+actions+-+Develop+an+Obsidian+plugin+for+changing+task+status+-+202212262317)

## 鸣谢

- [Obsidian: 任务收集器](https://github.com/ebullient/obsidian-task-collector)
    - 该插件作为一个起始模板。

## 支持我
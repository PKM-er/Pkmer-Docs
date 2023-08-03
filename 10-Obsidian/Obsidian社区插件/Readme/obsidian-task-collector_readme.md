---
uid: 20230803213314
title: Obsidian 插件：【Readme】Task Collector (TC)
tags: ['obsidian插件', 'readme']
description: 使用热键和上下文菜单更改任务状态并收集文档中的任务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Task Collector (TC)

> [!Note] 插件名片
> - 插件名称：Task Collector (TC)
> - 插件作者：ebullient
> - 插件说明：使用热键和上下文菜单更改任务状态并收集文档中的任务。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ebullient/obsidian-task-collector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-task-collector)

## 概述

使用热键和上下文菜单更改任务状态并收集文档中的任务。

![Task Collector (TC)](https://cdn.pkmer.cn/covers/obsidian-task-collector_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ebullient/obsidian-task-collector/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-task-collector]] 插件的自述翻译



# Obsidian: 任务收集器
[![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/ebullient/obsidian-task-collector)](https://github.com/ebullient/obsidian-task-collector/releases) ![GitHub所有版本](https://img.shields.io/github/downloads/ebullient/obsidian-task-collector/total?color=success)

又一个用于管理已完成任务的插件，但这个插件还附带了一个任务完成模态框！

- [配置参考](docs/README.md)
- [命令](#commands)
- [标记任务](#marking-tasks)
- [任务标记选择](#task-mark-selection)

## 安装

1. 在 [Obsidian](https://www.obsidian.md) 的设置中，进入 **Community Plugins** 并 **禁用** 安全模式
2. 点击 **浏览** 并搜索 "task collector"
3. 点击安装
4. 在社区插件选项卡上使用切换按钮启用插件。

## 为任务标记添加TL;DR

1. 打开插件设置
2. 编辑`default`组的任务标记，包括您用于未完成任务的任何字符。
3. 编辑`complete`组的任务标记，包括您用于已完成任务的任何字符。
4. _(可选)_ 向下滚动找到**[菜单和模态框](docs/README.md#menus-and-modals)**，并启用其他上下文菜单。

![任务完成](https://user-images.githubusercontent.com/808713/148706433-34d21845-a441-428d-a24c-380c6db457c7.gif)

## 命令

任务收集器默认注册了一些命令：

### （TC）标记任务

这是一个可以绑定快捷键的编辑模式命令，用于打开一个模态对话框，用于[任务标记选择](#task-mark-selection)。

你想要的快速完成状态只需轻点几下！

阅读和实时预览模式，请参阅[菜单和模态](docs/README.md#menus-and-modals)。

### （TC）收集任务

任务收集器可以将不同类型的任务收集并重新分组到笔记中的不同区域。

1. [启用“任务收集”](docs/README.md#general-options)
2. 对于您想要收集的任务组：
    - 设置一个区域标题

有关详细信息，请参阅[任务收集](docs/TaskCollection.md)。

如果您配置了[任务标记循环](docs/README.md#general-options)，将注册两个命令，允许您在标记序列中向前或向后循环。

## 标记任务

当任务收集器标记一个任务时：

1. _(可选)_ 之前标记的匹配文本将被删除
2. 任务将被标记为新的标记
3. _(可选)_ 针对新标记配置的删除模式将被应用于删除任务中的文本。
4. 如果有附加日期格式，将会在任务后附加一个格式化的时间戳。

## 任务标记选择

使用`(TC)标记任务`命令或右键点击上下文菜单（如果已启用）来使用快速弹出模态框选择任务标记。

模态框中包含在[任务组](docs/README.md#task-groups)中配置的标记。

- 顶部行包含[已完成任务](#completed-tasks)的标记。
- 所有其他配置的标记将显示在下一行（或多行，因为集合会换行）。

**注意**：

- 使用鼠标或键盘选择一个值。
- 所选值将确定后续操作，请参阅[标记任务](#marking-tasks)。
- 任何您选择的字符都可以使用。如果它与配置的标记不匹配，则将应用`default`组的行为。

> 提示：
> - 弹出窗口是否没有显示您期望的内容？请查看您在[任务组](docs/README.md#task-groups)中定义的标记。

为什么选择“mark”？

没有足够的词语来描述。我选择了“mark”，因为它既可以表示符号本身（一个标记），也可以表示主动动作（你标记任务）。复选框是外在的事物。有时这些字符表示任务的状态，有些人则使用它们表示完全不同的含义。所以，就叫它“mark”吧。

给事物命名是困难的。

### 完成的任务

如果这些只是标记，为什么还有一个用于完成任务的切换开关？

完成切换开关本质上是一个指示器。

- 在标记选择对话框中，用于完成任务的标记显示在顶行。其他所有标记则显示在底行（按排序）。

- 任务收集器具有一个API，其他插件或您自己的脚本可以使用该API来确定标记是否表示完成的任务。

## 鸣谢

- [Completed Area Plugin](https://github.com/DahaWong/obsidian-completed) -- 将已完成的任务移动到笔记中的不同区域（由标题分隔）的基本原理。
- [JeppeKlitgaard/ObsidianTweaks](https://github.com/JeppeKlitgaard/ObsidianTweaks/) -- 简单/清晰的事件触发器
- [ivan-lednev/obsidian-task-archiver](https://github.com/ivan-lednev/obsidian-task-archiver) -- 处理子元素
- [Darakah/obsidian-timelines](https://github.com/Darakah/obsidian-timelines) -- 编辑器选择/替换
- [Customizable Sidebar](https://github.com/phibr0/obsidian-customizable-sidebar) -- GH Action
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) -- Jest/Testing






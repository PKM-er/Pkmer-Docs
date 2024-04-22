---
uid: 2024042221314599
title: Obsidian 插件：【Readme】TimeSaver
tags: ['obsidian插件', 'readme']
description: 节省您的时间。1. 快速插入待办事项指令。2. 快速计算当前笔记中任务所花费的时间以及总共花费的时间。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】TimeSaver

> [!Note] 插件名片
> - 插件名称：TimeSaver
> - 插件作者：tommy.li
> - 插件说明：节省您的时间。1. 快速插入待办事项指令。2. 快速计算当前笔记中任务所花费的时间以及总共花费的时间。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/odayou/obsidian-task-processing-extension)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?time-saver)

## 概述

节省您的时间。1. 快速插入待办事项指令。2. 快速计算当前笔记中任务所花费的时间以及总共花费的时间。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/odayou/task-processing-extension/master/README.md)

---

## Readme(翻译）

下面是 [[time-saver]] 插件的自述翻译

【机翻】

# Obsidian 任务处理扩展插件

中文 [README](https://github.com/odayou/task-processing-extension/blob/master/README_en.md)

> 一个 [Obsidian](https://obsidian.md/) 插件，用于处理任务的统计、插入任务、插入时刻等功能
>
> 基于自己的工作流和 [一个网友的诉求](https://forum-zh.obsidian.md/t/topic/30252/4) 开发的一个 Obsidian 插件，欢迎大家提出宝贵意见。
>
> 由于是第一次开发插件，还不会发布到插件中心

## 仓库地址

[odayou/obsidian-task-processing-extension](https://github.com/odayou/task-processing-extension)

## 功能

1. Insert a block to calculate the time spent on tasks by command (will calculate based on the to-do list in the current document) at the cursor
2. Insert a to-do/done item at the cursor by command
3. Insert the current time at the cursor by command

## Usage

In edit view, in a document with tasks (in standard task format) and time spent, call the command `time total`, and the calculation result will be inserted at the cursor, listing the cost of each task and the total cost.

## 演示

- 计算既有任务的时间
![任务耗时统计演示](https://cdn.pkmer.cn/covers/time-saver_2_0.gif!pkmer)
- 几个快捷命令演示
![任务快捷编辑演示](https://cdn.pkmer.cn/covers/time-saver_2_1.gif!pkmer)
- 当然所有功能都集成进了右键菜单
![右键菜单演示](https://cdn.pkmer.cn/covers/time-saver_2_2.png!pkmer)

## Limitations and Notes

- Unable to automatically calculate in real time. On one hand, I haven't figured out how to do it. On the other hand, I think time tracking is simply triggering a calculation when needed. Automatically calculating these may be considered excessive design or a feature with low cost-effectiveness.
- This is my first time developing a plugin. Currently, I only know that commands can insert document content in the editing view. I haven't researched how to do it in preview mode.
- The function I designed is to match and calculate the total time of tasks from the document. It can only match tasks starting with "- [ ]", "- [X]", or "- [x]", and calculate the specified time format. Please follow the format/position of tasks and time as shown in my demo diagram or sample data. You can also modify the code to define the matching format according to your own needs. Changing the matching part of the code is not difficult.
- If there is spare time for future improvements, the directions could be as follows: 1. Currently, triggering Function 1 multiple times will insert duplicate statistical blocks. In the future, it could be made to automatically replace them. 2. The interactive form may be redesigned, such as creating a menu or a function for automatic real-time calculation (Update: The latest version has already added a right-click menu to the editor by default). 3. It could calculate the time difference between start and end times spanning multiple days, as currently, it defaults to the same day.
- Note: If you do not modify the code, be sure to record the time in the format I have preset, otherwise calculation errors may occur. For example, there should **not** be spaces in the middle of task names, there **should be** spaces between task names and times, and the time format must be **hours:minutes**, etc. I have posted my to-do list data below for your reference on the format.

## 示例数据

```markdown
- [ ] 任务1 10:21-10:30
    - [ ] 任务1-1 09:00-10:00  13:00-14:00
    - [ ] 任务1-2  15:00-16:10  17:00-18:20
- [x] 任务2 16:10-17:00
    - [ ] 任务2-2 10:00-13:00 19:00-20:20
```
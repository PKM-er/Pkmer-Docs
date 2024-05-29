---
uid: 2024052908510182
title: Obsidian 插件：Dynamic Timetable
tags: ['任务管理', '时间与日期', '自动化与AI', 'obsidian插件']
description: 根据任务的预计时间计算完成时间，并动态创建时间表。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dynamic Timetable

> [!Note] 插件名片
> - 插件名称：Dynamic Timetable
> - 插件作者：L7Cy
> - 插件说明：根据任务的预计时间计算完成时间，并动态创建时间表。
> - 插件分类：[' 任务管理 ', ' 时间与日期 ', ' 自动化与 AI', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/L7Cy/obsidian-dynamic-timetable)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dynamic-timetable)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/L7Cy/obsidian-dynamic-timetable/master/README.md)

![Dynamic Timetable](https://cdn.pkmer.cn/covers/dynamic-timetable_new.gif!pkmer)

## 概述

Obsidian Dynamic Timetable 是一个 Obsidian 插件，根据任务的预计时间动态创建任务时间表。该插件受到了 TaskChute 的启发。使用该插件，可以从 Markdown 文件中生成任务列表和时间估计。插件支持以下 Markdown 格式的任务（包括子任务）：[ ] 任务名称；预计时间，[ ] 任务名称；预计时间@开始时间，[ ] 任务名称@开始时间；预计时间。已完成的任务和没有预计时间的任务将被排除。要显示任务列表，打开命令面板（Ctrl/Cmd + P），输入“Show/Hide Timetable”。默认情况下，插件使用当前活动文件作为任务列表的来源，如果要使用其他文件，可以在插件设置中指定文件路径。插件还提供了任务开始时间的格式，任务开始时间可以采用两种格式：仅时间（例如@ 14:30）和日期和时间（例如@ 2023-04-16T14:30）。插件还会根据任务的开始时间与上一个任务的结束时间进行比较，并为任务设置背景颜色，以便用户了解如何有效地调整任务。该插件可以帮助用户计算任务的预计完成时间，并动态创建时间表。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




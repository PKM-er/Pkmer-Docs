---
uid: 1793625611766001
title: "Obsidian 插件：Daily Time Log"
tags: ["日历与时间", "图表与可视化", "效率工具", "obsidian插件"]
description: "Visualize daily time tracking directly from daily notes with minimal metadata. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Time Log

> [!Note] 插件名片
> - 插件名称：Daily Time Log
> - 插件作者：dmantisk
> - 插件说明：Visualize daily time tracking directly from daily notes with minimal metadata. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dmantisk/Daily-Time-Log)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-time-log)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dmantisk/Daily-Time-Log/master/README.md)



## 概述

Daily Time Log 是一款专为 Obsidian 设计的轻量级时间追踪插件，它直接解析每日笔记中的纯文本内容来可视化时间块，无需依赖 YAML 前置元数据。其核心功能是在侧边栏提供一个基于 10 分钟网格的时间轴视图，用户只需在笔记的特定标题下按简单格式记录时间段，插件即可自动识别并渲染出色彩分类的时间块，实现了从纯 Markdown 到直观可视化的无缝转换。

典型使用场景包括日常工作的快速记录与回顾。例如，你可以在每日笔记中写下 `- 9:00 - 10:30 [Work] 团队会议`，插件会自动将其识别为工作类时间块；或者在休息间隙记录 `- 14:00 - 14:30 [Rest] 午休`。这种极简的记录方式让你无需切换应用或填写复杂表单，只需在笔记中打字即可同步更新侧边栏的时间轴，非常适合习惯在笔记中随手记录想法的用户。

相比同类插件，Daily Time Log 的最大特色在于其“零元数据”设计和对原生 Obsidian 生态的深度整合。它完全遵循核心 Daily Notes 插件的路径和日期格式设置，支持嵌套目录结构，且界面元素采用原生 Obsidian 组件，完美适配当前主题。此外，它内置了“工作洞察”面板，提供连续记录天数、分类时间占比及近期活动历史等统计信息，所有指标均带有计算说明，帮助用户从宏观视角审视时间分配。

使用前需注意，该插件仅读取和更新现有笔记，不会自动创建每日笔记，需配合核心插件使用。它仅识别配置中指定的特定标题下的内容，若修改标题设置，旧笔记将不再被解析。此外，它不适合需要复杂任务管理、待办事项处理或跨笔记关联的用户，因为该版本已移除 ToDo 处理功能，专注于纯粹的时间块记录与可视化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1793625617149000
title: "Obsidian 插件：Nautilus Spiral"
tags: ["日历与时间", "任务管理", "自动化与AI", "效率工具", "obsidian插件"]
description: "A spiral day planner driven by your daily note: events stay pinned, to-dos flow from now into the free gaps, and time spent in AI agent sessions can be logged back as DOING and SUSPENDED tasks. Interface in Chinese. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nautilus Spiral

> [!Note] 插件名片
> - 插件名称：Nautilus Spiral
> - 插件作者：马自立
> - 插件说明：A spiral day planner driven by your daily note: events stay pinned, to-dos flow from now into the free gaps, and time spent in AI agent sessions can be logged back as DOING and SUSPENDED tasks. Interface in Chinese. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/nautilus-spiral)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nautilus-spiral)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/nautilus-spiral/master/README.md)



## 概述

Nautilus Spiral 是一款基于螺旋视觉的日程规划插件，旨在解决传统列表式待办事项缺乏时间维度感的问题。它直接读取你的每日笔记，将固定事件锁定在特定时间段，而待办事项则根据预估时长自动填充到空闲间隙中。随着时间推移，未完成任务会动态向后推移，并通过容量条直观展示当日剩余时间是否充足。这种设计让计划与实际执行情况在同一视图中并排呈现，帮助你清晰掌握每一分钟的分配状态。

典型使用场景包括处理混合日程与追踪 AI 协作。例如，你可以用中文短语如“3点到5点”或“半小时”快速定义事件和任务，插件会自动解析并重新规划。若你使用 Claude Code 等 AI 代理，插件能读取本地会话日志，将 AI 工作的时间以细环形式绘制在螺旋内部，并显示 Token 消耗。这不仅记录了你的手动操作，也自动捕捉了 AI 代理的实际活跃时段，使“计划”与“现实”在同一个螺旋上得到完整映射。

相比同类插件，其核心特色在于“自动重规划”与“AI 协作可视化”。你无需手动拖拽时间块，只需在笔记中修改任务状态或预估时长，插件每分钟自动重新计算布局。此外，它支持将 macOS 和 Google 日历事件只读地叠加在螺旋上，并提供了独特的“回放”功能，可在六秒内快速预览全天的时间分布。对于使用 Agent Deck 的用户，它还能展示 AI 会话的进度条和状态，实现人机协作时间的统一记录。

使用前需注意，该插件主要依赖每日笔记中的文本格式，若笔记结构混乱可能影响解析。它不直接写入 AI 会话数据，这部分功能需配合 Agent Deck 插件使用；若仅安装 Nautilus Spiral，它仅作为任务管理器运行，但仍会读取本地日志以显示协作时间。此外，插件会访问本地文件以获取日历和 AI 日志，若你不需要 AI 协作统计，可在设置中关闭相关选项。它不适合需要复杂甘特图依赖关系或跨天项目管理的用户，其核心优势在于单日内精细的时间颗粒度管理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



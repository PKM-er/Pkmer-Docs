---
uid: 1793625618339000
title: "Obsidian 插件：Next Day Planner"
tags: ["日历与时间", "效率工具", "模板与链接处理", "obsidian插件"]
description: "Create tomorrows daily note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Next Day Planner

> [!Note] 插件名片
> - 插件名称：Next Day Planner
> - 插件作者：Martin Gallauner
> - 插件说明：Create tomorrows daily note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '效率工具', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/martingallauner/next-day-planner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?next-day-planner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/martingallauner/next-day-planner/master/README.md)



## 概述

Next Day Planner 专为使用 Obsidian 核心“日记”插件的用户设计，旨在解决每日待办事项手动复制的繁琐问题。其核心功能是一键将前一天日记中所有未勾选的任务自动迁移至次日笔记顶部。该插件通过命令面板或左侧边栏图标触发，若次日笔记不存在，会依据你的日记模板和命名规则自动创建，并将遗留任务置于新笔记开头，实现“今晚规划明天”的高效工作流。

典型场景包括：每晚睡前回顾当天工作，点击按钮即可将未完成事项带入明天的计划中，避免遗漏；若忘记前一晚规划，也可运行“将未完成任务滚入今日笔记”命令，系统会自动创建今日笔记并填入任务，无需手动打开文件。例如，你周一晚上有 3 项未完成任务，周二早上打开日记时，这 3 项已自动出现在顶部，且带有 `(↻1)` 标记，清晰显示这是第一次延期。

相比同类插件，Next Day Planner 的特色在于“诚实记录”机制：任务仅被复制而非移动，原日记中的未勾选状态保持不变，确保每日笔记是真实的工作记录。此外，它支持任务延期计数，如 `(↻4)` 表示该任务已延期四次，帮助用户识别长期拖延项。插件还允许指定特定标题下的任务进行迁移，避免干扰日记其他部分，且重复运行命令不会导致任务重复添加，操作安全无副作用。

使用前需注意：插件仅识别 Markdown 标准复选框格式（如 `- [ ]`），其他格式的任务不会被迁移；“明天”严格指当前时间的下一个日历日，若在凌晨 00:30 运行，目标将是后天而非次日。此外，若未设置任务标题，迁移的任务将直接位于笔记 frontmatter 之后、模板首个标题之前。该插件不适合需要复杂任务管理、跨笔记依赖或自动完成提醒的用户，它仅专注于简单的任务滚动，不提供任务编辑、删除或状态同步功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



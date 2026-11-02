---
uid: 1793625618367000
title: "Obsidian 插件：Ninja Board"
tags: ["任务管理", "效率工具", "界面优化", "obsidian插件"]
description: "Today, Week, Projects, Backlog and Guide views for your second brain, drawn from your notes and their task lines. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ninja Board

> [!Note] 插件名片
> - 插件名称：Ninja Board
> - 插件作者：Alex Sendula
> - 插件说明：Today, Week, Projects, Backlog and Guide views for your second brain, drawn from your notes and their task lines. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alexsendula/ninja-board)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ninja-board)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alexsendula/ninja-board/master/README.md)



## 概述

Ninja Board 将你的 Obsidian 笔记库转化为五个直观的看板视图：今日、本周、项目、待办与指南。它专为习惯用纯文本记录任务、项目和日程的用户设计，让你无需离开笔记界面，就能像使用专业任务管理应用一样查看和规划工作。插件不存储任何独立数据，所有操作直接映射为对笔记文件的小幅编辑，确保视图始终与你的笔记库保持实时同步。

想象一下，你正在规划下周的工作节奏。在“本周”视图中，你可以直接将一个任务卡片拖拽到具体的日期条上，瞬间完成排期；或者在“今日”视图中，点击任务圆圈即可标记完成。这种交互方式让计划变得直观且高效，你甚至可以通过右键菜单快速设置截止日期或更改任务状态，无需手动编辑复杂的 Markdown 语法。

与许多依赖外部数据库或复杂配置的插件不同，Ninja Board 完全基于 Obsidian 核心的 Bases 视图 API 构建，且无需网络连接。它的独特之处在于“零数据冗余”：每一次拖拽、勾选或排序，都只是对单个笔记文件的一次微小修改。这意味着你的数据完全掌握在自己手中，即使删除插件，笔记内容也不会丢失。此外，它深度整合了 Tasks 插件，支持自定义状态（如“等待中”），让任务流转更加灵活。

需要注意的是，Ninja Board 并非独立运行，它要求你的笔记库遵循特定的结构规范，包括在 frontmatter 中设置 `type` 字段，并使用 Tasks 插件的 Dataview 格式记录任务行。如果你习惯使用非标准的笔记结构，或希望插件自动从杂乱笔记中智能提取任务，它可能无法满足需求。此外，该插件目前主要在桌面端经过测试，移动端体验尚未完全验证，且必须启用 Obsidian 的 Bases 核心插件才能正常工作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



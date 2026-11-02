---
uid: 1793625614478000
title: "Obsidian 插件：Kanso Todos"
tags: ["任务管理", "效率工具", "样式与美化", "obsidian插件"]
description: "Compact, visual task lists inside your notes, backed by plain-text YAML. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kanso Todos

> [!Note] 插件名片
> - 插件名称：Kanso Todos
> - 插件作者：Puneeth Shetty
> - 插件说明：Compact, visual task lists inside your notes, backed by plain-text YAML. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shettypuneeth/kanso-todos-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kanso-todos)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shettypuneeth/kanso-todos-obsidian/master/README.md)



## 概述

Kanso Todos 旨在解决任务与笔记分离的痛点，允许你在笔记内部直接嵌入紧凑且可视化的任务列表。它基于纯文本 YAML 存储数据，通过主题原生的交互组件，让你无需手动编写代码即可添加和编辑任务。核心功能涵盖待办、进行中及已完成三种状态管理，支持 P0 至 P2 的优先级标记，并能设置带有本地日历标签的截止日期，对逾期任务进行高亮提醒，同时支持将任务直接链接到源笔记以便快速跳转。

典型使用场景包括在每日笔记中规划当天的工作流，或在项目文档旁记录待办事项。例如，你可以在撰写技术文档时，直接在文末插入一个任务块，添加“修复登录 Bug”并标记为 P0 优先级，设置明天为截止日期；或者在会议记录中，将讨论出的行动项转化为任务，并链接到相关的背景资料笔记，点击即可打开查看上下文，实现任务与内容的无缝关联。

相比其他任务插件，Kanso Todos 的特色在于其“简素”的设计理念，强调任务与笔记的紧密共生而非独立管理。它支持在多个窗格中独立折叠列表或展开已完成任务，互不干扰。此外，它具备独特的“滚动链接”功能，可以显示并跟随现有的 `rollover.previous` 和 `rollover.next` 引用，将带有后续链接的条目变为只读的历史记录，适合需要追踪任务演变过程的场景。

使用前需注意，任务存储在笔记内的特定代码块中，并非标准的 Markdown 复选框，因此无法被 Dataview 或 Tasks 插件索引，也不支持跨笔记聚合查询。删除操作是即时生效且无插件级撤销功能的，需谨慎操作。该插件不适合需要全局任务看板、复杂依赖关系管理或依赖标准 Markdown 语法进行数据提取的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



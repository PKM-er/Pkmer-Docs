---
uid: 1791709370321000
title: 'Obsidian 插件：Task Sorter'
tags: ['任务管理', '搜索与排序', '效率工具', 'obsidian插件']
description: 'Reorders checklist tasks in a note by priority and due date physically (in place). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Sorter

> [!Note] 插件名片
> - 插件名称：Task Sorter
> - 插件作者：Artem Oreshkin
> - 插件说明：Reorders checklist tasks in a note by priority and due date physically (in place). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/artem98/obsidian_tasks_sort)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-sorter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/artem98/obsidian_tasks_sort/master/README.md)



## 概述

**1. 主要功能**
Task Sorter 插件用于在 Obsidian 笔记中**物理重排**光标所在处的任务列表。它根据优先级和截止日期直接修改笔记中的行顺序，而非像 Tasks 插件那样仅在查询块中虚拟排序。

**2. 适用场景**
适用于需要直接整理笔记内任务顺序的场景，特别是当你希望任务顺序在笔记本体中持久化，且需与 Tasks 插件兼容（共用 Emoji 语法）时。

**3. 核心特色**
*   **局部排序**：仅重排光标所在的连续任务块，不影响笔记其他部分。
*   **智能排序逻辑**：优先按优先级（🔺→⏫→🔼→无→🔽→⏬），同级内按截止日期升序排列。
*   **光标保持**：排序后光标仍停留在原任务位置，方便继续编辑。
*   **子项跟随**：缩进的子任务、备注等随父任务整体移动。
*   **灵活配置**：可自定义已完成、进行中及空任务的排序位置（置顶、置底或混排）。

**4. 使用建议**
右键选择“Sort task block at cursor”即可触发。建议在设置中根据个人习惯调整特殊任务（如已完成项）的固定位置，以保持列表整洁。注意该插件仅处理连续的任务块，空行会中断排序范围。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



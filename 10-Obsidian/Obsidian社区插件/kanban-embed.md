---
uid: 1791709367901000
title: 'Obsidian 插件：Kanban Embed'
tags: ['任务管理', '图表与可视化', '效率工具', 'obsidian插件']
description: 'Shows a Kanban board inside any note, read from the board file, with live updates, lane picking and card check-off. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kanban Embed

> [!Note] 插件名片
> - 插件名称：Kanban Embed
> - 插件作者：theluckystrike
> - 插件说明：Shows a Kanban board inside any note, read from the board file, with live updates, lane picking and card check-off. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/kanban-embed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kanban-embed)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/kanban-embed/master/README.md)



## 概述

**1. 主要功能**
Kanban Embed 允许在任意 Obsidian 笔记中嵌入看板视图。它直接读取独立的看板 Markdown 文件，支持实时同步、选择特定泳道（Lane）、隐藏已完成卡片以及直接勾选/取消勾选卡片状态。

**2. 适用场景**
适用于项目管理页、每日笔记（Daily Notes）或仪表盘。当需要在不离开当前上下文的情况下快速查看任务进度、进行站会汇报或追踪特定阶段（如“进行中”和“审查中”）的任务时特别有用。

**3. 核心特色**
*   **独立运行**：无需安装官方 Kanban 插件，仅依赖 Markdown 文件，保持数据纯净。
*   **灵活嵌入**：通过代码块指定看板名称，支持自定义显示特定泳道及顺序。
*   **实时交互**：在嵌入视图中直接操作卡片（勾选/移动），仅修改源文件对应行，且支持 Reading 和 Live Preview 模式。
*   **智能提示**：自动显示卡片数量，若泳道超出限制（如 `In progress (3)` 显示 4 张卡），会高亮警告边框。

**4. 使用建议**
在笔记中插入 `kanban-embed` 代码块并指定看板文件名即可使用。建议利用 `lanes` 参数筛选关键泳道，以及 `hide-done: true` 隐藏已完成项，以保持视图简洁。注意该插件未通过官方人工审核，使用前请确保备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709370340000
title: 'Obsidian 插件：TaskNotes CalDAV'
tags: ['任务管理', '第三方工具集成', '日历与时间', 'obsidian插件']
description: 'Two-way sync of TaskNotes tasks with a CalDAV task list (VTODO). Requires TaskNotes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TaskNotes CalDAV

> [!Note] 插件名片
> - 插件名称：TaskNotes CalDAV
> - 插件作者：Fabian Schober
> - 插件说明：Two-way sync of TaskNotes tasks with a CalDAV task list (VTODO). Requires TaskNotes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/schobernoise/tasknotes-caldav)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tasknotes-caldav)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/schobernoise/tasknotes-caldav/master/README.md)



## 概述

**1. 主要功能**
该插件实现 TaskNotes 任务与 CalDAV 任务列表（如 Nextcloud、Apple 提醒事项）的双向同步。在 Obsidian 创建的任务会迅速同步至手机端，反之亦然。它仅通过 Frontmatter 添加少量 `caldav_*` 键值，保持笔记为普通 Markdown 格式。

**2. 适用场景**
适合需要跨设备（桌面端 Obsidian 与移动端）管理任务的用户，特别是使用 Nextcloud、Radicale 或 Apple 生态系统的用户。适用于希望将本地笔记任务与云端或手机原生提醒事项整合的工作流。

**3. 核心特色**
*   **智能路由**：根据标签（如 `#work`）或项目自动将任务分发至对应的 CalDAV 列表，其余归入默认列表。
*   **独立伴生**：基于 TaskNotes 官方运行时 API 开发，无需等待主插件合并，兼容标准版 TaskNotes。
*   **低侵入性**：不改变笔记核心结构，仅增加元数据，确保数据纯净。

**4. 使用建议**
*   **前置依赖**：必须安装并启用 TaskNotes（需支持 runtime API v1，建议 4.13.6+）及 Obsidian 1.11.4+。
*   **安装方式**：目前未上架社区插件目录，需通过 BRAT 插件添加 `schobernoise/tasknotes-caldav` 或手动下载文件至插件目录。
*   **注意**：目前仅在桌面端 Nextcloud 环境测试，移动端兼容性未验证；密码存储依赖 Obsidian 的新版 Secret Storage 功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



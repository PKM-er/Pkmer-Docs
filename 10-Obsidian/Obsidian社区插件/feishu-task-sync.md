---
uid: 1793625612821000
title: "Obsidian 插件：Feishu Task Sync"
tags: ["第三方工具集成", "任务管理", "效率工具", "obsidian插件"]
description: "Sync projects and Markdown tasks with Feishu, with configurable folders, tags, and two-way completion updates. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Feishu Task Sync

> [!Note] 插件名片
> - 插件名称：Feishu Task Sync
> - 插件作者：LLLLAAAA
> - 插件说明：Sync projects and Markdown tasks with Feishu, with configurable folders, tags, and two-way completion updates. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/llllaaaa2333/feishu-task-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?feishu-task-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/llllaaaa2333/feishu-task-sync/master/README.md)



## 概述

Feishu Task Sync 旨在解决 Obsidian 笔记与飞书任务系统之间的数据孤岛问题，实现双向同步。它允许用户在 Obsidian 中管理项目与 Markdown 任务，并实时映射到飞书的任务列表。核心功能包括自动同步任务标题、描述及完成状态，支持在任意一端勾选或重开任务，另一端即刻更新。插件提供专用面板、设置项及后台同步机制，确保即使关闭面板，数据也能在后台持续保持一致，无需手动频繁操作。

典型场景适用于需要跨平台协作的项目管理。例如，你可以将标记为 `project` 的笔记同步为飞书中的项目父任务，其下的待办事项自动成为子任务；或者将带有 `#action` 标签的普通笔记中的复选框直接同步到飞书任务列表。此外，若启用日记行动功能，每日笔记中的任务也能同步至独立的飞书每日任务列表，方便在手机上快速查看和更新当天的待办事项。

相比同类插件，该工具的特色在于灵活的多源同步范围配置。除了默认的项目模式，用户还可以指定额外的文件夹或标签作为同步源，且支持标签层级匹配（如 `action` 匹配 `action/next`）。插件具备冲突处理机制，当两端数据不一致时，面板允许用户对比并选择保留哪一方的状态。此外，它支持在首次发送任务时设置截止时间与提醒，并采用上海时区，贴合国内用户的使用习惯。

使用前需注意，该插件需要创建飞书企业自建应用并配置相应的 API 权限，接口目前仅支持中文。它不适合那些不需要与飞书集成，或希望完全离线管理任务的用户。另外，由于涉及企业应用密钥，数据存储在本地特定路径而非 Vault 内，迁移设备时需通过导出转移包来保留关联关系，且同一 Vault 建议仅在单台设备上启用自动同步以避免冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



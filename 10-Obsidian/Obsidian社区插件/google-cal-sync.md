---
uid: 1791709367341000
title: 'Obsidian 插件：Google Calendar Tasks Sync'
tags: ['第三方工具集成', '任务管理', '日历与时间', 'obsidian插件']
description: 'Two-way Google Calendar in a code block, plus task notes mirrored to Google Tasks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Google Calendar Tasks Sync

> [!Note] 插件名片
> - 插件名称：Google Calendar Tasks Sync
> - 插件作者：PubCyBerry
> - 插件说明：Two-way Google Calendar in a code block, plus task notes mirrored to Google Tasks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pubcyberry/obsidian-google-cal-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?google-cal-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pubcyberry/obsidian-google-cal-sync/master/README.md)



## 概述

**1. 主要功能**
该插件通过 `gcal` 代码块在 Obsidian 中实现 Google 日历的双向同步，支持创建、编辑、拖拽和删除事件。同时，它将带有 `type: Task` 元数据的笔记镜像至 Google 任务，实现标题、截止日期及完成状态的双向同步。

**2. 适用场景**
适合需要统一管理日程与任务的 Obsidian 用户，特别是希望在手机端 Google 日历应用中直接查看和勾选 Obsidian 中任务的用户，实现跨设备无缝协作。

**3. 核心特色**
*   **双向同步机制**：事件以 Google 为权威源，任务以 Obsidian 为权威源，互不干扰。
*   **多日历支持**：在一个代码块中显示所有日历，并保留各自的颜色标识。
*   **隐私与安全**：需用户自行配置 Google Cloud OAuth，数据不经过第三方服务器；登录信息加密传输，移动端复用桌面端登录状态，无需重复登录。
*   **离线可用**：基于本地缓存显示最后同步状态。

**4. 使用建议**
*   需先在 Google Cloud Console 启用 Calendar 和 Tasks API，并配置 Desktop 类型的 OAuth 客户端。
*   建议在项目文件夹中统一使用 `type: Task` 元数据以触发任务同步。
*   可通过侧边栏图标或命令面板独立打开日历视图，便于快速访问。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



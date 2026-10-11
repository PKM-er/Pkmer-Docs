---
uid: 1791709366118000
title: 'Obsidian 插件：Codecks Bridge'
tags: ['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
description: 'Browse Codecks cards and import them into Project Manager as projects and tasks. Read-only towards Codecks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Codecks Bridge

> [!Note] 插件名片
> - 插件名称：Codecks Bridge
> - 插件作者：Milad Samimifar
> - 插件说明：Browse Codecks cards and import them into Project Manager as projects and tasks. Read-only towards Codecks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/milad-s5/obsidian-codecks-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codecks-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/milad-s5/obsidian-codecks-bridge/master/README.md)



## 概述

**1. 主要功能**
Codecks Bridge 允许用户在 Obsidian 中浏览 Codecks 卡片，并将其一键导入至“Project Manager with Time Tracking”插件，自动转化为真实的项目和任务。该插件对 Codecks 实行**只读**操作，不会在源端创建、修改或删除任何数据。

**2. 适用场景**
适用于同时使用 Codecks 进行视觉化看板管理，并希望在 Obsidian 中利用 Project Manager 插件进行详细任务追踪、时间记录及仪表盘监控的用户。特别适合需要避免重复录入、实现跨平台数据同步的团队或个人。

**3. 核心特色**
*   **可视化浏览**：以彩色瓷砖网格展示 Deck，直观显示已选、总数及已导入卡片数量。
*   **智能去重**：导入任务时自动标记 Codecks ID，重复导入同一卡片不会生成重复项。
*   **灵活筛选**：支持按项目、文本内容、文档状态及是否已导入进行卡片过滤。
*   **批量导入**：支持一次性选取多张卡片，统一导入为指定项目下的任务。

**4. 使用建议**
*   **前置依赖**：必须先安装“Project Manager with Time Tracking”插件。
*   **安全配置**：由于 Codecks 无只读 API Token，建议创建专用的**观察者（Observer）账户**并生成其会话 Token 使用，以降低主账户权限泄露风险。
*   **设置流程**：在设置中填入 Codecks 子域名和 Token，通过侧边栏或命令面板打开插件，选择工作区后点击刷新即可开始浏览和导入。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



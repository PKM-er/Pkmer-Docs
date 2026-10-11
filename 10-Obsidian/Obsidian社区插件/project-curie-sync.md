---
uid: 1791709366345000
title: 'Obsidian 插件：Curie'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: 'Sync your Obsidian vault with a Project Curie virtual vault via Fastify backend. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Curie

> [!Note] 插件名片
> - 插件名称：Curie
> - 插件作者：datronizer
> - 插件说明：Sync your Obsidian vault with a Project Curie virtual vault via Fastify backend. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/datronizer/curie-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?project-curie-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/datronizer/curie-obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
Curie 是一款用于 Obsidian 的私有同步插件，通过自托管的 Project Curie 后端（Fastify + SQLite）实现笔记库与虚拟库的双向后台同步。它支持自动追踪本地修改，并在发生并发编辑冲突时，以“并排保留”方式保存两个版本，确保数据零丢失。

**2. 适用场景**
适用于对数据隐私有极高要求、希望完全掌控基础设施的用户。适合需要跨 macOS、Windows、Linux、iOS 及 Android 全平台同步，且偏好开源、无专有格式锁定环境的极客或专业用户。

**3. 核心特色**
*   **完全私有自托管**：数据存储在自有服务器，无第三方云依赖。
*   **透明文件系统**：服务器端笔记为标准 Markdown 文件，无数据库锁定或专有格式。
*   **智能冲突处理**：自动保留冲突双方的版本，防止数据覆盖。
*   **全平台支持**：原生支持桌面与移动端，并提供触控友好的快速同步操作。

**4. 使用建议**
使用前必须先在本地或私有服务器部署 Project Curie 后端（需运行 `npm install` 等步骤）。插件并非独立同步服务，务必确保后端服务正常运行。建议通过插件内的“连接仪表盘”监控实时状态，并利用移动端快捷指令手动触发同步，以优化网络不佳时的体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



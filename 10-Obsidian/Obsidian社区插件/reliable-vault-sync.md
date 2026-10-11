---
uid: 1791709369643000
title: 'Obsidian 插件：Reliable Vault Sync'
tags: ['备份与恢复', '文件管理', '第三方工具集成', 'obsidian插件']
description: 'Synchronize a vault through a private Git-backed server with recoverable conflicts. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Reliable Vault Sync

> [!Note] 插件名片
> - 插件名称：Reliable Vault Sync
> - 插件作者：Gleb
> - 插件说明：Synchronize a vault through a private Git-backed server with recoverable conflicts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ghloii/reliable-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reliable-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ghloii/reliable-vault-sync/master/README.md)



## 概述

**1. 主要功能**
Reliable Vault Sync 是一款基于私有 Git 服务器的 Obsidian 同步插件。它支持桌面端与移动端，无需第三方存储账号即可同步 Markdown 笔记、附件、主题及插件设置。

**2. 适用场景**
适合注重数据隐私、希望完全掌控数据主权的用户。适用于需要跨设备（Windows、macOS、iOS/Android）无缝协作，且不愿依赖云端第三方服务的个人或小团队。

**3. 核心特色**
*   **私有化部署**：通过自托管 Git 服务器实现同步，保障数据安全。
*   **智能冲突处理**：采用 Git 式三方合并，保留 BASE、LOCAL、REMOTE 版本，并提供内置冲突解决界面。
*   **高效增量同步**：使用增量清单，仅传输变更内容；通过 WebSocket 实时接收通知。
*   **平台适配**：自动忽略工作区状态及临时元数据，保持插件列表的平台特异性。

**4. 使用建议**
*   **前置准备**：需部署 Reliable Vault Sync Server（支持 Docker Compose），并配置 HTTPS 及访问令牌。
*   **版本要求**：Obsidian 1.5.0 及以上。
*   **重要警示**：当前为早期版本，**务必保留独立备份**。建议在依赖其同步重要数据前，先在副本库中测试新设备连接，以防数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365281000
title: 'Obsidian 插件：AIDEN Memory Sync'
tags: ['自动化与AI', '文件管理', '第三方工具集成', 'obsidian插件']
description: 'Synchronize the dedicated AIDEN Memory vault folder with an AIDEN node. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AIDEN Memory Sync

> [!Note] 插件名片
> - 插件名称：AIDEN Memory Sync
> - 插件作者：Efe Kapici
> - 插件说明：Synchronize the dedicated AIDEN Memory vault folder with an AIDEN node. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kapiciefe84-ops/aiden-memory-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aiden-memory-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kapiciefe84-ops/aiden-memory-sync/master/README.md)



## 概述

**1. 主要功能**
该插件用于将 Obsidian 根目录下的 Markdown 记忆笔记与 AIDEN 服务器同步。AIDEN 服务端数据库为唯一数据源，确保数据一致性。

**2. 适用场景**
适用于需要跨设备访问记忆数据的用户，特别是当 Obsidian 处于离线状态时，仍可通过 AIDEN 服务器保持数据可用。

**3. 核心特色**
*   **独立无依赖**：无需额外库，安装简单。
*   **自动同步**：默认每 5 分钟自动检查并同步，也可手动触发。
*   **安全机制**：使用专用同步令牌，支持私有 Replit 端点配置。
*   **离线友好**：服务端记录为真，保障数据持久化。

**4. 使用建议**
*   安装时仅替换 `main.js` 和 `manifest.json`，保留 `data.json` 以维持设置。
*   在 AIDEN 设置中创建同步令牌，并在插件中填入服务器地址及令牌。
*   注意 iOS 后台限制：应用被挂起时同步暂停，重新打开后恢复。
*   切勿在聊天中分享令牌，若丢失需重新生成。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



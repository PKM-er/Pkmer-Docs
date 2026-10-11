---
uid: 1791709366050000
title: 'Obsidian 插件：Claudian Session Sync'
tags: ['第三方工具集成', '自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Sync the session files of Claudian-supported agent CLIs (Claude Code and friends) between machines so a conversation can be resumed elsewhere. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claudian Session Sync

> [!Note] 插件名片
> - 插件名称：Claudian Session Sync
> - 插件作者：powoct
> - 插件说明：Sync the session files of Claudian-supported agent CLIs (Claude Code and friends) between machines so a conversation can be resumed elsewhere. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/powoct/claudian-session-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claudian-session-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/powoct/claudian-session-sync/master/README.md)



## 概述

**1. 主要功能**
该插件用于在多台电脑间同步 Claudian 支持的 Agent CLI（如 Claude Code）的原始会话文件。它通过监控本地 CLI 存储，将文件镜像至用户指定的同步文件夹（如 Dropbox、OneDrive 或 Syncthing 目录），从而实现跨设备无缝恢复对话。

**2. 适用场景**
适用于需要在不同工作站（如办公室与家庭电脑）之间连续使用 AI 编程助手的用户，特别是希望在不依赖官方云账户的情况下，通过第三方文件同步工具实现会话迁移的场景。

**3. 核心特色**
*   **本地优先**：插件本身不连接任何云 API，仅操作本地磁盘，隐私安全。
*   **安全合并**：采用“仅追加且前缀安全”的合并策略，确保文件完整性。若检测到冲突（两台机器同时扩展同一会话），会保留两个版本供用户手动选择，绝不静默覆盖。
*   **精准同步**：仅同步当前 Obsidian Vault 中 Claudian 记录在案的会话，忽略终端直接启动的独立会话。

**4. 使用建议**
*   需配合 Claudian 插件使用，且仅支持桌面端。
*   目前为 Beta 版本，需通过 BRAT 安装。
*   请确保选择的同步文件夹具备可靠的文件同步能力。
*   注意：该插件独立于 Claudian 项目，非官方附属品。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365403000
title: 'Obsidian 插件：ATProto Sync'
tags: ['第三方工具集成', '安全与隐私', '发布工具', '备份与恢复', 'obsidian插件']
description: 'Sync your vault to your ATProto PDS (Bluesky, Blacksky, Eurosky, self-hosted). E2E-encrypted, with per-note publishing. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ATProto Sync

> [!Note] 插件名片
> - 插件名称：ATProto Sync
> - 插件作者：thatsit.dev
> - 插件说明：Sync your vault to your ATProto PDS (Bluesky, Blacksky, Eurosky, self-hosted). E2E-encrypted, with per-note publishing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '安全与隐私', '发布工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thats-it-dev/atproto-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?atproto-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thats-it-dev/atproto-sync/master/README.md)



## 概述

**ATProto Sync** 是一款将 Obsidian 库同步至 ATProto PDS（如 Bluesky 或自建服务器）的插件，主打数据自主与端到端加密。

1.  **主要功能**：将笔记以加密记录形式存储在你的个人 PDS 仓库中，支持多设备通过三向同步实现字符级合并，冲突时自动保留本地副本。
2.  **适用场景**：适合重视隐私、希望摆脱第三方同步服务（如 iCloud/Dropbox）的用户，以及拥有 Bluesky 账号或自建 ATProto 服务器，寻求跨平台、去中心化笔记管理的用户。
3.  **核心特色**：采用 XChaCha20-Poly1305 算法实现端到端加密，连文件名和标题均加密，服务器仅见密文；支持单篇笔记独立切换公开/加密状态，公开后可被任意应用读取。
4.  **使用建议**：安装后通过向导登录并设置加密口令，后续设备需输入相同口令。**务必牢记口令**，一旦丢失，服务器上的加密笔记将无法恢复。注意插件会读取文件路径以执行同步，但尊重忽略规则且不同步 `.obsidian` 配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



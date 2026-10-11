---
uid: 1791709369156000
title: 'Obsidian 插件：PB Backup'
tags: ['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Remote backups and version restoration to PocketBase REST API backed by an sqlite database. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PB Backup

> [!Note] 插件名片
> - 插件名称：PB Backup
> - 插件作者：sree
> - 插件说明：Remote backups and version restoration to PocketBase REST API backed by an sqlite database. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sukum/OBPB-Backup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obpb-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sukum/OBPB-Backup/master/README.md)



## 概述

**PB Backup** 是一款基于 PocketBase（SQLite）的 Obsidian 远程备份插件。

1. **主要功能**：提供笔记的版本化远程备份与恢复。支持自动同步修改、重命名和删除事件，并允许用户手动触发即时快照或增量同步。
2. **适用场景**：适用于希望将本地 Vault 作为唯一数据源，同时利用云端存储进行版本管理和灾难恢复的用户。
3. **核心特色**：
   - **单向推送**：严格遵循“本地优先”原则，云端仅作为存储，不会自动覆盖本地文件。
   - **客户端计算**：差异比对在本地完成，确保隐私与安全。
   - **高效存储**：采用 SHA-256 哈希检测变更，并通过行级差异（Diff）上传而非全量文件，显著节省存储空间。
   - **灵活操作**：支持单篇笔记即时快照/同步，以及全库级别的备份与对账。
4. **使用建议**：恢复操作需用户显式执行（如从历史版本选择），插件不会自动拉取数据。建议定期使用“Sync”功能对账，确保云端元数据与本地状态一致，并利用侧边栏查看历史版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



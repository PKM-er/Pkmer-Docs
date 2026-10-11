---
uid: 1791709370199000
title: 'Obsidian 插件：Sync Witness'
tags: ['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Notices when a sync tool silently removes notes or rolls them back to an older version, tells you once, and restores the exact bytes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sync Witness

> [!Note] 插件名片
> - 插件名称：Sync Witness
> - 插件作者：CyberNative AI LLC
> - 插件说明：Notices when a sync tool silently removes notes or rolls them back to an older version, tells you once, and restores the exact bytes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cybernative-ai/sync-witness)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-witness)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cybernative-ai/sync-witness/master/README.md)



## 概述

**Sync Witness** 是一款旨在防止同步工具静默删除或回滚笔记的 Obsidian 插件。

**主要功能**：插件在本地记录库中所有文件的路径、大小、SHA-256 哈希及修改时间，并保留文件副本。当检测到文件被移除、清空或意外回退到旧版本时，它会发出一次性警报，并支持按字节精确恢复单个文件或整个事故现场。

**适用场景**：适用于使用 Syncthing、Dropbox 等同步工具的用户，特别是多设备同步时容易发生冲突、误删或版本覆盖的情况。

**核心特色**：
1. **智能静默**：自动忽略重命名、移动及用户主动编辑，仅对非人为的“静默丢失”报警，避免打扰。
2. **本地备份**：自动保存笔记（上限 10MB/个）和附件（上限 20MB/个，总计 1GB）的本地副本，确保数据可恢复。
3. **安全校验**：恢复后自动校验哈希值，若文件已变更则生成副本而非直接覆盖，防止二次冲突。

**使用建议**：建议开启插件以启用实时监控。若库中文件较大，请在设置中调整副本大小限制。定期查看侧边栏盾牌图标中的事故日志，以便追溯历史变更。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



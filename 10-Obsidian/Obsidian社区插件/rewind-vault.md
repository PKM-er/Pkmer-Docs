---
uid: 1793625620841000
title: "Obsidian 插件：Rewind Vault"
tags: ["备份与恢复", "安全与隐私", "文件管理", "移动端优化", "obsidian插件"]
description: "Backup and restore your vault with verification, retention and optional encryption. Works on mobile and desktop. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rewind Vault

> [!Note] 插件名片
> - 插件名称：Rewind Vault
> - 插件作者：danrhodes
> - 插件说明：Backup and restore your vault with verification, retention and optional encryption. Works on mobile and desktop. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '文件管理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrhodes/Rewind-Vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rewind-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrhodes/Rewind-Vault/master/README.md)



## 概述

Rewind Vault 是一款专注于 Obsidian 库备份与恢复的插件，旨在解决笔记丢失或误操作后的数据找回难题。它支持全量与增量备份，生成的备份文件为标准的 ZIP 格式，便于管理。核心功能包括自动或手动触发备份、多层级恢复（整个库、文件夹或单篇笔记）以及严格的完整性验证，确保备份数据真实可用。

典型场景包括日常自动备份与紧急恢复。例如，你可以设置插件在应用启动或定时自动执行增量备份，仅记录变更内容以节省空间；若不慎删除了重要笔记，可通过“时间机器”功能查看该笔记的历史版本并恢复，或利用“恢复已删除文件”功能找回近期被删内容，且默认恢复至独立目录，避免直接覆盖现有笔记。

相比同类插件，Rewind Vault 的特色在于其严谨的安全机制与移动端适配。它具备“损坏备份隔离”能力，一旦校验失败即标记备份为损坏并排除在保留策略外，防止误用坏数据。此外，它提供 AES-256-GCM 可选加密、批量变更保护（防止同步错误导致备份被大量脏数据覆盖）以及低内存模式，确保在手机等移动设备上也能稳定运行，无需依赖桌面端特有功能。

使用前需注意，备份文件夹应排除在 Obsidian Sync、iCloud 或 Git 等同步工具之外，以免多设备同步冲突损坏备份。该插件不适合需要实时云同步或跨设备无缝协作的用户，因为它主要依赖本地文件存储。若你依赖第三方云服务的自动同步功能，或希望备份文件直接存储在云端而非本地库中，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



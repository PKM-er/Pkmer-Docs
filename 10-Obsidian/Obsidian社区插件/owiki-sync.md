---
uid: 1791709369107000
title: 'Obsidian 插件：OWiki Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Sync your vault with a self-hosted OWiki server via WebSocket. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OWiki Sync

> [!Note] 插件名片
> - 插件名称：OWiki Sync
> - 插件作者：johnhom
> - 插件说明：Sync your vault with a self-hosted OWiki server via WebSocket. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johnhom1024/owiki-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?owiki-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johnhom1024/owiki-sync/master/README.md)



## 概述

**1. 主要功能**
OWiki Sync 是一款基于 WebSocket 的 Obsidian 多设备同步插件。它通过自托管的 OWiki 服务器，实现笔记在桌面端与移动端之间的实时同步，支持编辑、重命名和删除操作的即时传播。

**2. 适用场景**
适用于注重数据隐私、希望将笔记数据完全掌握在自己手中的用户。特别适合需要在多个设备间无缝切换工作流，且具备自建服务器能力的进阶用户。

**3. 核心特色**
*   **实时高效**：变更在 2 秒内同步，仅传输修改过的文件，零冗余流量。
*   **数据安全**：离线修改自动缓存，重连后同步；冲突时自动合并或生成 `.conflict.md` 副本，绝不静默覆盖本地文件。
*   **权限管理**：支持 PIN 码设备绑定，可设置“单设备写入模式”，其余设备仅可读不可写。

**4. 使用建议**
该插件及服务器目前处于**实验阶段**，同步逻辑尚未经过大规模验证，存在数据丢失或损坏风险。**强烈建议**在连接前对 Vault 进行独立完整备份，并定期保留本地副本，切勿完全依赖同步管道作为唯一数据源。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



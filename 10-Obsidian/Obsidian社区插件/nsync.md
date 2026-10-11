---
uid: 1791709368916000
title: 'Obsidian 插件：NSync'
tags: ['备份与恢复', '移动端优化', '第三方工具集成', 'obsidian插件']
description: 'Sync your vault across desktop and mobile through your own Google Drive (appDataFolder). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NSync

> [!Note] 插件名片
> - 插件名称：NSync
> - 插件作者：Prasit Singzom
> - 插件说明：Sync your vault across desktop and mobile through your own Google Drive (appDataFolder). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '移动端优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nesprasit/nsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nesprasit/nsync/master/README.md)



## 概述

**1. 主要功能**
NSync 是一款基于用户自有 Google Drive（appDataFolder）的 Obsidian 双向同步插件，支持桌面端与移动端（iOS/Android）无缝同步。它通过用户自己的 Google OAuth 客户端连接，无需第三方服务器或中间服务。

**2. 适用场景**
适用于希望将个人知识库私有化、避免依赖第三方同步服务（如 iCloud 或 Dropbox）的用户。特别适合拥有多个设备（手机+电脑）且对数据隐私有高要求，或希望利用现有 Google 账户进行低成本同步的场景。

**3. 核心特色**
- **隐私安全**：数据仅存储在用户 Drive 的隐藏文件夹中，权限最小化，不经过插件作者服务器。
- **冲突处理**：编辑冲突时保留两个版本副本，删除操作同步生效。
- **安全机制**：首次同步前提供预览审查，具备“安全停止”功能防止误删大量文件。
- **自动化**：支持每 60 秒自动同步及手动触发，移动端自动跳过超过 50MB 的大文件。

**4. 使用建议**
鉴于该插件处于早期阶段且会执行文件移动/删除操作，**务必在首次同步前完整备份 Vault**。建议先在小规模笔记库中测试，确认同步逻辑无误后再应用于主库，并定期检查 Google Drive 存储状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



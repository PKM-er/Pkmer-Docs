---
uid: 1791709365509000
title: 'Obsidian 插件：Azure Blob Sync'
tags: ['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Live sync your vault with your own Azure Blob Storage container using a SAS token. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Azure Blob Sync

> [!Note] 插件名片
> - 插件名称：Azure Blob Sync
> - 插件作者：Stefan Mayer
> - 插件说明：Live sync your vault with your own Azure Blob Storage container using a SAS token. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stefanmayer06/obsidian-blob-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?azure-blob-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stefanmayer06/obsidian-blob-sync/master/README.md)



## 概述

**Azure Blob Sync** 是一款允许用户将 Obsidian 笔记库与自有 Azure Blob Storage 容器进行实时双向同步的插件。

**适用场景**：适合希望数据完全私有、不依赖第三方同步服务（如 iCloud、Dropbox）的用户，特别是拥有 Azure 账户并追求数据自主权的跨设备（桌面端与移动端）笔记用户。

**核心特色**：
1. **完全私有**：通过 SAS Token 直连用户自己的 Azure 存储，无中间服务器，无遥测数据，数据仅存于用户订阅账户。
2. **智能双向同步**：采用三方比较机制，自动处理编辑、重命名及删除操作。
3. **数据安全**：冲突时保留双版本文件而非覆盖；删除文件进入回收站；若检测到大规模误删（如容器清空）会暂停并询问，防止数据丢失。
4. **跨平台兼容**：利用 Obsidian 原生 HTTP 客户端，移动端无需配置 CORS。

**使用建议**：用户需准备 Azure 存储账户并生成 SAS Token。建议开启“删除安全”机制，谨慎配置忽略模式。该插件免费，但需注意 Azure 存储及请求产生的少量费用。适合对数据隐私有高要求且熟悉 Azure 基本操作的高级用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



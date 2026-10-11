---
uid: 1791709368975000
title: 'Obsidian 插件：Onyx Sync'
tags: ['安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Zero-knowledge end-to-end encrypted sync engine. Supports VPS self-hosting and Cloudflare Serverless. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Onyx Sync

> [!Note] 插件名片
> - 插件名称：Onyx Sync
> - 插件作者：dxer
> - 插件说明：Zero-knowledge end-to-end encrypted sync engine. Supports VPS self-hosting and Cloudflare Serverless. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dxer/onyx-sync-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?onyx-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dxer/onyx-sync-obsidian/master/README.md)



## 概述

**Onyx Sync** 是一款零知识架构的端到端加密同步插件，旨在让用户完全掌控笔记数据。

**主要功能**：提供自托管的笔记同步服务，支持 VPS（Docker/Node.js）和 Cloudflare Serverless 部署。所有数据在本地通过 AES-256-GCM 加密，服务器仅存储密文，管理员无法查看内容或结构。

**适用场景**：适合对隐私安全有极高要求、希望摆脱商业云同步依赖、且具备基础服务器部署能力的用户。支持 Windows、macOS、Linux、iOS 及 Android 全平台。

**核心特色**：
1. **绝对隐私**：密钥永不离开设备，实现真正的零知识同步。
2. **高效传输**：采用内容寻址分块技术，仅上传变更部分，节省带宽。
3. **离线优先**：基于 WebSocket 实时同步，配合 IndexedDB 离线队列，断网编辑无压力。
4. **无厂商锁定**：完全自主部署，数据主权归用户所有。

**使用建议**：需自行部署后端服务器（推荐 Docker 一键部署或 Cloudflare 免费方案）。首次使用需创建设备令牌并配置服务器地址。注意该插件未经 Obsidian 官方人工审核，建议先备份数据再启用，并妥善保管管理员密码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



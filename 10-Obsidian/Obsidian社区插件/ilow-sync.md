---
uid: 1791709367707000
title: 'Obsidian 插件：Ilow Sync'
tags: ['文件管理', '安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Sync notes, files, settings and themes across devices in real time, end-to-end encrypted, via your own self-hosted server. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ilow Sync

> [!Note] 插件名片
> - 插件名称：Ilow Sync
> - 插件作者：Ilow
> - 插件说明：Sync notes, files, settings and themes across devices in real time, end-to-end encrypted, via your own self-hosted server. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ilow-space/IlowObsidianSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ilow-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ilow-space/IlowObsidianSync/master/README.md)



## 概述

**Ilow Sync** 是一款基于自托管服务器的 Obsidian 端到端加密实时同步插件。

1.  **主要功能**：通过用户自行部署的 Go/PostgreSQL 服务器，实现笔记、文件、插件设置、主题及二进制文件在多台设备间的实时同步。采用 CRDT（Loro）引擎处理冲突，支持离线优先模式。
2.  **适用场景**：适合拥有技术背景、注重数据隐私且希望完全掌控数据存储位置的用户。适用于多设备（如电脑、平板、手机）间无缝切换工作流，且不愿依赖第三方云服务的场景。
3.  **核心特色**：
    *   **极致隐私**：端到端 AES-256-GCM 加密，服务器仅存储密文，主密码永不离开本地设备。
    *   **智能合并**：基于 CRDT 的无冲突合并，避免“最后写入者胜”导致的数据丢失，并支持文件/文件夹重命名的结构感知同步。
    *   **便捷接入**：支持 QR 码快速配置新设备，简化多设备接入流程。
4.  **使用建议**：使用前必须先在 Linux 主机上通过脚本部署后端服务器（含 PostgreSQL 和 Go 二进制文件）。请确保具备基本的服务器运维能力，并妥善保管 API 密钥和加密盐值。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



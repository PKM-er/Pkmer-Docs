---
uid: 1791709366077000
title: 'Obsidian 插件：Cloud Relay'
tags: ['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Self-hosted vault sync across devices. Real-time per-keystroke, conflict-safe offline edits, mirrors notes, attachments, folders, and settings. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloud Relay

> [!Note] 插件名片
> - 插件名称：Cloud Relay
> - 插件作者：kafaw
> - 插件说明：Self-hosted vault sync across devices. Real-time per-keystroke, conflict-safe offline edits, mirrors notes, attachments, folders, and settings. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/enl69/cloud-relay)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloud-relay)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/enl69/cloud-relay/master/README.md)



## 概述

**Cloud Relay** 是一款自托管的 Obsidian 实时同步插件，通过自建服务器实现跨设备数据镜像，无需第三方云服务。

1. **主要功能**：支持笔记、附件、文件夹及设置的全量同步。基于 WebSocket 实现逐键实时传输，具备离线安全编辑能力，冲突时提供“保留本地/远程”或“合并”的可视化选择。
2. **适用场景**：适合注重数据隐私、拥有 Linux 服务器或 NAS 的用户，用于在多台设备间无缝同步个人知识库，且不希望数据经过第三方云端。
3. **核心特色**：完全自托管（无账号、无第三方依赖）；首次设置仅需部署 Docker 容器并配置隧道；新设备通过单一邀请链接即可加入，支持从首台设备完全镜像或合并数据；提供设备端恢复与服务端重置等工具。
4. **使用建议**：需先在 Linux 环境运行 `db-cloud-relay` 服务器并获取 Admin Token；首台设备创建库后，其他设备使用邀请链接加入。注意插件未经官方人工审查，建议自行评估安全性并定期备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709370058000
title: 'Obsidian 插件：Snapshot Relay'
tags: ['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Manual, confirmation-based vault snapshots through a self-hosted HTTP server. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Snapshot Relay

> [!Note] 插件名片
> - 插件名称：Snapshot Relay
> - 插件作者：木尘痕
> - 插件说明：Manual, confirmation-based vault snapshots through a self-hosted HTTP server. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/muchenhen/obsidian-snapshot-relay)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?snapshot-relay)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/muchenhen/obsidian-snapshot-relay/master/README.md)



## 概述

**Snapshot Relay** 是一款基于自托管 HTTP 服务器的 Obsidian 插件，用于手动管理笔记库快照。

1.  **主要功能**：支持将当前笔记库上传为不可变的版本快照，或从服务器下载指定快照。操作前会展示本地与远程清单的差异，确保用户知情。
2.  **适用场景**：适用于希望完全掌控数据备份、不依赖 Google Drive 等第三方云服务商，且偏好手动触发而非自动同步的用户。
3.  **核心特色**：
    *   **中立自托管**：基于无依赖的 Python 中继服务，不绑定特定厂商或隧道工具。
    *   **安全可控**：使用 HTTPS 和 Bearer Token 认证；自动排除插件设置目录，防止令牌泄露。
    *   **安全下载**：可选在下载前自动备份受影响的本地文件，避免误删风险。
    *   **跨平台**：支持桌面端及移动端（需用户可访问文件夹）。
4.  **使用建议**：当前版本为早期实现，侧重显式操作。安装时需将 `main.js` 等文件放入插件目录。建议在每次上传或下载前仔细核对差异清单，并合理配置中继 URL 和令牌，以实现可靠的版本恢复。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



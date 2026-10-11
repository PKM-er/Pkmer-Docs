---
uid: 1791709368957000
title: 'Obsidian 插件：OmniDrive'
tags: ['第三方工具集成', '备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
description: 'Synchronize your vault with Google Drive using a privacy-first BYOK architecture. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OmniDrive

> [!Note] 插件名片
> - 插件名称：OmniDrive
> - 插件作者：chubby
> - 插件说明：Synchronize your vault with Google Drive using a privacy-first BYOK architecture. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chubbyy/omnidrive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?omnidrive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chubbyy/omnidrive/master/README.md)



## 概述

**1. 主要功能**
OmniDrive 是一款专为 Obsidian 设计的隐私优先型 Google Drive 同步引擎。它采用 BYOK（自带密钥）架构，确保数据在本地硬盘与 Google Drive 之间直接传输，无中间服务器或代理，避免共享 API 配额并保护隐私。

**2. 适用场景**
适用于希望将 Obsidian 笔记库同步至 Google Drive 的用户。特别适合已使用 iCloud、Dropbox 等其他云服务的用户，可通过“单向备份”或“历史归档”模式避免多端同步冲突。

**3. 核心特色**
*   **三种同步模式**：支持双向镜像（默认）、单向备份（仅推送本地变更）及历史归档（本地删除不影响云端）。
*   **智能冲突处理**：对 Markdown 文件采用三方哈希（SHA-256）协调机制，安全处理离线编辑，冲突时通过复制文件而非覆盖来防止数据丢失。
*   **高效传输**：支持分块可恢复上传，优化大文件传输体验。

**4. 使用建议**
若同时使用其他云同步服务（如 iCloud、OneDrive），**切勿**启用“双向镜像”模式，以免引发竞态条件导致文件重复或损坏。建议根据需求选择“单向备份”或“历史归档”模式，以确保数据一致性与安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



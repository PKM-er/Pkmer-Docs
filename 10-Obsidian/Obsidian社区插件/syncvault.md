---
uid: 1791709370209000
title: 'Obsidian 插件：SyncVault'
tags: ['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SyncVault

> [!Note] 插件名片
> - 插件名称：SyncVault
> - 插件作者：talon
> - 插件说明：
> - 插件分类：['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tiga89/syncvault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncvault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tiga89/syncvault/master/README.md)



## 概述

**主要功能**
SyncVault 是一款基于自托管 CouchDB 的 Obsidian 笔记同步插件。它提供双向实时同步服务，支持桌面与移动端多设备无缝连接，确保数据在保存时即时更新，断网后自动重连。

**适用场景**
适用于注重数据隐私、拥有独立服务器资源且需要跨设备高效同步笔记的用户。特别适合对云端服务安全性有顾虑，希望完全掌控个人数据主权的进阶用户。

**核心特色**
1. **端到端加密**：采用 AES-256-GCM 算法，密钥经 PBKDF2 派生。文件内容及名称在离开设备前即被加密，服务器仅存储密文，确保隐私安全。
2. **智能冲突处理**：Markdown 文件支持自动合并（如超集直接合并，否则保留双版本标记），其他文件保留本地版本并生成冲突副本，避免数据丢失。
3. **全中文界面**：设置、加密及同步状态均提供完整中文支持，降低使用门槛。

**使用建议**
1. **禁用其他同步**：使用前务必关闭 Obsidian Sync、iCloud 等同步服务，防止数据冲突。
2. **备份优先**：首次配置前请完整备份笔记库。
3. **统一配置**：所有设备需填入相同的服务器地址、数据库名及密码短语。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



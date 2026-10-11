---
uid: 1791709370561000
title: 'Obsidian 插件：Tri Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Sync notes through WebDAV, S3-compatible storage, or Baidu Netdisk, with conflict copies and local backups. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tri Sync

> [!Note] 插件名片
> - 插件名称：Tri Sync
> - 插件作者：aho
> - 插件说明：Sync notes through WebDAV, S3-compatible storage, or Baidu Netdisk, with conflict copies and local backups. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hao5516/obsidian-tri-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tri-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hao5516/obsidian-tri-sync/master/README.md)



## 概述

**1. 主要功能**
Tri Sync 是一款 Obsidian 笔记同步插件，支持通过 WebDAV、S3 兼容存储或百度网盘进行多端数据同步。它提供同步前预览、冲突副本保留及本地备份机制，确保数据在传输过程中的安全性与可追溯性。

**2. 适用场景**
适用于需要跨设备（如电脑与手机）同步笔记，且希望使用自有云存储（如自建 WebDAV、S3 或百度网盘）而非官方付费同步服务的用户。特别适合对数据隐私有较高要求，或希望控制存储成本的进阶用户。

**3. 核心特色**
*   **同步前预览**：在同步前展示预计上传、下载及冲突文件，避免意外操作。
*   **灵活排除规则**：支持按文件夹、路径或扩展名排除特定文件，且规则仅保存在本机。
*   **精细控制**：支持暂停/停止同步，提供“恢复为新文件”功能以解决冲突，并记录最近 20 次同步历史。
*   **隐私安全**：无开发者中转服务器，直接连接用户配置的存储端点，密钥本地存储。

**4. 使用建议**
*   首次使用请务必先“测试连接”，再保存配置。
*   建议在高级选项中设置排除规则，避免同步大体积媒体文件（如视频）。
*   注意插件目前未实现端到端加密，存储服务商可见上传数据，敏感信息请自行加密。
*   不同设备的排除规则需分别设置，已上传内容不会因新规则自动删除。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



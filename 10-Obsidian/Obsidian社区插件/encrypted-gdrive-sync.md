---
uid: 1791709366748000
title: 'Obsidian 插件：Encrypted Google Drive Sync'
tags: ['第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
description: 'Sync file contents with Google Drive using AES-256-GCM encryption, with encryption keys kept on your device. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Encrypted Google Drive Sync

> [!Note] 插件名片
> - 插件名称：Encrypted Google Drive Sync
> - 插件作者：Nick
> - 插件说明：Sync file contents with Google Drive using AES-256-GCM encryption, with encryption keys kept on your device. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/explor3universe/ObsidianE2EGDriveSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?encrypted-gdrive-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/explor3universe/ObsidianE2EGDriveSync/master/README.md)



## 概述

**主要功能**
该插件通过 AES-256-GCM 端到端加密，将 Obsidian 笔记库与 Google Drive 进行双向同步。密钥仅保留在本地设备，文件内容在离开设备前即被加密，确保数据隐私。

**适用场景**
适用于需要跨设备同步笔记、且对数据隐私有极高要求，希望利用 Google Drive 作为加密备份存储用户的桌面端用户。

**核心特色**
1. **强隐私保护**：采用双层密钥架构，主密钥由密码通过 PBKDF2 派生保护，修改密码无需重新加密整个库。
2. **完整同步**：支持双向同步、冲突检测与解决，并保留文件夹结构。
3. **安全机制**：无遥测数据收集，OAuth 授权使用本地临时服务器及 PKCE 保护，仅连接 Google 官方域名。

**使用建议**
1. 需准备 Google 账号及 Cloud OAuth 客户端。
2. 仅支持桌面端（Obsidian 1.13.0+）。
3. 注意文件名、目录结构及修改时间仍可见，仅内容加密。
4. 建议配置自动同步间隔，并定期检查排除项设置以优化同步效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



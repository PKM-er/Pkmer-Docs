---
uid: 1791709370202000
title: 'Obsidian 插件：Syncher'
tags: ['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Live two-way sync of your vault with a folder on your own server over SSH and SFTP. Works on Windows, Linux and Android. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Syncher

> [!Note] 插件名片
> - 插件名称：Syncher
> - 插件作者：racoon
> - 插件说明：Live two-way sync of your vault with a folder on your own server over SSH and SFTP. Works on Windows, Linux and Android. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tequrity/syncher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tequrity/syncher/master/README.md)



## 概述

**主要功能**
Syncher 是一款实现 Obsidian 仓库与自有服务器文件夹之间实时双向同步的插件。它基于纯 SSH/SFTP 协议，无需依赖云服务或第三方中间件，支持 Windows、Linux 和 Android 平台。

**适用场景**
适用于希望数据完全自主掌控的用户，特别是拥有 Linux 服务器、NAS、VPS 或树莓派等自有基础设施的人群。适合需要跨设备（如电脑与手机）无缝协作，且对隐私安全有较高要求的笔记工作流。

**核心特色**
1. **实时同步**：停止输入后瞬间同步，其他在线设备秒级接收更新。
2. **离线可用**：本地与远程副本并存，断网时仍可编辑，重连后自动补全同步。
3. **完全自主**：仅使用标准 OpenSSH 协议，无订阅费，数据不经过任何第三方。
4. **智能冲突处理**：支持镜像删除操作（含弹窗提示），多设备编辑同一笔记时采用“最后写入者获胜”机制。

**使用建议**
1. **服务器准备**：确保目标服务器已安装并配置好 OpenSSH 服务，且具备足够的存储空间。
2. **版本要求**：需使用 Obsidian 1.8.7 及以上版本。
3. **网络环境**：由于依赖 SSH 连接，请确保设备间网络通畅，若服务器在内网需配置端口转发或 VPN。
4. **冲突意识**：虽然支持双向同步，但建议避免多人同时高频编辑同一篇笔记，以减少数据覆盖风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



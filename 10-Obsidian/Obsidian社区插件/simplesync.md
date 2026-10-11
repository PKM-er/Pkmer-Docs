---
uid: 1791709370006000
title: 'Obsidian 插件：SimpleSync'
tags: ['备份与恢复', '第三方工具集成', '安全与隐私', 'obsidian插件']
description: 'Sync your vaults through your own self-hosted SimpleSync server. Enter the server address, name and password, then pick a vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SimpleSync

> [!Note] 插件名片
> - 插件名称：SimpleSync
> - 插件作者：Jiří Čepelka 
> - 插件说明：Sync your vaults through your own self-hosted SimpleSync server. Enter the server address, name and password, then pick a vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jirkacepelka/SimpleSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simplesync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jirkacepelka/SimpleSync/master/README.md)



## 概述

**SimpleSync** 是一款基于自托管服务器的 Obsidian 同步插件，主打轻量、极简与隐私安全。

**主要功能**
通过自建服务器实现多设备（桌面/移动端）笔记实时同步。无需配置复杂的 CouchDB 或 S3，仅需输入服务器地址、账号密码即可连接 Vault。支持 Web 端直接编辑，并具备版本历史、回收站及自动备份功能。

**适用场景**
适合注重数据隐私、拥有 NAS、ZimaOS 或廉价 VPS 资源的用户。适用于需要跨设备无缝协作、离线可用且希望避免云端订阅费用的个人或小团队。

**核心特色**
1. **极致轻量**：单个 Docker 容器（Go+SQLite），镜像仅约 27MB，资源占用极低。
2. **智能冲突处理**：并发编辑不同部分时自动合并，无法合并时保留冲突副本，确保数据零丢失。
3. **多端支持**：支持 iOS/Android 及桌面端，变更秒级同步；Web 管理界面支持 8 种语言。
4. **发布功能**：可将选定笔记一键发布为公开网站。

**使用建议**
建议部署在稳定的 NAS 或 VPS 上，利用 Docker 快速启动。定期利用其内置的备份功能创建快照，以防服务器故障。由于是社区插件，使用前请确认服务器安全性，并妥善保管管理员密码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709369091000
title: 'Obsidian 插件：OSS Sync and Share'
tags: ['文件管理', '备份与恢复', '发布工具', '第三方工具集成', 'obsidian插件']
description: 'Self-hosted sync and share for Obsidian: Markdown + attachments + .obsidian config, LWW-based multi-device sync, lightweight blog publishing, and collaboration editing. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OSS Sync and Share

> [!Note] 插件名片
> - 插件名称：OSS Sync and Share
> - 插件作者：HikariTish
> - 插件说明：Self-hosted sync and share for Obsidian: Markdown + attachments + .obsidian config, LWW-based multi-device sync, lightweight blog publishing, and collaboration editing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '发布工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/helantianshen/oss-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oss-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/helantianshen/oss-sync/master/README.md)



## 概述

**OSS Sync and Share** 是一款自托管的 Obsidian 同步与分享插件，支持 Markdown、附件及 `.obsidian` 配置的全量同步。

**主要功能**：实现多设备实时同步（增删改移），提供轻量级博客发布及协作编辑功能。基于 LWW（最后写入胜出）机制处理冲突，支持版本控制与三方合并。

**适用场景**：适合追求数据隐私、希望摆脱云端依赖的个人用户或小型团队。适用于需要跨设备无缝工作、离线编辑后自动补传，以及希望将笔记库转化为公开博客或进行内部协作的场景。

**核心特色**：
1. **自托管单二进制部署**：基于 Go 和 Node.js，部署简单，数据完全自主掌控。
2. **离线优先架构**：本地编辑先写入持久化队列，重启后自动恢复，确保数据不丢失。
3. **细粒度权限管理**：支持 Vault 隔离，区分管理员/参与者角色，设备需独立审批授权。
4. **智能冲突处理**：Markdown 支持三方合并，二进制文件保留双方副本，提供多种冲突解决策略。

**使用建议**：
1. 需具备基本的服务器部署能力，建议配置 HTTPS 以保障传输安全。
2. 初次使用需仔细配置 Vault 成员权限及设备审批流程。
3. 鉴于插件未经官方人工审核，建议定期备份数据，并关注 GitHub Issue 获取最新修复信息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



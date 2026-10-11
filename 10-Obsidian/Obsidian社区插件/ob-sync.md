---
uid: 1791709370203000
title: 'Obsidian 插件：SyncHub'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Sync your vault with GitHub or Gitee, and install community plugins from both. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SyncHub

> [!Note] 插件名片
> - 插件名称：SyncHub
> - 插件作者：Sofqi
> - 插件说明：Sync your vault with GitHub or Gitee, and install community plugins from both. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dyse-sofqi/SyncHub)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ob-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dyse-sofqi/SyncHub/master/README.md)



## 概述

**1. 主要功能**
SyncHub 是一款集笔记同步、图片备份与插件管理于一体的 Obsidian 插件。它支持通过 Git 将笔记库同步至 GitHub 或 Gitee，提供提交、拉取、推送及差异查看功能；同时利用 Cloudflare R2 对象存储同步图片，并支持从双平台安装、更新社区插件与主题。

**2. 适用场景**
适用于需要多设备备份笔记的用户，特别是身处国内网络环境、偏好 Gitee 或需要快速访问 GitHub 资源的用户。适合希望统一管理笔记、图片及插件版本，且对数据安全性有较高要求的知识工作者。

**3. 核心特色**
*   **双平台适配**：统一支持 GitHub 和 Gitee，解决网络访问痛点。
*   **分离存储策略**：笔记走 Git 版本控制，图片走对象存储，兼顾版本追溯与存储效率。
*   **安全同步机制**：冲突不自动解决而是生成处理指南；图片同步仅补齐不自动删除，删除前需确认，防止数据丢失。
*   **插件生态整合**：可绑定库内已有插件，实现一键更新。

**4. 使用建议**
建议先配置好 GitHub 或 Gitee 仓库权限，再启用同步功能。对于图片同步，建议定期清理本地不再需要的图片以释放 R2 存储配额。遇到同步冲突时，请仔细阅读插件生成的处理指南，手动解决后再继续操作。注意该插件未经官方人工审核，使用前建议先备份当前 Vault。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



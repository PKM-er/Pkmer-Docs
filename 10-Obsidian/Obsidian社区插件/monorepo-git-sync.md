---
uid: 1791709368703000
title: 'Obsidian 插件：Monorepo Git Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Sync this vault with one folder of a shared GitHub repository that holds all your vaults. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Monorepo Git Sync

> [!Note] 插件名片
> - 插件名称：Monorepo Git Sync
> - 插件作者：vaditim
> - 插件说明：Sync this vault with one folder of a shared GitHub repository that holds all your vaults. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vaditim/obsidian-monorepo-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?monorepo-git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vaditim/obsidian-monorepo-sync/master/README.md)



## 概述

**1. 主要功能**
Monorepo Git Sync 允许将多个 Obsidian 库同步到同一个 GitHub 仓库的不同文件夹中。它无需本地安装 Git，支持桌面端和 Android 平台，通过细粒度 Token 实现安全连接。

**2. 适用场景**
适合希望统一管理多个笔记库的用户，特别是需要在不同设备（如电脑和手机）间无缝同步笔记、插件及主题设置，且偏好使用单一 GitHub 仓库进行版本管理的场景。

**3. 核心特色**
- **智能冲突处理**：当多设备编辑同一笔记时，本地版本保留，另一版本自动保存为带时间戳的冲突文件，避免数据丢失。
- **误删恢复**：被删除的文件在隐藏临时文件夹中保留 2 天，可通过命令面板跨设备恢复。
- **全面同步**：同步笔记、附件及大部分 `.obsidian` 配置（插件、主题等），支持自定义忽略列表（如默认忽略 `.trash`）。

**4. 使用建议**
- 安装后需配置具有“Contents: Read and write”权限的细粒度 Token。
- 建议定期手动点击图标或运行“Sync now”命令以确保即时同步。
- 遇到冲突时，请对比冲突文件并手动合并，删除冗余副本。
- 注意仓库需至少有一个提交记录方可使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



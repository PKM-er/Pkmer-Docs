---
uid: 1786577078032000
title: 'Obsidian 插件：Git Vault Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', '自动化与AI', 'obsidian插件']
description: '一键将整个仓库同步到 GitHub —— 无论是在桌面端还是移动端都能轻松实现。支持交互式冲突解决、提交预览和自动同步功能。采用纯 JavaScript 编写，无需系统安装 Git。 - 此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Git Vault Sync

> [!Note] 插件名片
> - 插件名称：Git Vault Sync
> - 插件作者：alexandervasin
> - 插件说明：一键将整个仓库同步到 GitHub —— 无论是在桌面端还是移动端都能轻松实现。支持交互式冲突解决、提交预览和自动同步功能。采用纯 JavaScript 编写，无需系统安装 Git。 - 此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/heeeyman/ObsSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/heeeyman/ObsSync/master/README.md)



## 概述

### 主要功能
Git Vault Sync 可让你一键将整个 Obsidian 库同步到 GitHub，支持桌面端和移动端。具备交互式冲突解决、提交预览和自动同步功能。

### 适用场景
适用于需要在不同设备（桌面端和移动端）同步 Obsidian 笔记库到 GitHub 的用户。

### 核心特色
- 纯 JavaScript 插件，无需系统 `git`，支持多平台。
- 有两种同步引擎，桌面端用 Git 引擎，可保留完整本地历史和进行真正的双亲合并；移动端用 GitHub API 引擎，能逐块传输文件，避免内存不足。
- 支持排除路径和遵循 `.gitignore` 规则，GitHub API 引擎会跳过配置文件夹。
- 提供一键同步和冲突解决界面。

### 使用建议
根据设备选择合适的同步引擎，桌面端选 `Git`，移动端选 `GitHub API` 或 `Auto`。若不希望同步配置文件夹，可利用排除规则。遇到冲突时，通过冲突解决界面选择合适的版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



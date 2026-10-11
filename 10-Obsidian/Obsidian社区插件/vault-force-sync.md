---
uid: 1791709370835000
title: 'Obsidian 插件：Vault Force Sync'
tags: ['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Force/incremental sync vault data to a configurable GitHub remote (git path configurable), skips >100MB files and continues; logs results to a viewable log. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Force Sync

> [!Note] 插件名片
> - 插件名称：Vault Force Sync
> - 插件作者：rosswang
> - 插件说明：Force/incremental sync vault data to a configurable GitHub remote (git path configurable), skips >100MB files and continues; logs results to a viewable log. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/github-vault-force-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-force-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/github-vault-force-sync/master/README.md)



## 概述

**1. 主要功能**
Vault Force Sync 利用系统 Git 将 Obsidian 库同步至 GitHub。支持增量同步（仅上传变更）、强制推送及自动跳过超过 100MB 的大文件，确保同步不中断。

**2. 适用场景**
适用于需要定期备份笔记至 GitHub 的桌面端用户，特别是那些拥有大型库、包含大文件，或需要处理本地历史重写等复杂同步情况的场景。

**3. 核心特色**
- **智能同步模式**：提供增量、自动（安全强制）和强制三种模式，平衡安全性与灵活性。
- **自动过滤机制**：通过 `.gitignore` 自动忽略 `.obsidian` 等隐藏文件，并通过排除列表跳过超大文件。
- **透明日志**：每次同步结果记录在本地 `sync.log` 中，可随时查看，便于排查问题。
- **网络适配**：支持配置 HTTP(S) 代理，适应不同网络环境。

**4. 使用建议**
- 仅限 Obsidian 桌面版使用，需确保系统已安装 Git 且库目录已初始化 Git 仓库。
- 建议先手动执行 `git init` 并配置好 GitHub 远程仓库权限。
- 若网络受限，请在设置中配置代理；对于重要数据，建议优先使用“增量”或“自动”模式以避免意外覆盖远程数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



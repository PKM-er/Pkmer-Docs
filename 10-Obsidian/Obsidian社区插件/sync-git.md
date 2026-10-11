---
uid: 1791709370201000
title: 'Obsidian 插件：SyncGit'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Sync your vault across devices using GitHub REST API without requiring local Git. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SyncGit

> [!Note] 插件名片
> - 插件名称：SyncGit
> - 插件作者：Bhoopesh R K
> - 插件说明：Sync your vault across devices using GitHub's REST API without requiring local Git. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bhoopeshrk/sync-git)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-git)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bhoopeshrk/sync-git/master/README.md)



## 概述

**主要功能**
SyncGit 是一款通过 GitHub REST API 实现 Obsidian 库跨设备同步的插件。它无需本地安装 Git，即可在桌面、iOS 和 Android 端间同步笔记，并自动处理行尾规范及离线状态。

**适用场景**
适用于希望在不依赖第三方同步服务（如 iCloud 或 Dropbox）且不想配置本地 Git 环境的情况下，利用私有 GitHub 仓库作为桥梁，实现多平台笔记数据一致性的用户。

**核心特色**
1. **智能同步**：采用增量哈希跳过未修改文件，支持自动/手动触发，具备离线感知能力。
2. **冲突处理**：内置三方冲突解决机制，提供文件元数据上下文，并在并发编辑时自动重试。
3. **安全与稳定**：Token 仅存于浏览器 localStorage，不写入配置文件；自动跳过超过 25MB 的大文件，支持 GitHub Enterprise 自定义 API。

**使用建议**
1. **安装**：目前需手动从 Releases 下载 `main.js` 和 `manifest.json` 至插件目录并重启 Obsidian。
2. **配置**：在设置中选择认证模式并输入凭据，建议创建私有仓库以确保隐私。
3. **操作**：通过侧边栏图标或命令面板执行同步，利用状态栏实时监控同步状态，并定期查看同步日志以排查潜在问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



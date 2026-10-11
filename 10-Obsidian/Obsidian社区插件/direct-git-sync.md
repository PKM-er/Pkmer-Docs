---
uid: 1791709366541000
title: 'Obsidian 插件：Direct Git Sync'
tags: ['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Sync your vault natively with a GitHub repository on both Desktop and Mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Direct Git Sync

> [!Note] 插件名片
> - 插件名称：Direct Git Sync
> - 插件作者：swekizer
> - 插件说明：Sync your vault natively with a GitHub repository on both Desktop and Mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/swekizer/GitHub-Sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?direct-git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/swekizer/GitHub-Sync/master/README.md)



## 概述

**1. 主要功能**
Direct Git Sync 允许 Obsidian 库直接同步至 GitHub 仓库。它通过内置的 `isomorphic-git` 处理 Git 操作，无需在设备上安装 Git CLI。插件提供“一键同步”功能，自动完成暂存、提交、拉取、合并及推送，并支持验证仓库与令牌的有效性。

**2. 适用场景**
*   希望将私人笔记备份至 GitHub 的用户。
*   需要在桌面端和移动端之间共享同一库的用户。
*   需要利用 Git 提交记录进行版本管理，但不想依赖系统 Git 环境的场景。

**3. 核心特色**
*   **跨平台原生支持**：同一套流程适用于桌面和移动端，无需额外配置。
*   **极简工作流**：仅需输入仓库 URL 和个人访问令牌（PAT）即可使用，通过侧边栏按钮或设定间隔自动同步。
*   **冲突处理**：遇到合并冲突时，保留本地文件，并将远程版本保存为单独的冲突副本，避免数据丢失。
*   **状态可视**：提供专用模态窗口，显示上次同步时间及历史记录。

**4. 使用建议**
*   确保生成具有 `repo` 权限的 GitHub 个人访问令牌（PAT）。
*   首次使用建议手动点击同步以验证配置正确性。
*   可设置自动同步间隔，但需留意网络状态，避免在弱网环境下频繁触发冲突。
*   注意该插件尚未经过 Obsidian 官方人工审核，建议定期备份重要数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



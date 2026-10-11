---
uid: 1791709367425000
title: 'Obsidian 插件：Halyard Sync'
tags: ['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
description: 'Sync your vault with a git repository (GitHub, GitLab, Bitbucket, Gitea/Forgejo, Azure DevOps, or any HTTPS host) on desktop and mobile. No native git required. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Halyard Sync

> [!Note] 插件名片
> - 插件名称：Halyard Sync
> - 插件作者：Tim Helgeson
> - 插件说明：Sync your vault with a git repository (GitHub, GitLab, Bitbucket, Gitea/Forgejo, Azure DevOps, or any HTTPS host) on desktop and mobile. No native git required. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/timrs2998/halyard-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?halyard-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/timrs2998/halyard-sync/master/README.md)



## 概述

**1. 主要功能**
Halyard Sync 允许用户在桌面端（Windows/macOS）和移动端（iOS/Android）将 Obsidian 库与 Git 仓库进行同步。它内置了编译为 WebAssembly 的 libgit2 引擎，无需在设备上安装原生 Git 或配置 SSH 密钥，即可通过 HTTPS 实现真正的 Git 同步。

**2. 适用场景**
适用于需要在多设备间无缝同步笔记、希望利用 Git 版本控制优势但又不想处理复杂本地 Git 环境的用户。支持 GitHub、GitLab、Bitbucket、Gitea/Forgejo、Azure DevOps 及任意 HTTPS 主机。

**3. 核心特色**
*   **零依赖**：无需安装 Git，开箱即用。
*   **全平台支持**：完美兼容移动端与桌面端。
*   **冲突处理**：支持在冲突时自动创建 Pull Request/Merge Request。
*   **安全加密**：内置兼容 git-crypt 的过滤器。
*   **灵活认证**：支持 OAuth 设备流（GitHub/GitLab）及 PAT 令牌。

**4. 使用建议**
*   确保 Obsidian 版本在 1.13.0 以上。
*   根据所用平台选择正确的认证方式（如 Bitbucket 需 API Token 而非 App Password）。
*   自托管服务器（如 GitLab/Gitea）需在高级设置中配置基础 URL。
*   注意该插件尚未经过 Obsidian 官方人工审核，建议先备份数据再启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



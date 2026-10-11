---
uid: 1791709367424000
title: 'Obsidian 插件：Halyard Fetch'
tags: ['文件管理', '第三方工具集成', '自动化与AI', '备份与恢复', 'obsidian插件']
description: 'Mirror a GitLab package or GitHub release artifact into a vault folder on a schedule. Read-only, no git required, works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Halyard Fetch

> [!Note] 插件名片
> - 插件名称：Halyard Fetch
> - 插件作者：Tim Helgeson
> - 插件说明：Mirror a GitLab package or GitHub release artifact into a vault folder on a schedule. Read-only, no git required, works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '自动化与AI', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/timrs2998/halyard-fetch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?halyard-fetch)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/timrs2998/halyard-fetch/master/README.md)



## 概述

**1. 主要功能**
Halyard Fetch 允许用户按预定计划或手动触发，将 GitLab 通用包或 GitHub Release 中的制品（Artifact）下载、解压并镜像同步到 Obsidian 库的指定文件夹中。

**2. 适用场景**
适用于需要定期获取远程构建产物、文档包或数据快照的场景。特别适合希望将外部生成的静态资源纳入本地知识库管理，且无需维护完整 Git 仓库的用户。

**3. 核心特色**
*   **纯只读安全**：仅执行下载与解压，不依赖 Git，无法向源端推送或修改数据，确保源环境安全。
*   **跨平台支持**：同时支持桌面端和移动端（Mobile）。
*   **灵活源支持**：兼容 GitLab 通用包注册表和 GitHub Release 资产，支持精确版本或 `latest` 别名。
*   **轻量认证**：仅需最小权限的 PAT（Personal Access Token）即可工作。

**4. 使用建议**
*   配置时请确保在 GitLab 或 GitHub 生成具有 `read_api` 或 `Contents: Read` 权限的细粒度令牌。
*   指定一个独立的 Vault 子文件夹作为目标路径，避免覆盖现有笔记。
*   注意该插件目前尚未被 Obsidian 官方人工审查，且未列入社区插件目录，建议通过 BRAT 等第三方管理器安装，并自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



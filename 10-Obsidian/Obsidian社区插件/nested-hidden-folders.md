---
uid: 1791709368788000
title: 'Obsidian 插件：Nested Hidden Folders'
tags: ['文件管理', '界面优化', '导航与状态栏', 'obsidian插件']
description: 'Index hidden folders at every vault level so they appear in the file tree. Toggle each path. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nested Hidden Folders

> [!Note] 插件名片
> - 插件名称：Nested Hidden Folders
> - 插件作者：Dominik Bach
> - 插件说明：Index hidden folders at every vault level so they appear in the file tree. Toggle each path. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mit-bach/nested-hidden-folders)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nested-hidden-folders)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mit-bach/nested-hidden-folders/master/README.md)



## 概述

**1. 主要功能**
该插件用于索引 Vault 中**所有层级**的隐藏文件夹（以 `.` 开头的目录），使其显示在 Obsidian 的文件树中。用户可针对每个路径单独切换显示状态。

**2. 适用场景**
适用于需要访问深层嵌套隐藏目录的场景，例如管理 `classes/.grok`、`.github` 或嵌套的 Agent 技能文件夹。特别适合那些仅根目录隐藏文件夹插件（如 Hidden Folders Access）无法覆盖的复杂目录结构。

**3. 核心特色**
*   **全层级支持**：突破仅索引根目录的限制，能发现任意深度的点文件夹。
*   **独立控制**：允许用户按需逐个开启或关闭特定隐藏路径的可见性。
*   **安全性增强**：自动丢弃设置文件中不存在的无效路径，防止复制配置时产生虚假文件夹（如 `.pi`）。
*   **平台限制**：仅支持桌面端（Desktop only）。

**4. 使用建议**
*   **互斥使用**：启用本插件时，请**禁用** “Hidden Folders Access” 插件，因为两者修补相同的文件适配器，同时启用会导致冲突。
*   **操作步骤**：启用插件后，进入设置页面，刷新文件树，然后手动勾选需要显示的隐藏路径。
*   **注意**：该插件尚未经过 Obsidian 官方人工审核，请谨慎使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709369898000
title: 'Obsidian 插件：Shadow Tree'
tags: ['文件管理', '界面优化', '效率工具', 'obsidian插件']
description: 'Hides empty and irrelevant folders from the file explorer without deleting them: ignore patterns, per-folder pins, optional Sync exclusion. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Shadow Tree

> [!Note] 插件名片
> - 插件名称：Shadow Tree
> - 插件作者：Johannes Kaindl
> - 插件说明：Hides empty and irrelevant folders from the file explorer without deleting them: ignore patterns, per-folder pins, optional Sync exclusion. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/shadow-tree)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?shadow-tree)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/shadow-tree/master/README.md)



## 概述

**1. 主要功能**
Shadow Tree 插件能智能隐藏 Obsidian 文件资源管理器中的空文件夹及无关目录。它通过识别“有效内容”（默认为 Markdown、Canvas 和 Base 文件）及匹配 `.gitignore` 风格的忽略规则，自动过滤掉仅包含代码、构建产物或图片的文件夹。所有文件仅被视觉隐藏，未被删除或移动，点击侧边栏图标即可一键恢复显示。

**2. 适用场景**
特别适用于将包含大量代码仓库（如含有 `node_modules`、`dist` 等构建目录）的文件夹作为 Obsidian 库的情况，能有效解决文件列表被大量无关技术文件夹刷屏的问题。

**3. 核心特色**
*   **非破坏性隐藏**：仅改变视图，不触碰实际文件结构。
*   **智能递归判断**：若文件夹内仅隐藏路径下的文件（如 `node_modules` 中的笔记），其父文件夹也会被视为“空”而隐藏。
*   **灵活配置**：支持自定义有效文件类型、按文件夹固定显示（Pin）以及可选的 Sync 排除设置。

**4. 使用建议**
建议将默认有效文件类型保持为笔记类格式，利用 `.gitignore` 规则屏蔽常见的代码依赖目录。对于需要偶尔查看但平时不想显示的文件夹，可使用“Pin”功能固定显示，避免误操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709367037000
title: 'Obsidian 插件：File System View'
tags: ['文件管理', '导航与状态栏', '效率工具', 'obsidian插件']
description: 'Browse and query your local file system as an interactive, collapsible tree inside any note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：File System View

> [!Note] 插件名片
> - 插件名称：File System View
> - 插件作者：zakin
> - 插件说明：Browse and query your local file system as an interactive, collapsible tree inside any note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/isaquepereira/obsidian-fsview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fsview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/isaquepereira/obsidian-fsview/master/README.md)



## 概述

**主要功能**
File System View 允许用户在 Obsidian 笔记中嵌入交互式、可折叠的本地文件系统树。通过 `fsview` 代码块指向 Mac 上的任意文件夹或文件，即可实时渲染目录结构，并支持点击在 Finder 中打开或定位文件。

**适用场景**
适用于需要频繁引用 Vault 外部本地文件、管理大型项目目录或记录系统路径的场景。特别适合在笔记中可视化展示外部资源结构，或快速访问 Mac 本地磁盘中的特定文件。

**核心特色**
1. **全系统访问**：突破 Vault 限制，可浏览 Mac 任意路径（如 `~/`）。
2. **懒加载机制**：文件夹仅在展开时扫描，指向根目录等大规模路径时依然瞬间响应，性能极佳。
3. **内联提及**：正文中以 `~/` 或 `/` 开头的有效路径会自动转为可点击链接，无需代码块即可在 Finder 中打开。
4. **交互体验**：支持展开/折叠、点击文件夹打开、点击文件高亮显示，操作直观流畅。

**使用建议**
仅限 macOS 桌面端（Obsidian 1.4+）。建议在笔记中用 `fsview` 代码块管理大型项目索引，利用内联路径功能快速链接常用外部文件。注意该插件未经官方人工审核，使用前请确保路径安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



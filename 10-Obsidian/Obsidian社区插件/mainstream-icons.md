---
uid: 1791709368272000
title: 'Obsidian 插件：Mainstream Icons'
tags: ['样式与美化', '界面优化', '效率工具', 'obsidian插件']
description: 'Inject additional mainstream icons from Lucide and Lucide Lab. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mainstream Icons

> [!Note] 插件名片
> - 插件名称：Mainstream Icons
> - 插件作者：kotaindah55
> - 插件说明：Inject additional mainstream icons from Lucide and Lucide Lab. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kotaindah55/mainstream-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mainstream-icons)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kotaindah55/mainstream-icons/master/README.md)



## 概述

**1. 主要功能**
该插件旨在为 Obsidian 注入来自 Lucide 和 Lucide Lab 的最新主流图标。它弥补了 Obsidian 核心应用缺失部分较新图标（如 `list-clock`、`user-group` 等）的不足，通过将这些图标直接注入应用核心，使其成为系统内置图标的一部分。

**2. 适用场景**
适用于需要扩展图标库的场景，特别是当用户或第三方插件（如 Note Toolbar）需要使用 Obsidian 原生未包含的最新 Lucide 图标时。它主要服务于开发者和其他插件，而非直接用于用户自定义界面图标。

**3. 核心特色**
*   **核心注入**：不同于使用 `addIcon()` 添加外部图标，该插件将图标注入核心，确保其处理方式与 Obsidian 原生图标一致。
*   **兼容性**：解决了 `addIcon()` 自动设置 SVG viewBox 为 `0 0 100 100` 导致的样式不一致问题，保证图标渲染效果统一。
*   **标准化调用**：支持通过标准的 `getIcon()` 或 `setIcon()` API 直接调用新图标，无需额外适配代码。

**4. 使用建议**
*   该插件主要面向插件开发者或依赖特定新图标的插件用户。
*   请勿将其视为独立的图标定制工具，它本身不提供图标选择界面，而是为其他组件提供底层图标支持。
*   若需使用新图标，请确保相关插件或代码通过标准 Obsidian API 调用，以获得最佳视觉效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



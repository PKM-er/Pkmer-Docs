---
uid: 1791709368593000
title: 'Obsidian 插件：Menu Hider'
tags: ['界面优化', '文件管理', '效率工具', 'obsidian插件']
description: 'Hide, reorder and promote context menu entries, and copy absolute file paths from the file explorer. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Menu Hider

> [!Note] 插件名片
> - 插件名称：Menu Hider
> - 插件作者：IcyCat
> - 插件说明：Hide, reorder and promote context menu entries, and copy absolute file paths from the file explorer. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/icy-cat/obsidian-menu-hider)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?menu-hider)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/icy-cat/obsidian-menu-hider/master/README.md)



## 概述

**1. 主要功能**
Menu Hider 允许用户自定义 Obsidian 的右键上下文菜单。支持隐藏不需要的菜单项及分隔符、拖拽调整菜单项顺序，以及将子菜单中的条目“提升”至主菜单层级。此外，它还支持在文件资源管理器中通过快捷键复制文件的绝对路径。

**2. 适用场景**
适用于希望精简界面、减少右键菜单干扰的用户。特别适合需要频繁从文件管理器获取绝对路径，或希望将深层级常用功能快捷化（如从子菜单移至顶层）的高级用户。

**3. 核心特色**
*   **自动发现机制**：无需硬编码，右键任意元素即可自动注册该菜单，兼容其他插件新增的菜单项。
*   **无闪烁隐藏**：通过底层 API 包装技术，在菜单渲染前过滤条目，确保隐藏操作流畅且键盘导航正常。
*   **灵活交互**：支持拖拽重排和子菜单条目提升，操作直观。

**4. 使用建议**
1.  右键点击想要修改的目标元素（如文件、标签页），菜单会自动出现在设置面板中。
2.  在设置中点击“眼睛”图标隐藏无用项，或拖动手柄调整顺序。
3.  若需复制绝对路径，请在文件管理器选中文件后按 `Ctrl/Cmd+C`。
4.  注意：部分动态菜单（如多选文件）需在真实元素上右键触发刷新，无法在设置中直接合成。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



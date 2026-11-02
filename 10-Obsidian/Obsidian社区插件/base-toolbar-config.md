---
uid: 1793625606756000
title: "Obsidian 插件：Base Toolbar Config"
tags: ["界面优化", "样式与美化", "效率工具", "obsidian插件"]
description: "Configure which toolbar buttons are visible in Bases files and their embeds. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Base Toolbar Config

> [!Note] 插件名片
> - 插件名称：Base Toolbar Config
> - 插件作者：alnpokrovsky
> - 插件说明：Configure which toolbar buttons are visible in Bases files and their embeds. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alnpokrovsky/base-toolbar-config)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?base-toolbar-config)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alnpokrovsky/base-toolbar-config/master/README.md)



## 概述

Base Toolbar Config 专为 Obsidian 的 Bases 功能设计，旨在解决工具栏按钮过多导致的界面杂乱问题。它允许用户精确控制每个 `.base` 文件及其嵌入视图中可见的按钮，支持隐藏搜索、筛选、排序等常用控件，并保留结果计数等核心信息。通过精简界面，用户可以将注意力集中在数据本身，而非频繁点击不需要的功能入口，从而提升数据浏览与管理的效率。

典型场景包括处理大型项目数据库时，若只需查看表格视图，可隐藏筛选和分组按钮，使界面更清爽；或在笔记中嵌入 Bases 时，通过配置让嵌入内容仅显示特定视图，避免干扰阅读体验。此外，用户可将常用视图固定为自定义按钮，实现一键切换，无需在菜单中反复查找，特别适合需要频繁在表格、卡片等不同视图间切换的工作流。

相比其他仅支持全局设置的插件，该工具支持按文件独立配置，且配置可写入 `.base` 文件的 YAML 头部，便于随文件分享。其特色在于支持自定义视图切换按钮，允许用户绑定图标或标签，并通过拖拽调整顺序。此外，插件能自动适配 Obsidian 的深浅色主题及社区主题，确保视觉一致性，同时提供多语言界面支持，包括中文，降低使用门槛。

使用前需注意，该插件仅适用于 Obsidian 1.13.0 及以上版本，且不支持通过代码块内联创建的 Bases，仅对独立的 `.base` 文件及其嵌入有效。若你的需求是修改 Bases 的核心数据结构或添加新的数据字段，此插件无法满足，它仅负责界面元素的显示与隐藏。对于追求极简主义、希望减少视觉干扰的用户而言，这是一个轻量且实用的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



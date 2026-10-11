---
uid: 1791709368894000
title: 'Obsidian 插件：Notes List'
tags: ['文件管理', '日历与时间', '搜索与排序', '图表与可视化', 'obsidian插件']
description: 'Show notes from a folder as a chronological list with an activity heatmap, tag browser, pinning, and date filters. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Notes List

> [!Note] 插件名片
> - 插件名称：Notes List
> - 插件作者：Alessandro Melandri
> - 插件说明：Show notes from a folder as a chronological list with an activity heatmap, tag browser, pinning, and date filters. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '日历与时间', '搜索与排序', '图表与可视化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/amelandri/NotesList)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notes-list)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/amelandri/NotesList/master/README.md)



## 概述

**Notes List** 是一款将 Obsidian 文件夹转化为可视化时间线的插件，旨在强化笔记的时间维度管理。

**主要功能**
该插件将指定文件夹（含子文件夹）内的笔记按时间倒序排列，展示日期、标题及内容预览。它提供 GitHub 风格的活动热力图和标签浏览器，支持通过标签过滤列表。笔记日期优先读取 Frontmatter 中的 `timestamp` 属性，否则使用文件修改时间。

**适用场景**
特别适合“每日一记”习惯，如个人日记、工作日志或任何需要按时间顺序回顾记录的场景，帮助用户清晰看到事件发生的时间脉络。

**核心特色**
1. **智能预览**：预览模式不会截断代码块或表格，支持使用 `<!-- more -->` 自定义截断位置。
2. **标签集成**：自动聚合 Frontmatter 和正文中的标签，点击即可筛选，且避免正文重复显示。
3. **置顶功能**：支持将重要笔记置顶，方便快速访问。
4. **直观交互**：通过点击日期、文件名或内容即可打开笔记，操作流畅。

**使用建议**
建议在笔记的 Properties 面板中设置 `Date & time` 类型的 `timestamp` 属性，以确保时间线排序准确。对于长笔记，可利用 `<!-- more -->` 注释控制预览长度，保持列表整洁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365979000
title: "Obsidian 插件：Checklist Status Sets"
tags: ['任务管理', '样式与美化', '效率工具', 'obsidian插件']
description: "Apply Status Sets' reusable status sets to checklist items inside your notes — per file, block, or heading — with the same traffic-light icons, colors, and Glow used in the file tree. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Checklist Status Sets

> [!Note] 插件名片
> - 插件名称：Checklist Status Sets
> - 插件作者：Dan
> - 插件说明：Apply Status Sets' reusable status sets to checklist items inside your notes — per file, block, or heading — with the same traffic-light icons, colors, and Glow used in the file tree. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/obsidian-checklist-status-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?checklist-status-icons)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/obsidian-checklist-status-icons/master/README.md)



## 概述

**主要功能**
该插件是 Status Sets 的配套工具，将文件树中定义的可复用状态集（如红绿灯图标、颜色及 Glow 效果）应用到笔记内部的清单项中。支持三种作用范围：整个文件、特定代码块（可选继承至子任务）或标题下的所有内容。

**适用场景**
适用于需要在笔记内部任务列表中实现视觉化管理的用户，特别是已经在使用 Status Sets 管理文件状态，并希望保持笔记内任务状态与文件树状态视觉风格一致的场景。

**核心特色**
1. **视觉统一**：完全替换原生复选框图标，样式与文件树中的状态点完全一致，支持 Glow 效果。
2. **交互便捷**：左键循环切换状态，右键打开状态选择器。
3. **灵活隐藏**：“隐藏已完成”功能会从渲染视图中彻底移除任务，而非仅视觉隐藏。
4. **数据纯净**：不写入 Frontmatter，仅在 Markdown 复选括号内使用单字符标记（如 `- [I]`），确保兼容 Obsidian 原生任务解析器，同时支持实时预览和阅读模式。

**使用建议**
务必先安装并启用 Status Sets 插件，并在其中定义好状态集。本插件仅读取这些设置，不创建或编辑状态。使用时通过插件设置指定笔记路径、块或标题来应用状态集。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

---
uid: 1793625610907001
title: "Obsidian 插件：Clear Properties"
tags: ["编辑工具", "效率工具", "移动端优化", "obsidian插件"]
description: "Delete, remove or strip all properties (YAML frontmatter / front matter metadata) from a note in one click with a button beside the properties block. Undoable. Quick cleanup of old notes, mobile too. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clear Properties

> [!Note] 插件名片
> - 插件名称：Clear Properties
> - 插件作者：yujia
> - 插件说明：Delete, remove or strip all properties (YAML frontmatter / front matter metadata) from a note in one click with a button beside the properties block. Undoable. Quick cleanup of old notes, mobile too. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rainajia716/obsidian-clear-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clear-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rainajia716/obsidian-clear-properties/master/README.md)



## 概述

Clear Properties 旨在解决 Obsidian 中删除笔记属性（YAML frontmatter）繁琐的问题。原生界面仅支持逐个删除属性，而该插件在属性块左侧添加了一条细线，用户只需点击线上的垃圾桶图标，即可一次性移除当前笔记的所有属性及其周围的 `---` 分隔线。这一操作不仅清理了元数据，还自动处理了紧随其后的空行，使笔记正文直接从第一行文字开始，极大提升了批量清理旧笔记的效率。

典型使用场景包括处理从其他应用导入的笔记或清理旧模板遗留的无用 YAML 数据。例如，当你从 Notion 或旧版 Obsidian 迁移笔记时，往往带有大量不再使用的标签或日期字段，此时一键清除比手动逐个删除更快捷。此外，在分享或发布笔记前，若需去除内部元数据以符合外部格式要求，该插件也能快速完成预处理，确保内容整洁。

相比同类插件，Clear Properties 的设计极为克制且无干扰。操作入口仅在鼠标悬停时显示，视觉上与“添加属性”按钮的细线风格一致，完美融入大多数主题。它支持编辑视图和阅读视图，在移动端因无悬停功能，操作线始终可见，方便触屏点击。所有删除操作均可撤销，系统会提示删除数量并提供撤销链接，编辑视图下也支持标准的 Ctrl+Z 快捷键，确保操作安全。

使用前需注意，该插件没有设置项，功能单一且直接。它不适合需要精细管理单个属性或批量修改属性值的场景，仅用于彻底移除所有元数据。如果你依赖 YAML 属性进行复杂的 Dataview 查询或自动化工作流，请谨慎使用，以免误删关键数据。此外，在阅读视图中操作会先保存笔记再移除属性，建议重要操作前确认备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709368787000
title: 'Obsidian 插件：Nested Frontmatter Properties'
tags: ['编辑工具', '数据处理', '界面优化', 'obsidian插件']
description: 'View and edit nested frontmatter properties, such as arrays of objects, directly in the Properties panel. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nested Frontmatter Properties

> [!Note] 插件名片
> - 插件名称：Nested Frontmatter Properties
> - 插件作者：copperbox
> - 插件说明：View and edit nested frontmatter properties, such as arrays of objects, directly in the Properties panel. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '数据处理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/copperbox/obsidian-nested-frontmatter-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nested-frontmatter-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/copperbox/obsidian-nested-frontmatter-properties/master/README.md)



## 概述

**主要功能**
该插件允许用户在 Obsidian 的“属性”面板中直接查看和编辑嵌套的 Frontmatter 属性，如对象数组和嵌套对象。它解决了原生 Obsidian 将此类复杂结构显示为原始文本并提示“未知类型”的问题，将其转化为结构清晰、可交互的缩进行。

**适用场景**
适用于笔记中包含复杂元数据结构的场景，例如记录书籍信息（作者列表、页数）、项目管理（嵌套任务状态）或任何需要存储多层级键值对数据的知识库。

**核心特色**
1. **可视化编辑**：将复杂的 YAML 嵌套结构渲染为直观的缩进列表，支持内联编辑文本、数字和复选框。
2. **动态结构管理**：支持在数组项中动态添加或删除属性，并允许用户选择新值的类型（文本、对象或列表）。
3. **兼容性强**：仅处理原生不支持的嵌套类型，不影响 Obsidian 已支持的简单属性（如纯文本、日期、标量列表）。
4. **API 集成**：所有修改均通过 Obsidian 公开的 Frontmatter API 写入，确保数据一致性。

**使用建议**
建议用于需要结构化存储复杂元数据的笔记系统。若需更高级的全库级嵌套属性管理，可对比参考功能更全面的 "Nested Properties" 插件，但本插件在轻量级、面板内直接编辑方面表现优异。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



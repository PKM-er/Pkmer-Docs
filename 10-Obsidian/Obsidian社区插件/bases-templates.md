---
uid: 1791709365563000
title: 'Obsidian 插件：Bases Templates'
tags: ['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
description: 'Makes the New button in a base create the note from a template you choose, for each base or each view. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Templates

> [!Note] 插件名片
> - 插件名称：Bases Templates
> - 插件作者：Fuad Laguda
> - 插件说明：Makes the New button in a base create the note from a template you choose, for each base or each view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lagudafuadtosin/bases-templates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-templates)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lagudafuadtosin/bases-templates/master/README.md)



## 概述

**主要功能**
该插件让 Obsidian 的 Bases（数据库）视图中的“新建”按钮，能基于指定模板创建笔记，而非生成空白文件。支持为每个 Base 或特定视图独立配置模板。

**适用场景**
适用于需要结构化数据管理的用户，如在任务看板、项目追踪或内容库中，希望新建条目时自动带入预设属性、标签及正文结构，减少重复输入。

**核心特色**
1. **智能属性合并**：Base 视图的筛选值优先于模板（确保新笔记留在当前视图），列表型属性（如标签）自动去重合并。
2. **模板引擎兼容**：支持 Obsidian 原生模板变量（如 `{{date}}`）及 Templater 语法，自动填充标题、日期等信息。
3. **灵活配置**：可通过命令面板快速为当前视图选模板，或在设置中全局管理；仅影响通过 Base“新建”创建的笔记，不干扰其他来源。

**使用建议**
1. 打开 Base 视图，运行命令 `Bases Templates: Choose the template for this base view` 选择模板。
2. 若需全局生效，请在设置中配置“Base + 视图 + 模板”映射，留空视图字段即代表该 Base 的所有视图。
3. 建议将模板存放在指定文件夹以便快速检索；若使用 Templater，请确保已安装该插件以启用高级动态内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



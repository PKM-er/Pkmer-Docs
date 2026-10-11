---
uid: 1791709368526000
title: 'Obsidian 插件：MD Butler'
tags: ['文件管理', '模板与链接处理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically manages YAML frontmatter fields for all notes. A reliable alternative to Templater formulas for consistent metadata. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MD Butler

> [!Note] 插件名片
> - 插件名称：MD Butler
> - 插件作者：Peter Petschownik
> - 插件说明：Automatically manages YAML frontmatter fields for all notes. A reliable alternative to Templater formulas for consistent metadata. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ppeapps/MD-Butler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?md-butler)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ppeapps/MD-Butler/master/README.md)



## 概述

**主要功能**
MD Butler 是一款自动管理 Obsidian 笔记 YAML frontmatter 元数据的插件。它基于事件驱动机制，在文件打开、修改、重命名或批量操作时自动更新预设字段，确保元数据的一致性。

**适用场景**
适用于需要严格统一笔记元数据格式的知识库，特别是那些希望替代 Templater 公式以实现更稳定、可维护的元数据管理的用户。适合对文件属性（如创建日期、路径、标签）有自动化维护需求的工作流。

**核心特色**
1. **强大模板系统**：支持 `{{template}}` 表达式及管道链函数（如 `upper`, `replace`, `date`），可灵活处理日期、路径及文本转换。
2. **条件与过滤**：支持基于路径、文件名或现有元数据的条件字段应用，并支持文件夹包含/排除过滤。
3. **精细控制**：提供“仅新笔记”或“全库”处理范围，支持“勿动列表”保护特定键值，以及字段重命名时的自动迁移。
4. **维护工具**：具备一键“完整修复”功能，包括强制应用、清理孤立键及一致性检查。

**使用建议**
建议先配置核心字段（如 DateCreated, LastModified）并设置合理的触发事件（如仅在“修改”时更新）。利用“条件字段”避免对不相关笔记添加冗余元数据。定期使用“一致性检查”功能扫描库中不一致的文件，确保元数据长期整洁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



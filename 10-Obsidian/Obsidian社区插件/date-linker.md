---
uid: 1791709366443000
title: 'Obsidian 插件：Date Linker'
tags: ['日历与时间', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Creates links to daily notes from frontmatter Date / Date & Time property types. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Date Linker

> [!Note] 插件名片
> - 插件名称：Date Linker
> - 插件作者：tecipry
> - 插件说明：Creates links to daily notes from frontmatter Date / Date & Time property types. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tecipry/obsidian-DateLinker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?date-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tecipry/obsidian-DateLinker/master/README.md)



## 概述

**插件名称**：Date Linker

**1. 主要功能**
该插件自动解析笔记 Frontmatter 中类型为“日期”或“日期时间”的属性，将其转换为指向对应每日笔记（Daily Notes）的链接。生成的链接会存储在特定的 Frontmatter 字段（默认为 `DL-managedRelations`）中，从而被 Obsidian 识别为常规双向链接。

**2. 适用场景**
适用于需要在元数据日期与每日笔记之间建立自动关联的用户。例如，当笔记中记录了会议日期、事件发生时间或截止日期时，希望快速跳转到当天的日记进行回顾或补充记录。

**3. 核心特色**
*   **灵活配置**：支持全局设置和单篇笔记级别的“观察属性”配置，可自定义哪些字段需要生成链接。
*   **标准兼容**：严格遵循 ISO 8601 标准解析日期，确保格式规范。
*   **无缝集成**：生成的链接完全融入 Obsidian 的图谱和链接系统，无需额外操作即可在关系图中查看。

**4. 使用建议**
*   确保 Frontmatter 中的日期值符合 ISO 8601 格式（如 `YYYY-MM-DD`），否则无法正确解析。
*   需在插件设置中配置“全局观察属性”，或在单篇笔记的 Frontmatter 中添加 `DL-watchedProperties` 字段并指定属性名列表。
*   该插件默认不激活任何功能，必须明确配置后才生效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



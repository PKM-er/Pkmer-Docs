---
uid: 1791709369828000
title: 'Obsidian 插件：Search Operators'
tags: ['搜索与排序', '效率工具', '文件管理', 'obsidian插件']
description: 'Search notes by created and modified date, links to and from a note, tag and path, in a search modal with a preview line for each result. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Search Operators

> [!Note] 插件名片
> - 插件名称：Search Operators
> - 插件作者：theluckystrike
> - 插件说明：Search notes by created and modified date, links to and from a note, tag and path, in a search modal with a preview line for each result. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/search-operators)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?search-operators)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/search-operators/master/README.md)



## 概述

**1. 主要功能**
该插件为 Obsidian 扩展了核心搜索功能，允许用户通过自定义操作符按“创建日期”、“修改日期”、“链接关系（指向/来自）”、“标签”及“路径”进行笔记检索。它在独立的搜索模态框中运行，不干扰原生搜索面板，并为每个结果提供预览行。

**2. 适用场景**
适用于需要基于时间维度管理笔记的用户，如回顾近期修改内容、查找特定时间段创建的记录，或梳理笔记间的引用与反引用关系。特别适合知识库较大、依赖时间线或链接结构进行信息溯源的场景。

**3. 核心特色**
*   **强大的日期过滤**：支持精确日期、月份、年份及范围查询（如 `created:2026-09-01..2026-09-30`），并支持 `>`、`>=` 等比较符。
*   **便捷的时间快捷词**：提供 `last-7d`、`today`、`yesterday` 等相对时间指令，快速定位近期笔记。
*   **灵活的日期源配置**：默认读取文件元数据，也可配置从笔记属性（Property）中读取日期，适应不同工作流。
*   **链接搜索**：填补了原生搜索在链接方向（backlinks/forwardlinks）查询上的空白。

**4. 使用建议**
建议结合日期范围与链接操作符使用，例如搜索“最近一周修改且被当前笔记引用的内容”。若笔记习惯在属性中记录日期，请务必在插件设置中指定对应的属性名称，以确保搜索结果的准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



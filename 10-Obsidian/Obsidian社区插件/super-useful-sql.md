---
uid: 1791709370169000
title: 'Obsidian 插件：Super Useful SQL'
tags: ['数据处理', '第三方工具集成', '数据分析', 'obsidian插件']
description: 'Query SQLite databases that live outside your vault and read the results in a side panel. Read-only by design, with cross-database joins, an optional data dictionary, and plain Markdown exports. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Super Useful SQL

> [!Note] 插件名片
> - 插件名称：Super Useful SQL
> - 插件作者：chengmiaofan
> - 插件说明：Query SQLite databases that live outside your vault and read the results in a side panel. Read-only by design, with cross-database joins, an optional data dictionary, and plain Markdown exports. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '第三方工具集成', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/serena-sheng/obsidian-super-useful-sql)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?super-useful-sql)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/serena-sheng/obsidian-super-useful-sql/master/README.md)



## 概述

**Super Useful SQL** 是一款专为 Obsidian 设计的数据库查询插件，旨在解决传统插件将大量数据存入 Vault 导致索引膨胀和同步压力大的问题。

**主要功能**
该插件允许用户通过 SQL 语句查询位于 Vault 外部的 SQLite 数据库文件。查询结果直接在侧边栏面板中显示，包含 SQL 编辑器、结果表格及查询历史，全程不创建任何笔记文件。

**适用场景**
适用于需要处理大规模结构化数据（如数万行记录）的场景。用户可将原始 `.db` 文件保存在磁盘任意位置，仅在 Obsidian 中进行轻量级的查询与分析，保持 Vault 的整洁与高效同步。

**核心特色**
1. **外部数据源支持**：通过绝对路径注册多个 SQLite 数据库，支持跨库、跨表 Join 查询。
2. **强制只读安全**：从机制上确保查询操作不会修改数据库，保障数据安全。
3. **数据字典集成**：可关联笔记作为数据字典，在面板中渲染为树状结构，并为结果列提供悬停提示。
4. **AI 助手兼容**：支持 Copilot 或 Claudian 等 AI 插件，可协助执行查询。
5. **纯 Markdown 导出**：支持将查询结果以纯 Markdown 格式导出。

**使用建议**
仅支持桌面端（需 Obsidian 1.13.0+ 及 Electron 环境）。建议将大体量数据保留在外部 `.db` 文件中，仅将查询逻辑和结果引入 Obsidian。若需辅助理解字段含义，可预先编写数据字典笔记以提升查询效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



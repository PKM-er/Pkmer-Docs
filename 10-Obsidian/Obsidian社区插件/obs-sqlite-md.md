---
uid: 1791709370106000
title: 'Obsidian 插件：SQLite to Markdown'
tags: ['数据处理', '表格', '编程与脚本', '效率工具', 'obsidian插件']
description: 'Render SQLite queries as markdown tables via fenced code blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SQLite to Markdown

> [!Note] 插件名片
> - 插件名称：SQLite to Markdown
> - 插件作者：Michael Collard
> - 插件说明：Render SQLite queries as markdown tables via fenced code blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '表格', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mcollard0/OBSSQLiteMd)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obs-sqlite-md)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mcollard0/OBSSQLiteMd/master/README.md)



## 概述

**SQLite to Markdown** 是一款 Obsidian 插件，主要功能是将本地 SQLite 数据库的查询结果实时渲染为 Markdown 表格。

**适用场景**：适合需要直接查看本地结构化数据（如 Jellyfin 数据库、个人日志记录等）的用户，无需离开笔记软件即可进行数据检索与分析。

**核心特色**：
1. **双格式支持**：支持标准的 `sql` 代码块（需指定 `db:` 路径）和 ODBC 风格的 `ObsSync` 代码块。
2. **实时渲染**：在阅读视图下自动执行查询并显示表格，底部附带数据库文件名、检索时间及行数统计。
3. **安全机制**：仅允许执行只读操作（SELECT、WITH 等），自动拦截 INSERT、UPDATE、DELETE 等写操作，确保数据源安全。
4. **灵活路径**：支持绝对路径或 Vault 相对路径。

**使用建议**：在笔记中插入 `sql` 或 `ObsSync` 代码块，正确填写数据库路径及查询语句。切换至阅读视图即可查看结果。若数据更新，可点击表格底部的刷新图标手动重载。注意该插件主要面向桌面端，移动端可能受限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



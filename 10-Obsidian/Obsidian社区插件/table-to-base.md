---
uid: 1791709370254000
title: 'Obsidian 插件：Table to Base'
tags: ['表格', '数据处理', '文件管理', '效率工具', 'obsidian插件']
description: 'Converts Markdown tables into notes and Obsidian Bases. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Table to Base

> [!Note] 插件名片
> - 插件名称：Table to Base
> - 插件作者：Gabriel Kleiman
> - 插件说明：Converts Markdown tables into notes and Obsidian Bases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kleim4n/obsidian-table-to-base-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-to-base)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kleim4n/obsidian-table-to-base-plugin/master/README.md)



## 概述

**Table to Base** 是一款 Obsidian 插件，旨在将 Markdown 表格高效转化为结构化笔记与 Base 数据库。

**主要功能**
该插件能自动解析表格数据，将每一行转换为独立的笔记文件，并将指定列（如类型、日期、标签、完成状态）保存为笔记属性。原表格位置会被替换为 Base 嵌入视图，实现从“静态列表”到“动态数据库”的无缝转换。

**适用场景**
非常适合课程规划、项目任务管理、阅读清单整理等需要长期跟踪和分类的场景。例如，在课程笔记中列出每周阅读与作业，一键生成独立笔记并建立关联视图。

**核心特色**
1. **自动化组织**：自动创建 `.base` 文件及笔记文件夹，按标签过滤视图，保持概览清晰。
2. **灵活属性映射**：支持自定义列类型（如将 `done` 列映射为复选框），区分正文内容与元数据。
3. **复用机制**：同一笔记中的多个表格可复用同一个 Base，通过标签区分不同批次的数据，避免文件冗余。

**使用建议**
建议在表格中规范列名（如 `type`, `date`, `tags`），并明确指定 `done_type` 以正确生成复选框。转换后，利用 Base 视图进行筛选和排序，可大幅提升信息检索效率。适合喜欢用表格做计划，但希望后续能独立编辑和追踪每项任务的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



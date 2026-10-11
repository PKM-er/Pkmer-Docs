---
uid: "1791709367867000"
title: "Obsidian 插件：Journals Aware Rollover Todos"
tags: ['任务管理', '日历与时间', '模板与链接处理', '效率工具', 'obsidian插件']
description: "Rolls unfinished todos forward into notes created by the Journals plugin. Finds the previous note via journal-date frontmatter instead of Daily Notes paths, so it works with Journals' nested, date-templated folders. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Journals Aware Rollover Todos

> [!Note] 插件名片
> - 插件名称：Journals Aware Rollover Todos
> - 插件作者：Asef Hossain Khan
> - 插件说明：Rolls unfinished todos forward into notes created by the Journals plugin. Finds the previous note via journal-date frontmatter instead of Daily Notes paths, so it works with Journals' nested, date-templated folders. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/asefhossainkhan/journals-aware-rollover-todos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?journals-aware-rollover-todos)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/asefhossainkhan/journals-aware-rollover-todos/master/README.md)



## 概述

**主要功能**
该插件专为配合 Obsidian 的 Journals 插件设计，能自动将上一天笔记中未完成的待办事项（Todos）滚动迁移至新创建的笔记中。它通过读取笔记 Frontmatter 中的 `journal-date` 字段来定位前一日笔记，而非依赖传统的文件路径。

**适用场景**
适用于使用 Journals 插件管理日记，且其文件夹结构包含嵌套日期模板（如 `Daily Notes/2026/08-2026/28-Aug-2026.md`）的用户。解决原生 Daily Notes 插件因路径格式固定导致无法正确识别 Journals 复杂目录结构的问题。

**核心特色**
1. **Frontmatter 驱动**：摒弃了基于静态文件夹和日期格式的路径重建逻辑，直接利用 Journals 可靠维护的元数据查找前一日笔记，兼容性更强。
2. **灵活匹配**：支持将未完成事项插入到匹配特定模式（如以“TODOS”结尾）的标题下，若未找到则默认追加至笔记底部。
3. **独立性强**：不依赖核心 Daily Notes 或 Periodic Notes 设置，是 Rollover Daily Todos 的精神续作。

**使用建议**
请确保你的笔记由 Journals 插件生成并包含正确的 `journal-date` 元数据。建议根据模板调整“目标标题”的正则表达式配置，以精确控制待办事项的插入位置。注意该插件尚未经过 Obsidian 官方人工审核，使用前建议备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


---
uid: 1791709366408000
title: 'Obsidian 插件：Daily Report'
tags: ['模板与链接处理', '任务管理', '文件管理', '效率工具', 'obsidian插件']
description: 'Daily notes with dynamic directory paths, template rendering, task carry-over, and section-level confirmation. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Report

> [!Note] 插件名片
> - 插件名称：Daily Report
> - 插件作者：kaka
> - 插件说明：Daily notes with dynamic directory paths, template rendering, task carry-over, and section-level confirmation. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '任务管理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/njuptlzf/daily-report)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-report)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/njuptlzf/daily-report/master/README.md)



## 概述

**Daily Report** 是一款增强 Obsidian 原生日记功能的插件，旨在提升每日笔记的自动化与结构化水平。

**主要功能**：支持基于 Luxon 日期格式的动态目录生成（如按年/月/周自动建文件夹）、模板渲染、自动继承昨日未完成任务，以及独特的“章节级确认”机制（即使任务全部完成，也需手动确认需求是否关闭）。

**适用场景**：适合需要严格工作流管理的知识工作者、开发者或项目管理者，特别是那些习惯按周/月归档笔记，且需追踪跨天任务状态的用户。

**核心特色**：
1. **灵活路径**：利用 `[W]WW` 等格式实现如 `2026/09/第39周/0922.md` 的复杂层级结构。
2. **多格式占位符**：模板支持 `**date**`、`${date}`、`{{date}}` 三种日期变量写法，兼容不同习惯。
3. **任务闭环**：不仅继承未完成任务，还允许配置自动删除昨日已完成项，保持笔记整洁。

**使用建议**：
1. 安装后务必在设置中配置“Daily Path Format”和模板路径，确保目录结构符合预期。
2. 设计模板时，建议结合“章节级确认”功能，将“需求/目标”与“具体任务”分开，以实现更精细的进度控制。
3. 若希望保持笔记极简，可开启“Delete completed tasks”选项，自动清理昨日已勾选的任务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



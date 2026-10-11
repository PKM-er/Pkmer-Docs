---
uid: 1791709365215000
title: 'Obsidian 插件：Agenda Injector'
tags: ['日历与时间', '自动化与AI', '效率工具', 'obsidian插件']
description: '自动将你的 Agenda 日历事件注入每日笔记——此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agenda Injector

> [!Note] 插件名片
> - 插件名称：Agenda Injector
> - 插件作者：loulan23253
> - 插件说明：自动将你的 Agenda 日历事件注入每日笔记——此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['日历与时间', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/loulan23253/agenda-injector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agenda-injector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/loulan23253/agenda-injector/master/README.md)



## 概述

**1. 主要功能**
该插件能自动将日历事件（如 CalDAV 同步的月度文件）注入到 Obsidian 每日笔记中。它读取 `YYYY-MM.md` 格式的议程文件，在新建每日笔记时，自动在指定标记行下方生成当日事件的待办清单。

**2. 适用场景**
适用于使用 Obsidian 作为个人知识管理或日程管理工具的用户，特别是那些通过 CalDAV 插件（如 ogenda）同步日历数据，并希望将日程直接嵌入每日笔记以结合任务与内容管理的场景。

**3. 核心特色**
- **自动化与安全性**：新建笔记时自动注入，手动命令可刷新；采用原子写入，仅替换插件管理的代码块，绝不干扰用户手动添加的其他内容。
- **全面的事件支持**：支持全天/定时事件、多日跨天事件及 iCalendar 重复规则（RRULE）。
- **灵活配置**：可自定义时间格式（12/24小时）、显示位置或分类标签，并支持按开始时间排序。

**4. 使用建议**
- 确保日历同步插件生成的月度文件命名符合 `YYYY-MM.md` 规范，且包含标准字段（start, end, location等）。
- 在每日笔记模板中预先添加默认标记行（如 `> [!todo]+ todo`）。
- 在设置中正确指定“Agenda文件夹”路径。
- 若需更新已有笔记中的日程，请使用手动命令“Inject Agenda events into current note”重新生成列表。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



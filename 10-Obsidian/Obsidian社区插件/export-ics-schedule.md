---
uid: 1791709366923000
title: 'Obsidian 插件：Export ICS Schedule'
tags: ['任务管理', '日历与时间', '数据处理', '第三方工具集成', 'obsidian插件']
description: 'Export Obsidian - [ ] tasks to a .ics calendar file and open it with the system calendar. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export ICS Schedule

> [!Note] 插件名片
> - 插件名称：Export ICS Schedule
> - 插件作者：lindongyan
> - 插件说明：Export Obsidian - [ ] tasks to a .ics calendar file and open it with the system calendar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '数据处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lindongyan1992/export-ics-schedule)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?export-ics-schedule)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lindongyan1992/export-ics-schedule/master/README.md)



## 概述

**主要功能**
将 Obsidian 笔记中的 `- [ ]` 任务导出为 `.ics` 日历文件，并自动调用系统日历应用（如 Google Calendar、Outlook）进行导入。支持桌面端与移动端，将带日期的任务转换为定时或全天事件。

**适用场景**
适用于需要快速将当前笔记中的待办事项同步至个人日历的场景。特别适合希望避免复杂配置、无需 Token 或全库扫描，只需“一键”将当前页任务转化为日历事件的用户。

**核心特色**
1. **极简同步**：仅处理当前笔记任务，无需 Gist 或 Token，无全库扫描开销。
2. **智能时区**：支持自动检测或手动指定 24 个时区，生成包含 DST 规则的 VTIMEZONE，确保 Outlook 等应用时间解析准确。
3. **去重机制**：通过稳定 UID 实现重复导出时更新事件而非创建副本，并支持提醒（VALARM）及多种日期语法（如 Dataview、@YYYY-MM-DD）。

**使用建议**
建议在 Android 设备上使用以获得最佳的一键拉起体验；iOS 用户目前通过默认应用打开。导出前请确保任务包含明确的日期或时间标记，以生成正确的日历事件类型。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



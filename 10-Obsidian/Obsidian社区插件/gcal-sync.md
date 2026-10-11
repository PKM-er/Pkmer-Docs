---
uid: 1791709367338000
title: 'Obsidian 插件：Google Calendar Sync'
tags: ['日历与时间', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Sync Google Calendar events declared in vault notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Google Calendar Sync

> [!Note] 插件名片
> - 插件名称：Google Calendar Sync
> - 插件作者：Murat Can Uste
> - 插件说明：Sync Google Calendar events declared in vault notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mcuste/obsidian-gcal-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gcal-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mcuste/obsidian-gcal-sync/master/README.md)



## 概述

**Google Calendar Sync** 是一款将 Obsidian 笔记与 Google 日历同步的插件。

**主要功能**：允许用户在笔记中通过特定语法（如 `gcal:`）声明日程事件，插件会自动将这些事件同步至 Google 日历。支持创建、更新及删除事件，实现笔记内容与日历的双向一致（以笔记为准）。

**适用场景**：适合习惯在 Obsidian 中记录日程、待办事项的用户，希望无需切换应用即可管理日历，或需要将项目计划、会议安排直接转化为日历提醒的场景。

**核心特色**：
1. **单向同步**：仅从笔记同步到日历，确保笔记为唯一数据源，避免冲突。
2. **安全隔离**：仅管理由插件创建的事件，不会误删或修改日历中其他手动添加的事件。
3. **直观反馈**：在笔记中通过图标（绿色对勾、灰色时钟、红色叉号）实时显示同步状态。
4. **自动触发**：支持保存后自动同步、定时同步（每15分钟）及手动触发。

**使用建议**：在笔记行内使用代码跨度标记 `gcal:` 并指定时间格式（如 `gcal:2026-08-18T14:00/PT1H`）。注意该插件未经官方人工审查，建议定期备份笔记数据，并熟悉其时间格式语法以确保同步准确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



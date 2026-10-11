---
uid: 1791709366387000
title: 'Obsidian 插件：Daily Meetings Tracker'
tags: ['日历与时间', '任务管理', '自动化与AI', 'obsidian插件']
description: 'Automatically generates and maintains a daily checklist of meetings in the daily note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Meetings Tracker

> [!Note] 插件名片
> - 插件名称：Daily Meetings Tracker
> - 插件作者：Joost
> - 插件说明：Automatically generates and maintains a daily checklist of meetings in the daily note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hopman/obsidian-meeting-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-meetings-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hopman/obsidian-meeting-tracker/master/README.md)



## 概述

**1. 主要功能**
该插件自动扫描库中 Frontmatter 标记为 `type: Meeting` 的笔记，并在对应的每日笔记中生成和维护会议清单。清单状态根据源笔记的 `Processed` 字段动态同步（未完成为 `[ ]`，已完成为 `[/]`）。

**2. 适用场景**
适用于使用 Obsidian 进行个人知识管理或工作记录的用户，特别是那些习惯将会议记录独立成文，并希望在每日回顾（Daily Note）中快速查看当日会议进度的人。

**3. 核心特色**
*   **单向同步**：每日笔记中的会议区块为只读投影，以会议源笔记为唯一数据源，避免双向编辑冲突。
*   **自动触发**：在启动、打开每日笔记或修改会议笔记 Frontmatter 时自动更新（含1秒防抖），也支持手动命令刷新。
*   **严格规范**：要求每日笔记遵循 `YYYY/MM/ww/YYYY-MM-DD.md` 路径结构，且仅更新已存在的每日笔记，不会自动创建文件或文件夹。

**4. 使用建议**
*   确保会议笔记包含正确的 Frontmatter（`type`, `date`, `Processed`）。
*   每日笔记模板需预置 `### Meetings` 标题及 `<!-- meetings:start/end -->` 标记，否则插件会在文件顶部自动插入。
*   注意插件不会自动创建每日笔记，需先通过其他插件或手动创建好当日文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



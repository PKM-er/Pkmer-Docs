---
uid: 1791709369104000
title: "Obsidian 插件：Outlook to Day Planner Sync"
tags: ['日历与时间', '第三方工具集成', '效率工具', 'obsidian插件']
description: "Syncs Outlook calendar events into the Day Planner section of daily notes, filtered by the note's frontmatter Date. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Outlook to Day Planner Sync

> [!Note] 插件名片
> - 插件名称：Outlook to Day Planner Sync
> - 插件作者：Gabriel Miranda
> - 插件说明：Syncs Outlook calendar events into the Day Planner section of daily notes, filtered by the note's frontmatter Date. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dtobia/outlook-to-day-planner-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outlook-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dtobia/outlook-to-day-planner-sync/master/README.md)



## 概述

**1. 主要功能**
该插件将 Outlook 日历事件同步至 Obsidian 每日笔记的 `## Day Planner` 部分。它从发布的 `.ics` 日历源下载事件，根据笔记 Frontmatter 中的 `Date` 属性进行筛选，并以复选框任务形式插入或更新日程，支持按开始时间排序。

**2. 适用场景**
适合希望将外部日历日程整合进个人知识管理系统的用户，特别是依赖 Outlook 日历且使用 Obsidian 每日笔记记录工作规划的人群。

**3. 核心特色**
- **精准过滤**：严格依据笔记 Frontmatter 中的日期属性匹配事件。
- **自动化维护**：自动创建或更新 `## Day Planner` 区块，无事件时显示提示。
- **灵活配置**：支持重复事件、时区配置，可通过侧边栏图标或命令面板触发同步。

**4. 使用建议**
- 确保 Obsidian 版本为 1.13.0 或更高。
- 必须拥有已发布的 Outlook 日历 `.ics` 链接。
- 每日笔记 Frontmatter 必须包含格式为 `YYYY-MM-DD` 的 `Date` 属性。
- 若插件未在社区插件库发布，需手动安装并运行 `npm install` 及 `npm run build` 构建。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

---
uid: 1791709366011000
title: 'Obsidian 插件：Chronobars'
tags: ['图表与可视化', '日历与时间', '样式与美化', 'obsidian插件']
description: 'Create time-based progress bars. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Chronobars

> [!Note] 插件名片
> - 插件名称：Chronobars
> - 插件作者：Daniel Hidefjäll
> - 插件说明：Create time-based progress bars. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '日历与时间', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dojje/chronobars)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chronobars)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dojje/chronobars/master/README.md)



## 概述

**插件名称**：Chronobars

**主要功能**
该插件允许用户在 Obsidian 笔记中创建基于时间的进度条。通过简单的代码块语法，即可可视化展示特定时间段内的进度状态，支持显示百分比、日期标签及自定义名称。

**适用场景**
非常适合用于项目管理、个人日程规划、会议记录或任务追踪。例如，直观展示工作日的剩余时间、项目里程碑的进度，或跨天任务的完成情况。

**核心特色**
1. **灵活的时间格式**：同时支持简单的时分（HH:MM）和完整的日期时间（YYYY-MM-DD HH:MM）。
2. **跨午夜支持**：能正确处理跨越午夜的时间范围，避免计算错误。
3. **高度可定制**：可自由开关百分比和日期显示，支持自定义标题，甚至能配置剩余时间的显示单位（如年、月、日、时、分、秒）。

**使用建议**
在笔记中插入 `chrono-bar` 代码块，必填 `start` 和 `end` 参数。建议根据需求开启 `percentage` 以直观查看进度，若涉及跨天任务，务必使用完整日期时间格式以确保准确性。可通过 `remainingTimeFormat` 参数精细控制剩余时间的显示粒度，使进度条信息更贴合实际使用场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



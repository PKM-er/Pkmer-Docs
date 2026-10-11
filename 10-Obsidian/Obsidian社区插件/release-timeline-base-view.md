---
uid: 1791709369635000
title: 'Obsidian 插件：Release Timeline Base View'
tags: ['图表与可视化', '日历与时间', '数据处理', 'obsidian插件']
description: 'Render release-style timelines from Bases. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Release Timeline Base View

> [!Note] 插件名片
> - 插件名称：Release Timeline Base View
> - 插件作者：Jared Cherup
> - 插件说明：Render release-style timelines from Bases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '日历与时间', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jarbochov/release-timeline-base-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?release-timeline-base-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jarbochov/release-timeline-base-view/master/README.md)



## 概述

**1. 主要功能**
该插件基于 Obsidian 原生 Bases 功能，将笔记渲染为类似软件发布记录的垂直时间线视图。它不再依赖 Dataview，直接读取笔记属性中的日期字段（支持年、月、日格式）进行展示。

**2. 适用场景**
适用于需要按时间顺序梳理内容的场景，如项目版本迭代记录、个人学习日志、事件追踪或任何需要以“发布风格”呈现日期序列的知识管理需求。

**3. 核心特色**
*   **原生集成**：完全适配 Obsidian Bases，配置简单，无需额外插件。
*   **高度自定义**：支持年/月/周三种模式，可自定义排序、项目布局（堆叠或内联）、分隔符及显示字段。
*   **智能折叠**：具备“折叠空年份/月份/周”功能，自动压缩无内容的长时段，保持视图整洁。
*   **视觉优化**：支持自定义强调色、宽度及交替配色，还原 Wiki 风格视觉效果。

**4. 使用建议**
*   确保笔记属性中包含标准日期格式（如 `2022-12-31`）。
*   创建 Base 文件时，在 `views` 中指定 `type: release-timeline-base-view`，并正确映射 `dateProperty`。
*   若时间跨度大且中间有大量空白期，建议开启 `collapseEmptyYears` 等折叠选项以提升阅读体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



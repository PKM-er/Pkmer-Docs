---
uid: 1793625608755001
title: "Obsidian 插件：Calendar Blocks"
tags: ["日历与时间", "图表与可视化", "样式与美化", "obsidian插件"]
description: "Renders date and date-range code blocks as calendars. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Calendar Blocks

> [!Note] 插件名片
> - 插件名称：Calendar Blocks
> - 插件作者：Alexander Kramarev
> - 插件说明：Renders date and date-range code blocks as calendars. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '图表与可视化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pochemuto/calendar-blocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calendar-blocks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pochemuto/calendar-blocks/master/README.md)



## 概述

Calendar Blocks 将 Markdown 中的日期代码块渲染为直观的日历视图，核心功能是可视化展示单个日期或日期范围。它支持在笔记中直接嵌入日历，无需额外图表工具，即可清晰呈现时间跨度，让日期信息从枯燥的数字变为可视化的图形，提升阅读体验。

典型场景包括规划假期或会议日程。例如，在旅行笔记中，你可以用 `dates` 代码块列出“假期：5月7日 - 5月17日”和“生日：5月9日”，插件会自动生成带图例的日历，清晰标出重叠区间和特定日期。另一个例子是记录项目里程碑，通过输入起止日期，快速查看跨月或跨年的时间分布，直观掌握进度。

相比同类插件，其特色在于智能的年份推断和灵活的日期格式支持。它能自动根据上下文或笔记创建年份补全缺失的年份，支持多种语言月份名称及不同分隔符。此外，它提供独立的颜色池区分单日和范围，重叠区域颜色混合，且支持在窄屏下自动调整布局，确保日历在移动端和桌面端均清晰可读。

使用前需注意，每个代码块最多支持 40 个条目，超出会报错。若日期格式无效或范围反转，整个块将拒绝渲染。该插件不适合需要复杂甘特图、任务依赖关系或交互式编辑日历的场景，它仅专注于静态的日期可视化展示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



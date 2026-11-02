---
uid: 1793625620099001
title: "Obsidian 插件：Pivot Tables"
tags: ["表格", "数据处理", "数据分析", "效率工具", "obsidian插件"]
description: "Turn any Markdown table into an interactive pivot table with a drag and drop field list, filters, subtotals and grand totals. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pivot Tables

> [!Note] 插件名片
> - 插件名称：Pivot Tables
> - 插件作者：haderlka
> - 插件说明：Turn any Markdown table into an interactive pivot table with a drag and drop field list, filters, subtotals and grand totals. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haderlka/obsidian-pivot-tables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pivot-tables)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haderlka/obsidian-pivot-tables/master/README.md)



## 概述

Pivot Tables 插件旨在解决 Obsidian 中 Markdown 表格缺乏交互式分析能力的问题。它允许用户将笔记中的普通表格转化为动态透视表，提供类似 Excel 的拖拽字段列表，支持在筛选器、行、列和值区域间自由调整字段。插件支持求和、计数、平均值等多种数值计算，并能生成小计与总计，让静态数据瞬间具备多维分析能力，无需离开笔记即可快速构建数据报告。

典型场景包括销售数据复盘或项目进度追踪。例如，你有一张包含地区、产品、季度和销售额的表格，通过插件可以迅速按地区分行、季度分列，计算各区域的销售总额。若需可视化，一键即可生成柱状图或饼图，直观展示各区域销售占比。这种即时反馈机制非常适合在会议前快速整理数据，或是在写作过程中随时验证数据逻辑，无需切换到外部电子表格软件。

相比其他同类插件，Pivot Tables 的最大特色是“非侵入性”与“纯文本兼容”。透视表仅引用源表格，不修改原始数据，因此你可以继续用 Obsidian 原生编辑器修改数据，透视表会实时同步更新。此外，透视表配置以代码块形式存储，支持跨笔记引用同一数据源，且布局逻辑清晰，甚至允许手动编写配置行。这种设计既保留了 Markdown 的纯文本优势，又提供了图形化操作的便捷性，适合喜欢手动微调或版本控制的用户。

使用前需注意，该插件目前不支持日期分组（如按月/年）、计算字段以及将数值放在行区域。如果你的需求涉及复杂的时间序列分析或需要生成独立的报表布局，此插件可能无法满足。此外，它主要服务于已有结构化表格的分析，若数据尚未整理成表格形式，需先完成数据清洗。对于仅需简单统计或图表展示，且不需要多维交叉分析的用户，基础图表插件可能更为轻量。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



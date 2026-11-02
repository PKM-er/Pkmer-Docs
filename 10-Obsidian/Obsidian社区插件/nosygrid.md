---
uid: 1793625618433000
title: "Obsidian 插件：NosyGrid"
tags: ["表格", "数据处理", "界面优化", "效率工具", "obsidian插件"]
description: "Edit Bases tables, reorder rows, and organize notes with nested groups, board columns, colors, and summaries. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NosyGrid

> [!Note] 插件名片
> - 插件名称：NosyGrid
> - 插件作者：Jan Bergholz
> - 插件说明：Edit Bases tables, reorder rows, and organize notes with nested groups, board columns, colors, and summaries. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/janb987/NosyGrid)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nosygrid)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/janb987/NosyGrid/master/README.md)



## 概述

NosyGrid 为 Obsidian 的 Bases 视图提供了可编辑的表格与看板功能，核心在于支持手动拖拽排序和原地编辑。它允许用户直接在网格中修改笔记属性，如文本、日期和复选框，并通过嵌套分组将笔记组织成水平章节或垂直列。这种设计让数据保留在笔记属性中，而布局与排序状态则保存在视图配置里，实现了灵活的数据管理与视觉呈现分离。

典型场景包括项目进度管理和任务看板。例如，你可以创建一个“路线图”视图，将笔记按状态分为“待办”、“进行中”和“已完成”三个垂直列，通过拖拽行手柄快速调整优先级或移动笔记状态。另一个场景是整理带有复杂列表属性的笔记，直接在单元格内编辑列表项或插入 Wiki 链接，无需打开笔记正文，即可高效完成批量信息更新。

相比原生 Bases 视图，NosyGrid 的特色在于精细的排序控制与交互能力。它采用分数分配算法，在移动某一行时仅更新该行的排序值，保持其他行不变，避免了传统整数排序导致的整体重排。此外，它支持跨组拖拽笔记并自动更新属性，提供原生汇总功能以显示每组统计，且允许为不同分组值分配颜色。其撤销机制能独立恢复排序或编辑操作，有效防止误操作带来的数据混乱。

使用前需注意，该插件尚未通过 Obsidian 官方人工审核，且需要启用 Bases 核心插件。它不适合需要复杂公式计算或依赖视图排序值进行外部查询的场景，因为视图内的排序数据对其他插件不可见。若你的工作流主要依赖自动化脚本修改笔记属性，或不需要手动拖拽排序功能，此插件可能并非必需。建议在使用前备份库，特别是当插件写入笔记属性时。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



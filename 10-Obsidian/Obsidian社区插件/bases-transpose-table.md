---
uid: 1793625607855000
title: "Obsidian 插件：Bases Transpose Table"
tags: ["表格", "数据处理", "界面优化", "obsidian插件"]
description: "Show the notes of a base in a rotated table view, with note names across the top and properties down the left. Compare notes in columns, and edit simple properties in rows. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Transpose Table

> [!Note] 插件名片
> - 插件名称：Bases Transpose Table
> - 插件作者：theluckystrike
> - 插件说明：Show the notes of a base in a rotated table view, with note names across the top and properties down the left. Compare notes in columns, and edit simple properties in rows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-transpose-table)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-transpose-table)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-transpose-table/master/README.md)



## 概述

Bases Transpose Table 将 Obsidian 原生 Bases 的查询结果转换为转置表格视图，把笔记名称横向排列在顶部，属性纵向排列在左侧。这种布局让你能直观地并排对比多篇笔记的关键数据，如成本、审查状态或复选框，无需频繁切换笔记页面。此外，你还能直接在表格中编辑现有的简单 Frontmatter 属性，如文本、数字和布尔值，修改后即时保存，极大提升了数据维护效率。

典型场景包括项目进度追踪与资源对比。例如，当你管理多个子项目时，可以创建一个 Base 筛选出所有项目笔记，切换到转置视图，快速查看各项目的预算成本与完成状态。若发现某项目成本超标，直接在对应单元格修改数字并回车，即可更新源笔记。另一个场景是内容审查，通过对比多篇笔记的“已审查”布尔值，快速定位未处理项，并在同一视图中勾选完成，避免在多个笔记间来回跳转。

相比标准 Bases 视图，该插件的核心优势在于“横向对比”与“原位编辑”的结合。它严格限制显示笔记数量（最多五篇），确保表格清晰可读，适合小范围深度对比而非大规模数据浏览。Pro 版本还引入了批量编辑行、标记相同/不同属性行、保存命名笔记集以及导出 Markdown 快照等高级功能，进一步增强了工作流的灵活性。插件对数据类型有严格校验，仅允许编辑简单类型，复杂类型如公式、日期或列表保持只读，防止数据格式损坏。

使用前需注意，该插件依赖 Obsidian 原生 Bases 功能，且单次视图最多显示五篇笔记，不适合需要同时对比大量笔记的场景。若你的需求是查看数百条记录的宏观统计，或编辑复杂的嵌套对象、日期字段，此插件并非最佳选择。此外，批量编辑行和导出功能需 Pro 订阅支持。插件会在更新时后台打开“新功能”标签页，可在设置中关闭。它不替代数据库，仅作为 Bases 的可视化增强工具，适合注重细节对比与快速修正的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



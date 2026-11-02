---
uid: 1793625620853000
title: "Obsidian 插件：Rich CSV"
tags: ["表格", "搜索与排序", "编辑工具", "数据处理", "obsidian插件"]
description: "View and edit CSV files as a sortable, filterable table. Sorting never touches the file, and edits are written back byte-for-byte. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rich CSV

> [!Note] 插件名片
> - 插件名称：Rich CSV
> - 插件作者：Marcel Schwarz
> - 插件说明：View and edit CSV files as a sortable, filterable table. Sorting never touches the file, and edits are written back byte-for-byte. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '搜索与排序', '编辑工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/icaotix/obsidian-rich-csv)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rich-csv)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/icaotix/obsidian-rich-csv/master/README.md)



## 概述

Rich CSV 将 Obsidian 中原本显示为纯文本的 CSV 文件转化为可交互的数据表格，核心功能包括排序、过滤、搜索及单元格编辑。它解决了原生视图无法直观处理数据结构的痛点，让用户能在笔记软件内直接对数据进行整理和分析，而无需切换到外部电子表格软件。

典型场景如管理个人书单或项目进度表。例如，你可以按“状态”列筛选出所有“未完成”的任务，再按“截止日期”升序排列，快速定位紧急事项；或者在查看销售数据时，通过底部汇总行实时计算当前筛选结果下的总金额和平均值，无需手动复制数据到计算器。

相比其他 CSV 插件，Rich CSV 最显著的特色是“非破坏性”操作。排序和过滤仅改变视图，绝不修改文件原始行序，确保数据完整性；编辑时采用字节级回写，保留未修改单元格的原始引号、换行符等格式，避免产生无意义的代码差异。此外，它支持在旁侧文件中存储过滤条件和衍生列公式，既保持 CSV 纯净，又实现了复杂逻辑的可视化。

使用前需注意，若库中已安装 CSV Lite 或 CSV Editor 等同类插件，需先禁用它们以避免扩展名冲突。该插件不适合需要直接在 CSV 文件中写入公式、生成图表或执行 SQL 查询的用户，也不支持将 CSV 直接转换为 Obsidian Bases 视图。它专注于数据查看与轻量编辑，而非重型数据分析。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



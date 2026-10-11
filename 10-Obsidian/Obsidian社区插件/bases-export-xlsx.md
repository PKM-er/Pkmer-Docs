---
uid: 1791709365544000
title: 'Obsidian 插件：Bases Export to Excel'
tags: ['数据处理', '效率工具', '文件管理', 'obsidian插件']
description: 'Export the filtered results of the current Bases view to a local Excel file. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Export to Excel

> [!Note] 插件名片
> - 插件名称：Bases Export to Excel
> - 插件作者：GroupiesM
> - 插件说明：Export the filtered results of the current Bases view to a local Excel file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/groupiesm/Obsidian-bases-export-xlsx-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-export-xlsx)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/groupiesm/Obsidian-bases-export-xlsx-Plugin/master/README.md)



## 概述

**主要功能**
该插件可将 Obsidian 中 Bases（.base）视图的当前筛选结果，一键导出为本地 Excel（.xlsx）文件。它完整复刻了 Bases 的筛选、排序及列定义逻辑，生成标准 OOXML 格式文件，并支持自动打开导出文件。

**适用场景**
适用于需要将 Obsidian 笔记库中特定筛选后的结构化数据（如文献清单、任务列表）分享给非 Obsidian 用户，或需利用 Excel 进行进一步数据分析、格式调整及归档的场景。

**核心特色**
1. **零依赖实现**：纯 JavaScript 手写 OOXML 生成逻辑，无第三方库，轻量且安全。
2. **逻辑还原度高**：支持 `and/or/not` 分组及多种文件属性表达式筛选，按 `.base` 定义的列顺序和排序规则导出。
3. **交互便捷**：通过工具栏图标或命令面板触发，调用系统原生“另存为”对话框，默认保存至源文件目录。

**使用建议**
1. **平台限制**：仅支持桌面端（Windows/macOS/Linux），移动端不可用。
2. **功能边界**：不支持 Bases 中的公式计算列（formulas），仅导出属性字段；极特殊的筛选公式可能按“宽松放行”处理。
3. **安装方式**：推荐通过 BRAT 插件安装以便后续更新，或手动将文件放入插件目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



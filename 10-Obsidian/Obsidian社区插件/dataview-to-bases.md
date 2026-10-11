---
uid: 1791709366439000
title: 'Obsidian 插件：Dataview to Bases'
tags: ['数据处理', '表格', '效率工具', 'obsidian插件']
description: 'Convert Dataview queries into Bases blocks, and report which queries in your vault can be converted. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dataview to Bases

> [!Note] 插件名片
> - 插件名称：Dataview to Bases
> - 插件作者：siulved54
> - 插件说明：Convert Dataview queries into Bases blocks, and report which queries in your vault can be converted. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '表格', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/dataview-to-bases)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dataview-to-bases)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/dataview-to-bases/master/README.md)



## 概述

**1. 主要功能**
该插件用于将 Obsidian 中的 Dataview 查询语句转换为原生 Bases 代码块，并将 Dataview 内联字段（如 `status:: done`）迁移至笔记属性（Properties）中，以便 Bases 功能识别。

**2. 适用场景**
专为计划从长期未更新的 Dataview 插件迁移至 Obsidian 核心 Bases 功能的用户设计，适用于需要整理笔记库、统一数据视图且希望减少第三方插件依赖的场景。

**3. 核心特色**
*   **安全非破坏性**：扫描库时绝不修改笔记；转换操作支持单次撤销（Undo），且默认保留原查询代码于注释中以便回滚。
*   **智能报告**：提供全库扫描功能，生成报告详细说明每个查询是否可转换及具体原因，明确告知无法转换的部分。
*   **批量处理**：支持单条、单篇笔记或全库批量迁移内联字段，并具备“撤销最近一次字段迁移”功能。
*   **覆盖常见语法**：支持 TABLE、LIST、FROM、WHERE 等常用查询语句的自动转换。

**4. 使用建议**
建议先使用“扫描库”命令生成报告，评估迁移可行性及潜在阻碍。在正式转换前，确保已备份笔记库。对于复杂查询，若插件提示不可转换，请保留原有 Dataview 代码或手动调整，避免数据视图丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



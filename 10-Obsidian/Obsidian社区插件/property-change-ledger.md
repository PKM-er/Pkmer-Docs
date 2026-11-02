---
uid: 1793625620295001
title: "Obsidian 插件：Property Change Ledger"
tags: ["文件管理", "数据处理", "效率工具", "obsidian插件"]
description: "Record observed changes to selected note properties in a local history file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Property Change Ledger

> [!Note] 插件名片
> - 插件名称：Property Change Ledger
> - 插件作者：theluckystrike
> - 插件说明：Record observed changes to selected note properties in a local history file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/property-change-ledger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?property-change-ledger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/property-change-ledger/master/README.md)



## 概述

Property Change Ledger 专注于记录笔记属性在本地打开期间的变更历史。它允许你指定特定文件夹和精确的属性键，当这些属性值发生变化时，插件会将旧值、新值及 UTC 时间戳追加到本地的 Markdown 历史文件中。初始状态仅作为基线，不会生成记录，只有后续的实际修改才会被捕获，从而帮助你追踪项目状态、截止日期或有序列表的演变过程。

典型场景包括监控项目进度的状态流转，例如将 `status` 从 `draft` 改为 `done`，插件会自动记录这一转变。另一个例子是追踪任务截止日期的调整，当你修改 `due` 属性时，系统会保留修改前后的具体数值。这种机制特别适合需要回顾“谁在何时改变了什么”的工作流，让你能清晰看到关键元数据的演变轨迹，而无需依赖复杂的版本控制工具。

相比同类插件，该工具强调数据的类型保真度与本地化。它能区分属性缺失与值为 null 的情况，并保留列表的顺序，确保重排键名但值未变时不产生冗余记录。写入过程通过串行队列执行，保证历史文件的完整性。此外，它提供最近 100 条记录的快速过滤视图，支持按路径片段和精确键名筛选，方便快速定位特定笔记的变更详情。

使用前需注意，该插件仅记录应用打开期间的观察值，无法恢复关闭应用期间的编辑，且重启后基线会重置。它不适合多设备同步场景，因为两台设备可能产生冲突或重复记录，建议每台设备使用独立的历史文件路径。此外，历史文件没有自动清理机制，长期积累需手动归档。若你只需要简单的全文搜索或依赖 Git 进行版本控制，此插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1793625620752000
title: "Obsidian 插件：RemNote JSON Import"
tags: ["第三方工具集成", "数据处理", "文件管理", "obsidian插件"]
description: "Import RemNote JSON notes with parent links and references. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：RemNote JSON Import

> [!Note] 插件名片
> - 插件名称：RemNote JSON Import
> - 插件作者：theluckystrike
> - 插件说明：Import RemNote JSON notes with parent links and references. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/remnote-json-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remnote-json-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/remnote-json-import/master/README.md)



## 概述

RemNote JSON Import 旨在解决从 RemNote 迁移笔记到 Obsidian 时的结构丢失问题。它通过解析本地 `rem.json` 文件，将 RemNote 的记录转换为带有源 ID、父级链接和引用关系的 Markdown 笔记。核心功能包括在创建笔记前提供详细的预览窗口，展示源数据数量、计划生成的笔记数及潜在警告，确保你在正式导入前能清晰了解数据映射情况，并生成一份导入报告以便后续检查内容完整性。

典型使用场景包括将个人知识库从 RemNote 整体迁移至 Obsidian，或仅导入特定主题的子树。例如，你可以先使用插件提供的示例 JSON 文件测试导入效果，检查父子链接是否正确建立，再处理正式导出文件。对于大型知识库，你可以利用 Pro 版本的“子树分组”功能，将相关笔记合并为单一文档，同时保留内部章节链接，从而在 Obsidian 中保持原有的层级结构。

相比其他迁移工具，该插件的特色在于对数据结构的精细保留与透明化。它不仅转换文本，还专门处理父级与子级链接，使笔记间能相互追溯。此外，它提供 Pro 版本的“变更对比”功能，允许你比较两次导出之间的差异，识别新增、修改或删除的记录，而不会覆盖你已在 Obsidian 中手动编辑的内容。这种非破坏性的导入方式，加上详细的警告机制，使得迁移过程更加可控和安全。

使用前需注意，该插件仅支持 JSON 格式的特定子集，不会重建 RemNote 的学习系统（如卡片调度）。输入文件限制为 20 MiB 且不超过 25,000 条记录，超出需拆分处理。插件不支持原地更新或自动合并，每次导入需指定新的目标文件夹。因此，它不适合需要频繁同步 RemNote 与 Obsidian 双向数据的用户，也不适用于依赖 RemNote 特有学习功能（如间隔重复）的场景。建议保留原始导出文件，直到确认导入结果无误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



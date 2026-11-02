---
uid: 1793625624991001
title: "Obsidian 插件：Zoho Znote Import"
tags: ["第三方工具集成", "文件管理", "数据处理", "obsidian插件"]
description: "Import Zoho ZNote exports as notes with card dates, tags, checklists, and local attachments. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zoho Znote Import

> [!Note] 插件名片
> - 插件名称：Zoho Znote Import
> - 插件作者：theluckystrike
> - 插件说明：Import Zoho ZNote exports as notes with card dates, tags, checklists, and local attachments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/zoho-znote-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zoho-znote-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/zoho-znote-import/master/README.md)



## 概述

Zoho Znote Import 专为解决 Zoho Notebook 数据迁移至 Obsidian 的痛点而设计。它直接读取 Zoho 原生导出的 ZIP 压缩包，将卡片内容转换为标准的 Markdown 笔记。插件完整保留卡片标题、创建与修改日期、颜色标签、任务清单以及本地附件，确保数据在迁移过程中不丢失关键元信息，且生成的笔记无需依赖该插件即可正常阅读。

典型场景适用于从 Zoho 彻底转向 Obsidian 的用户。例如，你可以将包含项目计划、待办事项和会议记录的笔记本一次性导入，原有的勾选状态和层级结构会准确转换为 Obsidian 的任务列表。另一个场景是整理个人知识库，将分散在不同笔记本中的笔记集中到 Vault 的指定文件夹，同时保留原有的标签体系以便后续检索。

相比其他仅支持 HTML 导出的工具，该插件的核心优势在于对 Zoho 原生 `.znote` 格式的深度解析。它能处理复杂的内部链接，将指向同一批次内其他卡片的引用自动转换为本地链接，并严格校验附件完整性。此外，Pro 版本提供了映射配置文件和增量对比功能，允许用户自定义文件夹与字段名称，或在后续导出中仅导入新增或修改的卡片，极大提升了长期维护的效率。

使用前需注意，该插件仅支持 Zoho 原生格式导出，不支持 HTML 版本。输入文件限制在 64 MiB 以内，且输出文件夹必须为空，若文件夹已存在则无法导入。对于包含音频、草图或加密内容的卡片，插件会跳过并生成警告报告。如果你需要保留 Zoho 特有的提醒功能、地理位置字段或高级表格布局，此插件并不适合，建议保留原始导出文件作为备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



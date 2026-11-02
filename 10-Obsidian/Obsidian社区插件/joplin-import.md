---
uid: 1793625614373000
title: "Obsidian 插件：Joplin Export Import"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "Import Joplin archives as linked Markdown notes with tags, dates, and local attachments. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Joplin Export Import

> [!Note] 插件名片
> - 插件名称：Joplin Export Import
> - 插件作者：theluckystrike
> - 插件说明：Import Joplin archives as linked Markdown notes with tags, dates, and local attachments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/joplin-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?joplin-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/joplin-import/master/README.md)



## 概述

Joplin Export Import 专为从 Joplin 迁移笔记至 Obsidian 的用户设计，核心功能是将 JEX 归档文件转换为带有完整元数据的 Markdown 笔记。它自动将 Joplin 笔记本映射为文件夹，把内部链接转换为 Obsidian 双链，并将附件本地化存储。导入后的笔记会保留源 ID、标签、创建及更新日期等属性，确保数据结构的完整性与可追溯性，让你无需手动整理即可直接开始使用。

典型场景包括整理长期积累的 Joplin 知识库，或合并多个 Joplin 账户的数据。例如，当你将工作笔记导入时，插件会保持原有的层级结构，并将“计划”笔记中的链接正确指向“研究”笔记；若笔记中包含图片，它们会被自动提取并嵌入到对应的 Markdown 文件中，确保阅读体验流畅且离线可用。

相比其他迁移工具，该插件最大的特色是“先预览后写入”的安全机制。在正式导入前，你可以查看详细的统计报告，包括缺失资源、不支持项及路径冲突，且预览过程不会在磁盘上创建任何文件。此外，它具备严格的安全校验，能拒绝包含绝对路径、符号链接或损坏头部的归档，防止潜在的文件系统风险。Pro 版本还支持增量同步，能识别并更新已修改的笔记，同时保留你在 Obsidian 中手动编辑的内容。

使用前需注意，该插件仅支持 Markdown 格式的笔记，HTML 笔记、加密项及历史版本不会被导入，相关缺失会在报告中列出。单个 JEX 文件限制为 100 MiB，超大库需分次导出。它不适合需要实时双向同步 Joplin 与 Obsidian 的用户，因为这是一次性导入或手动触发的更新工具，而非实时同步服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



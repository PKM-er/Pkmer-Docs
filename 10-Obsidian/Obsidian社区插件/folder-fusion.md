---
uid: 1793625613078000
title: "Obsidian 插件：Folder Fusion"
tags: ["文件管理", "文字处理", "效率工具", "obsidian插件"]
description: "For long texts, like novels, compile complete folder hierarchy in one file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Fusion

> [!Note] 插件名片
> - 插件名称：Folder Fusion
> - 插件作者：Thierry Crouzet
> - 插件说明：For long texts, like novels, compile complete folder hierarchy in one file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tcrouzet/obsidian-folder-fusion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-fusion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tcrouzet/obsidian-folder-fusion/master/README.md)



## 概述

Folder Fusion 旨在解决长篇写作中章节分散、难以整体审阅的痛点。它允许用户将文件夹内的所有笔记按路径顺序合并为单一文档，生成带有时间戳的快照文件。这一功能让创作者无需在多个章节间频繁切换，即可流畅阅读完整草稿，或为作品建立清晰的版本存档，极大提升了长文本管理的效率。

想象你正在撰写一部小说，章节文件分散在“第一章”、“第二章”等子文件夹中。只需右键点击根目录并选择“Folder fusion”，插件便会自动按文件名排序并拼接内容，生成一份完整的《融合-小说名-日期.md》。若需调整章节顺序，只需重命名文件添加数字前缀即可。此外，插件还能自动清理注释和删除线，甚至为 Pandoc 导出添加排版标记，方便直接生成 PDF 或 DOCX 格式。

相比简单的文本拼接工具，Folder Fusion 提供了独特的“文件夹编号”功能。它不仅能自动为文件添加数字前缀，还支持自定义步长（如以 10 为间隔），为后续插入新章节预留空间，避免重新编号的麻烦。同时，它具备智能去重机制，确保生成的快照文件不会在下次合并时被重复包含，保持了工作流的整洁与逻辑一致性。

需要注意的是，该插件生成的文件位于源文件夹内，且时间戳基于 UTC 时间，同一分钟内重复操作会覆盖快照。它主要服务于 Markdown 笔记的整合，若你的项目依赖复杂的跨文件链接或需要实时同步编辑，此插件可能并非最佳选择。此外，它不直接处理非 Markdown 格式，导出其他格式需配合 Pandoc 等外部工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1793625612097000
title: "Obsidian 插件：Diaro Backup Import"
tags: ["备份与恢复", "第三方工具集成", "文件管理", "obsidian插件"]
description: "Import a Diaro backup with journal entries, tags, and photos. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Diaro Backup Import

> [!Note] 插件名片
> - 插件名称：Diaro Backup Import
> - 插件作者：theluckystrike
> - 插件说明：Import a Diaro backup with journal entries, tags, and photos. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/diaro-backup-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?diaro-backup-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/diaro-backup-import/master/README.md)



## 概述

Diaro Backup Import 将本地 Diaro 日记备份转换为 Obsidian 中的 Markdown 笔记，完整保留日期、标签、心情、地点及照片。它无需联网或 Diaro 账号，直接解析未加密的 ZIP 备份文件，将日记条目转化为带有源属性元数据的独立笔记，并自动将引用的图片复制到库的附件文件夹中，实现从移动日记应用向本地知识库的无缝迁移。

典型场景包括整理多年积累的 Diaro 日记，或迁移包含大量照片的旅行记录。例如，你可以导入一份包含三篇日记和花园照片的备份，预览界面会清晰展示条目数量、缺失照片警告及文件冲突情况。确认后，插件会在指定文件夹生成以 UTC 日期命名的笔记，图片自动嵌入，方便你在 Obsidian 中通过双链和标签系统重新组织这些记忆。

相比其他导入工具，该插件支持 Pro 功能的映射预设保存，允许自定义属性名称并复用配置；还提供备份对比功能，能识别后续备份中新增、修改或缺失的条目，但不会自动覆盖现有笔记。此外，它可生成月度回顾笔记，汇总当月新导入的日记链接，帮助定期复盘。所有操作均在本地完成，确保数据隐私安全。

使用前请注意，该插件仅支持未加密的 Diaro 2.0 版本 XML 备份，不支持加密档案、ZIP64 格式或超过 20,000 条目的大型日记。若备份包含音频、视频或模板，这些内容将被忽略。由于导入过程可能因存储问题中断，建议保留原始备份文件，并在导入后仔细检查错误报告。不适合需要实时同步、自动更新笔记或处理复杂多媒体格式的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



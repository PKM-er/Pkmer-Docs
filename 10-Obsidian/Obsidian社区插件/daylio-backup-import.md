---
uid: 1793625611915001
title: "Obsidian 插件：Daylio Backup Import"
tags: ["备份与恢复", "第三方工具集成", "数据处理", "obsidian插件"]
description: "Convert local Daylio version 15 backups into journal notes with moods, activities, and photos. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daylio Backup Import

> [!Note] 插件名片
> - 插件名称：Daylio Backup Import
> - 插件作者：theluckystrike
> - 插件说明：Convert local Daylio version 15 backups into journal notes with moods, activities, and photos. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/daylio-backup-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daylio-backup-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/daylio-backup-import/master/README.md)



## 概述

Daylio Backup Import 将 Android 端 Daylio 应用的本地备份文件转换为 Obsidian 笔记，无需登录 Daylio 账号。它解析 schema 版本 15 的 `.daylio` 文件，将每条日记记录生成独立笔记，包含文本、日期、本地时间、心情和活动标签。同时，插件会自动提取备份中的照片并复制到库中，在笔记内建立本地图片链接，实现数据从封闭应用向开放笔记库的完整迁移。

典型场景包括整理多年积累的日记或从 Daylio 彻底迁移。例如，你可以将过去三年的心情记录导入 Obsidian，每条笔记保留原始时间戳和心情标签，方便后续检索。若你习惯使用每日笔记，可开启“合并到每日笔记”功能，插件会在指定日期的笔记中自动添加包含时间、心情和链接的列表项，保持日记流的连贯性。

相比其他导入工具，该插件在写入前提供详细的预览窗口，显示条目数、缺失照片及潜在冲突，避免盲目导入。它通过源 ID 确保唯一性，防止同名笔记覆盖，并支持自定义文件名规则。此外，插件具备严格的安全检查，拒绝包含路径遍历风险或加密的备份文件，确保库文件安全。

使用前请注意，该插件仅支持 Android 备份格式，iOS 备份未经验证。部分高级功能如日期过滤和自定义文件名规则需通过 GitHub Sponsors 赞助解锁。若你只需简单导出文本而不关心照片或元数据，或使用的是 iOS 版本 Daylio，此插件可能不适用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



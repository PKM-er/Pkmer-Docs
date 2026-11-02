---
uid: 1793625620650001
title: "Obsidian 插件：RedNotebook Backup Import"
tags: ["备份与恢复", "数据处理", "文件管理", "obsidian插件"]
description: "Convert local RedNotebook backups into dated notes with text and category entries. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：RedNotebook Backup Import

> [!Note] 插件名片
> - 插件名称：RedNotebook Backup Import
> - 插件作者：theluckystrike
> - 插件说明：Convert local RedNotebook backups into dated notes with text and category entries. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/rednotebook-backup-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rednotebook-backup-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/rednotebook-backup-import/master/README.md)



## 概述

RedNotebook Backup Import 旨在将本地 RedNotebook 备份文件转化为 Obsidian 中的 Markdown 笔记。它直接读取设备上的 ZIP 备份，无需网络连接或账号，将按月存储的 YAML 数据转换为以日期命名的独立笔记。插件支持基础 txt2tags 标记到 Markdown 的转换，保留分类条目，并为每篇笔记添加日期、来源及分类等属性，确保数据在迁移过程中保持结构完整且易于检索。

典型场景包括整理多年积累的日记或项目日志。例如，你可以将过去两年的 RedNotebook 备份导入，生成按天排列的笔记，方便在 Obsidian 中通过图谱视图查看时间线。若你已使用 Obsidian 的每日笔记功能，该插件还能将旧数据合并到现有的每日笔记中，在指定章节下追加内容，实现新旧数据的无缝衔接，避免重复创建文件。

相比其他导入工具，该插件具备严格的安全校验机制，在写入前会检查整个备份，遇到无效日期或路径问题会直接报错并阻止导入，确保不产生损坏文件。此外，它提供 Pro 功能，允许将分类值映射为笔记属性，便于后续筛选；同时支持将导入内容合并至现有每日笔记的特定章节，且会自动降级标题层级以保持结构清晰。原始月度文件也会保留在导入文件夹中，方便溯源。

使用前需注意，该插件仅支持标准 ZIP 格式，拒绝加密、分卷或超大文件，且仅读取月度文本文件，不处理图片等媒体资源。它不适合需要实时同步 RedNotebook 在线数据的用户，也不支持移动端测试过的复杂 YAML 变体。若你的备份包含大量非文本媒体或依赖特定在线服务，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



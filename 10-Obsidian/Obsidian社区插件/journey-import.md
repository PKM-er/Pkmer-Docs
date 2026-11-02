---
uid: 1793625614399000
title: "Obsidian 插件：Journey Diary Import"
tags: ["文件管理", "图片与PDF", "数据处理", "效率工具", "obsidian插件"]
description: "Convert Journey diary ZIP backups into dated Markdown notes with photos. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Journey Diary Import

> [!Note] 插件名片
> - 插件名称：Journey Diary Import
> - 插件作者：theluckystrike
> - 插件说明：Convert Journey diary ZIP backups into dated Markdown notes with photos. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/journey-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?journey-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/journey-import/master/README.md)



## 概述

Journey Diary Import 专为从 Journey 应用迁移日记的用户设计，核心功能是将 Journey 的 ZIP 备份文件转换为 Obsidian 中带有日期标记的 Markdown 笔记。插件会在本地运行，无需上传数据，确保隐私安全。它不仅能提取文本内容，还会自动将备份中的照片复制到附件文件夹并嵌入笔记，同时保留原有的加粗、斜体等格式，让日记在 Obsidian 中保持原有的阅读体验。

典型场景包括整理多年积累的旅行日记或日常记录。例如，当你想将过去几年的 Journey 日记导入 Obsidian 以便长期归档时，只需选择备份文件，插件会生成以“日期+时间”命名的独立笔记。若你习惯使用每日笔记，Pro 版本支持“按日期合并”功能，能将多条日记追加到同一天日期的笔记中，并自动添加时间标题和属性块，方便回顾同一天的不同心情或地点。

相比其他转换工具，该插件的特色在于对元数据的精细处理。它会自动提取时区、心情、天气、经纬度等信息并写入笔记的 Frontmatter，便于后续检索。此外，预览功能允许你在导入前查看条目数量、警告信息及输出路径，避免误操作。对于 Pro 用户，还支持自定义文件夹结构（如按年月归档）和文件名模式，满足更个性化的整理需求。

使用前请注意，插件不自动去重，重复导入同一备份会生成带编号的新文件，建议首次导入使用独立文件夹。它仅支持标准 ZIP 格式，未测试加密备份或超大文件，且 HEIC 图片显示依赖设备支持。如果你需要实时同步 Journey 数据或处理非标准导出格式，此插件可能不适用。免费版功能已足够基础迁移，Pro 功能需通过 GitHub Sponsors 赞助解锁。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



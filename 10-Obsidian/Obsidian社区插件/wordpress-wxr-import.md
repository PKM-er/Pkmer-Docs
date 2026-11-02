---
uid: 1793625624765000
title: "Obsidian 插件：WordPress WXR Import"
tags: ["第三方工具集成", "数据处理", "文件管理", "obsidian插件"]
description: "Import WordPress XML exports as notes with dates, tags, and comments. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WordPress WXR Import

> [!Note] 插件名片
> - 插件名称：WordPress WXR Import
> - 插件作者：theluckystrike
> - 插件说明：Import WordPress XML exports as notes with dates, tags, and comments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/wordpress-wxr-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wordpress-wxr-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/wordpress-wxr-import/master/README.md)



## 概述

WordPress WXR Import 将本地 WordPress XML 导出文件转换为 Markdown 笔记，帮助你在 Obsidian 中保留博客存档。它自动提取文章、页面、属性、已批准评论及索引报告，将 HTML 内容转为 Markdown，并保留标题、日期、作者等元数据。导入前可预览文件内容，确认文章与页面数量，且不会修改源文件或写入笔记，确保数据安全。

典型场景包括将旧博客迁移至 Obsidian 以便统一阅读，或定期备份博客内容。例如，你可以导入一篇包含图片和评论的文章，插件会将其转为带格式的 Markdown 笔记，并在文末附上已批准的读者评论。若后续博客有更新，Pro 版还支持对比新旧导出文件，识别新增、修改或删除的内容，方便你追踪变化。

相比同类插件，该工具在导入前提供详细的预览窗口，显示跳过记录、省略评论及短代码数量，避免盲目导入。它保留 WordPress 源 ID 作为笔记文件名的一部分，防止同名冲突，并将媒体 URL 保留为链接而非嵌入图片，减少文件体积。Pro 版允许保存文件夹和字段映射配置，支持自定义属性名称，并生成对比报告，适合需要精细管理元数据的用户。

使用前需注意，插件仅处理 UTF-8 编码的 WXR 文件，大小限制为 20 MiB，记录数上限 10000 条。短代码和复杂布局可能丢失格式，需手动检查。它不下载媒体文件，也不执行脚本，适合静态内容归档，但不适合需要实时同步或动态交互的博客管理需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



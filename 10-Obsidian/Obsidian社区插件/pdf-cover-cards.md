---
uid: 1791709369159000
title: 'Obsidian 插件：PDF Cover Cards'
tags: ['图片与PDF', '界面优化', '文件管理', 'obsidian插件']
description: 'Shows the first page, or a chosen page, of the PDF linked from each note as the card cover in a Bases view. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Cover Cards

> [!Note] 插件名片
> - 插件名称：PDF Cover Cards
> - 插件作者：theluckystrike
> - 插件说明：Shows the first page, or a chosen page, of the PDF linked from each note as the card cover in a Bases view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '界面优化', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pdf-cover-cards)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-cover-cards)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pdf-cover-cards/master/README.md)



## 概述

**PDF Cover Cards** 是一款基于 Obsidian 核心 Bases 插件的布局扩展，主要功能是将笔记中关联的 PDF 文件首页（或指定页）渲染为卡片封面，使文档库呈现为直观的“书架”视觉效果。

**适用场景**：适合管理电子书、学术论文、操作手册或扫描件等 PDF 资源，尤其适用于需要快速视觉识别和检索文档库的用户。

**核心特色**：
1. **灵活定位**：支持通过属性链接、笔记内嵌或纯路径自动识别 PDF，并允许使用 `#page=N` 参数指定显示任意页面。
2. **无缝集成**：直接利用 Obsidian 内置 PDF 阅读器绘制封面，无需额外依赖，点击卡片即可打开笔记或新标签页。
3. **智能回退**：具备多层查找逻辑，优先使用 Base 中的 PDF 文件，其次查找属性链接，最后识别笔记正文中的嵌入或链接。

**使用建议**：建议为每份 PDF 建立独立笔记，并通过属性（如 `pdf` 字段）明确关联文件路径。对于封面非首页的文档（如论文摘要在第二页），务必使用 `[[文件名.pdf#page=2]]` 语法指定页面，以获得最佳展示效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



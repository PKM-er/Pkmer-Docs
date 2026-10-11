---
uid: 1791709366690000
title: 'Obsidian 插件：Easy PDF Highlight'
tags: ['图片与PDF', '编辑工具', '效率工具', 'obsidian插件']
description: 'Select text in a PDF and click a color. Highlights are listed in a note next to the PDF, grouped by color and sorted by page, and drawn on the PDF without modifying the file. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Easy PDF Highlight

> [!Note] 插件名片
> - 插件名称：Easy PDF Highlight
> - 插件作者：Max Dokukin
> - 插件说明：Select text in a PDF and click a color. Highlights are listed in a note next to the PDF, grouped by color and sorted by page, and drawn on the PDF without modifying the file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/maxdokukin/easy-pdf-highlight)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-pdf-highlight)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/maxdokukin/easy-pdf-highlight/master/README.md)



## 概述

**主要功能**
Easy PDF Highlight 允许用户在 PDF 中选中文字后点击颜色进行高亮。高亮内容会自动记录在同目录下的 Markdown 笔记中，按颜色分组并按页码排序。插件实现了 PDF 与笔记的双向链接：点击 PDF 高亮可跳转至笔记条目，点击笔记链接可定位 PDF 原文。

**适用场景**
适用于学术阅读、文献管理及需要长期归档 PDF 重点内容的场景，特别适合希望将 PDF 笔记融入 Obsidian 知识体系的用户。

**核心特色**
1. **非破坏性**：直接修改 PDF 文件，高亮仅绘制在视图层，笔记为唯一数据源。
2. **双向同步**：删除笔记中的条目即移除 PDF 高亮，支持在条目下添加个人备注。
3. **数据集成**：内置 Dataview 内联字段，支持跨库查询高亮数据；支持快捷键绑定颜色。

**使用建议**
建议配合 Dataview 插件使用，以便通过字段查询汇总所有高亮内容。首次使用时，插件会自动创建 `<pdf名称>_highlights.md` 文件，请确保对该文件夹有写入权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



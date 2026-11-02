---
uid: 1793625619997001
title: "Obsidian 插件：PDF Collation"
tags: ["图片与PDF", "编辑工具", "效率工具", "obsidian插件"]
description: "Compare Markdown notes with PDFs side by side, synchronize text selections and pages, generate paginated drafts, and edit page blocks inline. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Collation

> [!Note] 插件名片
> - 插件名称：PDF Collation
> - 插件作者：hongdonglee
> - 插件说明：Compare Markdown notes with PDFs side by side, synchronize text selections and pages, generate paginated drafts, and edit page blocks inline. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hongdonglee/obsidian-pdf-collation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-collation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hongdonglee/obsidian-pdf-collation/master/README.md)



## 概述

PDF Collation 旨在解决 Markdown 笔记与 PDF 原件对照阅读时的同步难题。它提供双栏并排视图，支持零配置自动配对同名文件，甚至能直接从 PDF 提取文字层生成带页标的 Markdown 底稿。核心功能包括双向划选高亮、页面滚动同步以及单页块内联编辑，让文本对照与修改无需在多个软件间切换。

典型场景如处理 OCR 生成的粗稿或进行古籍校勘。例如，当你只有一份 PDF 时，右键即可生成带 `[pdf. N]` 页标的底稿并排打开；若已有 Markdown 笔记，点击“自动分页”按钮即可一键插入页标，实现左右栏按页联动。在逐句核查引文时，在左侧划选句子，右侧 PDF 会自动跳转并高亮对应字符，反之亦然，极大提升了核对效率。

相比同类插件，其特色在于强大的容错匹配能力。内置五级算法可自动抹平空格、标点差异，即使文本中存在 OCR 错别字、跨页断句或人工添加的校按注记，仍能精准定位。此外，它原生兼容多种页标格式，包括 OCR 工具默认分隔符及双轨页码，无需手动清洗数据即可直接上手，适合对精度要求较高的学术工作流。

使用前需注意，从 PDF 生成 Markdown 依赖文件自带的文字层，纯扫描图片 PDF 需先运行 OCR。自动分页和高亮基于文本匹配，面对复杂版式或严重 OCR 错误时仍需人工核对。该插件不适合需要处理无文字层扫描件且无外部 OCR 工具配合的用户，也不适用于对实时协作有需求的场景，因为所有处理均在本地完成。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



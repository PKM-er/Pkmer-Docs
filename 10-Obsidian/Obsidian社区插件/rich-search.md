---
uid: 1793625620859000
title: "Obsidian 插件：Rich Search"
tags: ["搜索与排序", "文件管理", "效率工具", "obsidian插件"]
description: "Cross-file search: whole-word and regex matching, folder and file-type scope, and results from notes, PDF, Excalidraw, Excel, PowerPoint, draw.io and Visio files, with every match marked where it opens. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rich Search

> [!Note] 插件名片
> - 插件名称：Rich Search
> - 插件作者：sdking
> - 插件说明：Cross-file search: whole-word and regex matching, folder and file-type scope, and results from notes, PDF, Excalidraw, Excel, PowerPoint, draw.io and Visio files, with every match marked where it opens. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sdkay/obsidian-rich-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rich-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sdkay/obsidian-rich-search/master/README.md)



## 概述

Rich Search 是一款专为 Obsidian 设计的跨文件搜索工具，旨在解决传统搜索无法覆盖非 Markdown 格式文件的痛点。它支持全词匹配和正则表达式，允许用户通过文件夹和文件类型精确限定搜索范围。除了常规的笔记内容，它还能深入解析 PDF、Excalidraw 绘图、Excel 表格、PowerPoint 演示文稿以及 draw.io 和 Visio 文件中的文本，确保所有匹配项在打开时都能被清晰标记。

典型使用场景包括在混合文档库中快速定位信息。例如，当你需要查找某份 PDF 报告中的特定术语，或是在 Excalidraw 白板中搜索某个关键词时，Rich Search 能直接定位到具体页面或图形元素。此外，如果你维护着包含大量 Excel 数据或 PPT 资料的库，它也能像搜索笔记一样搜索这些文件，点击结果即可跳转到对应的单元格或幻灯片，无需手动逐个打开文件查找。

相比同类插件，Rich Search 的核心特色在于其“所见即所得”的跨格式搜索能力。它不直接解析原始字节，而是依赖 Rich Table 和 Rich View 等插件来读取人类可见的文本，从而避免了乱码或无效数据。此外，它提供了类似 VS Code 的高亮体验：在搜索面板打开期间，所有匹配项会在笔记中持续高亮，当前选中的结果会以更亮的颜色突出显示，且支持键盘上下键快速切换结果，极大提升了检索效率。

使用前需注意，搜索 PDF 和 Excalidraw 需要相应的插件支持，且扫描版 PDF 因无文本层而无法被搜索。对于 Excel、PowerPoint 等格式，必须安装配套的 Rich Table 或 Rich View 插件才能生效。如果你只需要简单的 Markdown 全文搜索，或者对非文本格式文件没有检索需求，这款插件可能显得功能过剩，Obsidian 自带的搜索功能或许已足够满足你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



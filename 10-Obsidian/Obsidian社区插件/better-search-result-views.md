---
uid: 1793625607937000
title: "Obsidian 插件：Better Search Result Views"
tags: ["搜索与排序", "界面优化", "效率工具", "obsidian插件"]
description: "Show search results grouped under their headings, in find in note and in the built-in search, and still find words split by line breaks, tags or page markers. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Better Search Result Views

> [!Note] 插件名片
> - 插件名称：Better Search Result Views
> - 插件作者：shechu-ovo-1012
> - 插件说明：Show search results grouped under their headings, in find in note and in the built-in search, and still find words split by line breaks, tags or page markers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/1012-web/better-search-result-views)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-search-result-views)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/1012-web/better-search-result-views/master/README.md)



## 概述

Better Search Result Views 旨在优化 Obsidian 的搜索体验，核心功能是将搜索结果按标题层级分组展示。它同时增强了“笔记内查找”和“内置侧边栏搜索”两个场景：在笔记内查找时，提供浮动面板列出所有匹配项，支持折叠标题并点击跳转；在侧边栏搜索中，将原本平铺的结果转化为可折叠的标题树，让你能更直观地定位内容。

典型场景包括快速浏览长文档或古籍转录。例如，当你在笔记中查找某个关键词时，插件会显示该词在全文中出现的所有位置及其所属章节，而非像原生功能那样逐个高亮。另一个例子是搜索被换行符、标签或页码标记（如 `<!--p.12-->`）截断的短语，插件能智能识别这些被分割的词汇，确保搜索结果的完整性。

相比同类插件，其特色在于对中文历史文本的深度支持。它能识别繁简异体字（如“鄴”与“邺”）并视为相同，且能跨越页码标记进行匹配。此外，它不依赖网络，无遥测数据，且界面语言跟随 Obsidian 设置。对于阅读古籍的用户，若笔记中包含页码注释，查找面板还会直接显示结果对应的页码，极大提升了检索效率。

使用前需注意，该插件通过修改内置搜索面板的内部结构来实现增强功能，因此在 Obsidian 更新后可能暂时失效，但会自动回退且不影响其他功能。它主要服务于需要处理复杂文本结构（如古籍、带页码注释的文档）的用户。如果你的笔记结构简单，或不需要跨页码、跨异体字的搜索能力，原生搜索功能可能已足够，无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



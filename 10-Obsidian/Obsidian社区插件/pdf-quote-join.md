---
uid: 1793625620008001
title: "Obsidian 插件：PDF Quote Join"
tags: ["图片与PDF", "文字处理", "效率工具", "obsidian插件"]
description: "Join two saved PDF quote callouts in a note and keep both source links. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Quote Join

> [!Note] 插件名片
> - 插件名称：PDF Quote Join
> - 插件作者：theluckystrike
> - 插件说明：Join two saved PDF quote callouts in a note and keep both source links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pdf-quote-join)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-quote-join)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pdf-quote-join/master/README.md)



## 概述

PDF Quote Join 旨在解决 Obsidian 笔记中 PDF 引用片段分散、难以整合的问题。其核心功能是将两个相邻的 PDF 引用块合并为一个统一的引用块，同时保留两段正文内容及各自独立的来源链接。通过简单的选择与预览机制，用户可以在不破坏原有笔记结构的前提下，将分散的摘录整合成连贯的段落，并自动处理重复或不同的页码链接，确保引用来源清晰可溯。

典型使用场景包括学术研究和文献综述。例如，当你从同一本 PDF 书籍的第 10 页和第 12 页分别摘录了两段相关论述时，可以使用该插件将这两段文字合并。合并后的引用块会按笔记中的顺序排列正文，并在头部保留指向第 10 页和第 12 页的独立链接。这样，你既拥有了连贯的阅读体验，又能通过链接快速跳转回 PDF 原文进行核对，无需手动复制粘贴或重新编辑 Markdown 格式。

相比其他仅做文本拼接的工具，该插件的特色在于严格的格式校验与安全性。它会自动检测两个引用块是否来自同一个本地 PDF 文件，若来源不同或格式不兼容（如嵌套引用、颜色标记不一致），会直接拒绝操作并提示原因，防止错误合并。此外，它支持“预览”功能，允许用户在应用更改前检查合并后的 Markdown 结构，且应用过程支持标准撤销操作，确保误操作可轻松恢复。

使用前需注意，该插件仅支持特定格式的简单引用块，且 PDF 文件必须位于当前 Vault 中才能解析链接。它不支持跨不同 PDF 文件的混合引用，也不支持复杂的 PDF++ 格式变体或折叠标记。如果你需要合并来自不同文档的引用，或依赖高级 PDF 阅读器的特定高亮格式，此插件可能不适用。此外，部分高级功能如批量查找配对和自定义格式模板需要 Pro 订阅，但核心的合并与预览功能完全免费。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



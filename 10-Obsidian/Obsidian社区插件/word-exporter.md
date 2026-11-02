---
uid: 1793625624611000
title: "Obsidian 插件：Word Exporter"
tags: ["文件管理", "文字处理", "发布工具", "obsidian插件"]
description: "Export notes to Word (.docx) with the same formatting as PDF export. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Word Exporter

> [!Note] 插件名片
> - 插件名称：Word Exporter
> - 插件作者：Isaac Behrens
> - 插件说明：Export notes to Word (.docx) with the same formatting as PDF export. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '文字处理', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ibehren1/obsidian-word-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?word-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ibehren1/obsidian-word-exporter/master/README.md)



## 概述

Word Exporter 旨在解决 Obsidian 笔记导出 Word 文档时格式错乱、样式丢失的痛点。它能够将笔记转换为 .docx 文件，并尽可能还原 Obsidian 原生 PDF 导出的视觉效果。这意味着你无需在 Word 中重新调整字体、字号、颜色、间距、代码高亮或页面设置，即可直接获得一份排版精美且可编辑的文档，极大提升了从笔记到正式文档的转换效率。

典型使用场景包括撰写需要提交给非 Obsidian 用户的报告，或整理包含复杂格式的技术文档。例如，当你编写了一份包含 Mermaid 流程图、数学公式和多层级标题的项目计划时，通过该插件导出后，这些元素在 Word 中依然保持原有的布局与样式。又如，若你的笔记中使用了 Callout 提示框或自定义 CSS 片段，导出后的 Word 文档会保留这些视觉特征，确保阅读体验的一致性。

相比其他导出插件，Word Exporter 的核心优势在于其对 Obsidian 渲染引擎的深度复用。它直接读取笔记在 Obsidian 中的计算样式，确保字体、行高和间距与 PDF 导出完全一致。此外，它支持将 Markdown 数学公式转换为 Word 原生可编辑公式，并将 Mermaid 图表转为高分辨率图片。对于依赖 Basic Columns 插件实现分栏布局的用户，该插件也能正确保留并排显示效果，这是许多同类工具难以做到的细节。

使用前需注意，该插件仅支持桌面端 Obsidian，且导出效果高度依赖当前主题及 CSS 片段。虽然它读取系统字体以匹配行高，但不会修改系统文件。然而，由于 Word 自身的限制，部分细节存在差异：脚注会移至页面底部而非文末，导致分页可能不同；圆角边框和自定义复选框形状无法完美还原；跨页的 Callout 可能被整体移至下一页。如果你需要绝对像素级的 PDF 一致性，或主要使用移动端，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



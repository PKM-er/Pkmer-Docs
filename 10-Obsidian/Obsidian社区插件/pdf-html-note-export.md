---
uid: 1793625619994000
title: "Obsidian 插件：PDF and HTML Note Export"
tags: ["图片与PDF", "发布工具", "样式与美化", "移动端优化", "obsidian插件"]
description: "Export notes as styled PDF or self-contained HTML5 files. Works on desktop and Android. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF and HTML Note Export

> [!Note] 插件名片
> - 插件名称：PDF and HTML Note Export
> - 插件作者：thelvyn
> - 插件说明：Export notes as styled PDF or self-contained HTML5 files. Works on desktop and Android. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '发布工具', '样式与美化', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thelvyndragon/obsidian-pdf-html-note-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-html-note-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thelvyndragon/obsidian-pdf-html-note-export/master/README.md)



## 概述

PDF and HTML Note Export 将 Obsidian 笔记转换为带有专业内置主题的 PDF 或自包含 HTML5 文件。其核心优势在于采用矢量 PDF 导出技术，直接通过 JavaScript 生成真实文本、嵌入字体及矢量图形，而非简单的页面截图。这意味着导出的文件在任何缩放级别下都保持清晰锐利，且体积比传统快照小 6 到 13 倍，生成速度也更快。同时，它支持完全独立的 HTML5 导出，将 CSS 和图片嵌入单个文件中，确保在任何设备上都能完美打开。

典型使用场景包括将长篇技术文档或学习笔记整理为可分享的 PDF，或制作无需联网即可阅读的离线 HTML 手册。例如，当你需要向客户交付一份包含代码块和图表的报告时，该插件能确保代码行在分页时自动换行而不被截断，且所有文本（包括中文、日文、阿拉伯文等）均保留为可搜索、可复制的矢量文本或带隐形文本层的高清图像，方便接收方后续检索内容。

相比同类插件，该工具在跨平台兼容性和细节处理上表现突出。它无需调用系统打印对话框，因此在 Android 移动端也能稳定工作，文件直接保存至库内指定文件夹。此外，它智能处理分页，确保标题、表格行和图片不会跨页断裂，并自动将库内图片转换为 Base64 嵌入，实现真正的“自包含”。用户还可以复用 Obsidian 主题颜色或自定义 CSS，使导出样式与个人笔记风格保持一致。

使用前需注意，虽然矢量模式文件更小且清晰，但极复杂的排版可能需切换回“图像模式”作为后备。该插件主要面向需要高质量、可移植文档输出的用户，若你仅需要快速截图或依赖特定系统打印功能，可能无需安装。它不适合需要实时协作编辑导出文件的场景，因为导出的是静态文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



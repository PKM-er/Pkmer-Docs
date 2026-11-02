---
uid: 1793625620020001
title: "Obsidian 插件：PDF-export"
tags: ["图片与PDF", "样式与美化", "发布工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF-export

> [!Note] 插件名片
> - 插件名称：PDF-export
> - 插件作者：Jerome.wwwwww
> - 插件说明：
> - 插件分类：['图片与PDF', '样式与美化', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jerommewei/j-studio-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?j-studio-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jerommewei/j-studio-export/master/README.md)



## 概述

PDF-export 旨在解决 Obsidian 内置 PDF 导出功能中常见的分页断裂、样式错乱及缺乏正式文档感的问题。它基于 Paged.js 引擎，将笔记转化为具备封面、自动目录（含真实页码）、页眉页脚及标准页码的 A4 规格 PDF。插件提供“正式报告”、“预览快照”和“紧凑打印”三套排版预设，能够自动收集并清洗库内 CSS，确保导出效果与阅读视图高度一致，同时支持 Mermaid 图表、数学公式及 Excalidraw 等复杂内容的完整渲染。

典型使用场景包括项目结项报告或实验室校准记录的归档。例如，当你需要向领导提交一份包含数据图表和详细步骤的正式文档时，选择“正式报告”预设可自动生成带页码的目录和封面，提升专业度；若需将笔记打印为纸质讲义以节省墨水，则可使用“紧凑打印”预设，其更小的字号和更窄的页边距能显著优化纸张利用率。

相比同类插件，PDF-export 的核心优势在于对排版细节的精细控制。它通过 Paged.js 实现了真正的分页逻辑，确保表格表头跨页重复、避免孤行寡行，并解决了内置导出中常见的样式漂移问题。此外，插件支持通过 Frontmatter 自定义封面元数据，并允许用户注入自定义 CSS 以覆盖默认样式，提供了极高的个性化排版自由度，适合对文档外观有严格要求的用户。

使用前需注意，该插件仅支持桌面版 Obsidian，且导出过程依赖本地 Chromium 环境。它不适合需要频繁在线协作编辑 PDF 的场景，也不支持移动端使用。如果你的需求仅是快速生成无格式纯文本或简单的 HTML 分享，其功能可能显得过于复杂。此外，虽然插件能处理大多数 Markdown 元素，但对于极度复杂的自定义 CSS 布局，仍可能需要手动调整预设文件以确保最佳视觉效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



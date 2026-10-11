---
uid: 1791709369812000
title: 'Obsidian 插件：ScrollStream'
tags: ['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
description: 'Notes stream in tandem with relevant chapters as you read your document. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ScrollStream

> [!Note] 插件名片
> - 插件名称：ScrollStream
> - 插件作者：Theo Tatsuyama
> - 插件说明：Notes stream in tandem with relevant chapters as you read your document. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/midorinohoshi/scrollstream-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scrollstream)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/midorinohoshi/scrollstream-obsidian/master/README.md)



## 概述

**ScrollStream** 是一款 Obsidian 插件，旨在实现文档阅读与笔记内容的同步流式展示。

1. **主要功能**：当滚动主文档时，侧边栏会自动同步显示与当前章节相关的笔记卡片、媒体文件及推导过程。支持双向视图同步，确保辅助卡片始终对齐当前标题。
2. **适用场景**：适合需要边读边写、整理长篇文档、学术笔记或包含大量公式、图片推导的场景，尤其适用于 Live Preview 模式下的沉浸式阅读。
3. **核心特色**：
   - **灵活布局**：支持通过 YAML Frontmatter 自定义轨道方向、分屏比例、字体及卡片间距。
   - **媒体增强**：内置多列图片画廊及点击放大的 Lightbox 视图。
   - **原生兼容**：完美支持标准 Markdown、Callouts 及 LaTeX 数学公式。
   - **自定义节点**：使用 `scrollstream` 代码块定义关联章节、时间戳及图片内容。
4. **使用建议**：建议在文档中通过 `scrollstream` 代码块明确标注关联章节（如 `section: Vectors`），利用 `columns` 和 `images` 属性优化视觉布局，并通过 Frontmatter 微调界面参数以获得最佳阅读体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



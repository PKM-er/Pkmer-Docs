---
uid: 1793625605930000
title: "Obsidian 插件：Anki Card Styling"
tags: ["ANKI", "样式与美化", "学习与教育", "obsidian插件"]
description: "Renders embedded Anki clozes, card type buttons (Cloze, Image Cloze), Extra Question Line tags (EQL), and synchronized card status in Live Preview and Reading View. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anki Card Styling

> [!Note] 插件名片
> - 插件名称：Anki Card Styling
> - 插件作者：leonfroschauer
> - 插件说明：Renders embedded Anki clozes, card type buttons (Cloze, Image Cloze), Extra Question Line tags (EQL), and synchronized card status in Live Preview and Reading View. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '样式与美化', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leon-3/Obsidian-Anki-Card-Highlighting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-card-styling)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leon-3/Obsidian-Anki-Card-Highlighting/master/README.md)



## 概述

Anki Card Styling 专为在 Obsidian 中管理 Anki 闪卡的用户设计，核心功能是在实时预览和阅读视图中为闪卡提供清晰的视觉格式化。它直接渲染填空删除（Cloze）、卡片类型按钮、额外问题行（EQL）标签以及同步状态，且完全不修改底层 Markdown 源码。这意味着你可以像阅读普通笔记一样直观地查看卡片内容，同时保留原始文本的可编辑性，无需在代码模式和预览模式间频繁切换。

典型使用场景包括日常复习与卡片创建。例如，当你编写关于细胞呼吸的笔记时，插件会将 `{{c1::mitochondria}}` 渲染为带有下划线的彩色徽章，点击或光标移入即可展开编辑，极大提升了填空内容的可读性。另一个场景是区分卡片状态，插件会在编辑器左侧显示绿色竖条表示新增卡片，红色竖条表示已删除卡片，让你一眼识别哪些卡片需要同步到 Anki，哪些已被废弃。

相比其他仅做语法高亮的插件，Anki Card Styling 的特色在于其深度集成的交互体验与状态可视化。它不仅将 `Cloze` 和 `Image Cloze` 标题格式化为圆角按钮徽章，还将 `EQL:` 前缀渲染为独特的药丸状标签，使复杂卡片结构一目了然。此外，插件支持“非活动卡片变暗”功能，自动淡化当前未编辑的卡片，帮助你在长文档中聚焦当前工作区，并在状态栏实时显示卡片计数，提供类似 IDE 的反馈体验。

需要注意的是，该插件主要服务于 Anki-VaultSync 和 Markdown2Anki 生态，若你使用其他 Anki 同步工具或自定义卡片格式，可能无法获得最佳兼容效果。它仅负责视觉呈现，不具备同步 Anki 数据库的功能，因此不适合仅希望实现双向同步而不关心笔记内视觉体验的用户。如果你不需要在 Obsidian 内直接查看和编辑 Anki 卡片，或者对卡片状态没有可视化需求，安装此插件可能意义不大。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



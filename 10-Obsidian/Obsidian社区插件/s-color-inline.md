---
uid: 1793625620929000
title: "Obsidian 插件：S-Color-Inline"
tags: ["样式与美化", "界面优化", "编辑工具", "obsidian插件"]
description: "Show color swatches next to CSS color values in inline code. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：S-Color-Inline

> [!Note] 插件名片
> - 插件名称：S-Color-Inline
> - 插件作者：Abdulkader Safi
> - 插件说明：Show color swatches next to CSS color values in inline code. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abdulkader-safi/s-color-inline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s-color-inline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abdulkader-safi/s-color-inline/master/README.md)



## 概述

S-Color-Inline 旨在解决在笔记中查看 CSS 颜色值时缺乏直观视觉反馈的问题。它的核心功能是在行内代码中自动识别 Hex、RGB、HSL 等格式的颜色值，并在旁边显示一个小型色块或彩色徽章。这意味着你无需切换到浏览器或外部工具，就能直接在 Obsidian 的实时预览或阅读视图中确认颜色的实际效果，让颜色调试和记录变得更加高效。

典型的使用场景包括前端开发时的快速配色验证，或者在设计文档中记录 UI 规范。例如，当你写下 `` `#0080ff` `` 时，旁边会立即出现对应的蓝色小方块；或者在记录品牌色时，使用 `` `rgba(0,255,255,0.5)` `` 能直观看到半透明青色。这种即时反馈机制特别适合需要频繁对比颜色差异或向非技术人员展示色彩方案的情况。

相比同类插件，S-Color-Inline 具有明确的边界控制能力。它只处理反引号包裹的行内代码，刻意跳过围栏代码块，确保粘贴大段 CSS 文件时界面保持整洁。此外，它提供两种显示模式：默认的“色块模式”仅在代码旁显示小方块，而“徽章模式”则会将整个代码背景染成对应颜色，并自动调整文字颜色以保证可读性。这种灵活性允许用户根据阅读习惯选择最舒适的视觉呈现方式。

需要注意的是，该插件仅当颜色值独占整个行内代码跨度时才生效，例如 `` `#fff` `` 有效，但 `` `color: #fff` `` 无效。同时，它不处理普通文本中的颜色代码，以避免干扰 Obsidian 原生的标签功能。如果你需要在大段代码块中批量高亮颜色，或者希望插件能解析复杂的 CSS 属性声明，那么它可能无法满足你的需求，因为它专注于轻量级的行内即时预览。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



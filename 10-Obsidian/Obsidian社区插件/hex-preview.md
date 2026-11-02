---
uid: 1793625613659000
title: "Obsidian 插件：Hex Preview"
tags: ["样式与美化", "表格", "界面优化", "obsidian插件"]
description: "Preview six- and eight-digit hex colors in notes and native Bases table columns. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hex Preview

> [!Note] 插件名片
> - 插件名称：Hex Preview
> - 插件作者：Paul Renvoise
> - 插件说明：Preview six- and eight-digit hex colors in notes and native Bases table columns. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '表格', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/paulrenvoise/obsidian-hex-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hex-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/paulrenvoise/obsidian-hex-preview/master/README.md)



## 概述

Hex Preview 专为解决笔记中十六进制颜色代码难以直观识别的问题而设计。它能在 Live Preview 和阅读视图中，自动在 `#RRGGBB` 或 `#RRGGBBAA` 格式的颜色代码旁显示对应的色块。该插件仅支持六位和八位十六进制格式，不处理简写、RGB 或 HSL 语法，确保预览精准且无歧义。

典型场景包括在 UI 设计文档中快速核对配色方案，或在 Bases 表格中管理颜色属性。例如，当你在笔记中写下 `#23264F` 时，旁边会立即出现色块；若颜色带有透明度（如 `#23264F80`），色块背景会显示棋盘格以直观呈现透明效果。点击色块还能打开调色器，通过色相环和饱和度/亮度方块直接调整颜色，并支持键盘操作。

相比同类插件，Hex Preview 深度集成了原生 Bases 功能。它不仅能预览正文中的颜色，还能在 Bases 表格的文本属性、列表属性及公式计算结果中显示色块。其特色在于“非侵入性”：预览过程绝不修改笔记内容，只有当你明确点击“应用”时，才会更新选中的颜色值。此外，它保留了 Obsidian 原有的标签行为，避免将类似 `#tag` 的文本误判为颜色。

使用前需注意，该插件仅在 Live Preview 和阅读视图生效，源码模式、代码块及链接中不会显示色块。Bases 中的预览要求整个属性值必须是有效的十六进制颜色，混合文本无法预览。此外，Bases 编辑依赖 Obsidian 的 frontmatter API，可能会规范化 YAML 格式。如果你需要预览 RGB、HSL 格式，或希望在源码模式下直接编辑颜色，此插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



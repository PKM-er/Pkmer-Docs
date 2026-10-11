---
uid: 1791709365818000
title: 'Obsidian 插件：Canvas Live Snapshot'
tags: ['图表与可视化', '图片与PDF', '效率工具', 'obsidian插件']
description: 'Capture the currently rendered Canvas, including SVG edge paths and supported webview snapshots, for visual archiving through HTML and browser PDF printing. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Live Snapshot

> [!Note] 插件名片
> - 插件名称：Canvas Live Snapshot
> - 插件作者：yinzhu
> - 插件说明：Capture the currently rendered Canvas, including SVG edge paths and supported webview snapshots, for visual archiving through HTML and browser PDF printing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/a14174110-cloud/canvas-live-snapshot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-live-snapshot)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/a14174110-cloud/canvas-live-snapshot/master/README.md)



## 概述

**1. 主要功能**
Canvas Live Snapshot 插件可将当前渲染的 Obsidian Canvas 画布捕获为 HTML 快照。它复制已渲染的节点、计算样式、SVG 连接路径及支持的 Webview 截图，最终通过浏览器打印功能生成 PDF 文件，实现视觉归档。

**2. 适用场景**
适用于需要保存画布当前视觉状态的场景，如项目汇报、设计展示或长期归档。特别适合包含复杂连线（如 Straight, Squared, A*）和嵌入网页内容的画布，无需重新实现渲染逻辑即可保留外观。

**3. 核心特色**
- **所见即所得（WYSIWYG）**：直接复用当前视图的 DOM、样式和 SVG 路径，确保高保真度。
- **智能捕获**：自动复制 Advanced Canvas 生成的 SVG 路径，并将 Webview 可见区域（含当前滚动位置）转为 PNG 图片。
- **结构化输出**：文本保留为 HTML，连线保留为 SVG，便于后续处理。

**4. 使用建议**
- 快照自动保存至下载文件夹并打开，请确保浏览器打印设置正确以生成 PDF。
- 注意 Webview 仅捕获可见帧，非完整页面或交互内容；节点按顺序捕获，非原子瞬间。
- 字体、伪元素等特殊渲染层可能存在差异，建议在实际使用前验证关键元素的显示效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



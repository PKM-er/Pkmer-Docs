---
uid: 1791709370011000
title: 'Obsidian 插件：Single HTML Export'
tags: ['文件管理', '发布工具', '效率工具', 'obsidian插件']
description: 'Export a note as one self-contained HTML file that works offline. Preview it, then share or save. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Single HTML Export

> [!Note] 插件名片
> - 插件名称：Single HTML Export
> - 插件作者：dukhaelee
> - 插件说明：Export a note as one self-contained HTML file that works offline. Preview it, then share or save. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ddeok/Obsidian-Single-HTML-Export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?single-html-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ddeok/Obsidian-Single-HTML-Export/master/README.md)



## 概述

**1. 主要功能**
将 Obsidian 笔记导出为单一、自包含的 HTML 文件。该文件无需互联网或外部资源文件夹，即可在任何设备离线打开和分享。

**2. 适用场景**
适用于需要离线分发文档、向非 Obsidian 用户分享笔记，或在无网络环境下查看内容的场景。支持桌面端及移动端（含 iOS 原生分享）。

**3. 核心特色**
*   **完全自包含**：图片转为 Data URI，Mermaid 图表预渲染为静态 SVG，代码高亮样式内置，确保永久离线可用。
*   **智能 CSS 打包**：仅自动包含实际应用于当前笔记的 CSS 片段，保持文件精简；支持通过 Frontmatter 控制。
*   **预览与安全**：导出前提供弹窗预览，确认后才写入磁盘，避免误操作。
*   **体验优化**：内置明/暗模式切换、代码一键复制、打印友好（默认浅色），并支持 Obsidian 特有语法（如 Callouts、任务列表等）。

**4. 使用建议**
通过命令面板、文件资源管理器或编辑器右键菜单执行“Export to single HTML”。建议先检查预览弹窗中的渲染效果，确认无误后再选择保存或分享。若需排除特定 CSS 片段，可在笔记 Frontmatter 中设置 `html-export-css: false`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709367546000
title: 'Obsidian 插件：HTML Direct Reader'
tags: ['文件管理', '界面优化', '移动端优化', '效率工具', 'obsidian插件']
description: 'Bypass cross-origin limits to render in-vault .html in Obsidian by inlining CSS/images/scripts. In-vault .html/.md link interception with back/forward, in-page search, zoom, outline, fullscreen, scroll restore. Desktop & mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Direct Reader

> [!Note] 插件名片
> - 插件名称：HTML Direct Reader
> - 插件作者：conquert
> - 插件说明：Bypass cross-origin limits to render in-vault .html in Obsidian by inlining CSS/images/scripts. In-vault .html/.md link interception with back/forward, in-page search, zoom, outline, fullscreen, scroll restore. Desktop & mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xiaoyihr/html-direct-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-direct-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xiaoyihr/html-direct-reader/master/README.md)



## 概述

**HTML Direct Reader 插件总结**

**主要功能**
该插件允许在 Obsidian 内部直接渲染库内的 `.html` 文件。它通过 Node 端读取并内联 CSS、图片、字体及脚本为 Data URI，彻底解决浏览器跨域限制导致的资源加载失败问题，无需本地服务器或修改路径即可完美显示文档。

**适用场景**
适用于需要在 Obsidian 中直接查看、编辑或引用本地 HTML 文档的场景，特别是包含复杂样式、本地图片或交互脚本（如 Canvas、表单）的文件，无需切换至外部浏览器。

**核心特色**
1. **零配置资源加载**：自动内联相对路径资源，确保文档原样显示。
2. **完整浏览体验**：支持前进/后退导航、页内搜索（Ctrl/⌘+F）、缩放、全屏及滚动位置恢复。
3. **安全与交互控制**：提供脚本开关，可灵活选择运行或阻断 JavaScript，兼顾安全性与交互性。
4. **多端支持**：兼容桌面端与移动端（Android 已验证）。

**使用建议**
安装后，直接双击文件管理器中的 `.html` 文件即可预览。若需查看动态交互效果，请在工具栏开启“脚本开关”并重新加载文档。建议利用大纲面板快速定位内容，并通过源码/渲染切换功能方便地查看底层代码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709368190000
title: 'Obsidian 插件：Local HTML View'
tags: ['文件管理', '界面优化', '效率工具', 'obsidian插件']
description: 'Open local HTML files in a full browser view, keeping scripts, styles and interactivity intact instead of stripping them. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local HTML View

> [!Note] 插件名片
> - 插件名称：Local HTML View
> - 插件作者：Axe
> - 插件说明：Open local HTML files in a full browser view, keeping scripts, styles and interactivity intact instead of stripping them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/atlas555/obsidian-local-html-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-html-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/atlas555/obsidian-local-html-view/master/README.md)



## 概述

**1. 主要功能**
Local HTML View 允许在 Obsidian 内部以完整浏览器视图打开本地 `.html` 和 `.htm` 文件。它保留页面的脚本、样式和交互性，避免传统阅读器因安全清洗而移除 `<script>` 标签导致页面空白或失效。

**2. 适用场景**
适用于需要查看由 JavaScript 动态生成内容的场景，例如数据仪表盘、D3/Chart.js 图表、Mermaid 导出图、Reveal.js 演示文稿以及任何依赖点击事件或 Canvas 绘制的交互式网页。

**3. 核心特色**
*   **完整渲染**：基于 Electron `<webview>` 或 `<iframe>` 加载，确保脚本执行、样式应用及交互响应正常。
*   **深度链接支持**：页面内的 `obsidian://`、`http(s)://` 等链接可正确跳转至系统或 Vault 内笔记。
*   **灵活控制**：提供刷新、缩放及在默认浏览器中打开的工具栏；支持切换 Webview/Iframe 渲染模式以解决兼容性问题。
*   **文件接管**：可强制接管其他插件注册的 HTML 文件显示权。

**4. 使用建议**
*   直接点击文件资源管理器中的 HTML 文件即可在标签页中查看。
*   若页面在 Webview 中显示异常，请在设置中启用“Always use iframe”强制使用 iframe 渲染。
*   若与其他插件冲突，使用“Take over HTML files”命令或设置项重新获取文件显示权。
*   建议将仓库中的 `demo/interactive-report.html` 复制到 Vault 中，以快速验证插件是否正常工作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



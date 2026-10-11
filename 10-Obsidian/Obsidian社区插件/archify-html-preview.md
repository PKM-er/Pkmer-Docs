---
uid: 1791709365355000
title: 'Obsidian 插件：Archify HTML Preview'
tags: ['图表与可视化', '界面优化', '效率工具', 'obsidian插件']
description: 'Click an Archify diagram thumbnail to preview its self-contained interactive HTML in a sandboxed frame inside the app. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Archify HTML Preview

> [!Note] 插件名片
> - 插件名称：Archify HTML Preview
> - 插件作者：charonwwang
> - 插件说明：Click an Archify diagram thumbnail to preview its self-contained interactive HTML in a sandboxed frame inside the app. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/charonwwang/obsidian-archify-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?archify-html-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/charonwwang/obsidian-archify-preview/master/README.md)



## 概述

**1. 主要功能**
该插件解决了 Obsidian 无法直接预览 Archify 生成的交互式 HTML 图表的问题。它自动识别笔记中的 Archify 图表链接，修复相对路径导致的缩略图显示错误，并在应用内通过沙盒框架打开自包含的交互式 HTML 文件。

**2. 适用场景**
适用于使用 Archify 工具生成系统架构图、流程图等可视化图表，并希望在 Obsidian 笔记中直接查看、交互（如缩放、搜索、主题切换）而不需跳转外部浏览器的用户。

**3. 核心特色**
*   **无缝集成**：支持“图片包裹链接”语法，自动检测并显示“Interactive”徽章。
*   **路径修复**：智能重解析相对路径，确保缩略图正常渲染。
*   **安全沙盒**：默认启用 `sandbox="allow-scripts"`，防止图表代码访问 Vault 文件。
*   **多端兼容**：使用 Blob URL 技术，确保桌面端和移动端行为一致。
*   **灵活预览**：支持新标签页、模态窗口或内联展开三种预览方式，并可直接跳转至源定义文件。

**4. 使用建议**
安装后无需复杂配置，直接点击笔记中的 Archify 图表缩略图即可预览。建议检查预览模式偏好（新标签页/模态/内联），以符合个人阅读习惯。注意该插件目前未经 Obsidian 官方人工审核，请确保信任 Archify 生成的 HTML 内容安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



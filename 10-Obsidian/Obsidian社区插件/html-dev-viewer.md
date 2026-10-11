---
uid: 1791709367544000
title: 'Obsidian 插件：HTML Dev Viewer'
tags: ['编辑工具', '编程与脚本', '第三方工具集成', 'obsidian插件']
description: 'Open and edit HTML files inside Obsidian with a live preview tab, in-app DevTools, and a CORS-free fetch bridge -- local development pages can call any API with no restrictions. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Dev Viewer

> [!Note] 插件名片
> - 插件名称：HTML Dev Viewer
> - 插件作者：d0uub
> - 插件说明：Open and edit HTML files inside Obsidian with a live preview tab, in-app DevTools, and a CORS-free fetch bridge -- local development pages can call any API with no restrictions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '编程与脚本', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/d0uub/obsidian-html-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-dev-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/d0uub/obsidian-html-viewer/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 中直接打开和编辑 `.html`/`.htm` 文件。它提供实时预览标签页、内置的 Eruda 调试工具（控制台、网络等），以及源码视图与渲染视图的快速切换功能。

**2. 适用场景**
适用于需要在笔记库中快速查看或调试本地 HTML 页面的开发者。特别适合那些需要调用外部 API 但受限于浏览器 CORS 策略的前端开发场景，或希望将 HTML 片段作为笔记一部分进行管理的用户。

**3. 核心特色**
*   **无 CORS 限制**：通过 Obsidian 请求引擎桥接所有 HTTP(S) 调用，本地页面可自由访问任何互联网 API，无需代理或配置。
*   **资源自动内联**：自动内联相对路径的 CSS、JS 和图片，确保页面独立渲染。
*   **完整调试支持**：集成 Eruda，可在预览内直接检查元素、查看网络请求和控制台日志。

**4. 使用建议**
*   **安装方式**：目前未上架社区插件列表，需通过 BRAT 插件添加仓库，或手动下载 `main.js` 等文件至插件目录并启用。
*   **设置检查**：若文件无法打开，请在“设置 → 文件与链接”中启用“检测所有文件扩展名”。
*   **离线友好**：远程资源按需加载，完全支持离线文件查看。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



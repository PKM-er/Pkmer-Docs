---
uid: 1793625614833000
title: "Obsidian 插件：Link Target Switch"
tags: ["导航与状态栏", "快捷键", "模板与链接处理", "obsidian插件"]
description: "Choose per click whether web links open in the Web viewer or your browser. Hold a key to switch, or flip the default from the status bar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Target Switch

> [!Note] 插件名片
> - 插件名称：Link Target Switch
> - 插件作者：Remko H. Pape
> - 插件说明：Choose per click whether web links open in the Web viewer or your browser. Hold a key to switch, or flip the default from the status bar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '快捷键', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/remkopape/link-target-switch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-target-switch)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/remkopape/link-target-switch/master/README.md)



## 概述

Link Target Switch 解决了 Obsidian 内置 Web 查看器与系统浏览器之间切换繁琐的痛点。它允许你在点击外部链接时，通过按住修饰键（如 Alt 或 Shift）直接决定链接是在 Obsidian 内部打开，还是在系统默认浏览器中打开。此外，你可以通过状态栏图标一键切换默认打开方式，无需再依赖右键菜单，让链接处理更加高效直观。

典型场景包括：在笔记中阅读技术文档时，大部分链接直接在 Obsidian 内快速预览，保持专注；但遇到需要登录、使用浏览器扩展或下载文件的链接时，只需按住修饰键点击，即可瞬间在 Chrome 或 Edge 等外部浏览器中打开。这种机制在“快速阅读”与“深度操作”之间提供了无缝切换的体验，避免了频繁切换窗口的干扰。

相比仅支持右键菜单的默认行为，该插件的核心特色在于“单次点击”的灵活性。它支持阅读视图、实时预览、源码模式、画布卡片及悬停预览等多种场景，兼容 Markdown 链接、HTML 链接及裸 URL。插件不发起任何网络请求，不收集数据，仅负责决定链接的打开目标，隐私安全性高。同时，它提供了将当前 Web 查看器页面直接移交至浏览器的命令，方便处理复杂网页交互。

使用前需确保已启用 Obsidian 核心插件中的“Web viewer”，且仅支持桌面端（Obsidian 1.8.0 及以上）。如果你习惯完全在浏览器中工作，或不需要在 Obsidian 内预览网页，此插件可能并非必需。此外，它不改变 Ctrl/Cmd + 点击的默认行为，也不支持移动端，主要服务于需要在笔记应用与外部浏览器间频繁切换的桌面用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



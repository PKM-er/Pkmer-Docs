---
uid: 1793625613880000
title: "Obsidian 插件：HTML Works"
tags: ["编辑工具", "编程与脚本", "效率工具", "obsidian插件"]
description: "View HTML files and edit their source in the native editor, with Vim motions and editor extensions. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Works

> [!Note] 插件名片
> - 插件名称：HTML Works
> - 插件作者：Miles
> - 插件说明：View HTML files and edit their source in the native editor, with Vim motions and editor extensions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zarnuq/HTMLWorks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-works)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zarnuq/HTMLWorks/master/README.md)



## 概述

HTML Works 让 Obsidian 能够直接打开并编辑 `.html` 和 `.htm` 文件，解决了在笔记库中处理网页源码的痛点。它提供原生的预览与源码编辑双模式，允许你在 Obsidian 的界面中查看渲染后的网页效果，或直接修改 HTML 代码。该插件复用了 Obsidian 原生的编辑器能力，支持自动保存、撤销历史、全局搜索以及 Vim 键位操作，使得编辑体验与处理 Markdown 笔记几乎无异，无需切换至外部浏览器或代码编辑器。

典型场景包括管理课程导出文件或技术文档。例如，当你收到一个包含复杂表格和样式的 HTML 课件时，可以直接在 Obsidian 中预览其排版，若需修改文字，点击“Source”即可在熟悉的编辑器中更改，保存后切换回“Preview”即时查看效果。此外，你可以利用右键菜单快速创建新的 HTML 文件，配合其紧凑的工具栏和明暗主题切换功能，在笔记库中构建独立的网页内容库，而无需担心样式污染 Obsidian 的主界面。

相比其他仅支持 Markdown 的插件，HTML Works 的核心特色在于其严格的沙箱隔离机制与对本地资源的智能解析。预览环境完全隔离于 Obsidian 主应用，确保安全性；同时，它能自动解析相对路径的图片、样式表及 CSS 资源，并将本地 Vault 文件嵌入预览中，即使原始路径指向远程资源，也能通过配置映射到本地副本。这种设计既保证了预览的完整性，又避免了网络请求，且预览过程绝不会反向修改你的 HTML 源码，完美保留原始文本格式及换行符。

使用前需注意，该插件默认禁用脚本执行，需手动为特定文件开启，且开启后仍无网络访问权限，因此依赖动态脚本的内容可能无法完全显示。此外，部分明确限制仅处理 `.md` 文件的编辑器插件可能无法兼容 HTML Works。如果你需要完全离线、无脚本依赖的静态网页编辑与预览，且希望保持 Obsidian 原生编辑体验，此插件是理想选择；但若你的工作流重度依赖实时网络资源加载或复杂的前端交互逻辑，则可能不适合。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



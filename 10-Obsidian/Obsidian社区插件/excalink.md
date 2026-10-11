---
uid: 1791709366827000
title: 'Obsidian 插件：Excalink'
tags: ['图表与可视化', '模板与链接处理', '第三方工具集成', 'obsidian插件']
description: 'Suggests and links the named frames and groups inside your Excalidraw drawings when typing [[filename# in the editor - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Excalink

> [!Note] 插件名片
> - 插件名称：Excalink
> - 插件作者：Aditya Kumar
> - 插件说明：Suggests and links the named frames and groups inside your Excalidraw drawings when typing [[filename# in the editor - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '模板与链接处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aarambhaanta/Excalink)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?excalink)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aarambhaanta/Excalink/master/README.md)



## 概述

**1. 主要功能**
Excalink 是一款增强 Obsidian Excalidraw 插件体验的工具。当你在笔记中输入 `[[文件名#` 时，它会自动识别该绘图文件中的命名**框架（Frames）**和**分组（Groups）**，并提供模糊搜索建议，快速生成标准的块引用链接（如 `#^frame=名称` 或 `#^group=ID`）。

**2. 适用场景**
适用于大量使用 Excalidraw 进行可视化笔记、白板协作或复杂图表管理的用户，特别是需要频繁在文本笔记中引用特定绘图区域或局部内容的场景。

**3. 核心特色**
*   **智能自动补全**：基于模糊搜索的即时建议，支持键盘快捷操作。
*   **兼容性强**：生成的链接完全符合 Excalidraw 插件的块引用语法，确保嵌入和导航正常。
*   **灵活配置**：可独立控制是否显示框架或分组、调整建议数量、显示最近编辑项及文件名上下文。
*   **自动索引**：文件变更时自动更新索引，也支持手动重建。

**4. 使用建议**
*   在 Excalidraw 中务必为关键区域**命名框架**或在分组内添加文本标签，以便在插件中清晰识别。
*   若未命名分组，插件会尝试使用组内文本作为标签，否则显示为通用名称，建议养成命名习惯以提升检索效率。
*   安装后若未识别到新内容，可通过命令面板执行“Rescan vault”刷新索引。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



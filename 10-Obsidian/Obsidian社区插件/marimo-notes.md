---
uid: 1791709368433000
title: 'Obsidian 插件：marimo notes'
tags: ['编程与脚本', '第三方工具集成', '数据处理', 'obsidian插件']
description: 'Run marimo notebooks as live, reactive Python cells inside your notes. Python runs in-browser via Pyodide. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：marimo notes

> [!Note] 插件名片
> - 插件名称：marimo notes
> - 插件作者：Kiran Gadhave
> - 插件说明：Run marimo notebooks as live, reactive Python cells inside your notes. Python runs in-browser via Pyodide. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kirangadhave/obsidian-marimo-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?marimo-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kirangadhave/obsidian-marimo-notes/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 笔记中直接运行 marimo 笔记本，将 Python 代码渲染为实时、响应式的 WASM 代码块。基于 Pyodide 技术，Python 在浏览器内执行，无需本地安装 Python 或启动服务器。

**2. 适用场景**
适用于需要在笔记中嵌入交互式数据分析、可视化演示或动态计算的场景。特别适合数据科学家、研究人员及教育者，用于创建包含可交互滑块、图表的文档，支持桌面端与移动端同步体验。

**3. 核心特色**
*   **零依赖运行**：无需本地 Python 环境，纯浏览器端执行。
*   **响应式交互**：同一笔记内的 marimo 代码块共享状态，修改上游变量（如滑块）会自动重新运行下游依赖单元格。
*   **格式兼容**：支持标准的 marimo 围栏代码块及 `marimo export md` 生成的 Markdown 格式，可在阅读视图和实时预览中无缝切换。

**4. 使用建议**
*   使用 ` ```marimo ` 围栏包裹代码以激活交互功能。
*   在实时预览模式下，点击代码块外的 `</>` 按钮或移入光标即可编辑源码。
*   注意该插件未经 Obsidian 官方人工审核，建议在重要数据操作前确认安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



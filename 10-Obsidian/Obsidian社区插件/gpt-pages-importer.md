---
uid: 1793625613451000
title: "Obsidian 插件：GPT Pages Importer"
tags: ["自动化与AI", "文件管理", "备份与恢复", "图表与可视化", "obsidian插件"]
description: "Import ChatGPT Pages Markdown with portable HTML visualizations, verified figure pairing, automatic folder cleanup and backup protection. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GPT Pages Importer

> [!Note] 插件名片
> - 插件名称：GPT Pages Importer
> - 插件作者：DLeung
> - 插件说明：Import ChatGPT Pages Markdown with portable HTML visualizations, verified figure pairing, automatic folder cleanup and backup protection. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '备份与恢复', '图表与可视化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dleungdl/obsidian-gpt-pages-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpt-pages-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dleungdl/obsidian-gpt-pages-importer/master/README.md)



## 概述

GPT Pages Importer 旨在解决 ChatGPT Pages 导出内容在 Obsidian 中可视化丢失的问题。它能够将 Pages 导出的 Markdown 与完整的 HTML 可视化源文件进行配对，将原本位于页脚的图表代码自动移回正文对应位置，并清理冗余标记。核心功能在于保留交互式图表的完整 HTML、CSS 和 JavaScript 源码，确保数据可视化在本地笔记中依然可交互、可移植，而非仅作为静态图片存在。

典型场景包括处理包含复杂数据图表的研究报告或数学推导笔记。例如，当你从 Pages 导出包含 Plotly.js 动态图表或 MathBox 几何动画的文档时，插件能自动识别并嵌入这些交互式元素。另一个场景是批量整理文件夹，插件支持监控指定目录，自动处理新增的 Markdown 导出文件，完成图表配对与清理，无需手动逐个操作。

相比其他导入工具，该插件的特色在于“显式信任”机制与严格的备份保护。它默认以源码形式导入 HTML，若需执行 JavaScript 交互，必须用户明确确认，避免潜在安全风险。此外，它支持 v1 至 v3 多种配对格式，并在修改前自动备份，若检测到本地编辑冲突会立即停止，防止数据覆盖。对于数学公式，它还能将特定的 LaTeX 块转换为 Obsidian 原生显示数学格式。

使用前需注意，交互式图表依赖网络加载 CDN 资源，且需配合 Polyglot Renderer 插件使用。若仅使用静态图片或原生数学公式，则无需额外依赖。该插件不适合需要完全离线运行交互式图表的场景，也不适合希望将 Pages 内部链接自动转换为本地 Obsidian 笔记链接的需求，因为跨页面链接仍保留为在线 HTTPS 地址。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



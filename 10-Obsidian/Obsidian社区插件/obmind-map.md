---
uid: 1793625624355000
title: "Obsidian 插件：Weaver Mindmap"
tags: ["思维导图", "图表与可视化", "编辑工具", "obsidian插件"]
description: "Turn the current note's headings and indentation into an interactive, XMind-style mindmap that edits the note back. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Weaver Mindmap

> [!Note] 插件名片
> - 插件名称：Weaver Mindmap
> - 插件作者：salt-baked-universe
> - 插件说明：Turn the current note's headings and indentation into an interactive, XMind-style mindmap that edits the note back. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '图表与可视化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/salt-baked-universe/obmind)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obmind-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/salt-baked-universe/obmind/master/README.md)



## 概述

Weaver Mindmap 将当前笔记的标题和缩进结构转化为侧边栏中可交互的 XMind 风格思维导图。其核心机制是双向同步：你在地图上进行的任何操作，如重命名节点、添加子项、调整层级或拖拽分支，都会直接写回同一个 Markdown 文件。这意味着地图只是笔记的可视化视图，而非独立文档，彻底消除了传统插件中地图与原文档内容不同步的困扰，确保数据始终单一且真实。

典型场景适用于需要快速梳理复杂大纲或重构文章结构的时刻。例如，在撰写长篇报告时，你可以直接在地图上拖拽章节标题以调整逻辑顺序，无需在编辑器中反复剪切粘贴；或者在头脑风暴阶段，通过双击节点快速重命名想法，并即时看到其在笔记中的对应变化。这种即时反馈让思维整理过程更加直观流畅，适合从线性文本到非线性结构的快速切换。

相比同类插件，Weaver Mindmap 的最大特色在于其严谨的数据安全机制。每次编辑前，插件都会校验源文件行是否被其他插件或外部工具修改，若检测到冲突则中止写入并提示，避免文件损坏。此外，代码块、公式、表格等复杂内容会被渲染为只读卡片而非纯文本，保留了语法高亮和 KaTeX 支持。插件完全离线运行，无网络请求，且支持多主题切换和 SVG 导出，确保视觉体验与数据隐私并重。

使用前需注意，该插件主要依赖标题和缩进构建层级，若笔记缺乏清晰的结构化标记，地图效果可能不佳。它不适合需要频繁编辑代码块内部内容或处理非标准 Markdown 格式的场景，因为复杂内容仅作为只读节点展示。此外，虽然支持移动端加载，但手势操作专为鼠标和触控板设计，移动端体验可能受限。若你的工作流高度依赖外部同步工具频繁修改文件，需留意插件的冲突检测提示，以防编辑被意外中止。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



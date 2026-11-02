---
uid: 1793625608696001
title: "Obsidian 插件：BrainOS Graph"
tags: ["图谱", "思维导图", "图表与可视化", "效率工具", "obsidian插件"]
description: "Record thought paths in Markdown lists and explore an editable graph with reusable nodes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：BrainOS Graph

> [!Note] 插件名片
> - 插件名称：BrainOS Graph
> - 插件作者：othnielsu
> - 插件说明：Record thought paths in Markdown lists and explore an editable graph with reusable nodes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '思维导图', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/radical7vii/brainos-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?brainos-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/radical7vii/brainos-obsidian/master/README.md)



## 概述

BrainOS Graph 允许你用纯 Markdown 列表记录思维路径，并将其可视化为可编辑的图形。每个想法对应一个普通的 Markdown 文件，确保笔记在没有插件的情况下依然可读。核心功能是将线性的文字记录转化为直观的节点图，支持在图形界面中直接编辑标题、扩展路径以及复用现有节点，让思维结构一目了然。

典型场景包括梳理复杂的项目逻辑或学术论证。例如，你可以用“Git 风格”的泳道视图记录决策分支，通过 Tab 键快速延伸当前思路，用 Enter 键创建并列分支。当需要引用之前的结论时，输入标题即可从建议列表中复用已有节点，避免重复创建。这种工作流特别适合需要频繁回溯和修改思维结构的场景，如写作大纲整理或问题排查。

相比同类插件，BrainOS Graph 的特色在于其“可编辑的图形”与“纯文本源”的双向同步。它提供全局画布视图，允许自由拖拽节点、断开连接，并支持跨文件引用节点（通过 `[[链接]]` 语法），而不会复制内容。此外，它具备实时节点建议功能，能根据配置文件夹内的文件提供匹配提示，帮助区分同名节点。所有数据处理均在本地完成，无需网络或账户，保护隐私的同时保持操作流畅。

使用前需注意，该插件要求 Obsidian 1.7.2 或更高版本，且旧版基于相邻关系的文件需通过脚本一次性转换，启动时不会自动转换。它不适合需要 AI 自动生成内容或复杂流程回放的用户，因为目前未实现这些功能。如果你主要依赖 Obsidian 原生的关系图谱插件进行静态展示，且不需要在图形中直接编辑文本结构，那么 BrainOS Graph 可能显得功能过剩。建议先备份库，再启用此插件以体验其独特的思维记录方式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



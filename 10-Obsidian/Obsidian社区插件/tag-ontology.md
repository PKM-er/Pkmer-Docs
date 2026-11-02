---
uid: 1793625622051001
title: "Obsidian 插件：Tag Ontology"
tags: ["图谱", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Link your tags the way you link notes, with parents, children and related tags, and explore them in the graph view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tag Ontology

> [!Note] 插件名片
> - 插件名称：Tag Ontology
> - 插件作者：namhyun ko
> - 插件说明：Link your tags the way you link notes, with parents, children and related tags, and explore them in the graph view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/namhyeonko/obsidian-tag-ontology)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-ontology)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/namhyeonko/obsidian-tag-ontology/master/README.md)



## 概述

Tag Ontology 旨在解决 Obsidian 中标签扁平化、缺乏层级结构的问题。它允许你像链接笔记一样管理标签，通过侧边栏直观地定义标签的父级、子级及关联关系，无需手动编辑任何文件。这些结构化的标签关系会直接映射到 Obsidian 原生的图谱视图中，让你能像浏览笔记网络一样探索标签体系，同时保持原有笔记链接、过滤器和颜色分组功能的正常运作。

想象你正在整理一个庞大的知识库，其中包含“机器学习”、“深度学习”和“自然语言处理”等概念。你可以将“深度学习”设为“机器学习”的子标签，并将“自然语言处理”标记为与“机器学习”相关的标签。在图谱视图中，你可以双击标签来展开或折叠分支，观察笔记如何随着层级变化而移动。此外，每个标签旁会显示直接关联的笔记数以及包含所有子标签的累计笔记数，帮助你快速评估标签的覆盖范围。

相比其他仅支持简单分类的插件，Tag Ontology 的核心特色在于其非侵入性和深度集成。它不修改你的笔记内容，仅在一个独立的 JSON 字典文件中存储层级关系，确保数据安全。它支持多父级标签和虚线关联，提供力导向、垂直/水平树状及 3D 视图等多种布局。独特的“焦点模式”能高亮选中标签及其邻居，淡化其余部分，帮助你在复杂网络中保持注意力集中。

使用前请注意，该插件依赖 Obsidian 核心的图谱视图功能，且需要在图谱设置中开启“标签”过滤器才能正常显示层级。它不适合那些希望完全自动化生成标签层级、或需要频繁修改笔记内标签文本的用户。如果你主要依赖本地图谱或不需要复杂的标签语义关系，此插件可能显得功能过剩。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



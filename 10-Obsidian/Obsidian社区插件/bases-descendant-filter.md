---
uid: 1793625607826000
title: "Obsidian 插件：Bases Descendant Filter"
tags: ["搜索与排序", "数据处理", "效率工具", "obsidian插件"]
description: "Show Bases results that descend from a root through a note property. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Descendant Filter

> [!Note] 插件名片
> - 插件名称：Bases Descendant Filter
> - 插件作者：theluckystrike
> - 插件说明：Show Bases results that descend from a root through a note property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-descendant-filter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-descendant-filter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-descendant-filter/master/README.md)



## 概述

Bases Descendant Filter 旨在解决 Obsidian Bases 中无法直接展示层级关系的痛点。它通过读取笔记属性中的父级链接，自动追踪从根笔记出发的所有后代笔记，并将结果以扁平表格形式呈现。该视图不仅列出匹配项，还计算并显示每个笔记相对于根节点的最短深度，帮助用户直观理解笔记间的层级结构，而无需手动维护复杂的嵌套列表。

典型场景适用于项目管理或知识体系梳理。例如，在“项目 A”笔记中，通过 `parents` 属性链接“设计”和“细节”笔记。在 Bases 视图中选择“项目 A”为根节点，即可看到“设计”（深度 1）和“细节”（深度 2）的列表。即使中间节点未出现在当前查询结果中，只要属性链接存在，最终的后代笔记仍会被正确识别并展示，避免了因过滤条件导致层级断裂的问题。

相比普通 Bases 视图，其特色在于支持动态根节点与多父级处理。用户可设置根节点公式为 `this.file`，将同一 Base 嵌入不同项目笔记中，自动显示各自的后代，实现“一表多用”。此外，它支持一个笔记拥有多个父级，并能安全处理循环引用而不陷入死循环。视图还保留 Bases 原有的过滤、排序和分组功能，允许中间节点作为“桥梁”存在而不必出现在最终表格中，极大提升了数据展示的灵活性。

使用前需注意，该插件依赖笔记属性中的 Wiki 链接语法，正文中的普通链接不会建立父子关系。若属性值无效或链接未解析，视图会显示警告计数，需检查元数据索引状态。它不适合需要实时编辑属性或复杂图形化关系展示的场景，仅作为只读的层级查询工具。Pro 版本提供路径解释功能，但核心遍历与深度计算功能免费，无需订阅即可使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1786577079104002
title: 'Obsidian 插件：Inline Graph'
tags: ['图表与可视化', '编程与脚本', '效率工具', '图谱', 'obsidian插件']
description: '从gr代码块渲染内联力导向节点图。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Graph

> [!Note] 插件名片
> - 插件名称：Inline Graph
> - 插件作者：SVM0N
> - 插件说明：从gr代码块渲染内联力导向节点图。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图表与可视化', '编程与脚本', '效率工具', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/svm0n/obsidian-inline-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/svm0n/obsidian-inline-graph/master/README.md)



## 概述

### 1. 插件主要功能
Inline Graph 是一款 Obsidian 插件，可通过简单的 `gr` 代码块在笔记中内联渲染交互式、力导向的节点图。

### 2. 适用场景
适用于在笔记中即时呈现任意自定义的概念关系，而非仅展示库内链接关系。

### 3. 核心特色
- 力导向物理布局，动画效果且自动稳定。
- 节点可拖动，拖动时重新模拟布局。
- 节点有颜色和标签。
- 悬停节点可展开并显示文本提示。
- 可通过 CSS 变量适配 Obsidian 主题（亮色/暗色）。
- 零依赖，无需构建步骤，支持移动设备。

### 4. 使用建议
添加语言为 `gr` 的代码块，按 `<edges> : [ <node metadata> ]` 语法编写。边用 `-` 表示无向、`->` 表示有向，用 `;` 分隔；节点元数据可选。可在首行用 `height=xxx` 指定图的高度。节点 ID 可含字母、数字和下划线，语法容错性高，最简代码块如 ` ```gr a-b; b-c ``` ` 也能正常工作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



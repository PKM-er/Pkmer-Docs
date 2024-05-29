---
uid: 2024052909104316
title: Obsidian 插件：Adjacency Matrix Exporter
tags: ['数据处理', '编辑工具', '图表与可视化', 'obsidian插件']
description: 在两种方式下创建您的保险库的数字邻接矩阵：绝对和归一化。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Adjacency Matrix Exporter

> [!Note] 插件名片
> - 插件名称：Adjacency Matrix Exporter
> - 插件作者：danielegrazzini
> - 插件说明：在两种方式下创建您的保险库的数字邻接矩阵：绝对和归一化。
> - 插件分类：[' 数据处理 ', ' 编辑工具 ', ' 图表与可视化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/danielegrazzini/adjacency-matrix-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?adjacency-matrix-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danielegrazzini/adjacency-matrix-exporter/main/README.md)

## 概述

这个插件可以通过两种方式创建您的 vault 的数字邻接矩阵：绝对模式和标准化模式。用户可以选择导出 CSV 格式的邻接矩阵，以便在其他软件中进行进一步处理。邻接矩阵是一种不同的方式来表示 Obsidian 图。它以一个方形的单元格网格开始，其中每一行单元格代表 vault 中的一个笔记，每一列也是如此。如果笔记 `i` 与笔记 `j` 连接，那么在第 `i` 行和第 `j` 列的单元格将是连接权重，即两个笔记之间的连接数。用户可以将其视为 vault 中所有链接的网格。每一行是图中的一个节点，每个单元格是一条边。插件的功能包括绝对模式和标准化模式的邻接矩阵导出，以及自定义 CSV 文件的分隔符和目标文件夹。这个插件的作者是 Daniele Grazzini，他是罗马 UNINETTUNO 学院管理工程专业的学生。插件的灵感来源于 SkepticMystic 的工作。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




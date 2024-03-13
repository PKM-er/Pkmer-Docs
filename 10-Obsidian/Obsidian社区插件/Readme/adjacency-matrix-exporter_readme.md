---
uid: 2024022117260497
title: Obsidian 插件：【Readme】Adjacency Matrix Exporter
tags: ['obsidian插件', 'readme']
description: 在两种方式下创建您的保险库的数字邻接矩阵：绝对和归一化。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Adjacency Matrix Exporter

> [!Note] 插件名片
> - 插件名称：Adjacency Matrix Exporter
> - 插件作者：danielegrazzini
> - 插件说明：在两种方式下创建您的保险库的数字邻接矩阵：绝对和归一化。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/danielegrazzini/adjacency-matrix-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?adjacency-matrix-exporter)

## 概述

在两种方式下创建您的保险库的数字邻接矩阵：绝对和归一化。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/danielegrazzini/adjacency-matrix-exporter/main/README.md)

---

## Readme(翻译）

下面是 [[adjacency-matrix-exporter]] 插件的自述翻译

# 邻接矩阵导出器

这个插件想要构建两种类型的数值邻接矩阵，可以以 CSV 格式导出，以便用其他软件进行后续处理。

邻接矩阵是表示 Obsidian 图的一种不同方式。

它从一个方形的单元格网格开始，其中每个**行**的单元格代表您的保险库中的一个单个笔记，每个**列**也是如此。

如果笔记 `i` 与笔记 `j` 相连，则行 `i` 和列 `j` 中的单元格将是链接权重，即两个笔记之间的链接数量。

您可以将其视为您的保险库中所有**链接**的网格。

每一行是您图中的一个 _ 节点 _，每个单元格是一个 _ 边 _。

## 插件描述

当用户点击插件图标时，他将面对一个交互窗口，其中包含三种可能的操作：两个按钮和一个链接。

第一个按钮以绝对模式导出 Vault 笔记的邻接矩阵：边的权重由一个笔记到另一个笔记的连接数确定。

第二个按钮以标准化模式导出 Vault 的邻接矩阵：从笔记 A 到笔记 B 的边的权重被笔记 A 中的总词数除以。

链接允许用户根据他们的需求更改 CSV 文件的分隔符。

## CSV 文件保存配置

CSV 文件默认保存在 Vault 文件夹中。这些文件报告了导出模式、文件创建日期和时间。

## 选项

用户可以选择默认的 CSV 分隔符和创建的 CSV 文件的目标文件夹。

## 作者

Daniele Grazzini 是罗马 UNINETTUNO 学院管理工程学位课程的学生：<https://www.uninettunouniversity.net>。

这项工作是为工业厂房学科的管理工程三年论文而进行的。

指导教师是 Andrea Falegnami 教授，博士，工程师。

## 谢谢

我想感谢 SkepticMystic 为他的巨大工作，为创建这个插件奠定了基础。我建议每个人都去访问他的 Github: <https://github.com/SkepticMystic>，特别是我受到这个作品的启发: <https://github.com/SkepticMystic/adjacency-matrix-maker>

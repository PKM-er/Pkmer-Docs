---
uid: 2023080322243437
title: Obsidian 插件：【Readme】Path Finder
tags: ['obsidian插件', 'readme']
description: 一个可以查找两个节点之间的所有路径并将其渲染为图形或文本的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Path Finder

> [!Note] 插件名片
> - 插件名称：Path Finder
> - 插件作者：jerrywcy
> - 插件说明：一个可以查找两个节点之间的所有路径并将其渲染为图形或文本的插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jerrywcy/obsidian-path-finder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-path-finder)

## 概述

一个可以查找两个节点之间的所有路径并将其渲染为图形或文本的插件。

![Path Finder](https://cdn.pkmer.cn/covers/obsidian-path-finder_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jerrywcy/obsidian-path-finder/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-path-finder]] 插件的自述翻译


# 黑曜石路径查找插件

安装

### 来自Obsidian

1. 打开 `设置` > `第三方插件`
2. 确保安全模式已关闭
3. 点击 `浏览社区插件`
4. 搜索此插件
5. 点击 `安装`
6. 安装完成后，关闭社区插件窗口，插件即可使用。

### 来自BRAT

1. 安装[Obsidian42-BRAT](https://github.com/TfTHacker/obsidian42-brat)插件。
2. 点击`添加新的测试版插件`并填写`jerrywcy/obsidian-path-finder`。
3. 激活插件。

### 来自Github发布

1. 从[Releases](https://github.com/jerrywcy/obsidian-path-finder/releases)下载`obsidian-path-finder.zip`。
2. 解压缩`.zip`文件，并将文件夹`obsidian-path-finder`放置在`path-to-your-vault/.obsidian/plugins/`下。
3. 激活插件（可能需要刷新）。

特征

### 查找两个文件之间的最短路径

![查找最短路径](assets/find-shortest-path.gif)

**起始文件：** 从哪个文件开始。使用从存储库根目录到文件的完整路径。

**目标文件：** 结束的文件。使用从存储库根目录到文件的完整路径。

### 在图形中找到所有文件之间的路径

![在图形中找到所有路径](assets/find-all-paths-as-graph.gif)

**从：** 起始文件。使用从存储库根目录到文件的完整路径。

**到：** 结束文件。使用从存储库根目录到文件的完整路径。

**长度：** 所有路径的最大长度。通常，过长的路径可能没有意义，因此可能需要限制长度。将长度设置为0以显示所有路径，无论长度如何。**将长度设置为0可能会导致Obsidian崩溃，因为节点渲染的数量太大，所以请自行承担风险。**

浮动面板中显示的路径将按照从最短到最长的顺序排序。每次点击按钮时都会计算一条路径，因此不必担心崩溃。

### 查找所有路径

![查找所有路径](assets/find-all-paths.gif)

**起始文件：** 从哪个文件开始。使用从保险库根目录到文件的完整路径。

**结束文件：** 到哪个文件结束。使用从保险库根目录到文件的完整路径。

**长度：** 所有路径的最大长度。设置为0以显示所有路径，无论长度如何。

路径将按照从最短到最长的顺序进行排序。每次点击按钮时都会计算每个路径，所以不必担心崩溃问题。

归属

- `genericTextSuggester.ts`和`suggest.ts`来自[phibr0/obsidian-dictionary](https://github.com/phibr0/obsidian-dictionary)。
- `d3ForceGraphWithLabels.ts`来自d3Gallery中的示例，并进行了适应，其链接如下：
    - https://observablehq.com/@d3/force-directed-graph
    - https://observablehq.com/@d3/force-directed-graph-canvas
    - https://observablehq.com/@d3/mobile-patent-suits
    - https://observablehq.com/@d3/sticky-force-layout
    - https://observablehq.com/@d3/zoom
    - https://observablehq.com/@d3/temporal-force-directed-graph
    - 上述示例遵循ISC许可证，版权信息如下：
        - 版权所有2021年Observable, Inc.
        - 在ISC许可下发布。




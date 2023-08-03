---
uid: 2023080322241440
title: Obsidian 插件：【Readme】Optimize Canvas Connections
tags: ['obsidian插件', 'readme']
description: 一个插件，通过使用最近的边重新连接笔记来简化画布。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Optimize Canvas Connections

> [!Note] 插件名片
> - 插件名称：Optimize Canvas Connections
> - 插件作者：Félix Chénier
> - 插件说明：一个插件，通过使用最近的边重新连接笔记来简化画布。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/felixchenier/obsidian-optimize-canvas-connections)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?optimize-canvas-connections)

## 概述

一个插件，通过使用最近的边重新连接笔记来简化画布。

![Optimize Canvas Connections](https://cdn.pkmer.cn/covers/optimize-canvas-connections.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/felixchenier/obsidian-optimize-canvas-connections/master/README.md)
> 

---

## Readme(翻译）

下面是 [[optimize-canvas-connections]] 插件的自述翻译


# 优化画布连接

假设你开始一个画布。

![图1](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig1.png)

然后你在头脑风暴时移动所有的东西。笔记之间的连接可能很快变得一团糟。

![图2](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig2.png)

这个简单的插件会自动重新连接笔记，使用它们最近的边缘。

选择要重新连接的笔记，然后运行命令：

`Optimize Canvas Connections: Optimize selection (preserve axes)`

或者

`Optimize Canvas Connections: Optimize selection (shortest path)`

![图3](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig3.png)

最短路径选项重新连接笔记，使用它们最近的边，始终使用最短路径。这是最激进的方法。

保留轴

“保留轴”选项还会使用最近的边重新连接音符，但它会尊重连接最初开始和结束的轴。例如，从一个音符右侧开始的连接可以更改为从左侧开始，但不能从顶部或底部开始。使用此选项可以保持垂直和水平流动中的含义（例如，自上而下=时间，自左至右=细节）。

**如果不确定，请使用“保留轴”。**




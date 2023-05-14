---
uid: 20230513222807
title: Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线
description: Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线
author: Bon
type: other
draft: false
editable: false
modified: 20230514102151
---

# Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线

## 概述

这是一个功能非常简单的 Canvas 插件，但是却能节省你很多的时间（。

> [!Note] 插件名片
> - 插件名称：Optimize Canvas Connections
> - 插件作者：Félix Chénier
> - 插件说明：优化 Canvas 中的连接线。
> - 插件项目地址：[点我跳转](https://github.com/felixchenier/obsidian-optimize-canvas-connections)

## 效果&特性

- 最短路径形式（Shortest path）：支持将 Canvas 中跨过自身的连接线，优化成不跨过该节点的连接线形式，相当于从左到右的连接线，会直接帮你将连接点迁移到右边，而不是从左边进行连接，注意这种方式有可能会将你原先在左边的连接点切换成上边的连接点，以实现最短路径连接；
- 不变换轴（Preserve axes）：例如当你选用这个功能时，不会只看最短路径，而是会变更左边到右边，或者上边到下边（相反也是）， 而不会将左边的连接点替换成上或者下的连接点。

## 使用

- 选中 Canvas 中的任意节点，然后按 Ctrl+P 来使用命令：
	- Optimize Canvas Connections: Optimize selection (preserve axes)
	- Optimize Canvas Connections: Optimize selection (shortest path)
- 或者不选中任何节点，直接在当前的 Canvas 中执行以上的命令，那么会应用到全局；

> [!tip]
> 记得先试验一下在使用~

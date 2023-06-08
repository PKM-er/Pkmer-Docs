---
uid: 20230513222807
title: Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线
tags: [Obsidian, 插件, Canvas, 连接线]
description: Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线
author: Bon
type: other
draft: false
editable: false
modified: 20230604174643
---

# Obsidian 插件：Optimize Canvas Connections 优化 Canvas 中的连接线

## 概述

22 年底与大家正式见面白板（Canvas）功能，成为了很多人整理笔记，梳理思考方式的心头好。但是卡片和节点之间的链接线，有时候当我们随手绘制的时候，显得不那么美观和考究。

Optimize Canvas Connections 是一个功能非常简单的 Canvas 插件，但是却能节省你很多的时间，自动为你调优你白板中，节点间的连接线。

> [!Note] 插件名片
> - 插件名称：Optimize Canvas Connections
> - 插件作者：Félix Chénier
> - 插件说明：优化 Canvas 中的连接线。
> - 插件项目地址：[点我跳转](https://github.com/felixchenier/obsidian-optimize-canvas-connections)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230514141810.png!pkmer)

- 最短路径形式（Shortest path）：支持将 Canvas 中跨过自身的连接线，优化成不跨过该节点的连接线形式，相当于从左到右的连接线，会直接帮你将连接点迁移到右边，而不是从左边进行连接，注意这种方式有可能会将你原先在左边的连接点切换成上边的连接点，以实现最短路径连接；
- 不变换轴（Preserve axes）：例如当你选用这个功能时，不会只看最短路径，而是会变更左边到右边，或者上边到下边（相反也是）， 而不会将左边的连接点替换成上或者下的连接点。

## 使用

- 选中 Canvas 中的任意节点，然后按 Ctrl+P 来使用命令：
	- Optimize Canvas Connections: Optimize selection (preserve axes)
	- Optimize Canvas Connections: Optimize selection (shortest path)
- 或者不选中任何节点，直接在当前的 Canvas 中执行以上的命令，那么会应用到全局；

> [!tip]
> 记得先试验一下在使用~

> [!Tip] 推荐阅读
> - [[Obsidian-Banners]]：为文档页面添加头图和图标
> - [[heading-level-indent]]：能根据标题级别缩进内容，用于创建视觉层次结构，使文档的结构和组织更容易理解
> - [[obsidian-hider]]：自定义隐藏界面元素、信息
> - [[obsidian-style-settings]]：给主题，插件，css 片段提供样式设置的插件
> - [[obsidian-icon-folder]]：允许你添加任何自定义图标 (类型为.svg) 或从图标包中添加到您的文件夹或文件
> - [[custom-state-for-task-list]]：优化你的任务样式
> - [[obsidian-day-and-night]]：根据设定的时间自动切换浅色和深色主题
> - [[obsidian-dynamic-background]]：为 Obsidian 添加动态背景
> - [[obsidian-minimal-settings]]：为你 Minimal 主题提供自定义选项
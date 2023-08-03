---
uid: 2023080322205396
title: Obsidian 插件：【Readme】Juggl
tags: ['界面相关', 'obsidian插件', 'readme']
description: 为Obsidian添加一个完全交互式、可样式化和可扩展的图形视图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Juggl

> [!Note] 插件名片
> - 插件名称：Juggl
> - 插件作者：Emile van Krieken
> - 插件说明：为Obsidian添加一个完全交互式、可样式化和可扩展的图形视图。
> - 插件分类：['界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/HEmile/juggl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?juggl)

## 概述

为Obsidian添加一个完全交互式、可样式化和可扩展的图形视图。

![Juggl](https://cdn.pkmer.cn/covers/juggl_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HEmile/juggl/main/README.md)
> 

---

## Readme(翻译）

下面是 [[juggl]] 插件的自述翻译


<p align="left">
    
    <a href="https://github.com/HEmile/juggl/releases">
        <img src="https://img.shields.io/github/downloads/HEmile/juggl/total.svg"
            alt="下载次数" width="110"></a> 
    <a href="https://github.com/HEmile/juggl/releases">
        <img src="https://img.shields.io/github/v/release/HEmile/juggl"
            alt="Github最新发布" width="100"></a>
   <a href="https://juggl.io">
        <img src="https://img.shields.io/badge/docs-Obsidian-blue"
            alt="文档" width="100"></a>
    <a href="https://discord.gg/sAmSGpaPgM">
        <img src="https://img.shields.io/discord/794500624163143720?logo=discord"
            alt="在Discord上聊天" width="120"></a>
</p>
Juggl是一个完全交互式、可样式化和可扩展的图形视图，适用于[Obsidian](https://obsidian.md)。它被设计为一个高级的“本地”图形视图，称为“工作区”，您可以轻松地在其中操纵所有的思想：通过浏览您的保险库来进行美丽的图形！

例如，您可以选择展开图形的哪些部分，以确保屏幕上没有太多的信息。您可以使用强大的[Cytoscape.js库](https://js.cytoscape.org)完全控制图形的样式：Juggl具有一个有用的样式窗格，用于设置节点的颜色、形状、大小和图标。这有助于您立即了解每个节点的内容。

![](https://raw.githubusercontent.com/HEmile/juggl/main/src/resources/juggl_trailer.gif)

## 特点
与Obsidian图形视图相比，Juggl的图形视图具有许多独特的功能：
- 使用[CSS](https://juggl.io/Features/Styling/CSS+Styling)、[YAML](https://juggl.io/Features/Styling/YAML+Styling)和[Style Pane](https://juggl.io/Features/Styling/Style+Pane)完全控制图形的样式。
  - 包括图片！
- [工作区模式](https://juggl.io/Features/Workspace+mode/Workspace+mode)允许您使用与当前项目相关的所有节点构建图形
  - 选择性地浏览和隐藏节点，并固定它们的位置，以免丢失
  - 写下新的想法并观察图形的演变
  - 保存图形并在以后继续工作
- 4种不同的[布局](https://juggl.io/Features/Layouts)以获得独特的见解
- [代码块](https://juggl.io/Features/Juggl+code+block)可在Obsidian笔记中显示图形
- 支持链接类型以标记边缘
- 与非常有用的[Breadcrumbs插件](https://github.com/SkepticMystic/breadcrumbs)紧密集成
- 可通过其他插件进行扩展
- 可在移动设备上使用！

## 入门指南
您可以通过文件上的“更多选项”菜单打开Juggl：
![](https://raw.githubusercontent.com/HEmile/juggl/main/juggl/resources/open_juggl.gif)

您可以使用与Obsidian中相同的许多选项与图形进行交互。有关更多文档，请访问[juggl.io](https://juggl.io/)，您可以在其中找到有关例如[样式](https://juggl.io/Features/Styling/Styling)或[代码块](https://juggl.io/Features/Juggl+code+block)语法的信息。
您还可以通过Juggl中的此按钮打开帮助存储库：
![](https://raw.githubusercontent.com/HEmile/juggl/main/juggl/resources/juggl_help.gif)

扩展Juggl
Juggl是完全开源的，并且提供了一个API，用于创建扩展或使用Juggl的Obsidian插件。请参阅https://github.com/HEmile/juggl-api。您将完全控制[Cytoscape.js](https://js.cytoscape.org)的内部，这是一个非常强大的图形可视化库！




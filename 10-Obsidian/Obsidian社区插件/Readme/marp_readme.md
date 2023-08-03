---
uid: 2023080322220732
title: Obsidian 插件：【Readme】Marp
tags: ['obsidian插件', 'readme']
description: 在Obsidian上使用Marp的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Marp

> [!Note] 插件名片
> - 插件名称：Marp
> - 插件作者：JichouP
> - 插件说明：在Obsidian上使用Marp的插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/JichouP/obsidian-marp-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?marp)

## 概述

在Obsidian上使用Marp的插件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JichouP/obsidian-marp-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[marp]] 插件的自述翻译


# Obsidian Marp 插件

使用 [Marp](https://marp.app/) 与 [Obsidian.md](https://obsidian.md/) 的插件。

打开预览

选择Markdown文件的选项卡，然后点击功能区上的按钮或者从命令面板中运行`Marp: Open Preview`来查看预览。

![open_preview](docs/open_preview.gif)

### 自动重新加载

![自动重新加载](docs/auto_reload.gif)

## 导出幻灯片

**您需要安装Node.js才能导出幻灯片，因为此插件使用`npx`命令来导出幻灯片。**  
您可以从PDF、PPTX和HTML中选择您喜欢的格式。  
**输出始终在`Downloads`目录中。**

![export](docs/export.gif)

## 嵌入图片

在导出时，图片会被转换为Base64并嵌入到文件中，因此您可以共享带有嵌入本地图片的幻灯片。  
图片路径可以是相对于存储库根目录的绝对路径或相对路径。  
Wikilink格式（`![[path/to/image.png]]`）在幻灯片中**不起作用**，**您必须使用CommomMark格式（`![alt](path/to/image.png)`）**。

## 过渡效果

![transition](docs/transition.gif)

可以通过以HTML格式导出来使用过渡效果。
然而，在Chrome 110中，您需要将`viewTransition API`设置为`Enable`。
（如果您使用的是Chrome的beta版本（111+），则不需要此设置。）

![enable_view_transitions_api](docs/enable_view_transitions_api.png)

## 设置

### 启用自动重新加载

类型：切换  
默认：开启

如果开启，当Markdown文件保存时，预览将自动更新。

### 在分割标签中启用开放预览

类型：切换  
默认：开启

启用在分割标签中打开预览的功能。如果禁用，则会在与 Markdown 文件相同的分割中创建一个新的标签页。

### 主题文件夹位置

类型：文本
默认值：`MarpTheme`

指定主题存储的相对路径。通过将css文件保存在指定的目录中，Marp可以使用自定义主题。

**\*在添加css后，必须重新启动Obsidian。**

#### 示例：如果将`MarpTheme`设置为`主题文件夹位置`

```text
<你的笔记库>
└── MarpTheme  ← 创建这个文件夹
    ├── beamer.css  ← 然后在这里保存自定义的 CSS！
    ├── border.css
    └── gradient.css
```




---
uid: 2025102309575032
title: 'Obsidian 插件：Pretty Properties Pretty Properties 为笔记增加侧图和横幅 banner 功能'
tags: ['YAML', 'banner', '样式', 'obsidian插件']
description: 'Pretty Properties 为笔记增加侧图和横幅 banner 功能'
author: OS
type: other
draft: false
editable: false
modified: 20251023095750
---

# Obsidian 插件：Pretty Properties 为笔记增加侧图和横幅 banner 功能

## 概述

非常欣喜的发现了这个插件，虽然这个插件还没有替换成为我助力插件，但是它展现了非常高可扩展性，和新鲜特性。

- 首先支持封面图的样式，这种对于书记非常有好处
- 支持多颜色样式
- 支持隐藏属性
- 支持进度条
- 支持高级用户的自定义样式和一些新兴插件的联动

很高兴在 obsidian 发展到这个阶段还能看到社区出现这样，能从用户视角出发的插件。毕竟之前这些功能都散落在非常多的小插件之中。

> - 插件名称：Pretty Properties
> - 插件作者：Anareaty
> - 插件说明：使笔记属性看起来更有趣：增加了侧图，横幅，列表属性的颜色，并允许隐藏特定的属性。
> - 插件分类：['YAML', 'banner', '样式', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/anareaty/pretty-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pretty-properties)

## 效果&特性

![pretty-properties|800](https://cdn.pkmer.cn/images/20251023100758664.png!pkmer)


- 支持将图像添加到 YAML 或者叫元数据中，以左侧封面，或者我们熟悉的头图 banner 形式展示
- 左侧封面模式节省笔记中的垂直空间，非常适合书记、人物简介等
- **支持更改图像的形状和大小**

## 使用

- 安装插件
- 正常在 YAML 或者叫元数据，笔记属性区域，填写内容
- 值得注意但是，这个插件提供了自定义属性的能力，你可以自定义你的 banner 是否以 banner 为基准。默认以 banner 这是为了兼容用户的老数据一个非常不错的体验
- 左侧封面模式也可以自定义样式，默认为 cover 

### 图标

您可以在横幅旁边添加图标，也可以单独添加图标。为此，请运行命令“选择图标”。这会将“图标”属性广告到您的注释中。对于图标，您可以使用图像、内置 Lucide 图标或任何符号，包括表情符号：

- 添加内部或外部链接以添加图像;
- 添加 Lucide 图标的名称，例如“star”，以添加 SVG 图标;
- 如果您添加任何其他文本，第一个符号将显示为 图标。

您可以设置特定文件夹来查找本地图标图像。

### 彩色列表属性

您可以通过为每个项目分配自己的颜色来使列表属性脱颖而出。右键单击物品药丸以选择颜色。您还可以选择“无”以使药丸背景透明或将其重置为默认值。您可以使用主题颜色或选择您自己的自定义颜色。

![pretty-properties|800](https://cdn.pkmer.cn/images/20251023101714422.png!pkmer)

您还可以将自己的样式添加到列表属性中。它们中的每一个（即使不是彩色的）都会获得包含项目实际值的属性“data-property-pill-value”。您可以使用这些属性为任何单个项目编写您自己的 css，如下所示：

```
[data-property-pill-value="my-property-value"] {    /* my styles */}
```


### 进度条

将简单的进度条添加到任何数字属性。默认情况下，进度条的最大值为 100，属性值被视为百分比。如果要添加自定义数字作为进度最大值，则需要向笔记添加额外的数字属性，然后在第一个属性菜单中选择“从另一个属性设置最大进度”选项。

![image.png](https://cdn.pkmer.cn/images/20251023102233011.png!pkmer)

### 隐藏属性

如果笔记中有许多属性，则可能需要隐藏其中一些属性，同时保持其他属性可见。单击属性图标，然后在菜单中选择“隐藏属性”。如果您想再次查看它，请运行命令“切换显示/隐藏所有隐藏属性”。之后，您将看到隐藏的属性，并可以将它们标记为未隐藏。

![pretty-properties|800](https://cdn.pkmer.cn/images/20251023101633805.png!pkmer)

横幅、封面和图标属性可以通过右键单击横幅/封面/图标图像从打开的菜单中隐藏或显示。
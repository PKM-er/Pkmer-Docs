---
uid: 2023080322134040
title: Obsidian 插件：Adjacency Matrix Maker
tags: ['界面相关', 'obsidian插件', 'readme']
description: 创建你的金库的互动邻接矩阵
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Adjacency Matrix Maker

> [!Note] 插件名片
> - 插件名称：Adjacency Matrix Maker
> - 插件作者：SkepticMystic
> - 插件说明：创建你的金库的互动邻接矩阵
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SkepticMystic/adjacency-matrix-maker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?adjacency-matrix-maker)

## 概述

创建你的金库的互动邻接矩阵

![Adjacency Matrix Maker](https://cdn.pkmer.cn/covers/adjacency-matrix-maker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SkepticMystic/adjacency-matrix-maker/master/README.md)

---

## Readme(翻译）

下面是 [[adjacency-matrix-maker]] 插件的自述翻译

# 邻接矩阵生成器

邻接矩阵是一种表示 Obsidian 图的不同方式。

它以一个方形的单元格网格开始，其中每一行的单元格代表你的 vault 中的一个笔记，每一列也是如此。

如果笔记 `i` 和笔记 `j` 相连，则第 `i` 行和第 `j` 列的单元格将被着色。

你可以将其视为你的 vault 中所有链接的网格。

每一行是你的图中的一个节点，每个单元格是一条边。

这个图传达了与这个邻接矩阵相同的信息：

![](https://i.imgur.com/VZuvAhq.png)

![](https://i.imgur.com/glL4mGc.png)

## 功能性

### 平移和缩放

当您运行“生成邻接矩阵”命令时，您将看到一个模态弹出窗口，其中包含矩阵的图像。您可以通过按住左键并拖动来平移图像，也可以使用鼠标中键进行缩放。

如果您想将缩放级别重置为初始状态，可以使用鼠标右键，或者点击图像上方的“重置缩放”按钮。

![](https://i.imgur.com/iJohDDi.png)

### 交互式工具提示

如果您将光标悬停在一个填充颜色的单元格上（表示两个链接的笔记），您将看到一个工具提示出现，显示链接的两个笔记 `A → B`。

![](https://i.imgur.com/wu6ivE7.png)

您可以按住 `Ctrl` 键，在任何地方都可以看到此工具提示，即使这两个笔记没有链接。

如果您单击一个单元格，它将打开带有外部链接的笔记（笔记 `A`）。

### 文件夹方块

在邻接矩阵图像上有一个显示“文件夹方块”的选项。这些方块显示了每个笔记所在的文件夹。您还可以根据颜色看到子文件夹：

- 一级文件夹 → **红色**
- 二级文件夹 → **橙色**
- 三级文件夹 → **黄色**
- 四级文件夹 → **绿色**
- 五级文件夹 → **蓝色**
- 六级文件夹 → **靛蓝色**
- 七级文件夹 → **紫罗兰色**

![](https://i.imgur.com/R7xGlb4.png)

### 保存图像

您可以通过点击“保存图像”按钮将邻接矩阵的图像保存到您的保险库中。如果成功，您将在右上角看到一个通知，上面写着“图像已保存”。

图像的默认名称和路径可以在 [图像设置](README.md#save-image-configuration) 中进行配置。

## 设置

您可以更改一些设置。这些设置可以在插件的设置选项卡下找到。

### 颜色

您可以更改图像的主要颜色和背景颜色。当两个音符链接在一起时，主要颜色用于填充单元格。背景颜色填充其余的单元格。

这些设置：

![](https://i.imgur.com/gF0G9Zs.png)

给我这个矩阵：

![](https://i.imgur.com/4u6xgO6.png)

### 显示文件夹

还有一个选项可以切换是否显示 [文件夹方块](README.md#folder-squares)。

![](https://i.imgur.com/pEWm964.png)

### 图像缩放

使用“图像缩放”选项，您可以更改图像的详细程度。较高的缩放意味着等待时间更长，但图像更清晰。

默认情况下，缩放是根据您的保险库的大小选择的。

#### `图像缩放比例 = 1`

![](https://i.imgur.com/0fu419R.png)

#### `图像缩放 = 100`

![](https://i.imgur.com/1gRD7hV.png)

### 保存图像配置

在将图像保存到您的保险库时，您可以更改以下属性。

#### 图像名称

在当前日期时间之前添加的名称。

例如，如果 `图像名称 = Adj`，那么保存的图像将被称为 `Adj 2021-06-15 2223`。

#### 图像路径

您还可以选择图像保存的位置。默认情况下，它保存在您的保险库的根目录下。

要更改它，只需将路径写到您希望保存的文件夹中。

例如，`图像路径 = 附件/图像/邻接矩阵`。

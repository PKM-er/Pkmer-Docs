---
uid: 2024042221331270
title: Obsidian 插件：【Readme】Semantic Canvas
tags: ['obsidian插件', 'readme']
description: 使用画布创建语义知识图，以图形方式修改笔记属性。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Semantic Canvas

> [!Note] 插件名片
> - 插件名称：Semantic Canvas
> - 插件作者：Aaron Gillespie
> - 插件说明：使用画布创建语义知识图，以图形方式修改笔记属性。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aarongilly/obsidian-semantic-canvas-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?semantic-canvas)

## 概述

使用画布创建语义知识图，以图形方式修改笔记属性。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aarongilly/obsidian-semantic-canvas-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[semantic-canvas]] 插件的自述翻译

【机翻】

# 黑曜石语义画布插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，赋予画布以*可视化*编辑文件属性的能力。

根据它们的组成员身份、文件链接、卡片链接和网络嵌入链接，在画布中为所有包含的 Markdown 文件设置属性。通过画布一次性创建新属性或编辑现有属性的多个 Markdown 笔记。创建**语义链接**（也称为类型化链接或标记链接）在笔记之间建立链接，并通过直观的基于图形的方法进行操作。使用笔记创建画布。使用画布更新笔记。

## 示例截图

### 画布 → 编辑注释属性

一个命令来制作这个画布...

![之前的图片](https://cdn.pkmer.cn/covers/semantic-canvas_2_0.png!pkmer)

...更新它包含的所有注释的属性：

![之后的图片](https://cdn.pkmer.cn/covers/semantic-canvas_2_1.png!pkmer)

### 注意 → 创建画布

将此注释转换为另一个命令...

![Before image](https://cdn.pkmer.cn/covers/semantic-canvas_2_2.png!pkmer)

...将其转换为包含其 `list-type` 属性的新画布：

![After image](https://cdn.pkmer.cn/covers/semantic-canvas_2_3.png!pkmer)

## 使用案例

- 构建和表示知识图谱
- 大规模编辑属性
- 维恩图和看板

## 用法

打开一个画布，然后使用命令面板或文件菜单运行以下命令之一：

- `Semantic Canvas: Append Note Properties based on Canvas`
- `Semantic Canvas: Overwrite Note Properties based on Canvas`

打开一个笔记，然后使用命令面板或文件菜单运行：

- `Semantic Canvas: Create canvas based on note`

### 行为

> 📖 节点类型
> 画布上的节点被归类为 `card`、`url`、`file` 或 `group` 中的一种。

#### 画布 → 编辑笔记文件

语义画布根据它们与活动画布中的节点（即 `文件`、`组`、`卡片`、`网址`）的连接方式修改**Markdown 文件**的属性。请参见下面的四个示例截图，了解不同的画布情况如何转换为属性。

![行为图像](https://cdn.pkmer.cn/covers/semantic-canvas_2_4.png!pkmer)

- 每种节点类型的行为都可以切换关闭。
- 如果边缘有标签，`文件` 上设置的属性将使用该标签作为属性键。
- 如果边缘没有标签，`文件` 上设置的属性将使用该节点类型的默认标签。
- 如果一个组包含笔记，那些 `文件` 的 `组`（默认情况下）属性将设置为笔记所包含的组的标题的值。
- 如果一个笔记连接到一个 `组`，它将表现得好像笔记连接到组中包含的每个节点。

> 📋 属性始终是**列表**类型
> 无法使用此插件编辑文本、数字、复选框、日期或日期和时间属性。

语义画布根据活动笔记创建一个新的画布文件。它将被放置在可配置的位置，并将以图形方式表示所有 `列表类型` 属性。然后可以手动编辑此画布，并将更改推送回相关的笔记。

## 归属

感谢 [Ben Hughes](https://github.com/benhughes)，他在令人敬畏的**Link Exploder**上的工作帮助非常大。

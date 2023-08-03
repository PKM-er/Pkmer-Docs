---
uid: 2023080322152215
title: Obsidian 插件：【Readme】Breadcrumbs
tags: ['界面相关', '导航工具', 'obsidian插件', 'readme']
description: 使用面包屑路径或矩阵视图可视化保管库的层次结构
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Breadcrumbs

> [!Note] 插件名片
> - 插件名称：Breadcrumbs
> - 插件作者：SkepticMystic
> - 插件说明：使用面包屑路径或矩阵视图可视化保管库的层次结构
> - 插件分类：['界面相关', '导航工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/SkepticMystic/breadcrumbs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?breadcrumbs)

## 概述

使用面包屑路径或矩阵视图可视化保管库的层次结构

![Breadcrumbs](https://cdn.pkmer.cn/covers/breadcrumbs.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SkepticMystic/breadcrumbs/master/README.md)
> 

---

## Readme(翻译）

下面是 [[breadcrumbs]] 插件的自述翻译


# 面包屑导航

该插件为Obsidian添加了多个新视图。

[wiki](https://breadcrumbs-wiki.onrender.com)上有比当前过时和有限的自述文件更详细的插件信息。

加入我们在[GitHub](https://github.com/SkepticMystic/breadcrumbs/discussions)或[Discord](https://discord.com/channels/686053708261228577/929513881041248266)的讨论！例如，了解其他用户如何[充分利用Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs/discussions/175 "Getting the most out of Breadcrumbs · Discussion #175 · SkepticMystic/breadcrumbs")。

您可以在[这里](https://github.com/SkepticMystic/breadcrumbs/blob/master/CHANGELOG.md)找到更新日志。

## 基础知识

面包屑插件允许您向笔记添加层次结构的元数据，然后利用该结构。

在您的笔记中使用以下关系：

- 上级/父级（↑）
- 无序的同级/兄弟（↔）
- 有序的兄弟（上一个（←）/下一个（→））
- 下级/子级（↓）

您可以根据需要将这些关系类型命名为最适合您目的的方式（上级/父级/顶级/祖先/创始人/来源/自定义）。

为了获得这种结构，插件要求您使用某种类型的元数据来指示笔记的层次结构：

1. 前置字段。这是位于笔记顶部的yaml格式字段。例如，`me.md`文件可以具有以下前置字段：

```
---
parent: [[dad]]
parent: [[mom]]
sibling: [[sister Lara]]
child: [[child Andre]]
---
```

2. 内联（必须使用[Dataview](https://github.com/blacksmithgu/obsidian-dataview#data)插件），在正常文本中使用如下方式：

```
Punching is a very effective MMA technique (sibling:: [ [[Kicking]], [[Elbowing]], [[Kneeing]] ], parent:: [[Striking]])
```

（注意Dataview内联元数据的双冒号）。

3. 您也可以同时使用这两种方法。例如，您的`Course. 101 - Basics of Financing.md`文件可能具有以下内容：

```
---
up: [[Year 2022 courses]]
same: [[Course. 103 - Basics of Programming]]
---

# 课程. 101 - 融资基础
本课程教授融资的基础知识。它包含几个子领域：
- 下载：[[101 - 融资基础. 讲座]]
- 下载：[[101 - 融资基础. 小组作业]]
- 下载：[[101 - 融资基础. 论文]]

下一步：[[课程. 201 - 高级融资]]

## 矩阵/列表视图

此视图以以下任一样式显示当前笔记的父级、同级和子级：

![image](https://user-images.githubusercontent.com/70717676/123402846-75a67f80-d5a8-11eb-8230-75c37441f122.png)

![image](https://user-images.githubusercontent.com/70717676/123402852-77704300-d5a8-11eb-8f56-c4eb3ca23e02.png)

要在侧边栏中打开视图，请从命令面板（`Ctrl+P`）运行命令`Breadcrumbs: Open View`。

面包屑路径视图

该视图显示了从您的保险库顶部到当前笔记的一系列笔记：

![image](https://user-images.githubusercontent.com/70717676/123403044-a8507800-d5a8-11eb-9669-33148021b6fa.png)

通过使用您强加的这种结构，您可以使用面包屑路径来可视化返回到父笔记的路径。

# Juggl视图

[Juggl插件](https://juggl.io/)与Breadcrumbs紧密集成，例如可以自动添加到当前笔记的Juggl视图：

![](https://i.imgur.com/roOYVhl.png)

## 视频

### 截至2022-01-02的最新教程

[![image|100](https://user-images.githubusercontent.com/70717676/147882843-bbb28103-a3a4-4dfd-8077-d8a1524f86a3.png)](https://www.youtube.com/watch?v=N4QmszBRu9I&ab_channel=ObsidianCommunityTalks)

### 视频深入介绍了线程功能，由@blizzingout提供

http://youtube.com/watch?v=AS5Mv6YNmsQ

### 关于面包屑导航的第一个视频

[![image](https://user-images.githubusercontent.com/70717676/147882889-cc38e14a-555a-433e-b500-71f159d49354.png)](https://www.youtube.com/watch?v=DXXB7fHcArg)

喂养我的咖啡问题

如果你愿意的话，你可以在这里给我买杯咖啡：https://ko-fi.com/skepticmystic :)




---
uid: 2023080322171414
title: Obsidian 插件：【Readme】Dendron Tree
tags: ['obsidian插件', 'readme']
description: 为Dendron笔记添加树形结构以进行探索。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dendron Tree

> [!Note] 插件名片
> - 插件名称：Dendron Tree
> - 插件作者：Levi Rizki Saputra
> - 插件说明：为Dendron笔记添加树形结构以进行探索。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/levirs565/obsidian-dendron-tree)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dendron-tree)

## 概述

为Dendron笔记添加树形结构以进行探索。

![Dendron Tree](https://cdn.pkmer.cn/covers/dendron-tree.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/levirs565/obsidian-dendron-tree/master/README.md)
> 

---

## Readme(翻译）

下面是 [[dendron-tree]] 插件的自述翻译


# 黑曜石树状图

Obsidian Dendron Tree为[Dendron](https://www.dendron.so/)笔记添加了一棵树。功能包括：

![Dendron树状图](images/dendron-tree.png)

功能：

- Dendron树状图，使用树状图轻松浏览笔记
- 查找
- 在新文件上自动生成frontmatter
- 多个vault支持
- 自定义解析器和渲染器用于链接和嵌入

## 树状图

要查看树状图，您可以在应用程序的功能区中选择“打开树状图”。

带有橙色圆圈指示器的笔记
（![没有对应文件的笔记](images/note-without-file.png)）是一条没有对应文件的笔记。

要打开笔记文件，您可以在树状图中选择笔记名称。这也会展开树状图中的笔记。

要展开和折叠笔记，您可以在笔记左侧选择箭头（![笔记箭头](images/arrow.png)）。

您可以在桌面上右键单击笔记或在移动设备上长按笔记以打开笔记菜单。笔记菜单将包含以下项目：

- “创建当前笔记”。这将为所选笔记创建一个文件。仅当笔记没有对应文件时才显示此选项。
- “创建新笔记”。这将使用所选笔记的路径作为初始提示打开查找。您可以查看查找文档以了解如何使用它。
- “删除笔记”。这将删除所选笔记文件。仅当笔记有对应文件时才显示此选项。

## 查找

![查找笔记](images/lookup.png)

要查找一个笔记，您可以运行“Dendron Tree: 查找笔记”命令。通过这个命令，您可以打开和删除一个笔记。

![创建新笔记](images/lookup-new.png)

您可以通过输入一个不存在的 Dendron 路径来创建一个笔记。然后您将获得“创建新笔记”的选项。选择此选项以创建一个新的笔记。

![为无文件的笔记创建笔记文件](images/create-new-existing.png)

您还可以选择一个没有相应文件的笔记。当选择一个项目时，右侧会显示一个+图标，表示将创建一个新的笔记。

> 建议始终在查找模态框中输入 Dendron 路径。

多重保险库

您可以在插件设置中添加或删除保险库。您必须指定保险库的路径和名称。

自定义解析器和渲染器（默认禁用）

对于嵌入/引用，Dendron格式是Obsidian格式的扩展。您可以查看Dendron文档中关于[Note Reference]的内容。

Dendron和Obsidian在引用/嵌入和维基链接方面具有不同的格式和功能。启用此功能后，所有维基链接和嵌入都将强制使用Dendron格式进行渲染。这也会覆盖链接悬停功能。

以下是Dendron和Obsidian在维基链接方面的简要区别。

这是Obsidian维基链接的格式：

```
[[href|title]]
```

而Dendron维基链接的格式如下：

```
[[title|href]]
```

在Obsidian中，如果未指定维基链接的标题，则链接将用作标题。但是，在Dendron中，将使用笔记目标的标题作为标题。

在Dendron中，要定位到另一个vault中的笔记，我们必须使用特殊的语法，如下所示：

```
dendron://vault_name/note_path
```

对于嵌入/引用，Dendron格式是Obsidian格式的扩展。您可以查看Dendron文档中关于[Note Reference](https://wiki.dendron.so/notes/f1af56bb-db27-47ae-8406-61a98de6c78c)的内容。




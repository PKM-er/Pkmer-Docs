---
uid: 20240427142513
title: Obsidian 插件：可以实时编辑的选项卡组件 Tabs
tags: [obsidian, tabs, 插件, 组件]
description: 可以实时编辑的选项卡组件 Tabs
author: Huajin
type: other
draft: false
editable: false
modified: 20240427153534
---

# Obsidian 插件：可以实时编辑的选项卡组件 Tabs

## 概述

> [!Note] 插件名片
> - 插件名称：Tabs
> - 插件作者：Huajin
> - 插件说明：在笔记中快速创建一个选项卡组件 Tabs
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/xhuajin/obsidian-tabs/)

本插件基于 [[obsidian-code-tab|Code Tab]] 插件开发，但由于他很长一段时间没有更新，且不支持直接编辑内容，使得直接修改和添加新 tab 略有不便，因此我重写了插件，并添加了很多方便的功能。

如果要问这个插件有什么用，可以参考我写的另外两篇介绍 Code Tab 的文章：[[code-tab还能这么玩]]、[[obsidian-code-tab]]。如果 Tabs 对你有所帮助，可以在 [插件 Github 仓库](https://github.com/xhuajin/obsidian-tabs/) 给我点个 star。

## 功能介绍

实现了基础的 tab 切换功能，新增快速添加新 tab 按钮（右上角）

![tabs-1.png](https://cdn.pkmer.cn/images/tabs-1.png!pkmer)

新增实时编辑：双击内容进入编辑模式，可以直接修改 tab 的标题和内容，**编辑后需要点击右上角的保存按钮保存**

![editing.png](https://cdn.pkmer.cn/images/editing.png!pkmer)

新增了右键菜单，可以快速添加、删除、复制、粘贴

![tabs-delete.png](https://cdn.pkmer.cn/images/tabs-delete.png!pkmer)

## 使用方法

> 假定你已经安装好插件，并且在设置中启用了本插件。
> 关于如何安装插件，见 [[Obsidian社区插件的安装]]。由于本插件目前还在等待代码审查尚未上架，因此需要手动安装。

本插件是渲染了一个 tabs 代码块，因此所有的一切都以一个 tabs 代码块开始。我们需要在笔记中写一个 tabs 代码块

![image.png](https://cdn.pkmer.cn/images/20240427150336.png!pkmer)

开头和结尾的反引号（键盘左上角 Tab 按键上方的按键）的个数需要一致，且需要多于代码块中的其他代码块的反引号个数

![image.png](https://cdn.pkmer.cn/images/20240427152040.png!pkmer)

在代码块中，每个 tab: 到下一个 tab: 之间的内容为一个标签页，其中 tab: 这行的内容为这个标签页的标题，剩下的内容为标签页的正文。

比如上图中的源码在实时模式中会渲染成

![image.png](https://cdn.pkmer.cn/images/20240427152050.png!pkmer)

当然，你不必再编辑源码，创建好 tabs 代码块后就可以实时编辑了。

## 设置

插件目前只提供了一个设置，就是修改区分每个 tab 的分隔符，默认为 tab:。不妨试试用 ## 作为分隔符，这样就可以直接复制正文中的内容然后使用 Copy Tab 功能。

![image.png](https://cdn.pkmer.cn/images/20240427153126.png!pkmer)

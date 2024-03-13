---
uid: 2023080322253361
title: Obsidian 插件：Random To-Do
tags: ['任务管理', 'obsidian插件', 'readme']
description: 打开一个包含你自定义待办标记的随机文件，或者在其位置上随机标记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Random To-Do

> [!Note] 插件名片
> - 插件名称：Random To-Do
> - 插件作者：NatiAris
> - 插件说明：打开一个包含你自定义待办标记的随机文件，或者在其位置上随机标记。
> - 插件分类：[' 任务管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/NatiAris/obsidian-random-todo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-random-todo)

## 概述

打开一个包含你自定义待办标记的随机文件，或者在其位置上随机标记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/NatiAris/obsidian-random-todo/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-random-todo]] 插件的自述翻译

这是一个为 Obsidian（<https://obsidian.md>）开发的插件。

### 术语和定义

假设你在笔记中的可行动项附近留下了一个标记，比如 `todo`、`...`、`???` 等。
我们将这样的标记的单个实例称为**待办事项**。

这个插件做什么？

仅添加了三个功能：

1. 一个命令，打开一个至少包含一个*待办事项*的随机文件
2. 一个命令，在文件中的位置打开一个随机的*待办事项*
3. （可选）一个状态栏计数器

当你使用命令（1）时，所有*文件*的权重相等

当你使用命令（2）时，所有*事项*的权重相等

### 如何使用

1. **进入插件设置**并设置您的“todo”模式（使用 JavaScript 正则表达式格式）
2. **设置热键**用于“随机待办事项：文件”和“随机待办事项：项目”

默认模式是一个省略号，这是我使用的模式。

这个插件的作用是什么？

与 Open Random note 核心插件相同，但是使用这个插件，你只会进入那些有一些未完成的事务的文件中
使用核心插件时，我不得不多次重新掷骰子来跳过已完成/实现的笔记，因此开发了这个插件。

另请参阅

您可能还对 [Smart Random Note Plugin](https://github.com/erichalldev/obsidian-smart-random-note) 感兴趣
它具有类似的功能，但专注于不同的用例
如果您经常更改模式，它可能更适合

我希望有一种方法来最小化在我的用例中的点击次数，所以它并不完全符合我的需求
同时拥有两者也是一个选择

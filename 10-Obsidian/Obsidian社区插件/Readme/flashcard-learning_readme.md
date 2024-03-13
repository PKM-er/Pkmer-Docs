---
uid: 2023080322182624
title: Obsidian 插件：Flashcard Learning
tags: ['obsidian插件', 'readme']
description: 改进的闪卡学习系统。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Flashcard Learning

> [!Note] 插件名片
> - 插件名称：Flashcard Learning
> - 插件作者：Gaétan Muck
> - 插件说明：改进的闪卡学习系统。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gaetanmuck/obsidian-flashcard-learning)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?flashcard-learning)

## 概述

改进的闪卡学习系统。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gaetanmuck/obsidian-flashcard-learning/master/README.md)

---

## Readme(翻译）

下面是 [[flashcard-learning]] 插件的自述翻译

# 闪卡学习

## 主要特点（简短总结）

- 一天内可以进行多次复习
- 单个复习可以持续任意时间
- 可以为卡片设置预期的描述
- 越不熟悉的卡片出现的频率越低
- 每次复习都会出现不熟悉的卡片
- 每次复习后可以添加新的卡片
- 轻松创建卡片
- 手动创建卡片（为了提高效果）

功能的详细描述

### 评论持续时间

![评论持续时间](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/aa5b9edb-da0f-44d3-a182-5f6397b7c0a1)

一天内多次评论

评论的管理不是根据时间，而是根据评论的进展：如果评论很短，那么可以立即开始另一个评论。

#### 单个评论的持续时间

与之前描述的特性相反，即使 Obsidian 关闭，一个评论也可以永远持续下去，在加载评论时，评论会从上次停止的地方重新开始。

### 期望描述

问题

在学习事物时，人们可能需要多个关于某个事物的信息。

例如，当学习国家的主要城市时，可以从该国家期望获得多个信息。一种做法是为每个信息创建一张闪卡。

只关注其中的两个信息：从国家到其主要城市的信息，以及从国家到其人口规模的信息。

因此，当闪卡呈现国家名称时，预期的内容不清楚：另一面是什么？主要城市还是人口规模？

#### 解决方案

在这个插件中，有可能对答案进行提示（实际上更像是对期望答案的描述）。

这样当展示一个闪卡时，期望就很清楚了。如果描述设置正确，它可以双向工作！

### 学习

![学习](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/620629bb-08d9-431c-93b7-98c55d4632f2)

最为人熟知，却较少展示

当一个闪卡被正确回答时，它将会较少出现。而连续正确回答的次数越多，展示的稀有度就越高。

这是由卡片的级别来控制的。

比如一个级别为 8 的卡片被呈现并且被正确回答（所以级别增加到 9），这意味着这张卡片只会在当前回顾之后的第 9 次回顾中再次呈现。

相反，当一个闪卡被错误回答时，级别将被重置为 0，并在当前复习中再次呈现。由于在复习结束时级别将变为 1（否则无法完成复习），它将在下一次复习中再次呈现。

### 卡片创建

使用助手创建卡片

![使用助手创建卡片](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/2e319158-4eeb-48c6-b732-a5025ad59436)

可以使用命令“创建新的闪卡”来创建闪卡。

这将显示一个模态窗口，可以在其中设置信息，并在命令执行时在光标所在位置创建闪卡。

有可能帮助创建闪卡。

在您的 frontmatter YAML 中，可以设置属性以预填充模态窗口。

这些属性包括：`deck, side1, side1Desc, side2, side2Desc, level, nextReview`。

在创建时，插件还会检查是否设置了属性 `flashcard: true`。这告诉插件该文件中存在闪卡，并且需要解析它。如果找不到它，插件将创建它。

#### 手动创建卡片

![手动创建卡片](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/c61151db-5b1f-4aef-b6b6-8c005873a181)

一旦语法被理解，可以手动创建卡片（或通过脚本生成），并且插件将根据提供的信息对其进行处理。在这种情况下，还必须在 frontmatter YAML 中手动添加属性 `flashcard: true`。

#### 新卡片

在学习一个领域时，可能会有一些时候，创建新卡片的速度远远高于学习的速度，这可能会让人感到沮丧，因为有数百个东西要学习。甚至这可能会产生反作用，因为这些数百个新信息没有得到应有的间隔呈现。

为了解决这个问题，在创建时，将卡片设置为“新”，并不会添加到当前的复习中。

但是，在每次复习结束时，根据插件设置，会随机选择一定数量的新卡片添加到下一次复习中（从所有新卡片中随机选择）。

这样可以保持复习的规模在一个合理的范围内。

当手动创建卡片时，请不要忘记将级别设置为 -1 以启用此功能。

## 命令

该插件提供了两个输入：

    - 一个功能区图标，用于总结插件所知道的内容并启动（或恢复）复习

    - 一个可以在文件中执行的命令（建议在新行上！），以便轻松创建一个闪卡

![命令 - 模态框](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/acb3cb7f-212b-473b-a31c-3180c8327485)

![命令 - 功能区](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/589c5c71-b630-465d-b70c-15e1481bfe82)

主屏幕

更多详细信息请参见屏幕截图。

![主屏幕](https://github.com/gaetanmuck/obsidian-flashcard-learning/assets/26961057/12c94f0d-39c6-4a0f-90b6-0a482476a55c)

如果您觉得这个插件有价值并且想要表达支持，您可以 [给我买杯咖啡](https://www.buymeacoffee.com/gaetanmuck)，将不胜感激。

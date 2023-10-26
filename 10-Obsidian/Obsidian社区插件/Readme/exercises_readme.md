---
uid: 2023102611074748
title: Obsidian 插件：【Readme】Exercises
tags: ['obsidian插件', 'readme']
description: 在Obsidian笔记旁边创建交互式练习
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Exercises

> [!Note] 插件名片
> - 插件名称：Exercises
> - 插件作者：AlexCCavaco
> - 插件说明：在 Obsidian 笔记旁边创建交互式练习
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AlexCCavaco/obsidian-exercises)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?exercises)

## 概述

在 Obsidian 笔记旁边创建交互式练习

![Exercises](https://cdn.pkmer.cn/covers/exercises.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AlexCCavaco/obsidian-exercises/master/README.md)
>

---

## Readme(翻译）

下面是 [[exercises]] 插件的自述翻译

# Obsidian 练习

Obsidian 练习是一种在 Obsidian 中创建练习的简便方法。无论您是为考试做准备、学习一门语言、复习记忆，还是其他任何目的，您现在都可以在笔记旁边创建练习。

该插件使用块组件作为基础。在其中，您可以定义普通文本和下面的练习元素。示例：

> \```exercise
> <br/>$match{Ich=>I, Wie=>We, Er=>He, Es=>It, Sie=>She}
> <br/>\```

## 选择

![匹配练习](assets/select-exercise.gif)

**注意：**上面的图片中没有显示选项菜单。

>$select{"option1", "option2" [, …]}

从下拉列表中选择选项。选项之间用逗号分隔，但建议始终使用引号。对于包含空格的多个单词值，引号是必需的。选项在显示之前会被**随机排序**。

要定义**正确的选项**，只需在选项前面加上星号（例如：\*"option"）。

示例 - $select{"option1", \*"option2", "option3", "option4"}

在上面的示例中，有 4 个选项，选项 2 是正确的选项。

您可以定义**多个正确的选项**，它们都将被评估。在显示选项时，列表中的第一个选项将被显示。

## 输入

![匹配练习](assets/input-exercise.gif)

>$input{" 选项 1", " 选项 2" [, …]}

将文本输入到文本框中。选项会按照它们的书写顺序进行评估。您可以写入**一个或多个选项**，它们都会被评估，但只有第一个选项会在揭示时显示出来。

示例 — $input(" 正确的文本。")

在上面的示例中，正确的输入是 " 正确的文本。"。

## Line

>$line{"option1", "option2" [, …]}

Line 是 input 的一个更宽的版本。

## 匹配

![匹配练习](assets/match-exercise.gif)

>$match{"option1"=>"value1", "option2"=>"value2" [, …]}

从两列中匹配值。匹配使用 "=>" 进行定义，并用逗号分隔。这些值将在显示之前进行**随机化**。

---
uid: 20230803213109
title: Obsidian 插件：【Readme】Random Structural Diary
tags: ['日志类', 'obsidian插件', 'readme']
description: 这是一个插件，用于从预先准备的问题列表中随机选择问题。它允许您每次回答不同的问题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Random Structural Diary

> [!Note] 插件名片
> - 插件名称：Random Structural Diary
> - 插件作者：Timur Sidoriuk
> - 插件说明：这是一个插件，用于从预先准备的问题列表中随机选择问题。它允许您每次回答不同的问题。
> - 插件分类：['日志类', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ShockThunder/RandomStructuralDiary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?random-structural-diary-plugin)

## 概述

这是一个插件，用于从预先准备的问题列表中随机选择问题。它允许您每次回答不同的问题。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ShockThunder/RandomStructuralDiary/master/README.md)
> 

---

## Readme(翻译）

下面是 [[random-structural-diary-plugin]] 插件的自述翻译



随机结构日记问题
回答你日记中的随机问题以获得新的思考；
如果你没有问题列表，这个插件会使用一个准备好的问题列表。
这是问题列表 - https://zttl.wiki/Structural-diary-b5ecbe5e0dd643b1a868bd773b34094b

### 更新 1.1.0

现在插件默认从整个文件中选择问题的数量。

您可以在插件设置中更改此行为为旧样式。



您可以设置自己的问题，例如

```markdown

    #Section1

        Question1

        Question2

        Question3

    #Section2

        Question1

        Question2

        Question3

    #Section3

        Question1

        Question2

        Question3

```

并在插件设置中填写此文件名。

保持节标题为 # 标题非常重要。

问题也要用换行符 `\n` 分隔。因此，请逐行编写您的问题。



您还可以设置每个部分的问题数量。

使用模板

`sectionNumber-numberOfQuestions;sectionNumber-numberOfQuestions;`

例如 `1-3;2-2;4-0` - 它从第一部分选择三个问题，从第二部分选择两个问题，从第四部分选择零个问题；

如果省略部分，则问题数量随机选择（可能为0）；



要使用插件，请创建一个新文件并执行命令

`创建问题列表`

---



发布 1.1.2。

- 现在问题插入到光标位置。



发布 1.1.0。

- 添加全局问题选择功能



发布 1.0.6

- 添加对文件夹中的问题文件的支持

- 添加文件名的自动填充

- 添加显示或隐藏节标题的选项




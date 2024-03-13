---
uid: 2024022121201734
title: Obsidian 插件：【Readme】Object Writer
tags: ['obsidian插件', 'readme']
description: Utility for object writing with random words.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Object Writer

> [!Note] 插件名片
> - 插件名称：Object Writer
> - 插件作者：Iago Grah
> - 插件说明：Utility for object writing with random words.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/IagoGrah/obsidian-object-writer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?object-writer)

## 概述

Utility for object writing with random words.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/IagoGrah/obsidian-object-writer/master/README.md)

---

## Readme(翻译）

下面是 [[object-writer]] 插件的自述翻译

# **对象写作插件**

为 Obsidian.md 添加一个功能，可以在工具栏上添加一个按钮，用于创建一个快速的对象写作笔记，提供一个随机单词。

>_对象写作是一种写作练习，侧重于描述一个对象及其相关经验，利用所有感官。我最初是从杰出的歌词大师帕特·帕蒂森那里了解到对象写作的。_

我刚开始使用 Obsidian，想趁机重新开始对象写作，所以通过一点搜索，我弄清楚了如何制作一个插件。

最初我做了一个使用记事本的控制台应用程序来实现这个目的。[这是仓库](https://github.com/IagoGrah/ObjectWriter)。

### 它是如何工作的

+ 当您按下新的笔带图标时，将创建并打开一个新的笔记（类似于每日笔记），这个新的笔记将有一个随机单词。只需开始写作，就这么简单。
+ 新文件名将根据“笔记名称”设置进行格式化，您可以使用以下关键字：
  + {{date}}：当前日期，根据“日期格式”进行格式化。
  + {{time}}：当前时间，根据“时间格式”进行格式化。
  + {{object}}：随机单词，请确保包含此单词，否则您将不知道您的单词是什么。
  + _示例_：'{{date}} ({{object}})' -> '2023-12-09 (Word)'
+ 新文件的路径也可以通过设置进行更改。
+ 默认情况下，新笔记将具有“#ObjectWriter”标签，您可以通过设置禁用此功能。

---

不幸的是，与控制台版本不同，这个插件没有内置的计时器，因为我刚学会如何创建插件，并在几个小时内制作了这个。在某个时候，我可能会尝试实现它。

#### 我想要添加的一些东西

+ 计时器。
+ 使用模板来记录笔记的选项。
+ 自定义单词列表（例如，用于不同语言）。
+ **将其集成到每日笔记中而不是创建新笔记的选项。**

---

我为自己制作了这个，但我想没有理由不分享。用于选择单词的文件（**words.js**）并不是最好的，但它能完成工作。

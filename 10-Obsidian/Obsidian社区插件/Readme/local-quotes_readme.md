---
uid: 20230803204251
title: Obsidian 插件：【Readme】Local Quotes
tags: ['obsidian插件', 'readme']
description: 从整个存储库中收集您的引用，并在不同位置嵌入它们，并设置刷新延迟。
author: sundevista
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Local Quotes

> [!Note] 插件名片
> - 插件名称：Local Quotes
> - 插件作者：sundevista
> - 插件说明：从整个存储库中收集您的引用，并在不同位置嵌入它们，并设置刷新延迟。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/sundevista/local-quotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-quotes)

## 概述

从整个存储库中收集您的引用，并在不同位置嵌入它们，并设置刷新延迟。

![Local Quotes](https://cdn.pkmer.cn/covers/local-quotes_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sundevista/local-quotes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[local-quotes]] 插件的自述翻译


[文档](https://decatetsu.github.io/local-quotes/) / [路线图](https://github.com/users/decatetsu/projects/2/views/1)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/sundevista)
# 📜 本地引用

从保险库中收集您的引用，并将它们嵌入到不同的位置。

该插件允许您：

- 创建引用列表
- 按任意间隔（分钟、天、周、月）更新您的引用
- 为每个引用应用自定义类
- 选择您自己的引用格式
- 使用刷新按钮立即获取新内容
- 观看并实时查看您的引用如何更新

![演示](https://github.com/decatetsu/local-quotes/raw/master/assets/demo.gif)

## 🎯 目的

我创建这个插件的初衷只有一个——我想在我的索引笔记中看到每天自动刷新的引用。我有很多自己写的引用，所以我想要一个可以创建引用列表并以指定的时间间隔插入它们的插件，从秒到年。

## 🗒️ 引用清单

这是一个收集你的引用的简单方法。只需用`:::`将引用的作者姓名括起来，然后使用列表（无序/有序，使用`-`或`1.`）开始写下引用。重要的是逐行写下引用，因为当出现空行时，你的引用系列就会中断。此外，你的笔记必须有`quotes`标签（可以在设置中更改）。

访问页面[引用清单](https://decatetsu.github.io/local-quotes/terms/quote-listings/)了解更多详情。

## ⚒️ 引用制作工具

创建引用块的最简单方法是使用“引用制作工具”模态框。您可以使用“打开引用制作工具”命令来召唤它。然后只需按照说明操作，点击“插入引用”按钮。然后，您的引用块将被插入到光标位置（请记住，您需要处于**编辑**模式）。

![modal](https://github.com/decatetsu/local-quotes/raw/master/assets/modal.gif)

## ✍️ 自己制作引用块

插件使用代码块和特殊的代码块语言（`localquote`）来表示您的引用块。有一些设置可以让您配置引用块：

- `id`（必需）- 用于引用标识的任何字符串或数字（`1`，`d2f`，`my-quote1`）。
- `search`（必需）- 搜索查询，可以只是作者的姓名，但您也可以使用[一些运算符](https://decatetsu.github.io/local-quotes/terms/search/)。
- `refresh`（可选）- 刷新间隔，当此时间过去时，插件将使用另一个随机引用更新引用文本（`1m`，`2d`，`30s`，[更多示例](#-refresh-intervals)）。
- `customClass`（可选）- 可以添加到父div的类。

```` 
```localquote
id 1
search Kamina, TTGL
refresh 1d
customClass my-quote-class
```
````

### 🔃 刷新间隔

`refresh` 属性使用类似 moment.js 的自定义语法。以下是所有可能的变体（区分大小写）：

- `10s` - 等于 10 秒
- `10m` - 等于 10 分钟
- `10h` - 等于 10 小时
- `2d` - 等于 2 天
- `2w` - 等于 2 周
- `2M` - 等于 2 个月
- `1y` - 等于 1 年

## 🗓 一次性引用

你想要看到只创建一次的引用吗，比如在日记中？有一个简单的解决方案——**一次性引用**！只需在插件的设置中设置`模板文件夹`，并使用特殊的代码块语言。当笔记放在模板文件夹中时，引用不会被渲染。但是当它在模板文件夹之外时，打开笔记时它会立即渲染，并且以后不会再改变。完全是一次性的。

这个功能附带了一个特殊的模态框`一次性引用制作器`。

请查看[此页面](https://decatetsu.github.io/local-quotes/block-types/one-time-quote-block/)以获取更详细的信息。

```` 
```localquote-once
search Kamina, TTGL
```
````

## 📉 统计数据

您可以从本地报价中获取一些信息。使用“打开统计数据”命令进行研究。

### 另外一些有用的功能

- `刷新活动文件的本地引用` 命令
- 在 `Style Settings` 插件中，可以调整刷新按钮的圆角、大小和内边距

## ⏫ 未来更新

您可以在[此处](https://github.com/users/decatetsu/projects/2/views/1)查看我目前正在进行的工作。如果您希望某个功能首先完成，可以在该功能的问题中提出。我会注意到的。此外，您可以在[CHANGELOG](CHANGELOG.md)中查看尚未发布但已经完成的功能和更改，它们将在下一个版本中提供。

## ℹ️ 帮助

如果您有任何问题、功能想法或者发现了一个错误，您可以创建一个[Issue](https://github.com/decatetsu/local-quotes/issues)并与我讨论。我是初学者，如果您有更多经验，您也可以进行[Pull Request](https://github.com/decatetsu/local-quotes/pulls)。




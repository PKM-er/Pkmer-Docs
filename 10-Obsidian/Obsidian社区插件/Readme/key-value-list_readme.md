---
uid: 2024022117285483
title: Obsidian 插件：【Readme】Key-Value List
tags: ['obsidian插件', 'readme']
description: 使得将列表转换为整洁格式的键值对列表变得容易。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Key-Value List

> [!Note] 插件名片
> - 插件名称：Key-Value List
> - 插件作者：Christian Wannerstedt
> - 插件说明：使得将列表转换为整洁格式的键值对列表变得容易。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/christianwannerstedt/obsidian-key-value-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?key-value-list)

## 概述

使得将列表转换为整洁格式的键值对列表变得容易。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/christianwannerstedt/obsidian-key-value-list/main/README.md)

---

## Readme(翻译）

下面是 [[key-value-list]] 插件的自述翻译

【机翻】

# 键 - 值列表 - Obsidian 插件

这个插件为 [Obsidian](https://obsidian.md/) 提供了创建格式化键 - 值列表的便利。

## 什么是键 - 值列表？

一个键 - 值列表基本上是一个包含多行键值对的列表。这些在各种不同的上下文中都可以很有用，特别是当需要用一系列不同的属性来描述某些东西时。这个插件的想法是给这样的列表一些额外的格式，而无需任何额外的输入或自定义。

要创建一个键值列表，你只需要确保列表行包含一个特定的分隔符。这个插件中使用的默认分隔符是 `:`。所以，举个例子，一个简单的列表可能是这样的：

```
- 名字：唐纳德
- 姓氏：鸭
- 性别：男
```

这个插件将自动识别这些列表并应用一些基本的格式：

- 键节点的固定宽度，以便值都能正确对齐。宽度将针对每个列表单独计算，以确保以最佳方式显示。
- 对列表中的每一行应用背景颜色，以便更容易阅读。

## 预览

这里是插件在操作中的简要演示::

![key-value-demo](https://cdn.pkmer.cn/covers/key-value-list_1_0.gif!pkmer)

如果值（或键）太长无法放在同一行上，它将被正确地换行到下一行。

![键-值列表预览](https://cdn.pkmer.cn/covers/key-value-list_1_1.png!pkmer)

可以在键和值部分中使用其他格式，例如粗体文本、链接、标签等。

## 自定义

即使插件不需要任何自定义，您也可以通过一些可用的设置微调它。从插件设置页面，可以更改触发符号、分隔符、外观等。

![设置预览](https://cdn.pkmer.cn/covers/key-value-list_1_2.png!pkmer)

## 注意事项

为了使列表被此插件视为键值列表，每一行都必须包含一个键值对。如果一个或多个行不包含键值对，该列表将被插件忽略。

在编辑列表后，可能会出现一个渲染延迟，直到背景宽度正确设置为列表。

## 安装

### 手动安装

将 [最新版本](https://github.com/christianwannerstedt/obsidian-key-value-list/releases/latest) 解压到您的 `<vault>/.obsidian/plugins/` 文件夹中。

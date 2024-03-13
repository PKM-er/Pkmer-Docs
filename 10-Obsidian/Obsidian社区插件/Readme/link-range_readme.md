---
uid: 2023080322213040
title: Obsidian 插件：Link Range
tags: ['obsidian插件', 'readme']
description: 这个 Obsidian 插件为 Obsidian 带来了范围内的 wiki-link 支持。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Link Range

> [!Note] 插件名片
> - 插件名称：Link Range
> - 插件作者：Ryan Mellmer
> - 插件说明：这个 Obsidian 插件为 Obsidian 带来了范围内的 wiki-link 支持。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rmellmer/obsidian-link-range)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-range)

## 概述

这个 Obsidian 插件为 Obsidian 带来了范围内的 wiki-link 支持。

![Link Range](https://cdn.pkmer.cn/covers/link-range.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rmellmer/obsidian-link-range/master/README.md)

---

## Readme(翻译）

下面是 [[link-range]] 插件的自述翻译

# Obsidian 链接范围

![Obsidian链接范围标志](https://user-images.githubusercontent.com/23059902/225677761-c36b01a6-6194-4d83-a130-a1d7561b8359.png)

该插件在保留本地反向链接功能的同时，将维基链接头范围查询引入到 Obsidian 中。支持标准维基链接、悬停预览和嵌入内容维基链接。

![演示](./docs/demo.gif)

## 用法

要使用，只需使用与 Obsidian 中习惯的相同的维基链接语法，但是不再指定单个标题，而是可以指定由分隔符字符串分隔的标题范围。

例如，如果我想要在名为“Recipe”的笔记中链接到“Ingredients”到“Directions”之间的标题，我可以创建以下链接：

`[[Recipe#Ingredients..Directions]]`

## 设置

| 设置项 | 描述 | 默认值 |

| ------------------------------------------- | ------ | ------ |

| 标题分隔符 | 定义用于定义链接标题范围的分隔符。例如，在示例中，这是 `[[Note 1#h1..h2]]` 中的 "..". | `..` |

| 替代文本格式 | 在阅读模式下显示的替代文本格式。使用 $note作为笔记名称占位符，使用$h1/$h2作为标题占位符。 | `$note:$h1-$h2` |

| 结束包含 | 当打开时，显示第二个标题和其后的内容（直到笔记中的下一个标题）。 | true |

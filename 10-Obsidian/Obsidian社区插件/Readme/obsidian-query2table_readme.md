---
uid: 20231220112631
title: Obsidian 插件：【Readme】query2table
tags: ['界面相关', '搜索/排序', 'obsidian插件', 'readme']
description: 将查询返回的文件表示为其YAML前言的表格
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】query2table

> [!Note] 插件名片
> - 插件名称：query2table
> - 插件作者：avirut
> - 插件说明：将查询返回的文件表示为其 YAML 前言的表格
> - 插件分类：[' 界面相关 ', ' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/avirut/obsidian-query2table)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-query2table)

## 概述

将查询返回的文件表示为其 YAML 前言的表格

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/avirut/obsidian-query2table/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-query2table]] 插件的自述翻译

# 已归档

这个插件是一个临时解决方案，现在已经有了更好的解决方案，即 [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview)。将来，我可能会 fork Obsidian Dataview，以满足我想要的渲染功能，同时保持其更优秀的查询处理程序。然而，这个插件将不再接收任何更新。

# obsidian-query2table

将查询返回的文件表示为它们的 YAML 前置元数据的表格

免责声明

在使用过程中，此插件*将*覆盖您的搜索窗格 - 这是运行查询所必需的。您也将无法在同一文件中运行两个查询块。

此外，我实际上没有在除了我自己的保险库之外的任何地方对此插件进行过测试，很可能存在许多地方缺少对 `null` 或 `undefined` 值的适当检查。因此，您可能会在早期遇到重大错误。当发生这种情况时，请打开 DevTools（`ctrl/cmd + shift + i`），保存控制台错误输出，并通过此存储库的 `Issues` 选项卡报告问题。此插件*不应*删除您的文件或其他任何内容，但偶尔可能无法按预期工作。

## 从查询生成表格

该插件允许您将查询结果输出为可搜索、可排序的表格，其中包含相关笔记的前置属性。

![示例代码块](https://cdn.pkmer.cn/covers/obsidian-query2table_1_0.png!pkmer)

## 用法

在您的 `query2table` 代码块中，指定属性 `query`、`fields` 和 `approxNumberOfResults`。

### 查询

一个字符串（用 `""` 或 `''` 括起来），表示你要搜索的内容。这与使用内置的文件搜索时的格式相同（因为插件实际上使用的就是内置的文件搜索）。

### 字段

一个 YAML 前置属性的列表，以及它们对应的“类型”。可用的类型有：

- `note` - 文本将与前置属性相同，但此列将链接到实际笔记所指的位置。无论这个属性所指的前置值是什么（不能是 `null` 或 `undefined`），否则该文件的行将不会显示。
- `link` - 表格对长链接的处理效果不佳（它们占用了很多宽度），因此使用此属性将其替换为具有超链接的单词“Link”，该超链接指向前置属性中指定的链接。
- `text-as-link` - 这个类型使用前置属性的原始文本，但也将其作为链接。如果在点击链接之前看到实际链接对你来说非常重要，那么这个类型可能更好。
- `list` - 用于文本数组的前置属性 - 表格中的值将显示为带有项目符号的列表。

如果您对字段类型有任何好的想法，请随时提出问题，我会在有机会时进行处理。

由于 Obsidian API 的限制，使得这个插件的查询部分工作的唯一方法是通过 UI 运行查询，然后提取返回的文件。这意味着每当 `query2table` 代码块被渲染时，您也会在 UI 中看到搜索正在运行。然而，搜索运行和文件输出之间存在一定的延迟。如果这个延迟太短，您可能无法将所有文件放入表格中。根据需要调整 `approxNumberOfResults` 以确保您在不等待太长时间的情况下获取所有文件。

## 示例输出

### 完整结果

![完整结果](https://cdn.pkmer.cn/covers/obsidian-query2table_1_1.png!pkmer)

### 搜索和排序

![搜索和排序](https://cdn.pkmer.cn/covers/obsidian-query2table_1_2.png!pkmer)

## 鸣谢

该插件的许多代码/结构来自于 [obsidian-charts](https://github.com/phibr0/obsidian-charts) 和 [obsidian-text-expand](https://github.com/mrjackphil/obsidian-text-expand)。同时，感谢 Liam 和 Licat 在 Discord 的#plugins 频道中经常提供的帮助！

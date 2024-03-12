---
uid: 20240312193744
title: Obsidian 插件：【Readme】Filtered Opener
tags: ['obsidian插件', 'readme']
description: 打开笔记和文件夹，从由过滤器定义的集合中选择。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Filtered Opener

> [!Note] 插件名片
> - 插件名称：Filtered Opener
> - 插件作者：Roman Kubiv
> - 插件说明：打开笔记和文件夹，从由过滤器定义的集合中选择。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Balibaloo/obsidian-picker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?filtered-opener)

## 概述

打开笔记和文件夹，从由过滤器定义的集合中选择。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Balibaloo/obsidian-filtered-opener/master/README.md)

---

## Readme(翻译）

下面是 [[filtered-opener]] 插件的自述翻译

由过滤器定义的打开笔记的笔记集。

这个 [Obsidian](https://obsidian.md) 插件适合你吗？[如果应该使用这个插件](#you-should-use-this-plugin-if)

要打开一个笔记，请使用“选择笔记”命令。

<img src="assets/cover.gif" width=800px>

如果您有多个笔记过滤器集，则将提示您选择一个。

<img src="assets/new_set.gif" width=800px>

## 过滤器集

过滤器集可以在此插件的设置中创建、删除和配置。

所有过滤器都支持使用 [特殊字符](#special-characters) 和正则表达式。

### 正则表达式

所有输入都支持正则表达式。

任何匹配此格式 (`/^\/(.*)\/([gimuy]*)$/`) 的输入将被视为正则表达式。

### 打开笔记命令

创建笔记过滤器集时，会创建一个从该集中打开笔记的命令。

在过滤器集名称中使用 [特殊字符](#special-characters) 时，一些过滤器集的命令可能会合并并被覆盖。

Obsidian 要求命令名称进行规范化。

规范化过程后，一些名称可能会变成相同的。

例如，集名称 `tasks ✅` 和 `tasks 👔` 在移除表情符号后将变成相同的名称。

当为这两个集创建命令时，第二个集的命令将覆盖第一个集的命令。

## 选择器

选择器显示一个可供选择的项目列表。

有多种类型的选择器，它们以不同的方式显示项目。

主要区别在于它们以不同文件夹中的项目的方式显示。

### 扁平选择器

扁平选择器会“扁平化”所有笔记的文件夹。

如果一个笔记过滤器集匹配包含“🏗”表情符号的项目：

<img src="assets/folder_structure.png" width=300px>

扁平选择器会像这样显示这些笔记：

<img src="assets/flat-picker.png" width=700px>

它会显示每个笔记的第一个不同的文件夹和笔记名称。

如果一个过滤器集只有一个项目，那么该项目将被自动选择。

### 递归选择器

递归选择器一次遍历一个级别的文件夹。

如果一个笔记过滤器集匹配包含 "✅" 表情符号的项目：

<img src="assets/folder_structure.png" width=300px>

递归选择器将首先显示文件夹如下：

<img src="assets/recursive-1.png" width=700px>

如果您选择 "👔 工作类别 "，它将递归并显示文件夹内的笔记：

<img src="assets/recursive-2.png" width=700px>

如果任何文件夹内只有一个项目，则该项目将自动被选中。

## 特殊字符

此插件中的所有输入都支持特殊字符，但在某些情况下可能会引起问题。

这些字符包括：

- 标点符号 `!@+/`
- 表情 😎
- 其他 Unicode 字符

注意：当使用 Unicode 字符（如表情符号）时，具有不同字符代码的不同字符可能看起来相同。

这可能会导致在其他插件中按名称引用过滤器集时出现问题。

要解决此问题，请尝试复制并粘贴集的名称，以确保字符完全相同。

# 如果您想要从一组笔记中打开笔记

# 如果您想要定义多组笔记

# 如果您想要通过它们的

	# 文件名
	# 路径名
	# [ ] 标签

# 如果您想要使用正则表达式来匹配属性以定义组

# 如果您想要使用分配的快捷键打开来自不同组的笔记

## API

此插件具有一个 API，可用于开发其他插件。

它公开了以下功能：

- 获取过滤器集中笔记和文件夹的路径
	- 过滤器集通过名称引用
- 创建设置界面元素以输入和维护过滤器集

API 的核心是为 [本地模板配置插件](https://github.com/Balibaloo/obsidian-local-template-configuration) 开发的，后来扩展到包括创建设置元素。

# 归属

该存储库使用了以下项目的代码：

- <https://github.com/chhoumann/quickadd>

代码贡献也放置在代码上方的注释中。

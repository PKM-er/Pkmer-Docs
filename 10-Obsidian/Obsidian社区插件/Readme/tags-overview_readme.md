---
uid: 2023102611083698
title: Obsidian 插件：【Readme】Tags Overview
tags: ['obsidian插件', 'readme']
description: 添加了一个扩展标签面板，可以简单地查看、过滤和访问已标记的文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tags Overview

> [!Note] 插件名片
> - 插件名称：Tags Overview
> - 插件作者：Christian Wannerstedt
> - 插件说明：添加了一个扩展标签面板，可以简单地查看、过滤和访问已标记的文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/christianwannerstedt/obsidian-tags-overview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tags-overview)

## 概述

添加了一个扩展标签面板，可以简单地查看、过滤和访问已标记的文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/christianwannerstedt/obsidian-tags-overview/main/README.md)

---

## Readme(翻译）

下面是 [[tags-overview]] 插件的自述翻译

# 标签概览 - Obsidian 插件

这个插件为 [Obsidian](https://obsidian.md/) 添加了一个扩展的标签面板，可以方便地概览、过滤和访问已标记的文件。

## 特点

- 直接显示标记的文件。
- 在列表和表格视图之间切换。
- 用户友好的筛选字段。
- 额外的排序选项。
- 显示相关标签（更多信息请参见下文）。

### 相关标签

当你通过搜索筛选标签列表时，你可以选择显示相关标签。默认情况下，列表只包括在搜索中包含的标签，但是通过显示相关标签，搜索结果中也会包括文件中包含的标签。这个设置只影响搜索结果中出现的标签，而不影响文件。

例如：

如果一个文件包含标签 `#vehicle` 和 `#car`，那么搜索 `#vehicle` 将在结果中显示这两个标签。然而，只包含 `#car` 标签的文件将不会出现在列表中。

![related-tags](https://github.com/christianwannerstedt/obsidian-tags-overview/assets/25314/9ed3edd0-b6a3-4669-aec1-6bc9158d93ad)

### 嵌套标签

该插件支持 [嵌套标签](https://help.obsidian.md/Editing+and+formatting/Tags#Nested+tags)，并提供将嵌套标签显示为树形结构或平面列表的选项。您可以通过点击旁边的箭头来选择展开或折叠每个嵌套级别。

### 不同的视图

选择表格视图或更简约的列表视图。表格视图将显示文件上次修改的日期。可以在插件设置中更改日期的格式。

![display-types](https://github.com/christianwannerstedt/obsidian-tags-overview/assets/25314/bc677992-f1e9-4eb3-93bb-59955aee7120)

### 过滤器

通过在下拉菜单中选择一个或多个标签，可以轻松地对列表进行过滤。您可以选择结果是否必须匹配所有搜索条件（AND）或只需匹配其中任何一个（OR）。还可以通过在结果列表中按住 ctrl/cmd 键并单击标签来切换搜索中的标签。

安装

### 手动安装

将 [最新版本](https://github.com/christianwannerstedt/obsidian-tags-overview/releases/latest) 解压到您的 `<vault>/.obsidian/plugins/` 文件夹中。

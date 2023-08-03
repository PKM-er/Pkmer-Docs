---
uid: 2023080322194824
title: Obsidian 插件：【Readme】Home tab
tags: ['obsidian插件', 'readme']
description: 一个类似浏览器的搜索标签，用于搜索您的本地文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Home tab

> [!Note] 插件名片
> - 插件名称：Home tab
> - 插件作者：Renso
> - 插件说明：一个类似浏览器的搜索标签，用于搜索您的本地文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/olrenso/obsidian-home-tab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?home-tab)

## 概述

一个类似浏览器的搜索标签，用于搜索您的本地文件。

![Home tab](https://cdn.pkmer.cn/covers/home-tab.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/olrenso/obsidian-home-tab/main/README.md)
> 

---

## Readme(翻译）

下面是 [[home-tab]] 插件的自述翻译


Obsidian Home tab是一个[Obsidian](https://obsidian.md/)插件，它添加了一个类似浏览器的默认主页新标签，包含一个搜索栏和一个星标文件的网格。

您可以搜索您的vault中的任何本地文件，包括markdown笔记和附件。

![](images/home-tab.png)

该插件并不意味着取代默认的快速切换器或任何其他替代品，比如[Another quick switcher](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher)（我从中获得了灵感），而是在打开新标签后更快地打开笔记或文件的方式。

如何使用
默认情况下，每个新的空标签页都会自动替换为主页标签页视图。您可以在设置中禁用此行为，并通过命令面板使用命令“主页标签页：打开新的主页标签页”或“主页标签页：替换当前标签页”手动打开新的主页标签页。

## 特点

### 按文件类型或扩展名筛选搜索结果
为了方便地找到文件，您可以使用文件类型或文件扩展名的筛选器来筛选搜索结果。

您可以通过输入筛选器关键字（参见下表）并按下Tab键来激活筛选器。要删除筛选器，请按下退格键。

![](images/search_filters.png)

#### 过滤器键
以下过滤器可用：

| 文件类型 | 文件扩展名 | 
| :-: | :-: | 
| `markdown` | `md`|
| `image` | `png`，`jpg`，`jpeg`，`svg`，`gif`，`bmp` | 
| `video` | `mp4`，`webm`，`ogv`，`mov`，`mkv` |
| `audio` | `mp3`，`wav`，`m4a`，`ogg`，`3gp`，`flac` |
| `pdf` | `pdf` |  

![](images/filters_gif.gif)

### 嵌入式搜索栏
您可以在任何笔记中嵌入主页选项卡视图，并选择显示最近文件、标记文件或仅显示搜索栏的选项。

要将搜索栏嵌入到笔记中，您需要创建一个 `search-bar` 代码块（请参考以下示例）。

要仅显示搜索栏，而不显示标题和标志/图标，请在新行中添加 `only search bar`。
要显示标记的和最近的文件，请分别添加 `show starred files` 和 `show recent files`。

例如，以下代码块将呈现搜索栏和标记的文件。
````text
```search-bar
only search bar
show starred files
```
````

![](images/embedded_searchbar.png)

### 星标文件
如果启用，星标文件将自动显示在搜索栏下方。

通过悬停在右上角，您可以取消星标文件或更改显示的图标。

![](images/starred_files-options.png)

## 设置

![](images/settings-tab.png)

---

已知问题
该插件可能无法与其他将新标签页替换为自定义视图的插件配合使用（或干扰），例如[Obsidian-Surfing](https://github.com/PKM-er/Obsidian-Surfing)插件。

# 如何安装
该插件可以直接从[Obsidian插件浏览器](https://obsidian.md/plugins?id=home-tab)中获取。
或者，您可以使用以下链接通过[BRAT](https://github.com/TfTHacker/obsidian42-brat)进行安装：`https://github.com/olrenso/Obsidian-home-tab` 或 `olrenso/Obsidian-home-tab`。




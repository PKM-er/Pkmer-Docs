---
uid: 20230803212425
title: Obsidian 插件：【Readme】Folder Index
tags: ['obsidian插件', 'readme']
description: 文件夹的自动MOC
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Folder Index

> [!Note] 插件名片
> - 插件名称：Folder Index
> - 插件作者：turulix
> - 插件说明：文件夹的自动MOC
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/turulix/obsidian-folder-index)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-folder-index)

## 概述

文件夹的自动MOC



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/turulix/obsidian-folder-index/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-folder-index]] 插件的自述翻译



# Obsidian文件夹索引

![最新版本](https://img.shields.io/github/v/release/turulix/obsidian-folder-index?sort=semver)
![GitHub下载量](https://img.shields.io/github/downloads/turulix/obsidian-folder-index/total)
![构建状态](https://img.shields.io/github/actions/workflow/status/turulix/obsidian-folder-index/release.yml)
![GitHub星标数](https://img.shields.io/github/stars/turulix/obsidian-folder-index?style=social)

## 特点

- 自动生成索引文件
- 自动重命名索引文件（如果您重命名文件夹）
- 自动链接文件夹中的文件
- 文件按字母顺序排序
- 标题按字母顺序排序
- 重写的图形视图以显示文件夹结构，并相应地链接它们
- 支持[文件树替代插件](https://github.com/ozntel/file-tree-alternative)（我强烈推荐使用此插件）

如何使用

非常简单。您只需像安装其他插件一样安装该插件。安装完成后，您可以单击任何文件夹以打开其索引文件，如果不存在索引文件，则会自动生成一个（您应该确保查看设置并切换您喜欢的功能）。

从现在开始，您应该能够像使用普通笔记一样使用文件夹！

文件夹还将默认添加到图形视图中，并链接其中包含的所有文件:D

#### 手动索引

您还可以直接使用``folder-index-content``块处理器，如下所示：

````
```folder-index-content
```
````

以在任何您想要的笔记中包含文件夹索引的内容

#### 前言

| 键    | 描述                                             |
|-------|-------------------------------------------------|
| title | 这将覆盖索引中的文件名                           |

### 手动安装

1. 前往[Releases](https://github.com/turulix/obsidian-folder-index/releases)下载最新版本的ZIP文件。
2. 将该ZIP文件解压到Obsidian插件文件夹中。如果您不知道该文件夹的位置，可以在Obsidian中进入`Community Plugins`。在`Installed Plugins`右侧有一个文件夹图标。点击它，它会打开您的插件文件夹。
3. 将ZIP文件的内容解压到该文件夹中。
4. 现在，您应该在插件文件夹中有一个名为'obsidian-folder-index'的文件夹，其中包含一个`main.js`文件、一个`manifest.json`文件和一个`styles.css`文件。

### 捐赠

如果你喜欢这个插件并想要支持我，考虑给我买杯咖啡吧 :D
在开发过程中已经花了太多钱买咖啡了 :P
[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/turulix)




---
uid: 20230508163524
title: Obsidian 插件：TagFolder 通过标签方式组织管理笔记
tags: []
description: Obsidian 插件：TagFolder 通过标签方式组织管理笔记
author: 
type: other
draft: false
editable: false
modified: 20230515233929
---

# Obsidian 插件：TagFolder 通过标签方式组织管理笔记

## 概述

一版情况下我们是通过文件夹和文件来形成组织形式，日常工作，记录笔记，大多数情概况都是如此。但这种情况下对于跨标签存在的文件，无法形成一个完整的整体。

比如某个 Obsidian 插件既是图片管理工具下的，又是插件下的。

TagFolder 就是通过笔记中的标签，重新组织所有的笔记。

> [!Note] 插件名片
> - 插件名称：TagFolder
> - 插件作者：vorotamoroz
> - 插件说明：通过笔记中的标签，重新组织所有的笔记
> - 插件项目地址：[点我跳转](https://github.com/vrtmrz/obsidian-tagfolder)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230508164548.png!pkmer)

## 使用

 - `Ctrl/Cmd+P` 找到 Show Tag Folder，可以打开对应管理面板。

![image.png](https://cdn.pkmer.cn/images/20230508171215.png!pkmer)

### 如何理解 tag 管理

比如下面食物的例子，可以将 Apple、Pear、Tuna 理解成三个具体的笔记，每个笔记包含若干标签，且这些标签，存在共同项。

```
Apple : #food #red #sweet
Pear : #food #green #sweet
Tuna : #food #red
```

那么使用插件管理后，形成的文件夹结构就是：

![image.png](https://cdn.pkmer.cn/images/20230508171457.png!pkmer)

> [!Tip] 注意
> - 笔记中是否包含标签（tag）都可以插件组织管理，不包含标签的笔记，会被分类到 `untagged` 分类下。

### 标签排序

支持按照标签排序，也支持针对标签下具体笔记排列顺序的更改。可以理解成（标签）文件夹和具体笔记之间

- 支持按照（标签）文件夹排序
	- （标签）文件夹，按标签名称正序排列
	- （标签）文件夹，按标签名称倒序排列
	- （标签）文件夹，按标签统计数量从多到少
	- （标签）文件夹，按标签统计数量从少到多
- 支持按照项目排序
	- 按照笔记名称正序、倒序排列
	- 按照笔记创建时间正序、倒序排列
	- 按照笔记修改时间正序、倒序排列
	- 按照笔记的路径的正序、倒序排列

### 嵌套标签层级

因为标签会出现循环嵌套的情况，所以允许控制嵌套最多展示的层级。从只嵌套 1 层 -4 层，以及无限制多个选项。

### 搜索标签

除了单个搜索标签外，还可以使用过滤器，比如找到 食物中甜的或者食物中红色的

```
sweet -red | food -sweet
```

### 虚拟标签

启用此功能时，笔记将自动标记的时效性排序。

| Icon     | Edited ...            |
|----------|-----------------------|
| 🕐       | Within an hour        |
| 📖       | Within 6 hours        |
| 📗       | Within 3 days         |
| 📚       | Within 7 days         |
| 🗄       | Older than 7 days ago |

### 设置

- Behavior：通用设置
	- Always Open：当 Obsidian 自动启动时打开到（标签）文件夹，而不是默认的文件管理器
	- Use pinning：启用此选项，可以固定标签。固定标签的信息将保存在仓库的 `pininfo` 文件中
	- Disable narrowing down：TagFolder 通过收集同一笔记中使用的标签组合来创建文件夹结构，使我们更容易找到笔记。当启用此功能时，收集的组合将不再是结构化的，而是单纯罗列标签文件夹，并将包含整个标签的笔记聚合起来。
- Files
	- Display Method：控制具体笔记的展示样式。
		- Name：仅显示笔记名称
		- PATH/Name：路径 + 笔记名称
		- Name/PATH：笔记名称 + 路径
	- Order method：排序
		- Displaying name
		- Filename
		- Modified time
		- Fullpath of the file
	- Use title： 启用此选项，目录树中的笔记名称，将使用第一级标题，而不是文件名。
- Tags
	- Filename
	- Count of items
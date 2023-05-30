---
uid: 20230508163524
title: Obsidian 插件：TagFolder 通过标签方式组织管理笔记
tags: []
description: Obsidian 插件：TagFolder 通过标签方式组织管理笔记
author: OS
type: other
draft: false
editable: false
modified: 20230530225837
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

>[!Tip] 关联推荐
> - [[file-tree-alternative]]：提供了一个全新的增强型文件管理器
> - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
> - [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
> - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
> - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
> - [[recent-files-obsidian]]：显示最近打开的文件列表
> - [[obsidian-gallery]]：让你的笔记变成画廊
> - [[tag-wrangler]]：增强的标签管理体验，从标签面板中重命名、合并、切换和搜索标签面面俱到
> - [[obsidian-frontmatter-tag-suggest]]：很好解决记忆标签和快速输入的问题，提供标签自动建议的方法，让你可以键入简单字母来快速联想出来对应的标签
---
uid: 20230329145808
title: Obsidian 插件：Projects
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230401230257
public: yes
---

# Obsidian 插件：Projects

## 概述

![[Pasted image 20230128142950.png]]

Obsidian Projects 插件是一款项目管理插件，由于支持多种视图模式，所以你也可以把他当作一个文档陈列，或者书籍陈列架使用。

> [!插件名片]
> - 插件名称：Projects
> - 插件作者：Marcus Olsson
> - 插件说明：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
> - 插件项目地址：[点我跳转](https://github.com/marcusolsson/obsidian-projects)

## 效果&特性

提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Projects
3. 安装
4. 开启插件

## 设置

Obsidian Projects 的使用步骤相当简单，在安装后你只需要在左侧栏点击 Projects 的图标、在命令中输出 Show Projects 就可以打开对应的窗口。或者你也可以直接在文件夹上右键点击  `Create project in folder`  来创建新的 Project。

初次打开 Projects 现在应该已经提示你可以选择一个文件夹，或者尝试使用 Projects 内置的 Demo Projects，打开后可以看到以下的界面

![[Pasted image 20230128143144.png]]

在 Obsidian 插件窗口中你可以看到以下的一些配置项：

1、你的 Project 命名，会显示在你选择不同的 Project 时候的下拉列表中；

2、使用 Dataview 来索引数据，当你没有安装 Dataview 的时候会默认不显示；

3、使用文件夹地址来索引数据，当留空的时候是索引根目录（也即理解成可以索引全库）；

4、包括子路径，如果不包括的话，仅索引指定文件夹的内容，而不会索引指定文件夹下的子文件夹内容；

5、默认的笔记名；

6、模板，你可以设置多个模板；

全都配置好后点创建 Project 就可以进入到 Projects 的窗口了。

## 使用方法

![[Pasted image 20230128143200.png]]

1、选择不同的 Project ；

2、编辑或者删除当前的 Project ；

3、新建按钮，用于选择新建 Project、视图或者笔记；

4、隐藏表格中的列 5、选择不同的视图，点击既可切换；

6、Tag 列，当你在索引的笔记中任一 YAML 中填入 Tag 字段的时候，你就可以在这个表格中看到对应的列，而 Tag 列是相对特殊的，你可以在这个单元格中添加或者删除标签；

7、Number 列，你可以填入数字，当对应的 YAML 属性是 number 类型的时候，这里面就只能填入数字了；

8、Boolean 列，当你设置，例如 published: true 或者 false 的时候就可以直接在表格中点击切换；

9、日期列，当你的 YAML 数据是 YYYY-MM-DD 或者 YYYY/MM/DD 的时候，这里就会显示成日期的属性，你点选的时候可以直接选择新的日期；

10、文本列，你在这里填入你的文本内容；

11、添加新的笔记

### 日历视图

![[Pasted image 20230128143222.png]]

1、你点击这里可以添加笔记；

2、点击事件，可以直接修改事件的元数据；

3、选择基于什么日期来排序事件；

4、选择基于什么属性来确定已经完成；

5、你可以选择：日、月、周、双周视图来看所有的事件

### 看板视图

![[Pasted image 20230128143238.png]]

1、添加新的笔记，而且附带对应的状态作为 YAML ；

2、优先级，根据 4 来调整变化；

3、调整状态，Kanban 根据这个来生成不同的列；

4、调整权重，Kanban 根据这个来排序不同的卡片。

### 画廊视图

如果你喜欢其他笔记软件的画廊模式，一个个大大的卡片，和精美的图片让你很舒服，你可以尝试画廊视图。

## 视频
---
uid: 20230803204614
title: Obsidian 插件：【Readme】Quiet Outline
tags: ['目录/标题', '美化', '效率', 'obsidian插件', 'readme']
description: 一个强大纲编辑器，可以定位大纲，修改大纲，甚至通过拖动大纲来变换内容排版。支持多种内容做为标题，包括特殊样式，数学公示等。
author: the_tree
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quiet Outline

> [!Note] 插件名片
> - 插件名称：Quiet Outline
> - 插件作者：the_tree
> - 插件说明：一个强大纲编辑器，可以定位大纲，修改大纲，甚至通过拖动大纲来变换内容排版。支持多种内容做为标题，包括特殊样式，数学公示等。
> - 插件分类：['目录/标题', '美化', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/guopenghui/obsidian-quiet-outline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-quiet-outline)

## 概述

一个强大纲编辑器，可以定位大纲，修改大纲，甚至通过拖动大纲来变换内容排版。支持多种内容做为标题，包括特殊样式，数学公示等。

![Quiet Outline](https://cdn.pkmer.cn/covers/obsidian-quiet-outline.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-quiet-outline]] 插件的自述翻译


# Obsidian Quiet Outline

一个大纲插件，使标题更易于阅读。

[中文文档](https://github.com/guopenghui/obsidian-quiet-outline/blob/master/README-CN.md)

## 特点

### 编辑时不自动展开

默认大纲：

![系统自带大纲](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/notquiet.gif)

安静大纲：

![安静大纲](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/quiet.gif)

### 搜索支持

![支持搜索](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/search.gif)

隐藏不相关的结果：
![隐藏结果](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/hide_irrelevant.gif)

使用正则表达式：
![正则搜索](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/regex_search.gif)

### Markdown渲染支持

![渲染markdown](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/markdown.gif)

### 自动展开和折叠

### 层级切换栏

![切换展开级别](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/switch.gif)

### 默认级别
![默认级别](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/default-level.gif)

### 拖拽和修改笔记
![拖拽](https://raw.githubusercontent.com/guopenghui/obsidian-quiet-outline/master/public/drag.gif)

## 限制

+ 由于内置编辑器的懒渲染策略（只有当前窗口中显示的文本会被渲染。如果滚动得太快，你会看到一些文本还没有准备好被渲染，编辑器会出现卡顿），有时候在编辑模式下你不能通过一次点击跳转到你想要的位置，特别是当笔记是你打开 Obsidian 应用程序后第一次打开时。大纲核心插件也有同样的问题。解决方法：**再次点击**。

+ 不支持跨级别，这意味着你可以使用 `h1->h2->h3`，但不能使用 `h1->h3->h4`，而 `h3` 和 `h4` 会被视为 `h2` 和 `h3`。

+ 不能将标题拖动到叶子标题中。

+ Obsidian 默认不支持一些扩展语法。但我们可以扩展 Markdown 解析器来修复它！如果你认为某个语法经常被使用并且应该被实现，请创建一个问题来讨论。

使用方法

打开命令面板，输入`Quiet Outline`，然后按下`Enter`。

对于Markdown渲染，请在设置面板中打开`Markdown Render`选项。

## 安装

**从 GitHub 下载**
   + 下载最新版本。
   + 解压缩并将三个文件 (`main.js`, `style.css`, `manifest.json`) 放入文件夹 `{{obsidian_vault}}/.obsidian/plugins/obsidian-quiet-outline`。

**从插件商店安装**
+ 打开设置 > 第三方插件
+ 点击浏览社区插件
+ 搜索 "Quiet Outline"
+ 点击安装

如果你喜欢这个插件，随意给我买杯咖啡。





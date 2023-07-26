---
uid: 20230608220650
title: Obsidian 如何生成和美化目录
tags: [Obsidian, 插件, 目录, 美化]
description: Obsidian
author: OS
type: practice
draft: false
editable: false
modified: 20230608224555
---

# Obsidian 如何生成和美化目录

## 如何给 Obsidian 生成目录

- Obsidian 默认的功能
	- OB 默认是有目录的，不过从设计理念上，它被称为大纲，你可以在设置>核心插件> 大纲中找到它
	- 它会默认显示在侧边栏。
	- 在文档的顶部 输入 **`[toc]`** 、**[^toc]** ，会根据 **标题** 自动生成目录 ( 依赖插件：**Number Headings** )
	- 当然如果你习惯了了现在流行的悬浮目录，也可以使用【依赖插件：**floating toc**】
- 其他样式
	- 原生支持这种目录方式固然很好
	- 不过一些同学希望在使用中获得类似的样式

### 美化目录样式

- [[obsidian-quiet-outline]]
	- Quiet outline 主要是可以分层级展开正文标题，去梳理层级结构，另外就是支持长文章标题搜索。
	- 优点：支持限定标题搜索
	- 条件：依赖插件
	- 条件：使用的侧栏，效果样式见仁见智
- [[number-headings-obsidian]]
	- 支持利用正文标题等级 1 来显示笔记的目录
	- 是我个人比较习惯方式
	- 优点：能在正文头部生成目录
	- 条件：占用标题等级 1，未来输出成 word 等其他标准化文档时候可能出现错误
	- 条件：依赖插件
- [[floating-toc]]
	- 支持大家在飞书、腾讯文档上看到悬浮目录
	- 条件：样式优化见仁见智，如果不满意，需要有点动手能力
	- 条件：依赖插件
---
uid: 20240730205546
title: Obsidian 插件：Inline spoilers 也许是最方便的挖空编辑工具
tags: ['挖空', '编辑工具', 'obsidian插件']
description: Obsidian 插件：Inline spoilers 也许是最方便的挖空编辑工具
author: OS
type: awesome
draft: false
editable: false
modified: 20240810005138
---

# Obsidian 插件：Inline spoilers 也许是最方便的挖空编辑工具

## 概述

Obsidian 的重度用户，一定会利用 Obsidian 完成一些日常学习。而学习中一定也离不开挖空方式，测试自己对概念和特有内容记忆的准确性。

在 Obsidian 中想要实现这样的方式，很多高手都有自己的方法，比如 [[Blue Topaz 示例库简介]] 中就有利用 [[obsidian-admonition]] 实现挖空的方式。你可以用来测试古文诗词记忆，还有英文单词记忆。

上面这些方法虽然更加，灵活，但是可能对于一些入门用户也需要更多的动手能力。

Inline spoilers 就是一个更加简单的方法， 虽然从名字和使用方法看，作者更希望是他用来放置正文的剧透或者其他方法，但或用下，正好可以用来完成挖空任务

> [!Note] 插件名片
> - 插件名称：Inline spoilers
> - 插件作者：logonoff
> - 插件说明：提供一个快速挖空编辑的方式
> - 插件分类：[' 标签页管理 ', ' 垂直标签 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/logonoff/obsidian-inline-spoilers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-spoilers)

## 效果&特性

![inline-spoilers](https://cdn.pkmer.cn/images/68747470733a2f2f692e696d6775722e636f6d2f4c4b71426175672e676966.gif!pkmer)

## 使用

- 如何隐藏内容：想要对某个内容进行挖空，或者叫涂黑处理，只需要使用语法 `||`，在你要隐藏的内容前和后增加 `||`
- 如何显示隐藏内容：
	- 阅读模式下，增加语法的内容会自动隐藏
	- 阅读模式下，如果想要显示内容，只要鼠标单击隐藏部分来完成隐藏与否的切换

举例

```
||这是你想隐藏的文本||
```

如果你对隐藏的内容还有特殊格式要求，比如隐藏的内容需要加粗，或者隐藏内容需要使用斜体字

```
**||这些文本将被隐藏，且会变为加粗||**
```

```
*||这些文本将被隐藏，且会变为斜体||*
```
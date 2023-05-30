---
uid: 20230524230942
title: Obsidian 插件：Mousewheel Image zoom 通过鼠标滚轮快速调整图片大小
tags: []
description: Obsidian 插件：Mousewheel Image zoom 通过鼠标滚轮快速调整图片大小
author: OS
type: basic
draft: false
editable: false
modified: 20230530224639
---

# Obsidian 插件：Mousewheel Image zoom 通过鼠标滚轮快速调整图片大小

## 概述

在书写笔记时，我们经常需要插入辅助理解的图片。然而，在 Obsidian 中调整图片大小并不是一件简单的事情。要不你需要使用语法，参考 [[Obsidian扩展语法#自定义图片大小]]，但你会发现这个方法需要你使用 markdown 语法，可视化程度差，想要调整一个图片在笔记中到合适大小，往往有多次修改数字。

Mousewheel Image zoom 很好解决了频繁输入，和快速感知图片调整效果的问题。通过按住可配置键（默认为左 alt），在预览模式下通过滚轮来调节图像的大小。

> [!Note] 插件名片
> - 插件名称：Mousewheel Image zoom
> - 插件版本：1.0.18
> - 插件作者：Nico Jeske
> - 插件描述：能够通过按住可配置键（默认为左 alt），在编辑/阅读模式下通过滚轮来调节图像的大小。
> - 插件项目地址：<https://github.com/nicojeske/mousewheel-image-zoom>

## 效果&特性

![](https://raw.githubusercontent.com/nicojeske/mousewheel-image-zoom/master/Animation.gif)

- 能够通过按住快捷键，在编辑/阅读模式下通过滚轮来调节图像的大小
- 触发快捷键可配置
- 调整缩放的级别可自定义

## 使用

- 能够通过按住快捷键（默认为左 alt），在编辑/阅读模式下通过滚轮来调节图像的大小
	- 快捷键支持：Alt，Ctrl，Shift
- Step size：支持设定每次滚动滚轮，缩放的比例，默认 25%
	- 你可以理解程这个数值越小，滚动滚轮缩放变化越小，调整更加丝滑
	- 这个数值越大， 那么就会快速且剧烈的变化图片的尺寸
- Initial Size：初始化初始缩放比例，默认 25%

> [!Tip] 相关推荐
> - [[obsidian-image-toolkit]]：提供笔记中查看图片的基本操作
> - [[obsidian-image-caption]]：给图片增加说明题注
> - [[obsidian-local-images-plus]]：将你粘贴的网络图片，自定下载到本地并插入到你粘贴的位置
> - [[obsidian-file-link]]：可以很容易地将文件链接添加到笔记中，提供界面化的选择文件
---
uid: 20230803204909
title: Obsidian 插件：【Readme】Thumbnails
tags: ['obsidian插件', 'readme']
description: 将 YouTube 缩略图插入您的笔记中。
author: Michael Harris
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Thumbnails

> [!Note] 插件名片
> - 插件名称：Thumbnails
> - 插件作者：Michael Harris
> - 插件说明：将 YouTube 缩略图插入您的笔记中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Meikul/obsidian-thumbnails)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-thumbnails)

## 概述

将 YouTube 缩略图插入您的笔记中。

![Thumbnails](https://cdn.pkmer.cn/covers/obsidian-thumbnails.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Meikul/obsidian-thumbnails/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-thumbnails]] 插件的自述翻译


![版本徽章](https://img.shields.io/github/v/release/Meikul/obsidian-thumbnails)
<!--![下载徽章](https://img.shields.io/github/downloads/Meikul/obsidian-thumbnails/total.svg)-->
# Obsidian缩略图
该插件允许您在笔记中插入视频缩略图，以帮助您跟踪您实际链接的内容。

适用于Youtube和Vimeo。
![GIF演示如何使用该插件创建缩略图](https://raw.githubusercontent.com/Meikul/obsidian-thumbnails/master/demo_images/block_demo.gif)

## 使用方法
在代码块中使用 `vid` 类型，并包含您的视频链接：
````markdown
```vid
https://youtu.be/dQw4w9WgXcQ
```
````
*或者* 使用“从剪贴板插入”命令（速度更快）

## 命令

### 在剪贴板中插入来自URL的缩略图
如果你的剪贴板中有一个视频URL，这个命令将为你创建代码块。

### 在剪贴板中插入带有视频标题的链接
如果你的剪贴板中有一个视频链接，这个命令将自动查找并插入一个简单的链接，链接的文本设置为视频的标题。

<img src="https://raw.githubusercontent.com/Meikul/obsidian-thumbnails/master/demo_images/title_link_demo.gif" alt="演示插入带有标题的链接的GIF" width="480">

如果您处于离线状态，缩略图将只会显示为普通链接。

### **保存缩略图信息**
如果您希望离线时缩略图能够更好地工作，您可以在设置选项卡中启用“保存缩略图信息”。离线时，图像将为空白，但标题和频道将像正常情况下一样显示。

### **保存图片**
如果您还想将缩略图图像存储在本地，可以在设置选项卡中启用“保存图片”功能。然后，无论您是否在线，都可以查看这些图片。




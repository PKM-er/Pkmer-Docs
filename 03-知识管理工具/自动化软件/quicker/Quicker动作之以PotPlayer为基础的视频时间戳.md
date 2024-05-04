---
uid: 20231209170808
title: Quicker 动作之以 PotPlayer 为基础的视频时间戳
tags: [Quicker, 视频笔记, 第三方软件]
description: 利用 PotPlayer 和 Quicker，在 Obsidian 中全自动生成时间戳链接，用于记录视频笔记。
author: ImmortalSty
type: other
draft: false
editable: true
modified: 20231220113828
---

# Quicker 动作之以 PotPlayer 为基础的视频时间戳

> [!info]+ 使用需要
>
> - 软件：
> 	- [Quicker](https://getquicker.net/)；
> 	- [PotPlayer](https://potplayer.daum.net/?lang=zh_CN)；
> - Quicker 动作：
> 	- [PotPlayer的md链接](https://getquicker.net/Sharedaction?code=e3058555-a8ad-4836-d6f4-08dbf7217f2d)；
> 	- [PotPlayer 的 ob 链接](https://getquicker.net/Sharedaction?code=2944f6ed-a7bf-4ea4-9614-08dbfd0d4b63)。
>
> ==注意！第一个动作中，有一个操作要用到 Quicker 会员的功能（虽然不是必需）。==
>
> ==保险起见注明一下，咱与 Quicker 没有利益关联滴撒，只是用到了这个功能，而且该功能只是用于让使用流程更简便，不用会员功能也是能用本动作的。==

## 软件介绍

- Quicker 是一个效率软件，在本文中用于**自动化**，以及**链接 Markdown 软件与 PotPlayer**，想要了解可以看 [[./开始Quicker吧|本文]]；
- PotPlayer 是一个视频软件，支持**部分网络视频**和**几乎所有本地视频格式**，可用命令行调用，打开视频指定时间位置。

## PotPlayer 的 md 链接

### 动作简介

在与熊猫聊天时，我了解到 PotPlayer 想要**指定时间**打开视频，最简单的操作就是使用命令行。但一来这对非程序员来说**太过麻烦**，二来**没法与 Markdown 软件深度结合**。于是我以此为基础，写了一个 Quicker 动作用于**自动化和链接**。以下是动作原理，不感兴趣可以直接跳到 [[Quicker动作之以PotPlayer为基础的视频时间戳#使用方法]]。

Markdown 大多都是支持 **URI 链接**的，而刚好 Quicker 是支持使用 URI 来调用动作运行的，而且还支持传参。于是我们可以**在 Markdown 软件中使用 URI 调用 Quicker**[^1]，或**选中链接运行 Quicker 动作**[^2]，并将文件位置与时间作为参数传入，再**在 Quicker 中使用命令行调用 PotPlayer**。

但 URI 链接非常复杂，学起来写起来都不轻松，所以还要**自动生成 URI 链接**才好。于是我设定，只要**在 PotPlayer 上直接运行本动作**，就会用快捷链复制视频相关信息，并自动组合成 Markdown 软件支持的时间戳链接，**存入剪贴板**。

### 使用方法

使用前要**先设置 PotPlayer 的快捷键等等**，不过不用怛心，我已经把教程详细的写在了动作的**帮助按钮**里，点一下就可以查看。

动作的使用很简单，我尽可能的使所有复杂操作自动化了。

1. **生成链接**：
	1. 点击 PotPlayer 的窗口：确保焦点正在 PotPlayer 上；
	2. 运行本动作：开始自动生成时间戳链接；
	3. 在 Markdown 软件中粘贴：此时链接已存入剪贴板，因此直接粘贴就行了；
2. **点击链接**：
	1. 该功能要用到 Quicker 的会员功能；
	2. 啥也不用做，点完就自动打开视频了；
3. **选中链接**：
	1. 该功能免费；
	2. 选中 Markdown 软件中，链接的圆括号部分；
	3. 运行本动作；
	4. 视频以指定时间在 PotPlayer 上打开。

## PotPlayer 的 ob 链接

### 动作简介

与上面的动作不同，这个动作只能用于 Obsidian，因为它用到了 Obsidian 一个插件的功能，但却可以免去 Quicker 会员的部份。因此，对于使用 Obsidian 的用户，咱是更推荐这个动作的。

我在代码方面是算小白的，因此只想到了用 Quicker 的 URI 来实现。但咱群有大佬表示“其实可以用 Obsidian 插件 Advenced URI 来生成调用命令行的链接，避免使用 Quicker 的会员功能”。于是就有了本动作。

### 使用方法

使用前依旧要**先设置 PotPlayer 的快捷键等等**。除此以外，还要安装一个名为 Advanced URI 的 Obsidian 插件，并在插件设置中打开下面的选项：

![](https://cdn.pkmer.cn/images/202312201138045.png!pkmer)

1. **生成链接**：
	1. 点击 PotPlayer 的窗口：确保焦点正在 PotPlayer 上；
	2. 运行本动作：开始自动生成时间戳链接；
	3. 在 Obsidian 中粘贴：此时链接已存入剪贴板，因此直接粘贴就行了；
2. **点击链接**：
	1. 啥也不用做，点完就自动打开视频了。

## 后言

本动作只是一个**辅助**，用于帮助读者**快速跳转到视频指定位置**，具体的视频笔记流程还要读者自己建立。

[^1]: 本功能为 Quicker 的会员功能。
[^2]: 本功能免费。
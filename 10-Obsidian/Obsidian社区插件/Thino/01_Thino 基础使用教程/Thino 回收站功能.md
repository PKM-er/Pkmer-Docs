---
uid: 20231109234559
title: Thino 回收站功能
tags: [Obsidian, Obsidian插件, Thino]
description: Thino 回收站功能
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231215231311
---

# Thino 回收站功能

> [!note] 功能信息
> 此功能在支持 Thino basic 和 Thino Pro

Thino 自带了回收站功能，当你使用回收站功能的时候，会在原文加上 `[deleted:true]` 的标记，该标记会作为 Thino 索引其时判断为存在于回收站的唯一标准，当其在 CANVAS 或者多文件时，会在元数据中插入 `deleted:true`。

你可以随时到回收站中彻底删除某个 Thino，相应的，它也会从源页面彻底删除，这个操作不会有任何的恢复余地。

当你点击删除时，会让你二次确认，同时你也可以随时到 Thino 回收站中恢复某个 Thino。

> [!Warning] 注意
> - 如果你是在归档中删除某个 Thino，那么它会被移动至回收站中。
> - 不推荐 Obsidian memos（即 1.x 版本） 和 Thino 混用（2.x 版本）
> 	- 因为删除机制的变动，导致删除的内容会处于不同地方，用户极容易自己搞混
> 	- 因为删除和同步共同作用，导致一些内容在低版本删除后，其他端高版本中仍然存在，并通过同步重新进入

Tips：如果你需要隐藏标志位和了解标志位原因，可以参考 [[Obsidian样式-Thino插件隐藏标志位]]
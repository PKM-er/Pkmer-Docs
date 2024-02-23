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
> 此功能在支持 Thino 基础版 和 Thino Pro

Thino 自带了回收站功能，当你使用回收站功能的时候，会在原文加上 `[deleted:true]` 的标记，该标记会作为 Thino 索引其时判断为存在于回收站的唯一标准，当其在 CANVAS 或者多文件时，会在元数据中插入 `deleted:true`。

2.2.4 以后的版本 `[deleted] 标志` 会变为一个所见即所得的图形标志 ![image.png](https://cdn.pkmer.cn/images/20240220093545.png!pkmer)

- 回收站模式（默认）
	- 删除的内容会增加 `[deleted] 标志`
	- 当你点击删除时，会让你二次确认，同时你也可以随时到 Thino 回收站中恢复某个 Thino。
	- 随时到回收站中彻底删除某个 Thino，相应的，它也会从源页面彻底删除，这个操作不会有任何的恢复余地。
- 直接删除模式
	- 可以在 Thino 设置 - > 进阶（Advanced）中设置，删除的 Thino 内容会直接删除，无法从回收站或其他方式恢复。

> [!Warning] 注意
> - 如果你是在归档中删除某个 Thino，那么它会被移动至回收站中。
> - 不推荐 Obsidian memos（即 1.x 版本） 和 Thino 混用（2.x 版本）
> 	- 因为删除机制的变动，导致删除的内容会处于不同地方，用户极容易自己搞混
> 	- 因为删除和同步共同作用，导致一些内容在低版本删除后，其他端高版本中仍然存在，并通过同步重新进入
> - 不推荐使用 Thino 之外的方式来编辑文档，会导致不可预知的问题，比如使用同步的用户，本地物理删除文件，但是云端并不知道。

Tips：如果你需要隐藏标志位和了解标志位原因，可以参考 [[Obsidian样式-Thino插件隐藏标志位]]
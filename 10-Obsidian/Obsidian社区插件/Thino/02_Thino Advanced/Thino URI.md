---
uid: 20231109234449
title: Thino URI
tags: [Obsidian, Obsidian插件, Thino, Memos]
description: Thino URI
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20250122192807
id: 00d5e07c5d8a71f1
---

# Thino URI

> [!note] 功能信息
> 下面部分功能仅支持 Thino Pro

PS: 仅有本地版的 Thino 2.1.0 及以上的版本支持利用 URI 创建内容；

Thino 默认支持几个 URI 参数来快速创建 Thino，以下我将用一个例子来说明其支持的 URI：

`obsidian://thino?content=这里插入内容&type=canvas&task=true`

其中你可以修改以下几个参数的内容来达到你创建不同的 Thino 的目的：

- content——内容参数，对于需要换行的内容，你需要提前将其转换为 `\n`；
- type——保存类别参数，通过 URI 的方式添加的内容，目前默认仅支持保存至默认的位置；
    - Type 包含 `canvas` 、`multi` 、`daily` ，当没有传入任何 type 的情况下，会默认为 `daily`
- task——保存为任务内容还是列表内容。
    - Task 可以为 true 或者 false；

在你构建好了以上的内容后，你可以复制到浏览器的地址栏中，回车后会提示你跳转到 Obsidian，而后你就可以正确生成一个 Thino。
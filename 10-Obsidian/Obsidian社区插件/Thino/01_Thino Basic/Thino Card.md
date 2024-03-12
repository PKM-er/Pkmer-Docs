---
uid: 20231109234447
title: Thino Card
tags:
  - Obsidian
  - Obsidian插件
  - Thino
description: Thino Card
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231110001231
id: ad09130111ee9095
---

# Thino Card

> [!note] 功能信息
> 此功能支持 Thino basic 和 Thino Pro

在 Thino 中，当你在输入框输入且回车后，会得到你的第一张 Thino Card，其包含了以下的元素：

![Thino Card](https://cdn.pkmer.cn/images/Pasted%20image%2020231108232203.png!pkmer)

其中 1 为时间戳、2 为文本显示区域、3 包括了置顶按钮和来源按钮、3 的右侧是菜单按钮。

- 基本元素说明
    - [[#时间戳|时间戳]]
    - [[#任务按钮|任务按钮]]
    - [[#文本显示区域|文本显示区域]]
    - [[#置顶按钮以及来源按钮|置顶按钮以及来源按钮]]
    - [[#菜单按钮|菜单按钮]]
- 鼠标点击说明
    - [[#CTRL+鼠标左键点击]]
    - [[#双击]]
    - [[#右键点击]]

## 基础元素说明

### 时间戳

其中时间戳在你点击后会弹出当前 Thino Card的引用关系弹窗，你可以在里面看到使用了 Thino 原生自带的引用功能引用后的效果，例如：

![Thino Card](https://cdn.pkmer.cn/images/Pasted%20image%2020231108232227.png!pkmer)

而时间戳的时间则是基于存在文件中的文本进行计算的，例如：

- [[Thino Multi-souce#日记模式|日记模式]] 中的 `- 12:00`，此时会结合日记文件本身自带的日期 `2022-10-10` 之类的日期字眼来计算成完整的时间：`2022-10-10 12:00`
- [[Thino Multi-souce#多文件模式|多文件模式]] 中存在于 YAML Frontmatter 中的 `createdAt` 属性，其会采用 `YYYYMMDDHHmmss` 的形式进行记载；
- [[Thino Multi-souce#单文件模式|单文件模式]] 中存在于 Callout 中的 `createdAt` 属性，其会采用 `YYYYMMDDHHmmss` 的形式进行记载；

时间戳是 Thino 列中目前唯一的排序方式，仅当 Thino Card通过点击 [[Thino Card#置顶按钮|置顶按钮]] 加上置顶属性时，Thino Card会暂时被置顶到顶部；同时，时间戳也是 Thino 运行的唯一标准，包括但不限于 [[Thino Heatmap|热点图]]、[[Thino Review|回顾功能]] 都强依赖于 Thino 所附带的时间属性，所以在任何情况下，不要去修改或者删除时间戳的内容，否则存在产生差错的情况。

### 任务按钮

紧随时间戳之后的是任务按钮，任务按钮的存在会有两个情况，其中分别是：

1. 采用 [[Thino Multi-souce#日记模式|日记模式]] 时，记录为任务列表；
2. 采用其他 [[Thino Multi-souce|来源模式]] 时，会附带上对应的 type 属性，且记录为 Task 任务

当且仅当记录为任务列表的时候才能通过 Obsidian 的其它插件进行索引，而其它来源模式下，无法直接对原文进行任务完成或者取消完成的操作，所以建议采用 Task 的模式时，都尽可能使用日记模式。

而当点击操作任务按钮的时候，则会触发原文的变化，当记载在日记文件中的 Thino 被触发完成的时候，对应的原文也会被触发变成 `- [x]`；同理，其它模式也会被触发变成 `DONE`

### 文本显示区域

作为 Thino Card中最重要的文本显示区域，在 Thino 中会优先采用 Obsidian 所支持的原生渲染，其涵盖了 Obsidian 所支持的渲染的效果，在这个基础上，Thino 还支持：

- 直接在渲染中完成任务
- 点击标签时会出发 Thino 内部的筛选
- 点击图片的时候会弹出图片预览窗口，详情请看：[[Thino Image Preview|图片功能]]

### 置顶按钮以及来源按钮

置顶按钮是影响当前 Thino 列表的唯一一个方式，你可以将你更希望优先查看的内容放到你的 Thino 列的顶部，当你点击以后，其会在原文加上 `[pinned::true]` 的元数据标注。

而来源按钮仅面向非日记模式下的情况，为了做出和从日记模式过来的 Thino 区分的方式，当你点击以后会直接跳转到这个 Thino 的原文去；

### 菜单按钮

当你点击了菜单按钮以后，一个菜单会同时展示给你，关于该菜单的说明请到 [[Thino Card Menu|菜单]] 查看。

## 鼠标点击说明

在 Thino Card上使用鼠标点击的时候能触发各种操作，其中当前主要存在两种操作方式：

- CTRL + 鼠标左键点击
- 鼠标左键双击

### CTRL+ 鼠标左键点击

当用户将鼠标左键配合 Ctrl 键按下一起点击时，能够直接跳转到该 Thino Card的来源位置，例如日记中的某一行、CANVAS 中的某一个卡片等；

### 鼠标左键双击

当用户通过鼠标左键双击 Thino 时，其会使其进入编辑状态，这个 Thino Card的内容会在编辑框中出现，从而使得用户可以快速地去修改一个 Thino 的内容。

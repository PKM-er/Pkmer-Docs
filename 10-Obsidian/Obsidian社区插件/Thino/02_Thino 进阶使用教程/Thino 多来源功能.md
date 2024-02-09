---
uid: 20231109234457
title: Thino 多来源
tags: [Obsidian, Obsidian插件, Thino]
description: Thino 多来源功能
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20240127232403
---

# Thino 多来源

> [!note] 功能信息
> 此功能仅支持 Thino Pro

Thino 的多来源获取 Thino 卡片是在 2.0.X 版本中加入的，在这个全新的阶段中，你可以开始依赖于单文件、Canvas，而非仅日记形式来创建 Thino 以及存储 Thino。

你可以到设置的 [[Thino 设置项#Thino 多来源设置|多来源设置]] 来对多来源的属性进行配置或者开关。

其中包括以下的几个模式：

- 日记模式
- 多文件模式
- 单文件模式
- Canvas 模式

PS: ==注意，除了日记模式以外，其它模式保存的内容中，id 以及 createdAt 都是重中之重的元数据，如无特殊原因请不要去修改==。

## 日记模式

在 Thino 中，你所有默认编辑且创建的卡片在没有调整任何设置的情况下，都会被存入当天的日记中，例如，当你在 2023-11-09 日创建了一个新的 Thino，在其保存后，它会经过以下的步骤，最终写入到你的日记文件中：

Thino 检测是否存在当天的日记，如不存在，则创建，如存在，则会将当前的 Thino 的内容转换成附带时间戳的格式的文本，例如 `- 12:00 白切鸡` 的形式，插入到 [[Thino 进阶设置#日记模式设置|指定标题]] 下方，默认情况下，它会插入到 `# Journal` 标题下

## Canvas 模式

当你选择将 Thino 存到 Obsidian 的 Canvas 中时，会默认在当前的 Canvas 创建的最后一个卡片的下方距离 200 px 的位置新建一个卡片，且附带上所有 Thino 所需要的元数据。

默认情况下，其会保存到 `basic.thino.canvas` 文件中，但是它==同时也会索引==别的带有 `thino.canvas` 的 Canvas 文件，所以你可以随时新增自己喜欢的 Canvas 文件来自定义存储 Thino 内容。

## 多文件模式

多文件模式即 Multi 模式，当你基于 Multi 模式新建 Thino 的时候，就会新建一个完整的笔记，其内容为 Thino 编辑器中你输入的文本，笔记的元数据也就是 YAML Frontmatter 会用于存储 Thino 的元数据。

## 单文件模式【正在开发中】

单文件模式基于标题以及单个 Callout 来存储文本，Callout 中同样会附带上述提到的元数据，此外，由于是依赖于 Obsidian 的渲染格式，所以尽可能不要将两个 Callout 连在一起，否则的话由于 Obsidian 自身的解析问题，可能会出现数据错乱的问题。
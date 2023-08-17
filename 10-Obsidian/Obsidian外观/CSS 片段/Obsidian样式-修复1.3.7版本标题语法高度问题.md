---
uid: 20230802165753
title: Obsidian 样式：修复 1.3.7 版本标题语法高度问题
tags: [Obsidian, 样式, 标题语法, 高度修复]
description: Obsidian 样式：修复 1.3.7 版本标题语法高度问题。接到一些用户反馈，更新后，标题语法在编辑模式（所见即所得）变得奇怪
author: OS
type: other
draft: false
editable: false
modified: 20230802174926
---

# Obsidian 样式：修复 1.3.7 版本标题语法高度问题

## 概述

最近（23 年 7 月 31 日） Obsidian 官方更新了 1.3.7。

接到一些用户反馈，更新后，标题语法在编辑模式（所见即所得）变得奇怪，如图：

![image.png](https://cdn.pkmer.cn/images/20230802170132.png!pkmer)

如果你更喜欢传统模式，即标题顶部没有预留一些空间的模式，那么可以参考下面的方法。

## 解决

目前尚不知道这个设置的具体产生原因，也希望这篇笔记很快对很多人没有用途。

如何使用自定义代码段，参考 [[Obsidian的CSS代码片段]]

```CSS
.cm-s-obsidian div.cm-line.HyperMD-header {
padding-top: 0rem;
}
```
---
uid: 20231109234542
title: Thino 检索式功能（筛选器）
tags: [Obsidian, Obsidian插件, Thino]
description: Thino 检索式功能（筛选器）
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231110001208
---

# Thino 检索式功能（筛选器）

> [!note] 功能信息
> 此功能在支持 Thino basic 和 Thino Pro

在 Thino 中，有一个基本的检索式功能，你可以将你需要关注的内容的搜索条件提前构建形成检索式，当你点击检索式时，可以触发全局的筛选。

![Thino 检索式功能](https://cdn.pkmer.cn/images/Pasted%20image%2020231109093511.png!pkmer)

其中检索式在创建时，会弹出以下的窗口，其默认支持以下的筛选内容：

![Thino 检索式功能](https://cdn.pkmer.cn/images/Pasted%20image%2020231109094221.png!pkmer)

- 标签
- 类型，类型包括了刚刚在 [[Thino Search|搜索]] 中阐述的相关筛选器功能；
- 文本
- 日期，其包括了 `在之前` 以及 `在之后` 的两种状态，而后边的日期中你可以输入任意自然语言的日期，当然也可以输入 `YYYY-MM-DD` 的格式的日期；
    - 注意，这个功能严重依赖于 [argenos/nldates-obsidian](https://github.com/argenos/nldates-obsidian) 插件，请你使用该筛选的时候要先安装这个插件。

## 使用流程

在你想要新建一个检索式之前，你需要提供至少一个标题和一个筛选内容，否则的话，无法创建成功，且会弹出提示。

当你创建成功后，你可以点击侧边栏中的检索式，你的全部的 Thino 都会被一次性经过筛选后再显示。

## 进阶用法

[[Thino Filters|检索式（筛选器）]]、[[Thino Tag|标签]] 以及 [[Thino Search|搜索]] 只要是涉及了对 Thino 进行初步的筛选的功能情况下，Thino 都如实提供了一个基本的复制按钮：

![Thino 检索式功能](https://cdn.pkmer.cn/images/Pasted%20image%2020231109114526.png!pkmer)

当你点击复制按钮的时候，会将所有的 Thino 按照列表递归的形式复制倒你的剪切板中，这个功能会对于需要整理周报或需要整理成 PPT 的时候非常有益。

## 逻辑运算符

检索式之间可以附带 AND 和 OR 的状态，目前（2.1.0）检索式还不支持多重嵌套的逻辑运算。
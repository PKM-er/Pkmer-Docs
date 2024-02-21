---
uid: 2024022117265795
title: Obsidian 插件：【Readme】Consecutive Lists
tags: ['obsidian插件', 'readme']
description: Create consecutive lists that are displayed separately in reading mode.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Consecutive Lists

> [!Note] 插件名片
> - 插件名称：Consecutive Lists
> - 插件作者：Josh Tucker
> - 插件说明：Create consecutive lists that are displayed separately in reading mode.
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jtucker2/obsidian-consecutive-lists)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?consecutive-lists)

## 概述

Create consecutive lists that are displayed separately in reading mode.



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jtucker2/obsidian-consecutive-lists/master/README.md)
> 

---

## Readme(翻译）

下面是 [[consecutive-lists]] 插件的自述翻译

【机翻】
# 黑曜石连续列表
在阅读模式下分别显示连续列表。

![](https://cdn.pkmer.cn/covers/consecutive-lists_2_0.gif!pkmer)

这个插件不会改变 Obsidian 中解释 markdown 的方式。它创建的 markdown 完全兼容其他解析器，确保您的笔记是可转移的，并且完全不依赖于这个插件。

它的工作原理很简单，只是自动在连续列表中插入交替的列表字符，使它们在阅读模式下正确分隔。
## 解释
假设你想创建这两个列表：
- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6

使用以下markdown是行不通的：

```
- item 1
- item 2
- item 3

- item 4
- item 5
- item 6
```

这将导致以下结果：

- item 1
- item 2
- item 3

- item 4
- item 5
- item 6

因此，插件会自动更改第二个列表的列表符号，导致以下markdown：

```
- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6
```

得到我们想要的结果：

- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6




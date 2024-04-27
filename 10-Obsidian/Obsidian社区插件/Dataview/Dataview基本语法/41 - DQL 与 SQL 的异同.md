---
uid: 20230724104636
title: Dataview 中的DQL 与 SQL 的区别
tags: [obsidian, 插件, dataview]
description: 基本语法学习指南，DQL 与 SQL 的区别
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20240427141935
---

# Dataview 中的 DQL 与 SQL 的区别

如果你熟悉 SQL 并且具有编写 SQL 查询的经验，你可以用编写 SQL 的方式编写 DQL 查询。但是 DQL 与 SQL 有很大不同。

## 1、执行方式上

DQL 查询从上到下逐行执行。它更像是一个计算机程序，而不是一个典型的 SQL 查询。

计算一行时，它会生成一个结果集，并将整个结果集传递到下一个 DQL 行。该行将对从上一行接收的集合做下一步操作。这就是为什么在 DQL 中可以有多个 WHERE 子句的原因。但在 DQL 中，它不是一个“子句”，而是一个“数据命令”。DQL 查询的每一行（第一行和第二行除外）都是一个“数据命令”。

## 2、语法上

- DQL 不是以 SELECT 开头，而是以确定查询类型的单词开头，该单词确定最终结果在屏幕上的呈现方式（表、列表、任务列表或日历）；
- 显示的字段列表与 SQL 中 SELECT 之后的部分很类似；
- 下一行以 FROM 开头，后跟的不是表名，而是复杂的表达式，类似于 SQL 的 WHERE 子句。在这里，你可以过滤许多内容，例如文件中的标签，文件名，路径名等。在后台，此命令已经生成了一个结果集，该结果集将成为我们通过后续行中的“数据命令”进一步操作数据的初始集。
- DQL 可以有很多个 WHERE 命令、SORT 命令和 GROUP BY 命令；
- SQL 中没有 FLATTEN 命令，但在 DQL 中，你可以使用它来减少结果集的深度。
- SQL 使用 Order By 命令排序，DQL 使用 Sort 排序；

下一步，我们介绍下 [[42 - ISO 8601]]
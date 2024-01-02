---
uid: 20230926135818
title: Dataview 任务查询示例
tags: [obsidian, dataview, 示例]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20231209174910
---

# Dataview 任务查询示例

> [!hint] 任务与文件的关系
> 用 `TASK` 进行查询是特殊的，相比于其他三个查询 (`LIST`, `TABLE`, `CALENDAR`)，任务查询并非在**页面层面**而是在**任务层面**。比如一个页面中如果有三个任务，你会得到三个查询结果而不是像其他查询那样只得到一个结果。因此我们可以直接利用任务的属性对任务进行检索，比如任务是否包含 tags，是否有某些元数据或文字。同时，每一个任务都继承了他们所属页面的所有属性，这也非常利于我们进行检索筛选。

**列出 assignments 文件夹下的所有任务**

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
```
`````

**列出具有 #next 标签的任务**

`````示例代码
```dataview
TASK
FROM #next
```
`````

**列出具有 #clientC 或者 #clientB 的任务**

`````示例代码
```dataview
TASK
FROM #clientC OR #clientB
```
`````

**列出文件夹 assignments 或 games 中的任务**

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments" OR "10 Example Data/games"
```
`````

**列出 assignments 文件夹中具有 #later 标签的任务**

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments" AND #later  
```
`````

**列出库中的所有任务**

> [!attention] 注意❗
> - 这个结果可能会非常的长，这取决于你的库的文件数目。dataview 更新后过长的结果并不会让你的 obsidian 变得卡顿，可以放心尝试。
> - 如果实在担心，可以另起一行写上 `limit n` 来限制只展示 n 个结果（n 换成你想展示的结果的个数）；
> - <s>只用 `TASK` 查询时结尾需要跟一个空格。</s> 在 0.5.57 版本修复了这个 BUG。

`````示例代码
```dataview
TASK
```
`````
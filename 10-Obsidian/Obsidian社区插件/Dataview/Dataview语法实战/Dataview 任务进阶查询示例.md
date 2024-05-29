---
uid: 20230926135946
title: Dataview 任务进阶查询示例
tags: [obsidian, dataview]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20230926164946
---

# Dataview 任务进阶查询示例

### 列出未完成的任务

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
WHERE !completed
```
`````

### 将任务按文件分组

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
GROUP BY file.link
```
`````

### 包含 #later 标签的文件

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
WHERE contains(tags, "#later")
```
`````

### 列出有截止日期的任务

> [!info] 提示
> 在 [[12 - 添加元数据至列表和任务|这一篇]] 中我们讲了如何给任务添加元数据，简单的来说就是在任务的末尾加上 `[duedate:: 2022-09-09]` 或者 `[contact:: Petro]` 等等，你想添加什么元数据都可以，只需要记住**把他们放在方括号内**。下面查询的任务已经加上了 duedate 的内联字段，因此如果你的任务没有加 duedate 的话，下面这段代码对你的库不起效果。

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
WHERE duedate
```
`````

### 根据完成时间排序已完成的任务

> [!attention] 注意
> 正常来说任务的完成时间是不会被记录的。如果想要检索任务的完成时间，我们也需要自己向任务添加元数据。Dataview 提供了一个自动添加的功能，可以当你在 Dataview 视图中选中任务的时候自动将任务的完成日期添加到这个任务的 completion 元素据中。你可以在 Dataview 的设置最下面的 Task Settings 中找到一个 Automatic Task Completion Tracking 设置，打开即可启用。
> ⚠ **强调!** 只有在 Dataview 的任务查询框框中选中了任务，dataview 才可以自动添加这个元数据到这个任务。

`````示例代码
```dataview
TASK
FROM "10 Example Data/assignments"
WHERE completed
SORT completion
```
`````
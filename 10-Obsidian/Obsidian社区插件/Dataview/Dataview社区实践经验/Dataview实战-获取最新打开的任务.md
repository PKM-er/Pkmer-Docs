---
uid: 20231202192041
title: Dataview 实战 - 获取未完成的任务
tags: [obsidian, dataview]
description: 获取最新打开的任务
author: Huajin
type: other
draft: false
editable: false
modified: 20231202192817
---

# Dataview 实战 - 获取未完成的任务

事先说明，只有 `- [x]` 才会被视为任务完成，除此之外都被视作未完成，例如 `- [ ]`，以及其他自定义的状态 `- [o]`、`- [y]`、`- [!]`。因此，如果我们用下面这段代码，也许得到的并不是你想要的，他不能筛选掉其他自定义状态的任务。

`````示例代码
```dataview
TASK
FROM "10 Example Data/dailys"
WHERE !completed
SORT file.day DESC
LIMIT 10
```
`````

我们需要利用任务的一个 [[14 - 隐式字段|隐式字段]] status 进行更精确的检索，代码如下：

`````示例代码
```dataview
TASK
FROM "10 Example Data/dailys"
WHERE status = " "
SORT file.day DESC
LIMIT 10
```
`````

试试把 `status = " "` 改为 `status = "!"`，如果你库中有 `- [!]` 这样的任务，就可以精确的筛选出这类任务。
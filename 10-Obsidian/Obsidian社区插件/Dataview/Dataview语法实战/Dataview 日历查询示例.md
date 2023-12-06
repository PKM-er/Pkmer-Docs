---
uid: 20230928123603
title: Dataview 日历简单查询示例
tags: [dataview]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20230928090114
---

# Dataview 日历简单查询示例

> [!info] 特殊的日历查询
> 日历查询类型必须有一个**有效的日期信息**作为字段，以便显示备注。如果遇到你查询的文件没有你定义的“日期源”，或者它是无效的，就会什么都不展示。换句话说，我们需要给 calendar 提供一个时间信息，dataview 会根据这个时间信息把文件放到对应的日期下。

**检索文件夹**

`````示例代码
```dataview
CALENDAR file.day
FROM "10 Example Data/dailys"
```
`````

**根据标签检索**

`````示例代码
```dataview
CALENDAR file.day
FROM #daily 
```
`````

**根据文件夹和标签的组合检索**

`````示例代码
```dataview
CALENDAR file.day
FROM "10 Example Data/dailys" OR #journal 
```
`````

**检索所有文件**

> [!hint] 注意
> 与其他查询类型不同，日历需要日期字段信息。因此，查询日历最简单的方式是 `Calendar file.ctime`，所有的文件都具有 `ctime` 这个属性。`file.ctime` 代表文件的创建时间，详见 [[14 - 隐式字段]].

`````示例代码
```dataview
CALENDAR file.ctime 
```
`````
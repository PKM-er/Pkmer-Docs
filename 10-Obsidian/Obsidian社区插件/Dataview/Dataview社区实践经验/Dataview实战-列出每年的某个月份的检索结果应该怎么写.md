---
uid: 20231202193301
title: Dataview 实战 - 列出每年的某个月份的检索结果应该怎么写
tags: [obsidian, dataview]
description: 列出每年的某个月份的检索结果
author: Huajin
type: other
draft: false
editable: false
modified: 20231202193858
---

# Dataview 实战 - 列出每年的某个月份的检索结果应该怎么写

提供两种方式，例如检索每年的生日是 2.17，取每年这个时候写的笔记

`````示例代码
```dataview
LIST file.lists.text
WHERE file.day.month = 2 and file.day.day = 17
```
`````

或者

`````示例代码
```dataview
LIST file.lists.text
WHERE dateformat(file.day, "MM-dd") = "02-17"
```
`````
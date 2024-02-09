---
uid: 20231111134604
title: Dataview 实战 - 在同一个表的列中显示两个元数据字段
tags: [Obsidian, Dataview, metadata]
description: 在一个表列中显示多个元数据字段，在需要考虑重命名字段时非常有用
author: Huajin
type: other
draft: false
editable: false
modified: 20231111175844
---

# Dataview 实战 - 在同一个表的列中显示两个元数据字段

## 简单方法

直接用 `[]` 把需要在同一列展示的内容框起来

`````示例代码
```dataview
TABLE wake-up, [午睡时间, 睡觉] as "睡眠时间", [午餐时间, 晚饭时间] AS "Meal times"
from "Daily/2023"
where 换成你的筛选条件
```
`````

## 更复杂的情形

如果你在每个文件中只有一个有效值存储在不同的元数据字段中，举个例子：有的文件写的是睡觉时间，有的是入眠时间，如果把他们视作同一个时间，我们就需要把他们写在一起，而不是写成上面的列表显示。这时候我们可以利用 `filter` 和 `flatten`：

`````示例代码
```dataview
TABLE 起床时间, 睡觉时间, [午餐时间, 晚餐时间] AS 饭点
from "Daily/2023"
FLATTEN filter([睡觉时间, 入眠时间], (x) => x) as 睡觉时间
```
`````

![Dataview实战-在同一个表的列中显示两个元数据字段](https://cdn.pkmer.cn/images/Pasted%20image%2020231111140539.png!pkmer)

---
uid: 20231202185611
title: Dataview 实战 - 将一周的元数据显示为 emojis(习惯跟踪)
tags: [obsidian, dataview]
description: 将一周的元数据显示为emjois(习惯跟踪)
author: Huajin
type: other
draft: false
editable: false
modified: 20231205105926
---

# Dataview 实战 - 将一周的元数据显示为 emojis(习惯跟踪)

利用 dataview 提供的 choice 函数，我们可以把输出值修改为 emoji，使得表格更加直观，下面给了两种使用示例，可以参考这两段代码的使用方式以及结果构建属于自己的 dataview 查询语句。

`````示例代码
```dataview
TABLE 
    choice(praying, "💚", "➖") AS Praying, 
    choice(breathing, "💚", "➖") AS breathing, 
    choice(beingthankful, "💚", "➖") AS "being thankful", 
    choice(slowdown, "💚", "➖") AS "slow down"
FROM "10 Example Data/dailys"
WHERE wellbeing.mood > 0 AND date(file.day).weekyear = 2
```
`````

![Pasted-image-20231202190214.png](https://cdn.pkmer.cn/images/Pasted-image-20231202190214.png!pkmer)

`````示例代码
```dataview
TABLE 
	choice(wellbeing.mood = 1, "😢", 
	choice(wellbeing.mood = 2 or wellbeing.mood = 3, "😐", 
	choice(wellbeing.mood > 3, "😃", ""))) as Mood, 
	choice(praying, "💚", "➖") AS Praying, 
	choice(breathing, "💚", "➖") AS breating, 
	choice(beingthankful, "💚", "➖") AS "being thankful", 
	choice(slowdown, "💚", "➖") AS "slow down"
FROM "10 Example Data/dailys"
WHERE wellbeing.mood > 0 AND date(file.day).weekyear = 2
```
`````

![Pasted image 20231202190347.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231202190347.png!pkmer)

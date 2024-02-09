---
uid: 20231104130528
title: Dataview 如何不显示文章链接
tags: [obsidian, dataview, 链接]
description: Dataview  实战 - 如何不显示文章链接
author: Huajin
type: other
draft: false
editable: false
modified: 20231105004238
---

# Dataview 如何不显示文章链接

使用 Dataview 进行汇总的时候，如果你没有使用 Group by 操作符，那么你的第一列显示的就是对应文件的链接，例如

![Pasted image 20231104130812.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231104130812.png!pkmer)

这一列是每一个检索结果的 id，如果不想显示这一列，我们需要在开头写上 `without id`，例如

```
TABLE without id file.ctime
FROM "..."
...
```

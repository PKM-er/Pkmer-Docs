---
uid: 20231118162454
title: 如何在查询中创建自定义输出
tags: [obsidian, dataview]
description: Dataview 实战：如何在查询中创建自定义输出
author: Huajin
type: other
draft: false
editable: false
modified: 20231120093829
---

# 如何在查询中创建自定义输出

我们可以借助==字符串拼接==来自定义输出结果，`+` 为拼接符。实际上就是将字符串（文本）和元数据拼在一起，然后一起输出。

如果在输出中写到：`"￥"+ 支出`，你的结果前面都会加上一个 `￥`。添加字符串片段的数量和位置没有限制。

比如我们可以列出所有库中的书，以及作者，并且在作者前面加个 `from `

````
```dataview
LIST "from " + 作者
FROM #type/books 
```
````

再列出这些书的阅读进度

````
```dataview
LIST "from " + 作者 + " (阅读进度: " + 已读页数 + "/" + 总页数 + " 页)"
FROM #type/books 
```
````

这样我们就拼接成了一个类似 `（阅读进度：214/400 页）` 的元素了。在 [[Dataview实战-定制你的数据表格并为表格列添加个性化样式]] 中大量运用了这个技巧。
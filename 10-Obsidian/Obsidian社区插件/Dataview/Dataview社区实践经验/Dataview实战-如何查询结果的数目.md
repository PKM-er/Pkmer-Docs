---
uid: 20231204095825
title: Dataview 实战 - 如何查询结果的数目
tags: [obsidian, dataview]
description: 如何查询结果的数目
author: Huajin
type: other
draft: false
editable: false
modified: 20231204101126
---

# Dataview 实战 - 如何查询结果的数目

在 Dataview 中，我们可以利用 GROUP BY 来把结果聚合起来，然后利用 `length()` 函数即可求出结果的数目。

例如，检索不同作者的书的数目

`````示例代码
```dataview
TABLE rows.file.link, length(rows)
FROM "#book"
GROUP BY 作者
```
`````

 ![image.png|700](https://cdn.pkmer.cn/images/202312060916658.png!pkmer)

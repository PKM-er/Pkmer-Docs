---
uid: 20230830212433
title: Dataview 语法实战：FLATTEN 操作符入门示例
tags: [Obsidian, dataview, 示例]
description: Dataview 查询中的一些 FLATTEN 操作符的使用实例
author: Huajin
type: other
draft: false
editable: false
modified: 20230918115800
---

# Dataview 语法实战：FLATTEN 操作符入门示例

`FLATTEN` 是 `GROUP BY` 的反义词，它的作用是把数组拆分成单个值，每个值单独成行。例如你的查询结果中有一项包含一个七个值的数组，你就会得到七行，每行为原数组中的一个值。

使用前

![Pasted image 20230831203335.png|525](https://cdn.pkmer.cn/images/Pasted%20image%2020230831203335.png!pkmer)

使用后

![Pasted image 20230831203350.png|525](https://cdn.pkmer.cn/images/Pasted%20image%2020230831203350.png!pkmer)

> [!cite] 相关教程
> - [官方英文文档](https://blacksmithgu.github.io/obsidian-dataview/query/queries/#flatten)；
> - [[23 - 操作符|Pkmer提供的教程]]；

> [!info] **前情提要**
> 文中查询得到的结果内容为一些书籍，这类文件包含的元数据如图所示。本文只涉及到其中的 booktopics, genres, totalPages 和 pagesRead 元数据，分别代表<u>书的主题，类型，总页数和已读页数</u>。文章分为两部分，简单的基本实例部分和进阶的变体部分。

![Pasted image 20230830220052.png|500](https://cdn.pkmer.cn/images/Pasted%20image%2020230830220052.png!pkmer)

## 基本实例

所有的书都放在了 "10 Example Data/books" 文件夹下，因此如果要检索所有这些文件，并且展示所有书的类型，我们就可以用下面的代码，效果如图（ps. books 7 没有类型）

`````示例代码
```dataview
TABLE genres
FROM "10 Example Data/books"
```
`````

![Pasted image 20230831201426.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230831201426.png!pkmer)

此时我们对 genres 属性用上 FLATTEN 操作符，就可以把每一个类型给拆分开，就像这样：

`````示例代码
```dataview
TABLE genres
FROM "10 Example Data/books"
FLATTEN genres
```
`````

我们就能够得到

> [!bug] 切记
> `FLATTEN` 是一个操作符，而非一个函数。他是需要与查询类型结合使用的；
> 同时，在一段 DQL 中，操作符是可以多次使用的，你可以重复使用 `FLATTEN`；
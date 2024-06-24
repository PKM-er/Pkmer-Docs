---
uid: 20230903001334
title: Dataview 语法实战：GROUP BY 操作符简单示例
tags: [Obsidian, dataview, 示例]
description: Dataveiw 的 GROUP BY 操作符简单示例
author: Huajin
type: other
draft: false
editable: false
modified: 20230918121505
---

# Dataview 语法实战：GROUP BY 操作符简单示例

`GROUP BY` 翻译成正文就是按照什么分组。不知道你在使用 `GROUP BY` 操作符的时候，有没有遇到成组后其他列都消失的情况。这是因为，我们原本使用了 `FROM` 和 `WHERE` 操作符之后得到的结果是以文件为单位的。再使用了 `GROUP BY` 操作符之后，我们的单位就会变成一由同类属性组成的一个个集合了。

> [!info] **前情提要**
> 文中查询得到的结果内容为一些书籍，这类文件包含的元数据如图所示。本文只涉及到其中的 booktopics, genres, totalPages 和 pagesRead 元数据，分别代表<u>书的主题，类型，总页数和已读页数</u>。文章分为两部分，简单的基本实例部分和进阶的变体部分。

## 基础实例

所有的书都放在了 "10 Example Data/books" 文件夹下，因此可以用以下代码列出所有记录的书籍的作者

`````示例代码
```dataview
LIST
FROM "10 Example Data/books"
GROUP BY author
```
`````

![Dataview语法实战-GROUP BY 操作符简单示例](https://cdn.pkmer.cn/images/Pasted%20image%2020230903002834.png!pkmer)

此时如果我们还像以前那样，在第一行加上类似 `file.link` 之类的隐式字段，无法得到我们预期的结果。原因就是，我们现在操作的对象已经变成了一个由所有满足成组条件的文件组合成的一个列表，我们需要用关键字 `rows` 来指代每一个组。对比一下下面两种代码就明白了。

错误代码

`````示例代码
```dataview
TABLE file.list
FROM "10 Example Data/books"
GROUP BY author
```
`````

正确代码

`````示例代码
```dataview
TABLE rows.file.list
FROM "10 Example Data/books"
GROUP BY author
```
`````

这样我们才能够得到下面的结果，从结果也能看得出来他们被合并成了一个个列表。

![Dataview语法实战-GROUP BY 操作符简单示例](https://cdn.pkmer.cn/images/Pasted%20image%2020230903003317.png!pkmer)

进阶示例请见：[[Dataview语法实战-GROUP BY 操作符进阶示例]].
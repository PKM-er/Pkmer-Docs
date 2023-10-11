---
uid: 20230903192124
title: Dataview 语法实战：自定义排序的简单实例
tags: [Obsidian, dataview, 示例]
description: 在 Dataveiw 中简单的自定义排序
author: Huajin
type: other
draft: false
editable: false
modified: 20230918125909
---

# Dataview 语法实战：自定义排序的简单实例

SORT 有排序的意思，既然是排序，我们就需要指定是依据什么字段排序。dataview 提供了两个关键字 ASC 和 DESC 来选择结果是从小到大排序还是从大到小排序。但是，我们能不能自定义一种排序方式呢？

## 简单实例

> [!info] 前情提要
> 有一组介绍菜肴的数据集，存放在 "10 Example Data/food" 文件夹中。每一个菜谱文件都包含配方类型、配方来源、烹饪时长和所需食材这四个属性；在这个食谱数据集中，只有三种配方类型，分别是 vegetarian, meat 和 onepot；

![Dataview语法实战-自定义排序的简单实例](https://cdn.pkmer.cn/images/Pasted%20image%2020230903195306.png!pkmer)

如果我们直接列出所有的食谱以及食谱类型，我们会得到这么一个结果

`````示例代码
```dataview
TABLE recipe-type
FROM "10 Example Data/food"
WHERE recipe-type
```
`````

![Dataview语法实战-自定义排序的简单实例](https://cdn.pkmer.cn/images/Pasted%20image%2020230903195808.png!pkmer)

是不是有点混乱，我们试试直接加上 SORT 操作符

`````示例代码
```dataview
TABLE recipe-type
FROM "10 Example Data/food"
WHERE recipe-type
SORT recipe-type
```
`````

![Dataview语法实战-自定义排序的简单实例](https://cdn.pkmer.cn/images/Pasted%20image%2020230903200017.png!pkmer)

可以看到，的确有顺序了，但是此时的排序规则是按照字符串的大小排序的（。可是如果我们想要让 vegetarian 排在第一个，让 meat 排在第二个，让 onepot 排在第三个该怎么实现呢？

我们可以借助 `choice()` 函数

`````示例代码
```dataview
TABLE recipe-type
FROM "10 Example Data/food"
WHERE recipe-type
SORT choice(recipe-type = "vegetarian", "1", choice(recipe-type = "meat", "2","3")) ASC
```
`````

我们利用 `choice()` 函数令 vegetarian 为 1，meat 为 2，**其余**为 3，这样就做到了自定义排序的效果。

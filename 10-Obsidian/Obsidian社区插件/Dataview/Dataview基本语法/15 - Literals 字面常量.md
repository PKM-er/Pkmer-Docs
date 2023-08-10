---
uid: 20230724104531
title: Literals 字面常量
tags: [obsidian, 插件, dataview, 语法, literals]
description: 
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20230809230142
---

# Literals 字面常量

> [!question] 何为字面常量
> 字面常量就是一些静态常量，比如数字 1、字符串“literals”等；
> 只有在查询的时候才有字面常量这个概念，在元数据中没有这个概念；

Dataview 中可以使用的字面常量有三种

- 一般字面常量 (General)：数字、字符串等；
- 时间字面常量 (Date)：某个时间点；
- 定长时间字面常量 (Duration)：一段时间；

## 一般字面常量 General

给出了一些一般字面常量的例子，可以自己根据示例在查询中选择合适的字面常量；

|字面常量 Literal|解释 Description |
|:-:|:-:|
|`0`|数字 0|
|`1337`|正数 1337|
|`-200`|负数 -200|
|`"The quick brown fox jumps over the lazy dog."`|用了 26 个字母的字符串|
|`[[链接]]`|链接|
|`[[]]`|指向本文的链接|
|`[1, 2, 3]`|1, 2, 3 组成的列表|
|`[[1, 2], [3, 4]]`|[1, 2] 和 [3, 4] 组成的列表|
|`{ a: 1. b: 2 }`|含有属性 a=1 和 b=2 的一个对象|
|`date(2023-07-21)`|日期|
|`dur(2 days 4 hours)`|一段定长时间|

## 日期的字面常量

无论何时使用 [[32 - ISO 8601|ISO 格式]] 的 Date 字段值，都需要将这些字段与日期对象进行比较。以下是一些常见用例的简写，如明天、本周开始等。

如果你尝试用 `typeof()` 函数获取类似 `2023-07-21` 或者 `"2023-07-21"` 的数据类型，他会告诉你是 number 类型和 string 类型。我们需要用 `date()` 函数把这些类型转换成日期；

`````示例代码
```dataview
table without id
typeof(2023-07-21), typeof("2023-07-21")
limit 1
```
`````

|字面常量 Literal|描述 Description|
|:-:|:-:|
|`date(2023-07-21)`|日期：2023-07-21|
|`date(2023-07-21T14:55)`|具体到分钟的日期（T 分开天数和具体时间）|
|`date(today)`|今天的日期（具体到天数）|
|`date(now)`|现在的日期和时间（具体到纳秒）|
|`date(tomorrow)`|明天的日期（具体到天数）|
|`date(sow)`|start of week——这周的开始日期|
|`date(eow)`|end of week——这周的结束日期|
|`date(som)`|start of month——这个月的开始日期 |
|`date(eom)`|end of month——这个月的结束日期|
|`date(soy)`|start of year——今年的开始日期|
|`date(eoy)`|end of year——今年的结束日期|

比如你想记录这周创建的所有文件，你可以这样写

`````示例代码
```dataview
table file.cday
where file.cday >= date(sow)
```
`````

> [!warning] 注意
> 这周创建不一定是七天内，不能写成 `where file.cday >= date(now) - dur(7 day)`；

## 定长日期

用函数 `dur()` 即可，括号内可以填符合格式的时间，通过这个函数就能映射成一个 dateview 能够识别的时间。我们还可以对这个时间做运算。符合的格式可以看 Metadata 数据类型中的 [[13 - Metadata的数据类型#^df2612|Duration部分]].

举几个只用了最简写的例子（其他的写法上面的链接处都有）

- 大多数为英文首字母，有重复的（比如分钟 minute 和月 month）才有所区分，年比较特殊得用 `yr` 而不是 `y`；
- 中间可以挨着也可以有空格；
- 复合时间用逗号分割，dataview 会自动对他们求和。因此复合时间没有顺序要求，比如可以时分秒，也可以秒分时，也可以秒时分；
- 没有规定秒一定要小于 60，`dur(61s)` 会解释成 1 分 1 秒；

|字面常量 Literal|描述 Description|
|:-:|:-:|
|`dur(1s)` |一秒|
|`dur(3m)`|三分钟|
|`dur(5h)`|五小时|
|`dur(2d)`|两天|
|`dur(4w)`|四周|
|`dur(6mo)`|六周|
|`dur(7 yr)`|七年|
|`dur(1s, 2m, 3h)` |3 小时、2 分钟和 1 秒钟|

接下来，我们开始真正开始进入到代码的世界，[[20 - 代码结构]]
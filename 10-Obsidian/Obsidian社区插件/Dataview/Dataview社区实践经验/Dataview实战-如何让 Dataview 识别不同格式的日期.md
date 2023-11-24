---
uid: 20231111025727
title: Dataview 实战 - 如何让 Dataview 识别不同格式的日期
tags: [Obsidian, Dataview, 日期]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20231111175838
---

# Dataview 实战 - 如何让 Dataview 识别不同格式的日期

在 dataview 中，匹配 [[42 - ISO 8601|ISO8601表示法]] 的文本将自动转换为日期对象（如果你不清楚这是什么，请看 [[13 - Metadata的数据类型]]）

但是并非所有人都按照了 dataview 所采用的 ISO8601 标准来写时间，也许有的人会写成 `yyyy-MM-dd HH:ss`，有的写成 `09/25/2022 09:09 AM`，还有的写成 `22.09.2022 11:15`。有很多种方式用于表示一个日期或者时间，但是 dataview 只能识别一种。但是，如果你用了其他的日期格式也不用慌，本文针对几种不同的日期格式，给出对应的解决方案。（文中所用到的有关字符串的函数可见 [[34 - Dataview 中的字符串操纵函数|Dataview 中的字符串操纵函数]]）

## 空格分开日期与时间：yyyy-MM-dd HH:ss

```
完成时间:: 2022-09-20 10:30
```

如果你用 `typeof(完成时间)` 查看上面这个属性的数据类型，dataview 会告诉你这是一个 string。也就是对于 dataview 来说它只是一个字符串而非日期 + 时间。解决方法如下：

`````示例代码
```dataview
TABLE 完成时间, date(replace(完成时间, " ", "T"))
FROM "改成你的检索范围"
WHERE 加上你的检索条件
```
`````

利用了 `replace()` 函数把空格替换成 "T"，这样这个字符串就符合 ISO8601 表示法的标准了，我们就可以用 `date()` 函数把他转换为能被 dataview 识别的时间了。进而我们也可以对这个数据进行运算了。

## 用点分隔年月日：dd.MM.yyyy HH:ss

```
某个时间点:: 22.09.2022 11:15
```

如果你用上面这种方式表示 2022 年 9 月 22 日 11 点 15 分，那么你可以这样检索

`````示例代码
```dataview
TABLE date(regexreplace(某个时间点, "([0-9]+).([0-9]+).([0-9]+) (.+)", "$3-$2-$1T$4")) AS 换个名字
WHERE 某个时间点
```
`````

需要利用 `regexreplace()` 函数对时间做了一下正则替换。可见如果你的日期格式与 ISO 格式相差很大，那么转换它就变得很麻烦而且容易出错。例如，如果没有时间或日期不使用两位数，则无法匹配上。为了避免麻烦，尽量使用 ISO 格式。

## 用 / 分割日期：MM/dd/yyyy HH:ss AM/PM

```
某个时间点:: 09/25/2022 09:09 AM
```

`````示例代码
```dataview
TABLE date(regexreplace(americanformat, "([0-9]+)/([0-9]+)/([0-9]+) ([0-9:]+)(.+)", "$3-$1-$2T$4")) AS "date"
WHERE germanformat
```
`````

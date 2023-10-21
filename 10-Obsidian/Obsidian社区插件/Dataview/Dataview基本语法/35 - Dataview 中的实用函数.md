---
uid: 20230929120102
title: Dataview 中的实用函数
tags: [Obsidian, dataview, 示例库, function]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20231021213525
---

# Dataview 中的实用函数

### `default(field, value)`

- **功能**：

为属性添加一个默认值。具体的来说就是，如果属性值为空，则返回默认值 value；否则返回属性值。

例如，如果你有个属性 compleDate 代表完成时间，但是在你完成之前不会在笔记中填上，用 dataview 统计的时候会显示空格。这时候你就可以用这个函数 `default(compleDate, "未完成")` 将所有空值用 " 未完成 " 代替，比显示空格更加直观。

有的时候我们只需要判断这个属性是否有值，如果某个属性不是空值，但是属性值是一个列表，并且这个列表有空值。如果使用 `default()` 会把列表中的所有空值都替换了，这时候我们应该用函数 `ldefault()`。

- **输入**：field, value

需要处理的属性以及默认值。

- **示例**：

```
default(dateCompleted, "incomplete")

// 使用 ldefault 不会替换掉列表内部的空值
default(list(1, 2, null), 3)    // 结果为 [1, 2, 3]
ldefault(list(1, 2, null), 3)   // 结果为 [1, 2, null]
```

### `choice(bool, left, right)`

- **功能**：

如果第一个参数为真，则返回左；否则返回右。其实就是 `if bool left else right`，也可以理解为三目运算符 `bool ? left : right`

- **输入**：bool, left, right

三个参数分别为：用于判断选 left 还是 right 的参数 bool，bool 为真的时候输出的值 left，以及为假时输出的值 right。

- **示例**：

```
choice(true, "yes", "no")           // bool 为真值 true，返回 "yes"
choice(false, "yes", "no")          // bool 为假值 false，返回 "no"
choice(x > 4, y, z) = y             // 如果 x > 4，返回 y，否则返回 z

// complete 是一个判断任务是否完成的属性，可以用 choice 来自定义输出样式
choice(complete, "✔", "✖")  
```

### `striptime(date)`

- **功能**：

==删除日期中的时间部分，只保留年、月、日==。如果你不关心时间，那么它很适合用于日期比较。

- **输入**：date
- **示例**：

```
striptime(file.ctime) \\ 文件创建时间去掉时间部分的结果为文件的创建日期 file.cday
striptime(file.mtime) \\ 文件修改时间去掉时间部分的结果为文件的修改日期 file.mday

striptime(date(2023-10-01T12:00)) \\ 去掉了时间部分 12:00，结果为 10 01, 2023
```

### `dateformat(date|datetime, string)`

- **功能**：

使用格式化字符串格式化日期。

- **输入**：date/datetime, string

输入一个日期和格式化的格式。格式化字符串使用了 [Luxon 标记](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)，例如 "yyyy-MM-dd" 代表的是 " 年 - 月 - 日 "，点击链接参考里面的替换符可以设计自己喜欢的日期格式。

- **示例**：

```
dateformat(file.ctime, "yyyy-MM-dd") // 格式化日期为 "年-月-日"，结果为 "2023-10-03"
dateformat(file.ctime, "HH:mm:ss") // 格式化日期为 "时:分:秒"，结果为 "12:18:04"
dateformat(date(now), "x")   // 格式化日期为 Unix时间戳(毫秒)，结果为 "1407287224054"
dateformat(file.mtime, "ffff") // 格式化日期为冗长的本地化日期和时间
// 结果为 "Wednesday, August 6, 2014, 1:07 PM Eastern Daylight Time"
```

### `durationformat(duration, string)`

- **功能**：

功能和 `dateformat()` 类似，只是输入值从日期变成了定长时间。

- **输入**：duration, string

输入定长时间和格式化的格式。格式化用的占位符有

| 占位符 |代表的单位|
|:-:|:-:|
|`S`|毫秒|
|`s`|秒|
|`m`|分钟|
|`h`|小时|
|`d`|天数|
|`w`|周数|
|`M`|月数|
|`y`|年数|

- **示例**：

```
durationformat(dur("3 days 7 hours 43 seconds"), "ddd'd' hh'h' ss's'") 
// 解释一下："ddd'd' hh'h' ss's'"
// ddd 是指以 3 位数显示天数，3 days 也就是 003.
// 'd', 'h', 's' 有单引号是字符串不是占位符，会被保留。
// hh 是指以 2 位数显示小时数，7 hours 也就是 07.
// ss 是指以 2 位数显示秒数，43 seconds 也就是 43.
// 最终结果为："003d 07h 43s"

durationformat(dur("365 days 5 hours 49 minutes"), "yyyy ddd hh mm ss") 
// 解释一下："yyyy ddd hh mm ss"
// yyyy 是指以 4 位数显示年数，365 days 是一年，也就是 0001.
// ddd 是指以 3 位数显示天数，因为 365 天都算入了年，剩余天数为 000.
// hh 是指以 2 位数显示小时数，5 hours 也就是 05.
// mm 是指以两位数显示分钟数，49 minutes 也就是 49.
// ss 是指以 2 位数显示秒数，没有剩余秒数因此是 00.
// 最终结果为："0001 000 05 49 00"

durationformat(dur("2000 years"), "M months")
// 解释一下："M months"
// M 是指月份数，2000 years 就是 24000.
// months 不是有效的占位符，会直接保留
// 最终结果为："24000 months"

durationformat(dur("14d"), "s 'seconds'")
// 解释一下："s 'seconds'"
// s 代表秒数，14d 也就是 1209600.
// 'seconds' 有单引号是字符串不是占位符，会被保留。
// 最终结果为："1209600 seconds"
```

### `localtime(date)`

- **功能**：

将固定时区的日期转换为当前时区的日期。

- **输入**：date

输入固定时区的日期

- **示例**：

```
localtime(date(now))
```

### `meta(link)`

获取由链接包含的五个元数据组成的**对象**。

> [!note] 注意
> 这个函数的返回值很特殊，返回值是一个对象

一个链接可以被拆分成以下四个部分：

![35 - Dataview 中的实用函数](https://cdn.pkmer.cn/images/Pasted%20image%2020231003185037.png!pkmer)

- 链接展示名：`meta(link).display`，如果没有则为空；
- 是否嵌入：`meta(link).embed`，如果有 `!` 则为 true，否则为 false；
- 链接的路径：`meta(link).path`，一般是短链接，也就是文件名；
- 链接的子路径：`meta(link).subpath`，上图中链接的标题或者块那部分，没有则为空；
- 链接的类型：`meta(link).type`，有三个值，"file","header","block"，分别对应：只链接了文件、链接到文件的标题以及链接到某个块。



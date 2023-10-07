---
uid: 20230724104527
title: Dataview 相关的 FAQ - 常见问题
tags:
  - obsidian
  - 插件
  - dataview
  - faq
  - 常见问题
description: dtaview 插件的常见问题，FAQ
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20230810175131
---

# Dataview 相关的 FAQ - 常见问题

不知道你在使用 Dataview 查询的过程中，是否遇到过 `Dataview: Error:`。Dataview 在解析你的代码过程中，如果遇到无法解析 (Parsing Failed) 的错误，就会显示一个报错信息。在报错信息中，Dataview 会用箭头为你指出无法解析的地方，并且在下放给出可能的修改提示。

🔺如果你的 dataview 代码报错，请你先考虑
* 使用的符号均为**英文格式**
* 留意各种**空格**，否则可能导致检索错误

然后再看看下面有没有你遇到的情况
1. 时间数据类型，月份要写成 07 而不是 7；
	1. 错误示范：`2023-7-24`
	2. 正确示范：`2023-07-24`
2. Expected one of the following：
	1. from 中用 `and`，`or` 表示连接，而不是用 `,`；
	2. 可能是把 `where` 中的内容写到了 `from` 里面；
3. 如果 dataview 查询只有 Query Types 而没有其他任何信息的时候，需要在结尾加一个空格
	1. 例如 `table `
4. 用 List 查询只能有一个附加属性；
5. 时间做减法的时候，只能后面的时间减去前面的时间，比如 `date(now) - date(tomorrow)` 没有结果；
6. 使用字面常量时，年份应该用 `yr`、 `yrs`、`year` 和 `years`，但是不能用 `y`;
7. 因为 Dataview 是按顺序自上而下执行代码，所以如果你先使用了 Limit 操作符，得到的结果可能就不是预期的结果了。
8. 2023-07-21 的数据类型是 number 而不是 date，他的结果是 1995。date(2023-07-21) 或者 date("2023-07-21") 才是日期；
9. 如果你有一个属性名就是 `where`，那么你可以用 `row["where"]` 来替代 WHERE 操作符

欢迎大家在 q 群或者微信群提供更多自己使用 dataview 时经常犯的错误；

下一步，我们介绍下 DQL 和 SQL 的异同 [[41 - DQL 与 SQL 的异同]]
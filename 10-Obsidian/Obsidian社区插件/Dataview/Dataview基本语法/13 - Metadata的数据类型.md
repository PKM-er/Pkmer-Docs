---
uid: 20230724104524
title: Dataview 中的 Metadata 的数据类型
tags: [obsidian, metadata]
description: 基本语法学习指南，Metadata 的数据类型
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20231217141936
---

# Dataview 中的 Metadata 的数据类型

Metadata 是一个键值对（Key - Value，在这里称 Field Name - Field）

## Field Name 属性名

我们为文件添加元数据后，不一定会采用我们给定的格式，它会在**内部**（不会显示）自动对 Field Name 值进行一定修改，以保证格式统一。

> [!summary]+ Field Name 值自动修改规则
> - 如果有粗体、斜体等格式，格式会被擦除，变成普通文本；
> - 如果中间无空格，原本有大写的 Key 值和全部字母小写后的值都可以当作其 Key 值；
> - 如果中间有空格，会被替换成 `-`，并且所有大写字母会被换成小写字母；

举几个例子

|原 Field Name 的写法|修改后|改动内容|
|:-:|:-:|:-:|
| `**basic**` | `basic` |去掉粗体|
| `Basic` |`Basic` 或 `basic` （不能是 `BaSic` 之类）|增加了小写|
| `basic field` | `basic-field` |用 `-` 替换空格|
| `**Bold Field**` | `bold-key` |去掉粗体，并替换空格，同时全部小写|

## Field 属性域

属性域具有数据类型，也就是说，它能够区分数字、文字、时间类型等。不同的数据类型具有不同的信息，比如数字有可以量化的信息，文字有内容信息，时间有年月日信息，布尔类型有真假信息。有了不同的数据类型，我们才可以更高效且准确的进行查询，因此数据类型非常有必要存在。

### string 字符串

默认的数据类型，也是最常用的数据类型。当一个 Field 没有对应的类型时，就为 string 类型（因此可以用双引号包含，也可以不用），常见的可以是，一个单词，一段话等。例如这个 [[43 - YAML 基础]] 中提供的例子，里面的属性：书名，author，country，abstract 的数据类型都是字符串。直接输入中文一般都是字符串；

### number 数字类型

不区分整数还是小数，全部都为数字类型。

### boolean 布尔类型

 分为 true 和 false 两种，代表真和假；

例如这个 [[43 - YAML 基础]] 中提供的例子中的 finish 属性域就是 false，检索的时候就可以直接检索 finish 域为 true 或者 false 来分别查询所有阅读完了或者没读完的书目。文件默认的元数据 `file.starred` 的数据类型也是布尔类型，代表是否标星号。但是星标插件已经被 [[书签]] 插件取代，也许后面这个属性 `file.starred` 会改名；

### date 时间类型

匹配 [[42 - ISO 8601|ISO8601表示法]] 的文本将自动转换为日期对象；

例如：`2023-07-17`，`2023-07-17T16:34:000`，`2021-08-13T14:20:18.992847200-04:00`，能够包含年月日、时分秒、纳秒甚至时区的信息；

- 从时间域 field 中提取信息

|语法|解释|
|:-:|:-:|
|field.year|获取年份|
|field.month|获取月份|
|field.weekyear|获取周数（从每年的第一天开始算，一年约 52 周）|
|field.week|获取周数（从每个月第一天，一月约 4 周）|
|field.weekday|获取星期数（星期 1 为 1、星期 2 为 2）|
|field.day|获取天数|
|field.hour|获取小时数|
|field.minute|获取分钟数|
|field.second|获取秒数|
|field.millisecond|获取纳秒数|

### duration 定长时间

Date 时间是指一个时间点，而 Duration 是指一段时间。比如 1 分钟、1 天、1 年等；

语法：

- 时间长度 + 单位
- 中间可以紧挨着，也可以空格分割，也可以逗号分割，还可以组合；
- 时间长度是数字，单位单复数都行，有：
	- 秒：s、sec、secs、second、seconds；
	- 分钟：m、min、mins、minnute、minutes；
	- 小时：h、hr、hrs、hour、hours；
	- 天：d、day、days；
	- 周：w、wk、wks、week、weeks；
	- 月：mo、month、months；（注意和分钟区分）
	- 年：yr、yrs、year、years；（注意没有 y）

> [!example] 例子
> - 紧挨着：1min
> - 空格分割：3 day
> - 逗号分隔：2 min, 3 hours
> - 组合：1 second 2 min 3 h
> - 顺序无关紧要：2m1s3h 和上一个的结果一致

### link 链接

链接也是其中的一种数据结构，语法和在正文中的一致： `[[链接]]` 或 `[[链接|显示的名字]]` ；

示例：

- 在文档属性：`Linkto: [[...]]`
- 在行内字段中：`Linkto:: ...` ；

### array 数组（List 列表）

多值属性的值域

添加在文档属性中有两种写法：

- 如果是源码模式，有两种写法：
	- 第一种是以逗号分割，用方括号 `[ ]` 括起来；
	- 第二种是用无序列表；

 ```md
---
tags: [obsidian, 插件, Dataview]
---
```

也可以写成

```md
---
tags: 
  - obsidian
  - 插件
  - Dataview
---
```

- 如果你是实时预览模式，你只需要在选择该属性为列表 List，每输入一个值点击回车确认即可

![PixPin_2023-12-17_14-28-03.gif](https://cdn.pkmer.cn/images/PixPin_2023-12-17_14-28-03.gif!pkmer)

添加在行内字段中就直接用逗号分割，如 tags:: obsidian, 插件, Dataview

> [!warning] 注意
> 一个列表中的所有属性的属性值都要相同，因此例如 `example:: 值1, 值2, 3`。这三个属性值的数据类型都是字符串，包括第三个属性值 "3"。
>
> 如果所有属性值都是数字，或者都是布尔值的时候，他们的数据类型才会是数字或者字符串。但凡有一个不是，dataview 会把他们都以字符串的格式识别。因此如果遇到你用列表中的数字加减发现报错，不妨用 `typeof()` 函数检查一下这个 " 数字 " 会不会其实是字符串。

### object 对象

有的属性，没法用一个值来概括，而需要多个值来概括时，这个属性就是一个对象，我们把对象的一个个属性都作为属性域。（列表的多值属性是同一种含义，共享一个属性，对象的多个属性域有不同的含义，是属性的属性，如果有学过面向对象编程应该很熟悉）

语法：

```
--- 
obj: 
  key1: "Value" 
  key2: 3 
  key3: 
   - "List1" 
   - "List2" 
   - "List3" 
---
```

举个例子，比如文件为记录一部电影，属性可以有前奏和片尾曲这两个对象，他们可以有歌名和歌手的属性：

```md
Prelude: 
  - name: ...
  - singer: ...
EndSong:
  - name: ...
  - singer: ...
```

> [!warning] 这种写法只能在 Frontmatter 中使用，Inline Field 中无法使用；

从这里也能看出元数据对于查询有很大帮助。我们可以利用不同数据类型的元数据提供的信息，对文件进行检索，最终查询出符合我们给定的条件（比如作者来自中国需要用 `from = 中国` 来筛选）的所有结果；

下一步，我们就开始学习基础语法之 [[14 - 隐式字段]]，或是返回 [[Dataview基本语法]]。
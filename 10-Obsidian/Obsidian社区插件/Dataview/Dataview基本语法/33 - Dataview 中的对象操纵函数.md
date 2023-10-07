---
uid: 20230929115953
title: Dataview 中的对象操纵函数
tags: []
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20231003191316
---

# Dataview 中的对象操纵函数

这类函数用于操作容器对象内部的值（14 个）；

## 判断是否包含的一类函数

这四个功能相近，都是判断是否包含某个值的。但是他们又不尽相同，看好区别选择你需要的使用。

### `contains(object|list|string, value)`

- **功能**：

检查给定**容器类型**是否包含给定的值。==根据第一个参数是对象、列表还是字符串，该函数的行为略有不同。此函数区分大小写。==

容器类型：对象、列表和字符串

- **输入**：object/list/string, value

有两个输入值，前一个是容器类型数据，后一个是需要判断是否包含在前者的数据。

- **示例**：

```
区分大小写
contains("Hello", "Lo")                       => "Lo" 不包含在 "Hello" 中，因此会返回 false
contains("Hello", "lo")                       => "lo" 包含在 "Hello" 中，因此会返回 true

对于对象，检查该对象是否有与给定名称相同的键。例如
contains(file, "ctime")                       => file 对象自带 ctime 属性，因此会返回 true
contains(file, "day")                         => file 对象没有 day 属性，但是如果文件的标题有日期就会返回 true

对于列表，检查数组中是否有元素等于给定值。例如
contains(list(1, 2, 3), 3)                    => 前一个列表中包含数值 3，因此返回 true
contains(list(), 1)                           => 前一个列表为空列表，返回 false
contains(["this","is","example"], "ex")       => 数组中的 "example" 有 "ex" 的部分，会返回 true

对于字符串，检查给定值是否是字符串的子串（即在字符串内部）。
contains("hello", "lo")                       => "lo" 包含在 "Hello" 中，因此会返回 true
contains("yes", "no")                         => "no" 不包含在 "yes" 中，因此会返回 false
```

### `icontains(object|list|string, value)`

- **功能**：

`contains()` 的**不区分大小写**版本，i 是 insensitive 不敏感的缩写，也就是大小写不敏感的意思。

- **示例**：

```
不区分大小写，两个都返回 true
icontains("Hello", "Lo")     => true
icontains("Hello", "lo")     => true
```

### `econtains(object|list|string, value)`

- **功能**：

检查在字符串/列表中是否有精确匹配的数据。==该函数区分大小写==。econtains 是 exact contains " 精确包含 " 的缩写。看示例理解与 `contains()` 的不同。

- **示例**：

```
对于字符串，与 contains() 一样区分大小写：
econtains("Hello", "Lo")                     => false
econtains("Hello", "lo")                     => true

对于列表，它会检查列表中是否精确包含给定值：
econtains(["this","is","example"], "ex")     = 与 contains() 不同，这里 "ex" 不精确包含于数组，会返回 false
econtains(["this","is","example"], "is")     = 精确包含 "is"，会返回 true

对于对象，它会检查对象中是否存在确切的键名。它不会进行递归检查：
econtains({key:"value", pairs:"here"}, "here")                   = "here" 是 pairs 属性的属性值而不是属性名，返回 false
econtains({key:"value", pairs:"here"}, "key")                    = 对象包含 "key" 这个属性，返回 true
econtains({key:"value", recur:{recurkey: "val"}}, "value")       = "value" 是 key 属性的属性值而不是属性名，返回 false
econtains({key:"value", recur:{recurkey: "val"}}, "Recur")       = "recur" 是属性，但是 "Recur" 不是，区分大小写，返回 false
econtains({key:"value", recur:{recurkey: "val"}}, "recurkey")    = 不会递归检查，也就是对象中的对象的属性不作数，返回 false
```

我们在 [[15 - Literals 字面常量|这里]] 提到过用花括号可以构建对象，冒号前是属性名，冒号后是属性值

### `containsword(list|string, value)`

- **功能**：

检查字符串或列表中的值是否有**完全匹配**的值。**不区分大小写**。不同类型的输入会有**不同的输出结果**，请参阅示例。

- **输入**：list/string, value

与前面三个不同，他的第一个输入值不能是 object 对象。并且对于列表，他会返回一个布尔列表而不是单个布尔值。

- **示例**：

```
对于字符串，不区分大小写：
containsword("word", "word")                               => true
containsword("word", "Word")                               => true
containsword("words", "Word")                              => false
containsword("Hello there!, "hello")                       => true
containsword("Hello there!, "HeLLo")                       => true
containsword("Hello there chaps!, "chap")                  => false
containsword("Hello there chaps!, "chaps")                 => true

对于列表，它会返回一个布尔值列表，表明是否找到了不区分大小写的精确匹配词。
containsword(["I have no words.", "words"], "Word")        => [false, false]
containsword(["word", "Words"], "Word")                    => [true, false]
containsword(["Word", "Words in word"], "WORD")            => [true, true]
```

---

### `extract(object, key1, key2, ...)`

- **功能**：

从对象中提取多个字段，创建一个仅包含这些字段的新对象。

- **输入**：object, key1, key2, ...

需要输入一个对象，以及这个对象中的属性。然后会返回利用这个对象的这些属性和属性值构建的新的对象。

- **示例**：

```
extract(file, "ctime", "mtime")    => 用 file 的 ctime 和 mtime 属性构建新对象 object("ctime", file.ctime, "mtime", file.mtime)
extract(object("test", 1))         => 只给了第一个输入值没有第二个输入值，返回没有属性的对象 object()
```

### `sort(list)`

- **功能**：

对列表进行排序，返回按排序顺序排列的新列表。

- **输入**：list

输入一个列表

- **示例**：

```
sort(list(3, 2, 1))          => 返回以排好序的列表 list(1, 2, 3)
sort(list("a", "b", "aa"))   => 返回以排好序的列表 list("a", "aa", "b")
```

### `reverse(list)`

- **功能**：

翻转列表，返回顺序颠倒的新列表。

- **输入**：list

输入一个列表

- **示例**：

```
reverse(list(1, 2, 3))          => 返回数组 list(3, 2, 1)
reverse(list("a", "b", "c"))    => 返回数组 list("c", "b", "a")
```

### `length(object|array)`

- **功能**：

返回**对象的字段数**或**数组的条目数**。

- **输入**：object/array

可以输入一个对象或者一个数组

- **示例**：

```
length([])                                      = 空数组的长度为 0
length([1, 2, 3])                               = 这个数组有三个元素，返回 3
length(object("hello", 1, "goodbye", 2))        = 对象有两个属性，返回 2
```

---

### `nonnull(array)`

- **功能**：

返回一个**删除了所有空值**的新数组。

- **输入**：array

输入一个数组

- **示例**：

```
nonnull([])              => 已经是空数组了，没有空值，删除后是本身 []
nonnull([null, false])   => 删掉了空值 null，返回 [false]
nonnull([1, 2, 3])       => 没有空值，返回原数组 [1, 2, 3]
```

### `all(array)`

- **功能**：

只有当数组中的==所有值都为真==时才返回 true（理解为 all is true? 全为真吗？）。==只要不是 0, null, false，都会视作真值，表达式结果为真也是真值==

- **输入**：array

输入一个数组。你也可以向该函数传递多个参数，在这种情况下，只有当所有参数都为真时，该函数才返回 true。

- **示例**：

```
只要不是 0, null, false，都会视作真值
all(0)              => 返回 false
all(null)           => 返回 false
all(false)          => 返回 false
all(1)              => 返回 true
all("a")            => 返回 true
all((x) => x > 0)   => lambda 表达式也是真值

真值加上非运算符 ! 会变成假值
all(!1)             => 返回 false
all(!0)             => 返回 ture

输入值为数组
all([1, 2, 3])            => 数组中的值都为真值，返回 true
all([true, false])        => 数组中有 false，不是全部为真值，返回 false

输入值为多个值，之间为且的关系，即第一个值为真，并且第二个值为真，并且第三个值为真...才会返回真。
all(true, false)                 => 输入多个值包含假值 false，返回 false
all(true, true, true)            => 输入的多个值都是真值，返回 true

输入值有 lambda 表达式时，会作用在输入的数组上
all([1, 2, 3], (x) => x > 0)                               => 数组中的三个值都大于 0，返回 true
all([1, 2, 3], (x) => x > 1)                               => 数组中的 1 不大于 1，返回 false
all(["apple", "pie", 3], (x) => typeof(x) = "string")      => 数组中的 3 不是字符串，返回 false
```

### `any(array)`

- **功能**：

如果数组中的==任何值为真==，则返回 true。==只要不是 0, null, false，都会视作真值，表达式结果为真也是真值==

- **输入**：array

输入一个数组。你也可以向该函数传递多个参数，在这种情况下，如果任何参数为真，则返回 true。

- **示例**：

```
存在真值就返回 true
any(list(1, 2, 3))                 = true
any(list(true, false))             = true
any(list(false, false, false))     = 对于数组，会判断数组中值是否有真值，这里都是 false，因此返回 false
any(true, false)                   = true
any(false, false)                  = false

输入值有 lambda 表达式时，会作用在输入的数组上
any(list(1, 2, 3), (x) => x > 2)   = 数组中存在数值 3 大于2，因此返回 true
any(list(1, 2, 3), (x) => x = 0)   = lambda 表达式使得数组变成 [0,0,0]，没有真值返回 false
```

### `none(array)`

- **功能**：

如果数组中没有真值，返回 true。和 `any()` 对立。==只要不是 0, null, false，都会视作真值，表达式结果为真也是真值==

- **输入**：array

输入一个数组。你也可以向该函数传递多个参数，在这种情况下，如果任何参数为真，则返回 false。

- **示例**：

```
none([])                => true
none([false, false])    => true
none([false, true])     => 数组中有真值，返回 false
none([1, 2, 3])         => 数组中都是真值，返回 false

none([1, 2, 3], (x) => x = 0)             => lambda 表达式作用在数组上把所有值改为 0，没有真值返回 true
none([true, true], (x) => x = false)      => lambda 表达式作用在数组上，数组没有值等于 false，因此全部变为 false。没有真值返回true

函数 startswith() 用于检查字符串是否以给定的前缀开头，因为数组中只有 "Apple" 是以 "A" 开头，因此数组变成 [true, false, false]，存在真值返回 false
none(["Apple", "Pi", "Banana"], (x) => startswith(x, "A"))   => false
```

---

### `join(array, [delimiter])`

- **功能**：

将数组中的元素连接成一个字符串（即在同一行中显示所有元素）。如果提供第二个参数，则每个元素都将用给定的分隔符分隔。

- **输入**：array，[delimiter]

需要输入一个合并的数组以及可以选择的分隔符；

- **示例**：

```
join(list(1, 2, 3))        => 合并数组，结果为 "1, 2, 3"
join(list(1, 2, 3), " ")   => 合并数组，以空格分隔，结果为 "1 2 3"
join(6)                    => 单个数字合并后变成一个字符串 "6"
join(list())               => 空数组合并后是空的字符串：""
```

### `filter(array, predicate)`

- **功能**：

根据表达式**过滤数组中的元素**，返回匹配元素的新列表。

- **输入**：array, predicate

array 是待过滤的数组，predicate 是元素保留需要满足的表达式

- **示例**：

```
filter([1, 2, 3], (x) => x >= 2)                            => 保留大于等于 2 的元素，结果为 [2, 3]
filter(["yes", "no", "yas"], (x) => startswith(x, "y"))     => 保留以 "y" 开头的字符串，结果为 ["yes", "yas"]
```

### `map(array, func)`

- **功能**：

对数组中的每个元素应用某个函数，返回映射结果列表。

- **输入**：array, func

输入一个待处理的数组，以及需要应用在数组中每一个元素的函数

- **示例**：

```
map([1, 2, 3], (x) => x + 2)           = 把数组的每个元素加二，结果为 [3, 4, 5]
map(["yes", "no"], (x) => x + "?")     = 为每个字符串拼接一个问号，结果为 ["yes?", "no?"]
```

### `flat(array, [depth])`

- **功能**：

将数组的子级连接到所需的深度。默认为 1 层，但也可以连接多层。例如，在进行 GROUP BY 后，可用于减少行列表的数组深度。和 `FLATTEN` 操作符类似。

- **输入**：array, [depth]

输入待连接的数组以及连接的深度，不填深度默认全部元素连接到第一层。

- **示例**：

```
flat(list(1, 2, 3, list(4, 5), 6))                            => 把元素都连接到同一层，结果为 list(1, 2, 3, 4, 5, 6)
flat(list(1, list(21, 22), list(list (311, 312, 313))), 4)    => 多层数组也可以变为同一层，结果为 list(1, 21, 22, 311, 312, 313)
flat(rows.file.outlinks))                                     => 把所有文件外链放到第一层
```

---
uid: 20230916145139
title: Dataview 语法实战：自定义排序进阶操作实例
tags: []
description: Dataveiw 自定义排序进阶操作
author: 
type: other
draft: false
editable: false
modified: 20231028225753
---

# Dataview 语法实战：自定义排序进阶操作实例

在 [[Dataview语法实战-自定义排序的简单实例]] 中，我们已经实现了自定义排序的功能，但是当自定义的量大的时候，需要嵌套的 `choice()` 函数就会很多。此时我们就需要利用另一个函数 `default()` 和 [[24 - 表达式|lambda 表达式]]

`````示例代码
```dataview
TABLE recipe-type
FROM "10 Example Data/food"
WHERE recipe-type
SORT default(((x) => {
	"vegetarian":1, 
	"meat":2,
	"onepot": 3
}[x])(recipe-type), "99") ASC
```
`````

`default(field, value)` 函数是给没有值的属性填上一个默认值 value。如果确保没有空属性，可以填任意的数都行，或者可以不用 `default()`。这里的 value 是 99，是让没有食谱类型的行都放到最后。现在看一看前一半的 lambda 表达式，他的结构是这样的

```
((x) => {...}[x])(recipe-type)
```

这里也分为两个部分 `((x) => {...}[x])` 和 `(recipe-type)`。

前一个部分，我们定义一个函数，这个函数的输入值是 x，返回值是 ... 的内容。不理解的话可以看下面这个简单的例子，输入值是 x，他会变成两倍然后返回给我们。

```
(x) => 2*x
```

而里面的 `[x]` 的 x 则是声明我们输入函数的值是 x。

后一部分就是我们的输入函数的真正的输入值了，这里代表我们的输入值是 recipe-type，他会替代 x 的位置进入函数。

如果你不懂的话，就直接在复制 SORT 那一行代码，然后把里面的 vegetarian, meat 和 onepot 改成你想要排序的值，如果还有中间用逗号分割往下写就可以用了。记得别忘了把 recipe-type 改成你自己的输入属性。
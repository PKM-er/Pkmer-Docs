---
uid: 20230828012827
title: Dataview 实战：定制你的数据表格并，为 Dataview 表格列添加个性化样式
tags:
  - obsidian
  - dataview
  - table
  - 美化
  - 样式
  - 个性化
description: Dataview 实战：定制你的数据表格并，为 Dataview 表格列添加个性化样式
author: Huajin
type: other
draft: false
editable: false
modified: 2023090813421640700
---

# Dataview 实战：定制你的数据表格并为表格列添加个性化样式

在 [[22 - 查询字段]] 中我们提到过，当我们在查询字段中将文件的元数据和一些描述词组合时，可以为表格对应列中的每个元素添加一些特殊样式，当时只给了利用 Obsidian 提供的 Markdown 语法组成不同的样式，这里将会利用 html 提供更多的玩法

> [!tip] 前情提要
> 文件中的元数据有 publisher, developer 和 price，（索引的文件全部来自 "10 Example Data/games" 文件夹）

## 改变列中元素的对齐方式

这里我们以右对齐举例，让属性 price 中的每一个值都右对齐

源码如下

`````示例代码
```dataview
TABLE 
	publisher,
	developer,
    "<span style='display:flex; justify-content: right;'>" + price + "</span>" AS Price
FROM "10 Example Data/games"
```
`````

效果展示

![Pasted image 20230828004832.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230828004832.png!pkmer)

可以看到，Price 列下方的所有值都变成了右对齐（增加了样式的属性 price 被重命名为了 Price，如果不重命名，则会显示原本的一长串带有 html 的属性名）

代码中的 `"<span style='display:flex; justify-content: right;'>" + price + "</span>"` 利用了 html，其中

- `display:flex` 使得属性值以弹性布局的方式显示；
- `justify-content: right` 使得属性值右对齐

因此我们只要把上面代码 `"<span style='display:flex; justify-content: right;'>" + price + "</span>"` 中的 right 给改成 center 或者 left 我们就可以得到居中对齐和左对齐啦。

## 为列元素添加下划线、删除线、波浪线

我们知道，当文本被 `<u>...</u>` 和 `<span style='text-decoration: underline;'>...</span>` 包裹的时候，能够渲染出下划线。因此我们都可以利用 `+` 来把属性组合成这样的新属性，例如

`````示例代码
```dataview
TABLE 
	publisher,
	developer,
    "<u>" + price + "</u>" AS Price
FROM "10 Example Data/games"
```
`````

可以为 price 属性添加下划线。下面就直接给出其他几种样式的 html 代码，用法和上面的一样，都是利用 `+` 来把属性组合成对应的新属性然后重命名

- 下划线：`<span style='text-decoration: underline;'>...</span>`
- 删除线：`<span style='text-decoration: line-through;'>...</span>`
- 波浪线：`<span style='text-decoration: underline wavy;'>...</span>`，wavy 和 underline 的顺序可以调换

![Pasted image 20230828005653.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230828005653.png!pkmer)

## 来试试为你的表格添加更多的颜色吧

如果单加上样式不能满足你的需求，不妨试试再加一些颜色

我们可以利用 `style='color: ...;'` 来为对应属性值添加颜色，来试试给 publisher 属性加上亮绿色

`````示例代码
```dataview
TABLE 
	"<span style='color: lightgreen;'>" + publisher + "</span>" as Publisher,
	developer,
    price
FROM "10 Example Data/games"
```
`````

![Pasted image 20230828001650.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230828001650.png!pkmer)

当然，颜色也不止可以加在文字上，还可以加在上面的三种线中，例如我们可以用 `<span style='text-decoration: underline wavy; text-decoration-color: yellow;'>...</span>` 得到黄色波浪线。

如果要别的颜色，把 yellow 替换成想要的颜色就可以了。替换掉颜色可以可以是像 yellow 和 lightgreen 的英文，也可以是 RGB 或者十六进制颜色代码，例如你可以这样得到荧光绿的波浪线 `<span style='text-decoration: underline wavy; text-decoration-color: rgb(0, 255, 0);'>...</span>` 或者 `<span style='text-decoration: underline wavy; text-decoration-color: #00FF00;'>...</span>`

![Pasted image 20230828010502.png](https://cdn.pkmer.cn/images/Pasted%20image%2020230828010502.png!pkmer)

同样的，我们还可以类比，比如让所有的属性值大写，可以用 `<span style='text-transform: uppercase;'>`，小写则用 `<span style='text-transform: lowercase;'>`。

如果你希望在代码的 Field 区域写那么多 html，你可以利用 Flatten 函数把他们放到后边去，以下两段代码的结果是一样的

`````示例代码
```dataview
TABLE 
	"<span style='color: lightgreen;'>" + publisher + "</span>" as Publisher,
	developer,
    price
FROM "10 Example Data/games"
```
`````

`````示例代码
```dataview
TABLE 
	前缀 + publisher + 后缀 as Publisher,
	developer,
    price
FROM "10 Example Data/games"
FLATTEN "<span style='color: lightgreen;'>" AS 前缀
FLATTEN "</span>" AS 后缀
```
`````

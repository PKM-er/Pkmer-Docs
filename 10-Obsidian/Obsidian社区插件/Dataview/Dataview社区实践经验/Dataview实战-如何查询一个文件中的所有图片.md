---
uid: 20231031133333
title: Dataview 实战：如何使用 Dataview 查询一个文件中的所有图片
tags: [Obsidian, dataview, 图片]
description: 使用 Dataview 查询一个文件中的所有图片
author: Huajin
type: other
draft: false
editable: false
modified: 20231105004403
---

# Dataview 实战：如何使用 Dataview 查询一个文件中的所有图片

在笔记中插入图片实际上是嵌入图片的链接

```
![[image.png]]
```

所以，图片也属于笔记的链接。我们在 [[14 - 隐式字段]] 中提到了文件的一个元数据 `file.outlinks`，他的属性值就是文件的所有外联，嵌入的图片当然也包含在内。

> [!warning] 注意
> 本文不包括网页链接

因此我们可以这样写得到一个文件中的所有==外链==。

````示例代码
```dataview
TABLE without id file.outlinks
FROM "..."
```
````

下一步：筛选代表图片的外链

````示例代码
```dataview
TABLE without id 图片
FROM "要查询的文件的路径"
FLATTEN filter(file.outlinks, (x) => endswith(meta(x).path,"png") AS 图片
```
````

这里选择了筛选链接对象路径名的后缀是否以 "png" 结尾。

如果要添加更多格式，只需要在 FLATTEN 那一行的 AS 前面加上 `or endswith(meta(x).path,"后缀"))`

- `or` 代表或。
- `"后缀"` 则需要替换成你需要保留的图片的后缀。

例如下面代码保留了 png 和 jpg 图片

````示例代码
```dataview
TABLE without id 图片
FROM "要查询的文件的路径"
FLATTEN filter(file.outlinks, (x) => endswith(meta(x).path,"png") or endswith(meta(x).path,"jpg")) AS 图片
```
````

- filter 函数：见 [[33 - Dataview 中的对象操纵函数]]；
- endswith() 函数：见 [[34 - Dataview 中的字符串操纵函数]]；
- meta() 函数：见 [[35 - Dataview 中的实用函数]]；
---
uid: 20231118153931
title: 用表格和列表汇总罗列与当前文件有相同元数据的文件
tags: [Obsidian, Dataview]
description: Dataview 实战：列出与当前字段值相同的页面，例如，查找共享配料的食谱
author: Huajin
type: other
draft: false
editable: false
modified: 20231120093746
---

# 用表格和列表汇总罗列与当前文件有相同元数据的文件

假设文件中包含一个元数据 `配方类型::素食`，列出所有具有这个元数据的文件

````
```dataview
LIST
FROM "10 Example Data/food"
WHERE 配方类型 = this.配方类型
```
````

如果是多值属性，例如以食材做例子，文件中有 `所需食材: [...]` 的多值属性，想要列出和当前文件用了相同食材的其他文件

````
```dataview
TABLE 食材 as 共同食材
FROM "10 Example Data/food"
WHERE 所需食材
FLATTEN 所需食材 as 食材
WHERE contains(this.所需食材, 食材) AND file.name != this.file.name
```
````

假如当前文件 A 的所需食材包含培根、火腿，另一个文件 B 的所需食材属性也包含这两个，那么如果用上面的写法，B 文件就会在结果中出现两次。此时我们加个分组

````
```dataview
TABLE rows.食材 as "共同食材"
FROM "10 Example Data/food"
WHERE 所需食材
FLATTEN 所需食材 as 食材
WHERE contains(this.所需食材, 食材) AND file.name != this.file.name
GROUP BY file.link
```
````

这样同一个文件的内容都会放到同一行。如果我们想要的是同一个食材放到同一行呢？换句话说，我们想包含培根食材的占一行，包含火腿的占一行。其实只需要把分组条件改为食材即可。

````
```dataview
TABLE WITHOUT ID 食材 AS "共同食材", rows.file.link AS "食谱"
FROM "10 Example Data/food"
WHERE 所需食材
FLATTEN 所需食材 as 食材
WHERE contains(this.所需食材, 食材) AND file.name != this.file.name
GROUP BY 食材
```
````

最后，我们还可以利用 `length()` 函数统计他们的数量

````
```dataview
TABLE WITHOUT ID 食品 AS "共同食材", 食谱数量, rows.file.link AS 食谱
FROM "10 Example Data/food"
WHERE 所需食材
FLATTEN 所需食材 as 食材
WHERE contains(this.所需食材, 食材) AND file.name != this.file.name
GROUP BY 食材
FLATTEN length(rows.file.link) as 食谱数量
```
````
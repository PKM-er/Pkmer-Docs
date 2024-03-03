---
uid: 20240303200147
title: Dataview 实战 - 展示笔记总数
tags: [Obsidian, Dataview, 统计]
description: Dataview实战-展示笔记总数
author: tk
type: other
draft: false
editable: false
modified: 
---

# Dataview 实战 - 展示笔记总数

安装 Dataview 插件后，可以用非常简单的语句展示笔记总数，不需要使用 JavaScript。

````
```dataview
list without id length(rows)
group by 12345
```
````

上面的语句没有对数据来源进行选择，直接查询了整个笔记库。使用 `group by` 对结果进行分组，这里只是为了将数据整体变成一个组，所以随便填写了 12345。`length(rows)` 得到组中的总数，`without id` 用于去掉无用内容。此时的数字便是库中笔记总数（不包含特殊类型的文件）。

可以对语句进行一些加工，以标注的形式展现在笔记库主页、索引或其它页面中。

````
> [!tip] 笔记库统计
> ```dataview
> list without id "笔记库中共有" +length(rows) + "个页面，总计约" + round(sum(rows.file.size)/10000,0) + "万字节（" + round((sum(rows.file.size)/1048576), 2) + "MB）" group by 12345
> ```
````

![展示笔记总数1.JPG](https://cdn.pkmer.cn/images/%E5%B1%95%E7%A4%BA%E7%AC%94%E8%AE%B0%E6%80%BB%E6%95%B01.JPG!pkmer)

同理，也可以使用表格。

````
```dataview
table without id "库中共有" +length(rows) + "个页面，总计约" + round(sum(rows.file.size)/10000,0) + "万字节（" + round((sum(rows.file.size)/1048576), 2) + "MB）" as "笔记库统计"
group by 12345
```
````

````
```dataview
table without id length(rows) as "页面总数" , round(sum(rows.file.size)/10000,0) + "万" as "字节统计"
group by 12345
```
````

![展示笔记总数2.JPG](https://cdn.pkmer.cn/images/%E5%B1%95%E7%A4%BA%E7%AC%94%E8%AE%B0%E6%80%BB%E6%95%B02.JPG!pkmer)

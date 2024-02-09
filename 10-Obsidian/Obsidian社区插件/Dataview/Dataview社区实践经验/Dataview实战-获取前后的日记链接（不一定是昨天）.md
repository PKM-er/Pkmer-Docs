---
uid: 20231202191238
title: Dataview 实战 - 获取前后的日记链接（不一定是昨天）
tags: [obsidian, dataview, 日记]
description: 获取前一天或者后一天的笔记的链接（不一定是相邻的两天）
author: Huajin
type: other
draft: false
editable: false
modified: 20231202192025
---

# Dataview 实战 - 获取前后的日记链接（不一定是昨天）

在日记中也许你会放上一个到前一天的链接，考虑到不一定是每天都写日记，前一天不一定是昨天，因此这个操作当然可以手动完成，但是如果你想要放在模板里面就不只是 day - 1 那么简单了。这里提供一份使用 dataview 的方法

`````示例代码
```dataview
LIST
FROM "10 Example Data/dailys"
WHERE file.name != this.file.name AND file.day < this.file.day
SORT file.day DESC
LIMIT 1
```
`````

主要逻辑就是利用日期的比较运算，找到距离本文件创建日期最近的文件，就是前一份日记。你也可以用行内查询把他放到某一段中

```示例代码
`$= dv.pages('"10 Example Data/dailys"').where(p => p.file.day && p.file.day < dv.current().file.day).sort(p => p.file.day, "desc").file.link.limit(1)`
```

只需要把小于号改成大于号，我们就可以得到后一天的日记的链接啦

`````示例代码
```dataview
LIST WITHOUT ID t
FROM "10 Example Data/dailys"
WHERE file.name != this.file.name AND file.day > this.file.day
SORT file.day ASC
FLATTEN "Next day: " + file.link AS t
LIMIT 1
```
`````

注意，这里还是用了 FLATTEN 来为结果拼凑了一个 "Next day" 上去
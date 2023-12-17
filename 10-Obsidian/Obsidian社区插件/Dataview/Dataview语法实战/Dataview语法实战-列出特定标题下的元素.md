---
uid: 20231027195133
title: Dataview 语法实战 - 列出特定标题下的元素
tags: [obsidian, dataview]
description: 列出特定标题下的元素
author: Huajin
type: other
draft: false
editable: false
modified: 20231209174759
---

# Dataview 语法实战 - 列出特定标题下的元素

> [!warning] 注意
> 在不使用 dataviewjs 查询的情况下，dataview 检索的最小单位是页面和列表（有序、无序和任务），因此，如果想要列出特定标题下的元素，这个元素只能是列表。

## 适用场景

如果你的同一类型的笔记都以相同的格式书写，每篇笔记都存在相同的一个标题，那么你就可以统计所有相同标题之下的所有列表。当然也可以为这些列表添加限制条件，比如筛选包含了某个 tag 的列表，又或者是列表的某个 Metadata 为特定值。

更具体的例子，比如你的所有日记，可能你时不时会摘录一些语句放到日记的 `摘录` 标题之下。有一天，你想列出你摘录的所有语句，你就可以用本文的方法。又或者，你设置了所有 [[obsidian-memos|Memos]] 都存储在 `Memos` 标题下，你想在某一篇笔记中汇集你的所有 Memos，也可以用本文的方法。

## 示例代码

`````示例代码
```dataview
TABLE L.text AS 摘录
FROM "Dairy"
FLATTEN file.lists AS L
WHERE meta(L.section).subpath = "摘录"
```
`````

直接复制粘贴到你的库中，这段代码应该是无效的。你至少需要修改：

- 第二行 `FROM` 之后的检索路径，例如 `FROM "Dairy/2023"`；
- 第四行的 `"摘录"`，改成等于你的特定标题，例如 `WHERE meta(L.section).subpath = "你的标题"`；

如果修改这两项之后的结果还不能满足你的要求，那就继续往下看。如果想看这段代码的具体解释，拉到最后。

> [!warning] 注意
> 本文所有展示结果都以 `TABLE` 表格样式输出，还可以以 `LIST` 无序列表或者 `TASK` 任务列表样式展示，自行修改代码开头的查询类型即可。注意 `LIST` 查询只能展示一个字段。

## 代码”补丁“

### 列表包含某个 tag

列出标题 `摘录` 之下的包含标签 `#泰戈尔` 的所有列表，只需要结尾加一个 `WHERE` 语句即可

`````示例代码
```dataview
TABLE L.text AS "语句"
FROM "Diary/2023"
FLATTEN file.lists AS L
WHERE meta(L.section).subpath = "摘录"
WHERE contains(L.tags, "#泰戈尔")
```
`````

### 列表包含某 Metadata

如果你不是以 tags 形式标记一个语句的作者，而是以 [[12 - 添加元数据至列表和任务|向列表添加元数据]] 的方式添加的作者：

```
## 摘录
- 往往是那些善良的愿望，把人们带入人间地狱。`(作者::赫尔德林)`
```

那么你可以这样写

`````示例代码
```dataview
TABLE L.text AS "语句"
FROM "Diary/2023"
FLATTEN file.lists AS L
WHERE meta(L.section).subpath = "摘录"
WHERE contains(作者, "赫尔德林")
```
`````

### 列表包含特定文字

`````示例代码
```dataview
LIST L.text AS "语句"
FROM "Diary/2023"
FLATTEN file.lists AS L
WHERE icontains(L.text, "特定文字")
```
`````

### 按文件成组

`````示例代码
```dataview
TABLE rows.L.text AS "语句"
FROM "Diary/2023"
FLATTEN file.lists AS L
WHERE meta(L.section).subpath = "语句"
GROUP BY file.link
```
`````

既然需要按文件成组，我们完全可以把筛选的细度放到文件而不是列表上，这样就不需要用到 `GROUP BY` 操作符了。

`````示例代码
```dataview
TABLE WITHOUT ID "<nobr>" + file.link + "</nobr>" AS Page, 摘录
FROM "Diary/2023"
FLATTEN list(filter(file.lists, (x) => meta(x.section).subpath = "摘录").text) as 摘录
WHERE 摘录
```
`````

- 这里的 `<nobr>` 的作用是阻止文本自动拆分成新行，所以它展示为一长行。这个标签不是标准的 html 语言，应该使用 CSS 属性 `white-space`，例如 `<span style="white-space: nowrap">file.link</span>`
- `(x) => meta(x.section).subpath = "摘录"` 是 lambda [[24 - 表达式|表达式]]

### 根据不同的标题制作多个列

有时候需要汇集的内容不是某一特定的标题下的列表，可能是多个特定标题之下的列表，我们想让他们在表格的不同列展示的话，需要用到 `FLATTEN` [[23 - 操作符|操作符]]。

`````示例代码
```dataview
TABLE WITHOUT ID "<nobr>" + file.link + "</nobr>" AS 摘录, Memos
FROM "Diary/2023"
FLATTEN list(filter(file.lists, (x) => meta(x.section).subpath = "Research").text) as Research
FLATTEN list(filter(file.lists, (x) => meta(x.section).subpath = "Topics").text) as Topics
WHERE Research OR Topics
```
`````
---
uid: 20230916154336
title: Dataview 列表简单查询示例
tags: [obsidian, dataview, 示例]
description: Dataview 列表简单查询示例
author: Huajin
type: other
draft: false
editable: false
modified: 20231209174856
---

# Dataview 列表简单查询示例

**列出一个文件夹中的文件：**

`````示例代码
```dataview
LIST
FROM "10 Example Data/games"
```
`````

**列出多个文件夹之下的文件：**

`````示例代码
```dataview
LIST
FROM "10 Example Data/books" OR "10 Example Data/games"
```
`````

**列出所有包含标签为 type/book 的文件：**

`````示例代码
```dataview
LIST
FROM #type/books 
```
`````

**列出包含标签 dvjs/el 或 dv/min 的文件：**

`````示例代码
```dataview
LIST
FROM #dvjs/el OR #dv/min 
```
`````

**列出在文件夹 games 之下且具有标签 genre/action 的所有文件**

`````示例代码
```dataview
LIST
FROM "10 Example Data/games" AND #genre/action  
```
`````

**列出所有文件**

> [!attention] 注意❗
> - 这个结果可能会非常的长，这取决于你的库的文件数目。dataview 更新后过长的结果并不会让你的 obsidian 变得卡顿，可以放心尝试。
> - 如果实在担心，可以另起一行写上 `limit n` 来限制只展示 n 个结果（n 换成你想展示的结果的个数）；
> - - <s>只用 `LIST` 查询时结尾需要跟一个空格。</s> 在 0.5.57 版本修复了这个 BUG。

`````示例代码
```dataview
LIST
```
`````
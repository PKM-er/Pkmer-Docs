---
uid: 20250312144033
title: Dataview 入门教程
tags: [dataview, 教程]
description: 给完全不懂Dataview语法的人看的基础入门教程
author: Moy
type: other
draft: false
editable: false
modified: 20250316210918
---

# Dataview 入门教程

本贴基本上是作为一个「**给完全不懂的人看的基础入门教程**」，以便在今后的其他 DV 分享中直接引用，而不必重复说明。

如果你已经会用 DV 了，则不需要看这个非常粗浅的入门说明。

而如果你看到一些帖子只放了所谓”DV 代码“，茫然无措，那么这篇文章是为你准备的。

## DV 脚本是什么？

DV 是 **Dataview** 的简称，这是一款专门用来做 Obsidian 内「数据查询」的插件。

> [!tip] 插件说明：
> 将您的 Obsidian Vault 视为您可以从中查询的数据库。
> 提供 JavaScript API 和基于管道的查询语言，用于**从 Markdown 页面筛选、排序和提取数据**。
> - 仓库：[blacksmithgu/obsidian-dataview: A data index and query language over Markdown files, for https://obsidian.md/.](https://github.com/blacksmithgu/obsidian-dataview)
> - 文档：[Dataview](https://blacksmithgu.github.io/obsidian-dataview/)

例如，它可以用表格呈现某个文件夹内的笔记和元数据：

![](https://cdn.pkmer.cn/images/202503162108685.webp!pkmer)

也可以在单个笔记内快速收集带有关键字的段落。

> 详见：[[Obsidian汇总显示笔记内的关键信息]]

这些功能需要用 `dataview代码块` 实现。

___

有两种类型代码块，一种是 `dataview` 查询块：

````md
```dataview  
table time-played, length, rating
from "games"
sort rating desc
```
````

另一种是 `dataviewjs` 脚本：

 前者算是一种自定义语法的查询语言，后者则是 Javascript 脚本语言，可以调用 `dv` 提供的函数来呈现结果。

想要知道区别，就看三个 \` 后面跟着的是 `dataview` 还是 `dataviewjs` 就行了。

想进一步了解可以看官方的文档：

[DQL, JS and Inlines - Dataview](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/)

## 怎么用？

如果你看到一个帖子附上了 **dataview 代码**，想要在自己的笔记中实现类似的效果，你需要：

1. 在 Obsidian 内安装 **Dataview** 插件
2. 如果是 `dataviewjs` 代码，需要在插件设置里勾选脚本功能：![](https://cdn.pkmer.cn/images/202503162108687.webp!pkmer)
3. 将代码块粘贴进自己的笔记

另外，由于 dataview 查询常常和路径、文件夹名称挂钩，所以如果没有显示出预期的结果，需要检查里面的路径，替换成自己的实际路径。

在 dv 里，通常是 `FROM` 后面跟着的内容。

例如上面举例的：

````md
```dataview  
table time-played, length, rating
from "games"
sort rating desc
```
````

这里是 `from "games"` 即从 `games/` 这个文件夹中查找笔记。

而如果我本地是放在另一个文件夹里，就需要改成相应的 `from "游戏数据库/我的游戏"` 这样的路径。

> 在 [[dataview]] 中有关于 Dataview 更详细的用例，以及语法解释。
> 想要真正了解它的话，尤其推荐这篇：[[Dataview基本语法|开篇-Dataview基本语法]]

### 进阶用法：单独的 JS 文件

有时候，我们会写一个单独的 js 文件，并且用它来作为 `dataviewjs` 查询。

这可能出于多种原因，大多数情况下是为了==能方便地在多个笔记中复用同一套代码==，并且可以很容易地更新查询，不需要改动原笔记。

这种情况下，需要先在仓库里创建一个 `脚本.js` 文件，然后将 JS 代码粘贴进去，保存。

然后，笔记内插入这样的 dvjs 代码块：

````md
```dataviewjs
dv.view("脚本")
```
````

它会读取你笔记库内 `脚本.js` 的内容，并且渲染出对应脚本执行后的结果。

注意，尽量不要重名。

你也可以写成完整的路径，例如：`脚本/Dataview脚本/一个脚本.js` 的话，就写成：

````md
```dataviewjs
dv.view("脚本/Dataview脚本/一个脚本.js")
```
````

最后，还有更进阶的一种方式，如果你还想自己定义 CSS 样式，可以把脚本和 css 放进一个文件夹，例如这样两个文件：

`脚本/Dataview脚本/漂亮的查询表格/view.js`

`脚本/Dataview脚本/漂亮的查询表格/view.css`

这样一来，你可以直接通过文件夹的名称来调用：

````md
```dataviewjs
dv.view("漂亮的查询表格")
```
````

更进一步，还可以给脚本传递参数，来实现不同的功能开关。

但是这显然超出**入门**范畴了，这里就略过不表。

感兴趣也可以看官方的说明：[Codeblock Reference - Dataview](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvviewpath-input)

> ⚠️ 必要的警告：
> 由于脚本功能本身有风险，所以最好不要随便什么脚本都往库里放。
> 因为 Javascript 作为脚本语言，可以做到包括但不限于**修改笔记内容**等各种事项。
>
> 如果不放心，可以先把脚本粘贴给 AI，询问它这段脚本的作用以及是否有风险。
---
uid: 20231023200354
title: Dataview 实战 - 通过 Dataview 列出标签所在段落内容
tags: [Obsidian, dataview, 标签, tags, 汇总]
description: 列出标签所在的段落内容
author: 劉同學
type: other
draft: false
editable: false
modified: 20231024001648
---

# Dataview 实战 - 通过 Dataview 列出标签所在段落内容

## 应用场景

本段代码适用于收集的独立的知识片段和语录的查询与展示（或其他需要查询的地方），之前找了好久，好多都是展示包含标签内容的所在文件夹，并不包括笔记内容，最后在搜索引擎和 GPT 的帮助下合成此代码。

这样在收集知识片段的时候，如果暂时不知该如何给他设置文件夹分类，可以直接在文字后边加上所关联的标签。

## 代码片段

````
```dataviewjs
//使用时修改关键词即可
const term ="#标签"
let folderpath="限定文件夹"
//更改为限定文件夹即可，留空为遍历所有笔记
const files = app.vault.getMarkdownFiles().filter(file=>file.path.includes(folderpath))
const arr = files.map(async ( file) => {
const content = await app.vault.cachedRead(file)
const lines = content.split("\n").filter(line => line.contains(term))
return lines
})
Promise.all(arr).then(values => 
dv.list(values.flat()))
```
````

正如注释所讲，在标签处更改需要查询的标签关键词，在下一行限定文件夹处更改需要限定的文件夹内的标签，如需遍历全部笔记，此处可留空。

## 举个例子

![image.png|400](https://cdn.pkmer.cn/images/20231024001601.png!pkmer)

如图所示，我想查询语录文件夹内包含 #语录 的段落内容，可以直接粘贴到新建笔记并更改关键词。

如下图所示，新笔记会以列表形式展示所有标签笔记段落。

![image.png|400](https://cdn.pkmer.cn/images/20231024001646.png!pkmer)

有长期查询展示需求的可以新建一个独立的目录页，比如语录目录笔记，每次打开就可以直接查看。

注意：如果使代码生效需安装 Dataview 插件并打开所有 js 功能。

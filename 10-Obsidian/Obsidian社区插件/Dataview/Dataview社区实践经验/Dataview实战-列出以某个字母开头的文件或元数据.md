---
uid: 20231202194021
title: Dataview 实战 - 列出以某个字母开头的文件或元数据
tags: [obsidian, dataview]
description: 列出以某个字母开头的文件或元数据
author: Huajin
type: other
draft: false
editable: false
modified: 20231202194256
---

# Dataview 实战 - 列出以某个字母开头的文件或元数据

对于文件名，我们只需要判断 file.name 即可，注意用方括号索引，索引从 0 开始（0 才是第一个字符）

`````示例代码
```dataview
LIST
FROM "10 Example Data"
WHERE file.name[0] = "A"
```
`````

同理，如果判断元数据以某个字符开头，就把其中的 file.name 改成对应的元数据即可
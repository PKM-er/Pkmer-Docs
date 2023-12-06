---
uid: 20231202194222
title: Dataview 实战 - 列出不存在的链接页面
tags: [obsidian, dataview]
description: 列出不存在的链接页面
author: Huajin
type: other
draft: false
editable: false
modified: 20231202204615
---

# Dataview 实战 - 列出不存在的链接页面

不存在的链接就是你直接在某一篇笔记中直接敲 `[[...]]`，然后输入一个不存在的路径。对于文件来说，这些链接是文件的外链，也就是 `file.outlinks`，我们可以直接判断是否非空即可得到

`````示例代码
```dataview
TABLE WITHOUT ID 
	key AS "unresolved link", 
	rows.file.link AS "referencing file"
FROM "......"
FLATTEN file.outlinks as outlinks
WHERE !(outlinks.file) AND !(contains(meta(outlinks).path, "/"))
GROUP BY outlinks
```
`````

 



---
uid: 20231111142414
title: Dataview 实战 - 列出包含特定文字的文件或元数据
tags: [Obsidian, Dataview, 示例]
description: 列出包含特定文字的文件或元数据
author: Huajin
type: other
draft: false
editable: false
modified: 20231111175849
---

# Dataview 实战 - 列出包含特定文字的文件或元数据

## 特定文字在开头结尾

列出以某个特定开头的文件，可以借助 `startswith()` 函数，例如本系列文章以 ==Dataview 实战== 开头：

`````示例代码
```dataview
LIST 
FROM "10-Obsidian/Obsidian社区插件/Dataview"
WHERE startswith(file.name, "Dataview实战")
```
`````

同样，我们可以用 `endswith()` 函数列出以某个特定结尾的文件，如果把 `file.name` 替换成别的元数据，也可以列出以某个特定开头的文件。

### 特定内容在任意位置

借助 `contains()` 函数

`````示例代码
```dataview
LIST 
FROM "10-Obsidian/Obsidian社区插件/Dataview"
WHERE contains(file.name, "Dataview实战")
```
`````

如果想要不区分大小写用 `icontains()`，如果想要检索元数据就把 `file.name` 改成你需要筛选的的元属性，注意元数据的数据类型需要是字符串，数字或者其他数据类型可以用 `string()` 函数将其转换为字符串。

## 相关阅读

- [[31 - Dataview 中的构造函数]]；
- [[33 - Dataview 中的对象操纵函数]]；
- [[34 - Dataview 中的字符串操纵函数]]；


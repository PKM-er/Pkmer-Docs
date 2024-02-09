---
uid: 20231112010819
title: Dataview 实战：如何统计属性值为空的值
tags: [Obsidian, Dataview, 统计]
description: 统计属性值为空的值
author: Huajin
type: other
draft: false
editable: false
modified: 20231112233813
---

# Dataview 实战：如何统计属性值为空的值

在记笔记的时候，也许会遇到有些属性我们要写完笔记才填上，例如 `完成时间` 等。这种情况下，这个属性值会置空。我们知道怎么检索有属性值的属性，那要怎么样才可以检索没有属性值的属性呢？

假设这个元数据是 completedDate，你可以用

- `where completedDate = null`
- `where completedDate = ""`
- `where !completedDate`

来统计 completedDate 为空的 Field.

但是，如果有个 YAML 写成了空列表，此时 dataview 并不会认为他是空，例如

```yaml
---
genres:
  -
---
```

或者是

```
genres: []
```

那么 dataview 会认为 genres 是一个空列表 (empty list)，而不是空值。因此 `genres=null` 的结果是 false，但是 `genres=[]` 和 `!genres` 依旧可以返回 true。
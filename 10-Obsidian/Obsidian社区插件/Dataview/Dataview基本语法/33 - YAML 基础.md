---
uid: 20230724104529
title: YAML
tags: [obsidian, metadata, yaml]
description: 基本语法学习指南，YAML 语法规则
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20230810180143
---

# YAML

> [!summary] YAML 语法规则
> - 大小写敏感，可以使用中文；
> - 冒号后要跟一个空格；
> - 使用缩进来代表层级关系；
> - 缩进时只能用空格，不能用 Tab；
> - 缩进的空格数不重要，只需要保证同一级元素左对齐；
> - 从 `#` 到这一行的末尾是注释；

这里主要解释两种 YAML 的属性值：Map 和 List

## YAML MAP

当某个属性值为对象时，他就存在下一级的 Key-Value，此时这个属性就是一个 Map；

```
---
metadata:
  path: ...
  name: ...
---
```

我们可以使用点运算符获取更低级的属性：`metadata.path`；

## YAML LIST

先看例子

```
---
metadata:
  - abc
  - edf
---
```

其实就是这个属性的值域是一个无序列表，可以等价看成 `metadata: [abc, edf]`。我们可以使用方括号和元素下标取得下一级的属性 `metadata[0]` 和 `metadata[1]`（第一个元素的下标是 0）；

## 相关插件

1. Query2table：根据 YAML Fromtmatter 来生成表格，支持筛选，不够稳定；
2. Metatable：优化 YAML Frontmatter 的显示效果；
3. Text {{expand}} ：抽取 YAML Frontmatter 的值，类似行内 Dataview 查询；
4. Juggl：根据 YAML Frontmatter 的内容生成线段联系；


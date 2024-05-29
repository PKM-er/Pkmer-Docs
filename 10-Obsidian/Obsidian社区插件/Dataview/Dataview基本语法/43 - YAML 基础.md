---
uid: 20230724104529
title: Dataview 中的 YAML
tags: [obsidian, metadata, yaml]
description: 基本语法学习指南，YAML 语法规则
author: Huajin,PKMer
type: other
draft: false
editable: false
modified: 20240109115542
---

# Dataview 中的 YAML

> [!summary] YAML 语法规则
> - 大小写敏感，可以使用中文；
> - 冒号后要跟一个空格；
> - 使用缩进来代表层级关系；
> - 缩进时只能用空格，不能用 Tab；
> - 缩进的空格数不重要，只需要保证同一级元素左对齐；
> - 从 `#` 到这一行的末尾是注释；

看到要用一门新的语法会不会觉得头大？不过看看**具体例子**就能瞬间上手使用

为《小王子》的阅读笔记写一个前言（包含书名，作者，作者所属国家，开始阅读时间，读完的时间）

ps. 这里为了介绍语法规则才同时用中文和英文作为属性名 (Field Name)，平常建议只用一种

`````示例代码
---
书名: 《小王子》       # 注释之前的空格会被忽略，不用担心；
author: 圣埃克苏佩里   # 中文会被识别成文本，解析时会自动增加双引号，因此我们可以不加；
country: "法国"       # 如果要加双引号，记得用英文的双引号，不能用单引号；
abstract: |
  小说叙述者是个飞行员，他讲了六年前他因飞机故障迫降在撒哈拉沙漠遇见小王子的故事。
  神秘的小王子来自另一个星球。
  飞行员讲了小王子和他的玫瑰的故事。
  小王子为什么离开自己的星球。在抵达地球之前，他又访问过哪些星球。
  他转述了小王子对六个星球的历险。
  飞行员和小王子在沙漠中共同拥有过一段极为珍贵的友谊。
  当小王子离开地球时，飞行员非常悲伤。
  他一直非常怀念他们共度的时光。他为纪念小王子写了这部小说。
finish: false
time:
  start: 2023-7-14
  end: 2023-7-15
---
`````

> [!warning] 注意
> - Frontmatter 必须写在整个文章的开头；
> - 用两段 `---` 包括起来；
> - 阅读模式下，Frontmatter 不会显示；（可以在设置中打开阅读模式显示）
> - 多行文本需要用 `|` 声明一下，后面的内容需要每一行开头缩进对齐；

YAML 中的数据自然也是有数据类型的，比如数值类型、字符串类型、时间类型、布尔类型、数组类型和对象类型，这里给出最后两种的写法：对象 Map 和数组 List

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

## 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=665938857&bvid=BV12a4y12789&cid=1399356242&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

## 相关插件

1. Query2table：根据 YAML Fromtmatter 来生成表格，支持筛选，不够稳定；
2. Metatable：优化 YAML Frontmatter 的显示效果；
3. Text {{expand}} ：抽取 YAML Frontmatter 的值，类似行内 Dataview 查询；
4. Juggl：根据 YAML Frontmatter 的内容生成线段联系；


---
uid: 20240309143128
title: "prettify: Markdown 美化器"
tags: [obsidian, markdown]
description:
author: Huajin
type: other
draft: false
editable: false
modified: 20240309143128
---

# prettify: Markdown 美化器

> [!Note] 插件名片
>
> -   插件名称：Markdown prettifier
> -   插件作者：pelao
> -   插件说明：修复并格式化丑陋的 Markdown。
> -   项目地址：[点我访问](https://github.com/cristianvasquez/obsidian-prettify)
> -   国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-prettifier)

如果你不会用 [[obsidian-linter|linter]] 可以试试这个已经写好的插件格式化你的 Markdown 的格式。

该插件提供了五个功能，需要用快捷键触发（默认为 <kbd>Ctrl+Alt+L</kbd>）：

-   将笔记中的标签自动添加到笔记开头的属性中
-   自动为笔记添加一个 data updated 的属性，属性值为当前时间。可以通过模板设置时间的格式
-   修复链接（网址或邮箱地址）：把链接修改为正确的格式。例如

```
// 修改前
www.example.com
https://example.com
contact@example.com

// 修改后
[www.example.com](http://www.example.com)
<https://example.com>
<contact@example.com>
```

-   修复有序列表：经常有人问有序列表如果从中间删除了一个不会自动像 word 那样修改数字。这个插件可以提供该功能

```
// 修改前
1. foo
    1. aaa
    1. bbb
    4. ccc
1. bar
1. baz

// 修改后
1.  foo
    1.  aaa
    2.  bbb
    3.  ccc
2.  bar
3.  baz
```

-   表格修复：markdown 的表格格式比较长，手敲比较麻烦，强迫症想要对齐也总需要打很多空格，这个插件帮你省了这一步。

```
// 修改前
**A**|**B**|**C**
|---:|:---|---|
a |b |c
x |y |z

// 修改后
| **A** | **B** | **C** |
| ----: | :---- | ----- |
|     a | b     | c     |
|     x | y     | z     |
```

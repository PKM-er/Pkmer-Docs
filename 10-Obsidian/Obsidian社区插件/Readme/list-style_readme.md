---
uid: 20230803204512
title: Obsidian 插件：【Readme】Ordered List Style
tags: ['obsidian插件', 'readme']
description: 设置有序列表样式为内联。字母列表，罗马数字列表等。
author: erykwalder
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Ordered List Style

> [!Note] 插件名片
> - 插件名称：Ordered List Style
> - 插件作者：erykwalder
> - 插件说明：设置有序列表样式为内联。字母列表，罗马数字列表等。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/erykwalder/obsidian-list-style)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?list-style)

## 概述

设置有序列表样式为内联。字母列表，罗马数字列表等。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/erykwalder/obsidian-list-style/main/README.md)
> 

---

## Readme(翻译）

下面是 [[list-style]] 插件的自述翻译


# 有序列表样式

这是一个用于 [Obsidian](https://obsidian.md) 的插件。

通过在第一个列表项中添加详细信息来设置有序列表的样式。

```markdown
1. {A} 使用大写罗马数字的列表
2. 这个项目将显示为 "B"
3. 这个项目将显示为 "C"
```

要设置样式，需要在任何其他文本之前将样式名称放在方括号中。

可以使用任何 [列表样式类型](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)，如 `upper-alpha`。此外，对于一些常见的类型，还提供了简写方式：

-   `{A}`: 大写字母
-   `{a}`: 小写字母
-   `{I}`: 大写罗马数字
-   `{i}`: 小写罗马数字
-   `{01}`: 带前导零的十进制
-   `{1}`: 十进制（默认值，尽管在您的主题中可能不是这样）

列表样式不能在列表中间更改，也不能通过在任何元素中设置来更改，只能在第一个元素中设置。

## 注意事项

在移动设备上，子列表可能会默认采用其父级类型。可以通过手动将其设置回默认类型或您喜欢的样式类型来进行更正。




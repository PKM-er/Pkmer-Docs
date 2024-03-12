---
uid: 20230901084916
title: Obsidian 插件：【Readme】Index Checker
tags: ['obsidian插件', 'readme']
description: 确保您的索引（MOC）文件包含所有应包含的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Index Checker

> [!Note] 插件名片
> - 插件名称：Index Checker
> - 插件作者：Pavlo Deshko
> - 插件说明：确保您的索引（MOC）文件包含所有应包含的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pavloDeshko/obsidian-index-checker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?index-checker)

## 概述

确保您的索引（MOC）文件包含所有应包含的链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pavloDeshko/obsidian-index-checker/master/README.md)

---

## Readme(翻译）

下面是 [[index-checker]] 插件的自述翻译

# Obsidian 索引检查插件

确保您的索引（MOC）文件包含所有应包含的链接！

这是一个简单而不偏见的 Obsidian 插件，它将检查您的索引（MOC）文件中是否包含了所有必要的链接，同时允许您完全控制它们的结构和格式。

为什么？

虽然有一些社区插件可以用来维护索引，但其中大部分都强制要求所有索引文件都遵循严格的结构（在最好的情况下由用户自定义）。我所寻找的是一种更灵活的解决方案，它只需简单地检查所有链接是否正确（没有文件“丢失”），同时允许用户以任何他们喜欢的方式组织每个索引文件（并在需要时随时更改！）。此外，它还应该方便地添加缺失的链接到索引文件中。这是我对这个问题的解决方案，来看看吧 :)

## 工作原理

:hammer_and_wrench: - 用户根据文件名定义插件如何查找索引（MOC）文件。示例模式可以是“__index__”，“__MOC__”，“__[FOLDER]__”，“___[FOLDER]__”等，其中“__[FOLDER]__”代表包含文件夹的名称

:hammer_and_wrench: - _and_ 用户指定应在给定索引中引用哪些文件。目前有三个选项：

  a) 同一文件夹中的所有文件

  b) 文件夹中的所有文件 _and_ 子文件夹中的所有文件

  c) 文件夹中的所有文件 _and_ 子文件夹中的文件，但仅当这些子文件夹没有自己的索引时

:heavy_check_mark: - 插件检查所有索引（MOC）文件是否包含它们应该包含的所有链接。检查可以手动触发，也可以在打开存储库时自动执行

:memo: - 插件将缺失的链接添加到索引文件的末尾（或开头），或者添加到同一文件夹中的专用文件中，以便可以将它们移动到索引文件的适当位置。用户可以指定这些链接的文本格式，例如“__*** [LINKS] ***__”或“__#ADDED_LINKS [LINKS]__”，其中“__[LINKS]__”是添加的链接的占位符，每行一个以便于复制粘贴

:crayon: - _and_ 插件在文件资源管理器中标记具有缺失链接的文件。这些标记会持续存在，直到文件被修改（对于索引文件）或清除所有链接（对于专用的“缺失链接”文件）

_安装插件后，请查看插件设置页面以获取有关所有选项的详细信息_

让它变得更好

欢迎您为新功能、错误修复或更好的解决方案添加 PR。

或者在 Obsidian 社区论坛上提出功能请求，我会在插件获得批准后尽快创建。是的，我愿意根据受欢迎的请求扩展功能，尽快实现 :)

许可证

MIT

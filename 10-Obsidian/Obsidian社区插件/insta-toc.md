---
uid: 20241209181752
title: Obsidian 插件：Insta TOC 简单好用的目录生成插件
tags: [Obsidian, 插件, TOC, 目录]
description: Obsidian 插件：Insta TOC 简单好用的目录生成插件
author: OS
type: other
draft: false
editable: false
modified: 20241209201714
---

# Obsidian 插件：Insta TOC 简单好用的目录生成插件

## 概述

通过插入特殊的代码块，生成一个自动目录

> [!Note] 插件名片
> - 插件名称：Insta TOC
> - 插件作者：Nick C.
> - 插件版本：6.3.1
> - 插件说明：为你的笔记插入一个自动目录，目录会根据内容自动编号变化
> - 插件分类：[' 编辑工具 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/iLiftALot/insta-toc/)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?insta-toc)

## 效果&特性

- 易用和动态更新
	- 只需插入简单特殊的代码块即可自动生成
- 支持跳过/忽略特定标题
	- 通过简单地添加 `<!-- omit -->` 到标题的末端，将您想要的任何标题从 TOC 中排除。或者，利用本地设置省略特定标题
- 兼容 HTML 和特殊符号
	- 可以随意在标题内包含 HTML 或任何类型的特殊符号
	- 还可以在本地设置中指定应逃脱哪些字符，不做展示
- 层次结构标题展示
	- 标题层次结构。您的标题结构不一定是某种方式。
	- 如果标题 Hierachy 不采用特定的最佳格式，其他插件将禁止 TOC 插入。
- 支持 Markdown 链接和 Wiki-Links
	- 该插件将在标题内处理两个 Markdown 链接（`[Title] \（https：// link）`）和 Wiki-links（`[[File-name.md]]`）的多个。

## 使用

- 写入特殊的代码块，可以在对应位置插入，整个文件的目录

````
```insta-toc
```
````

- 如何跳过自定标题，如果您想从 ToC 中省略一个特定的标题
	- 方法 1：只需添加 `<!-- omit -->` 到标题的末尾。

````
```
# Heading 1 <!-- omit -->
```
````

	- 方法2：利用笔记头部的设置

```
---
omit: [
  "Heading 1",
  "Heading 2"
]
---
或者
---
omit:
  - Heading 1
  - Heading 2
---
```

## 高级技巧

这是依赖于你比较熟悉 Obsidian 和插件头部 meta 信息情况相下，插件作者提供的细节方法，可以被用于模板或者充分的自定义细节上

- 这种基于笔记头部的好处是在插件设置中可以默认一套通用大规则
- 但到了具体笔记你还可以单独控制单独笔记的特殊规则
- 完整的配置信息如下？你可以设置包括编号信息，是否居中对齐等各种情况

```
---
title:
  name: [string: any]
    - The title of the ToC.
  level: [number: 1 | 2 | 3 | 4 | 5 | 6]
    - The heading level of the title.
  center: [boolean: true | false]
    - Optionally center position of the title.
exclude: [string: any | RegExp: /.../]
  - Exclude specific headings based on a string of characters (e.g., ",._-+=") or a regular expression (e.g., /[^a-zA-Z0-9]/).
  - NOTE: Currently, this will include global excluded characters as well.
style:
  listType: [string: "number" | "dash"]
    - The type of list-bullet style.
omit: [string[]: any[]]
  - Omit specific headings from the ToC.
levels:
  min: [number: 1 | 2 | 3 | 4 | 5 | 6]
    - The minimum heading level to include in the ToC.
  max: [number: 1 | 2 | 3 | 4 | 5 | 6]
    - The maximum heading level to include in the ToC.
---
```

实用案例 1：

- 设置了目录名称
- 通过 `center` 控制目录是否居中显示
- 通过 `levels` 控制最大最小目录级数
- 通过 `style` 控制每级别目录前缀符号
- 通过 `exclude` 控制跳过哪些特殊字符，不会显示在目中

```
---
title:
  name: "Table of Contents"
  level: 2
  center: false
exclude: ",._-+"
style:
  listType: "dash"
omit: [
  "Heading 1",
  "Heading 2"
]
levels:
  min: 1
  max: 3
---
```

实用案例 2：

```
---
title:
  name: "Table of Contents"
  level: 1
  center: true
exclude: /[^a-zA-Z0-9]/
style:
  listType: number
omit:
  - Heading 3
  - Heading 4
levels:
  min: 2
  max: 6
---
```
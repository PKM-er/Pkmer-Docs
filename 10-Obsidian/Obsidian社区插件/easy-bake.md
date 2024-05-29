---
uid: 20231027184045
title: Obsidian 插件：Easy Bake 将笔记和关联的笔记转变为单文件
tags: [obsidian插件]
description: 轻松将许多 Obsidian 笔记编译成单个文件。
author: OS
type: basic
draft: false
editable: false
modified: 20231117120840
---

# Obsidian 插件：Easy Bake 将笔记和关联的笔记转变为单文件

## 概述

有时候基于双链笔记的特性，我们会拆分，并合理的去串联手头的各个笔记。

但是当遇到需要输出的时候，双链链接过的笔记，并不能随着 pdf 到处变为可见内容，这就容易影响信息交互的效率，总不能导出多篇笔记，并且标记关联关系如此麻烦。

Easy Bake 便是为了解决这个问题，在你输出的时候，可以将引用的笔记中的内容直接加入到当前要输出的笔记中，整合成一份内容。

> [!Note] 插件名片
> - 插件名称：Easy Bake
> - 插件作者：mgmeyers
> - 插件说明：轻松将许多 Obsidian 笔记编译成单个文件。
> - 插件分类：['obsidian 插件 ', ' 导出 ',' 文件整合 ']
> - 项目地址：[点我访问](https://github.com/mgmeyers/obsidian-easy-bake)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-bake)

![image.png](https://cdn.pkmer.cn/images/20231117120921.png!pkmer)

## 使用

在 [[命令面板]] 中使用 `Bake current file` 命令来激活插件。

![image.png](https://cdn.pkmer.cn/images/20231117120905.png!pkmer)

- 独立行上存在的链接和嵌入内容将被复制到编译后的文档中。
- 内联链接将被替换为链接的文本。这个过程是递归的，意味着链接文件中的链接也将被复制到最终文档中。
	- 所以如果你的文件之间关联的文件很多，且有多层引用关系，都会一并输出到这里。

例如，

```
## 第一部分

[[文件一]]
[[文件二]]
## 第三节

这是一个[[File three|inline link]]。

[[File four]]
```

将被编译为：

```
## 第一部分

文件一的内容
文件二的内容
第三部分

这是一个内联链接。

文件四的内容
```
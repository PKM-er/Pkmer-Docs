---
uid: 20230803204151
title: Obsidian 插件：【Readme】Incremental ID
tags: ['obsidian插件', 'readme']
description: 允许生成类似Jira的ID。
author: Adrian Karwowski
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Incremental ID

> [!Note] 插件名片
> - 插件名称：Incremental ID
> - 插件作者：Adrian Karwowski
> - 插件说明：允许生成类似Jira的ID。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/adziok/obsidian-incremental-id)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?incremental-id)

## 概述

允许生成类似Jira的ID。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/adziok/obsidian-incremental-id/master/README.md)
> 

---

## Readme(翻译）

下面是 [[incremental-id]] 插件的自述翻译


# Obsidian增量ID插件

## 描述
一个插件，允许您生成类似于Jira中的唯一ID。
您可以声明一个前缀，比如DN（来自每日笔记），然后只需将模板代码添加到您的模板中，每个笔记中都会显示一个唯一的编号。
例如：`DN-1`，`DN-2`等等。

如何使用它？
首先，您需要进入设置并声明一个新的ID。
然后，您可以使用命令生成它们：`Insert {name id}`。
或者您可以将代码添加到模板中并自动执行：
```javascript
<% await app.insertIncrementalId('{prefix}') %>
```

示例：
```javascript
<% await app.insertIncrementalId('DN') %>
```

为什么？
我正在创建这个插件，因为我开始使用看板插件，我希望能够在提交中引用特定的注释选项。




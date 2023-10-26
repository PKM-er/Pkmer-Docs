---
uid: 2023102611085777
title: Obsidian 插件：【Readme】Workbooks
tags: ['obsidian插件', 'readme']
description: 在您的笔记中使用电子表格
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Workbooks

> [!Note] 插件名片
> - 插件名称：Workbooks
> - 插件作者：Gabriele Cannata
> - 插件说明：在您的笔记中使用电子表格
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Canna71/obsidian-sheets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workbooks)

## 概述

在您的笔记中使用电子表格



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Canna71/obsidian-sheets/main/README.md)
> 

---

## Readme(翻译）

下面是 [[workbooks]] 插件的自述翻译


# 黑曜石表格

![](docs/Screen01.png)

该插件使得在Obsidian中直接处理表格数据成为可能：可以将数据存储在笔记本本身中，也可以存储在外部的Excel或CSV文件中。
支持以下文件格式：
- XLSX
- XLS
- CSV
## 代码块参数

要创建一个表格，只需创建一个带有`sheet`名称的代码块

~~~markdown
```sheet

```
~~~

以下是完整的属性列表及其默认值：

~~~markdown
```sheet
filename: <相对于vault根目录的路径>
enableSave: <设置中的值>
autoSave: <设置中的值>
height: 540,
width: "auto",
rows: 100,
cols: 26,
fontSize: 10,
cellHeight: 25,
cellWidth: 100,
```
~~~


如果提供了`filename`，则会从该文件加载数据（如果已存在）。否则，将在保存时创建该文件。
如果未提供`filename`，则数据将存储在代码块本身。

请注意，默认情况下禁用将数据保存到外部文件中，因为通常会丢失信息。可以通过设置启用此功能，或者通过在代码块中指定`enableSave: true`来启用。
在保存到文件时，默认情况下每次修改后也会自动保存。在保存到代码块中时，必须点击左上角的保存图标才能保存。
## 支持的格式

保存为代码块时，所有对表格的格式和更改都会被保留。
保存为 `XLSX` 时，大部分格式和数据都会被保存和读取回来。但请注意，当读取现有的 `XLSX` 文件时，只支持部分功能。
对于 `XLS` 的支持仅限于数据和单元格合并。
当然，CSV 只能存储数据。
归属

该插件使用以下库：

https://github.com/SheetJS

https://github.com/myliang/x-spreadsheet（在此处进行了分叉：https://github.com/Canna71/x-spreadsheet）

https://github.com/exceljs/exceljs




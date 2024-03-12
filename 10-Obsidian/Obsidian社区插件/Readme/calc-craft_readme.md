---
uid: 20240227160841
title: Obsidian 插件：【Readme】CalcCraft
tags: ['obsidian插件', 'readme']
description: Enables table-based calculations with a spreadsheet-like approach, utilizing references. It highlights the dependencies within tables and identifies circular references; has support for array formulas.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】CalcCraft

> [!Note] 插件名片
> - 插件名称：CalcCraft
> - 插件作者：Claudiu Ivan
> - 插件说明：Enables table-based calculations with a spreadsheet-like approach, utilizing references. It highlights the dependencies within tables and identifies circular references; has support for array formulas.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/klaudyu/CalcCraft)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calc-craft)

## 概述

Enables table-based calculations with a spreadsheet-like approach, utilizing references. It highlights the dependencies within tables and identifies circular references; has support for array formulas.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/klaudyu/CalcCraft/main/readme.md)

---

## Readme(翻译）

下面是 [[calc-craft]] 插件的自述翻译

【机翻】

I am learning Chinese.

## 简短信息

<a href="https://youtu.be/6nSSLsIng8k?autoplay=1)">
    <img src="./doc/images/calccraft.png" alt="视频缩略图" width="200px"/>
</a>

### 特点

该插件旨在允许在表格中使用公式，这些公式是为表格的渲染版本计算的。

在源代码模式或编辑模式下，公式是可见的；在实时预览或阅读模式下，公式被替换为计算后的值。

该插件将表格视为电子表格，将单元格和范围转换为值，根据需要扩展和计算引用的单元格。

表格分为列（从 'a' 到 'z' 标记）和数字行。

在扩展后，表达式使用 [mathjs](https://mathjs.org/docs/reference/functions.html) 进行评估，因此支持其中的许多函数。方括号 `[ ... ]` 之间的范围被扩展为矩阵，并可用于矩阵运算。

### 操作

大多数功能来自

#### 类似电子表格的引用

如果结果是一个向量或矩阵，则输出将扩展到多个单元格，并重新计算这些单元格的引用。

支持的引用格式为 `[a-z][0-9]+`（小写）

除了 `a1` 引用样式外，还可以使用列 - 行符号引用单元格：`[0-9]+c[0-9]r`，其中 `c` 代表列，`r` 代表行。因此，要寻址 `b3` 单元格，我们也可以写成 `2c3r`（第 2 列，第 3 行）。

列 - 行符号还支持通过在数字前添加 `+` 或 `-` 来进行相对引用。

两者的组合也是可能的：

- `=b+3r` 单元格在 `b` 列，向下 3 行。
- `=2c7` 单元格在第 2 列（即 b），第 7 行
行 - 列符号主要用作相对引用，例如获取当前单元格上方的值：`=+0c-1r`（向右零列，上一行）

将当前列中第二行到当前单元格上方的所有值相加：`=sum(+0c2:+0c-1r)`

#### 突出显示涉及的单元格

影响当前单元格的单元格被称为“父级”，而依赖于当前单元格的单元格被称为“子级”。将鼠标悬停在单元格上，会显示父级和子级，可以自定义颜色。这样可以更容易地跟踪表格中数据的流动。颜色可以针对暗色主题和浅色主题进行自定义。

### 突出显示错误

如果一个单元格在尝试解析时循环返回到自身，则会抛出并显示 `loop` 错误。这也适用于矩阵操作，其中一个单元格影响多个单元格。

Examples

#### 费用

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_0.webp!pkmer)

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_1.webp!pkmer)

### 简单求和，简单引用

```
| plums | bananas | fruits |
| ----- | ------- | ------ |
| 5     | 12      | =a2+b2 |
```

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_2.webp!pkmer)

```
| 李子 | 香蕉 | 水果               |
| ----- | ------- | ------------------ |
| 5     | 12      | =(-2c+0r)+(-1c+0r) |
| 7     | 5       | =(-2c+0r)+(-1c+0r) |
```

### 字母和相关列之间的组合

示例：

`a+1r`：a 列，向下移动 1 行

### 范围

```
| 李子 | 香蕉 | 水果            |
| ----- | ------- | --------------- |
| 5     | 12      | =sum(a2:b4)     |
| 7     | 5       | =sum(a2:b4) >20 |
| 9     | 7       |                 |
```

### 带有相对引用的范围

```
| plums           | bananas       | fruits          |
| --------------- | ------------- | --------------- |
| 5               | 12            | =sum(a2:b4)     |
| 7               | 5             | =sum(a2:b4) >20 |
| 9               | 7             |                 |
| =sum(a2:+0c-1r) | =sum(b2:b-1r) |                 |
```

### 矢量求和

`范围在 [ ... ]`

公式只在一个单元格中，但填充超出其单元格的值

不适合现有表格的值将被丢弃

```
| plums | bananas | fruits           |
| ----- | ------- | ---------------- |
| 5     | 12      | =[a2:a4]+[b2:b4] |
| 7     | 5       |                  |
| 19    | 10      |                  |
``` 

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_3.webp!pkmer)

### 矩阵运算

#### 转置

```
| m1  |     |     |     |                     |     |     |
| --- | --- | --- | --- | ------------------- | --- | --- |
| 1   | 2   | 3   |     | =transpose([a2:c4]) |     |     |
| 4   | 5   | 6   |     |                     |     |     |
| 7   | 8   | 9   |     |                     |     |     |
```

#### 对角线

```
| m1  |     |     |     |                |     | 
| --- | --- | --- | --- | -------------- | --- | 
| 1   | 2   | 3   |     | =diag([a2:c4]) |     | 
| 4   | 5   | 6   |     |                |     | 
| 7   | 8   | 9   |     |                |     | 
```

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_4.webp!pkmer)

#### 矩阵向量乘法

```
| m1  |     |     |     | r1                |     | r2              | 
| --- | --- | --- | --- | ----------------- | --- | --------------- |
| 1   | 2   | 3   |     | =[a2:c4]\*[1,1,1] |     | =sum(a+0r:c+0r) |
| 4   | 5   | 6   |     |                   |     | =sum(a+0r:c+0r) |
| 7   | 8   | 9   |     |                   |     | =sum(a+0r:c+0r) |
```

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_5.webp!pkmer)

#### 行列式

`=det([a2:c4])`

| m1  |     |     |     |               |     |
| --- | --- | --- | --- | ------------- | --- |
| 1   | 2   | 3   |     | =det([a2:c4]) |     |
| 4   | 5   | 7   |     |               |     |
| 7   | 8   | 9   |     |               |     |

### 条件语句

```
| m1  |     |     |     | r1                      |     |     |
| --- | --- | --- | --- | ----------------------- | --- | --- |
| 1   | 2   | 3   |     | =([a2:c4]>=5).\*[a2:c4] |     |     | 
| 4   | 5   | 6   |     |                         |     |     |
| 7   | 8   | 9   |     |                         |     |     |
```

#### 生成数字并将其映射

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_6.webp!pkmer)

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_7.webp!pkmer)

```
| 标签  |                   | 数字      |
| ----- | ----------------- | --------- |
| 3     | =isNumeric([a:a]) | =sum(b:b) |
| not   |                   |           |
| 2     |                   |           | 
| pen   |                   |           |
| apple |                   |           |
| =pi   |                   |           |
```

### 更改单位

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_8.webp!pkmer)

```
| 英寸    | 厘米                  |
| ------- | ------------------- |
| 12 英寸 | =to(unit(a2), "cm") |
| 5 英寸  | =to(unit(a3), "cm") | 
```

### 更复杂的依赖关系带有错误

![ ](https://cdn.pkmer.cn/covers/calc-craft_2_9.webp!pkmer)

```
|                  3                  | 0   | 0   | 0   | e                   | f   |             |
|:-----------------------------------:| --- | --- | --- | ------------------- | --- | ----------- |
|                  1                  | 3   | 4   | 8   | 8                   | 1   |             |
|                  2                  | 5   | 8   | 3   | 8                   | 1   |             |
|                  1                  | 4   | 8   | 3   | 1                   | 1   |             |
|             =sum(f7:g9)             | 3   | 1   |     |                     |     |             |
|                                     |     |     |     |                     |     |             |
|    =diag([a2:c4])\*diag([a2:c4])    |     |     |     | =transpose([a3:c5]) | 0   |             |
| =dotMultiply(diag([a2:c4]),[a2:a4]) |     |     | 3   | 0                   |     |             |
|                                     |     |     |     |                     |     |             |
|                                     |     |     |     |                     |     |             |
|    =dotMultiply([a2:c4],[d2:f4])    |     |     |     |                     |     | =sum(d7:f9) |
|                                     |     |     |     | =sum(a:f)           |     |             |
|                                     |     |     |     |                     |     |             |
|                                     |     |     |     |                     |     |             |
```
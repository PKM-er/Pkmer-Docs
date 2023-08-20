---
uid: 20230808015236
title: Obsidian 插件：Table Extended 表格合并利器
tags: [Obsidian, 插件, 表格合并利器, 单元格跨列合并, 单元跨越行合并, 块级元素, 多个表头, 表标题, 省略表头]
description: Obsidian 插件：Table Extended 表格合并利器,这个插件为 Obsidian 提供了 MultiMarkdown 表语法和内部链接和完整嵌入的功
author: Huajin
type: other
draft: false
editable: false
modified: 20230809092705
---

# Obsidian 插件：Table Extended 表格合并利器

## 概述

源于 Markdown 天生的表格简约性，导致了 Obsidian 中的表格不会像我们其他办公软件的那么容易。Obsidian 中如何对表格进行高级处理，似乎成了每位用户必经的问题。当用户尝试应用具有 colspan 或多个标头的复杂表时，他们唯一的选择是返回到原始 HTML，这很难阅读和编辑。

这个插件为 Obsidian 提供了 MultiMarkdown 表语法和内部链接和完整嵌入的功能，主要有

- 单元格跨列合并
- 单元跨越行合并
- 块级元素，如列表，代码…
- 多个表头
- 表标题
- 省略表头

> [!Note] 插件名片
> - 插件名称：Table Extended
> - 插件版本：1.6.1
> - 插件作者：AidenLx
> - 插件描述：为表格增加合并列和行和省略表头的功能
> - 插件项目地址：[点我跳转](https://github.com/aidenlx/table-extended)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-extended)

## 效果&特性

- 添加表题
- 多级表头
- 合并单元格
![Table-Extended效果图一.png|622](https://cdn.pkmer.cn/images/Table-Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E4%B8%80.png!pkmer)

- 表内多行
- 合并行
- 去除表头
![Table-Extended效果图二.png|370](https://cdn.pkmer.cn/images/Table-Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E4%BA%8C.png!pkmer)

## 用法

虽然说插件拓展了 MultiMarkdown 的语法，但是大体上还是和原来的表语法类似。合并的语法相对简单。我们可以在普通的表上面为需要合并的格子做一定修改即可。（快速生成表格推荐使用插件 [[ob-table-enhancer]]）

> [!warning] 注意
> - 需要放在 tx 代码块中或者在上一行加上 -tx- 才能渲染成功；
> - 前者在编辑和阅读模式下都能渲染，后者只有在阅读模式中才会渲染；

> [!NOTE] 一些简单语法
> - 每行至少有一个 `|`
> - 每行开头结尾的 `|` 可有可无
> - 单元格内容必须在同一格内
> - 表的第一行和分割线必须从该行的行首开始
> - 在分割线中使用冒号为设置改列左对齐右对齐或者居中
> - 可以在表中使用 Markdown 标记（加粗，斜体等）

### 单元格跨列合并

把需要合并的单元格空着就能合并了，没有多余的语法（注意是同一行的单元格合并）

`````示例代码
```tx
First Header | Second Header | Third Header |
:----------: | :-----------: | :----------- | 
Content      |   *Long Cell* || 
Content      |    **Cell**   |     Cell     | 
```
`````

![Table Extended效果图三.png](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E4%B8%89.png!pkmer)

可以看到，我们可以给里面的内容加上 Markdown 的标签，合并的单元格中的内容必须放在合并的单元格中最左边的那格，且是否居中也被这格控制，也就是说不能写成下面的形式。

`````示例代码
```tx
First Header | Second Header | Third Header |
:----------: | :-----------: | :----------- | 
Content      ||*Long Cell*| 
Content      |    **Cell**   |     Cell     | 
```
`````

### 单元格跨行合并

在需要合并的单元格中填入 `^^` 即可

`````示例代码
```tx
First Header | Second Header | Third Header |
:----------: | :-----------: | :----------- | 
Content      |  *Long Cell*  || 
^^           |    **Cell**   |     Cell     | 
```
`````

![Table Extended效果图四.png|541](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E5%9B%9B.png!pkmer)

### 块级元素

可以在每行结尾加上一个 `\` 来实现整行合并，以此得到块级元素。由于末尾的 `|` 可以省略，所以也可以理解为把结尾的 `|` 替换成了 `\`。缺点是整行都会合并

`````示例代码
```tx
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      |\
|              |               |
|- Item 1      | - Item 1      |\
|- Item 2      | - Item 2      |
|   ```c       | ```python     \
|   .1 + .2    | .1 + .2       \
|   ```        | ```           |
```
`````

![Table Extended效果图五.png|550](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E4%BA%94.png!pkmer)

### 多个表头

语法和合并列单元格一样

`````示例代码
```tx
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
```
`````

![Table Extended效果图六.png](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E5%85%AD.png!pkmer)

这样我们就为 Second Header 和 Third Header 创建了一个共同的大标题；

### 表标题

只需要在最后一行加上 `[表名字]` 即可

```tx
| | Grouping ||
First Header | Second Header | Third Header 
| ------------ | :-----------: | :-----------: |
Content | *Long Cell* || 
^^ | **Cell** | Cell |  
New section | More | Data | 
And more | With an escaped '\|' || 
[Prototype table]
```

![Table Extended效果图八.png|505](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E5%85%AB.png!pkmer)

可以看到我们在表的顶端加上了一个大标题

### 省略表头

我们可以省略表头直接写分割线，在某些不需要表头的时候好用。

`````示例代码
```tx
|--|--|--|--|--|--|--|--|
|♜|  |♝|♛|♚|♝|♞|♜|
|  |♟|♟|♟|  |♟|♟|♟|
|♟|  |♞|  |  |  |  |  |
|  |♗|  |  |♟|  |  |  |
|  |  |  |  |♙|  |  |  |
|  |  |  |  |  |♘|  |  |
|♙|♙|♙|♙|  |♙|♙|♙|
|♖|♘|♗|♕|♔|  |  |♖|
```
`````

![Table Extended效果图九.png](https://cdn.pkmer.cn/images/Table%20Extended%E6%95%88%E6%9E%9C%E5%9B%BE%E4%B9%9D.png!pkmer)

## 一些已知的问题

- 这个插件还不兼容 Advanced Tables，因为它的自动格式化会破坏 mmd6 表语法。
- 使用 -tx- 的 table 有时会忽略转义字符，例如，在 table 中 `\|` 无法转义成 `|`，此时需要用 `\\|`
- 有时可能不工作，此时控制台会输出: `failed get Markdown text, escaping…`
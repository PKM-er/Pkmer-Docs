---
uid: 2023080322232076
title: Obsidian 插件：【Readme】Obsidian Columns
tags: ['编辑器', '美化', '界面相关', 'obsidian插件', 'readme']
description: 为 Obsidian 笔记添加多栏结构，你可以通过这种多栏结构，来优化 OB 笔记的排版。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Columns

> [!Note] 插件名片
> - 插件名称：Obsidian Columns
> - 插件作者：Trevor Nichols
> - 插件说明：为 Obsidian 笔记添加多栏结构，你可以通过这种多栏结构，来优化 OB 笔记的排版。
> - 插件分类：['编辑器', '美化', '界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tnichols217/obsidian-columns)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-columns)

## 概述

为 Obsidian 笔记添加多栏结构，你可以通过这种多栏结构，来优化 OB 笔记的排版。

![Obsidian Columns](https://cdn.pkmer.cn/covers/obsidian-columns.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tnichols217/obsidian-columns/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-columns]] 插件的自述翻译


# 石英柱

允许您在Obsidian中创建列\
此插件还可以在移动设备上使用列包装功能（您可以在设置中启用）

**新功能：Callout语法** 使用col和col-md callouts来创建您的列

添加了一个特殊的列表语法来创建列。\
添加了两种代码块语言：col和col-md。\
col-md代码块只是markdown\
col代码块将每个markdown元素呈现为自己的列。
- 使用md代码块将元素分组为一列
添加了col和col-md callouts，以便无需javascript创建列

## Callout 语法
Callout 语法完全不使用 JavaScript，这使得它与实时预览非常兼容，而无需使用代码块，这也意味着 Callout 语法无法限制列的高度。

col callout 将 Callout 中的每个项都呈现为自己的列，但 col-md 将它们分组为一列。

要使用 col callout，请创建一个带有 col 名称的 Callout：

```md
> [!col]
> A col callout
>
> Second column of the callout
```

要使用 col-md callout，请在 col callout 中创建一个 col-md callout
```md
> [!col]
> A col callout
>
>> [!col-md]
>> The second column of the callout
>> 
>> More lines on the second column of the callout
```

可以通过在 col-md 名称后添加宽度来调整 col-md callout 的宽度：
```md
> [!col]
> A col callout
>
>> [!col-md-3]
>> The second column of the callout
>> 
>> This column is now 3 times the width of the first column
```
由于实时预览和 CSS attr() 函数的限制，col-md callout 的宽度属性只能是 0.5 的倍数，最多为 10，例如 1、1.5、6.5 等。

可以通过在 Callout 中创建一个新的列来嵌套更多列。下面是更多示例。

## 代码块设置块
所有的块都有一个设置头，定义为`===`分隔符上方的所有内容

- col
	- height: CSS 高度或 `shortest`
	- textAlign: CSS 文本对齐 (`start`, `end`, `center`)
- col-md
	- height: CSS 高度
	- flexGrow: 数字
	- textAlign: CSS 文本对齐 (`start`, `end`, `center`)

例如，在 col-md 块中设置 flexGrow 值：

````md
```col-md
flexGrow=2
===
要呈现的 MD
```
````

所有的块都有一个高度设置，可以将代码块的高度限制为任何 CSS 高度值（例如：100px）

### col
col代码块可以具有`shortest`的高度，这将限制所有列的高度为其子元素中最短的高度。

例如：
`````md
````col
height=shortest
===
```col-md
line 1
line 2
line 3
line 4
```

```col-md
line 1
line 2
```
````
`````

#### 行

在`col`代码块中使用"==="来表示列中的新行

col-md块具有额外的flexGrow设置，用于设置代码块的相对宽度。

## 示例

![image](https://user-images.githubusercontent.com/62992267/181198772-f9f11e54-d0f2-4a60-a0aa-8ebb364bffe8.png)

由下面的 MD 生成：
````````md
```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Callout 内的内容
>  更多内容。
>> [!ERROR] 错误描述
>>  嵌套的 Callout
>>  `````col-md
>>  - 示例 MD 代码
>>  - 更多内容
>>  `````
``````

``````col-md
flexGrow=2.5
===

# 文本注释示例：

`````col
````col-md
flexGrow=1
===
1. 函数名 **a** 应该更具描述性

2. 使用 **||** 替换 **if/else**
````

````col-md
flexGrow=2
===
```js
function a(word) {
	if (word != null) {
		console.log(word);
	} else {
		console.log("a");
	}
}
let msg = "Hello, world!";
console.log(msg)
```
````
`````
```````

## 列表结构

您还可以通过按照所示的结构创建列表来创建列（不支持实时预览）：
- !!!col
    - (flex-grow)
        - （第一列中的文本）
    - (flex-grow)
        - （第二列中的文本）

![image](https://user-images.githubusercontent.com/62992267/165693531-5a9d7e8e-864f-40db-a936-cefdb333af22.png)

通过以下MD代码生成：
```md
- !!!col
	- 1
		# 第一列
		第一列中的一些示例文本
		- 也可以在其中包含一些列表
			- 更多列表项
	- 2
		# 第二列
		这一列的宽度是第一列的两倍，因为它的值设置为2
		- !!!col
			- 1
			  ## 第二列-1
			  您甚至可以在列内部再创建列！
			- 1
			  ## 第二列-2
			  此列中的更多示例文本
```

## 设置

### 列的最小宽度
此设置确保列具有一定的宽度。如果不是所有的列都满足此宽度，额外的列将会换行到下方（作为行）。
从技术上讲，它只是设置了flex-basis属性。

### 默认跨度
如果未明确指定，默认跨度设置为列的默认跨度值。目前，每个列的代码块都设置为此值，并且无法更改。

## 即将推出的功能

1. 为编辑器启用语法高亮功能。
2. 拥有每列分组和每列设置（为每列自定义设置）的功能。

---

如果你喜欢我的插件，请考虑支持我：


[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D0DF7HF)




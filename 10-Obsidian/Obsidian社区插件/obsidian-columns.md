---
uid: 20230612111615
title: Obsidian 插件：Obsidian Columns 支持分栏书写美化你的笔记样式
tags: [Obsidian, 插件, 分栏, 美化, 笔记样式]
description: 
author: OS
type: basic
draft: false
editable: false
modified: 20230612115653
---

# Obsidian 插件：Obsidian Columns 支持分栏书写美化你的笔记样式

## 概述

有时候我们希望充分利用笔记的宽度，在同样的位置并排数额写两个不同的内容，无论是 MOC，还是利用他来提醒自己进度，又或是两个不同的范例，这样的方式似乎都更加优雅。

> [!Note] 插件名片
> - 插件名称：Obsidian Columns
> - 插件版本：0.12.0
> - 插件作者：Trevor Nichols
> - 插件描述：支持分栏书写美化你的笔记样式
> - 插件项目地址：[点我跳转](https://github.com/tnichols217/obsidian-columns)

## 样式&效果

- 允许你在 Obsidian 中创建多列、多栏。
- 添加一种特殊的列表语法来创建列。
- 通过两种代码块语言：col 和 col-md。
- 该插件支持移动设备上使用

## 使用

- 安装插件，启用后即可生效
- 近似 Callout 语法，你根本不需要使用 javascript，这使得它在不使用代码块的情况下与实时预览高度兼容。你可以理解成这是一种 col callout，将 callout 中的每个栏作为自己的列呈现。本森

### 使用类 callou 来书写多栏

- 通过增加空行来划分栏目数量
- 双栏

````语法
> [!col]
> A col callout
>
> Second column of the callout
````

- 三栏：

````语法
> [!col]
> A col callout
>
> Second column of the callout
> 
> Third column of the callout
````

- 效果：

![image.png](https://cdn.pkmer.cn/images/20230612113637.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230612113735.png!pkmer)

- 可以通过在 col-md 名称后添加宽度来调整 col-md 标注的宽度
- 双栏

````语法
> [!col]
> A col callout
>
>> [!col-md-3]
>> The second column of the callout
>> 
>> This column is now 3 times the width of the first column
````

- 效果
![image.png](https://cdn.pkmer.cn/images/20230612114241.png!pkmer)

> [!Tip] 提示
> 由于实时预览和 CSS 本身的限制，col-md callout 的 width 属性只能是 0.5 到 10 的倍数，如 1,1.5,6.5 等。只需在 callout 中创建一个新列，就可以在其他列中嵌套更多列。

### 使用类 代码域语法 来书写多栏

col 代码块，输入更加快捷，如下面示例，而且插件提供了高度设置方式，height=shortest【按照分栏中内容最短的栏来决定整体高度】，height=longtest 【按照分栏中内容最长的栏来决定整体高度】来控制。

- 语法

`````语法
````col
height=longtest
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

![image.png](https://cdn.pkmer.cn/images/20230612114809.png!pkmer)

### 复合分栏示例

- 效果
![image.png](https://cdn.pkmer.cn/images/20230612115317.png!pkmer)
- 语法

````````语法
```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  `````col-md
>>  - example MD code
>>  - more stuff
>>  `````
``````

``````col-md
flexGrow=2.5
===
# Text annotation example:

`````col
````col-md
flexGrow=1
===
1. Function name **a** should be more descriptive

2. Remove **if/else** by using **||**
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
``````
```````
````````

- 还可以通过在所示结构中创建列表来创建列 (实时编辑中不支持，会被渲染成普通列表)

![image.png](https://cdn.pkmer.cn/images/20230612115428.png!pkmer)

```语法
- !!!col
	- 1

# Column 1

		Some example text in column 1
		- some lists inside as well
			- more list items
	- 2

# Column 2

		This column is twice as wide because it has the value set to 2
		- !!!col
			- 1

## Column 2-1

			  You can even have columns inside columns!
			- 1

## Column 2-2

			  More example text inside this column
```
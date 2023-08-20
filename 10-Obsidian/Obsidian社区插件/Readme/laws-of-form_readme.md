---
uid: 2023082011355446
title: Obsidian 插件：【Readme】Laws of Form
tags: ['obsidian插件', 'readme']
description: 允许您创建、管理和显示形式的法则表达式，例如 ((a)) (b) = a (b)。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Laws of Form

> [!Note] 插件名片
> - 插件名称：Laws of Form
> - 插件作者：Kevin German
> - 插件说明：允许您创建、管理和显示形式的法则表达式，例如 ((a)) (b) = a (b)。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Kevger/obsidian-laws-of-form)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?laws-of-form)

## 概述

允许您创建、管理和显示形式的法则表达式，例如 ((a)) (b) = a (b)。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Kevger/obsidian-laws-of-form/main/README.md)
> 

---

## Readme(翻译）

下面是 [[laws-of-form]] 插件的自述翻译


# Laws of Form Obsidian插件
![[exampleModulator.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleModulator.png)

该插件为[Obsidian](https://obsidian.md/)添加了将线性的Laws of Form括号表达式转化为熟悉的二维图形表示的功能。
对于[Laws of Form](https://en.wikipedia.org/wiki/Laws_of_Form)的介绍超出了本文的范围。假设读者已经熟悉相关概念。

----
有用的链接
- [Laws of Form Playground – React Library](https://lof-react.web.app/)
- [作者网站](https://kevingerman.de)
- [源代码](https://github.com/Kevger/obsidian-laws-of-form)
- [LoF50](https://lof50.com/)
---
#### 🗒 代码块
该插件在`lof`代码块中渲染形式法则表达式。
每个代码块以`lof`关键字开头。

````markdown
```lof
(()) ()
```
````

该代码块将以LoF形式渲染。
![[exampleSimple.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleSimple.png)

---
#### Ⓞ 绘制区分
1) 一个十字标记为 ()
```jsx
  ()
```

2) 空间中的任何文本都被解释为空间的内容
```jsx
  ((Observer) Society)
```

3) 您可以嵌套十字
```jsx
  ((())())
```

4) 重新进入由两个标识符组成。$id 和 [id]。$id 表示进入 [id] 的空间。id 必须是一个数字。一个空间中可以有多个 $id，但只有最右边的计数。
```jsx
  (([0]a)$0b)
  (([42]$42) Autopoiesis)
```

5) 一个空间也可以重新进入两个位置（见限制）。
```jsx
  (([0]c)([0]a)$0b)
```

6) 也可以有多个重新进入
```jsx
  ([3]([0]$0)([1]$1)$3)
```

7) 这是您可以实现调制器函数的方式（请参见上面的第一张图片）
````md
```lof font-size: 20px
  (((((((([0]a$1)$6[2])[1]$3)[0]$4)a$5)$2[6])[5]) [4]$0)
```
````
#### 方程式和分隔符
由于解释器的工作方式，非LoF表达式（例如纯文本、表情符号）或在*同一*行中的单独LoF表达式必须明确地分离出来。

**需要分离表达式以进行方程式。**

例如
````
```lof
() () = () 
```
````
没有分隔符的情况下，将呈现如下结果
![[exampleFalse.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleFalse.png)
为了正确显示上述表达式，必须使用分隔符（默认为"::"）将其分为三个部分。
````
```lof
() () :: = :: ()
```
````
这将得到正确的形式
![[exampleCorrect.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleCorrect.png)
分隔符之间的所有内容都只被解释为纯文本。因此，括号"(),\[\]"和"$"将不会被解释。
默认分隔符可以通过块参数中的分隔符关键字或全局设置中进行单独覆盖。

*最后一个未关闭的*分隔符将使未解释的文本向右移动。
````
```lof font-size:24px; 
((a)b)
::=:: ((a)b)((a)b) :: C5
::=:: ((a)((b)))((a)b) :: C1
::=:: ((((a)b)a)(((a)b)(b))) :: J2
::=:: ((((a)b)a)((b))) :: C4
```
````
将导致
![[exampleEquations.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleEquations.png)

---
#### 🌈 样式定制
使用内联CSS，可以完全自定义表达式的样式。
例如，如果我们想要红色字体颜色，将字体大小设置为22像素，并将字体设置为"Chalkduster"，我们可以使用以下内联CSS来实现。

````Markdown
```lof font-family: Chalkduster; font-size: 20px; color: red;
((a[0])b$0)

((aasdasdasd[0])(b[0])$0c)()

([0]$0Autopoiesis)
```
````

这个代码块将呈现如下

![[exampeStyling.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampeStyling.png)

**⚠️ 如果表达式太长并换行，减小字体大小（例如，font-size: 50%; font-size: 0.8em; font-size: 12px;）是*最重要的*定制。**

*全局样式可以在插件设置中应用。*

---
### ⚠️ 限制

交叉和重新进入的整个绘制都是使用div完成的。每个交叉都是一个div。这样可以有很多自由度，但也有一些限制，特别是对于重新进入。HTML/CSS允许在每个div中最多使用一个:before和:after伪元素（用于重新进入）。因此，对于每个重新进入，我们最多可以有两个可以重新进入的空间。对于大多数情况来说，每个重新进入两个重新进入的空间是完全足够的。有时，在使用复杂嵌套的重新进入时，为了解决显示错误，需要重新排列表达式。




---
uid: 20230505133425
title: Obsidian 样式：Callout 样式
tags: [Obsidian, css, Callout, 白板, 样式]
description: Obsidian 样式：Callout 样式
author: cuman
type: other
draft: false
editable: false
modified: 20230608231904
---

# Obsidian 样式：Callout 样式

## 概述

Obsidian 的 callout 因为可以自定义 class 所以配合 css 可以实现各种样式，属于 DIY 比较丰富的。下面举几个 callout 的改造例子，抛砖引玉。

## 样式举例

### 更改图标

![image.png](https://cdn.pkmer.cn/images/202305051339765.png!pkmer)

 其中图标代码名称从这里可以选择 [Lucide](https://lucide.dev/)

```csss
/* Obsidian snippet to create a custom 'address' callout
 *
 * Usage in markdown:
 * > [!address]
 * > 123 Main St.
 * > Anytown, SC 29407
 */

.callout[data-callout="address"] {
  --callout-icon: lucide-home
}

```

### 更改背景色和图标

![image.png](https://cdn.pkmer.cn/images/202305051340008.png!pkmer)

```css
/* Obsidian snippet to create a custom 'activity-log' callout
 *
 * Usage in markdown:
 * > [!activity-log] Activity Log
 * > - I came.
 * > - I saw.
 * > - I conquered.
 */

.callout[data-callout="activity-log"] {
  --callout-color: var(--color-orange-rgb);
  --callout-icon: lucide-clipboard-list
}

```

## 自定义排版

比如左边是图片，右边是表格的左右分栏分布。

- 源码模式

```
> [!bookinfo]+ 《从零开始的女性主义》
> ![bookcover|200](https://img2.doubanio.com/view/subject/l/public/s33984963.jpg)
>
| 属性     | 内容                                           |
|:-------|:---------------------------------------------|
|  ISBN  |  9787559652317                              |
|  作者    |   '[日]上野千鹤子/[日]田房永子'                           |
|  出版社   |  北京联合出版公司                           |
|  来源    |  [从零开始的女性主义](https://book.douban.com/subject/35523099/)  |
|  评分    |   8.7                             |
|  页码    |  192                         |
```

- 预览模式
![image.png](https://cdn.pkmer.cn/images/202305051352628.png!pkmer)
- css 片段

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/
/******callout bookinfo*****/
.callout.callout[data-callout*="bookinfo"] {
  --callout-color: 64, 201, 75;
  --callout-icon: lucide-book-open;
  overflow: unset;
  border: 0;
  width: auto;
 
}
.callout.callout[data-callout*=bookinfo] .callout-title {
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.callout.callout[data-callout*=bookinfo] .callout-content {
  display: flex;
  justify-content: space-between;
}

.callout.callout[data-callout*=bookinfo] .callout-content table {
  width: 68%;
  margin-left: 2%;
  word-break: normal;
}
.callout.callout[data-callout*=bookinfo] .callout-content table tr th {
  padding-right: 5px;;
}
.callout.callout[data-callout*=bookinfo] .callout-content td:nth-child(2) {
  display: table-cell;
  overflow: hidden;
}

```

## 恢复经典的 callout 样式

在 Obsidian 早期版本，Callout 样式是这样的

![image.png](https://cdn.pkmer.cn/images/202306082254849.png!pkmer)

下面的 css 就是恢复 callout 为经典样式。

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/
.callout {
  --callout-radius: 2px;
  border-left: solid 4px rgb(var(--callout-color));
}

.callout .callout-title {
  padding: 6px;
  background-color: rgba(var(--callout-color), 0.4);
}
.callout .callout-content {
  background-color: rgba(var(--callout-color), 0.1);
}

.callout {
  padding: 0;
  background-color:var(--admonition-bg-color);
}

.callout-content {
  padding: 5px 15px;
}
```

## 视窗风格的 callout 样式

就像 windows 窗口风格一样的样式

![image.png](https://cdn.pkmer.cn/images/202306082307558.png!pkmer)

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/
.callout {
  border:none;
  box-shadow: inset 0 0 0 2px rgba(var(--callout-color), 0.25), 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1) !important;
}
 .callout .callout-title {
  padding: 6px;
  background-color: rgba(var(--callout-color), 0.4);
}


.callout .callout-content {
  background-color: rgba(var(--callout-color), 0.1);
}


.callout {
  padding: 0;
  background-color:var(--admonition-bg-color);
}

.callout-content {
  padding: 5px 15px;
}
```
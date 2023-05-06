---
uid: 20230505133425
title: Callout 样式
description: 
author: cuman
type: other
draft: false
editable: false
modified: 20230506140743
---

# Callout 样式

## 概述

Obsidian 的 callout 因为可以自定义 class 所以配合 css 可以实现各种样式，属于 DIY 比较丰富的。下面举几个 callout 的改造例子，抛砖引玉。

## 样式举例

### 更改图标

![image.png](https://cdn.pkmer.cn/images/202305051339765.png)

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

![image.png](https://cdn.pkmer.cn/images/202305051340008.png)

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
![image.png](https://cdn.pkmer.cn/images/202305051352628.png)
- css 片段

```css

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
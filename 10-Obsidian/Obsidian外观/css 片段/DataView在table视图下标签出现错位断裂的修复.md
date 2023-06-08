---
uid: 20230608224500
title: DataView 在 table 视图下标签出现错位断裂的修复
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20230608225640
---

# DataView 在 table 视图下标签出现错位断裂的修复

## 使用方式

直接激活

## 效果

修复标签换行问题，取消标签块前的无序列表标志

**注意：或许会对一些情况下 DataView 视图造成影响，使用中如有问题，请及时反馈**

## CSS 代码段

```CSS
div.block-language-dataview.node-insert-event table td ul {
  list-style: none;
  flex-direction: row-reverse;
}

.tag {
  float: left;
  white-space: nowrap;
}
```

### 代码解释

```CSS
div.block-language-dataview.node-insert-event table td ul {
  list-style: none;
  flex-direction: row-reverse;
}
```

> `div.block-language-dataview.node-insert-event table td ul`
> 这一选择器表示选择 DataView 表格 - 表格体中无序列表部分
>`list-style: none` 表示列表样式，使用 `none` 则无额外标志
>`flex-direction: row-reverse` 表示倒序序列排序

```CSS
.tag {
  float: left;
  white-space: nowrap;
}
```

> `.tag` 为类选择器，即所有标记为 tag 的类都使用下列属性
> `float: left` 指向左浮动对齐
> `white-space: nowrap` 则是标记文本不换行（除非文本内包括额外换行符如\<br\>）

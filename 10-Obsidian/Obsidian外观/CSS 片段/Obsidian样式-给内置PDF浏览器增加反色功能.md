---
uid: 20230905145333
title: Obsidian 样式：给内置 PDF 浏览器增加反色功能
tags: []
description: 
author: OS
type: other
draft: false
editable: false
modified: 20230905153816
---

# Obsidian 样式：给内置 PDF 浏览器增加反色功能

## 引言

Obsidian 最近新增加强了内置 PDF 浏览器。

但是很多同学会反馈一些问题，比如一些主题，使用深色模式后，PDF 依然是白底黑色，如何在主题没有兼顾的情况下，让 pdf 反色呢？

## 实践

可以通过加入这段 snippet 来修改，添加的方法 [[自定义]]

```CSS
.pdf-container {
	filter: invert(89%);
}
```

当然如果你希望取消反色，可以使用

```CSS
.pdf-container {
	filter: none;
}
```

当然如果你对图片有要求可以参考

```CSS
img {
	filter: none;
}
```
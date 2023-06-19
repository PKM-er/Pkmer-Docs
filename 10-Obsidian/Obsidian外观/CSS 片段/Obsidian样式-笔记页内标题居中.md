---
uid: 20230619155040
title: Obsidian 样式：笔记页内标题居中
tags: [Obsidian, 样式, 页内标题, 对齐样式]
description: Obsidian 样式：笔记页内标题居中
author: OS
type: other
draft: false
editable: false
modified: 20230619195950
---

# Obsidian 样式：笔记页内标题居中

## 引言

不少同学喜欢启用业内标题，一来是业内标题始终会在最顶部，符合我们很多时候阅读和浏览网页习惯。另外就是会高于 frontmatter 信息，显得整体文章的结构和段落感更强。

但是页内标题没有在很多主体和样式中，不支持调整格式，比如一般我们习惯文件和标题一致，且这个标题是要居中的。

## CSS

由上面需求的同学，下面的内容能帮到你。如何使用样式代码片段，参考：[[Obsidian的CSS代码片段]]

```CSS
.view-content .markdown-source-view .inline-title {
	align-self: center;
}
.markdown-preview-view .mod-header .inline-title {
	text-align: center;
}
```
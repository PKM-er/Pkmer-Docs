---
uid: 20230709151011
title: Obsidian 样式：自定义大纲缩进线样式
tags: [Obsidian, 样式, CSS自定义, 大纲, 缩进线]
description: Obsidian样式：自定义大纲缩进线样式
author: OS
type: other
draft: false
editable: false
modified: 20230709151825
---

# Obsidian 样式：自定义大纲缩进线样式

## 引言

大纲可以帮助我们简单梳理带有层级结构的框架，整理自己的思路概况。

但是默认样式的大纲线略微有些纤细，在深色主题下可能不够明显，除了通过彩色大纲线进行优化外，还可以优化本身的粗细来实现。

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]
## 实践

- 可以选择一些带有大纲优化样式的主题
- 当然也可以使用下面代码优化大纲线的样式

```CSS
/*实时编辑模式*/
.markdown-source-view.mod-cm6 .cm-indent::before {
	border-right: 1px solid var(--indentation-guide-color) !important;
}
/*阅读模式*/
.markdown-rendered.show-indentation-guide li > ul::before, .markdown-rendered.show-indentation-guide li > ol::before {
	border-right: 1px solid var(--indentation-guide-color) !important;
}
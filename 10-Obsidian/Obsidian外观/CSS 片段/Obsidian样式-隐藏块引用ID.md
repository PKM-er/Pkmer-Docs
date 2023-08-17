---
uid: 20230612104006
title: Obsidian 样式：隐藏块引用 ID
tags: [Obsidian, css, 样式, 块引用, 隐藏]
description: Obsidian 样式：隐藏块引用 ID
author: OS
type: other
draft: false
editable: false
modified: 20230616095706
---

# Obsidian 样式：隐藏块引用 ID

## 引言

数字化笔记的好处，就是在我们思考、产出、整理时候，可以跨越物理的限制，将笔记与笔记，段落与笔记，进行各种层级上的组合和关联。

笔记软件也会贴心的给我们提供这些链接的提示。但如果你希望隐藏这样的提示，希望笔记的显示更加干净纯粹，那么可以参考下面方法

## 普通

- 直接使用笔记的阅读模式，块引用就不会显示了

## CSS

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]

参考样式：

```css
div.cm-line > span.cm-blockid {
	display:none;
}
```

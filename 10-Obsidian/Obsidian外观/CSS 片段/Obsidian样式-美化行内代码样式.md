---
uid: 20230703175148
title: Obsidian 样式：美化行内代码样式
tags: [Obsidian, 样式, CSS, 行内代码]
description: Obsidian 样式：美化行内代码样式
author: OS
type: other
draft: false
editable: false
modified: 20230703183149
---

# Obsidian 样式：美化行内代码样式

## 引言

行内代码是一种常见的书写方式，比如我们读书时候，需要在文字中针对特殊文本进行着重强调，又或是需要显示重点的文字内容。

你一定在一些参考书，比如数学公式，特殊的文字内容中见过这样。

## 使用

- 你可以使用一些插件来修改高亮，比如 [[obsidian-dynamic-highlights]]
- 又或是下面的样式片段，如何使用样式片段，可以参考 [[Obsidian的CSS代码片段]]
	- 这里我没有特别强化具体颜色样式，因为它们都带有 color 字样，你可以随时参考其他颜色，来让他更加个性化

```CSS
/*实时编辑*/
.markdown-source-view span.cm-inline-code {
	padding:4px;
	border-width:1px;
	border-style: solid;
	border-radius: 5px;
	margin-left:5px;
	margin-right:5px;	
}
.theme-light .markdown-source-view span.cm-inline-code {
	color:black;
	background-color: #f6f1c6;
	border-color:#a7a2a2;
}
.theme-dark .markdown-source-view span.cm-inline-code{
	color:black;
	background-color: #f6f1c6;
	border-color:#7c7575
}
/*阅读模式*/
div p code {
	padding:4px;
	border-width:1px;
	border-style: solid;
	border-radius: 5px;
	margin-left:5px;
	margin-right:5px;	
}
.theme-light div p code {
	color:black;
	background-color: #f6f1c6;
	border-color:#a7a2a2;
}
.theme-dark div p code {
	color:black;
	background-color: #f6f1c6;
	border-color:#7c7575	
}
```
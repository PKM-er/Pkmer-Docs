---
uid: 20230717174828
title: Obsidian 样式 - 加粗粗体样式优化
tags: []
description: Obsidian 样式 - 加粗粗体样式优化
author: OS
type: other
draft: false
editable: false
modified: 20230717175020
---

# Obsidian 样式 - 加粗粗体样式优化

## 引言

自定义粗体，或者加粗的字体粗细和样式颜色

## 使用

- 使用对应的主题
- 使用独立的片段，参考 [[Obsidian的CSS代码片段|Obsidian css代码片段]]

```CSS
body {
    --bold-color:red;
    --bold-weight:700;
}

div.cm-line span.cm-strong {
	color: var(--bold-color) !important;
	font-weight: var(--bold-weight)!important;
}
div p strong {
	color: var(--bold-color) !important;
	font-weight: var(--bold-weight)!important;
}
```
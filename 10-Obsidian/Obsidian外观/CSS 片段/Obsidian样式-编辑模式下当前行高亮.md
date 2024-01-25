---
uid: 20230506111719
title: Obsidian 样式：编辑模式下当前行高亮
tags: [Obsidian, 编辑模式, 当前行高亮, css]
description: Obsidian 样式：编辑模式下当前行高亮
author: cuman
type: other
draft: false
editable: false
modified: 20230602191810
---

# Obsidian 样式：编辑模式下当前行高亮

## 概述

Obsidian 默认主题 在编辑模式下，没有当前行高亮功能，可以通过下面片段实现。为了达到更好的效果，可以在 Ob 中开启 `编辑器`-`显示行号` 设置项。

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]
## 样式效果

![image.png](https://cdn.pkmer.cn/images/202305061135730.png!pkmer)

## 代码

```css

/* Active line background */
.markdown-source-view.mod-cm6 .cm-line.cm-active{
    background-color: rgba(var(--mono-rgb-100), 0.05)
}

/*Active line number */
 
.markdown-source-view.mod-cm6  .cm-lineNumbers .cm-gutterElement.cm-active {
  font-weight: 600;
  color: grey;
}

```
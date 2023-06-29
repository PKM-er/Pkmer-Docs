---
uid: 20230629231921
title: Obsidian 样式：文件管理器名称滚动效果
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20230629233242
---

# Obsidian 样式：文件管理器名称滚动效果

## 引言

Obsidian 提供一个简约的文件管理器，让我们可以管理笔记和其他类型文件。

- 但是有时候无论是因为屏幕宽度的限制
- 还是我们希望更多集中在笔记编辑区域
- 又或是因为目录层级过度。
- 当然也可能是我们管理的文献和图书笔记名称过长

过长的文件夹名称和文件名，会导致有时候我们无法看全部。

## 使用

- 使用具有文件夹名称，或文件名滚动动画的主题，比如 3F 老师的 [Blue-TopazT主题](https://github.com/PKM-er/Blue-Topaz_Obsidian-css)
	- 可以通过 [[obsidian-style-settings]] 插件中的设置 2.3.3 中文件名样式来调整
- 又或是使用独立的 CSS
	- 如何使用独立的 CSS，参考 [[Obsidian的CSS代码片段|Obsidian css代码片段]]

```CSS
/** 文件名**/
body .nav-file-title-content:not(.is-being-renamed):hover {
  animation: filemove 1.5s 1 normal linear;
}

body .nav-file-title-content:not(.is-being-renamed) {
  min-width: 200px;
  white-space: nowrap;
}
body .nav-file {
  display: table;
}
/** 文件夹名**/
body .obsidian-icon-folder-icon {
  vertical-align: middle;
  display: inline;
}

body .nav-folder-title {
  white-space: nowrap;
}

.nav-folder-title-content.is-being-renamed {
  white-space: break-spaces;
}

body .nav-folder-title-content:not(.is-being-renamed) {
  min-width: 200px;
  white-space: nowrap;
}
body .nav-folder-title-content:not(.is-being-renamed):hover {
  animation: filemove 2.1s 1 normal linear;
}

@keyframes filemove {
  0% {transform: translate(0, 0);}
  100% {transform: translate(calc(-100% + 200px), 0);}
}
```
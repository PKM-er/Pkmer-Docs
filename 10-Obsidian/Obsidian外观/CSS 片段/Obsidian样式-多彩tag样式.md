---
uid: 20230610161647
title: Obsidian 样式：多彩的 tag 样式
tags: [Obsidian, css, 标签, 美化, 样式]
description: Obsidian 样式：多彩的 tag 样式
author: OS
type: other
draft: false
editable: false
modified: 20230616095651
---

# Obsidian 样式：多彩的 tag 样式

## 引言

标签（#tag）是大家喜欢的管理方式方法，它打破了文章只能线性，和总分联系的方式，可以让一篇笔记，隶属于多个主题或者元素。

但是如果你活用标签较多，标签包含了主题，又包含了进度，甚至时间，那么可能单一配色的主题，就无法满足你的管理要求，或者是便利性要求了。

## CSS

这里我们整理范例了一些修改方法，供大家参考：

- 标签会变成胶囊样式（pill style）
- 颜色可以根据不同的标签内容自己设定
- 使用方法：参加 [[Obsidian的CSS代码片段]]

```CSS
/*整体修改标签的外观样式*/
.tag {
  background-color: var(--text-accent);
  border: none;
  color: white;
  font-size: 11px;
  padding: 1px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0px 0px;
  cursor: pointer;
  border-radius: 14px;
}
/*标签指向时候，文字和背景色变化*/
.tag:hover {
color: white;
background-color: var(--text-accent-hover);
}
/*#todo 标签在阅读和编辑模式*/
.tag[href^="#todo"] {
 color:white;
  background-color: #3e93d8
}
.cm-s-obsidian span.cm-tag-todo,.tag[href^="#todo"] {
 color:white;
  background-color: #3e93d8
}
/*#shopping 标签在阅读和编辑模式*/
.tag[href^="#shopping"] {
 color:white;
  background-color: #7b6cd9
}
.cm-s-obsidian span.cm-tag-shopping,.tag[href^="#shopping"] {
 color:white;
  background-color: #7b6cd9
}
/*#important 标签在阅读和编辑模式*/
.tag[href^="#important"] {
 color:white;
  background-color: red;
}
.cm-s-obsidian span.cm-tag-important,.tag[href^="#important"] {
 color:white;
  background-color: red;
}
/*#task 标签在阅读和编辑模式*/
.tag[href^="#task"] {
 color:white;
  background-color: orange;
}
.cm-s-obsidian span.cm-tag-task,.tag[href^="#task"] {
 color:white;
  background-color: orange;
}
/*#meeting 标签在阅读和编辑模式*/
.tag[href^="#meeting"] {
 color:white;
  background-color: #a7e2f5;
}
.cm-s-obsidian span.cm-tag-meeting,.tag[href^="#meeting"] {
 color:white;
  background-color: #a7e2f5;
}
/*#comunicate 标签在阅读和编辑模式*/
.tag[href^="#comunicate"] {
 color:white;
  background-color: Lime;
}
.cm-s-obsidian span.cm-tag-comunicate,.tag[href^="#comunicate"] {
 color:white;
  background-color: Lime;
}
/*#newadd 标签在阅读和编辑模式*/
.tag[href^="#newadd"] {
 color:white;
  background-color: red;
}
.cm-s-obsidian span.cm-tag-newadd,.tag[href^="#newadd"] {
 color:white;
  background-color: red;
}
/*#update 标签在阅读和编辑模式*/
.tag[href^="#update"] {
 color:white;
  background-color: LightSkyBlue;
}
.cm-s-obsidian span.cm-tag-update,.tag[href^="#update"] {
 color:white;
  background-color: LightSkyBlue;
}
```
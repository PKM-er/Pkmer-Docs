---
uid: 20230630231736
title: Obsidian 样式：分割线样式美化
tags: [Obsidian, 样式, 分割线, 美化]
description: Obsidian 样式：分割线样式美化
author: OS
type: other
draft: false
editable: false
modified: 20230701232854
---

# Obsidian 样式：分割线样式美化

## 引言

Obsidian 简约的界面，似乎缺少了那么一点个性化，很多同学在学习摸索的过程中，除了关注知识管理，各种收集整理方法， 自动化管理工具之外。

也会对外观，彰显个性的设置感兴趣，比如如果你使用分割线，那么默认的分割线似乎，有那么点单调。

## 使用

- 方法 1：可以找到有类似效果的外观主题，比如使用 3F 老师的 [Blue-TopazT主题](https://github.com/PKM-er/Blue-Topaz_Obsidian-css)，当然你也可以参考 Cuman 的 [Blue-topaz主题示例库](https://github.com/PKM-er/Blue-topaz-example)
- 方法 2：可以使用独立 CSS 片段，如何使用独立 CSS 片段，参考 [[Obsidian的CSS代码片段]]
	- 独立片段如下：

```css
/*阅读模式渐变色分割线*/
.markdown-preview-view hr {
	border-top: 1px solid;
	border-image: linear-gradient(to right, #ef201c, #e96036,#e6ef82, #e09a29, #41e249, #26c6da, #4e5ff2, #7e57c2, #de5fb8) 7;
}
/*实时模式渐变色分割线*/
.markdown-source-view div.hr.cm-line hr {
	border-top: 1px solid;
	border-image: linear-gradient(to right, #ef201c, #e96036,#e6ef82, #e09a29, #41e249, #26c6da, #4e5ff2, #7e57c2, #de5fb8) 7;
}
```
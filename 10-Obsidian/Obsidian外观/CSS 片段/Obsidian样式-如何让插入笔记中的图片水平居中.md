---
uid: 20240119105759
title: Obsidian 样式：如何让插入笔记中的图片水平居中
tags: [Obsidian, 排版, 图片]
description: Obsidian 样式：如何让插入笔记中的图片水平居中
author: OS
type: other
draft: false
editable: false
modified: 20240119110532
---

# Obsidian 样式：如何让插入笔记中的图片水平居中

## 概述

这是不少同学在 PKMer 交流群问到的问题，这种排版方式也很符合很多同学在日常办公或者网页浏览时候常见的布局结构。所以把这段 CSS 固化下来，大家自己使用。

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]

```CSS
div.internal-embed.media-embed.image-embed{
	display: flex;
	justify-content: center;
    align-items: center;
}
```
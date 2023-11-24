---
uid: 20230905115149
title: Obsidian样式-书签列表样式
tags: 
description: Obsidian样式-书签列表样式
author: proudBenzene
type: other
draft: false
editable: false
modified: 20231024002353
---

# 书签列表样式

## 引言

在 AnuPpuccin 主题的 GitHub Discussion 中看到其他大佬分享的列表 CSS 样式，觉得还蛮漂亮，就自己扩充了一下，完善了一点效果。

> [!warning]+ 注意
> 由于个人代码能力有限，本 CSS 效果仅适配于源码和预览模式。欢迎强力大佬 PR。

使用效果如下：

![](https://cdn.pkmer.cn/images/202311081829080.png!pkmer)

## CSS 片段获取

本片段的 CSS 代码如下：

```css
/*
From @brimwats
https://github.com/AnubisNekhet/AnuPpuccin/discussions/52

*/

/* ──────────────── Outliner ──────────────── */
.cm-hmd-list-indent .cm-tab {
	position: relative;
} 

.cm-hmd-list-indent .cm-tab::before {
	content: "";
	border-left: 1px solid var(--base0);
	position: absolute;
	left: 2px;
	top: -9px;
	bottom: -9999px;
} 

.cm-s-obsidian .HyperMD-list-line {
	padding-top: 0em;
	position: relative;
	overflow: hidden;
}  

/* Adding a rule line before ul list -- EDITOR Mode  */

.markdown-source-view.mod-cm6.is-live-preview .HyperMD-list-line-1::after {
	content: '';
	border-left: .4em solid var(--text-accent);
	position: absolute;
	left: -0.1em;
	top: 0em;
	bottom: 0;
	height: 100%;
	border-color:#cc241d;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
} 

.HyperMD-list-line-2::after {
	content: '';
	border-left: 1em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#fe8019;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.HyperMD-list-line-3::after {
	content: '';
	border-left: 1.5em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#F0C04A;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.HyperMD-list-line-4::after {
	content: '';
	border-left: 2.1em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#99BF81;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.HyperMD-list-line-5::after {
	content: '';
	border-left: 2.7em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#8BA498;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.HyperMD-list-line-6::after {
	content: '';
	border-left: 3.5em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#C78A9C;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.HyperMD-list-line-7::after {
	content: '';
	border-left: 4.1em solid var(--text-accent);
	position: absolute;
	left: 0em;
	top: 0em;
	bottom: 0;
	height: 80%;
	border-color:#854370;
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

/* etc */
```

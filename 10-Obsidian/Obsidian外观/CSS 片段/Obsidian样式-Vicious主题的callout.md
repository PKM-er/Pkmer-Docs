---
uid: 20240125214308
title: Obsidian 样式 -Vicious 主题的 callout
tags: []
description: 来自于Vicious主题的callout样式
author: calmwaves
type: other
draft: false
editable: false
modified: 20240125214908
---

# Obsidian 样式 -Vicious 主题的 callout

css 片段来自 [Vicious 主题](https://github.com/zaheralmajed/vicious-theme-obsidian)

## 效果展示

下面是配合 [[Obsidian样式-minimal主题Cards卡片布局|list-cards]] 分栏的一个效果

![image.png](https://cdn.pkmer.cn/images/20240125214537.png!pkmer)

## css 代码

```css

.theme-dark,
.theme-light {
	--callout-title-padding: 4px 12px;
	--callout-padding: 0;
	--callout-radius: var(--radius-m);
}
/*================================================*/
/* Root Colors
/*================================================*/
:root {
	--800: #000000e0;
	--800-RGB: 8, 9, 14;
	--700: #17181e;
	--700-RGB: 23, 24, 30;
	--600: #292a2f;
	--600-RGB: 41, 42, 47;
	--500: #4f5053;
	--500-RGB: 79, 80, 83;
	--400: #68696c;
	--400-RGB: 104, 105, 108;
	--300: #818184;
	--300-RGB: 129, 129, 132;
	--200: #e1e2e9;
	--200-RGB: 225, 226, 233;
	--100: #f1f2f5;
	--100-RGB: 241, 242, 245;
	--000: #fbfcfc;
	--000-RGB: 251, 252, 252;
	--C001: #f18196;
	--C001-RGB: 241, 129, 150;
	--C002: #f19a81;
	--C002-RGB: 249, 95, 42;
	--C003: #ebcb8b;
	--C003-RGB: 241, 201, 129;
	--C004: #e3eb8b;
	--C004-RGB: 198, 212, 49;
	--C005: #bcf181;
	--C005-RGB: 118, 234, 34;
	--C006: #8df181;
	--C006-RGB: 141, 241, 129;
	--C007: #81f1a4;
	--C007-RGB: 129, 241, 164;
	--C008: #8be3eb;
	--C008-RGB: 139, 227, 235;
	--C009: #ab8beb;
	--C009-RGB: 171, 139, 235;
	--C010: #ee81f1;
	--C010-RGB: 238, 129, 241;
	--C011: #f181c5;
	--C011-RGB: 241, 129, 197;
}

/*================================================*/
/* Light Theme
/*================================================*/
.theme-light {
	--callout-content-background: var(--000) !important;
	--callout-default: var(--800-RGB);
	--callout-error: var(--C001-RGB);
	--callout-warning: var(--C001-RGB);
	--callout-help: var(--C002-RGB);
	--callout-faq: var(--C002-RGB);
	--callout-question: var(--C002-RGB);
	--callout-tip: 219, 168, 64 /* var(--C003-RGB)*/;
	--callout-hint: var(--C003-RGB);
	--callout-bug: var(--C003-RGB);
	--callout-abstract: var(--C004-RGB);
	--callout-summary: var(--C004-RGB);
	--callout-tldr: var(--C004-RGB);
	--callout-info: var(--C005-RGB);
	--callout-important: 129, 220, 99/* var(--C006-RGB)*/;
	--callout-title-text: #fff;
}
/*================================================*/
/* Dark Theme
/*================================================*/
.theme-dark {
	--callout-content-background: var(--800) !important;
	--callout-default: var(--000-RGB);
	--callout-error: var(--C001-RGB);
	--callout-warning: var(--C001-RGB);
	--callout-help: var(--C002-RGB);
	--callout-faq: var(--C002-RGB);
	--callout-question: var(--C002-RGB);
	--callout-tip: var(--C003-RGB);
	--callout-hint: var(--C003-RGB);
	--callout-bug: var(--C003-RGB);
	--callout-abstract: var(--C004-RGB);
	--callout-summary: var(--C004-RGB);
	--callout-tldr: var(--C004-RGB);
	--callout-info: var(--C005-RGB);
	--callout-important: var(--C006-RGB);
	--callout-success: var(--C007-RGB);
	--callout-todo: var(--C008-RGB);
	--callout-quote: var(--C008-RGB);
	--callout-example: var(--C009-RGB);
	--callout-fail: var(--C011-RGB);
	--callout-title-text: #000;
}

/*================================================*/
/* Distinctive Callouts
/*================================================*/
.callout {
	background-color: rgba(var(--callout-color), 1);
}
.callout-icon .svg-icon,
.callout-title-inner {
	color: var(--callout-title-text);
}
.callout-content > p:last-child,
.callout-content > ul:last-child,
.callout-content > ol:last-child {
	margin-bottom: 0px;
}

.callout-content > p:first-child,
.callout-content > ul:first-child,
.callout-content > ol:first-child {
	margin-top: 0px;
}

.callout-content {
	border-top: 1px solid rgba(var(--callout-color), 0.64);
	padding: 8px 16px !important;
}

.callout {
	border: 1px solid rgb(var(--callout-color), 0.64);
}
.callout[data-callout="help"],
.callout[data-callout="faq"],
.callout[data-callout="question"] {
	border: 1px solid rgb(var(--callout-question), 0.64);
}

.callout[data-callout="tip"],
.callout[data-callout="hint"],
.callout[data-callout="bug"] {
	border: 1px solid rgb(var(--callout-bug), 0.64);
}

.callout[data-callout="error"],
.callout[data-callout="danger"],
.callout[data-callout="attention"],
.callout[data-callout="caution"],
.callout[data-callout="warning"] {
	border: 1px solid rgb(var(--callout-error), 0.64);
}

.callout[data-callout="example"] {
	border: 1px solid rgb(var(--callout-example), 0.64);
}

.callout[data-callout="failure"],
.callout[data-callout="missing"],
.callout[data-callout="fail"] {
	border: 1px solid rgb(var(--callout-fail), 0.64);
}

.callout[data-callout="important"] {
	border: 1px solid rgb(var(--callout-important), 0.64);
}

.callout[data-callout="info"] {
	border: 1px solid rgb(var(--callout-info), 0.64);
}

.callout[data-callout="success"],
.callout[data-callout="check"],
.callout[data-callout="done"] {
	border: 1px solid rgb(var(--callout-success), 0.64);
}

.callout[data-callout="abstract"],
.callout[data-callout="tldr"],
.callout[data-callout="summary"] {
	border: 1px solid rgb(var(--callout-summary), 0.64);
}

.callout[data-callout="todo"],
.callout[data-callout="cite"],
.callout[data-callout="quote"] {
	border: 1px solid rgb(var(--callout-todo), 0.64);
}
/*================================================*/

/* Edit button on right corner */
.markdown-source-view.mod-cm6 .edit-block-button {
    padding: var(--size-2-2) var(--size-2-3);
    position: absolute;
    top: var(--size-2-2);
    right: var(--size-2-2);
    display: flex;
    opacity: 0;
    color: var(--text-muted);
    border-radius: var(--radius-s);
    cursor: cell;
}

/* Arrow down/up */
.callout-title {
	color: var(--text-muted);
}
```
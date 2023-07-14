---
uid: 20230616095119
title: Obsidian 样式：引用框样式
tags: [Obsidian, css, 引用框, 美化, 样式]
description: obsidian代码框样式美化
author: cuman
type: other
draft: false
editable: false
modified: 20230715010553
---

# Obsidian 样式：引用框样式

## 引言

在 Markdown 语法中引用语法是在段落前添加一个 `>` 符号，具体参考 [[Markdown#创建块引用]]

本文就是针对这个样式进行美化。

## 使用方法

基于 Obsidian 的自定义样式来处理，如何自定义样式，查看如何使用 [[Obsidian的CSS代码片段]]

## 引用框样式

默认的引用框是左边一条竖线的形式，

![image.png](https://cdn.pkmer.cn/images/202306161053128.png!pkmer)

下面再介绍几种引用框样式

### 单引号样式

![image.png](https://cdn.pkmer.cn/images/202306161117545.png!pkmer)

```css
/* BLOCKQUOTES */

.markdown-preview-view blockquote:before {
  content: "❝";
  font-size: 2.5em;
  margin-right: .05em;
  line-height: 0.1em;
  vertical-align: -0.3em;
}

blockquote p {
  color: var(--blockquote-border);
  display: inline;
}

blockquote em{
	color: var(--blockquote-border);
}

.cm-hmd-indent-in-quote {
  padding-left: 0px;
}

.markdown-preview-view blockquote {
  line-height: 1.75em;
  color: var(--blockquote-border);
  font-family: var(--default-font);
  font-style: bold !important;
  letter-spacing: 0px;
  border: none;
  border-left: 0.2rem solid var(--blockquote-border);
  border-radius: 0px !important;
  margin: 1.5rem 0rem 1.5rem 0rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  background-color: var(--blockquote-bg);
}


/*实时预览模式*/
.markdown-source-view.mod-cm6.is-live-preview .HyperMD-quote:before,
.markdown-source-view.mod-cm6 .cm-blockquote-border:before {
  border-left: none;
}
.markdown-source-view.mod-cm6.is-live-preview
.HyperMD-quote:not(.cm-active) > .cm-formatting.cm-formatting-quote.cm-quote::before {
  content: "❝";
  font-size: 2em;
  position: absolute;
  margin-left: -0.2em;
  top:-0.3em;
}
.markdown-source-view.mod-cm6.is-live-preview .HyperMD-quote + .HyperMD-quote > .cm-formatting.cm-formatting-quote.cm-quote::before {
  display: none;
}
.markdown-source-view.mod-cm6.is-live-preview .cm-content div.HyperMD-quote .cm-blockquote-border {
  border: none;
}

```

### 气泡样式

![image.png](https://cdn.pkmer.cn/images/202306161149022.png!pkmer)

```css

:is(.markdown-preview-view,.markdown-rendered):not(.kanban-plugin__markdown-preview-view) blockquote {
  position: relative;
  color: var(--blockquote-border-color);
  font-weight: normal;
  line-height: 1.5;
  margin-top: 2em;
  margin-bottom: 2.5em;
  border: 3px solid;
  border-radius: 20px;
  padding: 10px 15px;
  background: var(--background-primary) !important;
}

.theme-dark :is(.markdown-preview-view,.markdown-rendered):not(.kanban-plugin__markdown-preview-view) blockquote {
  background-color: var(--background-primary) !important;
}

:is(.markdown-preview-view,.markdown-rendered):not(.kanban-plugin__markdown-preview-view) blockquote p {
  color: var(--text-normal);
}

:is(.markdown-preview-view,.markdown-rendered):not(.kanban-plugin__markdown-preview-view) blockquote:after {
  content: '';
  position: absolute;
  border: 2.5px solid var(--blockquote-border-color);
  border-radius: 35px 0 0 0;
  width: 1.75rem;
  height: 3.45rem;
  bottom: -3.6rem;
  left: 1.8rem;
  border-bottom: none;
  border-left: none;
  border-right: none;
  z-index: 3;
}

:is(.markdown-preview-view,.markdown-rendered):not(.kanban-plugin__markdown-preview-view) blockquote:before {
  content: '';
  position: absolute;
  width: 25px;
  border: 4px solid var(--background-primary);
  bottom: -4px;
  left: 20px;
  z-index: 2;
}

```

## 边框样式

![image.png](https://cdn.pkmer.cn/images/202306161325326.png!pkmer)

 ```css
 :is(.markdown-preview-view,.markdown-rendered) blockquote {
  border: 3px solid var(--blockquote-border-color);
  background-color: transparent;
  border-radius: var(--radius-m);
}
 :is(.markdown-preview-view,.markdown-rendered) blockquote >p:first-child {
margin-top:0.5em;
margin-bottom:0.5em;
margin-right:1em;
 
}
 :is(.markdown-preview-view,.markdown-rendered) blockquote >p:last-child {
margin-bottom:0.5em;
margin-right:1em;
} 
```
---
uid: 20230714110747
title: Obsidian 样式：编辑模式代码块显示行号
tags: [Obsidian, css, 美化, 代码块]
description: 代码块在编辑模式显示行号
author: cuman
type: other
draft: false
editable: false
modified: 20230715010726
---

# Obsidian 样式：编辑模式代码块显示行号

## 引言

Obsidian 作为 md 文档编辑器，写代码块本来就不是强项，无法跟专业的代码编辑相比，比如代码块无法显示行号。本文通过 css 的方法实现在编辑模式下显示代码行号 ，但因为受限于 Obsidian 的渲染机制，如果代码长度超过一屏幕，代码行号会被重置，也算一个瑕疵。

## 效果

![image.png](https://cdn.pkmer.cn/images/202307141144679.png!pkmer)

## 代码片段

具体代码片段如何使用参考 [[Obsidian的CSS代码片段|Obsidian css代码片段]]

```css
.HyperMD-codeblock-begin {
  counter-reset: line-numbers;
}

.HyperMD-codeblock.cm-line:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end) {
  padding-left: 3em;
  position: relative;
}

.HyperMD-codeblock.cm-line:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end)::after {
  align-items: flex-start;
  color: var(--text-faint);
  content: counter(line-numbers);
  counter-increment: line-numbers;
  display: flex;
  font-size: 0.8em;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  position: absolute;
  text-align: right;
  width: 2em;
  padding-right: 0.5em;
  bottom: -2px;
  border-right: 1px solid var(--scrollbar-thumb-bg);
 white-space: nowrap;
}

.HyperMD-codeblock.cm-line.cm-active:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end)::after {
  color: var(--color-accent);
}

.HyperMD-codeblock .cm-foldPlaceholder::before {
  display: none;
}

```

## 延伸阅读

上述代码只局限于编辑模式下显示代码块行号，如果想在阅读模式下也显示行号，就需要借助专业的插件实现了。

比如 [[10-Obsidian/Obsidian社区插件/obsidian-better-codeblock]]

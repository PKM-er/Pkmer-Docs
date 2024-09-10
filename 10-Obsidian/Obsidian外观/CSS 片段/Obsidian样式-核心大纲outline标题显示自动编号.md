---
uid: 20240910165133
title: Obsidian 样式 - 核心大纲 outline 标题显示自动编号
tags: [css, outline]
description: " Outline 进行优化的CSS，自动对标题进行编号"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240910165307
---

# Obsidian 样式 - 核心大纲 outline 标题显示自动编号

![24.09.10_Obsidian样式-核心大纲outline标题显示自动编号.md](https://cdn.pkmer.cn/images/202409101652696.png!pkmer)

对 Obsidian 的核心插件 Outline 进行优化，自动对标题进行编号。请注意，该编号不会实际修改文档中的标题编号。

> 该代码改编于 [obsidian-visually-numbered-headings：窗口计数失效](https://github.com/platon-ivanov/obsidian-visually-numbered-headings/issues/16)

## 从一级标题开始计数

```css
/* https://github.com/platon-ivanov/obsidian-visually-numbered-headings/issues/16 */
/* container of first layer headings. */
.workspace-leaf-content {
  counter-reset: rootCounter;
}

.workspace-leaf-content .tree-item .tree-item-self .tree-item-inner::before {
  content: counters(rootCounter, ".") ". ";
  counter-increment: rootCounter;
}

/* container of the ohter headings. */
/* NOTE: It is not .outline anymore. So we need a new counter */
.tree-item-children {
  counter-reset: innerCounter;
}

.tree-item-children .tree-item .tree-item-self .tree-item-inner::before {
  content: counters(rootCounter, ".") "." counters(innerCounter, ".") ". ";
  counter-increment: innerCounter;
}
```

## 从二级标题开始计数

```css
/*! Visually Numbered Headings */
/* https://github.com/platon-ivanov/obsidian-visually-numbered-headings/issues/16 */

/* container of first layer headings. */
div[data-type="outline"] .workspace-leaf-content {
  counter-reset: rootCounter;
}

div[data-type="outline"] .workspace-leaf-content .tree-item .tree-item-self .tree-item-inner::before {
  /* content: counters(rootCounter, ".") " "; */
  counter-increment: rootCounter;
}

/* container of the ohter headings. */
/* NOTE: It is not .outline anymore. So we need a new counter */
div[data-type="outline"] .tree-item-children {
  counter-reset: innerCounter 0;
}

div[data-type="outline"] .tree-item-children .tree-item .tree-item-self .tree-item-inner::before {
  /* content: counters(rootCounter, ".") "." counters(innerCounter, ".") " "; */
  content: counters(innerCounter, ".") " ";
  counter-increment: innerCounter;
}

```

---
uid: 20240125213042
title: Obsidian 样式 -PLN 主题的 callout
tags:
  - css
description: 来自于PLN主题的callout样式
author: calmwaves
type: other
draft: false
editable: false
modified: 20240125213933
---

# Obsidian 样式 -PLN 主题的 callout

css 片段来自 [PLN 主题](https://github.com/PipeItToDevNull/PLN)

## 效果展示

![image.png](https://cdn.pkmer.cn/images/20240125213748.png!pkmer)

## css代码

```css

.theme-light,
.theme-dark {

    --color-red-rgb: 191, 97, 106;
    --color-orange-rgb: 208, 135, 112;
    --color-yellow-light-rgb: 235, 203, 139;
    --color-yellow-dark-rgb: 228, 184, 96;
    --color-green-rgb: 163, 190, 140;
    --color-purple-rgb: 180, 142, 173;
    --color-sea-green-rgb: 143, 188, 187;
    --color-cyan-rgb: 136, 192, 208;
    --color-frost-rgb: 129, 161, 193;
    --color-blue-rgb: 94, 129, 172;
    --color-salmon-rgb: 252, 110, 104;

}

/*
 * Callouts
*/
body {
    --callout-padding: 0;
    --callout-title-padding: var(--size-4-2) var(--size-4-2) var(--size-4-2) var(--size-4-3);
    --callout-content-padding: 0 var(--size-4-2) var(--size-4-2) var(--size-4-3);
    --callout-radius: 5px;
}


/* remove leading and trailing padding of callout content paragraphs */
.callout-content > p:first-child {
    margin-top: 0px;
}
.callout-content > p:last-child {
    margin-bottom: 0px;
}

.callout {
    border-top: 4px solid rgba(var(--callout-color), 1.0)!important;
    border-left: 2px solid rgba(var(--callout-color), 1.0)!important;
}


/* make unique callouts */
.callout[data-callout="danger"] {
    --callout-icon: lucide-alert-octagon;
    --callout-color: var(--color-salmon-rgb);
}
.callout[data-callout="idea"] {
    --callout-icon: lucide-lightbulb;
}
.callout[data-callout="links"] {
    --callout-icon: lucide-link;
}
.callout[data-callout="meta"] {
    --callout-icon: lucide-database;
}

/* remove meta callouts in reading mode and when embeded*/
.pln-rm-co-links .markdown-reading-view .callout[data-callout="links"],
.pln-rm-co-meta .markdown-reading-view .callout[data-callout="meta"],
.markdown-embed .callout[data-callout="links"],
.markdown-embed .callout[data-callout="meta"] {
    display: none;
}

/* colours */
.callout[data-callout="note"] {
    --callout-color: var(--color-blue-rgb);
}

.callout[data-callout="abstract"],
.callout[data-callout="summary"],
.callout[data-callout="quote"],
.callout[data-callout="tldr"] {
    --callout-color: var(--color-frost-rgb);
}

.callout[data-callout="info"],
.callout[data-callout="todo"],
.callout[data-callout="tip"],
.callout[data-callout="hint"],
.callout[data-callout="important"] {
    --callout-color: var(--color-cyan-rgb);
}

.callout[data-callout="success"],
.callout[data-callout="check"],
.callout[data-callout="done"],
.callout[data-callout="question"],
.callout[data-callout="help"],
.callout[data-callout="faq"] {
    --callout-color: var(--color-green-rgb);
}

.theme-light .callout[data-callout="idea"],
.theme-light .callout[data-callout="attention"],
.theme-light .callout[data-callout="caution"],
.theme-light .callout[data-callout="warning"] {
    --callout-color: var(--color-yellow-dark-rgb);
}

.theme-dark .callout[data-callout="idea"],
.theme-dark .callout[data-callout="attention"],
.theme-dark .callout[data-callout="caution"],
.theme-dark .callout[data-callout="warning"] {
    --callout-color: var(--color-yellow-light-rgb);
}

.callout[data-callout="failure"],
.callout[data-callout="fail"],
.callout[data-callout="missing"] {
    --callout-color: var(--color-orange-rgb);
}

.callout[data-callout="error"],
.callout[data-callout="bug"] {
    --callout-color: var(--color-red-rgb);
}

.callout[data-callout="example"] {
    --callout-color: var(--color-purple-rgb);
}

.theme-dark .callout[data-callout="cite"],
.theme-dark .callout[data-callout="links"],
.theme-dark .callout[data-callout="meta"] {
    --callout-color: var(--w0-rgb);
}
.theme-light .callout[data-callout="cite"],
.theme-light .callout[data-callout="links"],
.theme-light .callout[data-callout="meta"] {
    --callout-color: var(--b3-rgb);
}


```
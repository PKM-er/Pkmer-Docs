---
uid: 20240706122546
title: Obsidian 样式 -Minimal 主题的 Outline Callout
tags:
  - CSS片段
  - Minimal
  - callout
description: 该片段摘自 Minimal 主题，Callout 的 Outline 形式是一种更为简洁的 Callout。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240706122605
---

# Obsidian 样式 -Minimal 主题的 Outline Callout

![24.07.06_Obsidian样式-Minimal主题的Outline Callout](https://cdn.pkmer.cn/images/202407061225057.png!pkmer)

该片段摘自 Minimal 主题，Callout 的 Outline 形式是一种更为简洁的 Callout。

```css

/* 该片段摘自Minimal主题 by 熊猫别熬夜 2024-07-06_12-08 */
/* .markdown-source-view.mod-cm6 .cm-embed-block{
    width: fit-content;
} */

.is-live-preview.is-readable-line-width>.cm-callout .callout {
    max-width: var(--max-width);
    margin: 0 auto;
}

.callout .callout-title {
    background-color: var(--background-primary);
    margin-top: -24px;
    z-index: 200;
    width: fit-content;
    padding: 0 0.5em;
    margin-left: -0.75em;
    letter-spacing: 0.05em;
    font-variant-caps: all-small-caps;
}

.callout {
    overflow: visible;
    --callout-border-width: 1px;
    --callout-border-opacity: 0.5;
    --callout-title-size: 0.8em;
    --callout-blend-mode: normal;
    background-color: transparent;
    /* width: fit-content; */
}

.cm-embed-block.cm-callout {
    padding-top: 12px;
}

.callout-content .callout {
    margin-top: 18px;
}

```

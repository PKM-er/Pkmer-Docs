---
uid: 20250401185434
title: Obsidian样式-列表属性色块美化
tags:
  - 美化
  - 美化样式
  - 属性面板
  - 笔记属性
  - metadata
description: 美化列表属性
author: ProudBenzene
type: awesome
draft: false
editable: false
modified: 20250401190904
---

# Obsidian 样式 - 列表属性色块美化

## 来源

该 CSS 来源于 Border 主题作者，访问 [原链接](https://github.com/Akifyss/obsidian-border/issues/260)。

该 CSS 片段可以将属性中除去 tag 以外的其他列表属性字段的背景渲染为色块，未在非 Border 主题中测试。

## CSS 片段

```css
.metadata-property:not([data-property-key="tags"]) .multi-select-pill {
    --pill-padding-x: var(--tag-padding-x);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill::after {
    width: 100% !important;
    left: 0 !important;
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+1) {
    --pill-background: rgba(var(--color-red-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-red-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+2) {
    --pill-background: rgba(var(--color-orange-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-orange-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+3) {
    --pill-background: rgba(var(--color-yellow-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-yellow-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+4) {
    --pill-background: rgba(var(--color-green-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-green-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+5) {
    --pill-background: rgba(var(--color-cyan-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-cyan-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+6) {
    --pill-background: rgba(var(--color-blue-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-blue-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+7) {
    --pill-background: rgba(var(--color-purple-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-purple-rgb), 0.25);
}

.metadata-property:not([data-property-key="tags"]) .multi-select-pill:nth-child(8n+8) {
    --pill-background: rgba(var(--color-pink-rgb), 0.2);
    --pill-background-hover: rgba(var(--color-pink-rgb), 0.25);
}
```

## 效果展示

![](https://cdn.pkmer.cn/images/20250401191151735.png!pkmer)
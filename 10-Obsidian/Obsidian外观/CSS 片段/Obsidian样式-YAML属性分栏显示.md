---
uid: 20241224232133
title: Obsidian 样式 -YAML 属性分栏显示
tags: [YAML, 属性面板, properties]
description: 通过 CSS 将 YAML 属性以两栏的形式展示，提升信息密度，减少垂直空间的占用。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241224232229
---

# Obsidian 样式 -YAML 属性分栏显示

![241223_Obsidian样式：YAML属性分栏显示.md](https://cdn.pkmer.cn/images/202412242321374.png!pkmer)

通过 CSS 将 YAML 属性以两栏的形式展示，提升信息密度，减少垂直空间的占用。

```css
.view-content .markdown-preview-view .metadata-container,
.view-content .markdown-source-view .metadata-container {
    .metadata-content:not(:is(body.is-grabbing .metadata-content:hover)) {
        display: block;
        column-count: 2;
        column-rule: 1px dashed var(--metadata-border-color);
    }
}
```

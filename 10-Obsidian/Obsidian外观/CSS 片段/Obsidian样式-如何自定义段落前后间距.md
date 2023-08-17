---
uid: 20230613000147
title: Obsidian 样式：如何自定义段落前后间距
tags: [Obsidian, css, 样式, 自定义, 段落, 段落间距]
description: Obsidian 样式：如何自定义段落前后间距
author: OS
type: other
draft: false
editable: false
modified: 20230616095656
---

# Obsidian 样式：如何自定义段落前后间距

## 引言

Obsidian 虽然没有块的概念，但是具有类似文本编辑段落的形式。但有时候这种段落之间的间距，会让我们有点不适应。

如果你希望段落之间能像 Word 一样可视化调整，那么希望下面内容可以帮助你。

## Snippets 方法

- 基于 Obsidian 的自定义样式来处理，如何自定义样式，查看 [[Obsidian的CSS代码片段]]

### 具体 CSS

- 此方法依赖 [[obsidian-style-settings]] 插件

```css
body {
    --paragraph-margin-top:10px;
    --paragraph-margin-bottom:5px;
}

div:not(.HyperMD-header,.HyperMD-list-line).cm-line {
    padding-top:var(--paragraph-margin-top) !important;
    padding-bottom:var(--paragraph-margin-bottom) !important;
}

div:not(.HyperMD-header,.HyperMD-list-line).cm-line:has(.cm-fold-indicator) {
    padding-top:unset !important;
    padding-bottom:unset !important;
}
div:not(.HyperMD-header,.HyperMD-list-line).cm-line:has(.cm-hmd-frontmatter) {
    padding-top:unset !important;
    padding-bottom:unset !important;
}

/* @settings
name: Things Theme optimize
id: things-style-optimize
settings:
    -
        id: paragraph
        title: 段落间距调整
        type: heading
        level: 2
        collapsed: true
    -
        id: paragraph-margin-top
        title: 段前间距
        type: variable-text
        default: 5px
    -
        id: paragraph-margin-bottom
        title: 段后间距
        type: variable-text
        default: 5px    
*/
```
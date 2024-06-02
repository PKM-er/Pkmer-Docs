---
uid: 20240518200254
title: Obsidian 样式 -FrontMatter 读书笔记
tags: [读书笔记, CSS片段, CSS美化, css]
description: 
author: Bon, ProudBenzene
type: advanced
draft: false
editable: false
modified: 20240602231319
---

# Obsidian 样式 -FrontMatter 读书笔记

## 样式效果展示

![](https://cdn.pkmer.cn/images/202405191522926.png!pkmer)

## 缘由

Obsidian 1.4.0 更新了全新的 metadata，使得 metadata 不仅可以像原本一样在源码模式下编辑，在实时编辑与阅读模式下也可以进行编辑。

同时，metadata 框的外观也与之前的版本有所不同，现在 metadata 框的外观更加美观，可以以类似表格的形式展示，更加符合 Obsidian 的整体风格。

而在之前的很多读书笔记模板中需要使用特定 CSS 与 Callout 才能达到的效果（如下图），现在可以直接通过使用 CSS 修改 metadata 实现。

![](https://cdn.pkmer.cn/images/202406011914632.png!pkmer)

## 使用方法

1. 将以下 CSS 代码制成 CSS 文件，放入 Obsidian 的 `snippets` 文件夹中并启用该片段
2. 在记录页面的 FrontMatter 中添加 `cssclass` 字段，并在字段中填入 `book`

## 代码

```css
/* FrontMatter 读书笔记样式 */
/* Author: Quorafind */
.book .cm-scroller {
padding-left: 10% !important;
padding-right: 10% !important;
} 

.book .cm-sizer,
.book .markdown-preview-sizer {
    margin-left: 0px !important;
    margin-right: 0px !important;
}

.book .inline-title {
    display: none;
}

.book img[alt="cover"] {
    display: inline !important;
    width: 300px;
    height: 500px;
    object-fit: cover;
   }

.book.is-live-preview .metadata-container,
.book.markdown-preview-view .metadata-container {
    position: absolute;
    display: block;
    width: calc(80% - 330px);
    left: calc(10% + 330px);
    max-height: 500px;
    overflow-y: scroll
}
```
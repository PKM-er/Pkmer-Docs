---
uid: 20240323135013
title: Obsidian 样式 - 更小的标签页标题栏
tags:
  - obsidian
  - css
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240323135013
---

# Obsidian 样式 - 更小的标签页标题栏

标签页标题栏是指标签页下方的那段标题栏

![image.png](https://cdn.pkmer.cn/images/20240130183105.png!pkmer)

提供两种美化方式（css 代码来自<https://github.com/replete/obsidian-minimal-theme-css-snippets>）

## 样式一

![floating-tab-header.gif](https://cdn.pkmer.cn/images/floating-tab-header.gif!pkmer)

```css
/*
    Floating Tab Header
    With inline title enabled, it seems a waste to take up vertical space of the 'view header'
    especially if you don't use the back/forward buttons or the breadcrumb, so this minifies
    that interface into a float right toolbar.
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/


/* Floating tab header styles */
.view-header {
    background:transparent !important;
    border:none;
    position:fixed;
    top:8px;
    right:10px;
    right: calc(var(--scrollbar-size) + 8px);
    padding: 5px 5px;
    justify-content:end;
    border-radius: 8px;
    /* border:1px solid hsla(var(--base-h), var(--base-s), var(--base-l), 1); */
    border:1px solid transparent;
    height:auto;
    z-index:500; /* Fixes in excalidraw */
}

.view-header:hover,
.view-header:focus-within {
    border:1px solid var(--divider-color);
    box-shadow: -2px 2px 6px -2px var(--divider-color);
    background-color: var(--background-primary) !important;
}

/* Show/hide nav + breadcrumb interaction */
.view-header-nav-buttons,
.view-header-title-container,
.view-header .cmdr-adder {
    opacity:0;
    display:none;
}
.view-header:hover :is(.view-header-nav-buttons, .view-header-title-container),
.view-header:focus-within :is(.view-header-nav-buttons, .view-header-title-container){
    opacity:1;
    display:flex
}

/* Tweak commander '+' icon */
.view-header:hover .cmdr-adder,
.view-header:focus-within .cmdr-adder {
    opacity:0.4;
    display:flex;
}

/* Excalidraw fix */
[data-type="excalidraw"] .view-header .clickable-icon:not(:last-of-type){
    display:none;
    opacity:0;
}
[data-type="excalidraw"] .view-header:hover .clickable-icon:not(.view-header-icon) {
    display:flex;
    opacity:1;
}
```

## 样式二

![floating-tab-header-mini.gif](https://cdn.pkmer.cn/images/floating-tab-header-mini.gif!pkmer)

```css
/*
    Floating Tab Header Mini
    With inline title enabled, it seems a waste to take up vertical space of the 'view header'
    especially if you don't use the back/forward buttons or the breadcrumb, so this minifies
    that interface into a float right toolbar.
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/


/* Floating tab header styles */
.view-header {
    background:transparent !important;
    border:none;
    position:fixed;
    top:8px;
    right:10px;
    right: calc(var(--scrollbar-size) + 8px);
    padding: 5px 5px;
    justify-content:end;
    border-radius: 8px;
    /* border:1px solid hsla(var(--base-h), var(--base-s), var(--base-l), 1); */
    border:1px solid transparent;
    height:auto;
    z-index:500; /* Fixes in excalidraw */
}

.view-header:hover,
.view-header:focus-within {
    border:1px solid var(--divider-color);
    box-shadow: -2px 2px 6px -2px var(--divider-color);
    background-color: var(--background-primary) !important;
}

/* Show/hide nav + breadcrumb interaction */
.view-header-nav-buttons,
.view-header-title-container,
.view-header .cmdr-adder,
.view-header .clickable-icon:not(:last-child) {
    opacity:0;
    display:none;
}
.view-header:hover :is(.view-header-nav-buttons, .view-header-title-container),
.view-header:focus-within :is(.view-header-nav-buttons, .view-header-title-container),
.view-header:is(:hover) .clickable-icon:not(.view-header-icon){
    opacity:1;
    display:flex
}

/* Tweak commander '+' icon */
.view-header:hover .cmdr-adder,
.view-header:focus-within .cmdr-adder {
    opacity:0.4;
    display:flex;
}

/* Excalidraw fix */
[data-type="excalidraw"] .view-header .clickable-icon:not(:last-of-type){
    display:none;
    opacity:0;
}
[data-type="excalidraw"] .view-header:hover .clickable-icon:not(.view-header-icon) {
    display:flex;
    opacity:1;
}
```
---
uid: 20230616135008
title: Obsidian 样式 - 标题栏样式美化
tags: [Obsidian, css, 标题栏, 美化, 样式]
description: Obsidian标题栏样式美化
author: cuman
type: other
draft: false
editable: false
modified: 20230616145408
---

# Obsidian 样式 - 标题栏样式美化

## 概述

Obsidian 默认的标题栏会占用一部分屏幕空间，对笔记本用户来说，希望标题栏保留功能的同时尽可能不占用空间。

### 悬浮标题栏样式 (显示阅读图标)

应用片段的效果如图，可以看到默认的标题栏移到了左侧并处于悬浮状态。

![56.gif](https://cdn.pkmer.cn/images/202306161424323.gif!pkmer)

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
    right: calc(var(--scrollbar-size) + 2px);
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

### 悬浮标题栏样式 (隐藏阅读图标)

应用片段的效果如图，可以看到默认的标题栏移到了左侧并处于悬浮状态。

![57.gif](https://cdn.pkmer.cn/images/202306161427074.gif!pkmer)

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
    right: calc(var(--scrollbar-size) + 2px);
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

## 标题栏置于页面底部

应用片段的效果如图，可以看到默认的标题栏移到了底部，状态栏移到了侧面。

![59.gif](https://cdn.pkmer.cn/images/202306161453174.gif!pkmer)

```css
/*
    Tab Headder on bottom
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/

.view-header {
    position: fixed;
    bottom:0;
    width: 100%;
    background:var(--background-primary) !important;
    border-top: 1px solid var(--divider-color) !important;
}

/* vertical status bar when right sidedock is closed */
:has(.mod-right-split.is-sidedock-collapsed) .status-bar {
    transform: translate(3px, calc(var(--header-height) * -1));
    width: var(--header-height);
    flex-direction: column !important;
    background-color: transparent;
}

:has(.mod-right-split.is-sidedock-collapsed) .status-bar-item {
    display: inline-block;
    text-align: center;
    margin-right: 10px !important
}

:has(.mod-right-split.is-sidedock-collapsed) .status-bar .day-planner-progress-bar {
    display:none !important
}

:has(.mod-right-split.is-sidedock-collapsed) .status-bar .day-planner-status-bar-text {
    margin-right:20px !important;
    display: none;
}
```
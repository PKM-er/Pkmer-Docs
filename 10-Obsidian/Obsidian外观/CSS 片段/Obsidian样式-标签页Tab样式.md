---
uid: 20230616135007
title: Obsidian 样式 - 标签页 Tab 样式
tags: [Obsidian, css, 标签页, 美化, 样式]
description: Obsidian标签页美化，tab页美化
author: cuman
type: other
draft: false
editable: false
modified: 20230616143919
---

# Obsidian 样式 - 标签页 Tab 样式

## 概述

自从 Obsidian 实现了标签页后，美观度有一定的提升，标签页越来越像浏览器了，本文就是对标签页进行美化。

### 按钮标签页样式

应用片段的效果如图，可以看到默认的标签页变成了按钮样式。

![56.gif](https://cdn.pkmer.cn/images/202306161356176.gif!pkmer)

```css
/*
    Commpact Tabs
    Cleaner, smaller tabs with hidden buttons
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/

.workspace .mod-root .workspace-tab-header-container-inner {
    padding:0px 0 0px 5px;
    margin: 5px 0 2px -2px;
}
.workspace .mod-root .workspace-tab-header.is-active {
    background: none;
    box-shadow: none;
}
.workspace .mod-root .workspace-tab-header.is-active::before, 
.workspace .mod-root .workspace-tab-header.is-active::after {
    display:none;
}

.workspace .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner {
    background: var(--background-modifier-hover);
}

/* Hide tab separator bar */
.workspace .mod-root .workspace-tab-header-inner::after {
    display:none;
}

/* Hide buttons until hover */
.workspace .mod-root .workspace-tab-header:not(.is-active) .workspace-tab-header-inner-close-button,
.workspace .mod-root .workspace-tab-header:not(.is-active) .workspace-tab-header-status-icon {
    opacity:0;
}
.workspace .mod-root .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button,
.workspace .mod-root .workspace-tab-header:not(.is-active):hover .workspace-tab-header-status-icon {
    opacity:1;
}

/* Less prominent pinned icon */
.workspace .mod-root .workspace-tab-header.is-active .workspace-tab-header-status-icon {
    opacity:0.6 !important;
}


/* Fade graphic to make hover close button look less harsh */
.workspace .mod-root .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button::before {
    content:'';
    display:block;
    position:absolute;
    background:linear-gradient(to right, transparent, var(--bg2)) !important;
    right:100%;
    height:1em;
    width: 1em;
    pointer-events:none;
}

/* Smaller buttons */
.workspace .mod-root .workspace-tab-header-inner-close-button,
.workspace .mod-root .workspace-tab-header-status-icon {
    transform:scale(0.9) translate(2px,1px);
    transform-origin:center;
}

/* Smaller new tab button */
.workspace .mod-root  .workspace-tab-header-new-tab {
    margin-left:4px;
}
.workspace .mod-root .workspace-tab-header-new-tab .clickable-icon {
    transform:scale(0.8) translate(0,1px);
}

.workspace .mod-root .workspace-tab-header {
    /* width:auto;
    flex: none;
    flex-shrink: 1;
    max-width:25% */
}
```

### 下划线标签页样式

应用片段的效果如图，可以看到默认的标签页变成了下划线样式。

![58.gif](https://cdn.pkmer.cn/images/202306161437636.gif!pkmer)

```css
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header {
  background-color: transparent;
  box-shadow: none;
}
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::before,
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::after {
  display: none;
}
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active {
  border-radius: 0;
  border-bottom: 2px solid var(--text-accent);
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active .workspace-tab-header-inner {
  border-radius: var(--tab-radius) var(--tab-radius) 0px 0px;
  margin-top: 0.5px;
  padding-bottom: 4px;
}
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header ::after {
  display: none;
}
.workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header:hover .workspace-tab-header-inner {
  background-color: var(--background-modifier-hover);
}

```
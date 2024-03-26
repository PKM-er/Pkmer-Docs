---
uid: 20240323141728
title: Obsidian 样式 - 隐藏右侧标签页标题
tags:
  - obsidian
  - css
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240323141728
---

# Obsidian 样式 - 隐藏右侧标签页标题

在 obsidian 中，我们可以通过拖拽标签页移动页面，可以将页面置于左侧、右侧以及中间的上下侧等。当我们把页面置于两边时，如果你觉得标签页的标签独自占了一整行，那么你可以使用下面的 css 隐藏，且在鼠标放上去时再显示

效果

![collapsible-header.gif](https://cdn.pkmer.cn/images/collapsible-header.gif!pkmer)

## CSS 代码

该 css 来自：[obsidian-minimal-theme-css-snippets/[ui] Collapsible Right Headers.css at main · replete/obsidian-minimal-theme-css-snippets (github.com)](https://github.com/replete/obsidian-minimal-theme-css-snippets/blob/main/%5Bui%5D%20Collapsible%20Right%20Headers.css)

```css
/*
    Collapsible Right Headers
    Save some space in the right headers
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/

/* header container on right */
.mod-right-split .workspace-tabs + .workspace-tabs .workspace-tab-header-container {
    background:
        repeating-linear-gradient(
            135deg, 
            var(--background-modifier-border) 0px, 
            transparent 1px,
            transparent 10px,
            var(--background-modifier-border) 11px, 
            transparent 11px
        ) !important;
    height:8px;
    transition:.2s all ease-in;
    border-bottom-color:transparent;
}
.mod-right-split .workspace-tabs + .workspace-tabs .workspace-tab-header-container::before {
    content:'';
    background:linear-gradient(to top, var(--background-primary), transparent);
    display:block;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    top: 0;
}


.mod-right-split .workspace-tabs + .workspace-tabs .workspace-tab-header-container:hover,
.mod-right-split .workspace-tabs + .workspace-tabs .workspace-tab-header-container:focus-within,
body.is-grabbing .mod-right-split .workspace-tabs + .workspace-tabs .workspace-tab-header-container {
    /* is-grabbing visibility is to make dragging panels around usable */
    height:var(--header-height);
    background:var(--background-primary) !important;
}
```

标签页隐藏的时候，背景会有斜线，如果不喜欢可以将上面代码中的两个 background 注释掉（或者删除）即可。
---
uid: 20241218145625
title: Obsidian 插件样式 -MySnippets 的多栏布局
tags: [CSS自定义, 插件样式]
description: 用于定义 MySnippet 插件的状态栏菜单及其内部滚动菜单，并提供一个流畅的列布局，同时确保菜单在屏幕上有一个合理的最大高度和最小宽度。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241218145833
---

# Obsidian 插件样式 -MySnippets 的多栏布局

![241218_Obsidian插件样式：MySnippets的多栏布局.md](https://cdn.pkmer.cn/images/202412181456363.png!pkmer)

用于定义 MySnippet 插件的状态栏菜单及其内部滚动菜单，并提供一个流畅的列布局，同时确保菜单在屏幕上有一个合理的最大高度和最小宽度。

```css
/* ! 插件：MySnippet */
.MySnippets-statusbar-menu {
  min-width: 50vw !important;
  max-height: 80vh !important;
  .menu-scroll {
    display: block !important;
    column-width: 320px;
    width: 100%;
    height: 100%;
  }

}
```

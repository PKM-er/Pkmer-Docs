---
uid: 20231014145217
title: Obsidian 样式：简单更改 Excalidraw 工具栏布局
tags: []
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231014145608
---

# Obsidian 样式：简单更改 Excalidraw 工具栏布局

![[Pasted image 20231014145356.png]]

简单改了一下 Excalidraw 布局，优化了一下工具栏的布局摆放。首先，调整 Library 面板的位置，以免遮挡侧边的工具栏。其次，增大 Excalidraw 画板上的图标大小，方便查看或触控屏操作。图形选择工具栏设置了 2 种不同的摆放，**布局一是为了方便 Library 的停靠**，**布局二是方便触控屏或者平板使用时切换图形选择工具**。根据需要，可以进一步调整图标大小和布局。

## 布局一：方便 Library 固定

![[Pasted image 20231014143146.png]]

```css
/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container {
  width: 80px; /* 设置宽度为80像素 */
  position: fixed !important; /* 设置定位为固定定位 */
  top: auto !important;
  left: 10px;
  border-radius: 10px; /* 添加10像素的圆角 */
}

.excalidraw .mobile-misc-tools-container .default-sidebar-trigger,
.excalidraw .App-toolbar-container .ToolIcon__icon {
  width: 80px !important;
  height: 50px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

.excalidraw .mobile-misc-tools-container .ToolIcon__icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0;
  margin: 5px; /* 添加10像素的间距 */
}

/* 设置Excalidraw中的SVG向量大小 */
/* 侧边栏大小 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger svg,
.excalidraw .mobile-misc-tools-container .ToolIcon__icon svg {
  width: 40px !important; /* 设置宽度为40像素 */
  height: 40px !important; /* 设置高度为40像素 */
}

/* 脚本工具栏 */
.Island.App-menu__left.scrollbar svg {
  width: 25px !important; /* 设置宽度为25像素 */
  height: 25px !important; /* 设置高度为25像素 */
}

/* ====美化脚本工具栏==== */
.Island.App-menu__left.scrollbar {
  overflow-y: auto;
  box-sizing: border-box;
  max-height: 1000px !important;
  position: absolute;
}

/* ====美化顶部的快捷工具栏==== */

.excalidraw .dropdown-menu-button svg,
.excalidraw section .Island .ToolIcon__icon svg {
  width: 30px !important; /* 设置宽度为30像素 */
  height: 30px !important; /* 设置高度为30像素 */
}

.excalidraw section .Island .ToolIcon__icon {
  width: 80px !important;
  height: 50px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

/* ====美化菜单栏==== */

.excalidraw .App-bottom-bar > .Island {
  transform: translateX(80px);
}

```

## 布局二：方便手写点击

![[Pasted image 20231014143448.png]]

```css
/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container {
  width: 80px; /* 设置宽度为80像素 */
  position: fixed !important; /* 设置定位为固定定位 */
  top: auto !important;
  left: 10px;
  border-radius: 10px; /* 添加10像素的圆角 */
}

/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger,
.excalidraw .App-toolbar-container .ToolIcon__icon {
  width: 80px !important;
  height: 50px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

.excalidraw .mobile-misc-tools-container .ToolIcon__icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0;
  margin: 5px; /* 添加5像素的间距 */
}

/* 设置Excalidraw中的SVG向量大小 */
/* 侧边栏大小 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger svg,
.excalidraw .mobile-misc-tools-container .ToolIcon__icon svg {
  width: 40px !important; /* 设置宽度为40像素 */
  height: 40px !important; /* 设置高度为40像素 */
}

/* 脚本工具栏 */
.Island.App-menu__left.scrollbar svg {
  width: 25px !important; /* 设置宽度为20像素 */
  height: 25px !important; /* 设置高度为20像素 */
}

/* ====美化脚本工具栏==== */
.Island.App-menu__left.scrollbar {
  overflow-y: auto;
  box-sizing: border-box;
  max-height: 1000px !important;
  position: absolute;
}

/* ====美化顶部的快捷工具栏==== */

/* 转置一下 */
.excalidraw section .Island .Stack_horizontal {
  position: fixed;
  transform: rotate(90deg);
  top: 50%;
  right: -230px;
}

.excalidraw section .Island svg {
  transform: rotate(-90deg);
}
/* 把Frame下来菜单转回来 */
.excalidraw .App-toolbar__extra-tools-dropdown {
  transform: rotate(-90deg);
}

.excalidraw section .Island .ToolIcon__icon svg {
  width: 30px !important; /* 设置宽度为30像素 */
  height: 30px !important; /* 设置高度为30像素 */
}

.excalidraw section .Island .Stack_horizontal svg {
  transform: rotate(-90deg);
}
.excalidraw .dropdown-menu-button svg {
  width: 30px !important; /* 设置宽度为30像素 */
  height: 30px !important; /* 设置高度为30像素 */
}

.excalidraw .dropdown-menu .Stack_horizontal {
  transform: rotate(-90deg);
}

.excalidraw section .Island .ToolIcon__icon {
  width: 50px !important;
  height: 80px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

/* ====美化菜单栏==== */

.excalidraw .App-bottom-bar > .Island {
  transform: translateX(80px);
}

```

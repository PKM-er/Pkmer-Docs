---
uid: 20231014145217
title: Obsidian 样式 - 简单更改 Excalidraw 工具栏布局
tags: [Obsidian, css, 演示, Excalidraw, 工具栏]
description: Obsidian 样式 - 简单更改 Excalidraw 工具栏布局
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240122222556
---

# Obsidian 样式 - 简单更改 Excalidraw 工具栏布局

![Obsidian 样式 - 简单更改 Excalidraw 工具栏布局](https://cdn.pkmer.cn/images/202310202131648.png!pkmer)

简单改了一下 Excalidraw 布局，优化了一下工具栏的布局摆放。首先，调整 Library 面板的位置，以免遮挡侧边的工具栏。其次，增大 Excalidraw 画板上的图标大小，方便查看或触控屏操作。图形选择工具栏设置了 2 种不同的摆放，**布局一是为了方便 Library 的停靠**，**布局二是方便触控屏或者平板使用时切换图形选择工具**。根据需要，可以进一步调整图标大小和布局。

## 布局一：方便 Library 固定

![Obsidian 样式 - 简单更改 Excalidraw 工具栏布局](https://cdn.pkmer.cn/images/202310202134659.png!pkmer)

```css
/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container {
  width: 60px; /* 设置宽度为80像素 */
  position: fixed !important; /* 设置定位为固定定位 */
  top: auto;
  left: 10px;
  /* right: 10px !important; */
  border-radius: 10px; /* 添加10像素的圆角 */
}
/* 2023-12-23_16:45:33 隐藏Library按钮 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger {
  display: none;
}

.excalidraw .App-toolbar-container .ToolIcon__icon {
  width: 60px !important;
  height: 40px !important;
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
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

/* 2023-12-23_04:09:20 添加悬浮效果 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger svg:hover,
.excalidraw .mobile-misc-tools-container .ToolIcon__icon svg:hover {
  width: 40px !important; /* 设置宽度为20像素 */
  height: 50px !important; /* 设置高度为20像素 */
}

/* 脚本工具栏 */
.Island.App-menu__left.scrollbar svg {
  width: 25px !important; /* 设置宽度为20像素 */
  height: 25px !important; /* 设置高度为20像素 */
}

/* ====美化脚本工具栏==== */
/* .excalidraw .App-menu__left, */
.Island.App-menu__left.scrollbar {
  overflow-y: auto;
  box-sizing: border-box;
  max-height: 800px !important;
  position: absolute;
}

/* ====美化顶部的快捷工具栏==== */

.excalidraw .dropdown-menu-button svg,
.excalidraw section .Island .ToolIcon__icon svg {
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

.excalidraw section .Island .ToolIcon__icon {
  width: 60px !important;
  height: 50px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

/* ====美化菜单栏==== */

.excalidraw .App-bottom-bar > .Island {
  position: absolute;
  right: 0px;
  /* transform: translateX(80px); */
}

/* 优化link的提示 */
.excalidraw-hyperlinkContainer {
  background-color: rgb(244, 253, 190) !important;
}
```

### 自动隐藏工具栏

因为我一般采用快捷键的形式，所以工具栏部分用的很少，参考 [[Obsidian样式-Excalidraw自动隐藏工具栏的CSS]]，对该布局进行优化，只会自动隐藏工具栏。

![Obsidian 样式 - 简单更改 Excalidraw 工具栏布局](https://cdn.pkmer.cn/images/202401222226399.gif!pkmer)


```css
/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container {
  width: 60px; /* 设置宽度为80像素 */
  position: fixed !important; /* 设置定位为固定定位 */
  top: auto;
  left: 10px;
  /* right: 10px !important; */
  border-radius: 10px; /* 添加10像素的圆角 */
}
/* 2023-12-23_16:45:33 隐藏Library按钮 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger {
  display: none;
}

.excalidraw .App-toolbar-container .ToolIcon__icon {
  width: 60px !important;
  height: 40px !important;
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
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

/* 2023-12-23_04:09:20 添加悬浮效果 */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger svg:hover,
.excalidraw .mobile-misc-tools-container .ToolIcon__icon svg:hover {
  width: 40px !important; /* 设置宽度为20像素 */
  height: 50px !important; /* 设置高度为20像素 */
}

/* 脚本工具栏 */
.Island.App-menu__left.scrollbar svg {
  width: 25px !important; /* 设置宽度为20像素 */
  height: 25px !important; /* 设置高度为20像素 */
}

/* ====美化脚本工具栏==== */
/* .excalidraw .App-menu__left, */
.Island.App-menu__left.scrollbar {
  overflow-y: auto;
  box-sizing: border-box;
  max-height: 800px !important;
  position: absolute;
}

/* ====美化顶部的快捷工具栏==== */

.excalidraw .dropdown-menu-button svg,
.excalidraw section .Island .ToolIcon__icon svg {
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

.excalidraw section .Island .ToolIcon__icon {
  width: 60px !important;
  height: 50px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

/* ====美化菜单栏==== */

.excalidraw .App-bottom-bar > .Island {
  position: absolute;
  right: 0px;
  /* transform: translateX(80px); */
}

/* 优化link的提示 */
.excalidraw-hyperlinkContainer {
  background-color: rgb(244, 253, 190) !important;
}


/* 2023-12-14 https://forum-zh.obsidian.md/t/topic/26848/2 自动隐藏工具栏*/
.excalidraw .Island.App-toolbar
/* .excalidraw .mobile-misc-tools-container */
/* .excalidraw .App-bottom-bar  */
{
  opacity: 0;
  transition: opacity 0.3s ease-out 0.2s;
}
.excalidraw .Island.App-toolbar:hover,
.excalidraw .mobile-misc-tools-container:hover,
.excalidraw .App-bottom-bar:hover {
  opacity: 1;
}
```

## 布局二：方便手写点击

![Pasted image 20231014143448](https://cdn.pkmer.cn/images/202310202131277.png!pkmer)

```css

/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container {
  width: 60px; /* 设置宽度为80像素 */
  position: fixed !important; /* 设置定位为固定定位 */
  top: auto !important;
  left: 10px;
  border-radius: 10px; /* 添加10像素的圆角 */
}

/* ====侧边栏的容器修改==== */
.excalidraw .mobile-misc-tools-container .default-sidebar-trigger,
.excalidraw .App-toolbar-container .ToolIcon__icon {
  width: 60px !important;
  height: 40px !important;
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
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

/* 脚本工具栏 */
.Island.App-menu__left.scrollbar svg {
  width: 25px !important; /* 设置宽度为20像素 */
  height: 25px !important; /* 设置高度为20像素 */
}

/* ====美化脚本工具栏==== */
/* .excalidraw .App-menu__left, */
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
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

.excalidraw section .Island .Stack_horizontal svg {
  transform: rotate(-90deg);
}
.excalidraw .dropdown-menu-button svg {
  width: 30px !important; /* 设置宽度为20像素 */
  height: 30px !important; /* 设置高度为20像素 */
}

.excalidraw .dropdown-menu .Stack_horizontal {
  transform: rotate(-90deg);
}

.excalidraw section .Island .ToolIcon__icon {
  width: 50px !important;
  height: 60px !important;
  border: 1px solid rgb(2, 2, 2); /* 添加1像素宽的黑色实线边框 */
  border-radius: 10% !important; /* 添加10像素的圆角 */
}

/* ====美化菜单栏==== */

.excalidraw .App-bottom-bar > .Island {
  transform: translateX(80px);
}

```

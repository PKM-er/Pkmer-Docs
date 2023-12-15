---
uid: 20231215150838
title: Obsidian 样式 -Excalidraw 自动隐藏工具栏的 CSS
tags:
  - Excalidraw
  - CSS美化
description: 自动隐藏Excalidraw的工具
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231215151231
---

# Obsidian 样式 -Excalidraw 自动隐藏工具栏的 CSS

该片段来源于 Obsidian 中文社区的 **简悟** 用户分享，CSS 片段原地址：

> [求自动隐藏Excalidraw工具栏的css，作者表示有相关css很愿意将其加入插件中 - 开发讨论 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/26848/6)

## 效果演示

![](https://cdn.pkmer.cn/images/202312151510987.gif!pkmer)

## CSS 片段

```css
/* 2023-12-14 https://forum-zh.obsidian.md/t/topic/26848/2 自动隐藏工具栏*/
.excalidraw .Island.App-toolbar,
.excalidraw .mobile-misc-tools-container,
.excalidraw .App-bottom-bar
{
    opacity: 0;
    transition: opacity 0.3s ease-out .2s;
}
.excalidraw .Island.App-toolbar:hover,
.excalidraw .mobile-misc-tools-container:hover,
.excalidraw .App-bottom-bar:hover
{
    opacity: 1;
}
```

## 拓展联用

- [[Obsidian样式-简单更改Excalidraw工具栏布局]]
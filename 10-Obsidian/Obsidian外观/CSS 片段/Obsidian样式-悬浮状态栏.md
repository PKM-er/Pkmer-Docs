---
uid: 20230826162901
title: Obsidian 样式：将状态栏变为悬浮
tags: []
description: Obsidian 样式：将状态栏变为悬浮
author: ProudBenzene
type: other
draft: false
editable: false
modified: 202309181400005954
---

# Obsidian 样式：将状态栏变为悬浮

## 概述

(来自主题 AnuPpuccin)

开启片段后，状态栏平时处于*隐藏状态*，只有当**鼠标伸到原状态栏的位置**，才会使状态栏出现。

## 效果图示

![iShot_2023-08-26_16.37.22](https://cdn.pkmer.cn/images/202309010031806.gif)

## 下载链接

[AnuPpuccin/snippets/floating-status-bar.css](https://github.com/AnubisNekhet/AnuPpuccin/blob/main/snippets/floating-status-bar.css)

```css
/* AGPLv3 License
Floating Status Bar
Author: AnubisNekhet
Note: If you decide to implement it in your theme or redistribute it, please keep this comment (Especially for *certain* individuals who may try to rebrand it as their own :))
Support me: https://buymeacoffee.com/AnubisNekhet
*/
body {
  --status-bar-position: absolute;
  --status-bar-radius: var(--radius-m);
}
body .status-bar {
  transform: translateX(calc(100% + 5px));
  transition: transform 300ms 150ms;
  bottom: 5px;
  right: 5px;
}
body .status-bar::before {
  width: 100%;
  min-height: 100%;
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
}
body .status-bar:hover {
  transform: none;
  transition: transform 300ms 150ms;
}
```
---
uid: 20230712220937
title: 通过 css 在移动端右下角添加源码和阅读转换按钮
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20230712223354
---

# 通过 css 在移动端右下角添加源码和阅读转换按钮

## 效果

来自 [things主题](https://github.com/colineckert/obsidian-things)，右下角添加按钮，点击即可切换源码模式和阅读模式

![[QQ图片20230712223334.gif]]co

## CSS 片段

```css
/* --------------------- */
/* Mobile toolbar button */
/* --------------------- */

body.is-mobile:not(.floating-button-off):not(.advanced-toolbar)
  .view-action:nth-last-of-type(2),
body.is-mobile:not(.floating-button-off):not(.advanced-toolbar)
  .view-action:nth-last-of-type(2) {
  color: white;
  background-color: var(--color-accent);
  opacity: 1;
  top: calc(90vh - 110px);
  display: flex;
  padding: 5px;
  position: fixed;
  left: 86vw;
  transform: translate(-40%, 5%);
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  border-radius: 50% !important;
  box-shadow: 1.1px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    2.7px 0.7px 5.3px rgba(0, 0, 0, 0.028), 5px 1.3px 10px rgba(0, 0, 0, 0.035),
    8.9px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    16.7px 4.2px 33.4px rgba(0, 0, 0, 0.05), 40px 10px 80px rgba(0, 0, 0, 0.07);
}

body.is-mobile:not(.floating-button-off).advanced-toolbar
  .view-action:nth-last-of-type(2),
body.is-mobile:not(.floating-button-off).advanced-toolbar
  .view-action:nth-last-of-type(2) {
  color: white;
  background-color: var(--color-accent);
  opacity: 1;
  position: fixed;
  top: calc(100vh - 138px);
  display: flex;
  padding: 5px;
  left: 86vw;
  transform: translate(-40%, -115%);
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  border-radius: 50% !important;
  box-shadow: 1.1px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    2.7px 0.7px 5.3px rgba(0, 0, 0, 0.028), 5px 1.3px 10px rgba(0, 0, 0, 0.035),
    8.9px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    16.7px 4.2px 33.4px rgba(0, 0, 0, 0.05), 40px 10px 80px rgba(0, 0, 0, 0.07);
}


/* ─────────────────────────────────────────────────── */
/* Styles Settings */
/* ─────────────────────────────────────────────────── */

/* @settings
name: Things Theme
id: things-style
settings:
    -
        title: Disable mobile floating-action button
        description: Revert placement of edit/preview button to default in header (mobile)
        id: floating-button-off
        type: class-toggle
        default: false
```

## 代码解释

`not(.floating-button-off)` 是 style settings 的设置

`not(.advanced-toolbar)` 是为了适配 [advanced-toolbar插件](https://github.com/phibr0/obsidian-advanced-toolbar)

`top: calc(90vh - 110px);` 改这里的 110px 可以调整图标位置，越小越低

`background-color: var(--blue);` 这里的颜色原主题 `var(--blue)` 是主题定义的一个颜色定值，我改成了默认主题色 `var(--color-accent)`
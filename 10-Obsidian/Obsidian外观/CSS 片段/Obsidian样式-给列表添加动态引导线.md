---
uid: 20230803110853
title: Obsidian样式-给列表添加动态引导线
tags: [样式, 列表]
description: 仿照logseq的Bullet Threading插件的动态引导线
author: calmwaves
type: other
draft: false
editable: false
modified: 20230808092029
---

# Obsidian 样式 - 给列表添加动态引导线

## 效果

![guideline](https://cdn.pkmer.cn/images/202308080918309.gif)

## css 片段

```css
/* 无序列表有序列表仿logseq大纲引导线 */
body {
  --outline-guideline-width: var(--size-2-1);
  --outline-guideline-color: var(--color-accent);
  --outline-item-height: calc(var(--nav-item-size) * 1.8);
}
li {
  position: relative;
}
li:hover > ul > li:has(~li:hover)::before,
li:hover > ol > li:has(~li:hover)::before {
  content: "";
  width: var(--outline-guideline-width);
  position: absolute;
  background-color: var(--outline-guideline-color);
  top: calc(var(--outline-item-height) / 2 * -1);
  left: calc(-2px - 2em - var(--size-4-4));
  height: calc(100% - var(--outline-item-height) + var(--size-4-8) + 2px);
}

li:hover > ul > li:hover::before,
li:hover > ol > li:hover::before {
  content: "";
  position: absolute;
  top: calc(var(--outline-item-height) / 2 * -1);
  left: calc(-2px - 2em - var(--size-4-4));
  bottom: calc(100% - (var(--outline-item-height) + var(--size-4-2)) / 2 + 1px);
  width: calc(1em + var(--size-4-4) - 2px);
  border-bottom-left-radius: var(--radius-m);
  border-bottom: var(--outline-guideline-width) solid var(--outline-guideline-color);
  border-left: var(--outline-guideline-width) solid var(--outline-guideline-color);
}
```

## 代码解释

引导线颜色基于 主题色（AccentColor） 的高亮
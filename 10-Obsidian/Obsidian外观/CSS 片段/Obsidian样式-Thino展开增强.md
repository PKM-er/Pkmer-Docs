---
uid: 20240323140402
title: Obsidian 样式 -Thino 展开增强
tags: [obsidian, thino]
description: Obsidian 样式 -Thino 展开增强
author: Huajin
type: other
draft: false
editable: false
modified: 20240429001242
---

# Obsidian 样式 -Thino 展开增强

Thino 专业版开启了 『在列表模式中展示日期标记』后，在列表模式中会出现日期标记，并且点击后可以折叠（Cmd + 点击还可以单独展示当天所有 thino）。添加一个折叠后展开的视觉优化

![PixPin_2024-03-23_14-06-30.gif](https://cdn.pkmer.cn/images/PixPin_2024-03-23_14-06-30.gif!pkmer)

## 代码

> css 代码使用方法见：[[Obsidian的CSS代码片段]]

```css
/* 展开增强 */
.memo-wrapper {
  max-height: 200px;
  /* transition: max-height 0.25s, opacity 0.25s, padding 0.25s, transform 0.5s; */
  animation: collapse .2s cubic-bezier(0.12, 0.62, 0.46, 0.98);
}

@keyframes collapse {
  0% {
    /* opacity: 0; */
    max-height: 0;
  }
  100% {
    /* opacity: 1; */
    max-height: 200px;
  }
}
```
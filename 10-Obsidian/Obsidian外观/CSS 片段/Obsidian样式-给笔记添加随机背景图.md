---
uid: 20230701232313
title: Obsidian 样式：给笔记添加随机背景图
tags: [Obsidian, 样式, 美化, 随机背景图, 动态背景图]
description: Obsidian 样式：给笔记添加随机背景图
author: OS
type: other
draft: false
editable: false
modified: 20230701233139
---

# Obsidian 样式：给笔记添加随机背景图

## 引言

Obsidian 自从 1.0 后统一很多 UI 元素，使得整体界面，开始像简约化买进。但是笔记折腾久了，或者说为了缓解我们记录笔记，管理知识的压力。关于知识管理的压力我们也在其他内容中提到过比如这里 [[构建第二大脑-入门指南]]

有时候需要一点不一样的色彩，比如更加个性化的笔记背景。

## 使用

- 使用特定的插件，比如 [[obsidian-dynamic-background]]
- 使用特定的主题搭配 [[obsidian-style-settings]] 插件，比如使用 3F 老师的 [Blue-TopazT主题](https://github.com/PKM-er/Blue-Topaz_Obsidian-css)，当然你也可以参考 Cuman 的 [Blue-topaz主题示例库](https://github.com/PKM-er/Blue-topaz-example)
- 或者直接使用下面的 CSS 片段，如何使用独立 CSS 片段可以参考 [[Obsidian的CSS代码片段]]

```CSS
body {
    --blur-depth: 0px;
    --blur-depth-cp: 10px;
    --saturate-4-bg: 1;
    --saturate-4-bg-cp: 1;
    --brightness-4-bg: 0.01;
    --brightness-4-bg-cp: 0.01;
    --opacity-cp: 0.5;
    --darktheme-background-image: url(https://source.unsplash.com/random?);
    --lighttheme-background-image: url(https://source.unsplash.com/random?);    
}
body.theme-dark {
    background-image: var(--darktheme-background-image);
    background-size: cover;
    z-index: -1;
}
body.theme-light {
    background-image: var(--lighttheme-background-image);
    background-size: cover;
    z-index: -1;
}
.theme-light .workspace::before,
.theme-dark .workspace::before {
    background-size: cover;
    filter: blur(var(--blur-depth)) brightness(var(--brightness-4-bg)) saturate(var(--saturate-4-bg));
}
:is(.theme-light,.theme-dark) .workspace-tab-header-inner {
    background-color: transparent;
    filter: blur(var(--blur-depth)) brightness(var(--brightness-4-bg)) saturate(var(--saturate-4-bg));
}
/*编辑器*/
.theme-light .workspace-tabs .workspace-tab-container {
    opacity: 0.6;
    filter: blur(var(--blur-depth)+1) brightness(var(--brightness-4-bg)) saturate(var(--saturate-4-bg));
}
.theme-dark .workspace-tabs .workspace-tab-container {
    opacity: 0.6;
    filter: blur(var(--blur-depth)+1) brightness(var(--brightness-4-bg)) saturate(var(--saturate-4-bg));
}
/*面板*/
.theme-light .workspace-split.mod-left-split .workspace-tab-container {
    opacity: 7.999;
    z-index: 2;
}
.theme-dark .workspace-split.mod-left-split .workspace-tab-container {
    opacity: 0.999;
    z-index: 2;
}
.workspace-split.mod-right-split .workspace-tab-container {
    opacity: 0.999;
    background-color: transparent;
}
```
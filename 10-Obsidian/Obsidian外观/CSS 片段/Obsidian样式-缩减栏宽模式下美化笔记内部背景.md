---
uid: 20230815015735
title: Obsidian 样式：缩减栏宽模式下美化笔记内部背景
tags: [CSS美化, 内置图片]
description: 美化缩减栏宽模式下的笔记区的空白区域的背景，深浅模式下可以设置不同的网络图片
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230815020803
---

# Obsidian 样式：缩减栏宽模式下美化笔记内部背景

## 效果展示

![Pasted image 20230815020258](https://cdn.pkmer.cn/images/202308192319847.png!pkmer)

美化缩减栏宽模式下的笔记区的空白区域的背景，深浅模式下可以设置不同的网络图片，替换 CSS 片段中图片链接就行了。

> [!caution]+ 注意事项
> 改 CSS 片段可能会遮挡工作区的工具栏部分，可以适当修改 `top: 100px;` 的值来调整；
> - 在 border 主题下，top 改为 0 就可以了，即 `top: 0;`
> - 但是在其他主题下，会遮挡工具栏，需要改为 `top: 100px;`

## CSS 片段

```CSS
/* Obsidian缩减栏下的笔记背景 */
/* 浅色主题 */
.theme-light .view-content > .markdown-source-view.mod-cm6::after,
.theme-light .markdown-preview-view::after {
	content: "";
	position: absolute;
	background-image: url(https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png);
	/* background-repeat: repeat; */
	/* background-size: contain; */
  background-size:100% 100%;

  object-fit: cover;
  width: 100%;
  position: fixed;
  left: 0;
  top: 100px;
  height: 100vh;
  transform: scale(1.1);
  filter: blur(0px) contrast(1) saturate(0.5);
  opacity: 1 !important;
  z-index: 1;
  pointer-events: none;
  transition: all 0.7s !important;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(50% - calc(var(--file-line-width)/2 + 20px)),
    transparent calc(50% - var(--file-line-width)/2),
    transparent calc(50% + var(--file-line-width)/2),
    var(--background-primary) calc(50% + calc(var(--file-line-width)/2 + 20px)),
    var(--background-primary) 100%
    );
}

/* 深色主题 */
.theme-dark .view-content > .markdown-source-view.mod-cm6::after,
.theme-dark .markdown-preview-view::after {
	content: "";
	position: absolute;
	background-image: url(https://w.wallhaven.cc/full/j3/wallhaven-j3row5.jpg);
	/* background-repeat: repeat; */
	/* background-size: contain; */
  background-size:100% 100%;

  object-fit: cover;
  width: 100%;
  position: fixed;
  left: 0;
  top: 100px;
  height: 100vh;
  transform: scale(1.1);
  filter: blur(0px) contrast(1) saturate(0.5);
  opacity: 1 !important;
  z-index: 1;
  pointer-events: none;
  transition: all 0.7s !important;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(50% - calc(var(--file-line-width)/2 + 20px)),
    transparent calc(50% - var(--file-line-width)/2),
    transparent calc(50% + var(--file-line-width)/2),
    var(--background-primary) calc(50% + calc(var(--file-line-width)/2 + 20px)),
    var(--background-primary) 100%
    );
}

```

## 拓展 CSS：缩减笔记下方的空白大小

```css
/* 缩减笔记下方空白大小 */
.workspace-leaf-content[data-type="markdown"] :is(.markdown-preview-view,.markdown-rendered) .markdown-preview-sizer,
body:not(.plugin-cm-typewriter-scroll) .cm-s-obsidian .cm-content {
  padding-bottom: 20px !important;
}
```

用来减少笔记下方的空白区域的长度。

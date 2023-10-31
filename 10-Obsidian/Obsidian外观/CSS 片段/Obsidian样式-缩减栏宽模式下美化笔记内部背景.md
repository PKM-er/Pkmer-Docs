---
uid: 20230815015735
title: Obsidian 样式：缩减栏宽模式下美化笔记内部背景
tags: [CSS美化, 内置图片]
description: 美化缩减栏宽模式下的笔记区的空白区域的背景，深浅模式下可以设置不同的网络图片
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231029201909
---

# Obsidian 样式：缩减栏宽模式下美化笔记内部背景

## 效果展示

![图片33](https://cdn.pkmer.cn/images/%E5%9B%BE%E7%89%8733.png!pkmer)

## 打开缩减栏宽设置

在设置的编辑器中进行设置：

![Pasted image 20231022150312](https://cdn.pkmer.cn/images/Pasted%20image%2020231022150312.png!pkmer)

可以配合 Editor Width Slider 插件进行调整笔记实际大小的宽度。

## 可以在 Style Setting 插件进行更换壁纸

![Pasted image 20231022151213](https://cdn.pkmer.cn/images/Pasted%20image%2020231022151213.png!pkmer)

由于阅读和编辑模式的 css 有点不一致，在阅读模式下背景图片可能会遮挡工具栏，这时可通过调整 **阅读模式具体图片的高度** 的大小来进行一定的调整了。

> [!tip]+ 如何制作适合的壁纸
> 可以在 PPT 中设置图片摆放到两侧，适当修改一下，选择进行对称也行
> ![Pasted image 20231022150929](https://cdn.pkmer.cn/images/Pasted%20image%2020231022150929.png!pkmer)

## CSS 片段

```css
/* @settings
name: 缩减栏框下内部背景
id: background-under-frame
settings:
	-
		id: light-background-image
		title: 浅色模式的图片
		type: variable-text
		default: url(https://picshack.net/ib/HfNO0TPdTq.png)
	-
		id: dark-background-image
		title: 深色模式的图片
		type: variable-text
		default: url(https://picshack.net/ib/fBulilNYZ0.png)
	-
		id: top-tool-height
		title: 阅读模式距离图片的高度
		type: variable-text
		default: 38px
*/

body {
  /* --light-background-image: url(https://picshack.net/ib/WSGWY0jfYM.png); */
  --light-background-image: url(https://picshack.net/ib/HfNO0TPdTq.png);
  --dark-background-image: url(https://picshack.net/ib/fBulilNYZ0.png);
  --top-tool-height: 38px;
}
/* bsidian缩减栏下的笔记背景 */

/* 浅色主题 */

.theme-light .view-content > .markdown-source-view.mod-cm6::after {
  /* 设置背景属性 */
  content: "";
  position: fixed;
  background-image: var(--light-background-image);
  background-position: center center;
  background-attachment: fixed;

  /* 自动适应背景大小 */
  background-size: cover;

  /* 不重复背景 */
  background-repeat: no-repeat;
  /* 填充颜色 */
  background-color: var(--background-primary);

  /* 调整壁纸的大小 */
  height: 100%;
  width: 100%;

  /* 设置笔记遮挡属性 */
  left: 0;

  /* top: var(--mod-top-height); */
  transform: scale(1);

  /* 调整图片：模糊度、对比度、饱和度、亮度 */
  filter: blur(0px) contrast(1) saturate(1) brightness(1);
  opacity: 1;
  z-index: 1;
  pointer-events: none;
  transition: none;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(47% - calc(var(--file-line-width) / 2)),
    transparent calc(47% - var(--file-line-width) / 2),
    transparent calc(53% + var(--file-line-width) / 2),
    var(--background-primary) calc(53% + calc(var(--file-line-width) / 2)),
    var(--background-primary) 100%
  );
}

.theme-light .markdown-preview-view::after {
  /* 设置背景属性 */
  content: "";
  position: fixed;
  background-image: var(--light-background-image);
  background-position: center center;
  background-attachment: fixed;

  /* 自动适应背景大小 */
  background-size: cover;

  /* 不重复背景 */
  background-repeat: no-repeat;
  /* 填充颜色 */
  background-color: var(--background-primary);

  /* 调整壁纸的大小 */
  height: 100%;
  width: 100%;

  /* 设置笔记遮挡属性 */
  right: 0;
  top: var(--top-tool-height);

  /* top: var(--mod-top-height); */
  transform: scale(1);

  /* 调整图片：模糊度、对比度、饱和度、亮度 */
  filter: blur(0px) contrast(1) saturate(1) brightness(1);
  opacity: 1;
  z-index: 1;
  pointer-events: none;
  transition: none;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(47% - calc(var(--file-line-width) / 2)),
    transparent calc(47% - var(--file-line-width) / 2),
    transparent calc(53% + var(--file-line-width) / 2),
    var(--background-primary) calc(53% + calc(var(--file-line-width) / 2)),
    var(--background-primary) 100%
  );
}

/* 深色主题 */
.theme-dark .view-content > .markdown-source-view.mod-cm6::after {
  /* 设置背景属性 */
  content: "";
  position: fixed;
  background-image: var(--dark-background-image);
  background-position: center center;
  background-attachment: fixed;

  /* 自动适应背景大小 */
  background-size: cover;

  /* 不重复背景 */
  background-repeat: no-repeat;
  /* 填充颜色 */
  background-color: var(--background-primary);

  /* 调整壁纸的大小 */
  height: 100%;
  width: 100%;

  /* 设置笔记遮挡属性 */
  left: 0;

  /* top: var(--mod-top-height); */
  transform: scale(1);

  /* 调整图片：模糊度、对比度、饱和度、亮度 */
  filter: blur(0px) contrast(1) saturate(1) brightness(1);
  opacity: 1;
  z-index: 1;
  pointer-events: none;
  transition: none;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(47% - calc(var(--file-line-width) / 2)),
    transparent calc(47% - var(--file-line-width) / 2),
    transparent calc(53% + var(--file-line-width) / 2),
    var(--background-primary) calc(53% + calc(var(--file-line-width) / 2)),
    var(--background-primary) 100%
  );
}

.theme-dark .markdown-preview-view::after {
  /* 设置背景属性 */
  content: "";
  position: fixed;
  background-image: var(--dark-background-image);
  background-position: center center;
  background-attachment: fixed;

  /* 自动适应背景大小 */
  background-size: cover;

  /* 不重复背景 */
  background-repeat: no-repeat;
  /* 填充颜色 */
  background-color: var(--background-primary);

  /* 调整壁纸的大小 */
  height: 100%;
  width: 100%;

  /* 设置笔记遮挡属性 */
  left: 0;
  top: var(--top-tool-height);

  /* top: var(--mod-top-height); */
  transform: scale(1);

  /* 调整图片：模糊度、对比度、饱和度、亮度 */
  filter: blur(0px) contrast(1) saturate(1) brightness(1);
  opacity: 1;
  z-index: 1;
  pointer-events: none;
  transition: none;

  -webkit-mask: linear-gradient(
    to right,
    var(--background-primary) 0%,
    var(--background-primary) calc(47% - calc(var(--file-line-width) / 2)),
    transparent calc(47% - var(--file-line-width) / 2),
    transparent calc(53% + var(--file-line-width) / 2),
    var(--background-primary) calc(53% + calc(var(--file-line-width) / 2)),
    var(--background-primary) 100%
  );
}
```

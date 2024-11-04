---
uid: 20241029154601
title: Obsidian 样式 - 在 Obsidian 内实现网格背景
tags: [Obsidian, OB分享]
description: Obsidian 样式 - 在 Obsidian 内实现网格背景
author: Moy
type: other
draft: false
editable: false
modified: 20241102205440
---

# Obsidian 样式 - 在 Obsidian 内实现网格背景

> 来自 [[241029_阮一峰的文章摘录#纯 CSS 实现网格背景|纯 CSS 实现网格背景]]

## 效果图

![2a4cd31e429fafe0585565e2170e9079.png](https://cdn.pkmer.cn/images/2a4cd31e429fafe0585565e2170e9079.png!pkmer)

*渐变网格背景*

![68b2536ee412817becb09dceae4c376b.png](https://cdn.pkmer.cn/images/68b2536ee412817becb09dceae4c376b.png!pkmer)

*点阵背景*

## css 代码

```css
/* Moy-网格背景 */
/* 更新日期：2024.10.29 */
/* 用来显示两种样式的背景：网格 & 网点 */

/* 原始代码来自：https://spacexcode.com/blog/pure-css-grid-line/ */
/* 亦有参考：https://forum-zh.obsidian.md/t/topic/37076 */

/* ============================================================ */

/* 亮暗主题的不同配色 */
.theme-dark {
  --grid-line-color-1: #3d3d3f66;
  --grid-line-color-2: #74747440;
  --grid-dot-color: #c7c7c71f;
}

.theme-light {
  --grid-line-color-1: #c7c7c740;
  --grid-line-color-2: #afafaf40;
  --grid-dot-color: #c7c7c780;
}

/* 网格背景 */
/* .markdown-reading-view .markdown-rendered, .markdown-source-view.mod-cm6 .cm-scroller, */
.grid-bg {
  background-size: 20px 20px;
  background-position: center center;
  background-image: linear-gradient(to right, var(--grid-line-color-1) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line-color-2) 1px, transparent 1px);
  /* 增加四周的渐变蒙版 */
  -webkit-mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
  mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
  mask-composite: intersect;
  -webkit-mask-composite: source-in, xor;
}


/* 点阵背景 */
/* .markdown-reading-view .markdown-rendered, .markdown-source-view.mod-cm6 .cm-scroller, */
.grid-dot-bg {
  height: 100%;
  background-image: radial-gradient(circle, var(--grid-dot-color) 1px, var(--background-primary) 1px);
  background-size: 20px 20px;
  background-position: center center;
}

/* 避免 Hover Editor 里奇怪的异常表现 */
.popover .grid-bg {
  mask-image: none;
}


/* ============================================================ */

```

文件下载：

[Obsidian Grid Background （网格背景）](https://gist.github.com/Moyf/9942d3e0b44017dcc82fd79883219c27)

## 说明

### 如何应用

首先，把上述 css 文件放入自己笔记库的 CSS Snippets 文件夹。

然后，在任意笔记的属性里添加 `cssclasses: grid-bg` 即可应用网格背景。

同理，添加 `cssclasses: grid-dot-bg` 即可应用点阵背景。

![0c4c1a989f1dc1e96bb3c33c51c58d52.jpg](https://cdn.pkmer.cn/images/0c4c1a989f1dc1e96bb3c33c51c58d52.jpg!pkmer)

如果想要给**所有页面**都应用某个背景，取消 css 文件里对应样式下面这行的注释：

`/* .markdown-reading-view .markdown-rendered, .markdown-source-view.mod-cm6 .cm-scroller, */`

（即去掉前后的 `/* */` 符号）

### 个性化配置

这版网格背景增加了四周的渐变效果，更加美观：

![ddb39ae22324136d01b805933f69fffb.png](https://cdn.pkmer.cn/images/ddb39ae22324136d01b805933f69fffb.png!pkmer)

上图：有渐变过渡

下图：无渐变过渡

如果不需要渐变，把 css 里 `增加四周的渐变蒙版` 下面的 4 行注释掉即可。

如果想要更改颜色，修改对应 `.theme-dark` （暗色主题）或者 `.theme-light` （亮色主题）内的颜色变量即可。

网格和点阵的的尺寸可以修改 `--grid-size` 数值来进行调整。

## 参考链接

这个 css 主要来源于大佬的这篇文章：[用纯 CSS 实现网格背景 | 太空编程](https://spacexcode.com/blog/pure-css-grid-line/)

这里只是把它转成了 Obsidian 内可用的 css 文件，稍加调整。

对于网格生成的原理感兴趣的可以阅读原文。

另外，也有前任分享过类似的背景方案：[css分享: goodnotes同款点线纸笔记背景](https://forum-zh.obsidian.md/t/topic/37076)

在写 css 变量的时候亦有参考。

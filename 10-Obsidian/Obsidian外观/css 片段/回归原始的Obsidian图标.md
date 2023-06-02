---
uid: 20230602120857
title: 回归原始的 Obsidian 图标
tags: [Obsidian, LOGO, css, 图标]
description: Obsidian图标还原，还原旧版图标
author: cuman
type: other
draft: false
editable: false
modified: 20230602141956
---

# 回归原始的 Obsidian 图标

## 概述

![88.gif|433](https://cdn.pkmer.cn/images/202306021341855.gif!pkmer)

Obsidian 根据单词的字面意思 " 黑曜石，是一种常见的非晶质宝石、火山晶体 "，所以当打开 Obsidian 软件 自然会跟宝石联系到一起，原始的 Obsidian 的图标看起来就是宝石，之前很少有关于图标的讨论。当 Obsidian 1.3.5 启用了全新的图标 [[Obsidian全新LOGO更换]] 时，

一时间群里都是关于图标的讨论，因为跟原来的图标设计相比风格变化挺大的，于是就有了回归原始图标的想法。

Obsidian 的图标主要存在于软件内和应用程序中，其中软件内的 logo 可以通过 css 解决。应用程序的图标需要用修改器修改原始文件，本文暂不涉及。

软件内出现 logo 的地方一个是标题栏一个是 canvas 导出水印中。

## 标题栏

`设置--外观--窗口边框样式` 中如果选择 "Obsidian 风格 "

![image.png](https://cdn.pkmer.cn/images/202306021249720.png!pkmer)

就会出现新 logo

![55.gif](https://cdn.pkmer.cn/images/202306021305337.gif!pkmer)

使用下面片段即可还原为原始图标

![77.gif](https://cdn.pkmer.cn/images/202306021328156.gif!pkmer)

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/

.titlebar-button.mod-logo  svg
{
 display:none;
}
.titlebar-button.mod-logo:not(:hover)::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 display: inline-block;
 width: 18px;
 height: 18px;
}
body.theme-dark .titlebar-button.mod-logo:not(:hover)::before
{

 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');

}
.titlebar-button.mod-logo:hover
{
	background:transparent;
}
.titlebar-button.mod-logo:hover::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" class="logo-full"><defs><linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="%236c56cc"></stop><stop offset="1" stop-color="%239785e5"></stop></linearGradient></defs><polygon points="62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0" fill="%2334208c"></polygon><polygon points="81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39" fill="url(%23a)"></polygon><polygon points="81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39" fill="%23af9ff4"></polygon><polygon points="61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41" fill="%234a37a0"></polygon><polygon points="34.43,35.7 37.57,90.47 65.35,100 34.43,35.7" fill="%234a37a0"></polygon></svg>');display: inline-block;
 width: 18px;
 height: 18px;
}


```

## Canvas 水印图标

如果开启白板导出水印功能导出的白板是带有水印的。

![image.png|541](https://cdn.pkmer.cn/images/202306021332769.png!pkmer)

新版本 ob 导出的白板如下图所示

![canvas白板介绍_middle2.png|586](https://cdn.pkmer.cn/images/202306021335333.png!pkmer)

通过 css 修改后效果如下

![canvas白板介绍_middle.png|595](https://cdn.pkmer.cn/images/202306021335154.png!pkmer)

css 代码

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/

.canvas-watermark svg
{
  display:none;
}

.canvas-watermark::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 display: inline-block;
 width: 24px;
 height: 24px;
}

body.theme-dark .canvas-watermark::before
{
 
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 
}

```
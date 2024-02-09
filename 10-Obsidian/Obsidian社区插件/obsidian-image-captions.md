---
uid: 20231027162133
title: Obsidian Image Captions 给图片加个标题
tags: [obsidian, 图片, 标题, image, caption]
description: 在图片下方加个标题，也可以说为图片添加说明
author: Huajin
type: other
draft: false
editable: false
modified: 20231029224752
---

# Obsidian Image Captions 给图片加个标题

## 概述

我们平时阅读的书籍、文献&各种文档，其中都会包含诸多图片，而且在图片的旁边会有非常详细的说明文字（Caption），常用的编辑软件，如 Word、在线编辑工具中，也有类似的功能。

请注意：这个和我们介绍过的 [[obsidian-image-caption]] 不是同一个插件

> [!Note] 插件名片
> - 插件名称：Image Captions
> - 插件作者：Alan Grainger
> - 插件说明：为你笔记中的图片添加标题、说明
> - 插件项目地址：[点我跳转](https://github.com/alangrainger/obsidian-image-captions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-captions)

插件可以在图片添加一个标题，效果直接看图

![Obsidian Image Captions 给图片加个标题](https://cdn.pkmer.cn/images/Pasted%20image%2020231027163758.png!pkmer)

图片下方多的一行 “NLTK 官方文档” 就是这个插件的效果。（[图片来源](https://www.nltk.org/api/nltk.tokenize.api.html#nltk.tokenize.api.TokenizerI)）

## 优点与局限

- 该插件无需配置，开箱即用；
- 实时模式和阅读模式都可生效；
- 添加标题简单，无语法记忆负担；
- ==不支持外部图片，只对本地图片生效==；

## 使用方法

```
普通图片：![[image.png]]

加上标题：![[image.png|这里写标题]]

修改图片尺寸：![[image.png|标题|550]]

可以添加 markdown 语法：![[image.png|**加粗的标题**]]

使用图片文件名作为标题：
不包含后缀.png：![[image.png|%]]
包含后缀 .png：![[image|%.%]]

添加的标题中包含 "%"，在 "%" 前面加上 "\" ：![[image.png|\%]]
```

![Obsidian Image Captions 给图片加个标题](https://cdn.pkmer.cn/images/Pasted%20image%2020231027165345.png!pkmer)

## 自定义

可以通过修改 `.image-captions-caption` 自定义图像标题的样式，通过修改 `.image-captions-figure` 自定义图片的样式。

例如，插件默认的样式在图片和图片标题背后都有灰色的蒙版，而我只想要背景透明需要这个灰色的板子时，可以把背景的透明度调至 0

![Obsidian Image Captions 给图片加个标题](https://cdn.pkmer.cn/images/Pasted%20image%2020231027191356.png!pkmer)

```
.theme-dark .image-captions-figure,
.theme-dark .image-captions-caption {
  background: #30303000;
}

.theme-light .image-captions-figure,
.theme-light .image-captions-caption {
  background: #ebebeb00;
}
```

tips：16 进制颜色的第七第八位是颜色的透明度，等于 00 的时候全透明。

## 前世今生

早在两年前（2021-10-25），就有一个名为 [[obsidian-image-caption|image-caption]] 的插件实现了该插件的效果。可是这个插件有一个问题，只能在阅读模式才能渲染出结果。在 [[在Obsidian中为图片添加注释]] 中我们详细讲过这个插件的使用方法。作者说下一版会加入实时模式的渲染效果，可惜由于太忙一直没空更新。终于，有大佬出手，基于 image-caption 的概念开发了本插件 image-captions。这次插件可以在实时模式和阅读模式中都渲染出结果。可惜的是，插件有了新的局限性，对外部图片不生效。（下图来自插件仓库的 Readme.md）

![Obsidian Image Captions 给图片加个标题](https://cdn.pkmer.cn/images/Pasted%20image%2020231027185511.png!pkmer)

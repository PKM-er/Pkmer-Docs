---
uid: 20241009192404
title: Obsidian 插件：Pexels Banner 值得一试的头图插件
tags: ['banner', '笔记管理', '样式与美化', 'obsidian插件']
description: Obsidian 插件：Pexels Banner 值得一试的头图插件
author: AI
type: auto
draft: false
editable: false
modified: 20241219183501
---

# Obsidian 插件：Pexels Banner 值得一试的头图插件

## 概述

Obsidian 插件 "Pexels Banner" 允许用户使用 Pexels API 或直接 URL 自动将 Pexels 的图像应用为笔记的横幅，提升笔记的美观性和内容呈现。用户可以根据关键词自动获取 Pexels 的图片，也可以使用自定义图片的直接 URL。可自定义图片大小、方向，设置默认关键词。插件与 Obsidian 界面无缝集成，提供更好的笔记体验。用户只需在笔记中添加 `pexels-banner` 字段，即可自动获取并显示相关横幅图像。适用于让笔记更具视觉吸引力和整体美感的场景。

> [!Note] 插件名片
> - 插件名称：Pexels Banner
> - 插件作者：Justin Parker
> - 插件说明：将 Pexels 上的一幅图片应用为您的笔记的横幅。
> - 插件分类：[' 图片与 PDF', ' 笔记管理 ', ' 样式与美化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jparkerweb/pexels-banner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pexels-banner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jparkerweb/pexels-banner/main/README.md)

## 效果&特性

![Pexels Banner|900](https://cdn.pkmer.cn/images/20241219161832.png!pkmer)

- 为笔记添加头图，这个和社区介绍过的 [[obsidian-banners]] 插件很像
	- 可以设置头图
	- 可以设置头图旁边的个性化图标
- 根据关键字自动从 Pexels/Pixabay 等网络图库的图片作为头图
- 可以使用网络图像（URL），可以使用仓库中的本地图像，包括使用 Obsidian 内链接到图像
- 为特定的文件夹下笔记设置统一头图
- 自定义图像大小、其实位置，正文间距等细节

## 使用

### 通用设置（General）

![!pexels-banner-settings-general|700](https://cdn.pkmer.cn/images/20241219180756.png!pkmer)

- 定义图片垂直位置（Image Vertical Position）：0-100
- 自定义头图后正文内容的起始位置（Content Start Position）：自定义数字
- 头图显示样式（Image Display）：
	- Cover：100% 栏宽的头图
	- Contain：窄宽度的头图
- 头图内容平铺（Image Repeat）：只有当 `Image Display` 设置为 `Contain` 时生效，会平布图片到 100% 栏宽
- 头图高度（Banner Height）：设置头图高度 (范围：100-2500 pixels)
- 头图渐隐状态（Banner Fade）：可以设置头图渐隐/渐淡效果 (范围：-1500 to 100)
- 头图圆角（Border Radius）：头图圆角弧度 (0-50 pixels)
- 页内标题颜色（Inline Title Color）：如果你启用了 Obsidian 的内页标题，可以通过这个干预颜色
- 头图 icon（Show View Image Icon） ：可以自定头图 icon
- 隐藏 Pixel Banner 插件的头部 frontmatter 信息（Hide Pixel Banner Fields）
- 隐藏整个笔记的 frontmatter 信息（Hide Properties Section）

### 自定义属性名（Custom Field Names）

- 支持你对 Pixel Banner 插件使用的 frontmatter 信息的标识，这样有助于你自己设置或者配合其他插件效果
	- 比如你使用 [[obsidian-projects]] 插件做了笔记的图片墙， 在 projects 中使用了 cover 这样的属性，那么你可以在 Pixel Banner 中也这么设置
	- 比如你之前使用但是 [[obsidian-banners]] 插件，你想兼容之前的显示，并替换插件

### 为文件夹下统一设置头图

- 这是个批量设置的功能，可以为你某个特定文件下所有笔记来快速设置

### API 设置（API Settings）

- 支持通过 Pexels、Pixabay、Flickr、Unsplash 的 API 来获取图片

### 示例（Examples）

- 这是为了这个插件打分再加 1 的另一个原因，提供了大量范例让用户熟悉
- 毕竟 Obsidian 在处理一些个性化信息，还是依靠 frontmatter，有这样的范例方便用户熟悉新插件
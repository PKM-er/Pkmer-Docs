---
uid: 20230726211351
title: Obsidian 插件：Copy Image and URL context menu 增强图片处理功能
tags: [Obsidian, 插件]
description: 为右键菜单提供复制图片和网址的功能
author: calmwaves
type: basic
draft: false
editable: false
modified: 20230821172705
---

# Obsidian 插件：Copy Image and URL context menu 增强图片处理功能

## 概述

> [!Note] 插件名片
> - 插件名称：Copy Image and URL context menu
> - 插件版本：1.5.0
> - 插件作者：NomarCub
> - 插件说明：为图片增加右键菜单，并提供了一些新功能，包括复制图像，复制网址等。
> - 插件项目地址：[点我跳转](https://github.com/NomarCub/obsidian-copy-url-in-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?Copy-Image-and-URL-context-menu)

## 效果

- 复制图像，在默认应用中打开图像，在系统资源管理器中显示，在文件列表中显示文件
- 复制网址
- 从外部打开 PDF
- 支持移动端

## 使用

> [!warning]
> 首先注意，该插件仅在阅读视图下生效；
> 另外发现一个 bug，不能复制 gif 动图，复制后剪贴板里的是静态图

### 对于图像

在图像上右键后，会出现四个选项

1. Copy Image，复制图片
2. Open image in default app，在默认应用程序中打开图像
3. Show in system explorer，在系统资源管理器中显示
4. Reveal file in navigation，在导航中显示文件

![010-CopyUrlAndImageContextMenu插件_image_1](https://cdn.pkmer.cn/images/202307292305950.png!pkmer)

### 对于网址

在网址上右键后，会出现 copy URL 复制网址

![010-CopyUrlAndImageContextMenu插件_image_2](https://cdn.pkmer.cn/images/202307292305437.gif!pkmer)

### 对于 PDF 文件

> [!warning]
> 对于 PDF 文件，目前有点问题，当鼠标划过 pdf 左边和上边的边框时就会出现 Open PDF externally，目前还没有解决，具体可查看 [issue](https://github.com/NomarCub/obsidian-copy-url-in-preview/issues/25)

![010-CopyUrlAndImageContextMenu插件_image_3](https://cdn.pkmer.cn/images/202307292305948.gif!pkmer)

### 移动端支持

另外，所有功能都适用于移动设备，但仅在 Android 上进行了测试：

![010-CopyUrlAndImageContextMenu插件_image_4](https://cdn.pkmer.cn/images/202307292305535.gif)

安卓上长按图片可以保存 obsidian 笔记里的图片到相册，查看下面的 gif 演示：

![010-CopyUrlAndImageContextMenu_image_5](https://cdn.pkmer.cn/images/202308312233291.gif)
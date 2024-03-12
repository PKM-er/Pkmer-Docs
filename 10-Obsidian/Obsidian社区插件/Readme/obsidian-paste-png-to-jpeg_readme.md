---
uid: 20231220112631
title: Obsidian 插件：【Readme】Paste image Png to Jpeg
tags: ['图片', '自动化', 'obsidian插件', 'readme']
description: 自动处理被粘贴到笔记中图像(png jpg jpeg)1，将图像转换为jpeg格式并压缩它2，将图像存储在当前笔记目录中的图像文件夹3，将图像的名称更改为当前笔记的名称加上一个数字
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Paste image Png to Jpeg

> [!Note] 插件名片
> - 插件名称：Paste image Png to Jpeg
> - 插件作者：musug
> - 插件说明：自动处理被粘贴到笔记中图像 (png jpg jpeg)1，将图像转换为 jpeg 格式并压缩它 2，将图像存储在当前笔记目录中的图像文件夹 3，将图像的名称更改为当前笔记的名称加上一个数字
> - 插件分类：[' 图片 ', ' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/musug/obsidian-paste-png-to-jpeg)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-paste-png-to-jpeg)

## 概述

自动处理被粘贴到笔记中图像 (png jpg jpeg)1，将图像转换为 jpeg 格式并压缩它 2，将图像存储在当前笔记目录中的图像文件夹 3，将图像的名称更改为当前笔记的名称加上一个数字

![Paste image Png to Jpeg](https://cdn.pkmer.cn/covers/obsidian-paste-png-to-jpeg.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/musug/obsidian-paste-png-to-jpeg/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-paste-png-to-jpeg]] 插件的自述翻译

# obsidian-paste-png-to-jpeg

这个插件受到了 [obsidian-paste-image-rename](https://github.com/reorx/obsidian-paste-image-rename) 的启发，obsidian-paste-image-rename 可以在插入图片时重命名，我想在插入时也可以压缩和修改它，所以我创建了这个插件。

当将图片（png jpg jpeg）粘贴到笔记中时，插件会自动处理以下内容：

1. 将图片转换为 jpeg 格式并压缩。
2. 将图片存储在当前笔记目录的 images 文件夹中。
3. 将图片的名称更改为当前笔记的名称加上一个数字。

例如，hello.md 的截图将被命名为 hello-1.jpeg...

您还可以设置是否启用图像压缩以及设置图像的质量，质量越小，压缩率越高。

![](https://cdn.pkmer.cn/covers/obsidian-paste-png-to-jpeg_2_0.png!pkmer)

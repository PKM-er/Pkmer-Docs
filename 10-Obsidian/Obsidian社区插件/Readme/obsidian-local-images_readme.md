---
uid: 2023080322214292
title: Obsidian 插件：【Readme】Local images
tags: ['obsidian插件', 'readme']
description: 本地图像插件会查找笔记中所有指向外部图像的链接，然后下载并本地保存图像，最后调整笔记中的图像链接以指向已保存的图像文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Local images

> [!Note] 插件名片
> - 插件名称：Local images
> - 插件作者：catalysm, aleksey-rezvov
> - 插件说明：本地图像插件会查找笔记中所有指向外部图像的链接，然后下载并本地保存图像，最后调整笔记中的图像链接以指向已保存的图像文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aleksey-rezvov/obsidian-local-images)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-local-images)

## 概述

本地图像插件会查找笔记中所有指向外部图像的链接，然后下载并本地保存图像，最后调整笔记中的图像链接以指向已保存的图像文件。

![Local images](https://cdn.pkmer.cn/covers/obsidian-local-images.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aleksey-rezvov/obsidian-local-images/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-local-images]] 插件的自述翻译

# Obsidian 本地图片

**这个插件还很年轻，备份是个好主意。**

Obsidian 本地图片是 Obsidian 桌面版的一个插件。

该插件会在你的笔记中找到所有外部图片链接，下载并保存图片到本地，最后调整笔记中的链接指向本地图片文件。

例如，我们最初在笔记中有这样的标记：

    ![](https://picsum.photos/200/300.jpg)

本地图片插件会下载图片 300.jpg，并保存在 vault 的 **media** 子目录中，然后更改标记，使其指向本地存储的图片：

    ![](media/300.jpg)

当你从网页中复制粘贴部分内容并希望将图片保存在你的 vault 中时，这非常有用。因为外部链接可能会在未来被移动或过期。

你可以使用以下命令：

**下载图片到本地** -- 将处理当前活动页面。

或者

**下载所有笔记中的图片到本地** -- 将处理 vault 中与插件设置中的 **Include** 参数相对应的所有页面。

此外，你还可以在插件设置中打开处理活动页面时粘贴外部链接的选项。

该插件尚未与移动版进行测试，可能也可以与移动版一起使用。

## 信用

该插件是基于 [niekcandaele](https://github.com/niekcandaele/obsidian-local-images) 的代码库开发的。下载、保存的关键原则以及一些文本都是从那里得到的。甚至插件的名称也是原创的。

开发

# 启动监听模式下的打包工具

npm run dev

# 设置符号链接是很有用的，这样你就不必不断地复制文件了

ln -s /home/user/code/obsidian-local-images /home/user/notes/dev/.obsidian/plugins/local-images

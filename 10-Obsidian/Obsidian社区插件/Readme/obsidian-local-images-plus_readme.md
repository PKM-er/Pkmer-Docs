---
uid: 2023080322214378
title: Obsidian 插件：【Readme】Local images plus
tags: ['附件', '图片', '文件管理', 'obsidian插件', 'readme']
description: 本地图片插件会在你的笔记中找到所有外部图片的链接，然后将图片下载并保存到本地，最后调整你笔记中的图片链接指向保存的图片文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Local images plus

> [!Note] 插件名片
> - 插件名称：Local images plus
> - 插件作者：catalysm, aleksey-rezvov, Sergei Korneev
> - 插件说明：本地图片插件会在你的笔记中找到所有外部图片的链接，然后将图片下载并保存到本地，最后调整你笔记中的图片链接指向保存的图片文件。
> - 插件分类：[' 附件 ', ' 图片 ', ' 文件管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Sergei-Korneev/obsidian-local-images-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-local-images-plus)

## 概述

本地图片插件会在你的笔记中找到所有外部图片的链接，然后将图片下载并保存到本地，最后调整你笔记中的图片链接指向保存的图片文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-local-images-plus]] 插件的自述翻译

# Obsidian 本地图片增强插件

Obsidian 本地图片增强插件是为 [Obsidian](https://obsidian.md/) 桌面版设计的插件（移动版仍在计划中）。

该插件会搜索你的笔记中的所有外部媒体链接，将它们下载并保存到本地，并调整笔记中的链接指向本地文件。

## 安装

- 从 [GitHub](https://github.com/Sergei-Korneev/obsidian-local-images-plus) / [GitHub页面](https://sergei-korneev.github.io/obsidian-local-images-plus) 下载最新版本。[阅读发布说明](https://github.com/Sergei-Korneev/obsidian-local-images-plus/releases)。
- 删除 obsidian-local-images 插件以避免任何冲突。
- 将存档解压缩到 Obsidian vault 中（例如 Myvault/.obsidian/plugins）。
- 重新启动 Obsidian。
- 或者从“Obsidian Community Plugins”安装
- 打开“Community plugins”对话框，并根据需要更改插件设置。
- 享受

```

此插件已知与以下插件存在兼容性问题：

* Paste Image Rename

* Pretty BibTex

```

使用方法

只需将任何网页内容、Word/Open Office 内容复制并粘贴到您的常规笔记或画布中的笔记中。

从版本 0.15.0 开始，该插件还处理所有附件（文件/音频记录的截图/拖放）。

在命令/菜单模式或自动模式下使用它（在设置中切换“自动处理”选项）：

```下载所有媒体文件（插件文件夹）``` - 将处理您的活动页面，并将附件保存在插件设置中预配置的文件夹中。

或者

```下载所有媒体文件（Obsidian文件夹）``` - 将处理您的活动页面，并将附件保存在 Obsidian 设置中预配置的文件夹中。

或者

```下载所有笔记的媒体文件``` - 将处理您的保险库中与插件设置中的**包括**参数相对应的所有页面。

**注意：此插件可以一次更改所有笔记，因此您应该考虑定期备份文件。**

您还可以插入任何文件，例如：

```![mypdf](http://mysite/mypdf.pdf)```

```![mylocalfile](file:///mylinuxdisk/mysong.mp3)```

文件将被复制或下载到您的附件文件夹中。

从版本 0.15.6 开始，该插件还允许您通过运行命令来删除未使用的附件：

```删除所有孤立的附件（插件文件夹）```

和

```删除所有孤立的附件（Obsidian文件夹）```

第一个命令在活动笔记旁边的文件夹中搜索孤立的附件，而第二个命令搜索所有未使用的附件以供您的所有笔记使用（这要求您在 Obsidian 设置中设置一些根子文件夹）

从版本 0.14.5 开始，附件名称根据 MD5 生成，因此它们在保险库中非常独特。

这意味着您可以将附件文件放在保险库中的任何位置，用文件名替换标签中的绝对路径，Obsidian 仍然会在您的笔记中显示它。

捐赠

分享您对这个软件的愿望和想法，或者给我买杯咖啡（或热巧克力）

## 鸣谢

[niekcandaele](https://github.com/niekcandaele/obsidian-local-images)

[aleksey-rezvov](https://github.com/aleksey-rezvov/obsidian-local-images)

## 从源代码构建

```
npm run build
npm run dev
```
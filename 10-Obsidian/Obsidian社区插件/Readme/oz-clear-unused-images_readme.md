---
uid: 2023080322155673
title: Obsidian 插件：【Readme】Clear Unused Images
tags: ['自动化', '文件管理', '图片', '附件', '效率', 'obsidian插件', 'readme']
description: 清除笔记中不再使用的图像以节省空间。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Clear Unused Images

> [!Note] 插件名片
> - 插件名称：Clear Unused Images
> - 插件作者：Ozan Tellioglu
> - 插件说明：清除笔记中不再使用的图像以节省空间。
> - 插件分类：['自动化', '文件管理', '图片', '附件', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/oz-clear-unused-images-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oz-clear-unused-images)

## 概述

清除笔记中不再使用的图像以节省空间。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/oz-clear-unused-images-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[oz-clear-unused-images]] 插件的自述翻译


# 清理未使用图像的Obsidian插件

该插件通过删除您在Markdown笔记中不再引用的图像，帮助您保持您的存储库清洁。

该插件会从所有Markdown文档中获取所有图像链接，并将这些图像与您存储库中可用的所有图像文件进行比较。

如果这些图像文件在存储库的任何文档中都没有被引用，它们将被自动删除。

## 设置

### 删除的图像目标

请确保在“清除未使用图像设置”选项卡下选择删除图像的目标。您有3个选项：

<img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/blob/master/images/delete-destination.png?raw=true">

1. **移动到 Obsidian 垃圾箱** - 文件将被移动到 Obsidian Vault 下的 `.trash` 文件夹中。

2. **移动到系统垃圾箱** - 文件将被移动到操作系统的垃圾箱中。

3. **永久删除** - 文件将被永久销毁。您将无法恢复。

### 排除的文件夹

您可以排除一些文件夹，这样在扫描过程中就不会删除这些文件夹中的图像。如果有多个文件夹需要排除，您可以用逗号分隔它们。请确保在Vault中提供完整的路径：

<img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/blob/master/images/excluded-folders.png?raw=true">

您现在可以排除上述文件夹路径下的所有子文件夹：

<img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/blob/master/images/exclude-subfolders.png?raw=true">

## 如何使用

1. 从社区插件中激活插件

2. 你可以选择以下方式之一：

    - 在插件设置中激活功能区图标，然后点击左侧功能区图标来运行清理操作：

    <img src="https://user-images.githubusercontent.com/55187568/118400231-0ceeed80-b661-11eb-9b07-7e22fab02694.png">

    - 或者使用功能区图标或打开命令面板（使用 `Ctrl/Cmd + P` 或从功能区）运行 "Clear Unused Images"。

    <img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/raw/master/images/Clear-Command.png">

3. 如果你在插件设置中打开了 "Delete Logs" 选项，你将会看到一个弹出窗口，显示从你的存储库中删除的图像信息：

<img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/raw/master/images/logs-modal.png">

如果所有图像都被使用了，你将会看到以下通知：

<img src="https://github.com/ozntel/oz-clear-unused-images-obsidian/raw/master/images/nothing-deleted.png">

**扫描的图像格式**：jpg、jpeg、png、gif、svg、bmp

## 计划功能

- [x] 创建设置，让用户选择删除文件的目标位置
- [x] 扫描时排除文件夹的设置
- [ ] 如果用户选择，加载保险库时清理图像
- [ ] 根据用户选择，每隔X分钟清理图像

## 支持

如果你喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/L3L356V6Q' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com上给我买杯咖啡' />
</a>




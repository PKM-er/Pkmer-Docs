---
uid: 2023080322180844
title: Obsidian 插件：【Readme】Fast Image Cleaner
tags: ['obsidian插件', 'readme']
description: 此插件允许您通过右键菜单在LIVE和READ模式下快速删除文档中的图像附件和引用链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Fast Image Cleaner

> [!Note] 插件名片
> - 插件名称：Fast Image Cleaner
> - 插件作者：Nathaniel
> - 插件说明：此插件允许您通过右键菜单在LIVE和READ模式下快速删除文档中的图像附件和引用链接。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/martinniee/Obsidian-fast-image-cleaner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nl-fast-image-cleaner)

## 概述

此插件允许您通过右键菜单在LIVE和READ模式下快速删除文档中的图像附件和引用链接。

![Fast Image Cleaner](https://cdn.pkmer.cn/covers/nl-fast-image-cleaner.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/martinniee/Obsidian-fast-image-cleaner/master/README.md)
> 

---

## Readme(翻译）

下面是 [[nl-fast-image-cleaner]] 插件的自述翻译


# 快速图像清理器

[中文](./ZH.md) / EN

该插件可以通过右键单击上下文菜单选项，快速删除图像（或视频、音频、文件......）附件，并删除引用链接。

## 演示

//该功能已更新。等待...........

## 特点

特点介绍：

1. 右键单击图像以删除附件和链接，以及相应的文件夹。

2. 右键单击文件列表以删除笔记和引用的附件，以及相应的文件夹。

特点详细信息：

1. 支持 `markdown` 和 `wiki` 链接样式的图像链接删除。

2. 支持三种不同格式的**内部链接类型**（[详情](https://help.obsidian.md/Linking+notes+and+files/Internal+links)）

   1. 尽可能使用最短路径
   2. 相对文件路径
   3. 绝对存储库路径

3. 支持删除图像后的处理方法

   1. 移动到系统回收站

   2. 移动到 Obsidian 回收站（.trash 文件夹）

   3. 永久删除

4. 除了支持 `img` 类型的附件外，还有其他类型的附件文件，如图像、视频、音频录音、文档...（目前无法通过右键单击删除 PDF 附件）。

   1. 图像类型：img、gif、png、jpeg、svg、bmp...

   2. 文件类型：docx、pptx、html、epub...

   3. 媒体类型：mp4、mkv...

> 图像附件和引用链接删除的说明：
>
> 1. 如果图像在当前笔记中只被引用**一次**，它将直接被删除，连同其链接一起。
> 2. 如果图像在当前笔记中被引用**多次**，将出现一个提示窗口，要求用户手动删除链接而不删除图像。（这是为了防止意外删除图像。）
> 3. 如果图像被**多个笔记**引用，将出现一个提示窗口。用户可以点击“关闭”按钮，继续从**当前文档**中删除图像引用链接，而不删除图像。（这是为了防止意外删除图像。）
>
> 删除笔记时自动删除引用的附件的说明：
>
> 1. 如果附件被其他笔记引用，它将不会被删除。
> 2. 如果附件在**要删除的笔记**中只被引用一次或多次，它将被删除。
> 3. 删除方法：使用插件提供的命令，或右键单击文件列表。
>
> 根据情况自动删除附件文件夹的说明：
>
> - 附件的父目录（通常是附件文件夹）只有在附件在要删除的笔记中只被引用一次，并且在删除附件后附件文件夹为空时才会被删除。

安装

从插件市场直接安装并输入“Fast Image cleaner”。

### 从 BRAT 安装

👦 将 `martinniee/Obsidian-fast-image-cleaner` 添加到 BRAT。

### 手动安装

-   方法1：前往发布页面下载 '.zip' 包
-   方法2：下载并解压缩三个文件（`main.js`、`manifest.json`、`style.css`）到 `/.obsidian/plugins/Obsidian-fast-image-cleaner` 文件夹中。

使用方法

1. 安装并启用插件
2. 在实时模式或阅读模式下，右键单击图像，然后单击菜单项以删除图像并清除引用链接。

### 删除的图片目标

![image-20230209180042264](assets/README-images/image-20230209180042264.png)

请确保您在“Fast Images Cleaner Settings”选项卡下选择了删除图像的目标。您有3个选项：

1. **移动到Obsidian垃圾箱** - 文件将被移动到Obsidian Vault下的`.trash`文件夹中。
2. **移动到系统垃圾箱** - 文件将被移动到操作系统的垃圾箱中。
3. **永久删除** - 文件将被永久销毁。您将无法恢复。

删除模式

#### 删除附件和链接

(1) 在实时预览模式下

![image-20230215115818647](assets/ZH-images/image-20230215115818647.png)

(2) 在阅读模式下
![image-20230215115818647](assets/ZH-images/image-20230215115818647.png)

开发

该插件遵循[Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin)的结构，请在那里查看更多详细信息。

## 支持

❤ 如果你喜欢使用Obsidian-Fast-Image-Cleaner，请通过以下链接给我一些支持：https://ko-fi.com/nathanielll



## 计划

-   [ ] 在文件列表中启用对任何类型的嵌入附件进行右键单击以显示上下文菜单选项。




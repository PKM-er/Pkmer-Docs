---
uid: 2024031219333938
title: Obsidian 插件：【Readme】Tiff Viewer
tags: ['obsidian插件', 'readme']
description: 查看.tif(f)文件，通过生成相同格式的.tif(f).png文件进行复制。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tiff Viewer

> [!Note] 插件名片
> - 插件名称：Tiff Viewer
> - 插件作者：Jan Ullmann
> - 插件说明：查看.tif(f) 文件，通过生成相同格式的.tif(f).png 文件进行复制。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ullmannJan/obsidian-tiff-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tiff-viewer)

## 概述

查看.tif(f) 文件，通过生成相同格式的.tif(f).png 文件进行复制。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ullmannJan/obsidian-tiff-viewer/main/README.md)

---

## Readme(翻译）

下面是 [[tiff-viewer]] 插件的自述翻译

【机翻】

# 黑曜石 Tiff 查看器

此插件在当前打开的文件中创建所有 `.tif(f)` 文件的副本，并将它们转换为 `.tif(f).png`，无论它们保存在何处。这允许在 Obsidian 中显示 `tif(f)` 图像。

## 使用案例

在科学领域，仍然常见使用 `.tif(f)` 文件。今天的浏览器不原生兼容这种图片格式，因此，Obsidian 无法显示它们。为了解决这个问题，这个插件允许您通过运行一个命令将文件链接转换为 `.tif(f).png` 文件，简化转换过程。此外，它在与源文件相同的目录中创建一个 `.png` 副本。现在，这个转换后的图片可以轻松地在 Obsidian 笔记中显示。

## 功能

![obsidian-tiff-viewer-demo](https://cdn.pkmer.cn/covers/tiff-viewer_1_0.gif!pkmer)

该插件包含 4 个命令。

- `Tiff Viewer: Create .tif(f).png from .tif(f) in editor and rename links`
    - 在当前编辑器中创建所有链接的**.tif(f)**文件的副本，并将它们转换为**.tif(f).png**，然后重命名文件链接。
- `Tiff Viewer: Delete .tif(f).png files linked in editor and rename links`
    - 将编辑器中的文件链接从**.tif(f).png**重命名为**.tif(f)**。然后，删除相应的**.tif(f).png**文件。
- `Tiff Viewer: Debug: Delete all .tif(f).png files in vault (dangerous)`
    - 删除存储库中以**.tif(f).png**结尾的所有文件。
- `Tiff Viewer: Debug: Rename file links with .tif(f).png to .tif(f) in editor`
    - 将当前编辑器中的所有**.tif(f).png**文件链接重命名为**.tif(f)**。但是，不会删除任何内容。

## 开发

要编译该项目，您可以按照以下步骤进行：

1. 确保您的计算机上已安装了 Node.js 和 npm。
2. 使用 `git clone https://github.com/ullmannJan/obsidian-tiff-viewer.git` 克隆存储库。
3. 使用 `cd obsidian-tiff-viewer` 导航到项目目录。
4. 运行 `npm install` 安装依赖项。
5. 使用 `npm run build` 构建项目。
6. 编译后的代码将在 `dist` 目录中可用。




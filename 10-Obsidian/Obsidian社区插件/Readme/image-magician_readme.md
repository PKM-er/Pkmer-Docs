---
uid: 20240312193744
title: Obsidian 插件：【Readme】Image Magician
tags: ['obsidian插件', 'readme']
description: 支持使用ImageMagick查看和导出各种图像格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image Magician

> [!Note] 插件名片
> - 插件名称：Image Magician
> - 插件作者：luxmargos
> - 插件说明：支持使用 ImageMagick 查看和导出各种图像格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/luxmargos/obsidian-image-magician-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-magician)

## 概述

支持使用 ImageMagick 查看和导出各种图像格式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/luxmargos/obsidian-image-magician-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[image-magician]] 插件的自述翻译

# 黑曜石图像魔术师插件

这个为 Obsidian（<https://obsidian.md>）设计的插件支持各种图像格式，

这些格式在 Obsidian 应用程序中并不原生支持。

通过这个插件，您可以使用基于图像的各种功能，

比如预览、链接、嵌入和导出到其他图像格式，如 png、jpg 和 webp。

这个项目主要利用了 [magick-wasm](https://github.com/dlemstra/magick-wasm) 来提供渲染和导出功能。

特别地，一个专门的引擎 [@webtoon/psd](https://github.com/webtoon/psd) 已经准备好支持 psd（Photoshop）格式。

## 支持

如果您发现这个插件有帮助，请考虑支持该项目。

[![给我买杯咖啡](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/luxmargos)

## 主要特点

### 专用视图

在 Obsidian 中预览各种图像格式，无需第三方应用程序，例如 Photoshop 的 PSD 和由 ImageMagick 支持的 100 多种格式。

### 像 obsidian 原生图片一样支持自然的 markdown

Markdown 内联链接语法得到支持，比如 `![[My Image.psd]]`。

同时，HTML `<img>` 标签也得到支持。

<img src="./docs/sc_my_balloon.png" width="400" />

### `<img>` 中的增强路径检测

此功能适用于所有 `<img>` 标签，包括 Obsidian 的原生图像格式，如 png、jpg 和 webp

您可以在 img 标签中插入基于 vault 的路径或内联链接。例如：

- `<img src="My Image.psd">`
- `<img src="[[My Image.psd]]">`

<img src="./docs/sc_img_src.png" width="350" alt="Enhanced path detection in `<img>`" />

### 导出对话框

您可以通过上下文菜单或命令快速导出特定图像，支持调整大小选项。

<img src="./docs/sc_context_menu.png" width="200" alt="Export Dialog" />

### 自动导出

该插件具有自动导出功能，当源文件发生更改时触发，由文件的修改日期确定。您可以在插件的设置中自定义选项。

<img src="./docs/sc_auto_export.png" width="200" alt="自动导出" />

## 安装

- 在您的 Vault 文件夹中创建一个名为 `VaultFolder/.obsidian/plugins/image-magician` 的插件文件夹。
- 下载最新版本并将 `main.js`、`styles.css` 和 `manifest.json` 复制到该文件夹中。

### 从社区插件列表

在 Obsidian 的社区插件浏览器中搜索并安装“Image Magician”，然后启用该插件。

## 图像格式

您可以尝试使用任何已知的图像格式，通过插件设置查看。

但是，插件不保证其能正常工作。

### 插件中默认列出的格式

以下是在插件中注册为默认支持格式的列表。

| 格式            | 备注                                                              |
| --------------- | ----------------------------------------------------------------- |
| PSD             | Photoshop。                                                        |
| PSB             | Photoshop（大格式）。                                         |
| TIFF，TIF，TIFF64 |                                                                   |
| DCM             |                                                                   |
| DDS             |                                                                   |
| HDR             |                                                                   |
| HEIC            |                                                                   |
| MNG             |                                                                   |
| PBM             |                                                                   |
| PCX             |                                                                   |
| PFM             |                                                                   |
| PGM             |                                                                   |
| PNM             |                                                                   |
| PPM             |                                                                   |
| SGI             |                                                                   |
| XBM             |                                                                   |
| XCF             | Gimp 图像。然而，据我确认，它只呈现单层。 |

| 格式  | 备注                 |
| ------ | -------------------- |
| PNG    |                      |
| JPG    |                      |
| WEBP   |                      |
| GIF    |                      |
| SVG    |                      |
| BMP    |                      |
| AVIF   | 自从 obsidian 1.5.3
|

### 在 ImageMagick 中似乎有问题

这些在 Image Magick 库中列出。但是不起作用。

| 格式   | 注释                           |
| ------ | ------------------------------ |
| TGA    | Truevision Targa 图像          |
| SVG    | 需要 inkscape 命令行            |

## 已知问题和提示

如果您计划将您的 markdown 导出为另一种格式或遇到渲染问题，建议将“渲染模式”选项更改为“数据 URL”。

### 链接建议

此问题（或 Obsidian 中的预期行为）已在至少 Obsidian 1.5.0 中被识别。当嵌入非 Obsidian 原生图像且不受 Obsidian 默认支持的图像时，您可能看不到链接建议。您可以通过打开“设置 > 文件和链接 > 检测所有文件扩展名”来解决此问题。或者，您可以使用插件，如 [Boost Link Suggestions](https://github.com/jglev/obsidian-boost-link-suggestions)。

## 在 ImageMagick 中的格式列表

在 ImageMagick 的文档中，列出了各种格式（100+ 种），

但是我确认了一些格式存在不完整的绘制或者报错的情况。

因此，我列出了一些我确认作为默认插件支持的格式，它们能够按预期渲染。

[Dump: Image Magick中支持的格式](./docs/ImageMagick_dump.md)

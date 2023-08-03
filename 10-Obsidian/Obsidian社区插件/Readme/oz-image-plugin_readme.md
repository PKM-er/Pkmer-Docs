---
uid: 2023080322242084
title: "Obsidian 插件：Ozan's Image in Editor Plugin"
tags: ['界面相关', '图片', 'PDF', 'obsidian插件', 'readme']
description: 为笔记编辑器中添加图片查看器，查看图像、引用、iFrame和PDF文件，无需切换到预览模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Ozan's Image in Editor Plugin

> [!Note] 插件名片
> - 插件名称：Ozan's Image in Editor Plugin
> - 插件作者：Ozan Tellioglu
> - 插件说明：为笔记编辑器中添加图片查看器，查看图像、引用、iFrame 和 PDF 文件，无需切换到预览模式。
> - 插件分类：[' 界面相关 ', ' 图片 ', 'PDF', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/oz-image-in-editor-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oz-image-plugin)

## 概述

为笔记编辑器中添加图片查看器，查看图像、引用、iFrame 和 PDF 文件，无需切换到预览模式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[oz-image-plugin]] 插件的自述翻译

# Ozan 在编辑器插件中的图像

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/ozntel/oz-image-in-editor-obsidian?style=for-the-badge)

![GitHub所有发布](https://img.shields.io/github/downloads/ozntel/oz-image-in-editor-obsidian/total?style=for-the-badge)

## 📕 简要说明

- 该插件可以帮助您在编辑器视图下直接查看 `图片`、`iframe`、`PDF文件`、`excalidraw` 绘图和 `transclusions`，无需切换到预览模式。
- 该插件允许您查看 `本地图片` 和 `来自互联网的图片`。
- 支持 `Markdown` 和 `Wikilinks` 格式，如下所述。
- 您可以使用下面提供的 `ALT-TEXT` 选项调整图片的视图大小，以确保它们在屏幕上不占用太多空间，除非需要。

## 📕 支持的格式

- `!( ALT-TEXT )[ IMAGE-NAME ]`
    <span style="color: #d1672a">示例</span>: `![ #x-small ]( myimage.png )`

- `![[ IMAGE-NAME | ALT-TEXT ]]`
    <span style="color: #d1672a">示例</span>: `![[ myimage.png | #x-small ]]`

- `![[ IMAGE-NAME ]]`
    <span style="color: #d1672a">示例</span>: `![[ myimage.gif ]]`

**扫描图像格式** : `jpg`, `jpeg`, `png`, `gif`, `svg`, `bmp`

## 📕 图像视图大小

使用相对路径和绝对路径可以为图像添加 `alt` 文本。您可以使用以下 `alt` 文本来决定图像的大小：

1. `#small`
2. `#x-small`
3. `#xx-small`

#### 新的尺寸特性

现在您可以使用以下格式来调整图像的大小：

1. **宽度 x 高度**：`![100x100](image.png)`
2. **宽度**：`![300](image.png)`

#### 反转颜色功能

与“Minimal Theme”类似，您可以在 `alt-text` 中添加 `#invert` 来以“反转颜色”模式查看图像：

- `![[image.png|#invert]]`
- `![#invert](image.png)`

## 📕 渲染转引

插件现在可以在编辑器中渲染转引。您可以使用 `文件` 转引、`块 ID` 和 `标题`：

- `![[myFile]]`
- `![[myFile#^316sd1]]`
- `![[myFile#Header2]]`

要使用此功能，您需要在插件设置中启用渲染。

示例视图：

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/transclusion-header.png" width="70%"/>

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/transclusion-block.png" width="70%"/>

## 📕 将 Wikilink 转换为 Markdown 和将 Markdown 转换为 Wikilink

插件的链接转换功能已经移至 [Obsidian Link Converter Plugin](https://github.com/ozntel/obsidian-link-converter)，并增加了许多额外的功能。您可以从 Community Plugins 中下载。

## 📕 Excalidraw 视图

在与 Zsolt 的良好合作之后，您现在可以在编辑器中查看 `excalidraw` 绘图。参考：

使用 `excalidraw` 扩展的用法：

- `![[drawing.excalidraw|ALT-TEXT]]`
- `!(ALT-TEXT)[drawing.excalidraw]`

使用新格式的用法（您不再需要添加 `.md` 扩展名）：

- `![[drawing|ALT-TEXT]]`
- `!(ALT-TEXT)[drawing]`

**重要提示：**如果您使用的是 Excalidraw 插件的 `1.2.x` 版本，则 `Wikilinks` 格式需要包括 `.md` 扩展名，否则绘图将无法在编辑器中呈现。

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/excalidraw-support.png" width="70%"/>

- 您现在可以打开/关闭 `Excalidraw` 绘图的渲染选项。

## 📕 PDF 渲染功能

您可以在编辑模式下打开渲染 PDF 文件的选项。

您可以查看本地文件和互联网上的文件。

您还可以使用以下模式从特定页码开始查看 `PDF` 文件：

- `![[myfile.pdf#page=12]]`
- `![](myfile.pdf#page=12)`

### 示例

**本地 PDF 文件**

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/pdf-local-file.png" width="70%"/>

**来自链接的 PDF 文件**

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/pdf-from-link.png" width="70%"/>

## 📕 iFrame 渲染功能

您可以从设置中打开 `iFrame` 选项以在编辑器中渲染 `iframes`：

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/iframe-render.png" width="70%"/>

## 📕 新的设置选项

### 在更改后刷新图像

现在，您可以打开选项，在每次文件更新后刷新图像。这对于 `excalidraw` 绘图特别有用：

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/refresh-images-settings.png" width="80%"/>

### 打开/关闭图像渲染

现在您可以在编辑器中切换图像渲染选项：

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/render-toggle-settings.png" width="80%"/>

您可以通过调色板中的命令来切换渲染：

<img src="https://raw.githubusercontent.com/ozntel/oz-image-in-editor-obsidian/master/images/render-toggle-command.png" width="80%"/>

## 📕 示例图像渲染视图

### Markdown 格式

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/Absolute_Path_View.png" width="70%"/>

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/Relative_Path_View.png" width="70%"/>

### Wikilinks 格式

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/Shortest_Path_Possible_View.png" width="70%"/>

<img src="https://github.com/ozntel/oz-image-in-editor-obsidian/raw/master/images/Wikilinks_2.png" width="70%"/>

## 📕 联系方式

如果您有任何问题或建议，请随时通过我的网站联系页面 [ozan.pl/contact/](https://www.ozan.pl/contact/) 或直接发送邮件至 <me@ozan.pl> 联系我。

## 支持

如果你喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/L3L356V6Q' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com给我买杯咖啡' />
</a>




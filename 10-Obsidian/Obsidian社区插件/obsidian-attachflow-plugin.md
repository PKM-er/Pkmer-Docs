---
uid: 20240328161145
title: Obsidian AttachFlow 插件：丝滑顺畅地处理 Obsidian 文档中的内嵌附件
tags: [obsidian插件, 编辑体验]
description: 实时编辑或阅读模式下，通过简单的右键菜单，轻松管理文档中的内嵌附件（图片、视频，录音，文件...），还可以直接拖拽调整图片大小。
author: yaozhuwa
type: other
draft: false
editable: false
modified: 20240329194122
---

# Obsidian AttachFlow 插件：丝滑顺畅地处理 Obsidian 文档中的内嵌附件

> [!Note] 插件名片
> - 插件名称：AttachFlow
> - 插件作者：yaozhuwa
> - 插件说明：实时编辑或阅读模式下，通过简单的右键菜单，轻松管理文档中的内嵌附件（图片、视频，录音，文件...），还可以直接拖拽调整图片大小。
> - 插件分类：['obsidian 插件 ', ' 编辑工具 ']
> - 项目地址：[点我访问](https://github.com/Yaozhuwa/AttachFlow)

## 插件功能

插件主要提供了两样功能：图片/附件的右键菜单、拖拽调节图片大小。AttachFlow 这个名字，是 Attachment 和 Flow 的结合，目标是丝滑顺畅地处理 Obsidian 文档中的附件。

插件视频介绍： <https://b23.tv/DMw7zHu>

### 图片/附件右键菜单

效果展示：

![[AttachFlowContextMenu.gif]]

本插件提供了丰富的右键菜单选项，包含了 `删除文件和链接、重命名、拷贝到剪贴板、默认应用打开、在访达显示、在 Obsidian 文档树显示` 的功能。

该右键菜单支持各种文件，不仅对图片（对外部链接的图片无效）有效，还支持视频、音频、**文档内嵌的 Excalidraw 绘图**、PPT、Word、Excel 等~

| 内嵌文件          | 右键菜单演示                                    |
| ------------- | ----------------------------------------- |
| GIF/图片        | ![[Pasted image 20240329191806.png\|500]] |
| 视频            | ![[Pasted image 20240329191923.png\|500]] |
| 内嵌 Excalidraw | ![[Pasted image 20240329191708.png\|500]] |
| 音频/PPT/Word 等 | ![[record-context-menu.gif\|500]]         |

下面是几个右键菜单功能的具体介绍

只有对插件产生的后果完全了解，才能放心地使用。Obsidian 最让我安心的就是，我知道我的每个文件的储存方式和位置。

#### 重命名

该重命名功能重命名附件后，会自动更新所有引用该附件的文件中的链接，所以不必担心其他文档内链接会失效。

#### 拷贝文件到剪贴板

其他插件（如 [[copy-url-in-preview_readme|obsidian-copy-url-in-preview]]、[[obsidian-image-toolkit|Obsidian Image Toolkit]]）的拷贝图片菜单，实际上是把图片重绘，然后复制到剪贴板，拷贝到剪贴板的图像实际上和原图不同，如 **GIF 拷贝后会得到 PNG 图片**。

这样做还有一个坏处就是，你拷贝了仓库中的一张图片，粘贴到另一个文档的时候，粘贴的图片会以一个新的名字保存到本地。而实际上你想要的是两个地方都是引用同一张图片的链接，**导致附件的冗余**。

下面是 [[obsidian-image-toolkit]] 插件拷贝粘贴图片的效果：

![[image-toolkit-copy.gif]]

本插件实现了本地文件真实拷贝到剪贴板的操作（目前只支持 Mac 和 Windows），效果和 `Ctrl/CMD+C` 复制文件一样。不仅支持图片文件的拷贝，还支持视频、Excalidraw、Word、Excel、PPT 等任意格式。

本插件右键拷贝的文件，**可以粘贴到任意其他的应用程序**，甚至直接在桌面粘贴。而在 Obsidian 文档中粘贴的时候，并不会产生新的文件，而是生成一个拷贝的文件的链接，这样不会产生冗余的图像，非常的干净。

下面是本插件的拷贝和粘贴效果演示：

![[attachflow-copy.gif]]

#### 删除文件和链接

右键菜单可以快速删除当前的附件链接以及对应的附件。

- 如果该附件**仅被当前链接引用**，则会直接删除该链接，同时删除附件文件。
- 若附件除了当前链接**还有其他地方对其有引用**，则只会删除当前的链接文本，并不会删除该附件文件。
- 如果附件删除后附件文件夹为空，则将附件文件夹也删除。

本插件的删除功能相对于 [[nl-fast-image-cleaner|Fast Image Cleaner 插件]] 更加精准，对于同一文档多次引用同一张图片的情况也能正确处理。

![[small-attachflow-delete.gif]]

### 拖拽调节图片大小

效果展示：

![[AttachFlow-DragResize-small.gif]]

拖拽调节图片大小功能细节：

- 支持 Markdown 链接和 WIKI 链接及 Obsidian 的三种内部链接类型
    - ![[Obsidian 内部链接类型.png]]
- 支持**表格**内、Callout 内图像的直接拖拽调节大小
- 支持文档内嵌入的 **Excalidraw 文件**的拖拽调节（支持 PNG Image 和 SVG Image 格式，见下图中的 Excalidraw 设置）
    - ![[Excalidraw 嵌入 Markdown 的绘图.png]]
- 支持 [[pdf-plus_readme|Obsidian PDF++ 插件]] 嵌入文档的矩形框的拖动调节

## 插件安装

插件目前还未上架 Obsidian 插件市场。

### 从 BRAT 安装

添加 `https://github.com/Yaozhuwa/AttachFlow` 到 [[obsidian42-brat|Obsidian BRAT 插件]].

### 手动下载安装

进入本插件 [最新的 release 页面](https://github.com/Yaozhuwa/AttachFlow/releases)，下载 `main.js`, `manifest.json`, `style.css`, 把他们放到 `库目录/.obsidian/plugins/attachment-flow-plugin/` 文件夹下.

## 相关插件

本插件参考了以下三个插件的代码：

1. [[nl-fast-image-cleaner|Fast Image Cleaner 插件]]
2. [[copy-url-in-preview_readme|obsidian-copy-url-in-preview 插件]]
3. [[image-converter_readme|Obsidian Image Converter 插件]]
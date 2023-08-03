---
uid: 2023080322163743
title: Obsidian 插件：【Readme】Copy document as HTML
tags: ['obsidian插件', 'readme']
description: 将当前文档复制到剪贴板，以HTML格式，包括图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Copy document as HTML

> [!Note] 插件名片
> - 插件名称：Copy document as HTML
> - 插件作者：mvdkwast
> - 插件说明：将当前文档复制到剪贴板，以HTML格式，包括图像。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mvdkwast/obsidian-copy-as-html)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-document-as-html)

## 概述

将当前文档复制到剪贴板，以HTML格式，包括图像。

![Copy document as HTML](https://cdn.pkmer.cn/covers/copy-document-as-html.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mvdkwast/obsidian-copy-as-html/master/README.md)
> 

---

## Readme(翻译）

下面是 [[copy-document-as-html]] 插件的自述翻译


# 将文档复制为HTML

这是一个为[Obsidian](https://obsidian.md)设计的插件，它可以将当前文档复制到剪贴板，以便在支持HTML的应用程序（如Gmail）中粘贴。

该插件提供了“复制文档为HTML”命令，可以将其绑定到键盘快捷键（见下文）。

![image](https://user-images.githubusercontent.com/2441349/202304790-aea2a29e-2ed8-4ba2-bfb6-caaeb823e6f0.png)

## 特点

### 命令

这些命令可以通过热键菜单绑定到键盘快捷键，或者通过命令菜单运行（Ctrl+P）

**复制选择或文档到剪贴板**：如果有文本被选择，将以HTML格式复制到剪贴板。如果没有选择文本，则复制整个文档。这可能应该是您的默认键盘快捷键。（建议：`Ctrl+Shift+C`）

**复制整个文档到剪贴板**：复制整个文档

**复制当前选择到剪贴板**：仅复制所选文本

### 媒体支持

目前支持以下内容：

- ✅ 图片
- ✅ plantuml
- ✅ diagrams
- ✅ obsidian-tasks
- ✅ obsidian-dataview - 对于大型的dataview块，内容可能不完整
- ✅ Excalidraw - 将渲染为位图可解决在gmail中粘贴的问题
- ✅ Mermaid

### 样式

默认情况下，文档会应用简单的样式。可以通过插件设置来自定义样式表。

- 您可以选择是否嵌入外部链接（http，https）。如果不嵌入（默认），您需要互联网访问才能查看文档，并且链接的图像可能会被下线。如果选择嵌入，您的文档将会更大。
- 可以在设置对话框中自定义或替换样式表。
- 默认情况下，将SVG转换为位图以提高兼容性，但可能会损失一定的质量。如果您知道要粘贴到支持.svg的应用程序中，可以禁用“将SVG转换为位图”设置。
- 可以将代码和标注渲染为HTML表格。这样会使它们在除了Google Docs之外的地方看起来很丑，但在Google Docs中会使文档稍微漂亮一些。

## 实现

该插件将图像引用转换为数据URL，因此HTML中不包含对存储库的引用。

## 已知问题

- 不支持移动设备
- 特殊字段（双冒号属性等）未被移除（前置元数据会被移除）
- 对于大量/大型图片，data-uri 可能会占用大量内存
- 不支持带有块引用的转引（支持带有标题的转引）

还请参阅 GitHub 上的问题部分。

## 安装

在Obsidian设置的社区插件部分中寻找*Copy document as HTML*。

如果有任何问题，请随时评论！

开发

请参阅[Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin)。

## 鸣谢

- Oliver Balfour 的 [obsidian-pandoc](https://github.com/OliverBalfour/obsidian-pandoc) 插件，帮助我解决了一些渲染问题。
- TfTHacker 的 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件，使得测试变得轻松。
- PJ Eby 的 [Hot-reload](https://github.com/pjeby/hot-reload) 插件，使得插件开发变得快速而有趣。
- jkunczik 使得引用标题的转引工作得以实现。




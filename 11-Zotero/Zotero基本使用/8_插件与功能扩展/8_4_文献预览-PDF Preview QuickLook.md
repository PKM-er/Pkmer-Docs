---
uid: 20230817143710
title: 8.4- 文献预览：PDF Preview QuickLook
tags: [zotero]
description: 
author: windingwind
type: other
draft: false
editable: false
modified: 20230825145806
---

# 8.4- 文献预览：PDF Preview QuickLook

## Zotero PDF Preview 插件

[![92f56d73df2357f5a6ddbaef5f8ac1d5_MD5](https://cdn.pkmer.cn/images/202308171546663.gif!pkmer)](https://github.com/windingwind/zotero-pdf-preview/blob/master/image/README/teaser.gif)

在库视图中预览 PDF 附件。

快速方便。不需要任何第三方软件。

主页及下载：[https://github.com/windingwind/zotero-pdf-preview](https://github.com/windingwind/zotero-pdf-preview)

### 使用

预览可以在 Zotero 主窗口的右侧面板中找到。您可以在信息窗格的顶部/底部或预览窗格中预览项目。请参见设置以自定义预览位置。

### 快捷键

- 要在信息窗格中显示/隐藏预览，请使用快捷键 P 或拖动/单击切换栏。
- 要放大或缩小，请按住 ctrl/cmd 并滚动，或按住 ctrl/cmd 与 +/-；
- 要重置缩放，请使用 ctrl/cmd+0。

### 设置

在此处查看设置：菜单栏 ->编辑 ->首选项 ->预览

| **设置** | **描述** | **默认值** |
| --- | --- | --- |
| 启用预览 | Enable to allow the preview behavior. | true |
| 在信息面板中预览 | Enable to show the preview in a split view under 'info' tab. | true |
| 预览位置 | Preview position in the Info Tab | bottom |
| 在独立预览面板中预览 | Enable show the preview in a new tab of right sidebar. | true |
| 在信息/独立预览面板中显示工具 | Enable show the toolbar there. | true |
| 显示注释 | Enable to show annotations of the PDF files. May slow down the preview speed. | false |
| 显示悬停页面样式 | Enable extra style of the hovered page: box shadow and hand cursor. | true |
| 双击预览页面以打开/转跳 PDF | Enable double-click to open/jump to the selected page of PDF. | true |
| 黑暗模式 | Enable to preview PDF files in dark mode. This is a naive dark mode and images color may not be displayed correctly. | false |
| \_ 预览前 N\_ 页 | See [below](https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index) | 10 |
| 预览面板名称 | Set the tab label. | preview |

### 预览页面索引的高级用法

除了直接填写数字（前 N 页）外，支持 python 风格的切片语法，例如 `:3,-4:`（前三页与末四页），`2:5`（第 2-5 页）等。

详见 [https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index](https://github.com/windingwind/zotero-pdf-preview#advanced-usage-of-preview-page-index)

## ZoteroQuickLook 插件

调用外部预览功能（在非 MacOS 系统上依赖第三方软件 QuickLook）。

> [!warning]
> 无法预览 Zotero 内的注释高亮。

 主页及下载：[https://github.com/404neko/ZoteroQuickLookReload](https://github.com/404neko/ZoteroQuickLookReload)

下一篇 [[8_5_笔记增强-Better Notes插件]]
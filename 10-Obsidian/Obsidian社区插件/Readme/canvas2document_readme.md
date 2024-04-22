---
uid: 2024042221330508
title: Obsidian 插件：【Readme】Canvas2Document
tags: ['obsidian插件', 'readme']
description: 将完整的画布转换为长格式文档，将所有卡片、笔记、图片和其他媒体内容整合到一个单独的 markdown 文件中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Canvas2Document

> [!Note] 插件名片
> - 插件名称：Canvas2Document
> - 插件作者：slnsys
> - 插件说明：将完整的画布转换为长格式文档，将所有卡片、笔记、图片和其他媒体内容整合到一个单独的 markdown 文件中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/slnsys/obsidian-canvas2document)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas2document)

## 概述

将完整的画布转换为长格式文档，将所有卡片、笔记、图片和其他媒体内容整合到一个单独的 markdown 文件中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/main/README.md)

---

## Readme(翻译）

下面是 [[canvas2document]] 插件的自述翻译

【机翻】

# 黑曜石 Canvas2Document

![Screencast](https://cdn.pkmer.cn/covers/canvas2document_2_0.gif!pkmer)

> [!IMPORTANT]
> 此插件目前正在被 Obsidian 团队评估，尚未在插件商店中提供。
>
> 要在此预发布状态下安装它：
> * 只需从最新版本（<https://github.com/slnsys/obsidian-canvas2document/releases/tag/1.0.1>）中复制附件 main.js 和 manifest.json 到您的 vault 插件目录中的一个目录
> * 重新加载您的社区插件并
> * 启用 "Canvas2Document" 插件。

使用 Canvas2Document，您可以将任何带有所有内容的画布结构，即卡片、笔记、媒体（图片、YouTube 视频、PDF、网站），从二维表示转换为文档的线性结构。

该插件帮助您将小说或复杂的创业计划的所有元素倾倒到一个文档中，而不必逐个复制所有组件。

该插件读取 [Obsidian](https://obsidian.md/blog/json-canvas/) 的 [JSON Canvas文件格式](https://jsoncanvas.org/)，并获取带有特定元数据的画布中的元素，然后还可以用于在文档中导航和排列这些元素。

画布中的连接通过目标文档中具有相应链接的元数据头部进行复制。

<img src="images/metaheader-doc.png" alt="screencomplex" width="600"/>

# 处理生成的文档

可能需要调整或安排文档，因为 Obsidian Canvas 并不一定像图中那样具有一致的层次结构，如下图所示：

<img src="images/screen20240320090543.png" alt="screencomplex" width="400"/>

但 Obsidian Canvas 也可能看起来像这样，使得从图形到文档结构的简单层次转换变得不可能：

<img src="images/screen20240320090013.png" alt="screensimple" width="400"/>

# 用法

在命令面板中调用“将画布转换为长格式文档”

# 路线图

* 将嵌入文件合并到目标文档中
* 解决方案，用于删除目标文档中元素的导航元数据标头。
* 选择要转换为文档的元素类型的选项，如“仅注释文件”，“无媒体”

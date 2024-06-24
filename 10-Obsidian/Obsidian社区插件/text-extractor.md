---
uid: 2024052908484493
title: Obsidian 插件：Text Extractor
tags: ['数据处理', '文件管理', '图片与PDF', 'obsidian插件']
description: 一个（伴侣）插件，用于帮助从图像（OCR）和PDF中提取文本。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Text Extractor

> [!Note] 插件名片
> - 插件名称：Text Extractor
> - 插件作者：Simon Cambier
> - 插件说明：一个（伴侣）插件，用于帮助从图像（OCR）和 PDF 中提取文本。
> - 插件分类：[' 数据处理 ', ' 文件管理 ', ' 图片与 PDF', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/scambier/obsidian-text-extractor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?text-extractor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scambier/obsidian-text-extractor/master/README.md)

![Text Extractor](https://cdn.pkmer.cn/covers/text-extractor.png!pkmer)

## 概述

Obsidian Text Extractor 是一个用于从图像（OCR）和 PDF 中提取文本的插件。它可以与其他插件一起使用，也可以单独用于快速提取文本。支持的文件类型包括图片（.png，.jpg，.jpeg）和 PDF（.pdf）。插件使用 Tesseract.js 和 pdf-extract 库来提取文本，但这些库并不完美，可能无法处理某些文件。插件需要互联网连接才能工作，但所有处理都在本地完成。插件还具有缓存功能，可以将提取的文本作为本地的小型.json 文件缓存，以便在多台设备间同步使用。插件提供了 API，可以作为其他插件的依赖使用。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




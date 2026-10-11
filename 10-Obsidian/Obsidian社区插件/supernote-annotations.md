---
uid: 1791709370172000
title: 'Obsidian 插件：Supernote Annotations'
tags: ['图片与PDF', '第三方工具集成', '文字处理', 'obsidian插件']
description: 'Convert Supernote .note files to PDF, and stamp .mark annotation layers onto a copy of the original PDF. Optionally index recognized handwriting as searchable Markdown. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Supernote Annotations

> [!Note] 插件名片
> - 插件名称：Supernote Annotations
> - 插件作者：Juan Ferranti
> - 插件说明：Convert Supernote .note files to PDF, and stamp .mark annotation layers onto a copy of the original PDF. Optionally index recognized handwriting as searchable Markdown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/junskix1/obsidian-supernote-annotations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?supernote-annotations)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/junskix1/obsidian-supernote-annotations/master/README.md)



## 概述

**Supernote Annotations** 是一款专为 Obsidian 设计的插件，旨在无缝整合 Supernote 电子墨水屏设备上的笔记与 PDF 标注。

**主要功能**：该插件能将 Supernote 的 `.note` 文件自动转换为 PDF 以便在 Obsidian 中查看；对于已标注的 PDF，它会将独立的 `.mark` 手写图层叠加渲染到原始 PDF 上，实现“所见即所得”。此外，它还能将识别出的手写内容索引为可搜索的 Markdown 文件。

**适用场景**：适合使用 Supernote 进行阅读和手写笔记，并希望通过 WebDAV、Nextcloud 或 USB 等方式将文件同步至 Obsidian 库的用户。

**核心特色**：
1. **非破坏性处理**：严格保持原始文件（PDF 和 .mark）字节级不变，仅生成转换后的副本，确保数据安全。
2. **纯 JS 实现**：无原生代码依赖，无外部服务调用，兼容桌面端与移动端。
3. **双向同步友好**：插件仅监控文件夹变化，不主动同步，完美适配各类文件同步方案。

**使用建议**：
1. 确保通过 WebDAV 或其他方式将 Supernote 中的 `.note` 文件、PDF 及其对应的 `.mark` 文件同步到 Obsidian 库的同一文件夹下。
2. 安装插件后，直接打开转换后的 PDF 或原始 PDF 即可看到手写内容。
3. 若需搜索手写内容，请启用 Markdown 索引功能，生成的索引文件可与其他笔记一同管理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



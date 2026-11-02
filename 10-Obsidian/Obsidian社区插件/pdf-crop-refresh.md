---
uid: 1793625619999000
title: "Obsidian 插件：PDF Crop Refresh"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: "Save PDF rectangles as PNG images and refresh them from their source pages. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Crop Refresh

> [!Note] 插件名片
> - 插件名称：PDF Crop Refresh
> - 插件作者：theluckystrike
> - 插件说明：Save PDF rectangles as PNG images and refresh them from their source pages. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pdf-crop-refresh)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-crop-refresh)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pdf-crop-refresh/master/README.md)



## 概述

PDF Crop Refresh 允许你将本地 PDF 文件中的特定矩形区域保存为 PNG 图片，并嵌入到笔记中。它通过记录源文件路径、页码、坐标及缩放比例，建立图片与源 PDF 的关联。当源 PDF 内容更新后，你可以手动刷新图片，使其重新从源页面渲染，从而保持笔记中图表或表格的时效性，无需手动重新截图。

典型场景包括在研究笔记中引用 PDF 里的数据图表，或在项目复盘文档中嵌入流程图。例如，当你更新了一份包含最新销售数据的 PDF 报告后，只需运行刷新命令，笔记中对应的图表图片就会自动更新为最新内容，而无需重新复制粘贴或调整图片链接。

相比直接截图，该插件的核心优势在于“可追溯性”和“自动化刷新”。它维护一个本地注册表，记录每张裁剪图的源信息，支持批量刷新当前笔记或指定文件夹内的所有图片。此外，Pro 版本提供变更源报告功能，能列出哪些源 PDF 已修改但图片尚未更新，帮助用户快速定位需要刷新的内容。

使用前需注意，该插件仅支持本地 PDF，拒绝远程 URL；且刷新操作是手动的，不会在后台监控文件变化。它不适合需要实时同步 PDF 内容的场景，也不支持密码保护或损坏的 PDF 文件。如果频繁移动或重命名源 PDF 或图片文件，需手动更新注册表或重新创建裁剪，否则刷新会失败。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



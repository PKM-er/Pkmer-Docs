---
uid: 1793625611148000
title: "Obsidian 插件：Compress Image (WebP)"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: "Automatically compresses and converts images to WebP on paste, drop, and upload. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Compress Image (WebP)

> [!Note] 插件名片
> - 插件名称：Compress Image (WebP)
> - 插件作者：Bjorn Clauw
> - 插件说明：Automatically compresses and converts images to WebP on paste, drop, and upload. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bjornclauw/compress-image-webp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?compress-image-webp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bjornclauw/compress-image-webp/master/README.md)



## 概述

Compress Image (WebP) 旨在解决 Obsidian 库中图片体积过大导致的同步缓慢和存储占用问题。它通过拦截粘贴、拖拽及批量上传操作，自动将图片压缩并转换为 WebP 格式。所有处理均在本地通过 Canvas API 完成，无需上传至任何服务器，确保数据隐私安全。该插件不仅处理新插入的图片，还能对库中现有的 PNG、JPG 等旧格式图片进行批量转换，并自动更新内部链接，从而显著降低库的整体体积。

典型使用场景包括日常笔记编辑与库整理。例如，当你从网页复制一张高清截图并粘贴到笔记中时，插件会自动将其压缩为 WebP 并插入链接，避免大文件直接入库。另一个场景是定期维护，你可以运行批量转换命令，一次性将库中所有遗留的 JPG 和 PNG 图片转换为 WebP，系统会生成详细报告，显示节省的空间和转换状态，让库结构更加精简高效。

相比同类插件，其特色在于对特殊文件的精细保护机制。它能自动识别并保留动态 GIF 的动画效果，避免将其错误地压缩为静态图。同时，支持设置“排除文件夹”，确保高分辨率源文件或特定格式的图片保持原样。此外，它具备智能尺寸限制功能，默认将最长边限制在 2000 像素，并在处理时自动剥离 EXIF 元数据，既保证了显示清晰度，又去除了不必要的隐私信息。

使用前需注意，该插件主要面向希望减小库体积的用户。如果你需要保留图片的原始像素精度用于专业后期处理，或者依赖 SVG 矢量图的无损缩放，则不适合使用，因为插件不会处理 SVG 且会进行有损压缩。此外，批量转换虽可取消，但建议先备份库，以防链接重写过程中出现意外。对于已经使用 WebP 或 AVIF 等高效格式的图片，可通过设置跳过重新编码，以节省处理时间。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



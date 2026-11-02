---
uid: 1793625606248000
title: "Obsidian 插件：Attachment Atlas"
tags: ["文件管理", "图片与PDF", "效率工具", "obsidian插件"]
description: "Find duplicate and unreferenced images, inspect references, and recycle images with recoverable changes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Atlas

> [!Note] 插件名片
> - 插件名称：Attachment Atlas
> - 插件作者：gua
> - 插件说明：Find duplicate and unreferenced images, inspect references, and recycle images with recoverable changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/saltcoffee/AttachmentAtlas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-atlas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/saltcoffee/AttachmentAtlas/master/README.md)



## 概述

Attachment Atlas 是一款专注于整理 Obsidian 库中图片附件的工具，核心功能在于识别重复与未引用的图像。它通过扫描库内文件，帮助用户合并完全相同的图片副本，并清理那些未被任何笔记引用的闲置文件。整个过程旨在保持笔记与文件链接的准确性，让附件管理更加有序。

典型使用场景包括清理历史遗留的冗余图片。例如，当你多次粘贴同一张截图时，插件能识别出这些完全相同的副本，保留一份并自动更新其他笔记中的引用路径。另一个场景是定期维护，你可以查看未被引用的图片列表，确认哪些是废弃素材后将其移入回收站，从而释放库空间并减少干扰。

相比其他清理工具，Attachment Atlas 强调操作的安全性与可逆性。所有操作均在本地运行，无需联网或账号，且支持在应用更改前预览具体的文件路径和修改内容。此外，它对 Excalidraw 绘图中的图片提供保护机制，避免误删，并允许用户根据系统设置选择将文件移至系统回收站或库内回收站，以便后续恢复。

使用前需注意，该插件仅支持 PNG、JPEG 和 WebP 格式的静态图片，不支持动态图或其他格式。如果库内存在引用检查不完整的情况，插件会阻止合并或回收操作，需先手动审查。因此，它不适合需要批量处理非图片附件、或希望完全自动化且无需人工确认预览的用户。若你依赖永久删除且无备份习惯，需格外谨慎，因为合并后的引用变更不会自动撤销。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



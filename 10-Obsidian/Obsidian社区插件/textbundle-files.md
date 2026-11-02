---
uid: 1793625622981000
title: "Obsidian 插件：TextBundle Files"
tags: ["文件管理", "图片与PDF", "效率工具", "obsidian插件"]
description: "Imports TextBundle and TextPack files as notes with their images, and exports a note as a TextPack. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TextBundle Files

> [!Note] 插件名片
> - 插件名称：TextBundle Files
> - 插件作者：theluckystrike
> - 插件说明：Imports TextBundle and TextPack files as notes with their images, and exports a note as a TextPack. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/textbundle-files)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?textbundle-files)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/textbundle-files/master/README.md)



## 概述

TextBundle Files 解决了从 Bear、Ulysses 等写作应用迁移内容到 Obsidian 时的格式与资源丢失问题。它核心功能是将 `.textbundle` 文件夹或 `.textpack` 压缩包直接导入为 Obsidian 笔记，同时自动将包内的图片资源提取到附件文件夹，并智能重写笔记中的链接以指向新位置。此外，它支持反向操作，能将当前笔记及其关联附件打包导出为标准的 TextPack 文件，实现双向无缝流转。

典型场景包括从 iA Writer 或 Craft 导出旅行日记，其中包含多张高清照片和 PDF 附件。通过该插件，你可以一次性将这些内容导入 Obsidian，图片会自动归入指定附件目录，笔记内的引用链接也会同步更新，无需手动调整。另一个场景是当你需要分享一篇包含复杂排版的笔记给其他用户时，直接导出为 TextPack，对方即可在支持该格式的应用中完整还原内容。

相比其他导入工具，该插件在安全性与兼容性上表现突出。它严格校验压缩包结构，拒绝包含路径穿越风险或超过大小限制的恶意文件，确保库安全。同时，它智能处理文件名冲突，自动添加后缀避免覆盖，并保留原始链接的编码格式。Pro 版本还增加了批量导入文件夹功能，能生成详细的导入报告，方便追踪每个文件的处理状态，适合管理大量文档的用户。

使用前需注意，该插件主要面向从特定写作应用迁移内容的用户，若你仅使用纯 Markdown 且无附件，可能无需安装。此外，部分高级功能如批量导入和元数据保留需订阅 Pro 版本。插件不会自动覆盖现有文件，若写入失败会将文件移至回收站，建议定期备份。对于不需要跨应用同步或仅处理简单文本的用户，此插件可能显得功能过剩。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



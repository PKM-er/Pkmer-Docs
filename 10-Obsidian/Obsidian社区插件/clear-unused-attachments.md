---
uid: 1793625610908001
title: "Obsidian 插件：Clear Unused Attachments"
tags: ["文件管理", "图片与PDF", "效率工具", "obsidian插件"]
description: "Clear unused images and attachments with folder and file type selection. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clear Unused Attachments

> [!Note] 插件名片
> - 插件名称：Clear Unused Attachments
> - 插件作者：rosswang
> - 插件说明：Clear unused images and attachments with folder and file type selection. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/Clean_unused_attachments_selectable)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clear-unused-attachments)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/Clean_unused_attachments_selectable/master/README.md)



## 概述

Clear Unused Attachments 旨在解决 Obsidian 仓库中未引用附件堆积的问题，核心功能是安全清理闲置的图片与文件。它通过扫描解析链接、Frontmatter、Markdown 及 Canvas 节点，精准识别未被引用的资源。与直接删除不同，该插件在清理前提供选择对话框，允许用户指定目标文件夹和文件类型，并在删除前展示文件列表供逐一确认，确保操作可控且透明。

典型场景包括定期整理大型知识库或清理项目结束后的临时素材。例如，你可以仅针对“附件”文件夹中的 PDF 文档进行清理，避免误删其他目录的文件；或者在整理完一批笔记后，快速清除不再使用的截图。此外，它支持自动清理 `.trash` 文件夹中超过设定天数（默认 60 天）的过期文件，帮助维持仓库的整洁度，无需手动进入回收站逐个删除。

相比同类插件，其特色在于“先选后删”的安全机制和高度可配置性。用户可设置默认排除的文件类型（如图片、HTML、MD），防止因间接引用导致的误删。界面支持中英文自动切换，并提供“所有图片”、“所有文档”等快捷预设按钮，简化操作。文件夹匹配支持包含子文件夹，且扩展了对 ico、tif 等更多图片格式的支持，适应更复杂的文件结构。

使用前需注意，默认排除列表包含常见图片格式，因为 CSS 或插件可能间接引用它们，若需清理图片请手动调整排除设置。`.trash` 自动清理为永久删除，不可恢复，请谨慎设置天数阈值。该插件不适合需要批量重命名附件、自动压缩图片体积或处理非标准链接格式的场景，它专注于“清理”而非“管理”或“优化”文件本身。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



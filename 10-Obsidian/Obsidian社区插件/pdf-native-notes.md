---
uid: 1791709369170000
title: 'Obsidian 插件：PDF to Markdown Native'
tags: ['图片与PDF', '文字处理', '数据处理', '文件管理', 'obsidian插件']
description: 'Convert Vault PDFs into clean Markdown with local text and table extraction, compressed images, optional SVG tables, and safe PDF handling. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF to Markdown Native

> [!Note] 插件名片
> - 插件名称：PDF to Markdown Native
> - 插件作者：Andres Herle Lang
> - 插件说明：Convert Vault PDFs into clean Markdown with local text and table extraction, compressed images, optional SVG tables, and safe PDF handling. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/andyherle/obsidian-pdf-to-markdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-native-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andyherle/obsidian-pdf-to-markdown/master/README.md)



## 概述

**1. 主要功能**
该插件利用 Obsidian 原生引擎，将库内 PDF 转换为干净的 Markdown 文件。支持提取文本、检测并导出表格（可选 SVG 格式）、提取并压缩嵌入图片（支持 WebP/JPEG/PNG），以及保留扫描页为图片。全程本地运行，无需 Python、终端或网络连接。

**2. 适用场景**
适用于希望将 PDF 文档数字化并纳入 Obsidian 知识管理体系的用户。特别适合处理包含文本层和简单表格的 PDF，适合桌面及移动端使用，适合对数据隐私敏感、不希望文件上传至外部服务的场景。

**3. 核心特色**
*   **纯本地安全**：不依赖外部服务，不读取库外文件，不永久删除源文件。
*   **智能处理**：自动压缩图片并限制尺寸，忽略小图标，规范化表格格式，去除 HTML 标签。
*   **灵活预览**：转换前可预览 PDF、渲染后的 Markdown 及源文件，支持保留、移动或归档源 PDF，并自动更新相关笔记链接。
*   **无冗余输出**：生成纯 Markdown，不包含生成的 Frontmatter。

**4. 使用建议**
*   **操作简便**：右键点击 PDF 选择“Convert PDF to Markdown”，或通过命令面板运行。
*   **注意限制**：插件**不支持 OCR**，纯扫描且无文本层的 PDF 无法提取文字；复杂排版或非常规阅读顺序的表格可能需要手动清理。
*   **设置优化**：可在插件设置中调整图片压缩格式、质量及最大尺寸，以平衡文件大小与清晰度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1793625619904001
title: "Obsidian 插件：PaperMark"
tags: ["图片与PDF", "文字处理", "文件管理", "效率工具", "obsidian插件"]
description: "Merge images into PDFs, add searchable OCR text, and create editable bookmarks from papers or scanned books. Local processing by default. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PaperMark

> [!Note] 插件名片
> - 插件名称：PaperMark
> - 插件作者：laginae
> - 插件说明：Merge images into PDFs, add searchable OCR text, and create editable bookmarks from papers or scanned books. Local processing by default. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/laginae/papermark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?papermark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/laginae/papermark/master/README.md)



## 概述

PaperMark 是一款专为 Obsidian 设计的本地 PDF 处理工具，核心功能是将图片合并为 PDF、为扫描页添加可搜索的 OCR 文本层，并自动识别与编辑书签。它默认在本地运行，无需上传文档即可处理扫描件，支持中英文标题检测，能根据字体大小和布局自动提取章节结构，帮助用户将无序的扫描文件转化为结构清晰、内容可检索的数字文档。

典型场景包括处理无书签的学术论文或扫描版书籍。例如，你可以将多张论文截图合并成 PDF，插件会自动识别标题并生成目录；对于扫描版书籍，它能读取印刷目录页，自动校准页码并建立层级书签。处理完成后，你可以预览并手动调整标题层级或页码位置，最终导出带有隐形文本层的新 PDF，既保留原始图像，又支持全文搜索和复制。

相比同类插件，PaperMark 的最大特色是“本地优先”与“可编辑性”。它内置 OCR 模型，无需额外安装 Node.js 或下载依赖，且默认不产生网络请求，保护隐私。此外，它提供精细的书签编辑界面，允许用户撤销操作、加载/保存大纲 JSON，并支持批量导出 ZIP。对于需要高精度处理的场景，它还可选集成 MinerU 服务，但需用户明确确认上传，且费用独立计算。

使用前需注意，插件体积约 17 MB，超过 Obsidian Sync 标准版 5 MB 限制，需在各设备单独安装。本地 OCR 适合清晰印刷体，模糊、倾斜或手写内容可能识别错误，重要引用需对照原图核对。它不适合需要实时云端协作、处理复杂表格布局或依赖移动端快速处理的场景，大文件在移动设备上处理速度可能较慢。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



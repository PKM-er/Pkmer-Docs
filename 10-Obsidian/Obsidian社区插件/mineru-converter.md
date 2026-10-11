---
uid: 1791709368656000
title: 'Obsidian 插件：MinerU Converter'
tags: ['图片与PDF', '文字处理', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Right-click any PDF, Word, PPT, Excel, or image in your vault to convert it to Markdown via the MinerU parse API. Long PDFs are auto-split and merged back into one file, with an images/ sidecar and a run-in-background option. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MinerU Converter

> [!Note] 插件名片
> - 插件名称：MinerU Converter
> - 插件作者：liyifan
> - 插件说明：Right-click any PDF, Word, PPT, Excel, or image in your vault to convert it to Markdown via the MinerU parse API. Long PDFs are auto-split and merged back into one file, with an images/ sidecar and a run-in-background option. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/liyifan2004/obsidian-mineru-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mineru-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/liyifan2004/obsidian-mineru-converter/master/README.md)



## 概述

**MinerU Converter** 是一款基于 MinerU 解析 API 的 Obsidian 插件，旨在将文档高效转换为可编辑的 Markdown 格式。

1. **主要功能**：支持在 Obsidian 库中右键直接转换 PDF、Word、PPT、Excel 及图片文件为 Markdown。
2. **适用场景**：适用于需要整理数字图书馆、提取非结构化文档内容或进行知识管理的用户，特别是面对大量长文档时。
3. **核心特色**：
   - **智能处理长文档**：自动拆分超过 200 页的 PDF 并在转换后合并，解决 API 页数限制。
   - **后台运行**：支持后台转换，不阻塞 Obsidian 操作。
   - **资源管理**：自动创建 `images/` 目录存放提取的图片，保持笔记结构清晰。
   - **高精度解析**：依托 MinerU 强大的 OCR 和版面分析能力，确保转换质量。
4. **使用建议**：
   - 需先在 MinerU 官网申请 API Token 并在插件设置中配置连接。
   - 转换前建议备份原文件，以防意外覆盖或格式差异。
   - 对于加密 PDF 或特殊格式，需确保 MinerU API 支持且网络环境稳定（注意 CDN SSL 等潜在问题）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



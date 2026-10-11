---
uid: 1791709367433000
title: 'Obsidian 插件：Handwritten Notebook Digitizer'
tags: ['自动化与AI', '图片与PDF', '文字处理', 'obsidian插件']
description: 'Turn handwritten pages in any language into structured Markdown notes using the Gemini API. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Handwritten Notebook Digitizer

> [!Note] 插件名片
> - 插件名称：Handwritten Notebook Digitizer
> - 插件作者：Hussain Elemam
> - 插件说明：Turn handwritten pages in any language into structured Markdown notes using the Gemini API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图片与PDF', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hussainelemam/Obsidian-Handwritten-Notebook-digitizer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notebook-digitizer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hussainelemam/Obsidian-Handwritten-Notebook-digitizer/master/README.md)



## 概述

**1. 主要功能**
该插件利用 Google Gemini API，将任意语言的物理手写笔记本页面转化为结构化的 Markdown 笔记。支持识别多语言手写体、混合文本、编程代码、LaTeX 公式及表格，并能自动将手绘流程图转换为 Obsidian 原生的 Mermaid 图表。

**2. 适用场景**
适用于需要数字化纸质笔记的学生、研究人员及开发者。特别适合处理包含复杂数学公式、代码片段或流程图的混合内容笔记，以及需要长期归档手写资料的场景。

**3. 核心特色**
*   **多模态识别**：基于 Gemini 最新模型，精准识别多种脚本及双语混合内容。
*   **图表自动化**：自动检测手绘图表并生成 Mermaid 代码，保持笔记动态性。
*   **无缝连续笔记**：多页扫描可合并为自然连贯的笔记，避免人工分页。
*   **隐私与安全**：使用用户自有的 Gemini API Key，通过 Obsidian SecretStorage 安全存储。
*   **校对辅助**：支持在笔记中嵌入可折叠的原图扫描，便于逐字核对。

**4. 使用建议**
*   **API 配置**：首次使用需在设置或弹窗中输入有效的 Google Gemini API Key。
*   **图片优化**：插件会自动压缩图片至 1920px 并转为 JPEG 以节省空间，建议确保上传前图片清晰。
*   **文件管理**：默认将原图存入笔记目录下的 `scans/` 子文件夹，保持 Vault 整洁；建议开启“可折叠扫描”功能以便后期校对。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



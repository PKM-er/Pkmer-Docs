---
uid: 1791709370977000
title: 'Obsidian 插件：VLMs OCR'
tags: ['自动化与AI', '图片与PDF', '文字处理', '表格', 'obsidian插件']
description: 'Multimodal OCR for Obsidian: extract text, LaTeX math formulas, and tables from images & PDFs, or generate detailed descriptions of charts and diagrams using local or cloud VLMs. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：VLMs OCR

> [!Note] 插件名片
> - 插件名称：VLMs OCR
> - 插件作者：Agostino Cesarano
> - 插件说明：Multimodal OCR for Obsidian: extract text, LaTeX math formulas, and tables from images & PDFs, or generate detailed descriptions of charts and diagrams using local or cloud VLMs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图片与PDF', '文字处理', '表格', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/agostino-code/obsidian-ocr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vlm-ocr)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/agostino-code/obsidian-ocr/master/README.md)



## 概述

**1. 主要功能**
VLMs OCR 是一款多模态 OCR 插件，支持从图片和 PDF 中提取文本、LaTeX 数学公式及表格，并能对图表、流程图生成详细的结构化 Markdown 描述。支持本地离线运行或云端 API 调用。

**2. 适用场景**
适用于需要处理扫描笔记、学术论文、书籍页面、演示文稿及数据图表的用户。特别适合低显存（2GB-4GB）硬件环境，或注重隐私、希望数据完全本地处理的场景。

**3. 核心特色**
*   **智能模式**：自动识别内容类型，智能输出格式化 Markdown、LaTeX 或图表描述。
*   **本地优先**：基于 llama.cpp/Ollama 运行 GLM-OCR 等高效 VLM，支持 100% 本地隐私保护。
*   **低显存优化**：针对低配置 GPU 优化，自动缩放图像以节省资源。
*   **灵活输出**：支持纯文本、公式专用、表格解析及自定义提示词。

**4. 使用建议**
*   **硬件选择**：若显存有限（如 MX450），建议优先使用本地模式并启用自动缩放功能。
*   **模型配置**：新手推荐使用默认的 GLM-OCR (0.9B) 模型，平衡速度与精度。
*   **隐私考量**：敏感文档务必选择本地运行；若需更高精度且无隐私顾虑，可配置 Hugging Face 云端 API。
*   **格式调整**：处理数学公式时，建议单独使用“Formulas Only”模式以确保 LaTeX 兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



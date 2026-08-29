---
uid: 1786577083158000
title: 'Obsidian 插件：TextLens'
tags: ['图片与PDF', '文字处理', '自动化与AI', '编辑工具', 'obsidian插件']
description: '通过ONNX Runtime使用设备端的PaddleOCR对当前笔记中的图片进行OCR识别 —— 无需服务器，也不用API密钥。识别出的文本会直接插入到每张图片下方。 - 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TextLens

> [!Note] 插件名片
> - 插件名称：TextLens
> - 插件作者：nexround
> - 插件说明：通过ONNX Runtime使用设备端的PaddleOCR对当前笔记中的图片进行OCR识别 —— 无需服务器，也不用API密钥。识别出的文本会直接插入到每张图片下方。 - 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图片与PDF', '文字处理', '自动化与AI', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nexround/obsidian-text-lens)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?text-lens)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nexround/obsidian-text-lens/master/README.md)



## 概述

### TextLens插件总结
1. **主要功能**：扫描当前笔记中的图片，使用本地OCR引擎（PaddleOCR v6 via ONNX Runtime）识别图片文字，并将识别结果插入到每张图片下方。
2. **适用场景**：适用于Obsidian桌面版（Windows、macOS、Linux）用户，版本需≥1.7.2，有从笔记图片中提取文字需求的场景。
3. **核心特色**：
    - 本地运行，无需服务器和API密钥，图片不离开本地。
    - 提供三种模型层级，可按需选择。
    - 支持Obsidian和标准Markdown两种图片语法。
    - 可跳过已有OCR结果的图片，支持重新识别替换。
    - 有两种输出格式，且整个批量编辑可一键撤销。
    - 能自动合并换行的OCR文本。
4. **使用建议**：先在设置中完成一次性运行时设置（约40MB下载）。推荐通过社区插件安装，若手动安装需从最新版本下载文件并复制到指定目录。使用时，通过“TextLens: OCR Current Note”命令处理当前文件中的所有图片。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



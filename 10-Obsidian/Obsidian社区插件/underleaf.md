---
uid: 1791709370635000
title: 'Obsidian 插件：Underleaf'
tags: ['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
description: 'Translate paragraphs beneath the original text in Reading view, using your preferred AI service without changing your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Underleaf

> [!Note] 插件名片
> - 插件名称：Underleaf
> - 插件作者：ech0xff
> - 插件说明：Translate paragraphs beneath the original text in Reading view, using your preferred AI service without changing your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ech0xff/underleaf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?underleaf)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ech0xff/underleaf/master/README.md)



## 概述

**主要功能**
Underleaf 是一款 Obsidian 桌面端插件，能在阅读视图下将原文段落下方的内容即时翻译为目标语言。它支持通过快捷键手动翻译/隐藏特定段落，或开启滚动自动翻译功能，且全程不修改原始笔记文件。

**适用场景**
适用于需要双语阅读英文文献、技术文档或外语笔记的用户。特别适合希望在不打断阅读流的情况下，快速理解原文含义，或进行中英对照学习的场景。

**核心特色**
1. **多模型支持**：兼容 OpenAI、Anthropic、Google Gemini 及本地模型（如 Ollama），用户可自由选择 AI 服务。
2. **格式保留**：智能保留行内代码和数学公式，确保技术文档翻译后的可读性。
3. **灵活配置**：支持自定义翻译语言、提示词（Prompt）及 API 地址，提供翻译缓存以节省成本。
4. **非侵入性**：仅在阅读视图显示译文，保持源文件纯净，支持中英文界面切换。

**使用建议**
1. **配置服务**：在设置中选择协议并填入 API Token。若使用本地模型，URL 仅填源地址（如 `http://localhost:11434`），无需包含 `/v1`。
2. **绑定快捷键**：建议为“翻译/隐藏指针下段落”绑定快捷键，方便鼠标悬停时快速操作。
3. **批量处理**：如需翻译整篇笔记，可点击顶部图标开启滚动自动翻译，关闭时会自动取消未完成任务但保留已完成的译文。
4. **自定义提示词**：如需特殊翻译风格，请在设置中修改 Prompt，务必保留 `{{ __TEXT__ }}` 占位符。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



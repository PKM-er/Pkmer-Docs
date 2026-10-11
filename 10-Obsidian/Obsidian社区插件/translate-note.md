---
uid: 1791709370536000
title: 'Obsidian 插件：TranslateNote'
tags: ['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
description: 'Translate a selection or a whole note with any OpenAI-compatible LLM. The translation opens in a side panel for review, so the note only changes when you insert it. YAML front-matter is left intact. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TranslateNote

> [!Note] 插件名片
> - 插件名称：TranslateNote
> - 插件作者：Maggiora Duccio
> - 插件说明：Translate a selection or a whole note with any OpenAI-compatible LLM. The translation opens in a side panel for review, so the note only changes when you insert it. YAML front-matter is left intact. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dmagg/obsidian-llm-translate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?translate-note)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dmagg/obsidian-llm-translate/master/README.md)



## 概述

**1. 主要功能**
TranslateNote 是一款 Obsidian 翻译插件，支持调用任意 OpenAI 兼容的大语言模型，对选中文本或整篇笔记进行翻译。翻译结果默认在侧边栏面板中展示，用户确认无误后点击“插入”才会修改笔记，确保原文安全。

**2. 适用场景**
适用于将英文文章、YouTube 字幕等外部内容剪贴到 Obsidian 后，希望在不离开编辑器的情况下快速阅读中文（或其他语言）版本的场景。特别适合需要对照原文校对、或担心翻译覆盖导致数据丢失的用户。

**3. 核心特色**
*   **安全非破坏性**：采用“侧边栏预览 + 手动插入”机制，避免直接覆盖原文，且具备冲突检测，若笔记在审查期间被修改则拒绝插入。
*   **高度可定制**：目标语言为自由文本输入，支持任意语言；系统提示词可编辑，便于控制语气和专业术语。
*   **灵活配置**：提供 8 种预设服务商及自定义选项，支持快速切换服务商，且自动保留 YAML 前置元数据。
*   **结果可编辑**：在插入前可直接在面板中修正翻译错误。

**4. 使用建议**
*   该插件目前仅支持桌面端（Desktop only），移动端未测试。
*   需配置有效的 OpenAI 兼容 API 密钥。
*   建议利用“可编辑系统提示词”功能，针对特定领域（如法律、医学）优化翻译术语。
*   注意 Obsidian 版本需 >= 1.13.0。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



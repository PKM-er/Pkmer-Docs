---
uid: 1791709365254000
title: 'Obsidian 插件：AI Flashcard Generator'
tags: ['自动化与AI', '学习与教育', '第三方工具集成', '效率工具', 'obsidian插件']
description: '用 Gemini 从笔记生成可自定义的间隔重复闪卡。- 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Flashcard Generator

> [!Note] 插件名片
> - 插件名称：AI Flashcard Generator
> - 插件作者：Tajk19
> - 插件说明：用 Gemini 从笔记生成可自定义的间隔重复闪卡。- 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['自动化与AI', '学习与教育', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tajk19/ai-flashcard-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-flashcard-generator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tajk19/ai-flashcard-generator/master/README.md)



## 概述

**1. 主要功能**
利用 Google Gemini AI 从笔记或选中文本自动生成间隔重复（Spaced Repetition）闪卡。支持生成原子笔记、英语词汇及自定义提示词，生成后提供强制预览界面，允许用户编辑正反面、勾选包含项并查看证据引用，最终保存为兼容 Spaced Repetition 插件的 Markdown 卡片库。

**2. 适用场景**
适用于需要高效记忆知识的场景，如语言学习（特别是中英互译）、专业术语积累、以及将长篇笔记转化为可复习的知识点。适合希望结合 AI 辅助生成与传统间隔重复算法的用户。

**3. 核心特色**
*   **智能生成与审核**：支持自定义 Prompt 变量，具备本地证据匹配、重复/冲突检测及长度警告，确保卡片质量。
*   **双向支持**：英语词汇对保存为原生双向卡片，优化复习效率。
*   **安全与兼容**：采用结构化输出，错误诊断安全（不泄露敏感信息），兼容桌面端与移动端，且仅创建新文件避免覆盖。

**4. 使用建议**
需安装 Obsidian 1.13.0+ 及 Spaced Repetition 插件，并配置 Gemini API Key。建议在生成前明确笔记结构，利用预览界面仔细核对 AI 生成的“证据引用”，因为插件仅辅助生成，不保证内容绝对正确，需人工最终确认。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709370797000
title: 'Obsidian 插件：Vault Assistant'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Chat with an OpenAI-compatible model about your vault. Local RAG, plus apply-gated note create and update. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Assistant

> [!Note] 插件名片
> - 插件名称：Vault Assistant
> - 插件作者：Paul Purcel
> - 插件说明：Chat with an OpenAI-compatible model about your vault. Local RAG, plus apply-gated note create and update. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bigpaulie/obsidian-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-assistant)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bigpaulie/obsidian-assistant/master/README.md)



## 概述

**Vault Assistant** 是一款基于本地 RAG 技术的 Obsidian 聊天插件，允许用户通过 OpenAI 兼容模型（如 OpenAI、OpenRouter 或本地 Ollama）与笔记库进行交互。

**适用场景**：适合注重数据隐私的用户，需在本地检索笔记内容，并希望通过自然语言对话快速查询、创建或更新笔记，且希望完全掌控写入操作。

**核心特色**：
1. **隐私安全**：笔记搜索完全在本地进行，无云端索引或嵌入；仅在聊天时发送必要片段。
2. **灵活配置**：支持自带 API Key，兼容多种模型提供商，包括本地 Ollama。
3. **安全写入**：AI 生成的新建、更新或移动笔记建议需用户手动点击“Apply”确认，防止误操作。
4. **交互友好**：侧边栏聊天支持 Markdown 和 `[[wikilinks]]`，可手动固定笔记上下文。

**使用建议**：安装后需配置 API 密钥并阅读隐私声明。若使用 Ollama，请确保其暴露 `/v1/chat/completions` 接口。建议先启用搜索功能，让模型按需调用 `search_notes`，而非自动注入所有上下文，以提升响应效率与准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



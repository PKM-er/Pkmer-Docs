---
uid: 1791709366966000
title: 'Obsidian 插件：Extreme Editor'
tags: ['自动化与AI', '文字处理', '编辑工具', '第三方工具集成', 'obsidian插件']
description: 'Refine selected text or entire notes with OpenAI-compatible providers, select prompts automatically by folder, and review results before applying changes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Extreme Editor

> [!Note] 插件名片
> - 插件名称：Extreme Editor
> - 插件作者：Extreme
> - 插件说明：Refine selected text or entire notes with OpenAI-compatible providers, select prompts automatically by folder, and review results before applying changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/forget-c/extreme-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?extreme-editor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/forget-c/extreme-editor/master/README.md)



## 概述

**主要功能**
Extreme Editor 是一款基于 LLM 的文本优化插件。它允许用户通过 OpenAI 兼容接口（如 OpenAI、本地模型等）对选中文本或整篇笔记进行润色、改写或优化。

**适用场景**
适用于需要频繁进行文本编辑、润色或格式统一的场景。特别适合拥有结构化知识库的用户，例如根据文件夹类型（如“草稿”、“正式文档”、“代码注释”）自动应用不同的优化策略。

**核心特色**
1. **文件夹智能绑定**：核心亮点在于“文件夹-Prompt”绑定机制。系统会根据当前笔记所在文件夹自动选择预设 Prompt，子文件夹继承父级设置，且最具体的绑定优先级最高，实现自动化上下文感知。
2. **灵活配置**：支持任意 OpenAI 兼容提供商，可自定义 Base URL、API Key、模型及请求头。
3. **安全预览**：修改前可审查 AI 生成的结果，确认无误后再应用，避免误改。
4. **跨平台**：支持桌面端和移动端。

**使用建议**
1. **配置优先**：先在设置中配置好 API 提供商并测试连接。
2. **建立规范**：在“Prompts”标签页创建针对不同写作风格的提示词（如“学术润色”、“口语化改写”）。
3. **绑定文件夹**：在“Folder bindings”中将常用文件夹与对应 Prompt 关联，实现一键智能优化。
4. **谨慎应用**：始终利用“预览”功能检查 AI 输出，确保符合预期后再覆盖原文。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



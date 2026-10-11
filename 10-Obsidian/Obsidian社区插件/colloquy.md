---
uid: 1791709366147000
title: 'Obsidian 插件：Colloquy'
tags: ['自动化与AI', '第三方工具集成', '文字处理', 'obsidian插件']
description: 'Build a knowledge base out of your AI conversations. Each is saved to your vault as markdown, then summarised so the next starts with the context. Supports Ollama, OpenAI, Anthropic, Google, DeepSeek. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Colloquy

> [!Note] 插件名片
> - 插件名称：Colloquy
> - 插件作者：Ibon Escalada Ruiz de Loizaga
> - 插件说明：Build a knowledge base out of your AI conversations. Each is saved to your vault as markdown, then summarised so the next starts with the context. Supports Ollama, OpenAI, Anthropic, Google, DeepSeek. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yoitsrdl/colloquy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colloquy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yoitsrdl/colloquy/master/README.md)



## 概述

**主要功能**
Colloquy 插件旨在将 AI 对话转化为个人知识库。它自动将每次对话保存为 Markdown 文件存入 Obsidian 库中，并在对话结束后自动进行摘要。这些摘要会作为上下文注入到后续的对话请求中，实现跨会话的记忆延续。支持 Ollama、OpenAI、Anthropic、Google 及 DeepSeek 等多种模型提供商。

**适用场景**
适用于需要长期追踪 AI 辅助工作流、研究或创意构思的用户。特别适合那些希望 AI 能“记住”之前讨论背景，从而提供连贯、个性化回答的场景，无需手动复制粘贴历史上下文。

**核心特色**
1. **自动摘要与上下文注入**：对话静默几分钟后，插件自动读取并生成关于“你做了什么”的简短记录，并在下次提问时自动附带该背景。
2. **隐私与成本优化**：自动摘要功能默认使用免费的本地模型（如 Ollama），避免产生额外的 API 费用；同时明确提示，历史上下文会发送给所选的付费提供商。
3. **数据持久化**：对话以标准 Markdown 格式存储，即使插件失效，数据依然可读、可搜索且可链接。

**使用建议**
1. **自定义路径**：建议根据 Vault 结构自定义对话和摘要的存储文件夹。
2. **注意隐私**：若使用付费 API，请意识到历史上下文会被发送，敏感信息需谨慎。
3. **配置本地模型**：为自动摘要功能配置一个小型本地模型，以确保零成本且高效的后台处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



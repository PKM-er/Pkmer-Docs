---
uid: 1791709368152000
title: 'Obsidian 插件：LLM Endpoint Manager'
tags: ['自动化与AI', '第三方工具集成', '安全与隐私', 'obsidian插件']
description: 'One place for your LLM endpoints: URLs, models, capabilities and API tokens in the keychain — shared with other plugins through a small API. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LLM Endpoint Manager

> [!Note] 插件名片
> - 插件名称：LLM Endpoint Manager
> - 插件作者：Johannes Kaindl
> - 插件说明：One place for your LLM endpoints: URLs, models, capabilities and API tokens in the keychain — shared with other plugins through a small API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/llm-endpoint-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?llm-endpoint-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/llm-endpoint-manager/master/README.md)



## 概述

**LLM Endpoint Manager** 是一款 Obsidian 插件，旨在集中管理大语言模型（LLM）的连接配置。

**主要功能**：统一存储 LLM 端点的 URL、模型列表、能力标签及 API 令牌。它通过小型 API 将这些配置共享给其他插件，避免重复设置。

**适用场景**：适用于 Vault 中同时使用多个需要调用 LLM 的插件（如 AI 助手、摘要生成等），且希望简化配置、避免在每个插件中单独输入服务器地址和密钥的情况。

**核心特色**：
1. **安全存储**：API 令牌仅保存在 Obsidian 钥匙串中，绝不写入 `data.json`，提升安全性。
2. **优先级管理**：通过列表顺序定义端点优先级，插件自动选取第一个可用且具备所需能力（如聊天、嵌入、视觉）的端点。
3. **多协议支持**：兼容 OpenAI、Ollama、Automatic1111 及 ComfyUI 等主流协议。
4. **职责分离**：仅负责端点与令牌管理，不涉及具体的提示词或请求逻辑。

**使用建议**：
- 安装后在设置中按优先级排列你的 LLM 端点，并开启“启用”开关。
- 确保其他依赖 LLM 的插件已更新以支持该 API。
- 定期检查端点的“可达性”状态，确保绿色指示灯正常，以便插件能正确调用服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



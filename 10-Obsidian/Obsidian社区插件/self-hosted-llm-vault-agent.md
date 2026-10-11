---
uid: 1791709369863000
title: 'Obsidian 插件：Self-hosted LLM Vault Agent'
tags: ['自动化与AI', '搜索与排序', '第三方工具集成', '文字处理', 'obsidian插件']
description: 'Chat with your notes using your own LLM server (Ollama, vLLM, LM Studio) and let it read, search and write notes, with web search. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Self-hosted LLM Vault Agent

> [!Note] 插件名片
> - 插件名称：Self-hosted LLM Vault Agent
> - 插件作者：jlueschow
> - 插件说明：Chat with your notes using your own LLM server (Ollama, vLLM, LM Studio) and let it read, search and write notes, with web search. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '搜索与排序', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jlueschow/self-hosted-llm-vault-agent)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?self-hosted-llm-vault-agent)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jlueschow/self-hosted-llm-vault-agent/master/README.md)



## 概述

**主要功能**
该插件允许用户通过自托管 LLM 服务器（如 Ollama、vLLM 等）在 Obsidian 侧边栏中与笔记对话。核心功能包括“Vault Agent”，支持 AI 读取、搜索、创建、追加及覆盖笔记内容，并可解析 PDF、DOCX 等文档。此外，还集成了 DuckDuckGo 网页搜索功能，实现本地与网络信息的结合。

**适用场景**
适用于注重隐私、拥有本地算力或局域网 LLM 服务的用户。适合需要利用 AI 辅助整理、检索和生成笔记，同时希望数据完全保留在本地或内网环境，不上传至云端的情况。

**核心特色**
1. **完全自托管**：支持任何兼容 OpenAI API 的本地服务器，数据不出内网，隐私安全。
2. **智能操作**：具备函数调用能力，能直接操作笔记文件。
3. **安全机制**：默认开启写入确认，覆盖操作前提供差异预览（Diff），且无删除功能，防止误操作。
4. **多模态支持**：不仅处理 Markdown，还能读取常见办公文档。

**使用建议**
1. 务必保持“写入前确认”开启，防止 AI 意外覆盖重要内容。
2. 覆盖操作会替换全文，若内容缩减需谨慎确认。
3. 若仅需纯聊天，可在设置中禁用 Vault Agent 功能以简化流程。
4. 确保配置的 LLM 服务器稳定运行，以保障响应速度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



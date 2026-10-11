---
uid: 1791709367652000
title: 'Obsidian 插件：Hybrid Chat'
tags: ['自动化与AI', '搜索与排序', '第三方工具集成', 'obsidian插件']
description: 'Federated, provider-neutral RAG chat over existing Obsidian Hybrid Search MCP services. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hybrid Chat

> [!Note] 插件名片
> - 插件名称：Hybrid Chat
> - 插件作者：Jens Mittelbach
> - 插件说明：Federated, provider-neutral RAG chat over existing Obsidian Hybrid Search MCP services. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '搜索与排序', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jmiba/obsidian-hybrid-chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hybrid-chat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmiba/obsidian-hybrid-chat/master/README.md)



## 概述

**1. 主要功能**
Hybrid Chat 是一款仅限桌面端（Obsidian 1.13+）的插件，提供基于 RAG（检索增强生成）的联邦式聊天功能。它作为轻量级客户端，通过调用现有的 Obsidian Hybrid Search (OHS) MCP 服务进行只读检索，并结合 OpenAI 兼容的模型接口生成回答。

**2. 适用场景**
适用于需要在本地或私有环境中，利用现有知识库进行高效问答的用户。特别适合已部署 OHS 服务，并希望在不额外建立向量索引的情况下，通过自然语言交互获取笔记内容的场景。

**3. 核心特色**
*   **零冗余索引**：不创建向量索引，不读取数据库，完全依赖 OHS 现有的 `search` 和 `read` 工具，确保数据一致性。
*   **隐私与安全**：严格只读模式，不修改笔记；API 密钥通过 Obsidian SecretStorage 安全存储；支持本地模型（如 LM Studio）以保障数据隐私。
*   **提供商中立**：支持任何兼容 OpenAI 接口的服务器，灵活适配本地或远程模型。

**4. 使用建议**
*   **前置准备**：确保已安装并启动 OHS 插件及其 MCP 端点，同时运行一个 OpenAI 兼容的模型服务器。
*   **环境限制**：仅支持 macOS、Windows 或 Linux 桌面版，不支持移动端或 Web 版。
*   **配置要点**：正确配置 OHS 端点 URL 及模型服务器参数；若使用远程模型，务必使用 HTTPS 协议。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



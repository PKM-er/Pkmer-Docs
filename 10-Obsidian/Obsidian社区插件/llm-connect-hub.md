---
uid: 1791709368150000
title: 'Obsidian 插件：LLM Connect Hub'
tags: ['自动化与AI', '第三方工具集成', '社交与社区', 'obsidian插件']
description: 'Connect Discord and Kakeratta to models, RAG, and skills provided by LLM Hub. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LLM Connect Hub

> [!Note] 插件名片
> - 插件名称：LLM Connect Hub
> - 插件作者：TAKESHI MORITA
> - 插件说明：Connect Discord and Kakeratta to models, RAG, and skills provided by LLM Hub. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/takeshy/obsidian-llm-connect-hub)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?llm-connect-hub)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/takeshy/obsidian-llm-connect-hub/master/README.md)



## 概述

**主要功能**
LLM Connect Hub 是一款 Obsidian 插件，用于将 Discord 和 Kakeratta 平台连接到 LLM Hub 提供的模型、RAG（检索增强生成）及技能服务。它支持通过 Discord 私信、提及或指定频道与 AI 交互，并允许针对特定频道切换模型和配置。同时，它能让 Kakeratta 的角色请求利用你本地的 Obsidian 笔记和模型进行回答。

**适用场景**
适合希望在 Discord 社区中直接调用本地 Obsidian 知识库与 AI 模型的用户；以及使用 Kakeratta 进行角色扮演或问答，并需要接入个人 Vault 数据的高级用户。

**核心特色**
1. **多平台集成**：无缝连接 Discord 与 Kakeratta，实现跨平台 AI 交互。
2. **灵活配置**：支持按频道独立设置模型、RAG 和技能。
3. **安全存储**：默认使用 Obsidian SecretStorage 安全存储令牌和密钥。
4. **平滑迁移**：自动从 LLM Hub 内置连接迁移设置，并保留回滚选项。

**使用建议**
1. **前置依赖**：必须安装 Obsidian 1.13.0+（仅桌面端）及 LLM Hub 插件（需支持 public API）。
2. **安装步骤**：推荐从社区插件市场安装，启用后在设置中确认 LLM Hub 为模型提供商。
3. **配置注意**：首次连接会自动迁移旧设置，若需回滚，请禁用本插件并在 LLM Hub 中重新启用旧连接。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



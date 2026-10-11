---
uid: 1791709365277000
title: 'Obsidian 插件：AI Vault Assistant'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Vault Assistant

> [!Note] 插件名片
> - 插件名称：AI Vault Assistant
> - 插件作者：陶鑫旺
> - 插件说明：
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/1716775457damn/obsidian-ai-vault-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-vault-assistant)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/1716775457damn/obsidian-ai-vault-assistant/master/README.md)



## 概述

**AI Vault Assistant** 是一款连接 cc-switch 本地代理与 Obsidian 的 AI 助手插件。

**主要功能**：通过本地代理实现免 API Key 的 AI 对话，支持读取全库文件、管理插件与命令、推荐并安装社区插件，以及经确认后修改插件配置。

**适用场景**：适合需要自动化整理笔记、构建双链网络（MOC）、分析全库结构，或希望让外部 Agent（如 Codex）通过 MCP 协议直接操作 Obsidian 库的高级用户。

**核心特色**：
1. **零配置接入**：自动探测 cc-switch 代理，支持 189+ 模型及流式输出。
2. **生态互通**：内置 Skills 扫描机制，并开放本地 MCP 服务（15 个工具），允许外部 AI Agent 安全调用库内读写、搜索及配置修改功能。
3. **安全可控**：所有写操作（如改配置、装插件）均需用户显式确认，支持 Diff 预览。

**使用建议**：
1. 仅限桌面端使用，需确保 cc-switch 本地代理已启动。
2. 若接入 Codex，请复制插件设置中的 MCP 配置至 `~/.codex/config.toml`，并注意写操作需传入 `confirm: true` 参数。
3. 建议定期备份，因 AI 可能修改文件结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



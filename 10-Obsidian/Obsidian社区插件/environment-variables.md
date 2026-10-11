---
uid: 1791709366781000
title: 'Obsidian 插件：Environment Keys'
tags: ['安全与隐私', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Store API tokens and environment variables encrypted, reference them in notes by key, and let AI agents use them in requests without ever seeing the values. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Environment Keys

> [!Note] 插件名片
> - 插件名称：Environment Keys
> - 插件作者：Emanuell
> - 插件说明：Store API tokens and environment variables encrypted, reference them in notes by key, and let AI agents use them in requests without ever seeing the values. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuellcarvalhopires/obsidian-environment-variables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?environment-variables)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuellcarvalhopires/obsidian-environment-variables/master/README.md)



## 概述

**插件名称：Environment Keys**

1. **主要功能**：在 Obsidian 库中加密存储 API 令牌及环境变量。笔记中仅通过密钥（如 `{{basic:JIRA_ACME}}`）引用敏感值，插件在发起 HTTP 请求的最后时刻自动替换为真实值。同时，它将 Obsidian 库转化为本地 MCP 服务器，允许 AI 代理调用笔记中定义的 API 工具。
2. **适用场景**：适用于使用 Claude Code、Cursor、Codex 等 AI 代理进行开发或自动化任务，且需要频繁调用外部 API 但希望保护密钥安全的用户。
3. **核心特色**：
   - **安全隔离**：AI 代理永远无法直接看到敏感值的明文，仅能引用密钥，防止数据泄露。
   - **本地运行**：所有处理均在本地完成，无外部服务介入，隐私性极高。
   - **MCP 集成**：将笔记转化为 AI 可执行的工具定义，执行前需用户授权，实现“笔记即工具”。
4. **使用建议**：适合注重隐私的开发者和知识工作者。建议将常用 API 配置和工具描述整理在笔记中，利用 MCP 功能让 AI 代理直接读取并执行，同时确保只授权信任的网站接收解密后的请求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



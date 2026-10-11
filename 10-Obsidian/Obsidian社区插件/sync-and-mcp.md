---
uid: 1791709370191000
title: 'Obsidian 插件：Sync and MCP'
tags: ['安全与隐私', '备份与恢复', '自动化与AI', '第三方工具集成', 'obsidian插件']
description: 'End-to-end encrypted sync of your vaults through a self-hosted server, plus an MCP endpoint that lets AI assistants read, search and suggest edits to the notes you allow. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sync and MCP

> [!Note] 插件名片
> - 插件名称：Sync and MCP
> - 插件作者：Stefan
> - 插件说明：End-to-end encrypted sync of your vaults through a self-hosted server, plus an MCP endpoint that lets AI assistants read, search and suggest edits to the notes you allow. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '自动化与AI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nejroseld/sync-and-mcp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-and-mcp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nejroseld/sync-and-mcp/master/README.md)



## 概述

**1. 主要功能**
该插件提供端到端加密的笔记库同步服务，支持多设备、多库管理。同时集成 MCP 端点，允许 AI 助手（如 Claude）在授权范围内读取、搜索笔记，并建议符合规则的编辑修改。

**2. 适用场景**
适用于需要跨平台（Windows/macOS/Linux/Android/iOS）安全同步 Obsidian 笔记的用户，特别是希望利用 AI 辅助整理笔记、检索信息或生成内容，且对数据隐私有较高要求的场景。

**3. 核心特色**
*   **隐私安全**：同步文件在本地加密后上传，服务器仅存储密文；AI 访问默认关闭，需手动配置规则才发布明文。
*   **灵活控制**：支持按文件夹或笔记粒度授权 AI 访问；AI 编辑仅在规则允许且无冲突时本地应用，绝不覆盖用户文件。
*   **自托管架构**：依赖自托管后端服务器，支持管理员邀请制及多设备令牌管理。

**4. 使用建议**
需自行部署或加入已运行的 `sync-and-mcp-backend` 服务器。建议先熟悉隐私模型，明确区分“加密同步”与“明文 AI 发布”的差异，谨慎配置 AI 访问规则，确保仅暴露必要笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



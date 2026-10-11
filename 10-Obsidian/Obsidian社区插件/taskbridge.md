---
uid: 1791709370333000
title: 'Obsidian 插件：TaskBridge'
tags: ['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
description: 'Manage Google Tasks from a side panel in Obsidian. Two-way sync with Google Tasks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TaskBridge

> [!Note] 插件名片
> - 插件名称：TaskBridge
> - 插件作者：kafaw
> - 插件说明：Manage Google Tasks from a side panel in Obsidian. Two-way sync with Google Tasks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/enl69/Obsidiantask)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?taskbridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/enl69/Obsidiantask/master/README.md)



## 概述

**TaskBridge 插件总结**

**主要功能**
TaskBridge 允许用户在 Obsidian 的侧边栏中直接管理 Google Tasks。其核心能力在于实现与 Google Tasks API 的**双向同步**，确保笔记中的任务状态与 Google 云端数据实时一致，无需手动切换平台。

**适用场景**
主要适用于需要同时使用 Obsidian 进行知识管理和 Google Tasks 进行日程规划的用户。特别适合依赖 Google 生态系统（如 Gmail、Calendar）且希望将任务嵌入笔记工作流的场景。注意，该插件目前仅支持**桌面端**运行，因为 OAuth 认证依赖 Node.js 本地 HTTP 服务器。

**核心特色**
1. **原生集成体验**：直接在 Obsidian 侧边栏操作，无需离开笔记环境。
2. **无缝双向同步**：修改任务状态即时同步至 Google，反之亦然。
3. **标准化认证**：通过标准的 Google OAuth 流程连接账户，保障数据安全。

**使用建议**
1. **前置准备**：使用前需按照 `docs/oauth-setup.md` 指南在 Google Cloud Console 创建 OAuth 凭证并激活插件。
2. **环境限制**：请勿在移动端使用，因 OAuth 回环机制依赖桌面端 Node 环境。
3. **版本状态**：当前处于开发早期阶段（Phase 0），建议先在小范围笔记中测试，并留意后续更新以完善功能稳定性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



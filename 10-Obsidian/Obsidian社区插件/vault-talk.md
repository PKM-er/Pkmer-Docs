---
uid: 1791709370886000
title: 'Obsidian 插件：Vault Talk'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Speak or type to your vault. Chat via Mistral, Ollama, or LM Studio. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Talk

> [!Note] 插件名片
> - 插件名称：Vault Talk
> - 插件作者：Jonas Wolber
> - 插件说明：Speak or type to your vault. Chat via Mistral, Ollama, or LM Studio. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/prgrmmrjns/vault-talk)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-talk)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/prgrmmrjns/vault-talk/master/README.md)



## 概述

**Vault Talk** 是一款将 Cursor 集成到 Obsidian 的桌面端插件，旨在打造“Jarvis”般的智能笔记助手。

**主要功能**
支持通过文字或语音与笔记库交互。启用“编辑文件”权限后，AI 可列出、读取、创建及编辑 Markdown 文件（严禁删除）。用户可附加文件、选择模型（如 Grok, Sonnet 等）并调整思考深度，AI 生成的计划经确认后直接写入笔记。

**适用场景**
适用于需要高效管理每日任务、整理笔记或进行知识创作的桌面用户。特别适合希望借助 AI 自动化处理笔记内容、记录灵感或执行日常规划的场景。

**核心特色**
1. **原生 Cursor 体验**：直接调用 Cursor 账户下的多种大模型，支持 Thinking 和 Fast 模式切换。
2. **语音交互**：集成 Grok Voice，支持语音转文字及直接口述录入。
3. **安全写入**：AI 仅在用户确认计划后执行写入操作，且具备“只增不删”的安全机制。
4. **可定制性**：通过 `Jarvis.md` 文件自定义 AI 语气及指令模板。

**使用建议**
1. 需配置 Cursor API Key（环境变量或 .env 文件）。
2. 注意隐私：聊天数据发送至 Cursor，语音数据发送至所选语音服务商，请勿在敏感库中开启写入权限。
3. 仅支持桌面端，社区安装需确保本地包含 `@cursor/sdk` 依赖。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



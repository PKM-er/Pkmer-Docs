---
uid: 1791709365225000
title: 'Obsidian 插件：Agent Sessions'
tags: ['自动化与AI', '编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: '在终端标签页中运行 Claude Code、Codex 和 OpenCode 会话，支持会话列表、用量分析，并配有守护进程以保持会话持续运行。- 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Sessions

> [!Note] 插件名片
> - 插件名称：Agent Sessions
> - 插件作者：Kaz Namba
> - 插件说明：在终端标签页中运行 Claude Code、Codex 和 OpenCode 会话，支持会话列表、用量分析，并配有守护进程以保持会话持续运行。- 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['自动化与AI', '编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kulikala/obsidian-agent-sessions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-sessions)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kulikala/obsidian-agent-sessions/master/README.md)



## 概述

**主要功能**
Agent Sessions 是一款专为桌面端（macOS/Linux/Windows）设计的 Obsidian 插件，允许用户在笔记旁直接运行 Claude Code、Codex 和 OpenCode 等 AI 编码代理。它提供统一的会话管理界面，支持启动新会话、在标签页中执行 CLI 命令，并实时监控每个会话的状态、模型使用情况及预估成本。

**适用场景**
适用于需要在 Obsidian 知识库中频繁调用 AI 进行代码生成、调试或文档处理的开发者。特别适合需要同时管理多个 AI 任务、监控 API 用量限制，并希望将 AI 输出直接链接到笔记内容的用户。

**核心特色**
1. **集成终端体验**：AI 代理以原生标签页形式运行，保留完整的 CLI 功能（如斜杠命令、MCP 服务器支持），且输出中的 Vault 路径可直接点击跳转。
2. **智能会话管理**：按“类别：名称”分组会话，清晰展示 5 小时/7 天窗口内的重置时间及当前速率下的限额预警。
3. **本地成本分析**：基于本地文件自动估算费用，无需额外配置即可掌握各代理的使用成本。

**使用建议**
建议用户利用“类别：名称”的命名规范来组织会话，以便在管理面板中快速检索。同时，定期查看用量窗口提示，避免在接近限额时中断关键任务。由于该插件未经 Obsidian 官方人工审核，建议仅用于非生产环境或做好数据备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



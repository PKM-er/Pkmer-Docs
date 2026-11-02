---
uid: 1793625605559001
title: "Obsidian 插件：Agent Manager"
tags: ["自动化与AI", "第三方工具集成", "编程与脚本", "效率工具", "obsidian插件"]
description: "Run Claude Code, Codex, or Antigravity in a terminal inside Obsidian. Start a session from any note, and keep every session listed, resumable, and saved. macOS only for now. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Manager

> [!Note] 插件名片
> - 插件名称：Agent Manager
> - 插件作者：Matt Maiorana
> - 插件说明：Run Claude Code, Codex, or Antigravity in a terminal inside Obsidian. Start a session from any note, and keep every session listed, resumable, and saved. macOS only for now. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mattmaiorana/agent-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mattmaiorana/agent-manager/master/README.md)



## 概述

Agent Manager 允许你在 Obsidian 内部直接运行 Claude Code、Codex 或 Antigravity 等 AI 代理终端。它解决了在笔记软件中调用外部 AI 工具时上下文割裂的问题，核心功能是将 AI 会话与笔记库深度整合。每个会话不仅能在标签页中实时交互，还会自动保存为 Markdown 笔记，确保对话记录可搜索、可链接，并长期保留在库中，无需依赖 CLI 自身的临时历史。

典型场景包括从任意笔记直接发起针对该笔记内容的 AI 会话，或进行每日固定的 AI 对话。例如，当你阅读一篇技术文档时，可一键启动会话让 AI 基于该文档内容回答问题；或者通过“Daily Chat”功能，每天自动恢复或开启一个新的对话窗口，保持工作流的连续性。此外，你还可以将笔记或文件拖入终端，快速引用路径，实现无缝的信息传递。

相比其他插件，其特色在于对会话生命周期的精细管理。侧边栏清晰区分置顶与最近会话，支持跨 CLI 的“继续会话”功能，允许在不同 AI 工具间迁移上下文或分叉对话。独特的“Attach to a ticket”功能可将会话关联至特定任务，而可选的 Agent Profiles 则能根据工作或个人场景隔离指令与参考文件，无需复杂的文件夹布局即可实现多场景管理。

使用前需注意，该插件目前仅支持 macOS 桌面版，且需预先安装 Python 3.8+ 及至少一个 AI CLI 工具。它不适合需要跨平台（如 Windows 或 Linux）使用的用户，也不适合希望完全脱离终端交互、仅通过图形界面操作 AI 的场景。此外，虽然提供了实验性的库设置向导，但核心操作仍依赖终端交互，若你追求零命令行体验，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



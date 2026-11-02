---
uid: 1793625605545000
title: "Obsidian 插件：Agent Deck"
tags: ["自动化与AI", "第三方工具集成", "任务管理", "导航与状态栏", "obsidian插件"]
description: "Track Claude Code, Codex, WorkBuddy and DeepSeek Harness from Obsidian; delegate with a command; keep agent status in the macOS menu bar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Deck

> [!Note] 插件名片
> - 插件名称：Agent Deck
> - 插件作者：马自立
> - 插件说明：Track Claude Code, Codex, WorkBuddy and DeepSeek Harness from Obsidian; delegate with a command; keep agent status in the macOS menu bar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '任务管理', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/obsidian-agent-deck)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-deck)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/obsidian-agent-deck/master/README.md)



## 概述

Agent Deck 将分散在 Claude Code、Codex、WorkBuddy 和 DeepSeek Harness 等客户端中的 AI 智能体会话，统一汇聚到 Obsidian 的侧边栏面板中。它让你能一眼看清哪个智能体正在工作、哪个在等待指令，以及每个任务的当前进度。核心功能是通过拖拽操作，将笔记中的具体任务行与智能体会话绑定，实现从编辑器直接委派任务，并让执行结果自动回写到同一行，使计划与执行记录合二为一。

典型场景如：你在笔记中列出一个待办事项，只需将其拖拽到面板中的 Claude Code 卡片上，即可后台启动会话执行任务；或者将正在运行的会话卡片拖拽到笔记的某一行，该行便会显示实时进度条和状态标签。当你在客户端中归档会话后，笔记中对应的任务行会自动标记为“DONE”并记录耗时，无需手动更新状态。

相比同类插件，Agent Deck 的特色在于“行级绑定”机制：它不侵入所有列表项，仅在被绑定的行末端显示进度胶囊，避免界面杂乱。此外，它支持 macOS 菜单栏状态显示，并提供了分层模型选择器，允许在委派时指定模型、努力程度和模式。作为 Nautilus Spiral 生态的一部分，它还能与后者无缝协作，避免进度条重复显示。

使用前需注意，该插件主要依赖本地会话日志，因此仅支持 macOS 系统下的特定终端环境。目前，通过拖拽在终端中启动交互式 CLI 会话的功能仍存在已知 Bug，仅经过 Tern + Claude Code 的完整验证，其他终端或 Codex CLI 可能出现会话无法回绑或卡在信任提示的问题。如果你不需要跨客户端的统一视图，或主要使用非 macOS 系统，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



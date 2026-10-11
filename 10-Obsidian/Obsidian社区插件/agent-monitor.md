---
uid: 1791709365223000
title: 'Obsidian 插件：Agent Monitor'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: '在 macOS 上监控本地的 Codex、Claude Code 和 WorkBuddy 项目、会话、进程及服务。 - 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Monitor

> [!Note] 插件名片
> - 插件名称：Agent Monitor
> - 插件作者：zack
> - 插件说明：在 macOS 上监控本地的 Codex、Claude Code 和 WorkBuddy 项目、会话、进程及服务。 - 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zackzhangkai/obsidian-agent-monitor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-monitor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zackzhangkai/obsidian-agent-monitor/master/README.md)



## 概述

**插件名称**：Agent Monitor

**主要功能**：这是一个专为 macOS 设计的 Obsidian 桌面仪表盘，用于集中监控本地运行的 Codex、Claude Code 和 WorkBuddy 智能体项目。它能自动发现并展示近期的会话记录、相关进程 ID、工作目录及 TCP 监听服务状态。

**适用场景**：适用于在 macOS 环境下同时运行多个 AI 智能体项目的开发者。当需要在一个统一界面中查看不同智能体的工作状态、排查后台服务或快速定位特定项目会话时，该插件尤为高效。

**核心特色**：
1. **多维监控**：不仅显示会话，还关联进程与网络服务，提供“证据链”式的状态展示。
2. **智能交互**：支持通过本地链接直接打开 Codex/WorkBuddy 会话，或一键复制 Claude Code 的恢复命令。
3. **严谨状态**：明确区分“响应结束”与“项目验收”，无明确证据的状态标记为“未确认”，避免误导。
4. **实时同步**：每 30 秒自动刷新，支持手动刷新及深浅色主题。

**使用建议**：
1. **环境要求**：仅限 macOS，需 Obsidian 1.13.7+ 及 Python 3.9+。
2. **安装方式**：目前需从 GitHub Releases 手动下载文件至插件目录，尚未上架社区目录。
3. **配置提示**：若 Python 路径非默认，需在设置中手动指定绝对路径。
4. **数据范围**：默认展示近 14 天、每个来源最多 300 条记录，适合日常轻量级监控。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



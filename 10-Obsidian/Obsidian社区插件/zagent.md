---
uid: 1793625624961000
title: "Obsidian 插件：ZAgent"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Launch local AI agents with the current Markdown note as context. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ZAgent

> [!Note] 插件名片
> - 插件名称：ZAgent
> - 插件作者：haibao
> - 插件说明：Launch local AI agents with the current Markdown note as context. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gamesheep/ZAgent)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zagent)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gamesheep/ZAgent/master/README.md)



## 概述

ZAgent 是一款专为 Obsidian 设计的本机 AI Agent 启动器，旨在解决在笔记编辑过程中调用本地 AI 工具流程繁琐的问题。它的核心功能是让你无需离开 Obsidian，即可直接启动 Claude Code、Codex、Gemini CLI 或 OpenCode 等本地代理。插件会自动获取当前 Markdown 笔记的绝对路径，并将其作为上下文传递给 Agent，实现从笔记内容到 AI 交互的无缝衔接，让你能基于当前文档快速发起优化、排版或摘要等任务。

典型的使用场景包括：当你正在撰写一篇长文时，希望快速优化其逻辑和表达，只需在插件界面选择“优化内容”，点击启动后，Agent 终端会自动打开并读取该笔记，你只需在终端中确认或微调指令即可开始工作。另一个场景是整理杂乱的技术文档，你可以选择“只调整排版”，Agent 会在保留正文、代码块和链接的前提下，自动修正 Markdown 布局，极大提升文档的可读性。

相比其他仅能发送文本片段的插件，ZAgent 的特色在于它直接调用系统已安装的 CLI 工具，而非依赖云端 API。这意味着它不内置模型服务，也不收集遥测数据，隐私性更高。此外，它支持自定义 Agent 配置，允许用户接入其他接收提示词参数的命令行工具，并能在 Windows、macOS 和 Linux 上自动适配不同的终端环境，确保中文、引号等多行指令在传递过程中不丢失。

使用前需注意，ZAgent 本身不安装或登录任何 AI 服务，你必须先在系统中独立安装并配置好对应的 CLI 工具。该插件仅作为启动器，不直接修改笔记内容，所有变更由 Agent 在终端中执行后同步回 Obsidian。因此，它不适合那些希望完全在 Obsidian 界面内完成 AI 对话、或尚未安装任何本地 AI 命令行工具的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



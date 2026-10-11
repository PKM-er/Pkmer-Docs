---
uid: 1791709366664000
title: 'Obsidian 插件：Duet'
tags: ['自动化与AI', '第三方工具集成', '编辑工具', 'obsidian插件']
description: 'Work with Claude Code or Codex in your notes. Mention an agent on a line, or chat in a conversation note. You see the agent edit the note live while you type. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Duet

> [!Note] 插件名片
> - 插件名称：Duet
> - 插件作者：Nathan Aday
> - 插件说明：Work with Claude Code or Codex in your notes. Mention an agent on a line, or chat in a conversation note. You see the agent edit the note live while you type. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nathanaday/obsidian-duet)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?duet)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nathanaday/obsidian-duet/master/README.md)



## 概述

**Duet** 是一款将 Claude Code 或 Codex 智能体集成到 Obsidian 笔记中的插件，实现人与 AI 在笔记内的实时协同编辑。

**主要功能**：支持在笔记任意行通过 `@claude` 或 `@codex` 提及智能体，AI 会在该行下方流式输出回答或执行任务。它允许 AI 直接编辑笔记内容，用户可实时看到 AI 的光标移动和修改过程，同时保证用户自身的输入不丢失。此外，支持创建“对话笔记”，将完整的交互记录（包括工具调用）保存为 Vault 中的永久笔记。

**适用场景**：适用于需要利用 AI 进行笔记摘要、结构重组、内容生成或代码辅助的场景，特别适合希望摆脱终端限制、直接在文档编辑环境中与 AI 协作的用户。

**核心特色**：
1. **实时协同**：像共享文档一样，用户与 AI 同时编辑同一笔记，视觉反馈直观。
2. **零配置成本**：直接复用本地已安装的 Claude Code 或 Codex CLI 及其登录状态，无需额外 API Key。
3. **原生集成**：回答以 Callout 形式嵌入笔记，对话可持久化为笔记，无缝融入 Obsidian 工作流。

**使用建议**：
1. 确保 Obsidian 版本为 1.13+（桌面端），并预先在终端安装且登录好 `claude` 或 `codex` CLI。
2. 在插件设置中启用 Duet。
3. 在笔记中新行输入 `@claude [指令]` 或 `@codex [指令]` 并回车即可触发。
4. 对于长任务，建议开启对话笔记以保留完整上下文。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365714000
title: 'Obsidian 插件：BuddyBridge Deep'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'An unofficial bridge for DeepSeek Harness via the Agent Client Protocol (ACP): multi-turn chat, streaming responses, thinking blocks and tool calls. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：BuddyBridge Deep

> [!Note] 插件名片
> - 插件名称：BuddyBridge Deep
> - 插件作者：BuddyBridge
> - 插件说明：An unofficial bridge for DeepSeek Harness via the Agent Client Protocol (ACP): multi-turn chat, streaming responses, thinking blocks and tool calls. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ben4202121/buddybridge-deep)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?buddybridge-deep)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ben4202121/buddybridge-deep/master/README.md)



## 概述

**1. 主要功能**
BuddyBridge Deep 是一款非官方 Obsidian 插件，通过 ACP 协议桥接 DeepSeek Harness（DSH）。它支持在 Obsidian 内直接进行多轮流式对话，展示可折叠的思考过程与工具调用卡片，并具备上下文注入、会话分叉及断链自动重连能力。

**2. 适用场景**
适用于已部署 DeepSeek Harness 且希望将 AI 能力无缝集成到笔记工作流中的用户。特别适合需要利用当前笔记上下文进行智能问答、代码辅助或复杂逻辑推理的场景。

**3. 核心特色**
*   **零配置复用**：自动读取 DSH Web 的 API Key 和地址，无需手动重复配置。
*   **深度集成**：支持注入笔记路径、全文或 Vault 根路径作为上下文，实现精准问答。
*   **交互体验**：提供双语界面、工具调用权限弹窗及上下文占用指示，支持会话导出/导入。
*   **稳定连接**：具备指数退避自动重连机制，保障长会话稳定性。

**4. 使用建议**
*   **前置准备**：确保本机已安装 DeepSeek Harness 并运行 `setup-acp.ps1` 脚本装配 ACP profile。
*   **安装步骤**：将插件文件放入 `.obsidian/plugins/` 目录并启用。
*   **注意**：该插件未经 Obsidian 官方审核，请谨慎使用；若遇连接问题，请检查 ACP 启动命令是否正确指向 `bin.js`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



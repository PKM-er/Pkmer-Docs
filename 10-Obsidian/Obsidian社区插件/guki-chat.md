---
uid: 1791709367401000
title: 'Obsidian 插件：GuKi Chat'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Chat with Claude Code inside your vault - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GuKi Chat

> [!Note] 插件名片
> - 插件名称：GuKi Chat
> - 插件作者：e-mre
> - 插件说明：Chat with Claude Code inside your vault - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/e-mre/guki-obsidian-chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?guki-chat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/e-mre/guki-obsidian-chat/master/README.md)



## 概述

**1. 主要功能**
GuKi Chat 允许用户在 Obsidian 库内直接通过固定侧边栏与 Claude Code 进行交互。它无需切换至终端，即可让 AI 协助整理文件夹、更新项目笔记或进行思维梳理。

**2. 适用场景**
适用于将 Obsidian 作为“第二大脑”的用户，特别是在需要频繁结合 AI 辅助进行知识管理、项目规划或代码重构时。仅支持桌面版 Obsidian，且需本机已安装并登录 Claude Code。

**3. 核心特色**
该插件并非独立的弱上下文助手，而是直接调用库根目录下的真实 `claude` CLI 子进程。这意味着用户在终端中配置的 `CLAUDE.md`、Hooks、MCP 服务器及持久化记忆等高级功能在插件中完全生效，确保了上下文的一致性与完整性。

**4. 使用建议**
安装后插件默认自动打开聊天面板，也可通过命令面板手动唤起。建议用户确保本地 Claude Code 环境配置完善，以充分利用其继承的终端级能力。由于涉及子进程，移动端不支持，请仅在桌面端使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



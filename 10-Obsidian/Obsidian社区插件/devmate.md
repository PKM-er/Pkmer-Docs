---
uid: 1791709366512000
title: 'Obsidian 插件：DevMate'
tags: ['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Connect your vault to the DevMate local-first MCP workspace gateway. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DevMate

> [!Note] 插件名片
> - 插件名称：DevMate
> - 插件作者：zhongli liu
> - 插件说明：Connect your vault to the DevMate local-first MCP workspace gateway. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kukutx/DevMate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?devmate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kukutx/DevMate/master/README.md)



## 概述

**1. 主要功能**
DevMate 是一个基于本地优先（Local-first）的 MCP 工作区网关插件。它允许 AI 聊天窗口直接连接并操作你的本地计算机，支持读取、搜索和编辑项目文件，执行命令与测试，使用 Git，查看编辑器报错，甚至调用本地安装的编码代理。

**2. 适用场景**
适用于希望将主流 AI 助手（如 ChatGPT、Claude）与本地开发环境无缝集成的开发者。无论是通过 VS Code、Obsidian 还是命令行，只要连接同一运行时，即可实现跨平台、跨客户端的统一开发体验。

**3. 核心特色**
*   **本地隐私安全**：数据不经过第三方服务器中转，云端客户端通过用户自有的隧道（如 Cloudflare、SSH）连接，端到端验证路由。
*   **细粒度权限控制**：用户可自主决定共享哪些文件夹及读写权限，AI 客户端只能缩小权限范围，无法越权。
*   **统一运行时**：操作系统保证每台机器仅有一个运行时实例，所有入口共享同一状态，避免冲突。

**4. 使用建议**
建议开发者配置好本地隧道以连接云端 AI 服务，并在连接前仔细设定文件夹的读写权限以保护敏感凭证。注意不同 AI 订阅计划对文件修改和命令执行的支持程度不同，需确认当前套餐权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



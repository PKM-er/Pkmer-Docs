---
uid: 1791709370012000
title: 'Obsidian 插件：Sir Scribbles'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Chat with a local ACP agent (Kiro CLI) in the sidebar, with note selections as context. macOS only. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sir Scribbles

> [!Note] 插件名片
> - 插件名称：Sir Scribbles
> - 插件作者：cabra-arretado
> - 插件说明：Chat with a local ACP agent (Kiro CLI) in the sidebar, with note selections as context. macOS only. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cabra-arretado/sir-scribbles)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sir-scribbles)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cabra-arretado/sir-scribbles/master/README.md)



## 概述

**Sir Scribbles** 是一款专为 macOS 版 Obsidian 设计的本地 ACP 智能体聊天插件，主要功能是在侧边栏通过 Kiro CLI 与 AI 进行交互，并支持将选中的笔记内容作为上下文。

**适用场景**：适合需要在 Obsidian 中直接调用本地 AI 代理处理笔记、代码或文件任务的 macOS 用户，特别是已安装并登录 Kiro 账户的开发者或知识工作者。

**核心特色**：
1. **本地运行**：插件本身不联网，仅启动本地 Kiro 进程，对话内容仅存储在内存中，无遥测或广告。
2. **上下文感知**：可直接引用笔记选区作为对话背景。
3. **权限可控**：Kiro 的操作（如读写文件）需在侧边栏审批，支持设置“始终允许/拒绝”规则，但需注意 Kiro 可能访问 Vault 外部文件。
4. **多会话支持**：最多同时运行 5 个独立的 Kiro 进程，支持恢复历史聊天。

**使用建议**：
- 确保已安装 Obsidian 1.5.0+ 及 Kiro CLI，并完成 Kiro 账户登录。
- 谨慎配置权限规则，特别是“始终允许”选项，以防 AI 意外修改 Vault 外文件。
- 注意 Kiro 会将提示词和附件发送至其 AI 提供商，敏感数据需谨慎处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



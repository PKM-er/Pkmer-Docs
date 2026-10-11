---
uid: 1791709366647000
title: 'Obsidian 插件：DSH Dock'
tags: ['第三方工具集成', '自动化与AI', '界面优化', 'obsidian插件']
description: 'Dock the official DeepSeek Harness Web (127.0.0.1:3080) into an Obsidian sidebar panel. Runs the official dsh CLI with per-vault isolated sessions. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DSH Dock

> [!Note] 插件名片
> - 插件名称：DSH Dock
> - 插件作者：eLerVi
> - 插件说明：Dock the official DeepSeek Harness Web (127.0.0.1:3080) into an Obsidian sidebar panel. Runs the official dsh CLI with per-vault isolated sessions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/elervi/obsidian-dsh-dock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dsh-dock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/elervi/obsidian-dsh-dock/master/README.md)



## 概述

**DSH Dock 插件总结**

1. **主要功能**：将官方 DeepSeek Harness Web (DSH) 界面嵌入 Obsidian 侧边栏。通过本地反向代理解决跨站鉴权问题，实现官方 UI 的原样展示与交互，并支持通过 Obsidian API 桥接，让 DSH 工具直接读取和操作 Vault 文件。

2. **适用场景**：适用于需要在 Obsidian 笔记环境中直接调用 DeepSeek Agent 进行辅助写作、代码生成或笔记管理的用户。特别适合多库并行工作，需在不同 Vault 间保持会话隔离但共享全局配置的场景。

3. **核心特色**：
   - **原生集成**：直接拉起官方 `dsh web`，无中间层损耗，体验一致。
   - **自动鉴权**：内置反向代理自动处理 Cookie 注入，无需手动配置 Token。
   - **库级隔离**：会话历史按 Vault 独立存储，配置全局共享，多库互不干扰。
   - **双向联动**：DSH 工具可实时刷新 Obsidian 索引，实现笔记与 Agent 的无缝协作。

4. **使用建议**：
   - 确保使用 Obsidian 桌面端（≥1.5.0），并全局安装 `@deepseek-ai/dsh` CLI 及 Node.js ≥ 20。
   - 推荐通过插件市场一键安装。
   - 首次启动需等待几秒初始化服务；若需深度定制笔记工作流，建议配合 `dsh-tool-obsidian-vault` 插件使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



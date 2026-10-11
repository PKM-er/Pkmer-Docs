---
uid: 1791709365226000
title: 'Obsidian 插件：Agent Threads'
tags: ['自动化与AI', '第三方工具集成', '文件管理', 'obsidian插件']
description: '在 Markdown 文件中与你的编码智能体共享笔记线程，数据以纯 JSON 格式存储在仓库中。 - 此插件尚未经过 Obsidian 官方团队的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Threads

> [!Note] 插件名片
> - 插件名称：Agent Threads
> - 插件作者：buckethead
> - 插件说明：在 Markdown 文件中与你的编码智能体共享笔记线程，数据以纯 JSON 格式存储在仓库中。 - 此插件尚未经过 Obsidian 官方团队的人工审核。
> - 插件分类：['自动化与AI', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bucketheadp65/agent-threads)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-threads)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bucketheadp65/agent-threads/master/README.md)



## 概述

**1. 主要功能**
Agent Threads 允许用户在 Obsidian 笔记中选中文字添加注释，并与编程智能体（Coding Agents）共享这些线程。线程数据以纯 JSON 文件形式存储在 Vault 中，无需服务器或账号，且不会修改原始笔记内容。

**2. 适用场景**
适用于需要与 AI 编程助手协作的场景。当智能体在同一文件夹工作时，可读取用户留下的注释，在独立线程中回复并解决任务，实现人与 AI 在 Markdown 文件上的异步沟通。

**3. 核心特色**
*   **非侵入性**：评论独立存储，不污染笔记正文（区别于 CriticMarkup）。
*   **智能同步**：磁盘文件变更 3 秒内自动刷新面板。
*   **灵活链接**：支持通过 Frontmatter 的 `id` 或 `aliases` 解析链接（需手动开启）。
*   **状态管理**：侧边栏清晰展示未解决、已解决及“锚点丢失”的线程，支持回复、解决及删除操作。

**4. 使用建议**
在编辑器或阅读视图中选中文字点击“Add note”创建注释。建议开启“Resolve links by frontmatter ID”选项以增强链接解析能力。注意该插件未经官方人工审核，使用前请备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



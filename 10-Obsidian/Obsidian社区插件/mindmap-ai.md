---
uid: 1791709368649000
title: 'Obsidian 插件：Mindmap AI'
tags: ['思维导图', '自动化与AI', '第三方工具集成', 'obsidian插件']
description: 'Desktop-first plugin that orchestrates the Mindmap Python engine. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mindmap AI

> [!Note] 插件名片
> - 插件名称：Mindmap AI
> - 插件作者：prashantyella
> - 插件说明：Desktop-first plugin that orchestrates the Mindmap Python engine. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '自动化与AI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/prashantyella/mindmap-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mindmap-ai)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/prashantyella/mindmap-obsidian/master/README.md)



## 概述

**插件名称：Mindmap AI**

**1. 主要功能**
该插件利用本地 Ollama 模型，在 Obsidian 内部自动执行笔记摘要、标签与概念建议、生成相关笔记链接（写入 `## Mindmap` 部分）、通过自然语言搜索索引笔记，以及为当前笔记固定高价值连接。此外，它还能直接读取 Apple Books 的本地 SQLite 数据库以同步阅读批注。

**2. 适用场景**
专为 macOS 桌面用户设计，适合依赖本地隐私计算、已部署 Ollama 服务，且希望利用 Apple Books 阅读数据增强知识库关联性的重度 Obsidian 用户。

**3. 核心特色**
*   **纯本地运行**：无外部服务依赖，所有嵌入、向量索引及调度均在 Obsidian 进程内完成，确保数据隐私。
*   **架构严谨**：采用 TypeScript 编写的单一生产引擎，若启动失败则明确报错，不静默降级。
*   **智能调度**：内置调度器处理日常维护与同步，支持通过 macOS LaunchAgent 在特定时间唤醒 Vault。
*   **安全集成**：通过固定参数的只读调用访问 Apple Books，绝不修改原始数据库。

**4. 使用建议**
*   确保 Obsidian 版本 ≥ 1.7.2 且 Ollama 正在本地运行。
*   在插件设置中正确配置 Ollama 的 Base URL 及模型路径。
*   首次加载时会自动导入旧版配置，请检查设置项以确认 Apple Books 数据库路径及作用范围文件夹是否正确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



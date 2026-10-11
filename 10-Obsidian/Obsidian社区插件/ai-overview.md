---
uid: 1791709365262000
title: 'Obsidian 插件：AI Overview'
tags: ['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
description: '在 [!ai] 提示块中，使用 Codex、Claude Code 或 opencode CLI 回答提示，并将生成的摘要以嵌套提示块的形式写入笔记。 - 此插件尚未经过 Obsidian 官方团队的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Overview

> [!Note] 插件名片
> - 插件名称：AI Overview
> - 插件作者：Deepal Jayasekara
> - 插件说明：在 [!ai] 提示块中，使用 Codex、Claude Code 或 opencode CLI 回答提示，并将生成的摘要以嵌套提示块的形式写入笔记。 - 此插件尚未经过 Obsidian 官方团队的人工审核。
> - 插件分类：['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deepal/obsidian-ai-overview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-overview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deepal/obsidian-ai-overview/master/README.md)



## 概述

**AI Overview** 是一款 Obsidian 桌面端插件，允许用户在笔记中通过 `[!ai]` 提示块调用本地安装的 Codex、Claude Code 或 opencode CLI，将 AI 生成的内容以嵌套 Callout 形式直接嵌入笔记。

**适用场景**：适合需要生成摘要、行动项、笔记对比、草稿或表格等 Markdown 内容的场景。它支持跨笔记引用及互联网资源（取决于 CLI 权限），适用于知识整理、内容创作及多文档关联分析。

**核心特色**：
1. **本地化运行**：依赖本地 CLI 进程，无需插件内集成 API，隐私可控。
2. **原生嵌入**：结果直接保存为 Markdown Callout，即使禁用插件或同步至其他设备，内容依然可读且格式完整。
3. **灵活数据源**：Agent 可访问 Vault 笔记（无需显式链接）及外部网络资源，具体权限由所选 CLI 决定。
4. **免费插件**：插件本身免费，费用取决于用户自行配置的 AI 服务商订阅。

**使用建议**：
- 仅限 Obsidian 1.13.0+ 桌面版使用，移动端不支持。
- 使用前需确保已独立安装并认证好对应的 CLI 工具，且赋予其读取 Vault 目录的权限。
- 建议先在终端测试 CLI 连通性，再在 Obsidian 中使用，以确保生成流程顺畅。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



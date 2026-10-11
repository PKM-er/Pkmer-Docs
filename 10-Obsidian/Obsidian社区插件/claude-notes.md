---
uid: 1791709366036000
title: 'Obsidian 插件：Claude Notes'
tags: ['第三方工具集成', '自动化与AI', '自定义命令', 'obsidian插件']
description: 'Sidebar, generate-note command, and live refresh for Markdown notes written into this vault by the Claude Code obsidian-notes CLI. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claude Notes

> [!Note] 插件名片
> - 插件名称：Claude Notes
> - 插件作者：Jefferson Simão Gonçalves
> - 插件说明：Sidebar, generate-note command, and live refresh for Markdown notes written into this vault by the Claude Code obsidian-notes CLI. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jeffersongoncalves/obsidian-claude-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claude-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jeffersongoncalves/obsidian-claude-notes/master/README.md)



## 概述

**Claude Notes** 是一款专为 Obsidian 设计的桌面端插件，旨在与 Claude Code 生态无缝集成。

**主要功能**：提供侧边栏列表、笔记生成命令及实时刷新功能。它通过 Obsidian 原生元数据缓存读取由 `obsidian-notes-cli` 写入的 Markdown 笔记，无需自定义格式或额外索引。

**适用场景**：适用于使用 Claude Code 进行开发或知识管理的用户，特别是需要频繁通过 CLI 生成笔记并希望在 Obsidian 中即时查看、管理和引用的开发者。

**核心特色**：
1. **零锁定设计**：直接读取标准 Markdown 及 YAML 前置信息，保持数据开放性。
2. **原生集成**：利用 Obsidian 自身的 `metadataCache`，不维护独立数据库，确保性能与稳定性。
3. **工作流闭环**：作为三仓库集成的一部分，支持从 Claude Code 插件调用 CLI 生成笔记，并在 Obsidian 侧边栏按项目分组展示，点击即可打开。

**使用建议**：
- 仅限 **Obsidian 1.13.0+ 桌面版**使用，移动端不支持。
- 需配合 `obsidian-notes-cli` 使用，建议同时安装 `claude-code-obsidian-notes` 插件以实现完整的自动化笔记生成流程。
- 确保笔记包含 `source: claude-code` 前置信息以便被侧边栏识别。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



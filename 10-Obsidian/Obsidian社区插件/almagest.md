---
uid: 1791709365294000
title: 'Obsidian 插件：Almagest'
tags: ['自动化与AI', '编辑工具', '文件管理', '界面优化', '效率工具', 'obsidian插件']
description: 'Review and approve the changes your coding agents make to the wiki in your vault, with a tool palette, change widgets, a tag navigator, and a sessions pane. Needs the Almagest agent plugin. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Almagest

> [!Note] 插件名片
> - 插件名称：Almagest
> - 插件作者：Nathan Aday
> - 插件说明：Review and approve the changes your coding agents make to the wiki in your vault, with a tool palette, change widgets, a tag navigator, and a sessions pane. Needs the Almagest agent plugin. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nathanaday/obsidian-almagest)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?almagest)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nathanaday/obsidian-almagest/master/README.md)



## 概述

**主要功能**
Almagest 是 Obsidian 的 LLM 知识库接口插件，需配合 Claude Code 或 Codex 等编码代理使用。它允许用户将论文、PDF 或笔记放入 `ingest/` 目录进行自动摄取，并生成结构化的 Wiki 页面。插件提供工具面板、变更小部件、标签导航及会话面板，实现对代理修改内容的实时监控。

**适用场景**
适用于需要利用 AI 代理构建和维护个人知识库的研究者或开发者。特别适合处理大量文献资料、代码仓库文档化，以及希望将非结构化数据转化为可检索、可引用的结构化 Wiki 场景。

**核心特色**
1. **人工审批流**：所有代理对知识库的修改均生成专用“变更”页面，用户可批准、拒绝、编辑或质询，确保知识库完全受控。
2. **双层架构**：底层 `tool/` 目录供代理快速查询和摄取数据，上层 `wiki-view` 为人类提供首页、时间线、图书馆及标签导航，界面可独立演进。
3. **代码集成**：支持链接代码仓库，代理自动为每个仓库生成文档页，并记录会话操作历史。

**使用建议**
确保已安装并配置好对应的 Almagest 代理插件。建议将待处理资料统一放入 `ingest/` 文件夹，定期审查“变更”页面以确认 AI 生成的准确性。利用 `journals/` 区域记录个人写作，保持人机协作的平衡。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



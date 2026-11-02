---
uid: 1793625605683000
title: "Obsidian 插件：AI Vault Search"
tags: ["搜索与排序", "自动化与AI", "效率工具", "obsidian插件"]
description: "Continuous indexing and fast search (note graph + Markdown sections, BM25 ranking) for AI agents via AI Ecosystem. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Vault Search

> [!Note] 插件名片
> - 插件名称：AI Vault Search
> - 插件作者：Emanuell
> - 插件说明：Continuous indexing and fast search (note graph + Markdown sections, BM25 ranking) for AI agents via AI Ecosystem. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuellcarvalhopires/obsidian-ai-vault-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-vault-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuellcarvalhopires/obsidian-ai-vault-search/master/README.md)



## 概述

AI Vault Search 为 AI 智能体提供基于内存索引的快速搜索能力，核心功能是通过 BM25 算法对笔记图谱和 Markdown 章节进行实时排名。它利用 Obsidian 事件保持索引更新，不仅支持库内笔记，还能扫描计算机任意文件夹中的代码、文本、表格及文档文件，并通过 MCP 工具向 AI 暴露搜索、查找、读取章节等接口，实现跨格式的高效信息检索。

典型场景包括在大型项目中快速定位特定代码逻辑或文档内容。例如，你可以让 AI 在 `C:/Users/you/Documents/project` 目录下搜索包含“soma”的 TypeScript 或 Python 文件，并直接读取匹配章节；或者在库内的“Projetos”文件夹中查找“实施计划”相关笔记。此外，它还能解析 Excel 表格的特定行范围，将数据转换为 Markdown 格式供 AI 分析，极大提升了处理非结构化数据的效率。

相比同类插件，其特色在于支持通用路径搜索，能处理 `.csv`、`.xlsx`、`.pdf` 等多种格式，并具备严格的安全机制。它会自动跳过 `node_modules` 等无关目录，且永不读取 `.env`、SSH 密钥等敏感文件，输出中的 API 令牌也会被自动脱敏。此外，它提供紧凑的 ripgrep 风格输出或详细 JSON 两种模式，支持分页和同义词匹配，确保 AI 获取的信息既精准又安全。

使用前需注意，该插件主要服务于 AI 智能体而非直接的人类交互界面，且依赖 AI Ecosystem 核心模块。它不适合需要手动浏览文件树或进行复杂数据库查询的场景。对于仅使用 Obsidian 原生搜索功能、不涉及 AI 代理工作流的用户，此插件可能显得冗余。此外，虽然支持大文件，但文本文件限制在 5 MB 以内，二进制文件限制在 50 MB 以内，超大文件可能无法被完整索引。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



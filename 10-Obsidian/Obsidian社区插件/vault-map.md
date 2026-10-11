---
uid: 1791709370851000
title: 'Obsidian 插件：Vault Map'
tags: ['数据处理', '自动化与AI', '文件管理', 'obsidian插件']
description: 'Writes a JSON Lines index of every note (frontmatter, links, embeds, backlinks and broken links) that scripts and AI agents can read without scanning the vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Map

> [!Note] 插件名片
> - 插件名称：Vault Map
> - 插件作者：Émile Lavoie
> - 插件说明：Writes a JSON Lines index of every note (frontmatter, links, embeds, backlinks and broken links) that scripts and AI agents can read without scanning the vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '自动化与AI', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lavemile02-afk/Vault-Map-for-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lavemile02-afk/Vault-Map-for-Obsidian/master/README.md)



## 概述

**1. 主要功能**
Vault Map 插件将 Obsidian 库中所有笔记的元数据（包括 Frontmatter、双向链接、嵌入、断链等）及全局统计（未解析链接、重复标题、孤儿笔记）导出为单个 JSON Lines 文件。它直接读取 Obsidian 内部缓存，确保链接解析与软件行为完全一致。

**2. 适用场景**
专为外部工具设计，适用于脚本自动化处理或 AI 代理（如 Claude Code、Cursor 等）需要快速理解库结构、检索关联关系，而无需逐个扫描数百个笔记文件的场景。

**3. 核心特色**
- **高效索引**：一次性生成完整映射，大幅降低外部工具读取成本。
- **智能更新**：支持手动一键生成或自动在库打开/笔记变更后更新。
- **变更追踪**：保留上一版本备份（.bak），并提供通知显示新增、删除或修改的笔记数量，警示断链或重复标题。
- **灵活配置**：支持 Gitignore 风格排除特定文件，状态栏实时显示映射状态。

**4. 使用建议**
建议开启自动更新功能以保持索引实时性；利用“显示自上次地图以来的更改”命令监控库结构变化；对于大型库，合理配置排除规则以减小输出文件体积，确保 AI 或脚本读取效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



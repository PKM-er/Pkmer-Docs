---
uid: 1791709368161000
title: 'Obsidian 插件：LLM Wiki Sync'
tags: ['第三方工具集成', '自动化与AI', '效率工具', '文件管理', 'obsidian插件']
description: 'Bidirectional Obsidian and Notion synchronization with explicit conflict protection. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LLM Wiki Sync

> [!Note] 插件名片
> - 插件名称：LLM Wiki Sync
> - 插件作者：Jiho Song
> - 插件说明：Bidirectional Obsidian and Notion synchronization with explicit conflict protection. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jiho-0629/llm-wiki-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?llm-wiki-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jiho-0629/llm-wiki-sync/master/README.md)



## 概述

**LLM Wiki Sync** 是一款 Obsidian 桌面插件，旨在实现本地 Markdown 笔记与 Notion 页面之间的双向同步。

1. **主要功能**：支持笔记正文、标题及文件名的双向同步，涵盖单篇笔记、指定文件夹及整个 Vault 的同步操作。
2. **适用场景**：适用于需要在 Obsidian 本地离线编辑与 Notion 云端协作之间保持数据一致性的用户，特别是依赖稳定页面身份映射以避免重命名导致映射断裂的场景。
3. **核心特色**：采用“安全优先”设计，通过持久化同步基线（Baseline）和四态模型（CLEAN/LOCAL_ONLY/REMOTE_ONLY/CONFLICT）精准检测变更。具备明确的冲突保护机制，当双侧均修改时强制用户选择保留版本；支持 Fail-closed 转换以确保格式安全，并包含实验性图片推送功能。
4. **使用建议**：同步依赖 Frontmatter 中的 `notion_page_id` 作为稳定身份标识，请确保该字段完整。建议在首次同步前确认网络及 API 权限正常，遇到冲突时请根据业务需求明确选择保留 Obsidian 或 Notion 版本，避免数据覆盖。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



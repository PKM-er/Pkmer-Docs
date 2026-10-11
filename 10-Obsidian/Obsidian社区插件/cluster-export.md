---
uid: 1791709366083000
title: 'Obsidian 插件：Cluster Export'
tags: ['文件管理', '图谱', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Build a cluster of linked notes in a graph, prune it, and export it as portable Markdown with an assets folder. Clusters can be kept in sync automatically. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cluster Export

> [!Note] 插件名片
> - 插件名称：Cluster Export
> - 插件作者：i-am-rudi
> - 插件说明：Build a cluster of linked notes in a graph, prune it, and export it as portable Markdown with an assets folder. Clusters can be kept in sync automatically. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图谱', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/i-am-rudi/cluster-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cluster-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/i-am-rudi/cluster-export/master/README.md)



## 概述

**1. 主要功能**
Cluster Export 允许用户从单个笔记出发，在图谱视图中构建并修剪相互链接的笔记集群，最终将其导出为包含 `assets/` 资源文件夹的独立 Markdown 文件。插件支持“自动同步”功能，可像 Zotero 的文献更新一样，保持导出内容与 Vault 中原始笔记的一致性。

**2. 适用场景**
专为采用 Zettelkasten 等扁平化文件夹结构、依赖链接组织知识的用户设计。适用于需要将特定主题笔记分享给协作者、存入代码仓库，或在不直接暴露整个 Vault 根目录的情况下，将知识集群提供给 LLM 代理处理。

**3. 核心特色**
*   **图谱化操作**：通过直观的图形界面选择、修剪和移除笔记，符合链接型 Vault 的心智模型。
*   **双向同步**：导出后的集群可自动或手动与 Vault 保持同步，支持拉取协作者更新。
*   **安全便携**：仅读写用户指定的导出文件夹，通过 Obsidian API 访问数据，无网络请求，仅支持桌面端。

**4. 使用建议**
适合希望高效分享局部知识体系的用户。建议先建立清晰的笔记链接关系，再使用图谱模式筛选核心内容。注意该插件仅限桌面端使用，且需手动管理导出目录权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



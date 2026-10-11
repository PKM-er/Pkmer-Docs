---
uid: 1791709371274000
title: 'Obsidian 插件：Zotero Vault Sync'
tags: ['zotero', '第三方工具集成', '文件管理', '学术与科研', 'obsidian插件']
description: 'Mirror your Zotero library into a git-versioned folder in the vault — one JSON file per item plus per-PDF annotations — synced incrementally via Zotero local HTTP API, with regenerable notes and Dataview views that work with Zotero closed. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zotero Vault Sync

> [!Note] 插件名片
> - 插件名称：Zotero Vault Sync
> - 插件作者：Kerekes Stefan
> - 插件说明：Mirror your Zotero library into a git-versioned folder in the vault — one JSON file per item plus per-PDF annotations — synced incrementally via Zotero's local HTTP API, with regenerable notes and Dataview views that work with Zotero closed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['zotero', '第三方工具集成', '文件管理', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stef4678/zotero-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zotero-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stef4678/zotero-vault-sync/master/README.md)



## 概述

**Zotero Vault Sync** 是一款将 Zotero 文献库实时同步至 Obsidian 的插件。

1. **主要功能**：利用 Zotero 本地 HTTP API，将文献库增量同步为 Vault 内隐藏的 Git 版本化文件夹（每项文献对应一个 JSON 文件及 PDF 标注文件）。所有搜索、元数据及生成的笔记视图均直接读取该镜像，无需依赖 Zotero 运行。
2. **适用场景**：适合需要离线管理文献、追求数据版本控制（Git）以及希望摆脱传统“模板导入”静态快照局限的研究者或知识工作者。
3. **核心特色**：区别于传统的按需导入插件，它构建了一个“活”的数据库镜像。支持 Zotero 关闭时离线使用，笔记为可随时再生的动态视图而非静态快照，且同步过程产生干净的小规模 Git 差异，确保数据一致性。
4. **使用建议**：需先在 Zotero 中启用本地通信权限；所有连接、同步触发及视图配置均在单一设置页完成；建议定期提交 Git 以利用版本控制优势。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



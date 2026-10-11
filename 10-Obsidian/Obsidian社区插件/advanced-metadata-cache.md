---
uid: 1791709365201000
title: 'Obsidian 插件：Advanced Metadata Cache'
tags: ['搜索与排序', '效率工具', '数据处理', 'obsidian插件']
description: 'Maintains the vault indexes that are otherwise rebuilt on every call, and answers the built-in lookups from them, so backlinks come from an index instead of a fresh scan of every note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Advanced Metadata Cache

> [!Note] 插件名片
> - 插件名称：Advanced Metadata Cache
> - 插件作者：Michael Naumov
> - 插件说明：Maintains the vault indexes that are otherwise rebuilt on every call, and answers the built-in lookups from them, so backlinks come from an index instead of a fresh scan of every note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-advanced-metadata-cache)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-metadata-cache)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-advanced-metadata-cache/master/README.md)



## 概述

**Advanced Metadata Cache** 是一款旨在提升 Obsidian 大型库性能的核心优化插件。

**主要功能**：该插件通过维护持久化的元数据索引，替代 Obsidian 默认在每次查询时重新扫描全库的机制。它直接替换底层查询方法，使得内置的反向链接面板、`[[` 自动补全以及依赖这些查询的其他插件均能直接从索引中获取结果，无需额外配置即可生效。

**适用场景**：特别适用于包含大量笔记的大型知识库。当用户发现打开反向链接面板或输入自动补全时出现明显延迟，或感觉系统响应缓慢时，安装此插件可显著改善体验。对于小型库，其性能提升可能不明显。

**核心特色**：
1. **模块化设计**：索引功能被拆分为独立模块，用户可根据需求单独开启或关闭，确保只为实际使用的功能付出性能代价。
2. **无感集成**：无需修改现有工作流，直接加速原生功能及第三方插件的查询速度。
3. **高效维护**：通过缓存机制避免重复的全库扫描，大幅降低 CPU 占用和等待时间。

**使用建议**：建议在笔记数量较多、查询频繁的大库中启用。安装后，可根据实际卡顿情况，仅开启所需的索引模块（如反向链接或文件名索引），以平衡内存占用与查询速度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



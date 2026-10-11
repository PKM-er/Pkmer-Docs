---
uid: 1791709365237000
title: 'Obsidian 插件：AgentWiki Sync'
tags: ['第三方工具集成', '文件管理', '自动化与AI', 'obsidian插件']
description: '将映射的仓库文件夹与 AgentWiki 空间同步。- 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AgentWiki Sync

> [!Note] 插件名片
> - 插件名称：AgentWiki Sync
> - 插件作者：NeoMei
> - 插件说明：将映射的仓库文件夹与 AgentWiki 空间同步。- 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/neomei/agentwiki-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agentwiki-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/neomei/agentwiki-sync/master/README.md)



## 概述

**AgentWiki Sync** 是一款移动端兼容的 Obsidian 插件，旨在实现本地 Vault 映射目录与 AgentWiki Space 之间的双向同步。

**适用场景**：适合需要在多设备间保持知识库一致性的用户，特别是依赖 AgentWiki 进行云端协作或备份的场景。

**核心特色**：
1. **智能协议适配**：优先使用 Sync v3 协议，自动处理引用图片（仅同步被 Markdown 引用的图片），并兼容 v2/v1 旧协议，具备严格的版本降级保护机制。
2. **安全可控同步**：提供“可预览、可确认”的同步中心，支持自动合并、保留本地或服务器内容等策略。具备事务恢复能力，中断后能从日志恢复，避免数据丢失或静默覆盖。
3. **结构同步**：支持文件夹层级、ID 及排序的完整同步，保留空文件夹结构。

**使用建议**：
1. 安装后需在 AgentWiki 网页生成一次性连接码进行配对。
2. 设置互不重叠的 Vault 目录路径（如 `Wiki`），插件会自动创建缺失目录。
3. 同步前务必在预览界面仔细检查变更，确认后再执行 Push/Pull。
4. 若同步中断，下次打开同步中心时优先处理未完成的恢复事务，切勿手动强行覆盖文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



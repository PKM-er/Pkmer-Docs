---
uid: 1791709365949000
title: 'Obsidian 插件：CF Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Sync personal vaults and collaboratively edit Markdown through your Cloudflare account. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CF Sync

> [!Note] 插件名片
> - 插件名称：CF Sync
> - 插件作者：shun-shobon
> - 插件说明：Sync personal vaults and collaboratively edit Markdown through your Cloudflare account. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shun-shobon/obsidian-cf-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cf-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shun-shobon/obsidian-cf-sync/master/README.md)



## 概述

**CF Sync** 是一款基于 Cloudflare 基础设施（Workers、Durable Objects 及 R2）的 Obsidian 同步插件，允许用户自建服务器实现个人库的多设备同步与协作。

**主要功能**：支持跨设备实时同步笔记与附件，具备离线缓存与重连自动同步能力。
**适用场景**：适合需要多设备无缝切换、追求数据私有化（自托管）以及小团队进行 Markdown 文档协作的用户。
**核心特色**：
1. **实时协作**：支持并发编辑，提供实时光标、选区及用户名称显示，延迟极低（文本约0.5秒，光标约0.2秒）。
2. **数据主权**：数据存储在用户自己的 Cloudflare R2 存储桶中，通过 Access 应用保护 API，安全性高。
3. **冲突处理**：智能合并文本，无法自动合并的文件（如附件）会保留为不同名称以防丢失。
4. **全平台支持**：兼容 iOS、Android 及桌面端。

**使用建议**：需具备 Cloudflare 账号并有一定技术基础，需手动配置 Worker、R2 桶及 Access 权限。建议先在小范围测试协作功能，确保网络环境稳定以获得最佳同步体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



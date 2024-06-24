---
uid: 2024052909042798
title: Obsidian 插件：Backlink Cache
tags: ['第三方工具集成', '性能优化', '缓存', 'obsidian插件']
description: 将反向链接缓存存储以加快`app.metadataCache.getBacklinksForFile`的速度。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Backlink Cache

> [!Note] 插件名片
> - 插件名称：Backlink Cache
> - 插件作者：mnaoumov
> - 插件说明：将反向链接缓存存储以加快 `app.metadataCache.getBacklinksForFile` 的速度。
> - 插件分类：[' 第三方工具集成 ', ' 性能优化 ', ' 缓存 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-backlink-cache)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?backlink-cache)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-backlink-cache/master/README.md)

## 概述

Backlink Cache 是 Obsidian 的一个插件，用于存储反向链接缓存，以加快 `app.metadataCache.getBacklinksForFile` 函数的速度。它主要适用于拥有大型文库的用户，对于小型文库可能无法察觉到差异。它可以加快“反向链接窗格”的性能以及处理反向链接的插件。该插件对于处理反向链接的其他插件开发人员最有用。它的灵感来自论坛。如果需要调用原始版本，可以使用 `app.metadataCache.getBacklinksForFile.originalFunc` 函数。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




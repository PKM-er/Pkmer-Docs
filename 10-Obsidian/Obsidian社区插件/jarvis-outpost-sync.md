---
uid: 1791709367846000
title: 'Obsidian 插件：Jarvis Outpost Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Jarvis Outpost Sync

> [!Note] 插件名片
> - 插件名称：Jarvis Outpost Sync
> - 插件作者：Egoism
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/379949990/jarvis-outpost-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jarvis-outpost-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/379949990/jarvis-outpost-sync/master/README.md)



## 概述

**Jarvis Outpost Sync 插件总结**

**主要功能**
该插件是一个只读同步客户端，用于从自托管的 Jarvis Outpost API 将笔记内容拉取到本地 Obsidian 库中。它支持通过一次性配对码建立连接，并存储设备令牌，实现增量数据同步。

**适用场景**
适用于拥有自托管 Jarvis Outpost 控制平面的用户，特别是希望将远程服务器上的笔记内容单向同步至本地 Obsidian 进行阅读或离线查看，而不需要双向编辑的场景。

**核心特色**
1. **完全自托管**：无默认服务器，用户需自行配置 API 基础 URL，确保数据隐私。
2. **只读安全**：仅从服务器拉取数据，不向服务器写回，避免冲突。
3. **增量同步**：支持高效的部分更新，减少带宽消耗。
4. **本地令牌**：设备令牌仅存储在本机插件数据中，安全性高。

**使用建议**
1. 确保已部署自托管的 Jarvis Outpost 服务并获取 API 地址。
2. 在 Jarvis PWA 中生成一次性配对码，在插件设置中输入以完成配对。
3. 注意该插件仅支持 Obsidian 1.13.0 及以上版本。
4. 若需编辑笔记，请在 Obsidian 本地或其他授权端进行，本插件不负责回写。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1786577081360005
title: 'Obsidian 插件：PDS Sync'
tags: ['第三方工具集成', '发布工具', '效率工具', '社交与社区', 'obsidian插件']
description: '把你的仓库同步到atproto协议的PDS（公共数据服务）——这款插件还未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDS Sync

> [!Note] 插件名片
> - 插件名称：PDS Sync
> - 插件作者：moshyfawn
> - 插件说明：把你的仓库同步到atproto协议的PDS（公共数据服务）——这款插件还未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/moshyfawn/obsidian-pds-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pds-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/moshyfawn/obsidian-pds-sync/master/README.md)



## 概述

### PDS Sync插件总结
1. **主要功能**：将Obsidian库同步到atproto个人数据服务器（PDS），支持私有和公共两种模式。私有模式下客户端加密存储；公共模式标记 `publish: true` 的笔记可公开。具备认证、双向同步、公开发布、自动同步等功能。
2. **适用场景**：适用于需要在Obsidian和PDS间同步笔记，有数据加密需求，或希望公开分享笔记的用户。
3. **核心特色**：采用OAuth或应用密码认证，凭证存于系统钥匙串；私有同步有冲突处理、孤儿删除和自我修复；公开发布支持标准文档格式及辅助配置；自动同步有状态栏指示，支持移动端。
4. **使用建议**：从发布版下载 `main.js` 和 `manifest.json` 放入插件目录并启用。在设置中选择认证方式连接，设置加密密码，在笔记前添加 `pds: true` 或 `publish: true` 标记后进行同步。未标记的笔记不会同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



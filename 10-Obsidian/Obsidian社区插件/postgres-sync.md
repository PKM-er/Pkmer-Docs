---
uid: 1786577081572001
title: 'Obsidian 插件：Postgres Sync'
tags: ['第三方工具集成', '搜索与排序', '数据处理', '备份与恢复', 'obsidian插件']
description: '把这个仓库同步到自建的PostgreSQL数据库（通过PostgREST），而不是使用Obsidian Sync或CouchDB进行同步。而且，每篇笔记都会被嵌入处理，以便通过代理工具进行语义搜索。- 此插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Postgres Sync

> [!Note] 插件名片
> - 插件名称：Postgres Sync
> - 插件作者：lanjak
> - 插件说明：把这个仓库同步到自建的PostgreSQL数据库（通过PostgREST），而不是使用Obsidian Sync或CouchDB进行同步。而且，每篇笔记都会被嵌入处理，以便通过代理工具进行语义搜索。- 此插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['第三方工具集成', '搜索与排序', '数据处理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lanjak/obsidian-postgres-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?postgres-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lanjak/obsidian-postgres-sync/master/README.md)



## 概述

### Postgres Sync插件总结
1. **主要功能**：可将Obsidian库同步到自建的Postgres数据库（通过PostgREST），替代Obsidian Sync、iCloud或CouchDB等方式，同时为每个笔记生成嵌入向量，用于语义搜索。
2. **适用场景**：适用于需要在多设备间同步Obsidian笔记，且希望利用语义搜索功能的用户。
3. **核心特色**：无需使用Obsidian Sync、CouchDB等，通过HTTP或HTTPS与PostgREST直接通信，支持桌面和移动设备；同一数据库表兼具同步和语义搜索索引功能。
4. **使用建议**：使用前需准备好可访问的Postgres实例（含`pgvector`扩展）、支持llama.cpp `/embedding`端点的嵌入服务器；将`sql/schema.sql`中的模式应用到Postgres数据库，设置真实API密钥和`authenticator`角色的登录密码；按要求配置PostgREST。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



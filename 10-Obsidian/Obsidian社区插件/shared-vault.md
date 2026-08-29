---
uid: 1786577082481000
title: 'Obsidian 插件：Shared Vault'
tags: ['效率工具', '社交与社区', '文件管理', 'obsidian插件']
description: '为共享仓库提供无服务器、无冲突的协作层。——此插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Shared Vault

> [!Note] 插件名片
> - 插件名称：Shared Vault
> - 插件作者：fangface-hub
> - 插件说明：为共享仓库提供无服务器、无冲突的协作层。——此插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['效率工具', '社交与社区', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fangface-hub/ObsidianSharedVault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?shared-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fangface-hub/ObsidianSharedVault/master/README.md)



## 概述

### 插件名称
Shared Vault

### 主要功能
为Obsidian提供无服务器、无冲突的协作层，通过在保险库内存储Yjs兼容的操作文件，在本地缓存CRDT状态，实现多设备间的协作编辑，无需专用服务器。

### 适用场景
适用于多人共同编辑Obsidian笔记，在无服务器环境下实现数据同步和协作。

### 核心特色
- 无服务器架构，降低使用成本和维护难度。
- 冲突-free，避免多人编辑时的数据冲突。
- 采用本地缓存和共享存储结合的方式，确保数据的一致性和可靠性。

### 使用建议
- 手动同步和后台轮询同步可按需选择，以保证数据及时更新。
- 节点在进行本地更改后会加入注册表，使用时可留意此机制。
- 注意本地CRDT缓存路径为`.obsidian/cache/`，共享数据存储在`.obsidian/shared-vault/`目录下。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



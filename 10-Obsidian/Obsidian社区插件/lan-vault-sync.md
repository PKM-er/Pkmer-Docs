---
uid: 1786577079422003
title: 'Obsidian 插件：LAN Vault Sync'
tags: ['文件管理', '效率工具', '数据处理', '自动化与AI', 'obsidian插件']
description: '利用Yjs CRDT技术实现仓库在局域网上的实时同步，可无冲突合并数据。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LAN Vault Sync

> [!Note] 插件名片
> - 插件名称：LAN Vault Sync
> - 插件作者：senjanson
> - 插件说明：利用Yjs CRDT技术实现仓库在局域网上的实时同步，可无冲突合并数据。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['文件管理', '效率工具', '数据处理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/senjanson/lan-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lan-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/senjanson/lan-vault-sync/master/README.md)



## 概述

### LAN Vault Sync插件总结
1. **主要功能**：实现本地网络内Obsidian库的实时同步，支持文本文件的无冲突合并、二进制文件同步，具备自动发现设备、手动添加节点、二维码配对等功能，离线编辑后重新连接可自动合并更改。
2. **适用场景**：适用于在本地网络环境下，有多台设备（如Mac和iPhone）需要同步Obsidian笔记，且不想依赖云端或第三方服务器的用户。
3. **核心特色**：零云存储，数据不出本地网络；零配置，设备通过UDP广播自动发现；零冲突（文本），采用Yjs CRDT技术进行字符级合并；零订阅，完全开源免费。采用P2P架构，无需中央服务器。
4. **使用建议**：若网络支持广播，可利用自动发现功能轻松连接设备；若广播被阻止，可手动通过`IP:port`添加节点；使用二维码配对可避免手动输入的麻烦；可放心进行离线编辑，重新联网后更改会自动合并。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



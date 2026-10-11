---
uid: 1791709366659000
title: 'Obsidian 插件：Duckuments LiveSync'
tags: ['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
description: 'Minimal self-hosted CouchDB live sync for your vault, with end-to-end encryption and multiple remote vaults. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Duckuments LiveSync

> [!Note] 插件名片
> - 插件名称：Duckuments LiveSync
> - 插件作者：duckuments
> - 插件说明：Minimal self-hosted CouchDB live sync for your vault, with end-to-end encryption and multiple remote vaults. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/duckuments/duckuments-live-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?duckuments-live-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/duckuments/duckuments-live-sync/master/README.md)



## 概述

**1. 主要功能**
Duckuments LiveSync 是一款基于自托管 CouchDB 的 Obsidian 实时同步插件。它支持笔记的连续自动同步、手动推送/拉取，并允许配置多个远程库。核心在于端到端加密（AES-GCM），确保数据在离开本地前已加密，服务器仅存储密文。

**2. 适用场景**
适合注重数据隐私、希望将笔记存储在自有服务器（而非第三方云服务）的用户。适用于需要多设备间实时同步，且对数据安全性有极高要求的个人知识管理场景。

**3. 核心特色**
*   **自托管与隐私**：数据完全由用户掌控，支持端到端加密，密码仅保存在本地。
*   **多远程支持**：可配置多个独立的 CouchDB 库，每个库拥有独立的凭证和加密密钥。
*   **实时状态监控**：状态栏显示同步状态（空闲/同步中/错误等），并提供应用内日志查看功能。
*   **互操作性**：兼容 obsidian-livesync 插件写入的数据。
*   **公开预览**：支持生成单篇笔记的只读网页链接进行分享。

**4. 使用建议**
目前仅支持同步文本类文件（如 md, txt, json 等），图片、PDF 等二进制文件暂不支持。建议用户自行部署 CouchDB 服务器，并妥善保管各远程库的加密密码。若需分享笔记，可利用“公开预览”功能生成静态快照链接。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



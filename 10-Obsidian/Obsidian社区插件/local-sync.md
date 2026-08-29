---
uid: 1786577079673000
title: 'Obsidian 插件：Local Sync'
tags: ['文件管理', '备份与恢复', '安全与隐私', '效率工具', 'obsidian插件']
description: '局域网双向仓库同步 —— 冲突无锁数据类型（CRDT）自动合并、预共享密钥（PSK）认证、UDP 发现功能 - 此插件尚未经过 Obsidian 官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Sync

> [!Note] 插件名片
> - 插件名称：Local Sync
> - 插件作者：Liu Bo
> - 插件说明：局域网双向仓库同步 —— 冲突无锁数据类型（CRDT）自动合并、预共享密钥（PSK）认证、UDP 发现功能 - 此插件尚未经过 Obsidian 官方人员手动审核。
> - 插件分类：['文件管理', '备份与恢复', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/liuboacean/obsidian-local-sync-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/liuboacean/obsidian-local-sync-plugin/master/README.md)



## 概述

### Local Sync插件总结
1. **主要功能**：实现Obsidian库在局域网内的双向同步，支持点对点WebSocket/WSS连接，具备CRDT自动合并并发文本编辑、TLS加密传输、UDP自动发现设备等功能，还可选择性同步文件夹和文件类型。
2. **适用场景**：适用于在同一局域网内有多台设备使用Obsidian，且希望在不依赖云服务的情况下实现数据同步的用户。
3. **核心特色**：零云依赖，数据仅在本地网络；零冲突，CRDT自动合并编辑；零配置，首次启动自动生成证书；安全性高，采用PSK认证和TLS加密，防止中间人攻击和恶意文件写入。
4. **使用建议**：安装时通过插件ID `local-sync` 下载，将其放入 `your-vault/.obsidian/plugins/local-sync/` 文件夹。可选择手动设置IP或使用UDP自动发现功能，同时可根据需求排除不需要同步的文件夹和文件类型。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



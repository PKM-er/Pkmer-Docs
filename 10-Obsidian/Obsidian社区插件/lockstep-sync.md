---
uid: 1791709368214000
title: 'Obsidian 插件：Lockstep Sync'
tags: ['文件管理', '安全与隐私', '备份与恢复', '移动端优化', '第三方工具集成', 'obsidian插件']
description: 'Sync your Obsidian vault between desktop, iOS and Android through your own server. Self-hosted, end-to-end encrypted, free and open source: no cloud, no subscription. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lockstep Sync

> [!Note] 插件名片
> - 插件名称：Lockstep Sync
> - 插件作者：Stephan Sergeev
> - 插件说明：Sync your Obsidian vault between desktop, iOS and Android through your own server. Self-hosted, end-to-end encrypted, free and open source: no cloud, no subscription. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '安全与隐私', '备份与恢复', '移动端优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stephansergeev/obsidian-lockstep-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lockstep-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stephansergeev/obsidian-lockstep-sync/master/README.md)



## 概述

**Lockstep Sync** 是一款自托管、端到端加密的 Obsidian 双向同步插件，支持 macOS、Windows、Linux、iOS 及 Android 全平台。

**适用场景**：适合注重数据隐私、拒绝第三方云服务及订阅制，且拥有自有服务器或 VPS 的用户，实现跨设备无缝协作。

**核心特色**：
1. **隐私安全**：采用 AES-256-GCM 加密，服务器仅存储密文，无法读取内容；
2. **极简部署**：仅需运行一个包含 SQLite 的二进制文件，无需复杂依赖；
3. **智能冲突处理**：不同行自动合并，同行冲突保留双方版本供用户选择，编辑优先于删除；
4. **高效可靠**：支持大文件分片传输，具备 30 天文件恢复机制，并通过二维码快速配置新设备。

**使用建议**：用户需具备基本的 Linux 服务器运维能力以部署后端服务。建议启用端到端加密以最大化安全性，并定期清理服务器上的修订历史以管理存储。对于非技术用户，可考虑使用 Docker 容器简化部署流程。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



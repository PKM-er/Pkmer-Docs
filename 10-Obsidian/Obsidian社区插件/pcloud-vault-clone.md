---
uid: 1791709369157000
title: 'Obsidian 插件：pCloud Sync'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Sync your vault to a pCloud folder as plain, unencrypted files. Notes edited on two devices are merged paragraph by paragraph, right in the note, with no separate conflict files. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：pCloud Sync

> [!Note] 插件名片
> - 插件名称：pCloud Sync
> - 插件作者：Laszlo Repassy
> - 插件说明：Sync your vault to a pCloud folder as plain, unencrypted files. Notes edited on two devices are merged paragraph by paragraph, right in the note, with no separate conflict files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/laszlorepassy/pcloud-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pcloud-vault-clone)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/laszlorepassy/pcloud-sync/master/README.md)



## 概述

**pCloud Sync** 是一款将 Obsidian 库同步至 pCloud 文件夹的插件，以未加密的纯文本形式存储，便于通过 pCloud 官方应用或网页直接访问。

**适用场景**：适合需要跨设备（桌面与移动端）无缝同步笔记，且希望利用 pCloud 进行云端备份或直接在移动端查看文件的用户。

**核心特色**：
1. **智能合并**：支持段落级自动合并，消除冲突文件，直接在笔记中解决多设备编辑差异。
2. **高效同步**：采用“一键同步”机制，结合启动全量、每小时全量及每10分钟增量同步策略，仅在文件变更时传输数据，显著降低带宽和设备负载。
3. **隐私安全**：仅与 pCloud API 通信，数据不经过第三方服务器，确保传输路径单一且私密。
4. **轻量运行**：智能缓存远程索引和压缩存储最后同步文本，减少磁盘读写和内存占用。

**使用建议**：需拥有 pCloud 账号。建议保持网络稳定以利用其增量同步优势；由于数据未加密，请确保 pCloud 账户安全，避免敏感信息泄露。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



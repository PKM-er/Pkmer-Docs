---
uid: 1791709369290000
title: 'Obsidian 插件：PQC WebDAV Sync'
tags: ['安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Encrypt your vault with post-quantum cryptography (ML-DSA/ML-KEM) and sync to any WebDAV server (Nextcloud, etc.) with chunked transfer and multi-device conflict resolution. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PQC WebDAV Sync

> [!Note] 插件名片
> - 插件名称：PQC WebDAV Sync
> - 插件作者：obsync
> - 插件说明：Encrypt your vault with post-quantum cryptography (ML-DSA/ML-KEM) and sync to any WebDAV server (Nextcloud, etc.) with chunked transfer and multi-device conflict resolution. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/normanify/post-quantum-webdav)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?post-quantum-webdav)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/normanify/post-quantum-webdav/master/README.md)



## 概述

**PQC WebDAV Sync** 是一款结合后量子加密与 WebDAV 同步的 Obsidian 插件。

1. **主要功能**：使用 ML-KEM-768 和 ML-DSA-65 算法对笔记内容及文件名进行端到端加密，并同步至 Nextcloud 等任意 WebDAV 服务器。远程端仅存储加密数据，无法读取明文。
2. **适用场景**：适用于对数据隐私有极高要求、需防范未来量子计算机破解威胁，且依赖 WebDAV 服务进行多设备笔记同步的用户。
3. **核心特色**：采用后量子加密标准保障安全；支持分块传输，具备断点续传能力；内置向量时钟机制解决多设备冲突；提供 AES-GCM 和 SHA-256 双重完整性校验；支持配置“本地优先”或“远程优先”的全量强制同步。
4. **使用建议**：安装后请在设置中根据网络状况调整分块大小及并行传输数；日常使用注意观察状态栏进度；若需单向覆盖，可利用“强制全量同步”功能选择保留本地或远程版本；建议从社区插件目录安装以获取最新稳定版。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



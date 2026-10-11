---
uid: 1791709368664000
title: 'Obsidian 插件：MinIO Vault Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Syncs your vault files to a MinIO (S3-compatible) bucket so you can share them across devices. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MinIO Vault Sync

> [!Note] 插件名片
> - 插件名称：MinIO Vault Sync
> - 插件作者：calirko
> - 插件说明：Syncs your vault files to a MinIO (S3-compatible) bucket so you can share them across devices. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/calirko/minio-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?minio-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/calirko/minio-vault-sync/master/README.md)



## 概述

**1. 主要功能**
该插件将 Obsidian 库文件同步至 MinIO（S3 兼容）存储桶。支持双向同步，包括启动/退出时的全量同步、基于事件的防抖推送、墓碑机制删除传播及冲突处理（重命名旁路+重新下载）。

**2. 适用场景**
适用于需要跨设备（桌面端与移动端）共享笔记数据的用户，特别是使用自托管 MinIO 或 S3 兼容对象存储服务的场景。

**3. 核心特色**
*   **全平台兼容**：基于 Obsidian `requestUrl` 和 Web Crypto API 构建，完美支持移动端运行时。
*   **智能同步**：实现完整的双向同步逻辑，具备冲突解决机制，确保数据一致性。
*   **轻量自研**：无重型依赖，通过 REST 客户端直接访问 S3 接口。

**4. 使用建议**
*   **初始配置**：运行“Setup MinIO sync”命令，输入端点、凭证和桶名，务必点击“Test”验证连接后再保存。
*   **手动操作**：可通过命令面板触发手动同步或再次测试连接。
*   **注意**：该插件未经过 Obsidian 官方人工审核，建议先备份重要数据再启用，以防同步异常导致数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



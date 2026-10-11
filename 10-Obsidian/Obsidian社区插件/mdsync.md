---
uid: 1791709368544000
title: 'Obsidian 插件：MDSync'
tags: ['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
description: 'Sync your vault end-to-end encrypted through your own S3, WebDAV or Google Drive storage, with conflict resolution, file history, shared folders and live editing. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MDSync

> [!Note] 插件名片
> - 插件名称：MDSync
> - 插件作者：k1tbyte
> - 插件说明：Sync your vault end-to-end encrypted through your own S3, WebDAV or Google Drive storage, with conflict resolution, file history, shared folders and live editing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/k1tbyte/mdsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/k1tbyte/mdsync/master/README.md)



## 概述

**MDSync 插件总结**

1.  **主要功能**：实现 Obsidian 库的端到端加密同步。支持通过 S3、WebDAV 或 Google Drive 进行数据存储，提供冲突自动合并、文件历史版本管理、实时编辑及共享文件夹功能。
2.  **适用场景**：适用于注重隐私、希望避免依赖第三方同步服务（如 Obsidian Sync）的用户。适合需要多设备协作、共享笔记库，或希望将数据完全掌控在自己存储服务商手中的个人及团队。
3.  **核心特色**：
    *   **无服务器架构**：设备直连存储，数据在本地加密，密钥仅存于设备，提供商仅存储密文。
    *   **灵活同步**：支持手动审查后同步或定时自动同步；可选部署 Cloudflare Worker 中继以实现即时同步和实时协作。
    *   **强大冲突处理**：提供三方合并编辑器、自动合并及手动选择，并支持编辑器内的变更标记。
4.  **使用建议**：
    *   初期建议开启手动同步，以便在数据上传前审查变更。
    *   确保所有设备使用相同的强密码短语，因为密码丢失将导致数据无法解密。
    *   若需实时协作，请自行部署 Cloudflare Worker 中继；否则仅使用基础同步功能即可保持隐私与简单。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



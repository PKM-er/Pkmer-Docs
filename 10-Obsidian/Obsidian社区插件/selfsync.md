---
uid: 1791709369867000
title: 'Obsidian 插件：Selfsync'
tags: ['备份与恢复', '安全与隐私', '文件管理', '效率工具', 'obsidian插件']
description: 'Sync your vault through your own server, with no lost edits: automatic merges, conflict copies, deleted file recovery, file history and optional end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Selfsync

> [!Note] 插件名片
> - 插件名称：Selfsync
> - 插件作者：Masson17
> - 插件说明：Sync your vault through your own server, with no lost edits: automatic merges, conflict copies, deleted file recovery, file history and optional end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/darkildo/selfsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?selfsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/darkildo/selfsync/master/README.md)



## 概述

**Selfsync 插件总结**

1. **主要功能**：通过自建服务器同步 Obsidian 库。支持自动合并差异编辑、冲突时保留双版本、删除文件恢复、文件历史版本管理，以及可选的端到端加密。
2. **适用场景**：适合拥有自建服务器（如 NAS 或独立主机）且注重数据隐私、不希望依赖云端订阅服务的用户。支持桌面端与移动端跨平台同步，特别适合需要离线备份和完全控制数据流向的高级用户。
3. **核心特色**：
   - **零数据丢失**：基于 diff3 自动合并，编辑优先于删除，所有操作均有历史记录。
   - **高效稳定**：支持大文件断点续传、重命名无需重新上传、原子写入防止文件损坏。
   - **隐私安全**：无遥测数据，支持端到端加密（含文件名），可通过二维码或链接快速配对新设备。
4. **使用建议**：安装前务必先部署 Selfsync 服务器（Rust 二进制文件），插件本身不提供服务。注意桌面端直接访问文件系统以确保写入安全，建议定期检查服务器存储状态，并利用“设备撤销”功能管理旧设备权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709369742000
title: 'Obsidian 插件：Roost Sync'
tags: ['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Sync your vault, settings and plugins with your own WebDAV server. Deletions are recorded on the server, so devices that were offline never bring deleted files back. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Roost Sync

> [!Note] 插件名片
> - 插件名称：Roost Sync
> - 插件作者：smal3
> - 插件说明：Sync your vault, settings and plugins with your own WebDAV server. Deletions are recorded on the server, so devices that were offline never bring deleted files back. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/576272658/roost-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?roost-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/576272658/roost-sync/master/README.md)



## 概述

**Roost Sync** 是一款基于 WebDAV 的 Obsidian 同步插件，支持桌面与移动端。

1. **主要功能**：同步 Vault 笔记、设置及插件至自建 WebDAV 服务器。
2. **适用场景**：多设备（手机/电脑）间保持数据一致，或需要利用脚本/AI 在服务器端直接编辑笔记的场景。
3. **核心特色**：
   - **智能删除记录**：服务器记录删除操作，离线设备重连时会将旧文件移入回收站，防止已删文件“复活”。
   - **自动合并冲突**：不同段落自动合并，相同行修改提供可视化窗口逐段合并。
   - **安全预览**：大规模删除或新设备上传前提供预览确认。
   - **重命名检测**：避免重命名文件被重复传输。
   - **自动清理**：30天后自动清理服务器垃圾及冲突归档。
4. **使用建议**：首次同步前务必备份 Vault；先在数据最完整的设备上运行“Sync now”以初始化服务器，再同步其他设备；确保 WebDAV 服务稳定（如 WsgiDAV）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



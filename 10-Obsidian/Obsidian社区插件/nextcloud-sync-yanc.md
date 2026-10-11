---
uid: 1791709368811000
title: 'Obsidian 插件：Nextcloud sync YANC'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Bidirectional Vault Nextcloud sync with smart/force modes, chunked uploads, and built-in exclusion of hidden files and dotfolders (the YANC fork). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nextcloud sync YANC

> [!Note] 插件名片
> - 插件名称：Nextcloud sync YANC
> - 插件作者：rosswang
> - 插件说明：Bidirectional Vault Nextcloud sync with smart/force modes, chunked uploads, and built-in exclusion of hidden files and dotfolders (the YANC fork). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/obsidian-nextcloud-sync-yanc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nextcloud-sync-yanc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/obsidian-nextcloud-sync-yanc/master/README.md)



## 概述

**插件总结：Nextcloud sync YANC**

1. **主要功能**
实现 Obsidian 库与 Nextcloud 之间的双向同步。支持智能合并与强制同步模式，采用分块上传技术，并自动排除隐藏文件及点文件夹。作为 YANC 分支，它增强了移动端（Android）登录稳定性，提供两阶段连接测试及同步会话历史记录。

2. **适用场景**
适用于需要在多台桌面电脑和移动设备间无缝切换工作的用户。特别适合依赖 Nextcloud 进行数据备份，或希望将 Obsidian 笔记同步至标准 WebDAV 服务器（功能稍减）的场景。

3. **核心特色**
*   **数据零丢失**：先进的合并逻辑确保多端同时编辑时，库状态始终保持一致。
*   **高效同步**：基于 Nextcloud 的差异同步机制，同步过程几乎无感，速度极快。
*   **独立分支优势**：相比上游项目，该分支专门优化了移动端体验，且拥有独立的插件 ID，可与原版插件共存（需注意版本兼容性）。

4. **使用建议**
*   首次安装需等待初始索引完成，之后即可享受后台静默同步。
*   若此前安装过旧版 ID 为 `nextcloud-sync` 的分支版本，请务必先卸载旧版，以避免文件夹冲突。
*   建议在多设备环境下测试同步逻辑，确保合并机制符合个人工作流。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



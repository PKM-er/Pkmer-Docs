---
uid: 1791709366684000
title: 'Obsidian 插件：Easy Cloud Sync'
tags: ['备份与恢复', '第三方工具集成', '移动端优化', 'obsidian插件']
description: 'Sync your vault to any S3-compatible store with clear conflict resolution and a mobile-friendly sync UI. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Easy Cloud Sync

> [!Note] 插件名片
> - 插件名称：Easy Cloud Sync
> - 插件作者：Geno Zhou
> - 插件说明：Sync your vault to any S3-compatible store with clear conflict resolution and a mobile-friendly sync UI. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/genozhou/easy-cloud-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-cloud-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/genozhou/easy-cloud-sync/master/README.md)



## 概述

**1. 主要功能**
Easy Cloud Sync 是一款支持双向同步的 Obsidian 插件，可将 Vault 同步至任意 S3 兼容存储（如 AWS S3、Cloudflare R2、MinIO 等）。它基于三方日志机制工作，支持启动时、定时（1-30分钟）及手动触发同步，并提供手动快照备份与恢复功能。

**2. 适用场景**
适用于希望完全掌控数据主权、使用私有云存储或自建对象存储服务的用户。特别适合需要在移动端和桌面端之间无缝切换，且对数据隐私和同步可靠性有较高要求的知识工作者。

**3. 核心特色**
*   **隐私安全**：直连用户配置的端点，无中间商、无遥测，数据完全由用户掌控。
*   **清晰冲突处理**：遇到冲突时暂停同步并在侧边栏列出，提供可视化 Diff 对比页面，支持“保留本地”、“保留云端”或“跳过”操作，避免盲目覆盖。
*   **移动友好 UI**：专为手机优化，采用侧边栏布局和大按钮设计，操作直观，解决冲突后自动返回主界面。
*   **多语言支持**：自动跟随 Obsidian 语言设置，中文环境显示中文界面。

**4. 使用建议**
建议用户仔细配置 S3 端点及凭证，确保网络可达。初次使用建议先进行手动同步测试，并开启“同步前快照”选项以增强安全性。遇到冲突时，务必通过 Diff 页面仔细比对内容后再做选择，避免误删重要修改。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



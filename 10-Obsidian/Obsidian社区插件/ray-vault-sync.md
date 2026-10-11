---
uid: 1791709369469000
title: 'Obsidian 插件：Ray Vault Sync'
tags: ['备份与恢复', '移动端优化', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Easy, free, cross-device GitHub sync for your vault with 3-way merge and zero silent data loss. Works seamlessly across Desktop and Mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ray Vault Sync

> [!Note] 插件名片
> - 插件名称：Ray Vault Sync
> - 插件作者：Raylabs
> - 插件说明：Easy, free, cross-device GitHub sync for your vault with 3-way merge and zero silent data loss. Works seamlessly across Desktop and Mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '移动端优化', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ufebri/ray-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ray-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ufebri/ray-vault-sync/master/README.md)



## 概述

**Ray Vault Sync** 是一款免费、轻量级的 Obsidian 跨设备同步插件，通过 GitHub REST API 实现数据同步，无需本地 Git 环境。

1. **主要功能**：利用 GitHub 仓库作为同步后端，支持批量原子提交和自动同步，无需安装 Git CLI 或 Xcode 等重型依赖。
2. **适用场景**：适合需要在 iOS、Android、macOS、Windows 及 Linux 等多平台间无缝同步笔记的用户，特别是希望避免付费云服务且追求数据安全的用户。
3. **核心特色**：
   - **无 Git 依赖**：纯 API 调用，轻量高效。
   - **零静默数据丢失**：采用严格的冲突安全策略，并发编辑时自动保留双版本（`.conflict-<timestamp>`），确保数据不丢失。
   - **智能防护**：内置速率限制保护、自定义排除规则及诊断健康检查工具。
4. **使用建议**：建议配置合理的自动同步间隔，利用排除功能忽略 `node_modules` 或 `private` 等无需同步的文件夹。注意该插件尚未经过 Obsidian 官方人工审核，使用前请确保 GitHub 仓库权限正确，并定期检查诊断工具以维持同步健康状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



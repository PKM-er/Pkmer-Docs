---
uid: 1791709370506000
title: 'Obsidian 插件：Torte'
tags: ['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
description: 'Sync a vault across your own devices through a server on your own Cloudflare account. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Torte

> [!Note] 插件名片
> - 插件名称：Torte
> - 插件作者：shikakun
> - 插件说明：Sync a vault across your own devices through a server on your own Cloudflare account. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shikakun/obsttorte)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsttorte)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shikakun/obsttorte/master/README.md)



## 概述

**1. 主要功能**
Torte 是一款基于 Cloudflare 架构（Workers、D1、R2）的 Obsidian 同步插件。它允许用户通过自托管服务器在自有设备间同步整个 Vault，包括笔记、插件及配置文件。

**2. 适用场景**
适用于希望完全掌控数据隐私、不愿依赖第三方同步服务（如 iCloud/OneDrive）的个人用户。特别适合拥有 Cloudflare 付费账户，且需要在多设备间保持笔记、设置及插件状态一致的场景。

**3. 核心特色**
*   **自托管隐私安全**：数据存储在用户自己的 Cloudflare 账户中，利用 Zero Trust 进行访问控制。
*   **完整同步**：不仅同步笔记，还包含 `.obsidian` 配置文件夹中的插件和设置。
*   **高级冲突处理**：支持文件级合并、可视化冲突解决界面以及可恢复的版本历史记录。
*   **CLI 部署**：提供命令行工具简化服务器创建与部署流程。

**4. 使用建议**
*   **前置条件**：必须拥有 Cloudflare Workers 付费计划（免费计划资源不足），并安装 Node.js 22+ 和 Obsidian 1.13.0+。
*   **部署步骤**：先使用 CLI (`npx obsttorte setup`) 创建并部署服务器，获取访问凭证；再在 Obsidian 中安装 Torte 插件并填入服务器 URL 及 Access 信息。
*   **注意**：每个 Vault 需独立配置一个服务器实例。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



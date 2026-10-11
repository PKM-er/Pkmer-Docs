---
uid: 1791709370855000
title: 'Obsidian 插件：Vault Nexus'
tags: ['搜索与排序', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Finds context-related notes for the current note using a local Miyo index and suggests links you accept or dismiss. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Nexus

> [!Note] 插件名片
> - 插件名称：Vault Nexus
> - 插件作者：schattenbeutel
> - 插件说明：Finds context-related notes for the current note using a local Miyo index and suggests links you accept or dismiss. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/waaboy/vault-nexus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-nexus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/waaboy/vault-nexus/master/README.md)



## 概述

**1. 主要功能**
Vault Nexus 利用本地 Miyo 索引，为当前笔记查找上下文相关的笔记。它提供带有匹配摘录和相关性分数的建议列表，允许用户接受（插入链接）或忽略这些建议。所有操作均需明确点击，绝不会自动修改笔记。

**2. 适用场景**
适用于桌面端 Obsidian 用户，特别是那些已经使用 Miyo 桌面应用进行本地知识管理的用户。适合在写作过程中快速发现并链接相关背景知识，增强笔记间的关联性。

**3. 核心特色**
*   **纯本地运行**：通过本地 HTTP API 与 Miyo 通信，无需账户、Token 或云端隧道，隐私安全。
*   **完全可控**：仅在用户手动刷新时搜索，无后台静默操作；支持“撤销”功能，可精确恢复笔记原状。
*   **智能过滤**：自动跳过当前笔记、已链接笔记、忽略文件夹及用户已忽略的配对，减少干扰。

**4. 使用建议**
*   **前置准备**：确保 Miyo 桌面应用正在运行，且当前 Vault 已添加至 Miyo 的索引文件夹中。
*   **操作习惯**：通过侧边栏图标或命令面板打开插件，点击“Refresh”获取最新建议。
*   **注意限制**：该插件仅支持桌面端，移动端不可用。安装后若未显示，请检查 Miyo 服务状态及端口 `8742` 是否被占用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



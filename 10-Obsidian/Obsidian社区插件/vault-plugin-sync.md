---
uid: 1791709370829000
title: 'Obsidian 插件：Vault Extension Sync'
tags: ['文件管理', '效率工具', '备份与恢复', 'obsidian插件']
description: 'Copy the plugins you installed in one vault into your other vaults, so you only download each plugin once. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Extension Sync

> [!Note] 插件名片
> - 插件名称：Vault Extension Sync
> - 插件作者：renyeren
> - 插件说明：Copy the plugins you installed in one vault into your other vaults, so you only download each plugin once. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/muzi-xiaoren/ObsidianSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-plugin-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/muzi-xiaoren/ObsidianSync/master/README.md)



## 概述

**1. 主要功能**
Vault Extension Sync 允许用户将已安装插件从一个库（Vault）一键同步至其他库，避免重复下载。它通过读取 Obsidian 配置自动发现库路径，实现单向复制（源库→目标库）。

**2. 适用场景**
适用于拥有多个 Obsidian 库且需保持插件一致性的桌面用户（需 Obsidian 1.13+，移动端不支持）。特别适合希望减少带宽消耗、简化多库插件维护的场景。

**3. 核心特色**
*   **智能同步**：基于内容哈希检测变更，支持预览差异（新增/更新/删除）及版本号对比。
*   **安全合并**：仅合并启用列表，不覆盖目标库独立启用的插件；默认排除 `data.json` 以保护各库独立的配置数据（如凭据）。
*   **原子写入**：采用临时文件重命名机制确保写入安全，无网络请求，仅操作本地文件系统。

**4. 使用建议**
*   在设置中指定“源库”，其余库自动作为目标。
*   同步前务必检查预览对话框，确认变更细节。
*   若需强制覆盖或同步插件配置（`data.json`），请在对话框中手动开启相应选项。
*   注意：该插件仅处理插件文件，不涉及笔记内容同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



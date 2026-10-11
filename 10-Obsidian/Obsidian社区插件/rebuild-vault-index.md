---
uid: 1791709369508000
title: 'Obsidian 插件：Rebuild Vault Index'
tags: ['文件管理', '效率工具', '自定义命令', 'obsidian插件']
description: 'Sidebar button to rescan hidden folders, refresh the file tree, reindex the metadata cache, and reload community plugins. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rebuild Vault Index

> [!Note] 插件名片
> - 插件名称：Rebuild Vault Index
> - 插件作者：Dominik Bach
> - 插件说明：Sidebar button to rescan hidden folders, refresh the file tree, reindex the metadata cache, and reload community plugins. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mit-bach/rebuild-vault-index)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rebuild-vault-index)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mit-bach/rebuild-vault-index/master/README.md)



## 概述

**1. 插件主要功能**
Rebuild Vault Index 提供侧边栏按钮，用于一键执行库重建操作。具体包括：重新扫描磁盘上的隐藏文件夹，刷新文件树结构，重新索引元数据缓存，并重新加载除自身外的所有已启用社区插件。

**2. 适用场景**
适用于需要手动管理隐藏文件夹（如 `.git`、`.obsidian` 等点文件夹）或嵌套隐藏目录的用户。当修改了隐藏文件夹配置、文件树显示异常或元数据缓存不同步时，无需进入设置页逐项操作，直接通过此插件快速恢复状态。

**3. 核心特色**
*   **一键集成**：将原本分散在“嵌套隐藏文件夹”设置中的多个步骤（扫描、启用、索引、刷新、重载）整合为单次点击操作。
*   **独立面板**：通过丝带图标或命令“Open rebuild sidebar”手动打开专用面板，不自动干扰工作流。
*   **智能排除**：重载插件时自动跳过当前插件，避免冲突。

**4. 使用建议**
*   通过点击侧边栏刷新图标或执行命令打开面板，按需点击重建。
*   **重要提示**：若同时启用“Nested Hidden Folders”插件，请确保禁用本插件的“Hidden Folders Access”功能，以避免潜在冲突。
*   该插件未经 Obsidian 官方人工审核，请谨慎使用并备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



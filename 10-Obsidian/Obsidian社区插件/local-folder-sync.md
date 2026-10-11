---
uid: 1791709368184000
title: 'Obsidian 插件：Local Folder Sync'
tags: ['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Sync Obsidian folders to external directories. Supports multiple folder pairs. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Folder Sync

> [!Note] 插件名片
> - 插件名称：Local Folder Sync
> - 插件作者：Jens Eldering
> - 插件说明：Sync Obsidian folders to external directories. Supports multiple folder pairs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/scribilicious/local-folder-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-folder-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scribilicious/local-folder-sync/master/README.md)



## 概述

**Local Folder Sync** 是一款用于将 Obsidian 库文件夹同步至外部目录的插件，支持多组文件夹配对及灵活的双向/单向同步。

**主要功能**：实现库内文件夹与外部目录的文件同步，支持“单向同步”（源覆盖目标，自动清理多余文件）和“新文件优先”双向同步（以最新修改为准，保留独有文件，不自动删除）。

**适用场景**：适合需要将笔记部分同步至外部存储、备份系统或其他应用目录，且希望保持库内其他部分独立的用户。

**核心特色**：
1. **多对配置**：可同时管理多个源-目标文件夹对，每对独立设置同步模式。
2. **灵活触发**：支持按时间间隔自动同步、文件变更即时同步，或通过命令面板/状态栏手动触发。
3. **状态可视**：状态栏实时显示同步运行状态及结果。

**使用建议**：
- 根据需求选择模式：若需严格镜像外部目录，选单向；若需合并两边变更且保留历史，选双向。
- 注意单向同步会删除目标端多余文件，操作前请确认备份。
- 安装后若更新插件，建议完全重启 Obsidian 以确保模块正确加载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



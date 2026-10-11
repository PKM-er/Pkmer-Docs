---
uid: 1791709370192000
title: 'Obsidian 插件：Sync Assets'
tags: ['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Detect and repair oversized community plugin assets skipped by Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sync Assets

> [!Note] 插件名片
> - 插件名称：Sync Assets
> - 插件作者：Hasan Yılmaz
> - 插件说明：Detect and repair oversized community plugin assets skipped by Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hasanyilmaz/sync-assets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-assets)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hasanyilmaz/sync-assets/master/README.md)



## 概述

**Sync Assets** 是一款用于修复 Obsidian 社区插件文件缺失或不完整问题的工具插件。

1. **主要功能**：检测并修复因 Obsidian Sync 标准版 5MB 文件限制导致的大体积插件核心文件（如 `main.js`）同步失败或损坏的问题，确保多设备间插件文件完整一致。
2. **适用场景**：适用于使用 Obsidian Sync 且安装了大型社区插件的用户，或在使用其他文件同步服务后出现插件文件不一致、缺失的情况。
3. **核心特色**：
   - **自动监控**：启动时自动检查，并监测同步延迟到达的文件。
   - **安全修复**：通过 SHA-256 校验确保文件来自官方发布版本，修复前自动备份，失败可回滚。
   - **操作确认**：所有修复操作均需用户手动确认，绝不修改插件设置或私有数据，不支持自定义下载源。
4. **使用建议**：在设置中启用“启动时自动检查”，选择需监控的插件。若发现异常，建议先预览问题详情，再选择“修复”或“修复并重载”。也可通过命令面板随时手动触发完整性检查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



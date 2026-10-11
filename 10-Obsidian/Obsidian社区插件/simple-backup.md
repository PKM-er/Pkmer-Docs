---
uid: 1791709369960000
title: 'Obsidian 插件：Simple Backup'
tags: ['备份与恢复', '文件管理', '效率工具', 'obsidian插件']
description: 'Backs up the vault to a folder of your choice, versioned by date and time, in the background without blocking the interface, with automatic daily/weekly/monthly retention. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Simple Backup

> [!Note] 插件名片
> - 插件名称：Simple Backup
> - 插件作者：Laszlo Repassy
> - 插件说明：Backs up the vault to a folder of your choice, versioned by date and time, in the background without blocking the interface, with automatic daily/weekly/monthly retention. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/laszlorepassy/obsidian-simple-backup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/laszlorepassy/obsidian-simple-backup/master/README.md)



## 概述

**1. 主要功能**
Simple Backup 是一款极简的本地备份插件，负责将 Obsidian 库完整复制到指定文件夹。它通过时间戳（日期+时间）对备份进行版本管理，并依据用户设定的保留策略（每日/每周/每月数量）自动清理旧备份，确保存储空间高效利用。

**2. 适用场景**
适用于已使用其他同步服务，但需要额外本地或网络驱动器作为“安全网”的用户。特别适合不依赖云端、希望拥有完全离线备份控制权的场景，或用于定期归档重要笔记库。

**3. 核心特色**
*   **非阻塞后台运行**：采用 Node.js 异步文件操作，备份过程在后台线程执行，界面永不卡顿或冻结。
*   **智能保留策略**：自动修剪旧快照，仅记录错误日志，保持插件文件夹整洁。
*   **灵活触发机制**：支持手动触发、启动时、每小时及每日定时备份。若定时备份失败（如磁盘未连接），系统会自动重试。
*   **实时进度反馈**：提供持续更新的通知，显示已复制文件数和大小。
*   **自动过滤**：默认排除 `.git`、`node_modules` 等无关文件，可自定义配置。

**4. 使用建议**
建议将目标文件夹设置在本地硬盘或网络驱动器上，以区别于云同步路径。用户应根据存储容量合理设置保留策略（如保留最近7天每日备份、4周每周备份）。由于该插件未通过官方人工审核，请确保目标路径权限正确，并定期检查 `backup-errors.log` 以排查潜在问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



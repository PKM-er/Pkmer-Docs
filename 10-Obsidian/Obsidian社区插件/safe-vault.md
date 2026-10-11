---
uid: 1791709369773000
title: 'Obsidian 插件：Safe Vault'
tags: ['备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
description: 'Backup your vault as an archive, with optional encryption and Git version control. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Safe Vault

> [!Note] 插件名片
> - 插件名称：Safe Vault
> - 插件作者：Eghosa Osayande
> - 插件说明：Backup your vault as an archive, with optional encryption and Git version control. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/eghosa-osayande/safe_vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?safe-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/eghosa-osayande/safe_vault/master/README.md)



## 概述

**Safe Vault** 是一款基于归档的 Obsidian 备份插件，支持加密与 Git 版本控制。

**主要功能**：创建 Vault 归档备份，支持文件排除、使用 `age` 加密、通过 Git 管理版本及同步远程仓库，并支持从备份恢复。

**适用场景**：适合需要本地快照、远程同步或高安全性（加密）备份的用户，特别是依赖 Git 工作流的笔记管理者。

**核心特色**：
1. **灵活存储**：备份目录可位于 Vault 内部（需排除）或外部。
2. **安全增强**：可选 `age` 加密，确保备份数据安全。
3. **版本管理**：集成 Git，支持 Push/Pull 实现多设备同步和历史回溯。
4. **依赖明确**：需系统预装 `tar`、`age` 和 `git` 并配置在 PATH 中。

**使用建议**：
1. **环境准备**：确保已安装 `tar`、`git` 及 `age`（若需加密），并验证命令行可用性。
2. **目录配置**：若备份目录在 Vault 内，务必在设置中将其排除，避免递归备份。
3. **远程同步**：配置 Git 远程仓库以实现异地备份，定期执行“Backup and Push”命令。
4. **恢复测试**：定期测试“Restore from Backup”功能，确保备份文件完整可用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



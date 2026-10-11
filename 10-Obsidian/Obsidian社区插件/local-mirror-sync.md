---
uid: 1791709370122000
title: 'Obsidian 插件：Stateful Git Sync'
tags: ['第三方工具集成', '备份与恢复', '文件管理', '安全与隐私', 'obsidian插件']
description: 'Synchronize vaults across devices via GitHub using verified baselines, file identities and deletion records, with explicit conflict review and recovery. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Stateful Git Sync

> [!Note] 插件名片
> - 插件名称：Stateful Git Sync
> - 插件作者：yyhzyjk
> - 插件说明：Synchronize vaults across devices via GitHub using verified baselines, file identities and deletion records, with explicit conflict review and recovery. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zainhuang/stateful-git-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-mirror-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zainhuang/stateful-git-sync/master/README.md)



## 概述

**Stateful Git Sync** 是一款基于 GitHub 的 Obsidian 多设备同步插件，旨在解决传统 Git 同步在笔记管理中的局限性。

**主要功能**：通过追踪“最后验证基线”、本地变更及远程变更，实现笔记、附件及删除操作的状态同步。它利用文件身份标识和删除记录（墓碑），确保所有设备达到一致的审查状态。

**适用场景**：适合需要跨多台设备（包括手机、电脑）同步 Obsidian 库，且对数据完整性、文件重命名及删除操作有较高要求的用户。

**核心特色**：
1. **状态感知**：不仅比较当前副本，还对比基线，精准识别离线设备的删除意图。
2. **身份追踪**：独立追踪文件逻辑身份，正确处理重命名，避免路径冲突。
3. **显式冲突处理**：拒绝自动合并或“最后写入胜出”，强制用户明确选择保留本地或远程版本，防止数据意外覆盖。
4. **安全初始化**：新设备从远程清单初始化，避免误删远程文件。

**使用建议**：在遇到冲突时，请仔细审查插件提示，手动决定保留哪个版本；若需合并内容，建议分别保存两份副本进行手动整合。该插件适合追求数据绝对安全、不愿承担自动合并风险的高级用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709369080000
title: 'Obsidian 插件：Oppsyncer'
tags: ['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Deterministic desktop and mobile vault sync through GitHub with automatic recovery snapshots. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Oppsyncer

> [!Note] 插件名片
> - 插件名称：Oppsyncer
> - 插件作者：Low Nam Lee
> - 插件说明：Deterministic desktop and mobile vault sync through GitHub with automatic recovery snapshots. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lownamlee/Oppsyncer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsyncer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lownamlee/Oppsyncer/master/README.md)



## 概述

**1. 主要功能**
Oppsyncer 是一款通过私有 GitHub 仓库实现 Obsidian 库在桌面端与移动端同步的插件。它无需本地 Git 环境，采用“确定性同步”机制，确保数据一致性，并自动创建恢复快照以防数据丢失。

**2. 适用场景**
专为单人使用、多设备（如手机+电脑）切换编辑的场景设计。特别适合那些担心因网络延迟、离线编辑或设备状态不同步而导致数据冲突的用户。

**3. 核心特色**
*   **安全同步规则**：遵循“先推者胜”原则，绝不强制推送（force-push）或产生合并提交。若发生冲突，败方设备会自动将本地修改保存至独立的恢复分支，并通知用户，避免覆盖风险。
*   **多重防护机制**：包括内容扫描检测本地变更、SHA 校验远程文件、路径验证，以及排除 `.obsidian` 配置、缓存等敏感文件同步。
*   **自动恢复**：在冲突时自动创建带时间戳的恢复分支，确保未发布的编辑内容可追溯。

**4. 使用建议**
目前处于公开测试阶段，建议先使用**一次性测试库**和仓库进行验证，确认稳定后再用于重要笔记。注意该插件仅支持单人单设备编辑模式，不适用于多人协作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



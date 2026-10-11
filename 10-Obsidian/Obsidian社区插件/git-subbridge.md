---
uid: 1791709367272000
title: 'Obsidian 插件：Git Subbridge'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: 'Adds a custom Git bridge for committing nested repositories in an Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Git Subbridge

> [!Note] 插件名片
> - 插件名称：Git Subbridge
> - 插件作者：zhu
> - 插件说明：Adds a custom Git bridge for committing nested repositories in an Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhu1j/git-subbridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-subbridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhu1j/git-subbridge/master/README.md)



## 概述

**Git Subbridge** 是一款专为 Obsidian 设计的 Git 扩展插件，旨在解决嵌套子仓库无法被主仓库正常提交或同步的问题。

**适用场景**：适用于在 Obsidian 笔记库中管理包含独立 Git 仓库的子文件夹（如代码片段、独立项目等），需要将这些嵌套仓库与主库一起进行版本控制和同步的场景。

**核心特色**：
1. **智能扫描**：在源代码控制栏提供“Sub-git scan”按钮，自动识别包含 `.git` 的子文件夹。
2. **双模式支持**：提供“独占重命名”（Exclusive rename）和“侧车复制”（Sidecar copy）两种元数据处理模式，后者特别优化了 Windows 系统下的目录锁定错误。
3. **安全机制**：具备操作日志记录功能，若提交中断，下次启动时可自动恢复状态。
4. **本地化**：支持中文界面及按钮提示翻译。

**使用建议**：
1. 安装后需**禁用**原有的 Obsidian Git 插件，避免两个插件同时操作同一仓库导致冲突。
2. 在源代码控制视图中，点击“Sub-git scan”按钮触发扫描。
3. 该插件主要覆盖“提交所有”（Commit all）及默认同步路径，仅暂存（Staged）的提交可能不被自动桥接，建议优先使用全量提交功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



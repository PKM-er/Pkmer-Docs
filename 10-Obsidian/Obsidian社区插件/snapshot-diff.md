---
uid: 1791709370057000
title: 'Obsidian 插件：Snapshot Diff'
tags: ['备份与恢复', '编辑工具', '文件管理', 'obsidian插件']
description: 'Take quick snapshots of notes and compare them, file recovery versions or git commits side by side with the live note. Highlights, an editable current side and one-click restore of changed blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Snapshot Diff

> [!Note] 插件名片
> - 插件名称：Snapshot Diff
> - 插件作者：arghonis
> - 插件说明：Take quick snapshots of notes and compare them, file recovery versions or git commits side by side with the live note. Highlights, an editable current side and one-click restore of changed blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '编辑工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/miguelpafume/SnapshotDiff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?snapshot-diff)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/miguelpafume/SnapshotDiff/master/README.md)



## 概述

**1. 主要功能**
Snapshot Diff 允许用户快速保存笔记快照，并将任意历史版本（快照、File Recovery 自动备份或 Git 提交）与当前笔记进行并排对比。它提供完整的全文视图，逐词高亮显示差异，支持在对比时直接编辑右侧当前笔记，并可一键从左侧历史版本恢复特定变更块。

**2. 适用场景**
适用于需要频繁重写、修改长文或进行重大结构调整的场景。特别适合依赖 Git 进行版本控制的用户，或希望利用 Obsidian 原生文件恢复功能进行精细回溯的笔记作者。

**3. 核心特色**
*   **多源版本集成**：统一展示自定义快照、核心插件自动备份及 Git 提交记录。
*   **智能差异展示**：整词高亮确保重写句子仍具可读性，行号对齐且填充空格有斜纹标识，避免误判。
*   **实时交互**：右侧为实时可编辑笔记，左侧只读但可复制；提供箭头按钮实现变更块的快速还原。

**4. 使用建议**
建议在重大修改前使用“Take named snapshot”命令保存带名称的快照，便于后续定位。利用“Compare with previous version”命令打开选择器，可快速浏览最近5个版本的快照、备份或Git提交。注意该插件需配合 File Recovery 插件或 Git 仓库使用以发挥最大效能，且 Git 对比功能仅限桌面端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



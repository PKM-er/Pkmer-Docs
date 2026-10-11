---
uid: 1791709368188000
title: 'Obsidian 插件：Local Graph Depth'
tags: ['图表与可视化', '界面优化', '图谱', 'obsidian插件']
description: 'Open local graph views at a configurable default depth. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Graph Depth

> [!Note] 插件名片
> - 插件名称：Local Graph Depth
> - 插件作者：Chandra Sivaraman
> - 插件说明：Open local graph views at a configurable default depth. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '界面优化', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cs31415/graph-settings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-graph-depth)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cs31415/graph-settings/master/README.md)



## 概述

**1. 主要功能**
该插件用于自定义 Obsidian 本地视图（Local Graph）的默认显示深度。它允许用户设定一个初始深度值（1-5），并在打开新视图时自动折叠控制面板，解决原生默认深度仅为1且面板遮挡视野的问题。

**2. 适用场景**
适用于频繁使用本地视图梳理笔记关联的用户，特别是那些觉得默认深度太浅、需要手动调整滑块或希望界面更整洁（隐藏齿轮设置面板）的场景。

**3. 核心特色**
*   **自动优化**：新打开的本地视图自动应用设定深度并折叠控制栏，减少手动操作。
*   **全局同步**：在设置中调整深度滑块时，所有已打开的本地视图会立即同步更新。
*   **非侵入性**：仅当视图处于默认状态时介入，尊重用户手动调整后的状态；恢复工作区时保留保存时的状态。
*   **安全机制**：仅使用公开 API（getState/setState），不破坏核心功能。

**4. 使用建议**
建议将默认深度设为 2 或 3，以平衡视野范围与性能。开启“折叠控制栏”可提升视觉体验。若希望完全保持原生行为，可将深度设为 1。安装后需在设置中启用插件，并可通过社区插件列表或手动下载文件进行安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365304000
title: 'Obsidian 插件：Anchor Notes'
tags: ['导航与状态栏', '文件管理', '效率工具', 'obsidian插件']
description: 'Define Anchor Notes with Regex, use Anchors for navigation. Alternative to the popular Folder Notes + Waypoint plugin. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anchor Notes

> [!Note] 插件名片
> - 插件名称：Anchor Notes
> - 插件作者：Julius
> - 插件说明：Define Anchor Notes with Regex, use Anchors for navigation. Alternative to the popular Folder Notes + Waypoint plugin. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/julius-gmeinder/anchor-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anchor-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/julius-gmeinder/anchor-notes/master/README.md)



## 概述

**1. 主要功能**
Anchor Notes 是一款 Obsidian 插件，允许用户通过正则表达式（Regex）定义“锚点笔记”。它提供了基于 `%% Anchor %%` 标记的导航功能，作为“Folder Notes + Waypoint”组合的替代方案，无需依赖 Folder Notes 插件即可实现类似的锚点跳转体验。

**2. 适用场景**
适用于希望在不安装 Folder Notes 插件的情况下，利用正则表达式灵活指定哪些笔记可以包含锚点，并需要在笔记间通过锚点进行快速导航的用户。

**3. 核心特色**
*   **正则定义**：仅匹配特定正则模式的笔记才支持锚点功能，提供更高的灵活性。
*   **Waypoint 兼容**：核心逻辑借鉴自 Waypoint 插件，使用 `%% Anchor %%` 触发，`%% Anchor Start/End %%` 界定范围。
*   **独立运行**：无需依赖 Folder Notes，简化了插件依赖链。

**4. 使用建议**
*   **源码构建**：该插件目前需从 GitHub 源码手动构建（`git clone` -> `npm install` -> `npm run build`），并复制至插件目录，无法直接通过社区插件市场安装。
*   **潜在风险**：作者声明开发过程中使用了 AI 辅助，虽经代码审查，但仍可能存在未预见的 Bug 或异常行为，建议谨慎使用并反馈问题。
*   **未官方审核**：该插件未经 Obsidian 官方人工审核，请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365812000
title: 'Obsidian 插件：Canvas Inbox Sync'
tags: ['任务管理', '效率工具', '数据处理', 'obsidian插件']
description: 'Collects unchecked tasks from Obsidian Canvas cards into an Inbox card. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Inbox Sync

> [!Note] 插件名片
> - 插件名称：Canvas Inbox Sync
> - 插件作者：Torus Hidenami
> - 插件说明：Collects unchecked tasks from Obsidian Canvas cards into an Inbox card. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/torus211/canvas-inbox-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-inbox-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/torus211/canvas-inbox-sync/master/README.md)



## 概述

**1. 主要功能**
该插件自动将 Obsidian Canvas 画布中其他文本卡片里的未勾选任务（Markdown 复选框），同步汇总到一个名为“Входящие”（收件箱）的卡片中。支持双向同步：在源卡片勾选任务会从收件箱移除；在收件箱勾选则自动标记源任务完成。

**2. 适用场景**
适用于使用 Obsidian Canvas 进行视觉化任务管理、项目规划或工作流梳理的用户，特别适合需要在一个总览视图中快速查看和处理分散在各处待办事项的场景。

**3. 核心特色**
*   **双向同步**：源卡片与收件箱卡片状态实时联动，确保数据一致性。
*   **格式清晰**：收件箱条目以“主题 :: 任务”格式展示，便于快速定位来源。
*   **自动轮询**：鉴于 Canvas 保存机制特殊，插件每 2 秒轮询一次文件，确保同步的及时性。

**4. 使用建议**
*   **命名规范**：务必在 Canvas 中添加一个文本卡片，并将其第一个标题严格设置为 `# Входящие`，否则插件无法识别。
*   **任务格式**：在其他卡片中使用标准 Markdown 复选框语法（`- [ ] 任务`）。
*   **安装方式**：可通过社区插件市场安装，或手动下载 Release 文件至 `.obsidian/plugins/canvas-inbox-sync/` 目录并启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



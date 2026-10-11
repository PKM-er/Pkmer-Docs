---
uid: 1791709367995000
title: 'Obsidian 插件：Leftovers'
tags: ['任务管理', '模板与链接处理', '日历与时间', '效率工具', 'obsidian插件']
description: 'Pull unfinished checkboxes from previous daily notes into the current daily note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Leftovers

> [!Note] 插件名片
> - 插件名称：Leftovers
> - 插件作者：MrVersano
> - 插件说明：Pull unfinished checkboxes from previous daily notes into the current daily note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '模板与链接处理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mrversano/obsidian-leftovers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?leftovers)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mrversano/obsidian-leftovers/master/README.md)



## 概述

**1. 主要功能**
Leftovers 插件可将之前日记或周记中未完成的待办事项（复选框）自动迁移至当前笔记。它会移除源笔记中的这些任务，避免重复堆积，确保任务不遗漏。

**2. 适用场景**
适用于使用 Obsidian 进行日常或每周任务管理的用户，特别是希望保持当前笔记整洁、自动继承历史遗留任务，防止旧笔记中未完成任务被遗忘的场景。

**3. 核心特色**
*   **智能迁移**：仅移动未勾选 `[ ]` 的任务，已完成项保留在原处。
*   **层级保留**：未完成任务下的子任务及缩进内容会随主任务一同移动。
*   **类型匹配**：日记仅从之前的日记拉取，周记仅从之前的周记拉取，互不干扰。
*   **安全机制**：忽略 Frontmatter 和代码块中的任务，且绝不触碰日期晚于当前笔记的内容。

**4. 使用建议**
*   在命令面板中执行“Pull unfinished tasks into this note”，建议绑定快捷键以提高效率。
*   注意撤销操作（Ctrl/Cmd+Z）仅移除当前笔记中的新任务，**不会**将其还原回源笔记，操作前请确认。
*   若子任务属于已完成的主任务，迁移后该子任务将提升为顶级任务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



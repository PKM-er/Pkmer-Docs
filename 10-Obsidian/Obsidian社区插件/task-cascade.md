---
uid: 1791709370305000
title: 'Obsidian 插件：Task Cascade'
tags: ['任务管理', '效率工具', '自动化与AI', 'obsidian插件']
description: 'Keeps parent checkboxes in sync with their children status using configurable rules. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Cascade

> [!Note] 插件名片
> - 插件名称：Task Cascade
> - 插件作者：Nikolai Voronin
> - 插件说明：Keeps parent checkboxes in sync with their children's status using configurable rules. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nikvoronin/task-cascade)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-cascade)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nikvoronin/task-cascade/master/README.md)



## 概述

**1. 主要功能**
Task Cascade 自动同步父级任务与子任务的状态。当子任务状态变更时，插件会根据可配置规则自动更新父级复选框标记（如 `[x]`、`[/]` 等），并支持快速标记任务为“完成后删除”。

**2. 适用场景**
适用于使用 Obsidian 进行项目分解、任务管理或待办事项追踪的用户，特别是那些习惯通过嵌套列表构建复杂任务层级，且希望避免手动维护父子任务状态一致性的场景。

**3. 核心特色**
*   **智能同步**：采用自底向上的解析逻辑，仅在状态实际变化时重写标记，避免不必要的文件修改。
*   **多状态支持**：兼容 Todo、Done、Cancelled、In Progress 等多种状态标记。
*   **灵活配置**：允许用户自定义同步规则，并支持在特定笔记中禁用级联功能。
*   **容错机制**：自动忽略未识别的状态标记，将其视为普通列表项，不影响上层任务逻辑。

**4. 使用建议**
*   **版本要求**：请确保 Obsidian 版本为 1.13.0 或更高；若使用旧版本，请安装 0.2.2 版本。
*   **注意布局**：插件基于文本层级工作，建议保持任务列表的缩进结构清晰，以确保父子关系正确识别。
*   **状态规范**：尽量使用插件支持的标准状态标记，避免使用自定义字符，以防任务被忽略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: "1791709368897000"
title: "Obsidian 插件：Notes to Actions"
tags: ['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: "Import today's daily-note tasks directly into Super Productivity, matching hashtags to existing tags. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Notes to Actions

> [!Note] 插件名片
> - 插件名称：Notes to Actions
> - 插件作者：Mostafa ElAraby
> - 插件说明：Import today's daily-note tasks directly into Super Productivity, matching hashtags to existing tags. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mostafaelaraby/obsidian-notes-to-actions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?super-productivity)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mostafaelaraby/obsidian-notes-to-actions/master/README.md)



## 概述

**1. 主要功能**
该插件可将 Obsidian 每日笔记中的未完成任务（复选框）一键同步至 Super Productivity 的“今日”视图。它通过本地 REST API 直接连接，无需额外配对步骤，支持自动匹配现有标签并保留任务与笔记的双向链接。

**2. 适用场景**
适合同时使用 Obsidian 记录日常事项、使用 Super Productivity 管理执行流程的用户。特别适用于希望将零散的每日待办快速转化为结构化任务列表，以进行高效时间管理和执行追踪的场景。

**3. 核心特色**
*   **无缝集成**：直接调用本地 API，无需中间件或复杂配置。
*   **智能标签**：仅匹配 Super Productivity 中已存在的标签（忽略大小写），不自动创建新标签，未匹配标签保留为文本。
*   **非破坏性同步**：仅读取未勾选任务，不修改原笔记，无后台同步或状态回写。
*   **稳健性**：支持嵌套列表和引用块，具备断点续传功能，自动跳过已导入或归档的任务。

**4. 使用建议**
*   确保使用 Obsidian 桌面版（1.7.7+）和 Super Productivity 桌面版（19.0.1+），且两者运行在同一台电脑上。
*   需在 Super Productivity 中启用本地 REST API，并在插件设置中填入访问令牌。
*   建议在插件设置中正确配置每日笔记的文件夹路径及文件名格式（如包含年月子文件夹），以确保准确定位笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


---
uid: 1791709369136000
title: 'Obsidian 插件：PARA Review'
tags: ['任务管理', '文件管理', '日历与时间', '效率工具', 'obsidian插件']
description: 'Review an Inbox and explicitly process notes whose review date has expired. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PARA Review

> [!Note] 插件名片
> - 插件名称：PARA Review
> - 插件作者：Eugeny
> - 插件说明：Review an Inbox and explicitly process notes whose review date has expired. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '文件管理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jjuchara/obsidian-para-inbox-review)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?para-inbox-review)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jjuchara/obsidian-para-inbox-review/master/README.md)



## 概述

**1. 主要功能**
PARA Review 是一款基于 PARA 方法的 Obsidian 插件，提供独立的收件箱（Inbox）处理与过期笔记审查工作流。它支持按 FIFO 顺序处理收件箱笔记，将其分类至 PARA 文件夹并自动补全元数据；同时能识别已过期的项目或笔记，提供重新排期、归档或移至回收站的功能。

**2. 适用场景**
适用于采用 PARA 知识管理系统的用户，特别是需要定期清理收件箱积压、追踪项目截止日期，并需要严格管理笔记生命周期（如归档、删除）的场景。

**3. 核心特色**
*   **安全机制**：执行前进行预检，若多步操作无法完全回滚，会生成精确的恢复报告，防止数据丢失。
*   **灵活日期处理**：支持多种日期格式输入，重新排期时统一写入 ISO 格式。
*   **项目全生命周期管理**：支持归档整个项目文件夹，并在主笔记中记录移动历史；恢复归档项目时需填写理由，确保操作可追溯。
*   **非侵入式**：不干扰 Obsidian 原生编辑器，仅处理指定文件夹，不涵盖日常笔记或通用搜索。

**4. 使用建议**
建议用户先配置好 PARA 文件夹结构及收件箱路径。在处理过期项目时，务必设置“归档前所需的新项目状态”，以避免误归档。由于插件强调数据安全性，建议在重要操作前备份，并熟悉其“暂停审查”和“跳过”功能以灵活控制工作流节奏。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



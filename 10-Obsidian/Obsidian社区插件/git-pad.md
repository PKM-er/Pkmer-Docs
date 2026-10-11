---
uid: 1791709367270000
title: 'Obsidian 插件：Git Pad'
tags: ['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Sync Markdown files in an Obsidian vault folder with a GitHub repository. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Git Pad

> [!Note] 插件名片
> - 插件名称：Git Pad
> - 插件作者：Alberto
> - 插件说明：Sync Markdown files in an Obsidian vault folder with a GitHub repository. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/albibenni/git-tab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-pad)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/albibenni/git-tab/master/README.md)



## 概述

**Git Pad** 是一款专为移动端（尤其是 iPadOS）设计的 Obsidian 插件，通过 GitHub REST API 实现本地库与远程仓库的同步，无需本地安装 Git、Node.js 或 SSH。

**主要功能**：支持从 GitHub 拉取更新、将本地变更提交并推送至指定分支，以及将仓库完整克隆至空白库。

**适用场景**：适合 iPad 用户或无终端环境者，实现跨设备笔记同步，尤其适用于依赖移动设备记录知识的场景。

**核心特色**：
1. **免依赖**：纯 API 驱动，无需原生 Git 环境。
2. **高效同步**：记忆上次提交状态，未变更时跳过全量扫描，提升速度。
3. **安全机制**：首次拉取时保留本地不同文件为冲突，避免数据覆盖；支持强制拉取模式。
4. **可视化状态**：侧边栏实时显示仓库状态、提交历史及同步进度，具备超时错误提示。

**使用建议**：
- 首次使用建议先“克隆”到空白库以建立基准。
- 日常使用通过侧边栏执行“拉取”和“推送”，注意网络稳定性。
- 若需严格以远程为准，可启用“强制拉取”；否则建议保留冲突处理机制以防误删。
- 可通过设置“远程文件夹”限制同步范围，提高针对性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



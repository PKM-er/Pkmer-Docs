---
uid: 1791709367268000
title: "Obsidian 插件：Git Graph"
tags: ['图表与可视化', '第三方工具集成', '导航与状态栏', 'obsidian插件']
description: "VS Code's source control graph as a side pane: lanes, refs, and commit details for the vault's git repository. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Git Graph

> [!Note] 插件名片
> - 插件名称：Git Graph
> - 插件作者：Luis Mendez
> - 插件说明：VS Code's source control graph as a side pane: lanes, refs, and commit details for the vault's git repository. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/luis85/obsidian-git-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/luis85/obsidian-git-graph/master/README.md)



## 概述

**插件名称**：Git Graph

**主要功能**
该插件在 Obsidian 侧边栏中提供类似 VS Code 的源代码控制图形视图。它可视化展示 Vault 所在 Git 仓库的提交历史，包括彩色分支泳道、提交主题、作者、日期及分支/标签徽章。支持点击提交查看完整消息和变更文件列表，并显示未提交的更改状态。

**适用场景**
适用于将 Obsidian Vault 作为 Git 仓库管理的用户，特别是需要直观查看版本历史、分支结构及当前工作区状态的场景。仅限桌面端使用（Obsidian 1.13+）。

**核心特色**
1. **纯只读安全**：插件仅执行读取类 Git 命令（如 `log`, `status`），绝不执行任何修改仓库的操作（如 commit, push），确保数据安全。
2. **实时同步**：通过监听 `.git` 目录变化，当发生提交或分支切换时自动刷新视图。
3. **交互便捷**：点击提交可展开查看具体文件，直接点击文件名即可在编辑器中打开（已删除文件以删除线显示且不可打开）。

**使用建议**
确保系统已安装 Git（版本 2.13+）且在 PATH 中，或在插件设置中手动指定 Git 可执行文件路径。若 Vault 位于大型仓库的子文件夹中，插件能正确解析路径。注意该插件未经过 Obsidian 官方人工审核，但明确声明了其仅读取文件系统与调用 Git 读取命令的行为。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

---
uid: 1791709368835000
title: 'Obsidian 插件：Not Submodules'
tags: ['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Replace git submodules with plain nested git repos, ignored via .gitignore and tracked via folder-note frontmatter. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Not Submodules

> [!Note] 插件名片
> - 插件名称：Not Submodules
> - 插件作者：Dan
> - 插件说明：Replace git submodules with plain nested git repos, ignored via .gitignore and tracked via folder-note frontmatter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/obsidian-not-submodules)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?not-submodules)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/obsidian-not-submodules/master/README.md)



## 概述

**Not Submodules** 是一款旨在解决 Obsidian 中 Git 子模块（submodules）脆弱性的插件，特别优化了移动端（如 iOS 终端）的使用体验。

**主要功能**
该插件用普通的嵌套 Git 仓库替代传统的子模块。它通过扫描 Vault 文件系统自动发现嵌套的 `.git` 目录，并利用自维护的 pre-commit 钩子自动更新 `.gitignore`，从而将嵌套仓库排除在 Vault 主仓库的历史记录之外，无需手动配置 `.gitmodules`。

**适用场景**
适用于需要在 Obsidian 中管理多个独立 Git 仓库（如笔记库、代码片段或外部资源）的用户，尤其是依赖移动端或终端模拟器（如 iSH）进行同步的用户。

**核心特色**
1. **自动同步**：安装钩子后，每次提交前自动重新扫描并同步忽略规则，无需遵循特定文件夹命名规范。
2. **智能识别**：能自动识别原始克隆、Git worktree 和子模块，并将同一远程源的不同位置（如不同路径或 SSH/HTTPS 地址）合并显示为单一条目。
3. **健壮性**：支持重命名文件夹或修改远程 URL 而不被误判为删除，且钩子具备防覆盖和缺失检测机制。

**使用建议**
建议在 Vault 初始化为 Git 仓库后，先点击“Install git hook”安装钩子，再使用“Refresh”扫描现有嵌套仓库。注意该插件为手动刷新机制，新增或修改嵌套仓库后需手动触发扫描以更新状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



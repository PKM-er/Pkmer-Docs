---
uid: 1791709366105000
title: 'Obsidian 插件：Code Diff'
tags: ['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Render code diffs embedded in the middle of your notes, from pasted patches or from a Git repository. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Diff

> [!Note] 插件名片
> - 插件名称：Code Diff
> - 插件作者：Jordi
> - 插件说明：Render code diffs embedded in the middle of your notes, from pasted patches or from a Git repository. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/izquiratops/obsidian-code-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-diff)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/izquiratops/obsidian-code-diff/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 笔记中直接渲染代码差异（Diff）。它支持两种输入方式：一是粘贴标准的 `git diff` 文本，二是直接引用本地 Git 仓库，自动生成两个分支、提交或特定文件间的变更对比视图。

**2. 适用场景**
适合开发者在技术笔记、代码审查记录或项目文档中嵌入代码变更详情。特别适用于需要直观展示代码修改前后对比的场景，如记录 Bug 修复过程、API 变更说明或重构日志。

**3. 核心特色**
*   **美观渲染**：基于 `@pierre/diffs` 引擎，提供清晰的视觉体验。
*   **灵活配置**：支持通过 YAML Frontmatter 自定义视图模式（如统一视图或分屏视图）。
*   **本地仓库集成**：可直接指定本地仓库路径及分支/提交哈希，无需手动复制粘贴 diff 文本。
*   **注意**：目前仅支持桌面端，移动端和浏览器端暂不支持本地仓库功能。

**4. 使用建议**
*   在代码块标签中指定 `code-diff`。
*   若需从仓库生成，确保路径相对于 Vault 根目录正确，且仅在桌面端使用。
*   利用 Frontmatter 中的 `view: split` 等选项优化阅读体验。
*   鉴于插件处于早期阶段，请留意远程仓库支持尚未实现，且需注意隐私安全设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



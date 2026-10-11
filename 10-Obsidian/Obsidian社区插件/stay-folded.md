---
uid: 1791709370125000
title: 'Obsidian 插件：Stay Folded'
tags: ['界面优化', '效率工具', '编辑工具', 'obsidian插件']
description: 'Keep folded sections collapsed until you explicitly expand them. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Stay Folded

> [!Note] 插件名片
> - 插件名称：Stay Folded
> - 插件作者：crayonzgrim
> - 插件说明：Keep folded sections collapsed until you explicitly expand them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/crayonzgrim/stay-folded)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?stay-folded)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/crayonzgrim/stay-folded/master/README.md)



## 概述

**1. 主要功能**
Stay Folded 插件解决了 Obsidian 中一个常见的交互痛点：当光标位于折叠块（如标题或列表项）末尾并按下 Enter 键时，默认行为会强制展开该块并在其内部新建行。本插件拦截此行为，保持折叠状态不变，并在该折叠块**之后**插入一个空的同级兄弟节点。

**2. 适用场景**
适用于频繁使用大纲结构（标题、无序/有序列表、任务列表）进行笔记整理的用户。特别适合在长文档中快速添加新条目，而不希望意外破坏已建立的层级折叠结构，保持视图整洁。

**3. 核心特色**
*   **非侵入式**：仅拦截 Enter 键，不自动折叠、不存储额外状态、不插入标记。
*   **广泛兼容**：支持 H1-H6 标题、各种列表符号及任务项，保留原有缩进和编号格式。
*   **智能触发**：仅在光标位于折叠块行尾且无选区时生效，其他情况（如组合键、多选）均交由 Obsidian 默认处理。
*   **原子操作**：编辑过程为单一事务，支持一步撤销。

**4. 使用建议**
安装后无需配置，直接生效。建议在整理长文档大纲时使用，避免误触导致层级混乱。若需展开内容，请手动点击折叠图标或使用 Obsidian 原生的折叠/展开命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



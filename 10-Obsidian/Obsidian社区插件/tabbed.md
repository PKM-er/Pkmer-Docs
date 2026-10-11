---
uid: 1791709370235000
title: 'Obsidian 插件：Tabbed'
tags: ['界面优化', '编辑工具', '效率工具', 'obsidian插件']
description: 'Create lazy-loading tabs in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tabbed

> [!Note] 插件名片
> - 插件名称：Tabbed
> - 插件作者：flowing-abyss
> - 插件说明：Create lazy-loading tabs in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/flowing-abyss/obsidian-tabbed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tabbed)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flowing-abyss/obsidian-tabbed/master/README.md)



## 概述

**1. 主要功能**
Tabbed 插件允许在 Obsidian 笔记中创建标签页（Tabs）和分栏布局（Columns）。它支持在 Markdown 中通过代码块定义多标签内容，并实现“懒加载”，即仅渲染当前激活的标签页内容。

**2. 适用场景**
适用于需要整理大量信息、对比不同方案或构建仪表盘式笔记的场景。特别适合移动端用户，因为懒加载机制能显著减少初始渲染负担，提升打开复杂笔记时的流畅度。

**3. 核心特色**
- **性能优化**：仅渲染激活标签，嵌入媒体、Bases 或嵌套标签按需加载，避免卡顿。
- **灵活布局**：支持等宽或按权重（如 2:1）分配分栏，窄屏下可自动横向滚动或垂直堆叠。
- **高兼容性**：标题和内容均支持标准 Markdown，支持嵌套使用（如标签内嵌分栏），且适配桌面与移动端。

**4. 使用建议**
- 在笔记中插入 ` ```tabs ` 代码块定义标签，使用 `tab: 标题` 分隔不同内容。
- 使用 ` ```columns ` 创建分栏，可通过 `weight` 参数调整比例；若需窄屏垂直堆叠，在首个分栏前添加 `stack` 关键字。
- 注意：若其他插件也使用 `columns` 语言标识，可能会产生冲突，需留意插件兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709371177000
title: 'Obsidian 插件：XU View Mode'
tags: ['界面优化', '效率工具', '编辑工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：XU View Mode

> [!Note] 插件名片
> - 插件名称：XU View Mode
> - 插件作者：xcloud-ai
> - 插件说明：
> - 插件分类：['界面优化', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xcloud-ai/xu-view-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xu-view-mode)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xcloud-ai/xu-view-mode/master/README.md)



## 概述

**1. 主要功能**
XU View Mode 允许用户通过笔记 Frontmatter 中的 `open-mode` 字段，自定义笔记打开时的默认视图模式（阅读或编辑）。若未设置，则遵循全局默认配置。

**2. 适用场景**
适用于希望区分“参考类”（如文档、笔记，默认阅读模式）与“创作类”（如草稿、代码，默认编辑模式）笔记的用户，实现打开即达预期状态，减少手动切换操作。

**3. 核心特色**
*   **智能记忆**：每次打开笔记均按 Frontmatter 定义生效，但当前查看期间的手动切换不会被强制打回，兼顾自动化与灵活性。
*   **无缝迁移**：兼容旧插件 `Force note view mode` 的 `obsidianUIMode` 键，旧笔记无需修改即可使用。
*   **极致性能**：采用 O(1) 元数据读取及延迟事件注册，对性能无感知，且绝不修改笔记原始数据。

**4. 使用建议**
安装后，建议在参考性笔记的 Frontmatter 中添加 `open-mode: reading`，在创作性笔记中添加 `open-mode: editing`。同时，根据个人习惯在插件设置中调整全局默认值，以平衡自动化控制与手动操作体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



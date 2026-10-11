---
uid: 1791709365915000
title: 'Obsidian 插件：Canvas to Tasks'
tags: ['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Synchronize tasks in Canvas text nodes with the Tasks plugin. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas to Tasks

> [!Note] 插件名片
> - 插件名称：Canvas to Tasks
> - 插件作者：Ryan
> - 插件说明：Synchronize tasks in Canvas text nodes with the Tasks plugin. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/heixizhu/canvas-to-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-to-tasks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/heixizhu/canvas-to-tasks/master/README.md)



## 概述

**插件名称**：Canvas to Tasks

**主要功能**
该插件作为 Obsidian 的 Canvas 与 Tasks 插件的桥梁，将 Canvas 文本节点中的 Markdown 任务同步生成到独立的索引文件中。它支持双向同步：在 Tasks 插件中查询、编辑或完成任务后，变更会自动写回源 Canvas 的对应位置；同时在 Canvas 中直接修改复选框，也会通过 Tasks API 保留状态规则、完成日期及重复设置。

**适用场景**
适用于习惯在 Canvas 画布上规划项目，同时希望利用强大的 Tasks 插件进行全局任务管理、筛选和统计的用户。特别适合需要跨文件追踪任务状态，且希望保持 Canvas 作为主要视觉编辑界面的场景。

**核心特色**
1. **双向实时同步**：确保画布内容与任务索引的一致性，支持移动/重命名 Canvas 时自动调整索引路径。
2. **精准定位**：生成的任务下方附带“Open Canvas card”链接，点击可直接跳转至源 Canvas 并聚焦到具体文本卡片。
3. **规则兼容**：完整继承 Tasks 插件的状态逻辑、全局过滤器及完成动作，未启用的任务状态会被正确排除。

**使用建议**
1. 必须安装并启用社区版 **Tasks 插件**，否则仅生成索引但无法实现任务逻辑同步。
2. 请勿手动删除或编辑生成文件中的“Open Canvas card”链接，以免破坏反向同步机制。
3. 确保 Obsidian 版本在 1.6.6 以上，并在启用 Tasks 插件后重新加载 Obsidian 以激活完整功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



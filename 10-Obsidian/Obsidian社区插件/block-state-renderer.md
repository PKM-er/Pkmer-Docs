---
uid: 1791709365650000
title: 'Obsidian 插件：Block state renderer'
tags: ['任务管理', '样式与美化', '界面优化', 'obsidian插件']
description: 'Render task, PRD, and custom tag states on editable nested list blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Block state renderer

> [!Note] 插件名片
> - 插件名称：Block state renderer
> - 插件作者：ff
> - 插件说明：Render task, PRD, and custom tag states on editable nested list blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pkulilboat/block-state-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?block-state-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pkulilboat/block-state-renderer/master/README.md)



## 概述

**插件总结：Block state renderer**

**1. 主要功能**
该插件在 Obsidian 的“实时预览”模式下，为嵌套列表中的任务、PRD 及自定义标签状态渲染颜色。它通过可视化状态（如进行中、已完成）来增强列表的可读性，同时保持 Markdown 源码的可编辑性。

**2. 适用场景**
适用于需要管理复杂项目进度的用户，特别是使用嵌套列表跟踪任务状态（Task）或产品决策流程（PRD）的场景。适合在实时预览中快速识别各子项的状态继承关系。

**3. 核心特色**
*   **状态继承机制**：子项默认继承最近祖先的状态，但可显式覆盖，支持任务与 PRD 状态独立管理。
*   **非破坏性渲染**：仅改变视觉呈现，不修改原始标签或 Markdown 结构；禁用插件即可恢复原貌。
*   **高度可定制**：支持通过设置界面或 JSON 文件自定义标签颜色、透明度及显示样式，允许用户定义任意自定义标签的颜色规则。

**4. 使用建议**
*   确保笔记处于“实时预览”模式，并通过命令面板开启当前文件的渲染功能。
*   规范使用 `#task/` 和 `#prd/` 命名空间下的标准状态标签，避免冲突。
*   若需个性化视觉体验，可编辑根目录下的 `block-state-renderer.colors.json` 文件来配置自定义标签颜色。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709365662000
title: 'Obsidian 插件：Blueprint Viewer'
tags: ['图表与可视化', '编程与脚本', '第三方工具集成', 'obsidian插件']
description: 'Render UE Blueprint / Material graph text as interactive diagrams in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Blueprint Viewer

> [!Note] 插件名片
> - 插件名称：Blueprint Viewer
> - 插件作者：megestus
> - 插件说明：Render UE Blueprint / Material graph text as interactive diagrams in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编程与脚本', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/megestus/obsidian-blueprint-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blueprint-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/megestus/obsidian-blueprint-viewer/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 笔记中直接渲染虚幻引擎（UE）的蓝图（Blueprint）和材质（Material）图表。通过解析从 UE 复制的文本数据，将其转化为可视化的交互式图形。

**2. 适用场景**
适用于 UE 开发者在 Obsidian 中整理技术文档、记录节点逻辑、分享蓝图结构或进行代码审查时，无需频繁切换至 UE 编辑器即可查看复杂节点连接。

**3. 核心特色**
*   **高度交互**：支持鼠标拖拽平移、Ctrl+滚轮缩放，双击节点可进入子图，提供“适应屏幕”及“重置视图”按钮。
*   **便捷配置**：支持在代码块首行通过 `key=value` 格式自定义渲染高度和名称标签。
*   **性能优化**：基于 Web Component 封装，采用 GPU 加速解决缩放延迟问题，并支持一键复制原始蓝图代码。
*   **平台限制**：仅支持桌面端（Desktop），不支持移动端。

**4. 使用建议**
在 UE 编辑器中选中节点后按 `Ctrl+C` 复制，粘贴至 Obsidian 的 ` ```blueprint ` 代码块中即可渲染。建议利用首行选项自定义图表高度以适应笔记版面，并善用双击功能深入查看折叠的子图逻辑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



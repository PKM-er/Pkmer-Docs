---
uid: 1791709367781000
title: 'Obsidian 插件：Ink Graph'
tags: ['图表与可视化', '编辑工具', '图谱', 'obsidian插件']
description: 'Story graph for ink: browse knots, stitches, diverts and variables on a canvas, and edit the story by drawing links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ink Graph

> [!Note] 插件名片
> - 插件名称：Ink Graph
> - 插件作者：alamion
> - 插件说明：Story graph for ink: browse knots, stitches, diverts and variables on a canvas, and edit the story by drawing links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编辑工具', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alamion/obsidian-ink-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ink-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alamion/obsidian-ink-graph/master/README.md)



## 概述

**主要功能**
Ink Graph 是一款专为 Ink 叙事语言设计的可视化插件，能在 Obsidian 画布中直观展示故事结构。它将 Knots（结）、Stitches（缝）、Diverts（跳转）、Tunnels（隧道）及变量绘制为交互式地图，支持直接在图上创建节点、拖拽连线、重命名及删除，所有编辑操作均实时写回 `.ink` 源文件。

**适用场景**
适用于使用 Ink 语言开发互动叙事、游戏分支剧情或视觉小说的开发者。特别适合需要频繁调整复杂分支逻辑、排查逻辑死循环或管理大量变量读写关系的项目。

**核心特色**
1. **全结构可视化**：清晰呈现所有链接类型，多选择共享连线，布局位置独立保存（`main.graph.json`），便于版本控制。
2. **变量追踪**：点击变量即可高亮显示其所有读取（蓝色）和写入（橙色）位置，极大简化调试。
3. **循环警告**：自动标记无选择分支的死循环（红色），并以虚线区分条件循环，防止玩家卡关。
4. **安全编辑**：每次修改前自动重新编译检查，若引入错误则拒绝操作，确保故事逻辑始终有效。

**使用建议**
建议与 Ink Player 插件搭配使用，实现“编辑-预览”闭环。利用其循环警告功能定期审查剧情逻辑，并通过变量高亮功能快速定位状态更新问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



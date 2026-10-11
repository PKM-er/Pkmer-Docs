---
uid: 1791709365776000
title: 'Obsidian 插件：Campaignitz'
tags: ['图表与可视化', '日历与时间', '效率工具', 'obsidian插件']
description: 'Campaign plot timeline visualization for tabletop RPGs - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Campaignitz

> [!Note] 插件名片
> - 插件名称：Campaignitz
> - 插件作者：Nitzan Bresler
> - 插件说明：Campaign plot timeline visualization for tabletop RPGs - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stormageddon37/obsidian-campaignitz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?campaignitz)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stormageddon37/obsidian-campaignitz/master/README.md)



## 概述

**1. 主要功能**
Campaignitz 是一款专为桌面角色扮演游戏（TRPG）设计的剧情时间线可视化插件。它通过 SVG 图表将战役剧情按“幕”（列）和“剧情线”（行）网格化展示，直观追踪正史事件进度（已完成/待办），并叠加显示游戏场次记录，帮助玩家和主持人清晰掌握故事当前节点。

**2. 适用场景**
适用于长期运行的 TRPG 战役（如 D&D、Pathfinder 等），特别是包含多线并行剧情、需要跨场次回顾剧情进度或管理复杂时间线的团队。

**3. 核心特色**
*   **直观可视化**：支持多剧情线事件通过虚线连接，清晰呈现跨线关联。
*   **动态定位**：基于场次日期自动显示“你在这里”金色箭头，明确当前叙事位置。
*   **交互便捷**：支持拖拽平移、Ctrl+滚轮缩放，点击节点可直接跳转至对应笔记。
*   **高度可嵌入**：可通过代码块嵌入任意笔记，配置灵活（支持自定义幕数、剧情线颜色及文件路径）。

**4. 使用建议**
*   **规范文件结构**：确保正史事件文件使用标准的 Markdown 复选框格式，并通过括号内的 Wiki 链接指定所属剧情线。
*   **完善元数据**：场次笔记必须包含 `played_on` 等 YAML Frontmatter 字段，以确保时间线定位准确。
*   **合理配置**：根据战役规模调整幕数（1-6）和剧情线颜色，保持视觉清晰；定期更新事件状态以维持时间线实时性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



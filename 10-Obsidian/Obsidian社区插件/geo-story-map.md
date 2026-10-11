---
uid: 1791709367240000
title: 'Obsidian 插件：Geo Story Map'
tags: ['地图与位置', '图表与可视化', '多媒体', 'obsidian插件']
description: 'Turn Markdown notes into geographic stories with an interactive map and slides. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Geo Story Map

> [!Note] 插件名片
> - 插件名称：Geo Story Map
> - 插件作者：kywk
> - 插件说明：Turn Markdown notes into geographic stories with an interactive map and slides. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['地图与位置', '图表与可视化', '多媒体', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kywk/story-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?geo-story-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kywk/story-map/master/README.md)



## 概述

**1. 主要功能**
Geo Story Map 插件能将包含地理坐标的 Markdown 笔记转化为交互式地理故事。它支持将单一源文档渲染为独立的 React 应用、Obsidian 插件视图或 Docusaurus 站点，实现“一次编写，多处展示”。

**2. 适用场景**
适用于旅行日志、项目进度追踪、地理考察记录等需要按时间或空间顺序展示位置信息的场景。特别适合希望将静态笔记转化为可视化叙事内容的用户。

**3. 核心特色**
*   **多端同步**：同一配置可在 Obsidian、React 和 Docusaurus 中无缝渲染。
*   **灵活布局**：提供卡片、全屏、时间线三种布局，以及复古、赛博、地图集等六种地图主题。
*   **自动聚合**：通过 `noteFolder` 递归查找标记为 `story-map-note` 的笔记，并按指定日期字段自动排序。
*   **兼容旧版**：支持直接解析旧版 Obsidian Leaflet 插件的 `leaflet` 代码块，无需迁移数据。

**4. 使用建议**
*   **配置规范**：确保主文档包含 `story-map: true` 前置元数据及 `story-map` 配置块，子笔记需标记 `story-map-note: true` 并包含 `location` 坐标。
*   **路径管理**：正确设置 `noteFolder` 以定位子笔记，利用 `order` 和 `dateField` 控制叙事顺序。
*   **迁移提示**：若从 Leaflet 插件迁移，可直接粘贴旧代码块，插件会自动识别并渲染为普通地图，降低迁移成本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



---
uid: 1791709367488000
title: 'Obsidian 插件：Hexcrawl'
tags: ['图表与可视化', '地图与位置', '文件管理', 'obsidian插件']
description: 'Render zoomable, pannable hexcrawl maps from a folder of hex notes via a `hexcrawl` code block. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hexcrawl

> [!Note] 插件名片
> - 插件名称：Hexcrawl
> - 插件作者：Vasilii Negrebetskii
> - 插件说明：Render zoomable, pannable hexcrawl maps from a folder of hex notes via a `hexcrawl` code block. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '地图与位置', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kompoth/obsidian-hexcrawl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hexcrawl)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kompoth/obsidian-hexcrawl/master/README.md)



## 概述

**Hexcrawl 插件总结**

**1. 主要功能**
该插件可将包含特定元数据（`hex-q`/`hex-r`）的笔记文件夹渲染为可缩放、可平移的交互式六边形地图。用户只需在笔记中插入 `hexcrawl` 代码块并指向相应文件夹，即可生成地图。

**2. 适用场景**
专为 TRPG 跑团、世界构建或地理模拟设计。适用于需要可视化展示大量地点、地形分布及路径关系的场景，特别适合基于 Obsidian 进行战役管理的用户。

**3. 核心特色**
*   **笔记即地块**：坐标存储在笔记 Frontmatter 中，点击地块可直接打开对应笔记。
*   **无固定模式**：不强制预设字段，用户可自由定义属性，兼容 Dataview、Bases 等现有查询工具。
*   **直接编辑**：内置工具栏支持直接在地图上绘制地形、放置图标和绘制路径，无需额外视图。
*   **高度自定义**：支持加载第三方图标包、自定义地形调色板及多种路径类型。

**4. 使用建议**
建议在笔记 Frontmatter 中统一规范 `hex-q` 和 `hex-r` 坐标格式，以确保地图正确生成。利用其“无固定模式”特性，结合 Dataview 插件进行复杂数据查询，可大幅提升地图信息的检索与管理效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



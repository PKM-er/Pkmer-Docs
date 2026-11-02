---
uid: 1793625615284000
title: "Obsidian 插件：Maps+"
tags: ["地图与位置", "图表与可视化", "数据处理", "obsidian插件"]
description: "Adds a Bases map view with polygon areas, routes, and point markers. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Maps+

> [!Note] 插件名片
> - 插件名称：Maps+
> - 插件作者：Tyler Carrol
> - 插件说明：Adds a Bases map view with polygon areas, routes, and point markers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['地图与位置', '图表与可视化', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tylercarrol/obsidian-maps-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?maps-plus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tylercarrol/obsidian-maps-plus/master/README.md)



## 概述

Maps+ 为 Obsidian 的 Bases 视图扩展了地图功能，核心在于支持渲染点标记、多边形区域和路线。它允许用户通过笔记属性定义坐标，将数据可视化为地图上的具体几何图形，并支持点击图形直接打开对应的笔记。这一功能弥补了官方地图插件仅支持点标记的局限，让空间数据的管理更加直观和完整。

典型场景包括地理数据分类与路径规划。例如，你可以为不同国家或地区创建笔记，利用多边形区域填充不同颜色以进行视觉分类；或者记录旅行轨迹，通过路线属性在地图上绘制出行走路径，同时叠加沿途的关键地点标记。这种组合视图能清晰展示区域、路线与点位之间的空间关系，适合用于旅行日志、区域分析或项目地理分布展示。

相比同类插件，Maps+ 的特色在于其强大的编辑与性能优化能力。它提供编辑模式，允许用户直接拖拽调整点的位置，并支持可选的“吸附到点”功能，方便精确对齐。此外，插件支持限制每个对象的渲染点数，即使处理超过 50 万个点的大规模数据也能保持流畅。它还允许多个重叠区域使用不同颜色，便于对复杂地理信息进行分层标注和区分。

使用前需注意，该插件的地图底图瓦片加载自 OpenFreeMap 外部服务，虽然不上传笔记内容，但会产生正常的网络请求，离线环境下地图背景可能无法显示。它不适合需要完全离线使用地图底图，或仅需要简单静态图片展示而非交互式地理数据管理的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



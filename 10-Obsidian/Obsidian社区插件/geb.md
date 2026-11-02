---
uid: 1793625623889000
title: "Obsidian 插件：U+1316C Georeference"
tags: ["地图与位置", "图片与PDF", "效率工具", "obsidian插件"]
description: "Georeference a map image: pin notes by latitude and longitude. A coordinate system over your picture, not a basemap. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：U+1316C Georeference

> [!Note] 插件名片
> - 插件名称：U+1316C Georeference
> - 插件作者：alas, poor ophelia
> - 插件说明：Georeference a map image: pin notes by latitude and longitude. A coordinate system over your picture, not a basemap. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['地图与位置', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alas-poor-ophelia/u1316c-georeference)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?geb)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alas-poor-ophelia/u1316c-georeference/master/README.md)



## 概述

U+1316C Georeference 允许你在 Obsidian 中将笔记直接定位到任意静态地图图片上。它通过建立像素与经纬度的坐标映射，让带有地理坐标的笔记以图钉形式显示在图片对应位置。该插件不依赖网络地图服务，也不修改原始图片，而是将图片视为静态底图，在其上叠加一个可交互的坐标系，实现离线、私有的地理信息可视化。

典型场景包括整理历史文献或旅行记录。例如，你有一张手绘的古罗马地图，可以将笔记中记录的城镇坐标（如“罗马”、“庞贝”）通过插件映射到图片上的具体位置，形成直观的分布图。又如，在整理家族迁徙史时，将不同年份的居住地笔记叠加在一张空白地图上，清晰展示迁徙路径和停留点，无需联网即可随时查看。

相比其他地图插件，它的核心特色是“非破坏性”和“离线优先”。它不扭曲或重采样图片，确保底图细节完整；不发起任何网络请求，保护隐私且无遥测。此外，它支持多种坐标格式（如十进制度、度分秒），并能通过控制点拟合算法自动校正投影误差，提供详细的拟合报告，让用户了解定位的精确度，这是许多简单插件不具备的能力。

使用前需注意，该插件仅处理点状数据，不支持线条或多边形，也不具备 GIS 分析功能（如缓冲区、叠加分析）。它不自动下载地名数据，需用户自行将地名转换为带坐标的笔记。如果你需要实时地图瓦片、复杂空间分析或自动地名匹配，此插件不适合。它更适合对静态图片进行精确、离线的地理标注和展示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



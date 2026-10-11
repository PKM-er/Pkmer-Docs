---
uid: 1791709370386000
title: 'Obsidian 插件：Terrain Graph'
tags: ['图表与可视化', '图谱', '数据分析', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Terrain Graph

> [!Note] 插件名片
> - 插件名称：Terrain Graph
> - 插件作者：GUX
> - 插件说明：
> - 插件分类：['图表与可视化', '图谱', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gjckckfc/obsidian-terrain-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terrain-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gjckckfc/obsidian-terrain-graph/master/README.md)



## 概述

**Terrain Graph** 是一款将 Obsidian 关系图谱渲染为 3D 山峰等高线图的插件。

**主要功能**：它将笔记链接数量转化为海拔高度，链接越多海拔越高；通过社区检测算法将紧密关联的笔记聚集成一座座山峰，最高连接数的笔记被标记为主峰。

**适用场景**：适用于需要直观洞察知识库整体结构、识别核心主题簇及笔记间关联强度的用户，特别适合大型 Vault 的宏观导航与结构分析。

**核心特色**：
1. **真实地形渲染**：采用加权高斯包络、fBm 噪声及 Marching Squares 算法生成逼真的等高线、光照及微地形，视觉效果优于传统平面图谱。
2. **布局一致性**：复用官方图谱的 d3-force 模拟参数，确保山峰位置与内置图谱视图稳定对应。
3. **交互丰富**：支持 3D 旋转、缩放、点击打开笔记及邻居高亮，并设有主峰星标标记。

**使用建议**：建议用于定期回顾知识库结构，快速定位孤立笔记或过度连接的“瓶颈”笔记。由于涉及 3D 渲染，建议在配置较高的设备上使用，并合理调整设置面板中的节点密度参数以优化性能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



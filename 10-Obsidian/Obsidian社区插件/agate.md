---
uid: 1793625605528000
title: "Obsidian 插件：Agate"
tags: ["图表与可视化", "数据处理", "数据分析", "obsidian插件"]
description: "Vega and Vega-Lite charts from your Bases views and notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agate

> [!Note] 插件名片
> - 插件名称：Agate
> - 插件作者：Philipp Kats
> - 插件说明：Vega and Vega-Lite charts from your Bases views and notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/casyfill/Agate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/casyfill/Agate/master/README.md)



## 概述

Agate 将 Obsidian 的 Bases 视图转化为动态图表，核心功能是利用 Vega 和 Vega-Lite 引擎，直接从笔记的属性中提取数据并绘制可视化图形。它打破了传统静态图表的局限，让图表成为 Bases 视图的一部分，能够随着你添加笔记、修改属性值或调整筛选条件而实时自动更新，实现了数据与视觉呈现的无缝同步。

典型场景包括管理个人知识库或项目数据。例如，你可以创建一个包含书籍信息的 Bases，通过 Agate 生成一个“书架”图表，直观展示不同评分书籍的分布；或者在旅行笔记中，利用地图视图标记各个地点，当你在笔记中更新行程状态时，地图上的标记也会随之变化，无需手动重绘。

相比同类插件，Agate 的最大特色在于其深度集成与扩展性。它不仅支持完整的 Vega 语法，能绘制地图、网络图、桑基图等复杂图形，还引入了独特的数据源能力，如将笔记间的链接关系、文件夹树结构直接作为数据集，甚至支持点击图表元素直接打开对应笔记。此外，它提供内置主题以匹配 Obsidian 的明暗模式，并允许通过 API 密钥安全加载远程地图瓦片，兼顾了美观与功能。

使用前需注意，该插件依赖 Obsidian 1.13 及以上版本且必须启用核心 Bases 插件。默认情况下它不发起任何网络请求，所有数据均来自本地库；若需加载远程 CSV 或图片，需手动开启“加载远程数据”选项。它不适合需要完全离线且禁止任何外部资源加载的极端安全环境，也不适合那些希望完全脱离 Bases 结构、仅用纯文本代码块独立管理复杂数据流的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



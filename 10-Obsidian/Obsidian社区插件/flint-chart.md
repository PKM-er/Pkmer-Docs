---
uid: 1791709367082000
title: 'Obsidian 插件：Flint Chart'
tags: ['图表与可视化', '数据处理', '数据分析', 'obsidian插件']
description: 'Render Flint semantic chart specs in your notes. Declare what your data means and which chart you want; scales, axes, layout and color are derived for you. 37 chart types. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Flint Chart

> [!Note] 插件名片
> - 插件名称：Flint Chart
> - 插件作者：Yuto Takagi
> - 插件说明：Render Flint semantic chart specs in your notes. Declare what your data means and which chart you want; scales, axes, layout and color are derived for you. 37 chart types. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yut0takagi/obsidian-flint-chart)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?flint-chart)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yut0takagi/obsidian-flint-chart/master/README.md)



## 概述

**1. 主要功能**
Flint Chart 允许用户在 Obsidian 笔记中通过 Markdown 代码块嵌入图表。它基于微软的 Flint 语义中间语言，结合 Apache ECharts 渲染引擎，支持 37 种图表类型，包括桑基图、矩形树图、仪表盘等复杂结构图。

**2. 适用场景**
适用于需要在笔记中快速展示数据趋势、构成或关系的场景。特别适合处理具有特定业务含义的数据（如日期、百分比、价格），无需手动配置坐标轴、比例尺或颜色映射。

**3. 核心特色**
采用“语义驱动”设计，用户只需声明数据含义（如“季度”、“收入”）和图表类型，插件自动推导布局、格式和配色。支持自动推断列类型（如将 `revenue` 识别为价格，`2026-Q3` 识别为年份季度），也可手动标注类型以覆盖推断结果，极大降低了配置门槛。

**4. 使用建议**
在代码块中仅需指定 `chartType`、`x`、`y` 及数据源即可。若数据列名具有明确语义，可省略 `types` 字段让插件自动推断；对于特殊格式或需精确控制的字段，建议显式声明 `types` 以确保渲染准确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



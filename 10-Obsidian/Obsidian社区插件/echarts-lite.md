---
uid: 1791709366705000
title: 'Obsidian 插件：Echarts Lite'
tags: ['图表与可视化', '移动端优化', '第三方工具集成', 'obsidian插件']
description: 'Draw chart, compatible with mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Echarts Lite

> [!Note] 插件名片
> - 插件名称：Echarts Lite
> - 插件作者：x-ideas
> - 插件说明：Draw chart, compatible with mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '移动端优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/x-ideas/obsidian-echarts-lite)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?echarts-lite)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/x-ideas/obsidian-echarts-lite/master/README.md)



## 概述

**1. 主要功能**
Echarts Lite 是一款轻量级 Obsidian 插件，允许用户在笔记中通过代码直接绘制基于 ECharts v6.0.0 的交互式图表。它提供了简洁的 API 接口，支持渲染柱状图、折线图等常见数据可视化图形。

**2. 适用场景**
适用于需要在个人知识库、数据报告或学习笔记中嵌入动态图表的场景。特别适合移动端用户，因为该插件专门优化了移动端兼容性，确保在手机或平板上也能正常查看图表。

**3. 核心特色**
- **移动端友好**：明确支持移动端显示，解决了部分图表插件在手机上布局错乱的问题。
- **版本最新**：基于最新的 ECharts v6.0.0 版本，拥有更好的性能和功能支持。
- **轻量集成**：通过 `dataviewjs` 代码块调用，无需复杂配置，即可在笔记中直接渲染图表。

**4. 使用建议**
目前该插件尚未发布到官方插件市场，建议通过 **BRAT** 插件从 GitHub 仓库手动安装（推荐方式），或下载 Release 资源包手动部署。使用时，在笔记中插入 `dataviewjs` 代码块，定义 ECharts 配置对象 `option`，并调用 `app.plugins.plugins['echarts-lite'].api.render(option, this.container)` 即可生成图表。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



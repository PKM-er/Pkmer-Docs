---
uid: 1791709366822000
title: 'Obsidian 插件：Excalidraw Math Plotter'
tags: ['图表与可视化', '第三方工具集成', '学习与教育', 'obsidian插件']
description: 'Plot mathematical function graphs directly onto Excalidraw canvases. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Excalidraw Math Plotter

> [!Note] 插件名片
> - 插件名称：Excalidraw Math Plotter
> - 插件作者：ahmeddawoud3
> - 插件说明：Plot mathematical function graphs directly onto Excalidraw canvases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ahmeddawoud3/obsidian-excalidraw-plotter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?excalidraw-plotter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ahmeddawoud3/obsidian-excalidraw-plotter/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 的 Excalidraw 画布中直接绘制数学函数图像。通过输入以 `x` 为变量的数学表达式（如 `sin(x)`、`x^2`），即可生成对应的曲线图，并支持实时预览与调整。

**2. 适用场景**
适用于数学笔记整理、教学演示、工程绘图或任何需要在手绘白板中嵌入精确函数曲线的场景，特别适合需要快速可视化函数趋势的用户。

**3. 核心特色**
*   **实时交互**：提供滑块实时调整曲线优化程度，支持自定义颜色、线宽及坐标轴样式（网格、刻度等）。
*   **智能处理**：自动处理不连续函数（如 `tan(x)`、`1/x`），并使用 Ramer-Douglas-Peucker 算法高效简化点集，确保绘图性能。
*   **丰富支持**：基于 mathjs 引擎，支持三角、对数、指数及组合函数，并提供正弦、抛物线等常用函数一键预设。

**4. 使用建议**
*   **前置依赖**：必须安装并启用 Excalidraw 插件。
*   **操作流程**：打开 Excalidraw 笔记，通过命令面板执行“Insert function graph”，输入公式并设置 X 轴范围。
*   **优化技巧**：若曲线过于粗糙，可拖动优化滑块增加采样点；若文件过大，可适当降低优化等级以平衡质量与性能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



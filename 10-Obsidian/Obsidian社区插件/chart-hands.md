---
uid: 1793625609280000
title: "Obsidian 插件：Chart Hands"
tags: ["图表与可视化", "自动化与AI", "编程与脚本", "obsidian插件"]
description: "Render Plotly charts from code blocks and give LLM agents tools to write and check them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Chart Hands

> [!Note] 插件名片
> - 插件名称：Chart Hands
> - 插件作者：everydaymind
> - 插件说明：Render Plotly charts from code blocks and give LLM agents tools to write and check them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '自动化与AI', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/everydaymind/obsidian-chart-hands)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chart-hands)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/everydaymind/obsidian-chart-hands/master/README.md)



## 概述

Chart Hands 允许你在 Obsidian 笔记中通过简单的 `plotly` 代码块直接渲染交互式 Plotly 图表，无需编写任何 JavaScript 代码。它支持柱状图、折线图、饼图等多种类型，图表会自动适应笔记宽度，并支持鼠标悬停查看数值及拖拽缩放。对于需要动态计算数据或从库中读取数据的复杂场景，插件还兼容 DataviewJS，让你能利用笔记内的数据生成图表，同时保持与标准 Plotly 语法的高度一致。

想象一下，你正在记录每周的工作专注时长，只需在笔记中粘贴一段包含日期和小时数的 YAML 数据，即可立即生成一张清晰的柱状图，直观展示趋势。或者，当你想分析知识库中笔记的创建频率时，利用 DataviewJS 功能，你可以自动统计每月新增笔记数量并绘制成图表，无需手动导出数据到 Excel 或其他绘图工具，让数据可视化直接嵌入你的知识管理流程中。

相比其他绘图插件，Chart Hands 的一大特色是为 LLM 智能体提供了专门的“工具”，帮助 AI 在写入笔记前构建和校验图表代码，确保生成的图表准确无误。此外，它原生支持 PDF 导出时的页面宽度适配，解决了传统插件导出时图表被截断的问题。作为 obsidian-plotly 的分支，它更新了底层依赖，并内置了 Plotly 和 D3 库，用户无需手动下载依赖文件，桌面端和移动端均可流畅使用。

使用前请注意，`plotly` 代码块仅接受静态数据，不支持直接执行 JavaScript 函数或变量，若需计算数据请配合 DataviewJS 使用。YAML 格式对缩进和引号要求严格，例如颜色值必须加引号，标题需写成对象格式，否则可能导致渲染失败。如果你只需要简单的静态图片，或者完全不想接触任何代码块语法，那么这款插件可能不是最佳选择，因为它要求用户具备基本的 YAML 或 JSON 书写能力。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



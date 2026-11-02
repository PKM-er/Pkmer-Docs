---
uid: 1793625615955000
title: "Obsidian 插件：Markvis Charts"
tags: ["图表与可视化", "数据处理", "表格", "obsidian插件"]
description: "Draw charts from a short code block: a few header lines and a CSV or Markdown table. Seventeen chart types, your theme's colors, no network. The block stays plain text, so it reads as a table anywhere else. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Markvis Charts

> [!Note] 插件名片
> - 插件名称：Markvis Charts
> - 插件作者：Sean
> - 插件说明：Draw charts from a short code block: a few header lines and a CSV or Markdown table. Seventeen chart types, your theme's colors, no network. The block stays plain text, so it reads as a table anywhere else. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '表格', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/geekplux/markvis-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markvis)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/geekplux/markvis-obsidian/master/README.md)



## 概述

Markvis Charts 允许你在笔记中通过简短的代码块直接绘制图表，无需复杂的配置或网络请求。你只需在代码块中写入几行头部信息（如类型、标题、坐标轴定义），随后附上 CSV 或 Markdown 表格数据，插件即可在阅读视图和实时预览中生成对应的 SVG 图表。它支持柱状图、折线图、桑基图、树状图等十七种常见图表类型，且图表颜色会自动跟随当前主题，确保视觉风格统一。

典型场景包括快速可视化日常数据或项目进度。例如，你可以记录一周的访问量，用简单的 CSV 格式列出每日数值，插件会立即将其渲染为柱状图；或者在分析用户转化路径时，使用桑基图展示流量分布。由于图表下方会自动附带完整的数据表格和说明文字，即使不查看图形，读者也能直接阅读和搜索原始数据，非常适合需要兼顾视觉直观与数据可追溯性的笔记场景。

相比其他图表插件，Markvis Charts 的核心优势在于其“纯文本”特性。代码块在文件中始终保持为普通文本，这意味着它可以完美同步、进行版本差异对比，并在任何支持 Markdown 的应用中作为表格正常显示。如果代码块格式有误，插件不会报错崩溃，而是优雅地降级为显示原始数据表格并提示错误原因。此外，它无需任何设置界面，所有样式均通过 CSS 变量与 Obsidian 主题深度集成，切换深浅色模式时图表会自动适配，无需手动重绘。

使用前需注意，该插件目前尚未通过 Obsidian 官方人工审核，且依赖 markvis 库。如果你的笔记中已有其他插件占用了 `chart` 代码围栏，需改用 `markvis` 或 `vis` 作为围栏标识以避免冲突。它不适合需要高度定制化交互（如点击数据点弹出详情）或复杂动态更新的场景，因为图表是静态生成的 SVG。此外，虽然支持移动端自适应，但在极小屏幕上的显示效果可能受限于笔记宽度，建议主要在中大型设备上使用以获得最佳体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



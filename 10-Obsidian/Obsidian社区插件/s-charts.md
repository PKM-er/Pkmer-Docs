---
uid: 1793625620928000
title: "Obsidian 插件：S-Charts"
tags: ["图表与可视化", "表格", "数据处理", "obsidian插件"]
description: "Draw charts from a markdown table or from note properties, in your theme's colours. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：S-Charts

> [!Note] 插件名片
> - 插件名称：S-Charts
> - 插件作者：Abdulkader Safi
> - 插件说明：Draw charts from a markdown table or from note properties, in your theme's colours. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '表格', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abdulkader-safi/obsidian-s-chart-plugins)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s-charts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abdulkader-safi/obsidian-s-chart-plugins/master/README.md)



## 概述

S-Charts 允许直接在 Obsidian 笔记中通过 Markdown 表格或笔记属性绘制图表，解决纯文本笔记难以直观展示数据的问题。它支持柱状图、折线图、饼图、热力图等八种类型，数据以纯文本形式保留在笔记中，插件不会修改笔记内容，也不发起任何网络请求，确保数据隐私与安全。

典型场景包括记录月度收支或体重变化。例如，在笔记中插入一个包含月份和金额的表格，即可生成柱状图；或者利用笔记属性功能，指定标签如 `#daily` 和属性 `weight`，插件会自动聚合所有匹配笔记的数据生成趋势图。当修改任意匹配笔记的属性时，图表会在半秒内自动更新，无需手动刷新。

相比其他图表插件，S-Charts 的核心特色是深度集成主题颜色。图表默认使用当前主题的强调色和命名色，切换主题或明暗模式时会自动重绘，保持视觉风格统一。此外，它支持自定义调色板，允许用户通过十六进制代码或主题变量定义品牌色，并支持在图表中直接指定颜色，灵活性高且无需额外配置。

使用前需注意，该插件目前处于 0.5.0 版本，功能仍在迭代中。它不适合需要复杂交互式数据钻取或实时外部数据源的场景，因为所有计算均在本地完成。若笔记中表格格式错误，插件会显示具体错误提示而非空白，便于排查。对于仅需要静态图片导出或复杂统计模型的用户，可能需要考虑其他专业工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



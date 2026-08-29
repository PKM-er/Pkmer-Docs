---
uid: 1786577077497000
title: 'Obsidian 插件：DuckData'
tags: ['数据处理', '数据分析', '图表与可视化', 'obsidian插件']
description: '用嵌入的duckdata代码块查询并可视化仓库/Markdown数据，由DuckDB - WASM提供支持。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DuckData

> [!Note] 插件名片
> - 插件名称：DuckData
> - 插件作者：atliuhui
> - 插件说明：用嵌入的duckdata代码块查询并可视化仓库/Markdown数据，由DuckDB - WASM提供支持。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['数据处理', '数据分析', '图表与可视化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/atliuhui/obsidian-duckdata)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?duckdata)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/atliuhui/obsidian-duckdata/master/README.md)



## 概述

### DuckData插件总结
1. **主要功能**：借助DuckDB - WASM，可在Obsidian笔记中对数据（如内联CSV、Markdown表格、库文件、远程URL数据）执行SQL查询，并将结果以表格或ECharts可视化形式呈现在代码块中。
2. **适用场景**：适用于需要对Obsidian笔记内各种数据进行查询分析和可视化展示的场景，方便用户快速处理和呈现数据。
3. **核心特色**：仅支持桌面端，从CDN加载DuckDB - WASM工作程序和`.wasm`模块（设置可配置），查询完全在本地运行，数据不出库，保障数据安全。支持多种数据源引用方式。
4. **使用建议**：使用时可通过内联CSV或`datasource`引用数据。内联CSV直接在代码块中提供数据；`datasource`可引用当前或其他笔记的表格、库文件、远程文件。需注意Markdown嵌入源仅支持CSV，文件和URL源支持多种DuckDB可读格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



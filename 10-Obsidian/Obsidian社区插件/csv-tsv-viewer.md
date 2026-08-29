---
uid: 1786577077197002
title: 'Obsidian 插件：CSV TSV Viewer'
tags: ['表格', '搜索与排序', '数据处理', '数据分析', 'obsidian插件']
description: '能以只读表格形式打开 .csv 和 .tsv 文件，还支持搜索、查看源文件以及解析警告提示。 - 此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CSV TSV Viewer

> [!Note] 插件名片
> - 插件名称：CSV TSV Viewer
> - 插件作者：Viggo Meesters
> - 插件说明：能以只读表格形式打开 .csv 和 .tsv 文件，还支持搜索、查看源文件以及解析警告提示。 - 此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['表格', '搜索与排序', '数据处理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-csv-tsv-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-tsv-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-csv-tsv-viewer/master/README.md)



## 概述

### CSV TSV Viewer插件总结
1. **主要功能**：以只读模式查看 `.csv` 和 `.tsv` 文件，支持表格视图和带行号及分隔符高亮的源视图，可搜索过滤行，显示列头、行号、行列数量、分隔符等信息，检测文件分隔符，解析引号字段等，还会报告解析警告。
2. **适用场景**：适合查看AI生成的数据文件、导出文件、日志、数据集等，方便在Obsidian库内快速查看分隔文本。
3. **核心特色**：采用只读设计，不修改原文件；能快速解析并渲染大文件的前10000行以保持响应，额外行数会在警告区报告；不进行网络请求，不向外部服务发送库内容，也不使用系统剪贴板。
4. **使用建议**：若需查看大文件，可在警告区了解额外行数情况；若要查看文件原始内容，可切换到源视图；利用搜索功能快速定位所需数据行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



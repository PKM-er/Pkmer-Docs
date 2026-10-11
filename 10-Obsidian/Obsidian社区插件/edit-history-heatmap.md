---
uid: 1791709366710000
title: 'Obsidian 插件：Edit History Heatmap'
tags: ['图表与可视化', '数据分析', '效率工具', 'obsidian插件']
description: 'Like the github contribution graph but for obsidian edits, works on edits before you installed it too. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Edit History Heatmap

> [!Note] 插件名片
> - 插件名称：Edit History Heatmap
> - 插件作者：mimo
> - 插件说明：Like the github contribution graph but for obsidian edits, works on edits before you installed it too. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/keptan/obsidian-activity-heatmap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?edit-history-heatmap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/keptan/obsidian-activity-heatmap/master/README.md)



## 概述

**主要功能**
Edit History Heatmap 将 Obsidian 的编辑记录转化为类似 GitHub 的贡献热力图。它基于 Obsidian Sync 的版本历史，追踪每日在字数、行数或字符上的净变化，支持展示总变更或分别显示新增与删除量。

**适用场景**
专为使用 Obsidian Sync 服务的用户设计，适用于希望可视化回顾长期写作习惯、监控笔记库活跃度，或需要在笔记中嵌入写作统计图表的场景。

**核心特色**
1. **历史回溯**：可统计安装插件前已存在的编辑历史。
2. **灵活交互**：支持悬停查看单日文件明细，或拖拽多天进行汇总；支持按文件夹或标签自定义范围，且不同视图可独立设置。
3. **隐私安全**：无遥测数据，仅缓存日期与聚合计数，旧版本内容仅在内存中比对，不额外存储。
4. **智能去重**：仅比较每日最终版本，避免同日反复修改造成的重复计数，并自动排除 Excalidraw 绘图。

**使用建议**
必须启用 Obsidian Sync 才能使用。由于插件依赖未公开的 Sync API，未来更新可能导致失效。建议通过侧边栏或代码块嵌入热力图，注意其仅统计 Sync 保留的历史版本，超出保留期的早期数据无法显示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



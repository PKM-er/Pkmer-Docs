---
uid: 1793625618605000
title: "Obsidian 插件：Note Visit Tracker"
tags: ["数据分析", "效率工具", "搜索与排序", "obsidian插件"]
description: "Tracks how often notes are opened, with an arbitrary date-range view and per-tag rollups, to surface trending notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Visit Tracker

> [!Note] 插件名片
> - 插件名称：Note Visit Tracker
> - 插件作者：zachfara
> - 插件说明：Tracks how often notes are opened, with an arbitrary date-range view and per-tag rollups, to surface trending notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据分析', '效率工具', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zachfara/note-visit-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-visit-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zachfara/note-visit-tracker/master/README.md)



## 概述

Note Visit Tracker 旨在解决笔记库中“哪些内容真正被频繁使用”难以量化的问题。它通过记录笔记的打开次数和有效阅读时长，帮助用户识别热门笔记，从而决定是进行清理、归档还是重点总结。插件不仅统计点击行为，还通过检测鼠标、键盘或滚动等交互活动来追踪“活跃时长”，确保数据反映的是真实的阅读投入，而非单纯的窗口切换。

典型场景包括定期回顾知识库的健康度。例如，你可以查看过去 30 天内哪些笔记被反复打开，以发现核心参考文档；或者通过标签页查看特定主题（如 #project-x）下的笔记活跃度，判断该主题是否仍具价值。此外，当发现某些笔记长期高热度但内容陈旧时，可据此触发更新或拆分操作，保持知识库的时效性。

相比同类插件，其核心优势在于对文件变动的高度鲁棒性。它不仅能安全处理 Obsidian 内的重命名和移动，还能应对通过 Finder、脚本或同步工具在外部进行的文件移动。通过“待处理”机制和基于创建时间的匹配算法，即使文件在 Obsidian 关闭期间被移动，历史数据也能在启动时自动恢复，避免统计中断。此外，它提供自由日期范围选择，而非固定的时间桶，并支持按标签聚合数据，便于多维度分析。

使用前需注意，该插件数据存储在插件目录的 `data.json` 中，而非笔记库内，因此备份依赖插件自身的每日快照机制。它不适合需要实时跨设备同步统计数据的用户，因为数据是本地隔离的。若你主要关注笔记间的链接关系而非访问频率，或希望将统计数据直接嵌入笔记正文中，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



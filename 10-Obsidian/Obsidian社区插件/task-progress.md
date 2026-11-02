---
uid: 1793625622127001
title: "Obsidian 插件：Task Progress"
tags: ["任务管理", "图表与可视化", "文件管理", "界面优化", "obsidian插件"]
description: "Shows a task progress ring next to each note in the file explorer: one segment per task, filled as you complete them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Progress

> [!Note] 插件名片
> - 插件名称：Task Progress
> - 插件作者：liuweiqing
> - 插件说明：Shows a task progress ring next to each note in the file explorer: one segment per task, filled as you complete them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '图表与可视化', '文件管理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/14790897/task-progress)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-progress)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/14790897/task-progress/master/README.md)



## 概述

Task Progress 在 Obsidian 文件资源管理器中为每个笔记添加一个可视化的进度环，直观展示待办事项的完成状态。它通过解析笔记内的复选框或元数据，将每个任务映射为进度环上的一格，随着你勾选任务，对应的扇形区域会被填充。这种设计让文件列表不再只是静态的标题堆砌，而是变成了动态的任务看板，让你无需打开笔记就能快速掌握各文档的推进程度。

想象一下你正在管理一个包含多个子任务的项目笔记，或者维护着一个“每日待办”文件夹。在文件栏中，你可以一眼看到哪些笔记的任务已全部完成（进度环变绿），哪些还有一半未完成（进度环部分填充），哪些尚未开始（灰色空环）。例如，当你快速浏览文件列表时，发现某个重要笔记的进度环还是灰色的，就能立刻意识到需要优先处理，而无需逐个点开检查。

与仅显示任务数量的插件不同，Task Progress 提供了更精细的视觉反馈。它支持两种模式：一是统计笔记内的所有内联复选框，二是针对“一文件一任务”的结构，通过 front matter 中的 `todo: true` 标记将整个笔记视为单一任务。进度环从 12 点方向顺时针绘制，段间留有细微间隙，即使任务较多也能清晰计数。此外，它完全基于 Obsidian 的元数据缓存工作，只读不写，确保不会意外修改你的笔记内容，且支持桌面端和移动端实时同步更新。

需要注意的是，该插件不统计代码块内的任务，也不提供文件夹级别的汇总进度。如果你的工作流依赖于在单个笔记中混合大量非任务文本和任务，或者需要复杂的任务依赖关系管理，它可能不够用。它最适合那些希望以轻量、非侵入的方式，在文件浏览界面获得即时任务状态反馈的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



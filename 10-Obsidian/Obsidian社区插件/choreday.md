---
uid: 1793625609371000
title: "Obsidian 插件：Choreday"
tags: ["任务管理", "日历与时间", "效率工具", "obsidian插件"]
description: "Track and complete recurring household chores. See what you should do today, when it was last done, or skip/move them all to another day. All tracked with Obsidian notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Choreday

> [!Note] 插件名片
> - 插件名称：Choreday
> - 插件作者：Paul Chiu
> - 插件说明：Track and complete recurring household chores. See what you should do today, when it was last done, or skip/move them all to another day. All tracked with Obsidian notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/paulchiu/obsidian-choreday)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?choreday)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/paulchiu/obsidian-choreday/master/README.md)



## 概述

Choreday 专为解决家庭琐事难以纳入传统任务管理系统的痛点而设计。它摒弃了严格的截止日期概念，转而关注“上次完成时间”与“建议频率”的匹配度。每个家务事项在 Obsidian 中对应一个笔记，插件通过读取笔记属性自动计算当前状态，直观展示哪些事项已到期、哪些即将到期，并记录过去几个月的执行历史，让你清晰掌握家务节奏。

想象一下，你需要每隔几个月给电水壶除垢或清理抽油烟机滤网。这类任务没有固定截止日，做太勤也没必要，但忘了做又会影响生活。Choreday 能准确提示你“该做了”，并在你完成后自动更新下次提醒时间。对于每周固定日期的任务，如周二倒垃圾或周一三五健身，它也能灵活适配日历锚点，确保即使偶尔延迟打卡，系统仍能正确识别完成状态。

相比通用待办插件，Choreday 的核心优势在于数据完全存储在笔记的 Frontmatter 中。这意味着即使卸载插件，你的家务数据和历史记录依然以标准属性形式存在，可被 Dataview 或 Bases 等插件无缝读取，避免了数据锁定风险。此外，其独特的“紧急度条”通过颜色变化直观反映任务紧迫程度，支持批量跳过或推迟操作，并拥有长达 20 步的撤销功能，极大提升了操作容错率。

需要注意的是，Choreday 仅适用于周期性、无明确截止日的家务管理，不适合处理有严格 Deadline 的项目任务或一次性工作。使用前请确保你习惯使用 Obsidian 笔记属性管理数据，且对“基于上次完成时间推算下次日期”的逻辑感到舒适。如果你需要复杂的子任务依赖或团队协作功能，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



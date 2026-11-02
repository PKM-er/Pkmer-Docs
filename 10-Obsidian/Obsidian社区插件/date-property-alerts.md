---
uid: 1793625611898000
title: "Obsidian 插件：Date Property Alerts"
tags: ["日历与时间", "任务管理", "效率工具", "obsidian插件"]
description: "Get notices when date properties in a filtered base come due. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Date Property Alerts

> [!Note] 插件名片
> - 插件名称：Date Property Alerts
> - 插件作者：theluckystrike
> - 插件说明：Get notices when date properties in a filtered base come due. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/date-property-alerts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?date-property-alerts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/date-property-alerts/master/README.md)



## 概述

Date Property Alerts 是一款基于 Obsidian 核心 Bases 功能的日期提醒插件。它通过读取笔记中的日期属性，在指定日期到来时向用户发送应用内通知。该插件不依赖外部服务或任务管理器，而是直接利用 Bases 的筛选机制，将符合特定条件（如文件夹、标签或状态）的笔记纳入监控范围，实现了对普通笔记中日期属性的自动化跟踪与提醒。

典型使用场景包括管理合同续签和项目评审。例如，你可以为每个项目笔记添加一个名为 `due` 的日期属性，并在 Bases 中创建一个 Alerts 视图来筛选所有“进行中”的项目。当日期临近时，插件会弹出通知，点击即可打开对应笔记。这种模式让合同到期日或定期审查任务自然地存在于日常笔记中，无需额外的任务管理工具，只需保持该视图处于打开状态即可实时监控。

相比其他提醒插件，其特色在于深度整合 Bases 筛选逻辑，支持复杂的条件组合，且具备完善的交付历史记录。它能区分“已送达”和“未读”状态，避免重复提醒，并提供 15 分钟免费延迟功能。Pro 版本则增加了一小时、一天及自定义时长的延迟选项。此外，插件具有容错机制，能识别并标记无效日期，防止因格式错误导致的静默失败，确保提醒的可靠性。

需要注意的是，该插件仅在 Obsidian 应用运行且视图处于打开状态时工作，无法在设备休眠或应用关闭时发送系统级推送通知。因此，它不适合作为闹钟或关键截止日期的唯一保障，建议配合系统闹钟使用。此外，插件不支持自动重复提醒，每次到期后需手动更新日期以触发下一次提醒。若需跨设备同步提醒状态，需注意交付历史是本地存储的，不同设备间不共享已读状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



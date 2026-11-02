---
uid: 1793625620301001
title: "Obsidian 插件：Property Reminders"
tags: ["日历与时间", "效率工具", "任务管理", "obsidian插件"]
description: "Get a notification when the date and time in a note's property arrives, and open that note with one click. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Property Reminders

> [!Note] 插件名片
> - 插件名称：Property Reminders
> - 插件作者：Abdulkader Safi
> - 插件说明：Get a notification when the date and time in a note's property arrives, and open that note with one click. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '效率工具', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abdulkader-safi/obsidian-reminder-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?property-reminders)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abdulkader-safi/obsidian-reminder-plugin/master/README.md)



## 概述

Property Reminders 是一款基于笔记属性（Property）的提醒工具，核心功能是在指定日期和时间到达时发送通知，并支持一键打开对应笔记。它无需学习复杂的内联语法，也不在笔记外部存储数据，因此与 Kanban 卡片、日历事件、Bases 视图及模板等依赖属性的工具完全兼容。你只需在笔记中添加名为 `reminder` 的属性，设置类型为“日期和时间”并选定具体时刻，即可实现提醒。

典型场景包括管理个人待办事项或会议日程。例如，你可以在项目笔记中设置 `due` 属性为下周三下午两点，届时系统会弹出通知并直接打开该笔记，方便你回顾上下文。对于使用日历插件的用户，如果事件笔记采用 `date` 和 `startTime` 两个独立属性，该插件也能识别并触发提醒，无需手动调整格式。

相比其他提醒插件，其最大特色在于对属性格式的灵活支持。它既支持单个属性包含完整日期时间（如 `2026-10-14T09:30`），也支持将日期和时间拆分为两个属性（如 `date` 和 `startTime`），且属性名不区分大小写。此外，插件提供“发送测试通知”功能，帮助排查系统级通知权限问题，并在设置中显示无法读取值的笔记列表，便于维护。

使用前需注意，插件仅在 Obsidian 运行时工作，无法唤醒应用。若 Obsidian 关闭或电脑休眠，错过的提醒会在下次打开时标记为“Missed”并汇总显示。移动端（iOS/Android）仅支持应用内通知，且需保持 Obsidian 在前台。该插件不会编辑笔记内容或发起网络请求，适合注重隐私和本地化管理的用户，但不适合需要跨设备同步提醒状态或依赖系统级后台唤醒的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



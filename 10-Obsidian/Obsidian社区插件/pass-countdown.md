---
uid: 1793625619928001
title: "Obsidian 插件：Pass Countdown"
tags: ["日历与时间", "任务管理", "效率工具", "obsidian插件"]
description: "Count down a multi-use pass with a deadline: uses left, time left on the running pass, the latest moment to start the next one, and reminders before each one ends. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pass Countdown

> [!Note] 插件名片
> - 插件名称：Pass Countdown
> - 插件作者：rexxall
> - 插件说明：Count down a multi-use pass with a deadline: uses left, time left on the running pass, the latest moment to start the next one, and reminders before each one ends. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rexxall/obsidian-pass-countdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pass-countdown)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rexxall/obsidian-pass-countdown/master/README.md)



## 概述

Pass Countdown 专为管理“多次使用、单次限时、整体有截止日期”的预付套餐而设计。它解决了许多运营商或商家不记录具体使用次数的痛点，通过手动记录每次激活时间，自动计算剩余次数、当前套餐的剩余时长，以及为了用完所有次数，下一次激活的最晚时刻。面板会直观展示进度，并在可能浪费次数时发出重叠警告，帮助你精准掌握使用节奏。

典型场景包括日本移动数据流量包（如52次7天无限流量，需在2027年前激活完）或健身房月卡。例如，当你激活一次7天流量时，插件会立即显示该次将在何时结束，并计算如果现在不激活下一次，是否还能在截止日期前用完所有次数。若当前套餐未结束就激活新套餐，它会提示重叠风险，避免无效消耗。

相比同类插件，其特色在于“节奏（Pace）”计算功能，能动态告知你为了用尽所有次数，下一次激活的绝对最后期限，并在临近时变色预警。此外，它支持导出 .ics 日历文件，将每次套餐的结束提醒同步到 Apple、Google 或 Outlook 日历，实现跨平台通知。数据完全本地存储，无需网络，隐私安全。

使用前需注意，每个 Vault 仅支持一种套餐类型，且应用内提醒仅在 Obsidian 打开时生效，手机提醒依赖导入的日历文件，记录新激活后需重新导出 .ics 文件。它不适合需要自动同步运营商后台数据、或管理多种不同规则套餐混合使用的场景，也不适合对实时性要求极高、无法接受手动记录激活时间的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



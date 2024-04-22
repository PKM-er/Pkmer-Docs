---
uid: 2024042221331823
title: Obsidian 插件：【Readme】Calendar Event Sync
tags: ['obsidian插件', 'readme']
description: 同步您当前的笔记与相关的日历事件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Calendar Event Sync

> [!Note] 插件名片
> - 插件名称：Calendar Event Sync
> - 插件作者：Stephen Dolan
> - 插件说明：同步您当前的笔记与相关的日历事件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/stephendolan/obsidian-calendar-event-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calendar-event-sync)

## 概述

同步您当前的笔记与相关的日历事件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/stephendolan/obsidian-calendar-event-sync/master/README.md)

---

## Readme(翻译）

下面是 [[calendar-event-sync]] 插件的自述翻译

# 黑曜石日历事件同步

This plugin is designed to quickly replace the title and initial content of the current note with your current, upcoming, or recent calendar event data.

## 工作原理

当您运行“与事件同步”命令时，我们会遍历您的日历事件，以按优先顺序查找以下内容：

- 如果当前有事件正在进行，则查找当前事件。
- 如果即将发生事件，则查找下一个即将发生的事件（时间窗口可在设置中自定义）。
- 如果最近发生了事件，则查找最近发生的事件（时间窗口可在设置中自定义）。

## 必填设置

- `Calendar ICS URL`: 这必须是一个有效的日历 ICS URL，我们可以从中获取您的事件。插件目前仅支持单个 ICS URL 作为事件数据的来源。

## 可选设置

- `显示通知`：您可以确定在事件同步时是否在 Obsidian 中显示通知。
- `日历所有者电子邮件`：如果您希望已拒绝的事件自动从同步中排除，请设置此选项。
- `未来事件小时限制`：要考虑的“即将发生”事件。
- `最近事件小时限制`：要考虑的“最近”事件。
- `忽略的事件标题`：要从同步中排除的事件标题列表。您可以输入任意数量，用换行符分隔。




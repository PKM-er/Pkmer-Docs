---
uid: 2024042221311859
title: Obsidian 插件：【Readme】Dust Calendar
tags: ['obsidian插件', 'readme']
description: 更符合中国习惯的日历，可以显示农历、节气、节假日、调休信息，支持月视图和年视图切换，支持关联创建周期性笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Dust Calendar

> [!Note] 插件名片
> - 插件名称：Dust Calendar
> - 插件作者：纳米级尘埃
> - 插件说明：更符合中国习惯的日历，可以显示农历、节气、节假日、调休信息，支持月视图和年视图切换，支持关联创建周期性笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/a-nano-dust/dust-obsidian-calendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dust-calendar)

## 概述

更符合中国习惯的日历，可以显示农历、节气、节假日、调休信息，支持月视图和年视图切换，支持关联创建周期性笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/a-nano-dust/dust-obsidian-calendar/master/README.md)

---

## Readme(翻译）

下面是 [[dust-calendar]] 插件的自述翻译

【机翻】

<h1 align="center">尘埃黑曜石日历</h1>

<p align="center">
    <img alt="Release version" src="https://img.shields.io/github/v/release/a-nano-dust/dust-obsidian-calendar?style=for-the-badge">
    <img alt="Download count" src="https://img.shields.io/github/downloads/a-nano-dust/dust-obsidian-calendar/total?style=for-the-badge">
</p>
<p align="center">
    <span>尘埃黑曜石日历 更符合中国习惯的 Obsidian 插件，它提供了日历浏览以及与日历联动的周期性笔记功能。</span>
</p>

## About Plugins

更符合中国习惯的日历插件，支持同时显示公历、农历、星期、节气、节假日、调休等信息，支持切换月视图和年视图，支持关联创建周期性笔记。周期性笔记包括：每日笔记、每周笔记、每月笔记、季度笔记、年度笔记。

![](https://cdn.pkmer.cn/covers/dust-calendar_2_0.jpeg!pkmer)

Installation

### 手动安装

1. 下载 [latest release](https://github.com/a-nano-dust/dust-obsidian-calendar/releases/latest)；
2. 解压并提取 dust-obsidian-calendar 文件夹，然后放到你 Obsidian 库中的插件目录中 `<仓库根目录>/.obsidian/plugins/` (注意: `.obsidian` 文件夹可能被隐藏了，你需要先将该文件夹展示出来)
3. 打开 `设置/第三方插件`，启用该插件。

## Calendar View

Moving the mouse to the year area at the top of the calendar, arrows for switching years will appear on the left and right of the year area, click to switch years. The operation method for the month and quarter area at the top of the calendar is the same.

Clicking on `Today` at the top of the calendar may result in the following situations:

- If a date under the month view is already selected, the calendar view will switch to the current date;
- If a week number under the month view is already selected, the calendar view will switch to the current week number;
- If a month under the year view is already selected, the calendar view will switch to the current month;
- If a quarter number under the year view is already selected, the calendar view will switch to the current quarter number.

Clicking on `Month` or `Year` at the top of the calendar can switch from month view to year view, or from year view to month view.

## Periodic Notes

First, we need to open the corresponding option in the plugin settings.

Then, we need to configure the template path for periodic notes (including the folder where the notes are located and the note file name), the template control characters are the same as [luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).

The following shows a possible configuration:

![](https://cdn.pkmer.cn/covers/dust-calendar_2_1.jpeg!pkmer)

After the configuration is completed, you can create notes as follows:

- Create daily notes: double-click on the date in the month view;
- Create weekly notes: double-click on the week number in the month view;
- Create monthly notes: double-click on the month in the year view, or double-click on the month at the top of the calendar;
- Create quarterly notes: double-click on the quarter number in the year view, or double-click on the quarter at the top of the calendar;
- Create annual notes: double-click on the year at the top of the calendar.

If there are daily notes, weekly notes, monthly notes, quarterly notes, and annual notes associated with the calendar, a **·** will be displayed below the associated display area in the calendar view.

## Contact and Feedback

If you encounter any problems or have any good suggestions while using this plugin, feel free to raise them in [GitHub issues](https://github.com/a-nano-dust/dust-obsidian-calendar/issues).

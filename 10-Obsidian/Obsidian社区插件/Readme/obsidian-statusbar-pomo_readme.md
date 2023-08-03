---
uid: 2023080322272337
title: Obsidian 插件：Status Bar Pomodoro Timer
tags: ['任务管理', '状态栏', 'obsidian插件', 'readme']
description: 将番茄钟添加到你的状态栏中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Status Bar Pomodoro Timer

> [!Note] 插件名片
> - 插件名称：Status Bar Pomodoro Timer
> - 插件作者：kzhovn
> - 插件说明：将番茄钟添加到你的状态栏中。
> - 插件分类：[' 任务管理 ', ' 状态栏 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kzhovn/statusbar-pomo-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-statusbar-pomo)

## 概述

将番茄钟添加到你的状态栏中。

![Status Bar Pomodoro Timer](https://cdn.pkmer.cn/covers/obsidian-statusbar-pomo.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kzhovn/statusbar-pomo-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-statusbar-pomo]] 插件的自述翻译

# Obsidian 的状态栏番茄钟

这是一个在 Obsidian 的状态栏中显示 [番茄钟](https://en.wikipedia.org/wiki/Pomodoro_Technique) 的插件。

![番茄钟截图](timer_screenshot.png)

使用方法

点击左侧功能面板上的时钟图标开始计时。再次点击以切换暂停状态。

所有这些操作都可以通过命令面板进行。您还可以设置一个热键来停止计时器。

## 设置

您可以更改番茄钟的持续时间、休息时间以及长休息之间的间隔，并切换定时器结束的声音和白噪音。

自动启动定时器允许您切换下一个休息或番茄钟是否在下一个自动开始，或者等待您手动开始。如果禁用，您可以指定一定数量的自动运行的番茄钟和休息周期（例如，如果您想连续运行两个番茄钟及其相应的休息而不停下来，然后暂停，输入 2）。

### 日志记录

如果启用日志记录，插件将在每个番茄钟结束时写入您指定的日志文件。如果不存在此类文件，则将在第一个番茄钟结束时创建它。默认情况下，日志消息为 "🍅 dddd, MMMM DD YYYY, h:mm A"（例如 "🍅 星期五，2021 年 7 月 16 日，下午 6:18"），但您可以使用 [moment显示格式](https://momentjs.com/docs/#/displaying/format/) 指定自己的消息。

" 记录到每日笔记 " 将日志追加到每日笔记中。请注意，目前仅通过追加到文件末尾的方式工作。

" 记录活动笔记 " 将在日志消息中包含一个指向番茄钟启动时的活动笔记的链接。默认情况下，笔记链接将出现在时间戳之后，但您可以使用 [{{logFile}}] 自定义位置。

您可以通过点击计时器打开当前的日志文件。

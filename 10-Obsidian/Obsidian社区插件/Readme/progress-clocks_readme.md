---
uid: 2024031219330262
title: Obsidian 插件：【Readme】Progress Clocks
tags: ['obsidian插件', 'readme']
description: Progress clocks and other useful widgets for real-time status tracking.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Progress Clocks

> [!Note] 插件名片
> - 插件名称：Progress Clocks
> - 插件作者：Nathan Clark
> - 插件说明：Progress clocks and other useful widgets for real-time status tracking.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tokenshift/obsidian-progress-clocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?progress-clocks)

## 概述

Progress clocks and other useful widgets for real-time status tracking.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tokenshift/obsidian-progress-clocks/main/README.md)

---

## Readme(翻译）

下面是 [[progress-clocks]] 插件的自述翻译

【机翻】

# 黑曜石进度时钟

用于 [Obsidian.md](https://obsidian.md/) 的进度时钟、计数器和秒表。

## 用法

使用 `Progress Clocks: Open Sidebar View` 来打开进度时钟面板。

默认情况下，面板是空的；使用“添加部分”按钮来创建一个新的进度时钟（和其他跟踪器）分组，然后使用面板底部的按钮来向部分添加时钟、计数器和秒表（请参见下文对每种跟踪器的解释）。

![进度时钟侧边栏视图示例](https://cdn.pkmer.cn/covers/progress-clocks_2_0.png!pkmer)

## 追踪器的类型

### 进度时钟

进度时钟是一种类似饼图的计数器，具有可配置的分段数量，用于跟踪进度/步骤。它们是由 [John Harper](https://twitter.com/john_harper) 在 [《暗黑刀锋》](https://bladesinthedark.com/progress-clocks) 角色扮演游戏中引入的。

![具有4、6和8个分段的进度时钟示例](https://cdn.pkmer.cn/covers/progress-clocks_2_1.png!pkmer)

当您添加新时钟时，请输入您希望它具有的分段数量。您可以随时添加和删除分段，以及增加当前计数（即填充了多少分段），使用每个时钟下方的按钮（或通过 ctrl/cmd 点击时钟本身）。

### 计数器

![计数器示例](https://cdn.pkmer.cn/covers/progress-clocks_2_2.png!pkmer)

一个带有增加/减少按钮的数字（默认为零）。您也可以点击当前值输入一个确切的数字，或者输入 `+/-` 来对当前值进行加法/减法运算。

### 秒表

![秒表示例](https://cdn.pkmer.cn/covers/progress-clocks_2_3.png!pkmer)

Keeps track of time (in seconds by default; click the `/1000` button to toggle

between seconds and milliseconds). The other buttons under the stopwatch can be

used to pause/resume the stopwatch, reset it (to 0:00), or record a lap time

(which will show up in a list under the stopwatch).

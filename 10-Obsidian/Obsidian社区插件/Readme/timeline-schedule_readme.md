---
uid: 2024022121295540
title: Obsidian 插件：【Readme】Timeline Schedule
tags: ['obsidian插件', 'readme']
description: 从人类可读的时间字符串生成的内联时间表，例如在```schedule```代码块中的'Walk dog (30min)'。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Timeline Schedule

> [!Note] 插件名片
> - 插件名称：Timeline Schedule
> - 插件作者：Evan Bonsignori
> - 插件说明：从人类可读的时间字符串生成的内联时间表，例如在 ```schedule``` 代码块中的 'Walk dog (30min)'。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Ebonsignori/obsidian-timeline-schedule)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?timeline-schedule)

## 概述

从人类可读的时间字符串生成的内联时间表，例如在 ```schedule``` 代码块中的 'Walk dog (30min)'。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Ebonsignori/obsidian-timeline-schedule/main/README.md)

---

## Readme(翻译）

下面是 [[timeline-schedule]] 插件的自述翻译

【机翻】

# 黑曜石时间表安排

内联时间表是从人类可读的时间字符串生成的，例如在 [Obsidian](https://obsidian.md) 中的 ```schedule codeblock 中的 'Walk dog (30min)'。

您可以在插件的设置中设置是否要启用漂亮的预览和/或自动填充。

## 仅自动填充，没有漂亮的预览

![仅自动填充，没有漂亮的预览演示gif](https://cdn.pkmer.cn/covers/timeline-schedule_2_0.gif!pkmer)

在自动填充过程中，`[开始]` 和 `[结束]` 块将始终存在，并且它们之间的每一行都将以时间块（例如 `[9:30 AM]:`）开头。

您在每行末尾添加的可读时间字符串将被添加到下一个时间块中。

例如，`Grind beans (3m)` 将在下一行中的时间从 `[7:05]` 到 `[7:08]`。

在此模式下，当光标退出代码块时，它将作为标准的 Obsidian 代码块进行预览。

虽然可能，但**不建议**在 [callouts](https://help.obsidian.md/Editing+and+formatting/Callouts) 中使用自动填充。我建议在 callout 之外编写您的日程安排，然后将代码块粘贴到 callout 中以在漂亮的预览中呈现。

## 只有漂亮的预览，没有自动填充

![只有漂亮的预览，没有自动填充演示gif](https://cdn.pkmer.cn/covers/timeline-schedule_2_1.gif!pkmer)

在这种模式下，您不需要日期块，例如（`[开始]`，`[完成]`），`开始` 日期是从您在开头放置的任何内容设置的，例如“开始：2023 年 08 月 10 日上午 08:00”

如果您省略了开始行，将使用当前日期和时间。

# 自动填充和漂亮预览（默认）

![自动填充和漂亮预览演示gif](https://cdn.pkmer.cn/covers/timeline-schedule_2_2.gif!pkmer)

您可以在插件的设置中更改“开始”和“结束”的名称，以及开始、结束和事件日期的格式。

## 样式

查看 [styles.css](./styles.css) 以获取您可以覆盖的类列表。

## 安装

在 Obsidian 中通过 [内置的社区插件浏览器](https://help.obsidian.md/Extending+Obsidian/Community+plugins) 搜索“Timeline Schedule”。

## 贡献

请通过 [提交问题](https://github.com/Ebonsignori/obsidian-timeline-schedule/issues/new) 来提出任何建议或错误报告。

如果您想要提交 PR，请参阅 [开发者文档](docs/development.md)。

## 致谢

[Obsidian团队](https://obsidian.md/about) 为创造出如此美妙的产品而致谢 :purple_heart:

---
uid: 2023080322284166
title: Obsidian 插件：Tracker
tags: ['统计', 'obsidian插件', 'readme']
description: 将笔记中的变化收集起来，并且提供不同预设的图形分析模板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Tracker

> [!Note] 插件名片
> - 插件名称：Tracker
> - 插件作者：pyrochlore
> - 插件说明：将笔记中的变化收集起来，并且提供不同预设的图形分析模板。
> - 插件分类：[' 统计 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pyrochlore/obsidian-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tracker)

## 概述

将笔记中的变化收集起来，并且提供不同预设的图形分析模板。

![Tracker](https://cdn.pkmer.cn/covers/obsidian-tracker.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pyrochlore/obsidian-tracker/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tracker]] 插件的自述翻译

# Obsidian Tracker 插件

![GitHub release](https://img.shields.io/github/v/release/pyrochlore/obsidian-tracker)

<img src="https://raw.githubusercontent.com/pyrochlore/obsidian-tracker/master/docs/images/screenshot_v1.9.png" width="800">

这是一个 [Obsidian](https://obsidian.md/) 插件，可以帮助您从笔记中收集数据并全面地表示它。

[这里](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md) 是一个包含简化示例的表格，展示了您可以追踪的内容。

## 更新内容

版本 1.10.0

- 为月视图添加注释模式（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestCalendar.md)）
- 为线图和柱状图添加参数 `xAxisTickInterval`、`yAxisTickInterval`、`xAxisTickLabelFormat` 和 `yAxisTickLabelFormat`（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestAxisIntervalAndFormat.md)）
- 允许在参数 `dateFormatPrefix` 和 `dateFormatSuffix` 中使用正则表达式（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestDateFormats.md)）
- 添加参数 `file`、`specifiedFilesOnly`、`fileContainsLinkedFiles` 和 `fileMultiplierAfterLink`，以从指定文件中获取数据（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestSpecifiedFiles.md)）
- 添加参数 `textValueMap`，将文本或表情符号转换为指定的值（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTextValueMap.md)）
- 修复了一些错误
- 增强了错误信息

版本 1.10.1

- 修复了 iOS 上的“加载插件失败”问题

版本 1.10.2

- 修复了某些 macOS 设备上插件无法渲染的问题

版本 1.10.3

- 允许在输出类型为 `month` 和 `pie` 时使用参数 `fitPanelWidth`
- 修复了图表工具提示的调整大小和定位问题

版本 1.10.4

- 允许在参数 `textValueMap` 的键中使用正则表达式
- 添加参数 `shiftOnlyValueLargerThan`，以确定何时进行 `valueShift`
- 修复了用户报告的错误
- 修复了插件设置中的拼写错误

版本 1.10.5

- 允许在月视图的 `initMonth` 中使用相对日期值

版本 1.10.6

- 修复了月视图中缺失数据的着色问题

版本 1.10.7

- 允许使用 HTML 图像标签作为表情符号输入

版本 1.10.8

- 修复了将 `startDat/endDate` 错误地解读为相对日期的问题

版本 1.10.9

- 将制表符替换为空格
- 在 `dvField` 中接受更多的 Unicode 字符
- 允许文件夹路径中包含表情符号
- 修复了一些错误

!!! 破坏性变更 !!!

从版本 1.9.0 开始，模板变量，例如 '{{sum}}'，已被弃用。相反，Tracker 提供了运算符（+，-，*，/，%）和函数（dataset()，sum()，maxStreak()，......等）来帮助我们进行数据处理。对于之前版本中存在代码块的用户，请将 '{{sum}}' 替换为 '{{sum()}}' 或将 '{{sum(1)}}' 替换为 '{{sum(dataset(1))}}'。有关新表达式的更多信息，请参见 [此处](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Expressions.md)。

## 使用方法

1. 在每日笔记中添加一些您想要跟踪的目标。
2. 添加一个新的笔记来显示跟踪器。
3. 手动添加跟踪器代码块（[示例](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples)）或使用 [命令](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Commands.md)。
4. 将文档视图模式切换为“预览”，然后代码块将被渲染。

有关更多用例，请下载并打开已安装并启用此插件的 Obsidian 中的 [示例](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples) 文件夹。

## 您可能想了解的更多细节

- [安装](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Installation.md)：从 Obsidian 安装插件或手动安装
- [概念](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Concepts.md)：解释此插件的工作原理和设置方法
    - [目标评估](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/TargetEvaluation.md)
    - [输入参数](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/InputParameters.md)
    - [表达式](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Expressions.md)
- [示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md)
- [插件设置](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Settings.md)
- [发布说明](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/ReleaseNotes.md)
- [路线图](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/RoadMap.md)
- [常见问题](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Questions.md)

## 支持

- 如果你喜欢这个插件或者想要支持进一步的开发，你可以 [给我买杯咖啡](https://www.buymeacoffee.com/pyrochlore)。
- 请在 [GitHub Issues](https://github.com/pyrochlore/obsidian-tracker/issues) 中报告错误和请求功能。




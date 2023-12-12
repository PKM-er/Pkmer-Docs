---
uid: 2023120719255782
title: Obsidian 插件：【Readme】Cursor Location
tags: ['界面相关', 'obsidian插件', 'readme']
description: 这显示了光标的位置（字符和行号）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Cursor Location

> [!Note] 插件名片
> - 插件名称：Cursor Location
> - 插件作者：Sean Slater
> - 插件说明：这显示了光标的位置（字符和行号）。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/spslater/obsidian-cursor-location-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-cursor-location-plugin)

## 概述

这显示了光标的位置（字符和行号）。

![Cursor Location](https://cdn.pkmer.cn/covers/obsidian-cursor-location-plugin.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/spslater/obsidian-cursor-location-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-cursor-location-plugin]] 插件的自述翻译

# 光标位置 [![GitHub tag (Latest by date)](https://img.shields.io/github/v/tag/spslater/obsidian-cursor-location-plugin)](https://github.com/spslater/obsidian-cursor-location-plugin/releases) ![GitHub all releases](https://img.shields.io/github/downloads/spslater/obsidian-cursor-location-plugin/total)

这个插件适用于 [Obsidian](https://obsidian.md/)，它显示光标的位置（字符和行号）。

目前，该插件仅适用于桌面版，因为移动应用程序不支持自定义状态栏项目。

## 演示

这个演示使用的是较旧版本的 Obsidian，但输出的功能是相同的。

![演示动画](https://cdn.pkmer.cn/covers/obsidian-cursor-location-plugin_2_0.gif)

## 设置

在下拉菜单中的 `custom` 选项允许您设置自己的模式，如果没有预定义的模式适合您的需求。对于以前是文本框而现在是下拉菜单的设置，如果您已经修改了该设置并希望切换回默认设置，选择 `custom` 将恢复到您的设置。

您可以通过设置选项卡更改行为。

- `# of Cursors`：在切换到“N cursors”之前将显示的光标位置数
- `Cursor Seperator`：在 `# of Cursors` 大于 1 时，用于分隔多个光标位置的字符串。连续的空格将被压缩为 1 个空格（根据 HTML 规则）。
  - 只有当您的 `# of Cursors` 大于 1 时才会显示此选项
- `Selection Mode`：在进行选择时如何显示光标位置
  - `Beginning`：显示光标起始位置
  - `End`：显示当前光标位置
  - `Full Selection`：显示选择范围（`ch:line -> ch:line`）。如果选择向后拖动，此范围可能从文档后面到前面。
- `Range Seperator`：在 `Selection Mode` 设置为 `Full Selection` 时，用于分隔选择的开始和结束的字符串。连续的空格将被压缩为 1 个空格（根据 HTML 规则）。
- `Display as Percent`：显示文档的百分比而不是当前所在行号。
- `Percentage Mode`：显示单词数与百分比数的比例
  - `Very Wordy`：只使用单词，将文档分为五分之一
  - `A Little Wordy`：只使用单词，将文档分为三分之一
  - `Strict Percentages`：在顶部和底部显示百分比，然后显示从 1% 到 99% 的百分比
  - `Low Fuzzy Percentages`：在顶部和底部显示前 10% 和后 10%，其余部分显示百分比
  - `High Fuzzy Percentages`：在顶部和底部显示前 20% 和后 20%，其余部分显示百分比
  - `Only Percentages`：在整个文档中显示百分比，不使用单词
- `Individual Cursor Pattern`：用于显示每个光标位置信息的模式
  - `ch` 是当前行中光标所在的列
  - `ln` 是当前行号
  - `ct` 是文件中的总行数（计数）
  - 如果 `ct` 是这三个值中的第一个或最后一个，则在显示范围时将被删除。
- `Include Frontmatter`：将前言计入文档百分比
- `Frontmatter Phrase`：如果不包括前言，应该如何称呼它。
  - `frontmatter`
  - `metadata`
  - `preamble`
- `Display Cursor Line Count`：显示每个光标选择的行数。
- `Cursor Line Pattern`：当启用 `Display Cursor Line Count` 时显示的模式
  - `custom` 允许您设置自己的模式，如果没有预定义的模式适合您的需求
  - 如果您之前已更改此设置并希望切换回默认设置，选择 `custom` 将选择该设置。
- `Pad Status Bar`：添加填充以减少状态栏的移动量
- `Padding Width`：状态栏填充的宽度，仅在启用 `Pad Status Bar` 时显示
- `Display Character Count`：显示所选字符的总数
- `Display Total Line Count`：显示所选行的总数
- `Reset`：将所有值重置为默认设置

### 默认设置

![默认设置](https://cdn.pkmer.cn/covers/obsidian-cursor-location-plugin_2_1.png!pkmer)

### 百分比设置

![百分比设置](https://cdn.pkmer.cn/covers/obsidian-cursor-location-plugin_2_2.png!pkmer)

## 安装

您可以通过 Obsidian 中的 Community Plugins 选项卡安装插件。

只需搜索“Cursor Location”。

## 贡献

非常感谢您的帮助。首先，请检查是否有任何与您想要帮助的内容相关的问题。同时，欢迎您提交拉取请求，以进行您所做的更改/修复。

## 许可证

[MIT许可证](https://opensource.org/licenses/MIT)

---
uid: 2023080322261233
title: Obsidian 插件：【Readme】Rollover Daily Todos
tags: ['任务管理', 'obsidian插件', 'readme']
description: 以循环滚动的方式，将存在不完整的待办事项的笔记，展现在你面前。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Rollover Daily Todos

> [!Note] 插件名片
> - 插件名称：Rollover Daily Todos
> - 插件作者：Matt Sessions
> - 插件说明：以循环滚动的方式，将存在不完整的待办事项的笔记，展现在你面前。
> - 插件分类：['任务管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/shichongrui/obsidian-rollover-daily-todos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-rollover-daily-todos)

## 概述

以循环滚动的方式，将存在不完整的待办事项的笔记，展现在你面前。

![Rollover Daily Todos](https://cdn.pkmer.cn/covers/obsidian-rollover-daily-todos.GIF!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lumoe/obsidian-rollover-daily-todos/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-rollover-daily-todos]] 插件的自述翻译


# 每日待办事项滚动

[![构建](https://github.com/lumoe/obsidian-rollover-daily-todos/actions/workflows/ci.yml/badge.svg)](https://github.com/lumoe/obsidian-rollover-daily-todos/actions/workflows/ci.yml)

这个 Obsidian 插件会将上一个日记中未完成的待办事项（可以是昨天或一周前）滚动到今天。当通过内部的“每日笔记”插件或“周期性笔记”插件创建新的每日笔记时，会自动触发此操作。也可以通过命令面板中的命令来运行。

![插件工作的演示](./demo.gif)

## 用法

### 1. 新的每日笔记

只需使用“每日笔记”或“周期性笔记”插件创建一个新的每日笔记。前一天未完成的待办事项将会转移到今天的每日笔记中。

### 2. 命令：立即滚动待办事项

您还可以打开命令面板（在 macOS 上为 CMD+P）并开始输入“roll”以查找此命令。无论您在 Obsidian 中的位置如何，前一天的待办事项都将被滚动到当前日期。还有一个名为“撤销上次滚动”的命令，可以在滚动发生后的2分钟内运行。这两个命令都有可能具有破坏性，并且默认的文本元素撤销命令（在 macOS 上为 CMD+Z）无效。目前只能使用1次撤销。

请注意，如果您在未来创建了一份每日笔记，并尝试运行此命令，待办事项将不会滚动到未来日期。它们将始终滚动到今天的笔记（如果不存在，则不会发生任何变化），从时间上最接近（过去）的每日笔记开始。

## 需求

- [ ] 您必须安装以下插件之一：
  1. 安装了“Daily notes”插件 _或_
  2. 安装了“Periodic Notes”插件，并且已经打开了“Daily Notes”设置
- [ ] 在这些插件中设置一个笔记文件夹。文件夹中必须包含：
  1. 2个或更多的笔记
  2. 所有笔记的命名格式必须与您用于每日笔记的格式相同（例如，对于`YYYY-MM-DD`，命名为`2021-08-29`）

## 设置

### 1. 模板标题

如果您在“每日笔记 > 设置”或“周期性笔记 > 设置”中选择了一个模板文件用于新的每日笔记，您将能够选择一个标题来将未完成的笔记整合到其中。请注意，未完成的待办事项是从整个文件中获取的，而不管它们所在的标题是什么。它们都会被整合到今天的每日笔记中，就在所选择的标题下方。

如果您将此字段留空或选择“无”，那么未完成的待办事项将被整合到今天笔记的末尾（对于没有模板的新笔记，末尾即为笔记的开头）。

### 2. 删除前一天的待办事项

默认情况下，该插件实际上会复制未完成的待办事项。所以如果你昨天忘记给狗洗澡，并且没有勾选它，那么昨天的日记中将有一个未完成的勾选标记，并且一个新的未完成的勾选标记将被添加到今天的日记中。如果使用“撤销最后一次转移”命令，已删除的待办事项将被恢复（请记住，此操作的时间限制为2分钟）。

打开此设置将在今天的日记中复制未完成的待办事项后，从前一天的日记中删除它们。

### 3. 删除rollover中的空待办事项

默认情况下，此插件将rollover任何具有复选框的内容，无论其是否有内容。打开此设置将忽略空的待办事项。如果您已经打开了上面的**#2**，它还将删除空的待办事项。

## 错误/问题

1. 有时候你使用这个插件时，你的未完成的待办事项会停留在同一个位置。这可能是格式问题。

- 正则表达式用于搜索未完成的待办事项：`/\t*- \[ \].*/g`
- 至少，它们需要看起来像这样：`行的开头 | 制表符`-` `[` `]`你的文本在这里`
- 如果你在行的开头使用空格而不是制表符，插件的行为可能不一致。有时它会滚动项目，但不会从前一天删除它们，当你打开该选项时。

2. 有时候，如果你太快触发`rollover`函数，它会在新数据保存到磁盘之前读取文件的状态。例如，如果你在昨天的日记中添加了一个新的未完成的待办事项，然后快速运行`Rollover Todos Now`命令，它可能在你运行命令之前的一两秒钟内获取文件的状态。如果发生这种情况，只需运行`Undo last rollover`命令。等待一两秒钟，然后再次尝试滚动待办事项。

例如（没有模板标题，打开空待办事项）：

```markdown
你输入：

- [x] 洗碗
- [ ] 倒垃圾

然后你运行Rollover Todos Now命令。今天的日记可能会变成：

- [ ] 倒垃圾

而前一天可能会变成：

- [x] 洗碗
```

## 安装

此插件可以在 Obsidian 的“第三方插件”选项卡中安装。




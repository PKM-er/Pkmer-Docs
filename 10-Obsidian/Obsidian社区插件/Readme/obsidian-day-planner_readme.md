---
uid: 20230803231105
title: Obsidian 插件：Day Planner
tags: ['任务管理', '效率', '界面相关', 'obsidian插件', 'readme']
description: 用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232525
---

# Obsidian 插件：Day Planner

> [!Note] 插件名片
> - 插件名称：Day Planner
> - 插件作者：James Lynch
> - 插件说明：用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器。
> - 插件分类：[' 任务管理 ', ' 效率 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lynchjames/obsidian-day-planner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-day-planner)

## 概述

用于从 Markdown 笔记中的任务列表中规划和管理番茄钟计时器。

![Day Planner](https://cdn.pkmer.cn/covers/obsidian-day-planner.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-day-planner]] 插件的自述翻译

# 日程安排

![GitHub工作流状态](https://img.shields.io/github/workflow/status/lynchjames/obsidian-day-planner/Release%20Build?logo=github&style=for-the-badge) ![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/lynchjames/obsidian-day-planner?style=for-the-badge&sort=semver)

该存储库包含一个用于 [Obsidian](https://obsidian.md/) 的插件，用于从 Markdown 笔记中的任务列表进行日程安排和管理番茄钟。

> 这是插件的早期 alpha 版本，它将在 Obsidian 打开且插件已启用时持续运行。**请先在测试保险库中尝试插件，并确保您的笔记已在云存储或 Git 中备份。**

## 特点

- 每天为您生成一个日程安排，或在您选择的任何笔记中创建一个日程安排。
- 状态栏会根据您当前和下一个任务的信息更新进度。您可以点击状态栏访问今天的日程安排笔记。
- Mermaid 甘特图会根据您的任务自动生成，并包含在您的日程安排笔记中。
- 时间线视图将您的任务按照垂直时间线布局展示。

![日程安排演示图片](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/day-planner-note-preview.png)

## 用法

安装完成后，插件将在您的存储库根目录下创建一个名为“Day Planners”的文件夹。一个以今天日期为文件名格式的笔记将自动创建在 `Day Planners/Day Planner-YYYYMMDD.md`。

您也可以选择使用 [命令模式](#day-planner-mode)，在任何笔记中添加一个当前日期的日程安排。

### 日程安排备注

在备注中，您可以创建一个带有时间和任务的待办事项清单，这些任务将在一天内自动跟踪。您现在可以在任务之间包含标题和其他内容。以下是一个示例：

```markdown

## 日程安排

这是我一天的计划，分为三个主要部分：
1. 早晨准备
2. 阅读
3. 下午复习

### 早晨准备

这是我准备上班并进行常规准备的地方。

- [ ] 09:30 准备工作
- [ ] 09:45 复习昨天的笔记
- [ ] 10:30 创建 #文章评论 的新笔记
- [ ] 11:30 休息

### 阅读

一天中专门用于阅读的时间段：

1. 文章。
2. 当天分配的书籍章节。
3. 重新阅读过去的笔记。

- [ ] 12:00 阅读
  - [ ] 文章1
  - [ ] 文章2
  - [ ] 文章笔记复习
- [ ] 12:25 休息
- [ ] 12:30 阅读
- [ ] 14:00 休息

### 下午复习

我利用这个时间来复习我早些时候完成的工作，并完成任何准备明天的任务。

- [ ] 15:00 复习笔记并更新每日笔记[[20201103]]
- [ ] 15:45 散步
- [ ] 16:30 阅读
- [ ] 17:20 准备明天的会议
- [ ] 18:00 结束
```

这也可以作为一个文件提供，文件名为 [day-planner-example.md](https://github.com/lynchjames/obsidian-day-planner/blob/main/examples/day-planner-example.md)。

Day Planner 的标题和 `---` 规则用于标识 Day Planner 的范围。必须使用一个标题，但可以是 `#`、`##`、`###` 或 `####`。

任务列表项的格式很重要，因为这是用来计算每个任务的时间和任务之间的间隔的。使用的格式应该是：

 `- [ ] HH:mm 任务文本`



 **应使用 24 小时制。**

现在还支持嵌套的检查列表项或项目，以捕捉定时任务的子任务。定时任务必须位于复选框列表的顶层。

`BREAK` 和 `END` 是定义休息和任务时间跟踪结束的关键字。它们不区分大小写，因此也可以使用 `break` 和 `end`。`BREAK` 和 `END` 关键字都是可配置的，并且可以在 Day Planner 设置选项卡中自定义。

在本例中，`END` 用作带有时间的项目，以便为最后一个任务，即 17:00 的 " 准备明天的会议 "，提供准确的时间间隔。

笔记将自动更新：过去的任务将被勾选并标记为已完成。

使用上面的示例，在 14:30 时，笔记将自动更新为：

```markdown

## 日程安排

这是我一天的计划，分为三个主要部分：
1. 早晨准备
2. 阅读
3. 下午复习

### 早晨准备

这是我准备上班并进行常规准备的地方。

- [x] 09:30 设置工作环境
- [x] 09:45 复习昨天的笔记
- [x] 10:30 创建新的笔记用于#文章评论
- [x] 11:30 休息

### 阅读

一天中专门用于阅读的时间段：

1. 文章。
2. 当天分配的书籍章节。
3. 重新阅读过去的笔记。

- [x] 12:00 阅读
  - [ ] 文章1
  - [ ] 文章2
  - [ ] 文章笔记复习
- [x] 12:25 休息
- [x] 12:30 阅读
- [ ] 14:00 休息

### 下午复习

我利用这个时间来复习我早些时候所做的事情，并完成任何准备明天的任务。

- [ ] 15:00 复习笔记并更新每日笔记[[20201103]]
- [ ] 15:45 散步
- [ ] 16:30 阅读
- [ ] 17:20 准备明天的会议
- [ ] 18:00 结束

### 时间线视图

可以使用“显示日程安排时间线”命令来添加一个垂直时间线视图，显示今天日程安排的任务，并显示当前时间的线条。

![日程安排时间线](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/day-planner-timeline.png)

### 状态栏

Obsidian中的状态栏还会显示当前任务或休息的进度以及剩余时间。点击状态栏项目将带您进入Day Planner笔记。

#### 任务状态

当有一个活动任务时显示的状态：

![任务状态](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/task-status.png)

#### 休息状态

在休息期间显示的状态：

![休息状态](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/break-status.png)

#### 结束状态

当任务结束时显示的状态：

![结束状态](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/end-status.png)

## 配置

### 日程规划模式

Day Planner插件有两种使用模式：

**文件模式**

该插件会自动生成日程规划文件夹中每一天的日程规划笔记。

**命令模式**

使用命令可以在任何笔记中插入今天的日程规划，以及将今天的日程规划与当前笔记取消关联。

>注意：要将日程规划添加到当前笔记中，您首先需要通过运行命令面板中的“Day Planner: Link today's Day Planner to the current Note”或“Day Planner: Add a Day Planner template for today to the current note”命令将日程规划与当前笔记关联起来。

只要使用提供的格式，日程规划可以放置在笔记的任何位置。随着时间的推移，只有笔记中的日程规划部分会更新。

### 完成过去的计划事项

您可以选择插件是否自动将过去的计划事项标记为已完成，或者允许您自己勾选它们。

您可以选择在您的日程计划中包含一个动态生成的[Mermaid甘特图](https://mermaid-js.github.io/mermaid/#/gantt)。

任务和休息将显示在不同的部分，以帮助可视化您一天的计划。

![Mermaid甘特图示例](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/mermaid-gantt.png)

可以使用自定义CSS覆盖甘特图的颜色，并且有关类的[Mermaid文档](https://mermaid-js.github.io/mermaid/#/gantt?id=styling)。提供了一个带有任务和休息部分示例的CSS文件：

[mermaid-gantt-example.css](examples/mermaid-gantt-example.css)

### 状态栏 - 圆形进度条

您可以选择在状态栏中显示进度，使用圆形饼图进度条来节省水平空间。

![圆形进度条](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/circular-progress.png)

### 状态栏 - 现在和下一个

您可以选择显示当前任务和下一个任务的时间和开始文本。

![现在和下一个](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/now-and-next.png)

### 任务通知

您可以选择在新任务开始时显示应用内通知。

### 时间轴缩放级别

这是用于显示时间轴的缩放级别。数字越高，每个任务占用的垂直空间就越多。

## 命令

在命令模式下，有两个命令可用于链接和取消链接日程计划。

![插件命令](https://raw.githubusercontent.com/lynchjames/obsidian-day-planner/main/images/commands.png)

## 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.9.10**。

安装

从Obsidian的0.9.7版本开始，可以直接在应用程序内安装此插件。该插件可以在“设置”窗格下的第三方插件中找到，该窗格可以从“设置”窗格下的“社区插件”目录中访问。

## 手动安装

1. 下载[最新版本](https://github.com/lynchjames/obsidian-day-planner/releases/latest)
1. 从压缩包中提取出obsidian-day-planner文件夹，放入你的vault的插件文件夹中：`<vault>/.obsidian/plugins/`  
注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，你可以按下`Command+Shift+Dot`来在Finder中显示该文件夹。
1. 重新加载Obsidian
1. 如果提示安全模式，你可以禁用安全模式并启用插件。

## 对于开发者

欢迎并感谢您的Pull requests。😀

如果您想为该插件的开发做出贡献，请按照[CONTRIBUTING.md](CONTRIBUTING.md)中提供的指南进行操作。

捐赠

此插件免费提供。如果您想向我捐赠一些东西，可以通过[PayPal](https://paypal.me/lynchjames2020)进行捐赠。谢谢！




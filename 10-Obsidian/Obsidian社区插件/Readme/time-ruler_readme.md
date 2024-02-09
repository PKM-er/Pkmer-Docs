---
uid: 2023120719444359
title: Obsidian 插件：【Readme】Time Ruler
tags: ['obsidian插件', 'readme']
description: 一个拖放式的时间标尺，结合了任务列表和日历视图的优点（与任务、完整日历和数据视图集成）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Time Ruler

> [!Note] 插件名片
> - 插件名称：Time Ruler
> - 插件作者：Joshua Tazman Reinier
> - 插件说明：一个拖放式的时间标尺，结合了任务列表和日历视图的优点（与任务、完整日历和数据视图集成）。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joshuatazrein/obsidian-time-ruler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?time-ruler)

## 概述

一个拖放式的时间标尺，结合了任务列表和日历视图的优点（与任务、完整日历和数据视图集成）。

![Time Ruler](https://cdn.pkmer.cn/covers/time-ruler.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshuatazrein/obsidian-time-ruler/master/README.md)
>

---

## Readme(翻译）

下面是 [[time-ruler]] 插件的自述翻译

时间尺结合了嵌套任务列表和基于事件的日历视图的优点。可以拖放任务进行时间块和重新安排，并在只读在线日历上查看任务。与 Tasks 和 FullCalendar 插件很好地集成。

# 特点

- **以多种格式读写任务**（Dataview 内联字段、Tasks 插件表情符号或 Full Calendar 任务事件）
- **时间块**与嵌套任务
- **搜索**和筛选已安排、未安排和到期任务
- **拖放**任务以重新安排和更改长度
- 显示所有**文件和标题**，拖放以创建新任务
- 通过拖放在特定时间创建**新任务**
- 通过共享链接查看只读**在线日历**
- 集成的**计时器/秒表**用于番茄工作法和时间跟踪
- 在勾选任务时播放**声音**！

# 文档

时间尺使用 [Dataview](obsidian://show-plugin?id=dataview) 插件来读取任务，请在使用本插件之前安装它。

阅读任务

任务元数据可以以以下任何格式指定：

- **Dataview**：`[scheduled:: yyyy-mm-ddThh:mm]  [due:: yyyy-mm-dd]  [length:: #h#m]  [priority:: lowest/low/medium/high/highest]`
- **Tasks**：`[startTime:: hh-mm]  [length:: #h#m] ⏳ yyyy-mm-dd 📅 yyyy-mm-dd ⏬/🔽/🔼/⏫/🔺`
- **Full Calendar**：`[date:: yyyy-mm-dd]  [startTime:: hh-mm]  [endTime:: hh-mm]  (or [allDay:: true]) [due:: yyyy-mm-dd]  [priority:: lowest/low/medium/high/highest]`

通过拖放编辑任务时，任务会转换为用户首选的格式（Dataview、Tasks 或 Full Calendar）。这可以在设置中更改。

* 注意：* 在括号之间使用双空格，因为没有它们，Obsidian 会认为它们是 Markdown 链接。

## 安排任务

<img src="assets/dragging-example.gif" width="300" />

- 要**重新安排**任务，将任务拖放到目标块或时间上。您可以将任务拖放到某一天的按钮或该天的标题上以重新安排到该天。单击任务可在 Obsidian 中跳转到该任务。
- 要**创建**一个新的已安排任务，将搜索弹出窗口中的标题拖放到目标时间上，或单击目标时间或块上的 `+` 按钮。在所选择的文件或标题中创建一个新任务。
- 要更改任务的**长度**，将其拖动到目标时间的底部（即“调整大小箭头”光标）。
- 您还可以拖动**组、标题和块**以重新安排其中包含的所有任务。
- 在**日期按钮**上拖动并保持按住将滚动到该日期，以便您可以在那里放置任务。

## 按钮

![refresh](https://cdn.pkmer.cn/covers/time-ruler_2_0.png!pkmer)

- 点击**搜索**（放大镜）按钮以显示所有任务和标题并进行筛选。
- 点击**日历**按钮以在全天和按小时的视图之间切换。
- 点击**刷新**（圆形箭头）按钮以刷新 Obsidian 任务和在线日历。

## Obsidian 集成

- 单击任务和标题以在 Obsidian 中显示它们（编辑时，时间标尺将更新）
- 您可以将时间标尺选项卡图标拖动到主编辑器中以展开它，显示一个扩展的四天视图。

## 在线日历

- 要**导入**一个日历，只需将共享链接（iCal 格式）复制到设置中。
- **事件**显示为块，可以包含在同一时间安排的任务。您可以拖动事件以重新安排其中包含的任务，但事件是只读的。
- 要**刷新**事件，请单击工具栏中的“刷新”按钮（圆形箭头）。

## 计时器

![计时器](https://cdn.pkmer.cn/covers/time-ruler_2_1.png!pkmer)

- 要启动一个**秒表**，请点击播放按钮，不输入任何时间。
- 要启动一个**计时器**，请输入分钟数并按下播放按钮或 "Enter" 键。
- 在计时器运行时，您可以通过点击 `+` 和 `-` 按钮来**增加或减少**5 分钟。
- 点击 `focus` 按钮（向外的箭头）来展开计时器并专注于当前任务。如果日历视图打开，则显示全天任务；如果未打开，则只显示基于时间的任务。

# 鸣谢

- 非常感谢 [Dataview](obsidian://show-plugin?id=dataview)、[Tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) 和 [Full Calendar](obsidian://show-plugin?id=obsidian-full-calendar) 插件为在 Obsidian vault 中管理任务设定了标准和格式。
- Dataview 插件的 MetadataCache 使得 Time Ruler 成为可能，因此非常感谢自动索引和解析任务元数据。

# 网络使用

在日历刷新时，插件会向您订阅的所有日历发送一个 GET 请求，以下载它们以.ics 格式存储的事件。

# 更新日志

有关过去和未来更新的更多信息，请参阅 [路线图和更新日志](https://github.com/joshuatazrein/obsidian-time-ruler/blob/master/CHANGELOG.md)。

如果您喜欢这个插件，我会很感激您的支持，以便进一步开发！

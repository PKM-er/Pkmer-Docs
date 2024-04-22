---
uid: 2024042221322016
title: Obsidian 插件：【Readme】Grind Manager
tags: ['obsidian插件', 'readme']
description: 任务管理与奖励制度。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Grind Manager

> [!Note] 插件名片
> - 插件名称：Grind Manager
> - 插件作者：dromse
> - 插件说明：任务管理与奖励制度。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dromse/obsidian-grind-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?grind-manager)

## 概述

任务管理与奖励制度。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dromse/obsidian-grind-manager/master/README.md)

---

## Readme(翻译）

下面是 [[grind-manager]] 插件的自述翻译

# 研磨经理

- 发挥研磨经理的魔力，将任务管理与奖励系统融入您的 Obsidian 工作空间！
- 通过完成任务赚取硬币并获得史诗级奖励！
- 这是您在数字领域中体验刺激和冒险的入场券！

<img src="https://github.com/dromse/obsidian-grind-manager/assets/57846319/1c19ad65-356c-463b-8d9d-761161ebe6d8" width="400">
<img src="https://github.com/dromse/obsidian-grind-manager/assets/57846319/11039bad-4e80-429e-95c1-464f095ff446" width="400">

## 特点

- **任务**：查看您的保险库中的所有任务。
- **筛选器**：按完成状态、重复性或内容内搜索筛选任务。
- **奖励**：用赚取的硬币购买奖励。
- **历史**：查看收入和支出的历史记录。
- **重复性**：与重复相同任务不同，重复任务保存在历史记录中，并在其时间到来时重新出现在任务列表中。
- **计数器**：利用计数器将任务分解为更小的部分，以便更容易完成。
- **难度**：根据难度级别设置难度，以赚取硬币。

## 任务跟踪

### 可用标签

在 Grind Manager 中，`#tags` 用于元数据。目前使用的标签列表如下：

- counter: `#count/current/goal` (例如 `#count/1/4`)
- recurrence: `#every/recurrence` (例如 `#every/day` | `#every/week`)
- difficulty: `#diff/difficulty` (例如 `#diff/trivial` | `#diff/easy` | `#diff/medium` | `#diff/hard`)

### 完成时间

同样，对于完成日期，使用了每日笔记上的链接

- WikiLink `✅ [[2024-03-13|2024-03-13 | 21:46]]`
- Markdown Link `✅ [2024-03-13 | 21:46](Everyday/2024-03-13.md)`

### 状态

您可以使用以下状态（与 Obsidian 任务状态兼容）：

- `- [ ] todo` - 计划执行。
- `- [/] doing` - 目前正在进行中。
- `- [x] done` - 完成
- `- [-] denied` - 不感兴趣或出于其他原因。
- `- [?] delay` - 正在进行中但暂停，正在审查或委派。

```markdown
# 未完成的任务

- [ ] 观看关于优化的视频 #diff/easy
# 任务进行中

- [/] 观看关于优化的视频 #diff/easy
# 完成任务

- [x] 观看关于优化的视频 #diff/easy ✅ [[2024-03-13|2024-03-13 | 21:46]]
```

### 难度

默认情况下，难度收益为（您可以在设置中更改）：

- 琐碎 - 0.1
- 简单 - 1
- 中等 - 2.5
- 困难 - 5

### 计数器

您可以在常见和重复的任务中使用计数器。

如果计数器有一个目标，并且达到了这个目标，任务会自动变为已完成。

#### 使用 `#diff`

如果任务有 `#diff` 和 `#count`，每次计数增加时，根据难度级别赚取硬币。

> [!NOTE]
> 如果您点击减少计数器，将会扣回硬币。

```markdown
<!-- 难度使用 -->

- [/] 每天挑战编码4小时！ #count/3/4 #diff/hard

<!-- 在历史文件中 -->

5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46

<!-- 如果您点击减少一次 -->

-5 | 每天挑战编码4小时！ | 2024-03-13 21:50
5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46
```

#### 使用 `#every`

在重复任务中，当您达到目标并到达展示目标的日期时，计数器将重置为零。

```markdown
<!-- 您正在点击 UI 中的增加计数器 -->

- [/] 每天挑战编码4小时！ #count/3/4 #every/day #diff/hard

<!-- 它保存到历史记录中 -->

5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46
5 | 每天挑战编码4小时！ | 2024-03-13 21:46

<!-- 或者不带 #diff -->

0 | 每天挑战编码4小时！ | 2024-03-13 21:46
0 | 每天挑战编码4小时！ | 2024-03-13 21:46
0 | 每天挑战编码4小时！ | 2024-03-13 21:46

<!-- 当您达到计数目标时，计数器设置为已完成 -->

- [x] 每天挑战编码4小时！ #count/4/4 #every/day #diff/hard

<!-- 任务重置为零，并在到达时间时出现在 UI 中 -->

- [ ] 每天挑战编码4小时！ #count/0/4 #every/day #diff/hard
```

### 循环

对于循环，您需要使用＃every 标签，基于历史文件，重复任务会再次出现。

循环持续时间列表（您可以使用其他数字代替 1）

- 每天 - day, 1day, 2day ... 等。
- 每周 - week, 1week, 2week ... 等。

如果任务在历史记录中没有 `#diff` 标签，则会以 `0` 余额更改保存。

```markdown
<!-- 创建循环任务 -->

- [ ] 编码4小时 #every/day

<!-- 设置进行中 -->

- [/] 编码4小时 #every/day

<!-- 完成任务 -->

- [x] 编码4小时 #every/day

<!-- 它保存在历史记录中，并在到达时间时重置 -->

- [ ] 编码4小时 #every/day
```

#### 它是如何工作的？

- 您使用 #every 标签创建任务，它会显示在用户界面中。
- 您完成您的循环任务。
- 任务内容保存到历史记录中。
- 当任务到期时，任务计数器设置为零值。

```markdown
| 显示 `📺️ 观看一集` 以 1 个硬币
📺️ 观看一集

| 显示 `🍦 冰淇淋` 以 10 个硬币
🍦 冰淇淋 | 10

| 显示 `🍬 糖果`，描述为 `赚取并吃掉它。` 以 1 个硬币
🍬 糖果 | 赚取并吃掉它。

| 显示 `🌴 放松一天`，描述为 `你工作很努力，你值得拥有。` 以 1500 个硬币
🌴 放松一天 | 1500 | 你工作很努力，你值得拥有。
```

## 历史

- 历史文件存储了您所有的收入和支出。
- 如果任务具有 #diff 或 #every，则任务就会赚取。
- 默认情况下，历史文件是 `history.md`，但您可以在设置中更改它。
- 默认情况下，您不需要对此文件做任何操作。
- 但是，如果您想要更正一些数据或有时作弊，欢迎您...作弊者 \*bruh\*。
- 历史行的格式：`余额变动 | 任务内容 | 日期`

只有在以下情况下才会保存到历史记录中：

- 具有 `#diff` 的任务。
- 具有 `#every` 的任务。
- 奖励

## 灵感

- [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)
- [obsidian-pomodoro-timer](https://github.com/eatgrass/obsidian-pomodoro-timer)
- [Habitica](https://habitica.com/)
可以，当然可以！




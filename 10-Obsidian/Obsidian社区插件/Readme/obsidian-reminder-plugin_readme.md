---
uid: 2023080322260030
title: Obsidian 插件：Reminder
tags: ['任务管理', '日期相关', 'obsidian插件', 'readme']
description: 为 Obsidian 的任务，添加时间提醒。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Reminder

> [!Note] 插件名片
> - 插件名称：Reminder
> - 插件作者：uphy
> - 插件说明：为 Obsidian 的任务，添加时间提醒。
> - 插件分类：[' 任务管理 ', ' 日期相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/uphy/obsidian-reminder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-reminder-plugin)

## 概述

为 Obsidian 的任务，添加时间提醒。

![Reminder](https://cdn.pkmer.cn/covers/obsidian-reminder-plugin.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/uphy/obsidian-reminder/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-reminder-plugin]] 插件的自述翻译

## Obsidian 提醒插件

[提醒插件](https://obsidian-reminder.cf/) 是为 Obsidian 设计的插件。该插件增加了管理带有提醒的 Markdown 待办事项的功能。

### 特点

#### 设置提醒

您可以使用以下格式为 TODO 列表项 [设置提醒](https://obsidian-reminder.cf/guide/set-reminders.html)。

```markdown
- [ ] 这是一个带有提醒的示例任务（@2021-08-14）
- [ ] 您还可以指定时间（@2021-08-14 09:37）
- [x] 您不会收到已经勾选的提醒的通知。（@2021-08-14）
```

<img src="https://raw.githubusercontent.com/uphy/obsidian-reminder/master/images/input-reminder-time.gif" width="600" />

#### 提醒事项列表

您可以 [查看所有文件中的提醒事项列表](https://obsidian-reminder.cf/guide/list-reminders.html)。

<img src="https://raw.githubusercontent.com/uphy/obsidian-reminder/master/images/reminder-list.png" width="600" />

如果您点击提醒事项列表中的项目，将会显示源格式的 Markdown 文件。

#### 提醒通知

当时间到达时，Obsidian 将会通知您。

<img src="https://raw.githubusercontent.com/uphy/obsidian-reminder/master/images/reminder-notification1.png" width="600" />

如果您点击 `标记为完成`，您的待办事项将会被标记为已完成。

或者，您可以选择 `稍后提醒我` 来推迟提醒。

<img src="https://raw.githubusercontent.com/uphy/obsidian-reminder/master/images/reminder-notification2.png" width="600" />

#### 与其他插件的互操作性

除了原始格式 `@YYYY-MM-DD` 之外，该插件还支持以下插件格式。

- [Obsidian Tasks](https://obsidian-reminder.cf/guide/interop-tasks.html)（例如 `📅 2021-05-02`）
- [Kanban](https://obsidian-reminder.cf/guide/interop-kanban.html)（例如 `@{YYYY-MM-DD}`）

### 指南

<https://obsidian-reminder.cf/>

### 常见问题解答

- 移动设备上的通知（Android/iOS）
  - 由于 Obsidian 不提供此功能，因此移动设备上的系统通知不可用。

### 支持
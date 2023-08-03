---
uid: 2023080322173530
title: Obsidian 插件：Dynamic Timetable
tags: ['obsidian插件', 'readme']
description: 根据任务的预计时间计算完成时间，并动态创建时间表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dynamic Timetable

> [!Note] 插件名片
> - 插件名称：Dynamic Timetable
> - 插件作者：L7Cy
> - 插件说明：根据任务的预计时间计算完成时间，并动态创建时间表。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/L7Cy/obsidian-dynamic-timetable)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dynamic-timetable)

## 概述

根据任务的预计时间计算完成时间，并动态创建时间表。

![Dynamic Timetable](https://cdn.pkmer.cn/covers/dynamic-timetable_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/L7Cy/obsidian-dynamic-timetable/master/README.md)
>

---

## Readme(翻译）

下面是 [[dynamic-timetable]] 插件的自述翻译

# Obsidian 动态课程表

Dynamic Timetable 是一个 [Obsidian](https://obsidian.md/) 插件，可以从 Markdown 文件动态生成任务课程表。该插件的灵感来自于 [タスクシュート(TaskChute)](https://cyblog.biz/pro/taskchute2/index2.php)。

## 安装

该插件现已正式发布为社区插件。您可以从以下位置安装它。

```
obsidian://show-plugin?id=dynamic-timetable
```

如果您想尝试测试版，请使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装 `L7Cy/obsidian-dynamic-timetable`。

## 用法

动态课程表插件从 markdown 文件中生成任务列表和时间估计。该插件支持以下 markdown 格式的任务（包括子任务）。

```
- [ ] 任务名称; 预计时间
- [ ] 任务名称; 预计时间 @ 开始时间
- [ ] 任务名称 @ 开始时间; 预计时间
```

已完成的任务和没有预计时间的任务将被排除。

要显示任务列表，请打开命令面板（Ctrl/Cmd + P）并输入“显示/隐藏课程表”。

默认情况下，插件使用当前活动文件作为任务列表的来源。如果您想使用其他文件，可以在插件设置中指定文件路径。

### 开始时间格式

开始时间是可选的，可以有两种格式：

- 仅时间（例如，`@ 14:30`）
- 日期和时间（例如，`@ 2023-04-16T14:30`）

### 任务背景颜色

当指定了开始时间时，任务的背景颜色将根据与前一个任务的结束时间进行比较而确定：

- 🟢绿色：表示任务很可能按计划时间开始，并且可能有空间在其之前添加更多任务。
- 🔴红色：表示按计划时间开始任务可能会有困难，可能需要调整前面的任务。

这种视觉提示帮助我们了解如何有效地调整我们的任务。

## 许可证

该软件在 [MIT许可证](https://opensource.org/license/mit/) 下发布。

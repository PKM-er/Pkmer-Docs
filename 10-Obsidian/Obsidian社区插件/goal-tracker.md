---
uid: 20250217101539
title: Obsidian 插件：Goal Tracker 简单易用的任务跟踪器，支持日周月三种模式
tags: ['状态栏', '任务管理', '效率工具', 'obsidian插件']
description: Obsidian 插件：Goal Tracker 简单易用的任务跟踪器，支持日周月三种模式
author: OS
type: other
draft: false
editable: false
modified: 20250217105745
---

# Obsidian 插件：Goal Tracker 简单易用的任务跟踪器，支持日周月三种模式

## 概述

一个简单而灵活的目标跟踪插件，允许您使用每日，每周或每月视图跟踪您的目标。

> [!Note] 插件名片
> - 插件名称：Goal Tracker
> - 插件作者：Ben Rotholtz
> - 插件说明：在状态栏中跟踪每周目标
> - 插件分类：[' 状态栏 ', ' 任务管理 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/GizmoRay/obsidian-goal-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?goal-tracker)

## 效果&特性

- 三种不同的跟踪视图：
	- 每日：每日跟踪目标
	- 每周：每周跟踪目标
	- 每月：逐月跟踪目标
- 每个跟踪器的可定制标题
- 直接存储在笔记中的数据

![image.png](https://cdn.pkmer.cn/images/20250217105142.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20250217105204.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20250217105212.png!pkmer)

## 使用

- 需要使用 `goal-calendar` 的代码域
- 以周报为例

```goal-calendar
type: weekly
title: No wasted weekends - do something fun every weekend
{
  "id": "1d38cb0a-a6bc-44d4-9726-0fba43da17f6",
  "type": "weekly",
  "title": "No wasted weekends - do something fun every weekend",
  "goals": {
    "2025-W1": true,
    "2025-W2": true
  }
}
```
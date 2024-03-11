---
uid: 20240311153554
title: Thino 日历组件
tags: [Obsidian, Obsidian插件, Thino, memos]
description: Thino 日历组件
author: Bon,PKMer,OS
type: other
draft: false
editable: false
modified: 20240311175854
---

# Thino 日历组件

Thino 一直在探索灵感和事物，用何种视图和管理维度更加合适。

2.3.0 开始 Thino 在原有热力图的基础上新增日历组件，你可以通过热力图下放的按钮，对日历组件和热力图组件之间来回切换。

![image.png|280](https://cdn.pkmer.cn/images/20240311153602.png!pkmer)

日历组件上包含如下几个部分：

- [[Thino 日期选择器]]
- 月历样式
- 事务指示器

### 月历样式

默认以月历模式展示，如果包含对应任务和列表，对应日期会显示事务指示器，以提醒对日期上有需要检查的事项。

### 事务指示器

当你的 Thino 卡片包含任务或者列表时，Thino 会根据笔记中实际存储的语法进行统计

如果你的笔记中通过 Thino：

- <kbd>- [ ]</kbd>任务语法的话，就会统计为任务
- <kbd>-</kbd> 列表语法的话，就会统计为列表;

然后你使用的是 单文件模式：

- 如果 thinoType 是 TASK-TODO 或者 TASK-DONE 就是任务
- 如果是日记模式，那就是<kbd>-[ ]</kbd> 就是任务
- 如果没办法用<kbd>-[ ]</kbd> 来表示任务，会加上 thinoType 来标识是否是任务或者普通状态
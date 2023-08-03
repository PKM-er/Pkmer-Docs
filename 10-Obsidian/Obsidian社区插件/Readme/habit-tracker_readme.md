---
uid: 2023080322193080
title: Obsidian 插件：Habit Tracker
tags: ['界面相关', '日期相关', '效率', 'obsidian插件', 'readme']
description: 创建了一个简单的月历视图，用于可视化您的 Obsidian 使用记录。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Habit Tracker

> [!Note] 插件名片
> - 插件名称：Habit Tracker
> - 插件作者：David Moeller
> - 插件说明：创建了一个简单的月历视图，用于可视化您的 Obsidian 使用记录。
> - 插件分类：[' 界面相关 ', ' 日期相关 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Narsail/habit-tracker-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?habit-tracker)

## 概述

创建了一个简单的月历视图，用于可视化您的 Obsidian 使用记录。

![Habit Tracker](https://cdn.pkmer.cn/covers/habit-tracker.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Narsail/habit-tracker-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[habit-tracker]] 插件的自述翻译

# Obsidian 的习惯追踪插件

在 [Obsidian](https://obsidian.md/) 中使用 DataViewJS 来可视化您的习惯。

使用方法：

1. 在您的日常笔记中注释要跟踪的数据（参见 [Dataview注释文档](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)）
2. 在您想要显示习惯追踪器的位置创建一个 [DataviewJS块](https://blacksmithgu.github.io/obsidian-dataview/api/intro/)
3. 使用 [DataviewJS](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/) 收集要显示的数据
4. 使用**renderHabitTracker()**将数据传递给习惯追踪器

![习惯追踪器示例](https://raw.githubusercontent.com/Narsail/habit-tracker-obsidian/master/github-images/trackerExample.png)

![带有数值的习惯追踪器示例](https://raw.githubusercontent.com/Narsail/habit-tracker-obsidian/master/github-images/trackerExampleWithValues.png)

## 完整示例代码

~~~javascript
```dataviewjs
const weekData = {
	year: 2022,
	week: 25,
	habits: [
		{
			colors: ["#c6e48b", "#49af5d"],
			name: "iRacing",
			entries: [
				{
					date: "2022-06-26",
					value: 30
				},
				{
					date: "2022-06-21",
					value: 45
				}
			]
		},
		{
			colors: ["#49af5d", "#c6e48b"],
			name: "Language",
			entries: [
				{
					date: "2022-06-23",
					value: 30
				}
			]
		}
	]
}

renderHabitTracker(this.container, weekData)

```
~~~

### 已知限制

- 目前仅支持最多 7 个习惯。

### 归属

本插件是在 [热力图日历](https://github.com/Richardsl/heatmap-calendar-obsidian) 的基础上创建的，由 [Richard Slettevoll](https://github.com/Richardsl) 开发。

### 更新日志

#### [0.3.3] - 2022-07-07

- 根据 [请求](https://github.com/obsidianmd/obsidian-releases/pull/1027/#issuecomment-1177006856) 进一步清理

#### [0.3.2] - 2022-07-04

- 移除设置引用
- 使 EL 和 UL 的创建更加清晰

#### [0.3.1] - 2022-07-04

- 移除与热力图日历冲突的问题，原因是存在相同命名的 CSS 类

#### [0.3.0] - 2022-07-01

- 修复了一个值未分配给正确颜色的错误
- 为两个核心逻辑函数添加了测试
- 添加了 Rollup 以实现更好的文件管理

#### [0.2.0] - 2022-06-30

- 添加了强度的概念。
- 为实体提供一个值。
- 根据最小值和最大值将多个颜色映射到与颜色等距的值上。

#### [0.1.0] - 2022-06-26

- 初始发布




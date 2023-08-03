---
uid: 20230803213131
title: Obsidian 插件：【Readme】Release Timeline
tags: ['obsidian插件', 'readme']
description: 根据笔记元数据以数据视图类似的语法渲染发布时间线。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Release Timeline

> [!Note] 插件名片
> - 插件名称：Release Timeline
> - 插件作者：cakechaser
> - 插件说明：根据笔记元数据以数据视图类似的语法渲染发布时间线。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/cakechaser/obsidian-release-timeline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-release-timeline)

## 概述

根据笔记元数据以数据视图类似的语法渲染发布时间线。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cakechaser/obsidian-release-timeline/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-release-timeline]] 插件的自述翻译



# Obsidian版本发布时间线

这是一个受[Wikipedia版本发布年份时间线](https://en.wikipedia.org/wiki/Template:Timeline_of_release_years)启发的版本发布时间线插件。

该插件仅在安装了[Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview)后可用。

<img src="https://raw.githubusercontent.com/cakechaser/obsidian-release-timeline/master/assets/timeline.png" width="650">

如何使用

### 1. 填充有关年份的笔记元数据信息。

插件将自动从提供的日期中提取年份。
支持不同的日期格式，包括：`2022`，`2022-12-31`，`2022-12`。

<img src="https://raw.githubusercontent.com/cakechaser/obsidian-release-timeline/master/assets/release%20year.png" width="370">

### 2. 创建一个 `release-timeline` 或 `release-timeline-month` 代码块来创建一个时间轴。

Release Timeline 使用与 [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview) 兼容的语法，对于现有的 Dataview 用户来说应该是熟悉的。

任何为 Release Timeline 编写的查询也应该是一个有效的 Dataview 查询，因此您可以随时将代码块类型更改为 `dataview` 来检查返回的结果。

查询示例：
~~~markdown
```release-timeline
table 
year_field, alias_field
from [[CRPG]] and [[Isometric games]]
where year_field > 2000
sort desc
```
~~~

查询元素：
- `table` - 每个查询开头都需要出现
- `year_field` - 笔记元数据中包含年份或日期的字段的名称。
- `alias_field` - （可选）笔记元数据中包含笔记的替代名称的字段的名称。如果您想显示具有文件名中不允许的字符（如 `:`）的标题，这将非常有用。如果某些笔记不包含此名称的字段，则将使用笔记的标准名称。
- `from ...` - （可选）定义用于构建时间轴的笔记的条件。语法与 Dataview 中的语法相同。
- `where ...` - （可选）定义在查询中应用的过滤器的条件。语法与 Dataview 中的语法相同。
- `sort (asc|desc)` - （可选）时间轴中项目的排序顺序。如果未提供，则将使用插件设置中的默认顺序（默认为降序）。

## 选项
- **默认排序顺序**
  - 如果查询块中未提供`sort`，则使用设置中选择的排序顺序（升序或降序）。

- **折叠空年份**（仅适用于年份时间线）
  - 启用后，将多个连续的空年份折叠为一个。
  - 可以使用“折叠空年份限制”指定要折叠的连续年份的最小数量。
  - <img src="https://raw.githubusercontent.com/cakechaser/obsidian-release-timeline/master/assets/collapse%20years.png" width="500">

- **项目符号**
  - 显示具有多个项目的年份的项目符号。
  - <img src="https://raw.githubusercontent.com/cakechaser/obsidian-release-timeline/master/assets/bullets.png" width="500">

## 已知问题
1. 如果在 Obsidian 启动时打开了一个带有发布时间线代码块的笔记，它将无法渲染。切换到另一个笔记，然后再切换回来以查看时间线。
2. 更改除“项目符号”之外的设置不会重新渲染时间线。切换到另一个笔记，然后再切换回来以查看更新后的时间线。




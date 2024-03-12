---
uid: 20240227160841
title: Obsidian 插件：【Readme】Journals
tags: ['obsidian插件', 'readme']
description: 管理您的日志。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Journals

> [!Note] 插件名片
> - 插件名称：Journals
> - 插件作者：Sergii Kostyrko
> - 插件说明：管理您的日志。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/srg-kostyrko/obsidian-journal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?journals)

## 概述

管理您的日志。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/srg-kostyrko/obsidian-journal/main/README.md)

---

## Readme(翻译）

下面是 [[journals]] 插件的自述翻译

【机翻】

# 为 Obsidian 设计的日志

在 [Obsidian](https://obsidian.md/) 知识库中管理您的日志。

- 基于日历的日志（每日、每周、每月、每季度和每年的笔记）
- 基于间隔的日志（如财务季度或冲刺）
- 您可以根据自己的需求配置许多不同的日志
- 每种笔记类型都可以单独配置（存储路径、模板等）
- 变量用于将与日志相关的数据插入路径/笔记名称/模板内容。
- 在打开存储库时创建当前日志笔记
- 在启动时打开日志笔记
- 为了更容易导航，为日志笔记添加代码块

## 安装

按照以下步骤安装任务。

1. 在 Obsidian 的社区插件浏览器中搜索“Journals”。
2. 在 Obsidian 设置中启用插件（在“社区插件”下找到“Journals”）。
3. 检查设置。配置您需要的日志。

## 支持的变量

这些变量可以在笔记名称模板、笔记存储路径、模板笔记内容中使用。

- `{{journal_name}}` - 笔记所属的日记本名称
- `{{note_name}}` - 笔记名称
- `{{start_date}}` - 基于笔记类型的周、月、季度、年或间隔的第一天，使用设置中的日期格式进行格式化，格式可以使用以下语法进行覆盖 `{{start_date:format}}`，其中 format 是使用 Moment.js 格式规则的字符串（例如 `{{start_date:YYYY-MM-DD}}`）
- `{{end_date}}` - 基于笔记类型的周、月、季度、年或间隔的最后一天，格式规则与 `{{start_date}}` 相同
- `{{date}}` - `{{start_date}}` 的别名
- `{{index}}` - 适用于基于间隔的日记本，表示间隔的索引（如财务季度或春季编号）

````markdown
```calendar-nav

```
````

导航代码块有助于相对于当前笔记进行导航。

例如查看每日笔记：

![每日笔记导航](https://cdn.pkmer.cn/covers/journals_2_0.png!pkmer)

---

````markdown
```interval-nav

```
````

此代码块与上一个类似，只是针对基于间隔的日志。

例如查看间隔笔记（配置为 1 周冲刺）：

![冲刺笔记导航](https://cdn.pkmer.cn/covers/journals_2_1.png!pkmer)

---

````markdown
```calendar-timeline

```
````

时间线代码块有助于在更长的时间段内导航每日笔记（如周、月、季度或年）。默认情况下，每日和每周笔记显示 `week` 时间线，每月笔记显示 `month` 时间线，每季度笔记显示 `quarter` 时间线，每年笔记显示 `calendar` 时间线。可以使用 `mode` 参数进行更改。

````markdown
```calendar-timeline
mode: month
```
````

示例周时间线

![周时间线](https://cdn.pkmer.cn/covers/journals_2_2.png!pkmer)

示例月时间线

![月时间线](https://cdn.pkmer.cn/covers/journals_2_3.png!pkmer)

季度和年度时间线重复显示每个季度或年度中的每个月的月时间线。

## 贡献

欢迎通过错误报告、错误修复、文档和一般改进来贡献。对于更重要的功能工作，请提出关于功能想法的问题/与我联系，以便我们评估可行性以及最佳实现方式。

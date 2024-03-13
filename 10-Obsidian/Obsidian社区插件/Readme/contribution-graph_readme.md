---
uid: 2024022117270233
title: Obsidian 插件：【Readme】Contribution Graph
tags: ['obsidian插件', 'readme']
description: 生成一个交互式热力图来可视化和跟踪您的生产力。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Contribution Graph

> [!Note] 插件名片
> - 插件名称：Contribution Graph
> - 插件作者：vran
> - 插件说明：生成一个交互式热力图来可视化和跟踪您的生产力。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vran-dev/obsidian-contribution-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contribution-graph)

## 概述

生成一个交互式热力图来可视化和跟踪您的生产力。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vran-dev/obsidian-contribution-graph/master/README.md)

---

## Readme(翻译）

下面是 [[contribution-graph]] 插件的自述翻译

【机翻】

**中文** |  [中文文档](https://mp.weixin.qq.com/s/wI8M_C87oZAtCBjFWC8CmA)

## 什么

Contribution Graph 是一个用于 [obsidian.md](https://obsidian.md/) 的插件，可以生成类似 GitHub 的交互式热力图图表，用于跟踪您的笔记、习惯、活动、历史等。

[![请我喝杯咖啡](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/vran)

## 特点

- 多样化视图，支持周跟踪（默认）、月跟踪和日历视图。
- 个性化风格，您可以配置不同的单元格颜色并用表情符号填充单元格。
- 使用固定日期范围或最新日期生成图表
- 交互式图表，您可以自定义单元格点击事件，悬停显示统计数据
- 与 DataviewJS 简单集成，使用贡献图的 API 动态渲染图表

![](https://cdn.pkmer.cn/covers/contribution-graph_2_0.png!pkmer)

## 快速开始

- ctrl+p（或者在 mac 上是 command+p）打开命令选择面板
- 输入 `contribution` 进行搜索，点击 `create contribution graph` 命令
- 点击 `save` 按钮，然后将创建一个热力图。

![Alt text](https://cdn.pkmer.cn/covers/contribution-graph_2_1.gif!pkmer)

### 如何修改图表？

只需点击右上角的编辑按钮

![Alt text](https://cdn.pkmer.cn/covers/contribution-graph_2_2.gif!pkmer)

### 配置

| 名称                   | 描述                                                           | 类型                    | 默认值    | 示例     | 必填                                 |
| ---------------------- | --------------------------------------------------------------------- | ----------------------- | ---------- | ---------- | ---------------------------------------- |
| title                  | 图表的标题                                                | 字符串                  | Contributions         |            | false                                    |
| titleStyle             | 标题的样式                                                | 对象                  |          |            |   false                                       |
| days                   | 图表显示的最大天数（从今天开始计算） | 数字                  |            | 365        | 如果缺少 **fromDate** 和 **toDate** 则为 true |
| fromDate               | 图表的开始日期                                           | 日期, 格式为 yyyy-MM-dd |            | 2023-01-01 | 如果缺少 **days** 则为 true                    |
| toDate                 | 图表的结束日期                                             | 日期, 格式为 yyyy-MM-dd |            | 2023-12-31 | 如果缺少 **days** 则为 true                    |
| query                  | dataview 查询语法，贡献图将使用它来计算文件数  | 字符串                  |            |            | true                                     |
| dateField              | 用于数据分布的文件的日期属性                   | 字符串                  | file.ctime | createTime | false                                    |
| startOfWeek            | 一周的开始                                                         | 数字                  | 0          |            | false                                    |
| showCellRuleIndicators | 控制单元格规则指示器元素的显示和隐藏        | 布尔值                 | true       |            | false                                    |
| cellStyleRules         | 单元格样式规则                                                       | 数组                   |            |            | false                                    |

## 更多使用指南

- [API 使用，与 DataviewJS 集成](README_ADVANCE.md)
- [代码块使用](README_BASE.md)




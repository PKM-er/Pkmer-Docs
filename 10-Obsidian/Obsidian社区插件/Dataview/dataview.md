---
uid: 20230501110213
title: Obsidian 插件：Dataview
tags: [Obsidian, 插件, dataview, 数据查询]
description: Obsidian 插件：Dataview 高性能的索引笔记文件，并创建复杂的查询视图，如表格，列表，任务，日历视图
author: Windysoul,Huajin,PKMer
type: other
draft: false
editable: false
modified: 20240506112118
---

# Obsidian 插件：Dataview

> [!note] 插件名片
> 插件 ID：dataview
> 插件作者：Michael Brenan
> 插件描述：为 Obsidian 提供数据查询能力，这需要学习一些较为简单的语法，但可以实现丰富的查询和组合效果。包括生成表格，标签，跟踪特定的笔记变化，选择具体笔记内容。
> 插件版本：0.5.66
> 插件源码地址：[obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview)
> 插件文档地址：[Dataview Doc](https://blacksmithgu.github.io/obsidian-dataview/)
> 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dataview)

Obsidian 是一款强大的知识管理和笔记应用程序， Dataview 插件为 Obsidian 提供了更高级的数据查询和可视化功能，可帮助用户更好地组织和分析笔记内容。

## Dataview 简介

Dataview 插件的用途主要有三个方面。

首先，Dataview 插件可以用于创建复杂的==数据查询和筛选==。用户可以使用类似于 SQL 的语法，通过在笔记中标记和注释特定的数据字段或属性，然后利用 Dataview 插件进行搜索、过滤和排序。这样能够很方便地查找特定信息、生成特定条件下的数据集合，或者执行一些统计和计算操作。这对于处理大量信息的复杂项目、管理项目清单或进行定量分析非常有用。

其次，Dataview 插件还可以用于==创建和展示笔记内容的动态视图==。用户可以基于数据的不同维度和属性，使用 Dataview 插件生成列表，表格，日历和任务列表，以便以更直观的方式展示笔记中的内容和关系，并加强对整体知识结构的把握。

最后，Dataview 插件还支持==自定义模板和样式==，使用户能够根据自己的需要进行个性化的数据展示和排版。用户可以使用 Markdown 语法结合强大的 Dataview 指令，根据自己的喜好和需求，定义不同的模板和样式。这使得用户能够更好地控制和定制输出内容的格式和布局，使其更符合个人审美和展示要求。

总之，Obsidian 的 Dataview 插件为用户提供了更高级的数据查询、可视化和个性化功能，可以帮助用户更好地组织、分析和展示笔记内容，提升知识管理和信息处理的效率。

## Dataview 系列教程 MOC 目录

本系列文章分为四个部分：基本语法、实例展示、语法实战、社区实践。

- **基本语法部分**：共有 23 篇文章，从元数据开始讲起，介绍了所有 dataview 查询你会用到操作符、函数。如果你想系统的学习 dataview，不妨从这里一篇篇往下看。
- **实例展示**：共有 20 篇文章，每个操作符和每个函数的简单使用示例和进阶使用实例，不知道怎么用某个操作符或者函数就来这里看看。
- **语法实战**：感谢群友 Windysoul 撰写的 10 篇文章，这部分介绍了一些 dataview 可能的使用场景，附有具体代码。
- **社区实践**：这部分文章会持续更新，目前已经有 25 篇分享了 dataview 使用的技巧。感谢群友 @calmwaves @劉同學 的分享，感谢群友 @秋暖 纠正的大量文字错误。其他愿意分享 dataview 使用经验和技巧的也欢迎放在这里。

### [[Dataview基本语法|开篇-Dataview基本语法]]

- [[01 - 简单示例]]
- [[10 - Metadata 元数据]]
- [[11 - 添加元数据至文件]]
- [[12 - 添加元数据至列表和任务]]
- [[13 - Metadata的数据类型]]
- [[14 - 隐式字段]]
- [[15 - Literals 字面常量]]
- [[20 - 四种查询方式]]
- [[21 - 查询类型]]
- [[22 - 查询字段]]
- [[23 - 操作符]]
- [[24 - 表达式]]
- [[30 - Dataview 提供的函数 Function]]
- [[31 - Dataview 中的构造函数]]
- [[32 - Dataview 中的数值运算函数]]
- [[33 - Dataview 中的对象操纵函数]]
- [[34 - Dataview 中的字符串操纵函数]]
- [[35 - Dataview 中的实用函数]]
- [[40 - FAQ-常见问题]]
- [[41 - DQL 与 SQL 的异同]]
- [[42 - ISO 8601]]
- [[43 - YAML 基础]]
- [[44 - Dataview 设置介绍]]

### [[Dataview语法实战]]

- [[Dataview 表格简单查询示例]]；
- [[Dataview 表格进阶查询示例]]；
- [[Dataview实战-定制你的数据表格并为表格列添加个性化样式]]；
- [[Dataview 列表简单查询示例]]；
- [[Dataview 列表进阶查询示例]]；
- [[Dataview 任务简单查询示例]]；
- [[Dataview 任务进阶查询示例]]；
- [[Dataview 日历查询示例]]；
- [[Dataview语法实战-自定义排序的简单实例]]；
- [[Dataview语法实战-自定义排序进阶操作实例]]；
- [[Dataview语法实战-FLATTEN操作符入门示例]]；
- [[Dataview语法实战-FLATTEN操作符进阶示例]]；
- [[Dataview语法实战-GROUP BY 操作符简单示例]]；
- [[Dataview语法实战-GROUP BY 操作符进阶示例]]；

### [[Dataview语法实战|进阶-Dataview语法实战]]

- [[汇集主题--关于笔记的创建日期和主题的汇集]]
- [[添加某一主题笔记列表--表格用法]]
- [[添加某一主题笔记列表--基本用法]]
- [[添加某一主题笔记列表--进阶用法]]
- [[添加相同主题笔记列表--表格用法]]
- [[添加相同主题笔记列表--基本用法]]
- [[添加相同主题笔记列表--进阶用法]]
- [[添加相同主题笔记列表--完全相同]]
- [[添加相同主题笔记列表--指定月份]]

### [[Dataview社区实践经验|应用-Dataview社区实践经验]]

- [[Dataview实战-提取并展示笔记脚注]]
- [[Dataview实战-Obsidian dataview 引用本地图片]]
- [[Dataview实战-发挥元数据的魔力-掌握 Dataview 的四大查询类型]]
- [[Dataview实战-定制你的数据表格并为表格列添加个性化样式]]
- [[Dataview实战-制作一个倒计时或者正计时列表]]
- [[Obsidian样式-DataView在table视图下标签出现错位断裂的修复]]
- [[Dataview实战-通过Dataview列出标签所在段落内容]]
- [[Dataview实战-如何不显示笔记链接]]
- [[Dataview实战-制作一个倒计时或者正计时列表]]
- [[Dataview实战-如何查询一个文件中的所有图片]]
- [[Dataview实战-列出包含特定文字的文件或元数据]]
- [[Dataview实战-在同一个表的列中显示两个元数据字段]]
- [[Dataview实战-如何让 Dataview 识别不同格式的日期]]
- [[Dataview实战-如何统计属性值为空的值]]
- [[Dataview实战-通过Dataview列出关键字所在的行和行数]]
- [[Dataview实战-如何在查询中创建自定义输出]]
- [[Dataview实战-列出与当前文件有相同元数据的文件]]
- [[Dataview实战-获取前后的日记链接（不一定是昨天）]]
- [[Dataview实战-获取最新打开的任务]]
- [[Dataview实战-将一周的元数据显示为emojis(习惯跟踪)]]
- [[Dataview实战-列出不存在的链接页面]]
- [[Dataview实战-列出每年的某个月份的检索结果应该怎么写]]
- [[Dataview实战-列出以某个字母开头的文件或元数据]]
- [[Dataview实战-如何查询结果的数目]]
- [[每日字数的热力图|Dataview实战-每日字数的热力图]]
- [[Obsidian样式-可滚动的Dataview表格视图|Dataview实战-给 Dataview 加个滚动条]]
- [[Dataview实战-进度条]]
- [[Dataview语法实战-列出特定标题下的元素]]

## Dataview 达人之路系列

[[Obsidian达人成长之路_1-使用终极工具Dataview 释放笔记库的潜力-DQL查询语言]]
[[Obsidian达人成长之路_2-使用终极工具Dataview释放笔记库的潜力-JavaScript API]]

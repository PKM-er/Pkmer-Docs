---
uid: 20230718104656
title: Obsidian 插件：Periodic Notes 日记增强插件，管理周期性笔记
tags: [obsidian, 插件, 日记]
description: 官方日记插件的增强版本，创建/管理您的每日、每周、每月、季度以及年度笔记。
author: 
type: basic
draft: false
editable: false
modified: 20230718175009
---

# Obsidian 插件：Periodic Notes 日记增强插件，管理周期性笔记

> [!Note] 插件名片
> - 插件名称：Periodic Notes
> - 插件作者：Liam Cain
> - 插件说明：创建/管理您的每日、每周、每月、季度以及年度笔记
> - 插件分类：日记类
> - 插件项目地址：[点我访问](https://github.com/liamcain/obsidian-periodic-notes)

> [!caution] 版本号差异
> 插件分为稳定版和体验版
> - 稳定版版本号为 0.17
> - 体验版版本号为 1.0
> 本文默认以稳定版介绍，需要体验版的请看文末的扩展阅读。

## 概述

官方自带的核心插件 [[日记]] 只有每日笔记的功能,这个插件可以增强官方的日记插件，实现周期性笔记，比如每周笔记，每月笔记，另外这个插件也是 [[calendar]] 插件的辅助插件，用于管理日历中的每周笔记。

## 效果&特性

安装好插件后需要开启相应的模块才算正式启用，比如

![image.png](https://cdn.pkmer.cn/images/202307181111916.png!pkmer)

## 每日笔记

![image.png](https://cdn.pkmer.cn/images/202307181114636.png!pkmer)

> **注意：** 如果开启了每日笔记，官方核心插件的日记功能就会被接管，需要以这里的设置模板和路径为准了。

## 每周笔记

![image.png](https://cdn.pkmer.cn/images/202307181115148.png!pkmer)

### 每周设置

|设置|描述|
|---|---|
|文件夹|您的每周笔记默认存储的文件夹位置。默认它们放置在库根目录中。|
|模板|为每周笔记配置模板。每周笔记的模板标签与每日笔记略有不同，具体参考下个表格。|
|格式|每周笔记文件名的日期格式。默认值为 `gggg-[W]WW` 。|

定期注释在模板中提供了非常基本的日期计算。如果要从定期模

### 从命令面板中运行

这里开启后 `ctrl+p` 打开命令面板中会 出现打开每周笔记的命令。

![image.png](https://cdn.pkmer.cn/images/202307181117947.png!pkmer)

默认打开当前一周的每周笔记。如果不存在，它将自动为您创建一个。

#### 下周笔记和上周笔记

![image.png](https://cdn.pkmer.cn/images/202307181119301.png!pkmer)

按时间顺序导航到下一周/上一周的笔记。

> **注意：** 只有打开当前周笔记，并且焦点在周笔记的时候，命令面板才会出现 " 上周/下周 " 笔记的命令

### 日历插件集成

如果您从 [[calendar|日历插件]] 启用了“周数”，日历将自动使用您的每周笔记设置来创建。

如下图 就是日历插件的设置：

![image.png](https://cdn.pkmer.cn/images/202307181123957.png!pkmer)

> 此插件跟 [[calendar|日历插件]] 为同一个作者，所以安装日历插件，建议安装 [[obsidian-periodic-notes]] 插件配合使用。

## 每月笔记

每月笔记设置跟每周笔记大体相似，只是在创建模板命令的时候调用的标签不同

## 模板标签

|标记|支持的笔记类型|描述|接受日期计算|
|---|---|---|---|
|`title`|所有|它将插入注释的标题|❌|
|`date`,`time`|所有|它将插入当前日期/时间。（可选）接受格式。例如 `{{date:YYYY-MM-DD}}`|✅|
|`yesterday`,`tomorrow`|日记|插入相应的日期。（可选）接受格式。例如 `{{tomorrow:YYYY-MM-DD}}`|✅|
|`monday``tuesday``wednesday``thursday``friday``saturday``sunday`|每周|指一周中的特定日期 注意，**您必须**指定日期格式！`{{sunday:gggg-MM-DD}}`|✅|
|`month`|每月|指每月的第一天。（可选）接受格式。例如 `{{month:YYYY-MM}}`|✅|
|`quarter`|每季|指季度的第一天。（可选）接受格式。例如 `{{quarter:YYYY-[Q]Q}}`|✅|
|`year`|每年|指一年的第一天。（可选）接受格式。例如 `{{year:YYYY}}`|✅|

## 常见问题

### 如何在文件夹路径中使用变量？

例如，如果您希望新的每日笔记显示在文件夹中，则可以在“格式”字段中包含该文件夹。例如：`Journal/2021/`

### 为什么每周笔记的标题与周数有误？

根据您的区域设置和您使用的操作系统，您可能已采用 ISO 周（一年的第一周从第一个星期四开始）或一年中的一周（一年的第一周从第一天开始）。黑曜石周期注释默认使用一年中的星期 （ww），但您可以改用 （WW）注意大小写不同， 更改为 ISO 周。有关更多详细信息，请参阅 [MomentJS 文档](https://momentjs.com/docs/#/displaying/format/)。

## 扩展阅读

### 体验版下载链接

[Release 1.0.0-beta.3 · liamcain/obsidian-periodic-notes (github.com)](https://github.com/liamcain/obsidian-periodic-notes/releases/tag/1.0.0-beta.3)

### 体验版介绍

- 增加了日期切换器命令需要安装 [NL 日期插件](https://github.com/argenos/nldates-obsidian)
  ![image.png](https://cdn.pkmer.cn/images/202307181746875.png!pkmer)
- 增加了一个时间轴挂件，方便跳转其他笔记。
  ![image.png](https://cdn.pkmer.cn/images/202307181745074.png!pkmer)
- 增加了日历集，用来切换不同的配置环境。
  ![image.png](https://cdn.pkmer.cn/images/202307181741288.png!pkmer)
  每个日历集都有一个完全独立的配置。最常见的用例是创建两个集合：“个人”和“工作”。
  ![image.png](https://cdn.pkmer.cn/images/202307181749457.png!pkmer)





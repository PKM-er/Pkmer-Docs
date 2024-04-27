---
uid: 20240421224636
title: 44 - Dataview 设置介绍
tags: [obsidian, dataview]
description: Dataview 设置介绍
author: Huajin
type: other
draft: false
editable: false
modified: 20240422225826
---

# 44 - Dataview 设置介绍

由于 dataview 设置均为英文，此处提供一下各个设置的介绍。

版本：0.5.66

Dataview 的设置分为三个部分

- General Settings：基础设置
- Codeblock Settings：代码块设置
- View Settings：视图设置

## General Settings 基础设置

dataview 共提供了四种查询方式，行内 dv 查询，dv 代码块查询，行内 dvjs 查询，dvjs 代码块查询，详见 [[20 - 四种查询方式]]。其中 dv 代码块查询是默认启用的，也是本插件的核心功能，未提供关闭选项。

- Enable Inline Queries：行内 dv 查询的启用与关闭
- Enable JavaScript Queries：dvjs 代码块查询的启用与关闭
- Enable Inline JavaScript Queries：行内 dvjs 查询的启用与关闭
- Enable Inline Field Hightlighting in Reading View：阅读模式下，是否渲染行内字段（什么是行内字段可以见 [[11 - 添加元数据至文件]]）
- Enable Inline Field Hightlighting in Live Preview：实时预览模式下，是否渲染行内字段

![](https://cdn.pkmer.cn/images/20240422222641.png!pkmer)

## Codeblock Settings 代码块设置

- DataviewJS Keyword：dvjs 查询时代码块的名称，默认为 dataviewjs，需要重启生效
- Inline Query Prefix：自定义行内查询的开头，默认为等号 =，行内查询见 [[20 - 四种查询方式]]；
- JavaScript Inline Query Prefix：自定义行内 dvjs 查询的开头，行内 dvjs 查询见 [[20 - 四种查询方式]]；
- Codeblock Inline Queries：如果启用，行内查询也将在完整的代码块内求值。

![image.png](https://cdn.pkmer.cn/images/20240422222802.png!pkmer)

## View Settings 视图设置

视图设置分为三个部分

- General 视图常规设置
- Table Settings 表格视图设置
- Task Settings 任务视图设置

### General 视图常规设置

- Display result count：是否隐藏 TASK 和 TABLE 查询时结果的数目（如果开启，代码块查询时会在表头隐藏结果数目）
- Warn on Empty Result：开启后，当查询结果为空时（一个符合的结果都没有），会有警告消息的提示（可以帮助你区分是你的 dv 查询代码写错了还是真的就是没有符合条件的结果）
- Render Null As：这个设置决定了当查询结果中某个值为空值时，用什么值替代。默认为 `\-`，代表查询为空时会用一个横线替代。这个设置支持 markdown 语法。
- Automatic View Refreshing：如果启用，当库中的文件更改时，视图将自动刷新；这可能会对视图中的嵌入等功能产生负面影响，所以如果这些功能不起作用，请关闭它。
- Refresh Interval：上一项自动刷新的间隔，单位为毫秒，默认值为每 2.5s 自动刷新
- **Data Format**：查询结果中日期的默认格式，采用 Luxon 日期格式，详见 [momentjs/docs](https://momentjs.com/docs/#/displaying/format/)。如果你对出现的日期的格式不满意，可以在这里设置，也可以用 dataformat 函数（见 [[35 - Dataview 中的实用函数]]）
- **Data + Time Format**：和上一个类似，区别在于这里包括时间，前一个只包括日期（年月日）

![image.png](https://cdn.pkmer.cn/images/20240422223417.png!pkmer)

### Table Settings 表格视图设置

- Primary Column Name：ID 列默认列名（即默认的第一列），在写 dv 代码块的时候可以用 without id 隐藏第一列。
- Grouped Column Name：使用 Group 成组后的第一列的列名（但是据测试第一列的名称会是 goupy by 后的内容）

![image.png](https://cdn.pkmer.cn/images/20240422224459.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240422224859.png!pkmer)

### Task Settings 任务视图设置

- Automatic Task Completion Tracking：如果启用，当在 Dataview 视图中选中任务时，Dataview 将自动附加任务及其完成日期。示例: `- [x] my task [completion:: 2022-01-01]`
- Use Emoji Shorthand for Copletion：需要 'Automatic Task Completion Tracking' 启用，功能是自动添加时间时改用 Emoji 替代前面的行内字段写法，具体见 [[12 - 添加元数据至列表和任务]]
- Completion Field Name：需要 'Automatic Task Completion Tracking' 启用，完成字段的属性名
- Completion Data Format：完成任务时，完成字段的时间格式，在不开启 'Use Emoji Shorthand for Copletion' 的情况下生效。
- Recursive Sub-Task Completion：如果启用，完成 dataview 中的任务将自动完成它的子任务。

![image.png](https://cdn.pkmer.cn/images/20240422225416.png!pkmer)

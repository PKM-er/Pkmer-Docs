---
uid: 20230803212952
title: Obsidian 插件：【Readme】OZ Calendar
tags: ['obsidian插件', 'readme']
description: 使用任何带有日期的YAML键在日历中查看您的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：OZ Calendar

> [!Note] 插件名片
> - 插件名称：OZ Calendar
> - 插件作者：Ozan Tellioglu
> - 插件说明：使用任何带有日期的YAML键在日历中查看您的笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ozntel/oz-calendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oz-calendar)

## 概述

使用任何带有日期的YAML键在日历中查看您的笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ozntel/oz-calendar/master/README.md)
> 

---

## Readme(翻译）

下面是 [[oz-calendar]] 插件的自述翻译



# OZ日历插件

如果您希望在日历上查看您的笔记，并使用特定日期轻松找到它们，那么您来对地方了。该插件旨在帮助用户使用任何YAML键或文件名以及自定义日期值轻松查看日历上的笔记。您可以定义要使用的YAML键和日期格式。或者，您可以直接使用文件名和自定义日期格式。根据您的选择，按照**配置**步骤进行设置，然后您就可以开始使用了。

## 示例视图

<img src="https://github.com/ozntel/oz-calendar/blob/master/img/OZ-Calendar-Sample-Img-01.png?raw=true" width="250px"/>

## 配置

> 重要提示：请确保检查此插件使用的库的日期格式，可以参考[Day.js日期格式链接](https://day.js.org/docs/en/display/format)。

### 01 YAML选项作为日期源

1. 进入插件设置
2. 定义您想要用作日期字段的**YAML**键。默认键是**created**
3. 定义您在**YAML**中使用的**日期格式**。默认日期格式是**YYYY-MM-DD hh:mm:ss**
4. 在进行这些更改后，使用**重新加载插件**选项来激活对存储库的更改。

对于不知道如何添加YAML键的人，请参阅以下示例：

```md
---
created: 2023-03-10 09:48:22
---
```

您可以使用任何YAML键代替"created"，并为该键使用任何日期格式值。

### 02 文件名选项作为日期来源

默认的日期来源是YAML键（"created"），如上所述。如果您想使用文件名作为提供日历的日期来源：

1. 进入插件设置
2. 将日期来源从**YAML**更改为**文件名**，因为插件默认的日期来源是**YAML**键
3. 确保调整默认的日期格式（**重要**：默认的日期格式包含一些文件名不支持的特殊字符，比如冒号，需要调整为文件名选项）
4. 在进行这些更改后，使用**重新加载插件**选项来激活变更。

> YAML和文件名选项都可以在文件名中包含其他字符。只要在插件设置中定义的自定义日期格式位于YAML键或文件名的开头，插件就足够智能，只解析键/文件名的开头部分。例如，如果您的文件名是'**2023-03-10 这是文件**'，并且在插件设置中定义的日期格式是**YYYY-MM-DD**，它将在日历中被正确解析。

创建文件选项

您可以在日历视图中使用**加号（+）**图标来添加一个带有默认YAML键和日期格式的新笔记。

您可以在插件设置中定义此选项：

- 插件应该保存新文件的**默认文件夹**。插件还提供了一个选项，可以在每次创建笔记时启用/禁用目标文件夹选择。目标文件夹始终默认为插件设置中定义的文件夹，但可以针对单个笔记进行调整。
- 如果您希望文件名以特定日期格式开头，则可以定义**文件前缀日期格式**
- 您可以右键单击日历视图中的任何日期来创建一个特定日期的笔记
- 加号图标默认用于创建今天的笔记

## 插件命令

### 日期导航

您可以直接使用**转到前一天**、**转到后一天**和**转到今天**命令在日期之间进行导航。您还可以为这些命令分配快捷键，以便从键盘轻松更改活动日期。

### 创建新笔记

您可以使用**创建新笔记**命令来触发为插件定制的创建新笔记操作。与日导航相同，您可以为此命令分配热键，以便进行方便的键盘导航。

您可以使用**样式设置插件**自定义一些日历样式设置。

## 联系方式

如果您有任何问题或建议，请随时通过我的网站联系页面 [ozan.pl/contact/](https://www.ozan.pl/contact/) 或直接发送邮件至 <me@ozan.pl> 与我联系。

## 支持

如果您喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/L3L356V6Q' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com上给我买杯咖啡' />
</a>




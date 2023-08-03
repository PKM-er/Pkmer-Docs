---
uid: 20230803212615
title: Obsidian 插件：【Readme】Itinerary
tags: ['obsidian插件', 'readme']
description: 通过从您的笔记中渲染日历，可以更轻松地规划您的旅行或活动。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Itinerary

> [!Note] 插件名片
> - 插件名称：Itinerary
> - 插件作者：Adam Coddington
> - 插件说明：通过从您的笔记中渲染日历，可以更轻松地规划您的旅行或活动。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/coddingtonbear/obsidian-itinerary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-itinerary)

## 概述

通过从您的笔记中渲染日历，可以更轻松地规划您的旅行或活动。

![Itinerary](https://cdn.pkmer.cn/covers/obsidian-itinerary.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/coddingtonbear/obsidian-itinerary/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-itinerary]] 插件的自述翻译



# 黑曜石行程

计划度假或需要以月、周或日历的形式查看一系列事件？如果是这样的话，黑曜石行程可以帮助您保持计划的有序。

## 快速入门

假设你有一份文件，概述了你在即将到来的墨西哥之行中想要做的事情；你可以尝试用如下的文本来跟踪事物：

# 墨西哥之旅

奥亚卡

酒店：Fortin Plaza酒店；入住时间为10月31日下午5点，退房时间为11月4日上午11点。

死者之日游行

11月1日中午

在此处查看更多信息：https://thehaphazardtraveler.com/day-of-the-dead-in-oaxaca/

飞往墨西哥城的航班

沃拉里斯航空公司765航班；11月10日下午12:31起飞，下午1:49降落。

墨西哥城

酒店：Zócalo Central Hotel；入住时间为11月4日下午3点，退房时间为11月10日上午10点
~~~

然而，大部分情况下，你需要依靠自己的阅读能力来跟踪每天的计划，很容易迷失方向，导致忘记预订酒店或者出现两个冲突的事件。

Obsidian Itinerary通过使用简单的格式来指定事件和事件日历显示来帮助解决这个问题；例如：

~~~

# 墨西哥之行

```itinerary
initialDate: 2021-11-01
```

## 奥亚卡

```itinerary-event
title: 奥亚卡
allDay: true
start: 2021-10-31
end: 2021-11-04
color: red
```

### 酒店

```itinerary-event
title: Hotel Fortin Plaza
start: 2021-10-31T17:00
end: 2021-11-04T11:00
color: brown
tag:
- hotel
```

**Hotel Fortin Plaza**
地址：墨西哥瓦哈卡港68040 Estrella区Venus 118号
电话：+52 951 515 7777

### 亡灵节游行

```itinerary-event
title: 亡灵节游行
start: 2021-11-01T12:00
color: blue
tag:
- 出行
```

在此处查看更多信息：https://thehaphazardtraveler.com/day-of-the-dead-in-oaxaca/

### 其他计划

```itinerary-event
title: 和汤姆喝酒
start: 2021-11-01T19:00
end: 2021-11-01T21:00
tag:
- 朋友
```

### 飞往墨西哥城的航班

```itinerary-event
title: 墨西哥城航班 765
start: 2021-11-04T12:31
startTimeZone: America/Los_Angeles
end: 2021-11-04T13:49
endTimeZone: America/Mexico_City
color: green
tag:
- 航班
```

## 墨西哥城

```itinerary-event
title: 墨西哥城
allDay: true
start: 2021-11-04
end: 2021-11-08
color: red
```

## 选项

### 行程选项

您可以指定以下选项来显示您的行程：

- `source`：要从中收集数据的 Obsidian 源的名称（或 Obsidian 源列表）；请注意，此字段必须用引号括起来（例如 `"[[My Vacation Plans]]"`）。默认为在渲染日历的同一文件中找到的事件。此字段还接受相对于您的 vault 根目录的路径，而不是 Obsidian 源名称，但建议使用 Obsidian 源名称，因为可以通过编辑器自动完成此名称。
- `filter`：要用于限制将显示的引用 CSV 的哪些行的过滤器表达式列表（请参见下面的“表达式”）或单个过滤器表达式。如果未指定，则将包括在所选源中找到的所有事件。
- `debug`：将导致在渲染的行程下方打印一些调试信息。

除了上述选项外，您还可以提供此处描述的任何选项：https://fullcalendar.io/docs；特别有用的属性包括：

- `initialDate`：要在日历上聚焦的日期。这对于显示与当前日期不同的月份非常有用。默认为当前日期。
- `initialView`：要显示的日历类型；默认情况下，将显示一个 `dayGridMonth` 视图，但选项包括：
  - 用于在日历网格中显示日期（请参见 https://fullcalendar.io/docs/daygrid-view）
    - `dayGridMonth`：显示整个日历月份。
    - `dayGridWeek`：显示一个星期。
  - 用于显示时间网格（请参见 https://fullcalendar.io/docs/timegrid-view）
    - `timeGridWeek`：显示整个星期的时间网格。
    - `timeGridDay`：显示单个日期的时间网格。
  - 用于简单列表显示（请参见 https://fullcalendar.io/docs/list-view）
    - `listYear`：整年。
    - `listMonth`：单个月。
    - `listWeek`：单个星期。
    - `listDay`：单个日期。

### 行程事件选项

您可以为事件指定以下选项：

- `title`：（必填）事件的名称。
- `start`：（必填）表示事件开始时间的 ISO 时间戳。
- `end`：表示事件结束时间的 ISO 时间戳。
- `tag`：与此事件关联的单个字符串标签或标签列表。这些标签对于特别标记诸如航班或酒店住宿之类的事物非常有用，以便您可以生成仅显示一种类型事件的日历。
- `hidden`：如果为 `true`，则此事件将不会在您指定事件的笔记中单独呈现，而只会出现在相关的行程中。默认为 `false`。

此外，您还可以提供此处描述的任何选项：https://fullcalendar.io/docs/event-parsing；特别有用的属性包括：

- `color`：用特定颜色标记您的事件
- `allDay`：将您的事件标记为“全天”事件。

### 表达式

该库使用`filtrex`进行表达式评估；请参阅其文档以了解有关表达式语法和可用函数的更多信息：https://github.com/m93a/filtrex#expressions。

在“过滤显示的行”中可以看到一个过滤表达式的示例，但实际上它们的工作方式与您可能预期的完全相同。

## 提示

### 渲染单日信息

假设您有一个特别复杂的一天，您希望渲染以确保在事情之间留出足够的时间：

~~~
```itinerary
initialDate: 2021-11-01
initialView: listDay
```
~~~

![](http://coddingtonbear-public.s3.amazonaws.com/github/obsidian-itinerary/listDay.png)

也可以尝试使用`timeGridDay`！

渲染一个不是一周或一天的时间段

假设你将在某个特定的地方停留四天；使用默认的`dayGrid`或`weekGrid`视图，要么不会显示所有相关事件，要么会显示许多空白的天数。你可以通过使用`duration`选项轻松地渲染特定数量的天数：

~~~
```
initialDate: 2021-10-22
initialView: dayGrid
duration:
  days: 4
```
~~~

这个选项适用于几个网格选项；如果需要更详细的信息，也可以尝试使用`timeGrid`。

### 过滤事件以仅显示全天事件

这特别容易做到，因为`allDay`是一个事件属性：

~~~
```itinerary
filter:
- allDay
```
~~~

### 根据标签筛选事件

您可以根据可用的标签轻松筛选事件，例如：

~~~
```itinerary
filter:
- '"hotel" in tag'
```
~~~

或者

~~~
```itinerary
filter:
- '"hotel" not in tag'
```
~~~

请注意，由于这是一个YAML文档，所以必须使用单引号将整个表达式括起来，因为YAML文档有一些解析规则，使得这个写法稍微有些别扭。

### 时区

行程和事件是时区感知的，默认情况下会根据您的本地时区解释您的事件并显示您的行程。不过，您可以轻松地覆盖这一设置。

#### 行程安排

如果您计划进行一次真正的冒险，可能会在旅途的某个阶段离家很远，并且可能希望在当地的时区显示特定的行程安排。为了做到这一点，您可以使用`timeZone`属性；例如：

~~~
```itinerary
initialDate: 2021-10-21
timeZone: America/Los_Angeles
```
~~~

如果您提供了`timeZone`选项，所有事件的显示时间将被调整为以您提供的时区的当地时间显示。

#### 事件

如果您的事件发生在离家很远的地方，您可能希望指定一个时区来解释日期/时间：

~~~
```itinerary-event
title: 新年庆祝活动
start: 2021-12-31T18:00
end: 2022-01-01T04:00
timeZone: America/New_York
```
~~~

当您在全球飞行时，很可能会在特定事件期间穿越一些时区边界。如果您有具有不同开始/结束时区的事件，您可以使用`startTimeZone`和`endTimeZone`选项，例如：

~~~
```itinerary-event
title: PDX->YUL (AC 8653, AC 308)
start: 2022-08-07T10:30
startTimeZone: America/Los_Angeles
end: 2022-08-07T20:49
endTimeZone: America/Montreal
```
~~~

这些指定的时区将优先解释您事件的指定`timeZone`；您可能希望提供`timeZone`或`startTimeZone`/`endTimeZone`对中的一个。

### 隐藏（或更改）标题工具栏

也许您不想看到渲染的日历上方的工具栏？

~~~
```itinerary
headerToolbar:
```
~~~

有关更多信息，请参阅https://fullcalendar.io/docs/headerToolbar。

### 订购日历事件

也许您正在将某些类型的事件打印在月度日历上：

![](http://coddingtonbear-public.s3.amazonaws.com/github/obsidian-itinerary/eventOrderBad.png)

而您可能希望根据您为它们设置的颜色以一致的顺序显示这些事件：

![](http://coddingtonbear-public.s3.amazonaws.com/github/obsidian-itinerary/eventOrderGood.png)

您可以使用`eventOrder`选项为您的日历设置排序顺序：

~~~
```itinerary
eventOrder: start,color
```
~~~

这将建议日历首先按照事件的开始时间排序，其次按照颜色排序。如果日历可以通过忽略此建议来更紧凑地安排您的日历，它将忽略此建议，但是您可以使用`eventOrderStrict`选项强制它始终使用您建议的排序：

~~~
```itinerary
eventOrder: start,color
eventOrderStrict: true
```
~~~

有关更多详细信息，请参阅[FullCalendar文档](https://fullcalendar.io/docs/eventOrder)。

感谢

这一切都是基于优秀的[FullCalendar](https://fullcalendar.io/) JavaScript库构建的。如果你想要感谢某人为美观的日历渲染做出的贡献，那就是他们。




---
uid: 20230804181810
title: Obsidian 插件：Tracker
tags: ['统计', 'obsidian插件', 'readme']
description: 将笔记中的变化收集起来，并且提供不同预设的图形分析模板。
author: AI,Brown Bear
type: readme
draft: false
editable: false
modified: 20230914141803
---

# Obsidian 插件：Tracker

## 概述

将笔记中的变化收集起来，并且提供不同预设的图形分析模板。

> [!Note] 插件名片
> - 插件名称：Tracker
> - 插件作者：pyrochlore
> - 插件说明：将笔记中的变化收集起来，并且提供不同预设的图形分析模板。
> - 插件分类：[' 统计 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pyrochlore/obsidian-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tracker)

## 效果&特性

![Tracker](https://cdn.pkmer.cn/covers/obsidian-tracker.PNG!pkmer)

## 使用

1. 在每日笔记中添加一些您想要跟踪的目标。
2. 添加一个新的笔记来显示跟踪器。
3. 手动添加跟踪器代码块（[示例](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples)）或使用 [命令](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Commands.md)。
4. 将文档视图模式切换为“预览”，然后代码块将被渲染。

有关更多用例，请下载并打开已安装并启用此插件的 Obsidian 中的 [示例](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples) 文件夹。

## 您可能想了解的更多细节

- [安装](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Installation.md)：从 Obsidian 安装插件或手动安装
- [概念](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Concepts.md)：解释此插件的工作原理和设置方法
    - [目标评估](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/TargetEvaluation.md)
    - [输入参数](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/InputParameters.md)
    - [表达式](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Expressions.md)
- [示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md)
- [插件设置](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Settings.md)
- [发布说明](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/ReleaseNotes.md)
- [路线图](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/RoadMap.md)
- [常见问题](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Questions.md)

## 基本概念和类型

### 8 种追踪类型

- **tag**: 标签

> \#tagName

 - **YAML**

>  **wiki 双链**
>  wiki.link 指链接，
>  wiki.display 指链接显示的别名

 - **text**: 文本

>searchTarget: 'regex1,regex2'

 - **dvField 的 A:: B 字段**

> searchType: dvField
> searchTarget: targetName

 - **字段多值的 A:：B@C**

> searchType: dvField
> searchTarget: targetName\[0], targetName\[1]
> separator: '@' **默认是/,如果是这个符号分隔的则不用写该行**

 - **table**

 不搜索指定文件夹中的文件，而是直接定位到你给的表，并可以从表中指定的列中检索数据

 在这种情况下，“data/Tables”是相关文件的路径。路径（\[0]）后第一个括号中的数字是文件中感兴趣的表的索引，从 0 开始。第二个括号中的数字是包含目标数据的列的索引。如果表格单元格中有多个值，您可以提供第三个索引来标识它们。

> searchType: table
> searchTarget: data/Tables\[0]\[0], data/Tables\[0]\[1],data/Tables\[0]\[2]
> xDataset:
> line:
> yAxisLocation: none, left, right
> lineColor: none, yellow, red
> showLegend: true

 - **文件元数据**

> cDate,mDate,size,numWords,numChars(包括空格在内的字符数),numSentences.

 - **task**

> 如果要进一步指定任务是否完整，可以使用:
> .task task.all task.done task.notdone

### 6 种显示方式

- **line**
- **bar**
- **bullet**
- **pie**
- **summary**

> 将依据你设定的 "template" 生成一行/多行文本
> {{sum()}} or {{maxStreak()}}

- **month**

> 给出一个月份视图，并以圆圈表示超过既定阈值的日期，且用横线链接各个日期从而显示坚持的天数

## 基本语法结构

最低要求是 `searchType`, `searchTarget` 和至少一个输出参数（`line`, `bar`, `summary`, `bullet`, `month`, or `pie`）。

对于输出形式而言，会有一个 X 轴，但是可以有两个 Y 轴。你可以设定轴的最大值，最小值，以及单位，

### tracker 的参数

#### 根参数（适用于所有的显示类型）

| 键 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `searchType` | 上文的八大追踪类型 | 可以多个 |必须被提供 |
| `searchTarget` | 追踪目标是对应追踪类型下的具体目标 |一个或多个 | 必须被提供 |
| `folder` | 要搜索的文件夹根路径 | 1 | Root of this vault |
| `file` | 要搜索的文档根路径 | N | null |
| `specifiedFilesOnly` |意义不明，表面看起来是指仅仅指向某个文件，而不包含子文件| 1 | false |
| `fileContainsLinkedFiles` | 包含搜索出来的文件内的链接文件在内 | N | null |
| `fileMultiplierAfterLink` | 在文档的链接内搜所特定的 value 值，并将其与上文其他代码返回的值相乘 | 1 | '' |
| `dateFormat` | 日期格式，具体参照下文 | 1 | 'YYYY-MM-DD' |
| `dateFormatPrefix` | 用于移除原文本中日期的前缀从而呈现正确日期（可用使用正则） | 1 | '' |
| `dateFormatSuffix` | 用于移除原文本中日期的后缀从而呈现正确日期（可用使用正则） | 1 | '' |
| `startDate` | 从哪天开始获取数据/获取的数据是从哪一天开始的| 1 | Min date found |
| `endDate` | 收集数据结束到哪天/获取的数据在哪一天结束| 1 | Max date found |
| `datasetName` | 搜索目标的数据集名称 | 1~NT | untitled |
| `separator` |原文件中，多值的搜索目标所使用的分隔符，便于让代码辨认分割符号，从而正确取到各个值 | 1~NT | '/' <br> ',' in front matter tags |
| `xDataset` |从 `searchTarget` 返回的数据集被存储在 xDataset 中，将组成一个新的数据集呈现在 x 轴上。| 1~NT | -1 (use filename as xDataset) |
| `constValue` |如果目标是空值，则使用一个默认值 | 1~NT | 1.0 |
| `ignoreAttachedValue` | 如果是 true,目标值出现特定值，则用 `constValue` 默认值替换。如果写 false,目标值原样输出 (true\|false) | 1~NT | false |
| `ignoreZeroValue` |将值为 0 的数值，设定为丢失值 (true\|false) | 1~NT | false |
| `accum` | 如果为 true 的话，将会实现设定时间范围内的数值的累积相加，即这次的参数，加上之前参数的总和 (true\|false) | 1~NT | false |
| `penalty` | 当某天的数据缺失时，使用设定值 | 1~NT | |
| `valueShift` |对于收集到的每个值都进行一个值偏移，比如记录次数时，将该值设定为 1，则每次都会增加 1，从而得到总次数 | 1~NT | 0 |
| `shiftOnlyValueLargerThan` | 仅仅当目标值比某个值大时才进行 `valueShift`| 1~NT | null |
| `valueType` | 如果没有探测到类型的话，就使用默认的类型 | 1~NT | |
| `textValueMap` | 包含多个“文本 - 值”，即多个映射关系的容器的键，具体参见下文 | | |
| `fixedScale` | 也就是 X 轴和 Y 轴的刻度大小,用以缩放图表 | 1 | 1.0 |
| `fitPanelWidth` |如果设定为 true,则图表会对页面自适应其宽度| 1 | false |
| `margin` | 包含上，右，下，左四个值的一个键，表示图表的边缘空白大小 | 1~4 | 10 |
| `line` | 折线图 | | |
| `bar` |条形图| | |
| `summary` |摘要 | | |
| `bullet` | 子弹图| | |
| `month` | 月历图 | | |
| `pie` | 饼图 | | |

#### line 和 bar 图的共用参数

| 键名 | 描述 | 值的数量 | 默认 |
|:--------|:-------|:-----------:|:------|
| `title` | 输出图形的名称 | 1 | '' |
| `xAxisLabel` | X 轴的含义 | 1 | 'Date' |
| `xAxisColor` | X 轴的颜色 | 1 | 'white'('black'<sup>*</sup>) |
| `xAxisLabelColor` | X 轴含义/标签的颜色 | 1 | 'white'('black'<sup>*</sup>) |
| `yAxisLabel` |Y 轴的含义 | 1~2 | 'Value' |
| `yAxisColor` | Y 轴的颜色 | 1~2 | 'white'('black'<sup>*</sup>) |
| `yAxisLabelColor` | Y 轴含义/标签的颜色 | 1~2 | 'white'('black'<sup>*</sup>) |
| `yAxisUnit` | Y 轴的单位 | 1~2 | '' |
| `xAxisTickInterval` | X 轴上刻度之间的间隔大小 | 1~2 | null |
| `xAxisTickLabelFormat` | X 轴上刻度标签的格式 | 1~2 | null |
| `yAxisTickInterval` |Y 轴刻度间隔 | 1~2 | null |
| `yAxisTickLabelFormat` | Y 轴刻度标签的格式 | 1~2 | null |
| `yMin` | Y 轴上的最小值 | 1~2 |Minimum Y value found |
| `yMax` | Y 轴上的最大值 | 1~2 | Maximum Y value found |
| `reverseYAxis` | 反转 Y 轴 (true\|false) | 1~2 | false |
| `allowInspectData` | 当鼠标铆钉时，允许视察数据 (true\|false) | 1 | true |
| `showLegend` | 显示/隐藏图例，比如各个颜色的含义等| 1 | false |
| `legendPosition` | 图例的位置 (top\|bottom\|left\|right) | 1 | bottom |
| `legendOrientation` | 图例的方向 (vertical\|horizontal) | 1 | horizontal for bottom and top<br>vertical for left and right |
| `legendBgColor` | 图例的背景色| 1 | none |
| `legendBorderColor` | 图例的边框色 | 1 | white |

#### line 的专用参数

| 键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `lineColor` |线条颜色 | 1~NT | 'white'('black'<sup>*</sup>) |
| `lineWidth` | 线条宽度 | 1~NT | 1.5 |
| `showLine` | 展示/隐藏线 (true\|false) | 1~NT | true |
| `showPoint` | 展示/隐藏数据点 (true\|false) | 1~NT | true |
| `pointColor` | 数据点颜色 | 1~NT | \#69b3a2 |
| `pointBorderColor` | 数据点的边界颜色 | 1~NT | \#69b3a2 |
| `pointBorderWidth` | 数据点的边界宽度 | 1~NT | 0 |
| `pointSize` |数据点的半径大小 | 1~NT | 3 |
| `fillGap` |是否链接缺失的点 (true\|false) | 1~NT | false |
| `yAxisLocation` | 数据集对应的 Y 轴的位置 (left\|right) | 1~NT | left |

#### bar 的专用参数

|键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `barColor` |条的颜色 | 1~NT | \#69b3a2 |
| `yAxisLocation` | 数据集的 Y 坐标的位置 (left\|right) | 1~NT | left |

#### Summary 的专用参数

|键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `template` | 文字的模板（利用表达式中支持的写法）| 1 | '' |
| `style` | 用于渲染文本块的 CSS 样式 | 1 | '' |

#### Bullet 的专用参数

|键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `title` |子弹图的名字 | 1 | '' |
| `dataset` | 你所关注的数据集| 1 | 0 |
| `orientation` | 子弹图条的方向 (horizontal\|vertical) | 1 | 'horizontal' |
| `value` | 你所关注的实际值 (根据表达式的要求写) | 1 | '' |
| `valueUnit` | Y 轴的单位 | 1 | '' |
| `valueColor` | 值条的颜色 | 1 | '\#69b3a2' |
| `range` |由一些数所组成的子弹图范围，（子弹图多段嘛） | N | [] |
| `rangeColor` | 范围条的颜色 | N | [] |
| `showMarker` | 展示或隐藏目标线 (true\|false) | 1 | true |
| `markerValue` | 目标线的值 | 1 | 0 |
| `markerColor` | 目标线颜色 | 1 | 'black' |

#### month 视图的专用参数

|键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `mode` | 两种模式，日历图加点，或者加注释 (circle\|annotation) | 1 |
| `dataset` | 你所感兴趣的数据集| 1~NT | all indices of non-x searchTarget |
| `startWeekOn` | 每周的第一天 ('Sun'\|'Mon') | 1 | 'Sun' |
| `threshold` | 日历加点，的展示一个点的门槛 | 1~NT | 0 |
| `yMin` | 最小值 | 1~NT |数据集的最小值 |
| `yMax` | 最大值 | 1~NT | 数据集的最大值 |
| `showCircle` | 如果值大于门槛，则显示出这个日历点 (value > `threshold`) | 1 | true |
| `color` | 主要颜色 （能被其它颜色参数所覆盖） | 1 | null |
| `dimNotInMonth` | 减弱非当前月份的日期的颜色，以突出当前月份 | 1 | true |
| `showStreak` | 展示/隐藏坚持的天数的日历点 | 1 | true |
| `showTodayRing` | 展示/隐藏标签上今天的圆环 | 1 | true |
| `showSelectedValue` |展示/隐藏被挑选日的值 | 1 | true |
| `showSelectedRing` | 展示/隐藏被挑选日的圆环| 1 | true |
| `circleColor` | 圆圈的颜色 | 1 | '\#69b3a2' |
| `circleColorByValue` | 基于值来展示圆圈的颜色 | 1 | false |
| `headerYearColor` | 顶头上 year 的文本色 | 1 | 'white' |
| `headerMonthColor` | 顶头上 month 的文本色 | 1 | 'white' |
| `dividingLineColor` | 分割线的颜色| 1 | '\#69b3a2' |
| `todayRingColor` | 今日圆环的颜色 | 1 | 'white' |
| `selectedRingColor` | 被挑选日圆环的颜色 | 1 | 'firebrick' |
| `initMonth` | 还没有指定月份则日历视图将以 (YYYY-MM) 的形式展示所设定初始的月份，默认是展示最近的月份 | 1 | last month found |
| `showAnnotation` | 展示/隐藏注释 | 1 | false |
| `annotation` |为每天的注释？ | NT | '' |
| `showAnnotationOfAllTargets` | 是否同时展示所有目标的注释 | 1 | false |

#### Pie 图的专用参数

|键名 | 描述 | 值的数量 | 默认值 |
|:--------|:-------|:-----------:|:------|
| `title` | 图标的名称 | 1 | '' |
| `data` |包含数值的数组，每个数值代表圆形扇形的数量或占比 | N | '' |
| `dataColor` |每个扇形部分的颜色 | N | '' |
| `dataName` | 图例中的每部分的名字 | N | |
| `label` | 每个扇形部分的含义的标签 | N | |
| `hideLabelLessThan` | 如果扇形的部分分数低于某值，则不显示其标签 | 1 | 0.03 |
| `showExtLabelOnlyIfNoLabel` | 显示/隐藏相应的标签，如果目标标签丢失或为空 (true\|false) | 1 | false |
| `extLabel` | 在扇形表外的长手臂文字，用于不便于标注在扇形上时，利用外部更广阔的空间标注 | N | |
| `ratioInnerRadius` | 这个参数指的是甜甜圈图表内圆半径与外圆半径的比例。如果值为 0，则甜甜圈图表将转变为普通的饼状图。如果值为 1，则内圆半径等于外圆半径，即不显示甜甜圈内环。如果值在 0 到 1 之间，则内圆半径为外圆半径的一部分，根据比例缩小。 | 1 | 0 |
| `showLegend` | 展示/隐藏图例 (true\|false) | 1 | false |
| `legendPosition` |图例的位置 (top\|bottom\|left\|right) | 1 | right |
| `legendOrientation` | 图例的方向 (vertical\|horizontal) | 1 | horizontal for bottom and top<br>vertical for left and right |
| `legendBgColor` | 图例的背景色 | 1 | none |
| `legendBorderColor` |图例的边框色| 1 | white |

### 追踪类型&追踪目标

#### 追踪多目标

* 如下的代码将可以实现**多目标同时追踪**，target0 对应 type0,对应 dataset0 对应 red.

```
searchTarget: target0, target1, target2, ...... 
searchType: type0, type1, type2, .....
datasetName: dataset0, dataset1, dataset2, ......
line:
    lineColor: red, blue, yellow
```

* **追踪一个字段里设置多个值**，比如血压：A/B，则可以分别追踪到血压\[0] 和血压\[1]。而两者的分割符号，可以通过 separator 来设定从而识别。
* **yaml**里的**嵌套键值对**，如：

```
deepValue:
very:
deep: 2
```

则追踪该类型时可以写为：

searchTarget: **deepValue.very.deep**

### 基本代码书写规范示例

以健康记录，跟踪血压为例

**blood-pressure: 120/80**

> searchType: tag
> earchTarget: blood-pressure\[0], blood-pressure\[1]

 **dvTarget:: 120/80**

> searchType: dvField
> earchTarget: dvTarget\[0], dvTarget\[1]

 **dvTarget:: 120,80**

> searchType: dvField
> earchTarget: dvTarget\[0], dvTarget\[1]
> eparator: 'comma'

 **YAML 内 bp: \[120,80]**

> searchType: frontmatter
> earchTarget: bp\[0], bp\[1]

 **\[\[journal]]**

> searchType: wiki
> earchTarget: journal

 ⭐

> searchType: text
> earchTarget: ⭐

**搜索多个类似 test@mail,com 这种邮箱结构**

> searchType: text
> erchTarget: '.+\\@.+\\..+'

后写成.+ 或者.+\\都是等价的

**搜索文本中的数值，如 weightlifting: 50**

数值用括号括起来，并且以 `?\<value>` 起头表示

> searchType: text
> searchTarget: 'weightlifting: (?\<value>[\\-]?\[0-9]+[\\.]\[0-9]+|[\\-]?\[0-9]+)'

具体来说，`weightlifting: (?\<value>[\\-]?[0-9]+[\\.][0-9]+|[\\-]?[0-9]+)` 这个正则表达式可以分为两个部分，以|为分界线：

- `[\\-]?[0-9]+[\\.][0-9]+`：匹配带小数点的数值，其中 `[\\-]?` 表示可选的负号，`[0-9]+` 表示一到多个数字，`[\\.]` 表示匹配小数点，`[0-9]`+ 表示一到多个数字。
- |：表示逻辑上的 " 或 "，用于连接两个不同的匹配模式。
- `[\\-]?[0-9]+`：匹配不带小数点的数值，其中 `[\\-]?` 表示可选的负号，`[0-9]+` 表示一到多个数字。

其中，`(?\<value>...)` 表示一个捕获组，用于提取匹配结果中的数值部分，因为 tracker 需要从匹配结果中获取数值来进行跟踪和可视化。

所以，这段代码的含义是匹配文本中以 "weightlifting: " 开头，后跟一个带或不带负号的数值，其中可能包含小数点，提取其中的数值部分作为跟踪目标。

 **搜索带数值的一句文本,且使用数字**

 如：I walked 10000 steps today.

 感觉\\s+ 代表空格；同时留意整个句子是单引号括起来的

> searchType: text
> earchTarget: 'walked\s+(?\<value>\[0-9]+)\s+steps'

：today is 2009-05-02 取值日期，{4}表示这里有四位数

> searchTarget: 'Today\sis\s(?\<value>(\[0-9]{4})-(\[0-9]{2})-(\[0-9]{2}))

 **搜索文本中的多值 ，如 nyvalues 1/2/3**

>  searchType: text
>  searchTarget:
>  'myvalues\s+(?\<value>[0-9]+)/([0-9]+)/([0-9]+),
>  myvalues\s+([0-9]+)/(?\<value>[0-9]+)/([0-9]+),
>  myvalues\s+([0-9]+)/([0-9]+)/(?\<value>[0-9]+)'

具体来说，正则表达式中的“\s+”表示匹配一个或多个空格。而“[0-9]”表示匹配任意一个数字，“[0-9]+”表示匹配一个或多个数字，“(?\<value>[0-9]+)”表示将匹配到的数字串作为一个名为“value”的捕获组，以便在后续的代码中进行引用。另外，“/”字符也需要用“/”来转义，因为“/”在正则表达式中是一个特殊字符。而上文则是分别返回该数字串的第一个，第二个和第三个值（留意 value 的位置。

 **table**,如下：

 第一个数字代表该文档的第几个表格，第二个数字代表该表格的第几列，如果表格单元格中有多个值的话，可以增加第三列。如下则会返回该表的第一列日期和 A 列。

> searchType: table
> searchTarget: filePath\[0]\[0], filePath\[0]\[1]

|date|A|B|C|
|:---:|:---:|:---:|:---:|
|2022-02-01|1|2|3|
|2022-02-02|2.3|4.5|5.5|

 **task 的检索**

 searchTarget：后直接写任务名字即可，如果要进一步筛选做没做，则是再 searchType 里写入 task.done/task.notdone

### 表达式的用法

#### 基本用法

* **运算符**（+、-、\*、/、% 求余数）和**函数**（dataset()、sum()、maxStreak()、......etc）

template: 'Maximum value: {{max() +-\*\/% 10::i}}

* 使用需要在**大括号内**
* 如果一个表达式的解析输出是一个字符串，我们可以给它分配一个**格式字符串**。格式字符串应该放在表达式后面的大括号里，后面有两个冒号。例如，表达式 "**{{sum()::i}}" 将强制输出以整数表示的数字（i 代表整数）**。
* 数据集&数据集的运算

Dataset\[i] = Dataset1\[i] + Dataset2\[i]

template: ' 最大值 (组里的某数 + 组里的某数): {{max(dataset(0) + dataset(0))::i}}'

| Function(InputType): OutputType | 描述 |
|:------------------:|:-----------:|
| min(Dataset): number | 输出数据集的最小数 |
| minDate(Dataset): Date | 数据集中最小值的最近日期（如果一个最小值出现多次，对应多个日期的话，返回最近的那个）|
| max(Dataset): number | 输出数据集的最大值 |
| maxDate(Dataset): Date | 同理，最大值对应的最近日期 |
| startDate(Dataset): Date | 数据集的开始日期 |
| endDate(Dataset): Date | 数据集的结束日期 |
| sum(Dataset): number | 数据集的值之和|
| numTargets(Dataset): number |目标值在数据集中出现的次数,示例中是给了一个纯文字标签,调用了该字段,从而统计该文字标签出现的次数|
| numDays(Dataset): number | 包含搜索目标的同类文档从最早开始到结束之间的天数 |
| numDaysHavingData(Dataset): number | 包含搜索目标的文档中，存在搜索目标的天数 |
| maxStreak(Dataset): number | 没有中断的最大连续天数 |
| maxStreakStart(Dataset): Date | 最大连贯的开始日期|
| maxStreakEnd(Dataset): Date | 最大连贯的结束日期 |
| maxBreaks(Dataset): number | 最多的中断天数|
| maxBreaksStart(Dataset): Date | 最多的中断天数的开始日期|
| maxBreaksEnd(Dataset): Date | 最多的中断天数的结束日期 |
| currentStreak(Dataset): number | 当前的连续天数|
| currentStreakStart(Dataset): Date | 当前连续的开始日期 |
| currentStreakEnd(Dataset): Date | 当前连续的中止日期 |
| currentBreaks(Dataset): number | 当前的中断天数 |
| currentBreaksStart(Dataset): Date | 当前的中断天数的开始日期|
| currentBreaksEnd(Dataset): Date |当前中断天数的结束日期|
| average(Dataset): number | 数据集的平均值|
| median(Dataset): number | 数据集的中位数|
| variance(Dataset): number | 数据集的方差值/变异值 |
| normalize(Dataset): Dataset | 这里应该是说的”归一化概念“将值缩放为\[0, 1]，以消除不同量级数据的差异。看来 gpt 也没太理解 |
| setMissingValues(Dataset, number): Dataset | 设置缺失值（在 sum 和 average 中缺失值会被忽略被，但是在其他地方，或进行函数操作时，会因为缺失值而导致整体返回空。所以可以通过该方式把缺失值提前设定好） |

#### 日期格式

* 除了常规的 YYYY-MM-DD 及其变形日期格式外，还可以输入**相对日期**

 相对日期输入的参考日期是 'today'（你电脑的当前日期），所以

 - 0d ==> 今天
- 1d ==> 昨天
- 1w ==> 上周
- 1M ==>上个月
- 1y ==> 去年

> 注意：小“m”代表“分钟”
> 如果日期范围小于 1 天，您将收到错误消息“没有有效日期作为注释中的 X 值”。

```
searchType: tag
searchTarget: weight
folder: diary
startDate: -1M
endDate: 0d
line:
    title: Weight Log
    yAxisLabel: Weight
    yAxisUnit: kg
    lineColor: yellow
```

* **移除原文中日期的前后缀，输出正确的日期格式**

如下文，则原文的日期写法是 D-,那么 D-2021-01-01 显然不是一个正确的日期格式，必须把前面的前缀去除，所以用到这个。同理,suffix-D

```
searchType: tag
searchTarget: weight
folder: diary
dateFormat: YYYYMMDD
dateFormatPrefix: D-
startDate: D-20210101
endDate: D-20210105
line:
    title: Weight Log
    yAxisLabel: Weight
    yAxisUnit: kg
    lineColor: yellow
```

以下的例子前后缀都有的日期如何提取

如

- a-20211001-b
- c-20211002-d
- searchType: tag
- searchTarget: weight
- folder: examples/diary
- **dateFormat: YYYYMMDD
- dateFormatPrefix: '(a-|c-)'
- dateFormatSuffix: '(-b|-d)'
- startDate: 20210101
- endDate: 20210105**
- line:

#### 多文本映射 textValueMap

"textValueMap": { " 良好 ": 80, " 一般 ": 60, " 不及格 ": 40 }

当探测到文本“良好”时，会返回数值 80。

## 实例

### 抬头格式

**searchType**: frontmatter **定义追踪类型**

**searchTarget**: bloodpressure\[0], bloodpressure\[1]

**追踪的具体键 (明显是一个键,多个值,所以用 0,1 来进一步锁定)**

- **datasetName**: systolic, diastolic **把追踪到的数据集分别起名**
- **folder**: examples/diary **追踪的文件定位,如果全选则/**
- **accum**: true **为真则起到叠加累计的效果**
- **startDate**: 2021-01-01 **起止日期,也可以只写冒号然后空着**
- **endDate**: 2021-01-31
- **fixedScale**: 1.0 **图标尺寸，默认 1，可以缩放，配合下行**
- **fitPanelWidth**: false **是否将尺寸自适应屏幕宽度**
- **margin**: 10, 10, 10, 0 **图表的上右底左边缘空隙**

### line/Bar: 折线图

==折线图单 Y 轴双 Y 值为基础增改==

- **title**: Blood Pressures **图表名称**
- **yAxisLabel**: BP **Y 轴的含义**
- **yAxisUnit:** mmHg **Y 轴的单位**
- **yAxisLocation**: left, right **如果指定该行，则会显示为左右两个 Y 轴，不指定的话就只显示一个**
- **yAxisTickInterval**: 5 **Y 轴的刻度间隔**
- **yAxisTickLabelFormat**: .2f/i **Y 轴的小数点保留几位/整数，留意那个点必须写**
- **yAxisTickLabelFormat**: H---m **Y 轴坐标格式,如左则为 10---00**
- **yMin**: 55 **Y 轴的最小值**
- **yMax**: 100 **Y 轴最大值**
- **reverseYAxis**: true **是否将 Y 轴的上下值反转**
- **xAxisTickInterval**: 1w/7d **X 轴默认是日期,你可以设置其间隔**
- **xAxisTickLabelFormat**: M-DD **X 轴的格式,如左则为 1-15**
- **showLine**: false **只显示点 而不显示线**
- show**Point**: true
- **pointColor**: green **点的颜色**
- **pointSize**: 5 **点的尺寸**
- **pointBorderWidth**: 2 **点的边缘的宽度**
- **pointBorderColor**: "#d65d0e" **点的边缘的颜色**
- **fillGap**: false **可以决定是否链接缺失的点**
- **lineColor**: black, red **折线的颜色**
- **lineWidth**: 4 **可以设置线宽,增粗线条**
- **showLegend**: true **是否显示图例**
- **legendPosition**: bottom **图例的放置位置**

### summary: 文本概述

* ==**template**: "Average: **模板:" 所用函数**== {{average(dataset(0))}}/{{average(dataset(1))}}"

**{{ average(键) }}**,因为原键就是用的 A/B,所以这里沿用,呈现效果

**结果** 如:

Average: 170.4/116.5

* ==**最大连续天数,最大中断天数,当前坚持天数**==

**template**: "Longest Streak: {{**maxStreak**()}} day(s)\nLongest Breaks: {{**maxBreaks**()}} day(s)\nLast streak: {{**currentStreak**()}} day(s)"

* ==**进一步 设定 summary 样式**==

**template**: "I have {{sum()}} stars in total."

 **style: "font-size:20px;color:black;margin-left: 50px;margin-top:00px;"**

* ==**最小值出现的日期,最小值,最大值出现的日期,最大值出现的日期**==

**template**: "minDate: {{**minDate**()}}\nminValue: {{**min**()}}\nmaxDate: {{**maxDate**()}}\nmaxValue: {{**max**()}}"

### Bullet 子弹图

```
searchType: tag
searchTarget: clean-up
folder: examples/diary
endDate: 2021-01-31
fixedScale: 1.1 **整体的大小,包括文字,数字,图表**
bullet:
title: "Clean Up"
```

**dataset**: 0 **从搜索目标中返回的数据储存在其中,但是该题因为只有一个 X 值,所以似乎不需要储存,删掉该句也可以显示**

- **orientation**: horizontal / vertical **决定了子弹图的方向**
- **range**: 10, 20, 40 **对应子弹图的范围划分**
- **rangeColor**: darkgray, silver, lightgray **范围颜色**
- **value**: 12.5 **手动输入实际值**

==or==

**value**: "{{currentBreaks()}}" **记录当前最大的中断天数,日记中是仅仅打了一个 clean-up 的标签,不是一个数值型的键,通过这种方式,展示一个数值型的值**

- **valueUnit**: times **只有一个轴,所以是轴值的单位**
- **valueColor**: '#69b3a2'/steelblue **实际值的颜色**
- **showMarker**: true **是否显示目标值**
- **markerValue**: 30 **目标值的值**
- **markerColor**: black **目标值小竖线的颜色**

### Calendar 日历视图

```
searchType: tag
searchTarget: meditation
datasetName : Meditation **日历的名称**
folder: examples/diary
month: **只挂一个日历的名字也可以**
startWeekOn: 'Sun' **指定某周第一天**
color: tomato **圈圈&年份的颜色**
headerMonthColor: orange **抬头月份的颜色**
dimNotInMonth: false **是否减弱非当前月份的颜色**
todayRingColor: orange **今日圈圈的颜色**
selectedRingColor: steelblue **鼠标点击的日期的颜色**
threshold: 40 **某个数值型的值超过某个门槛后显示圈圈**
circleColorByValue: true **是否根据值区别颜色,也就是达到门槛是正色,没达到就弱色**
showSelectedValue: true **是否显示被挑选日期的值**
initMonth: 2021-09 **如果没有指定月份,则初始月份为 YYYY-MM 格式**
```

==or==

**initMonth**: -1M **以相关月份指定初始月份**

* ==**多目标**的日历追踪==

```
searchType: tag
searchTarget: exercise-pushup, meditation
datasetName: PushUp(**数值型**), Meditation(**纯标签**) **两个数据集的名字**
folder: examples/diary
month:
mode: annotation 日历注释模式**
startWeekOn: 'Sun'
threshold: 40, 0 **门槛也是俩,但是这里第二个是非数值型**
color: green
headerMonthColor: orange
dimNotInMonth: false
annotation: 💪,🧘‍♂️ **达标后显示为图标**
showAnnotationOfAllTargets**: false **如果为 ture 则会两个图标都显示,如果 false,则仅仅显示第一个图片的情况**
dataset: 0, 1 **如果你是圆圈形式,而非注释形式,则本身的储存和显示的都是一个数组,则应把想将追踪的两个目标放入这两个集**,示例中该句放到了 startWeekOn 上面作为 month 下第一句
```

* ==**追踪表格多数据，显示为日历**==

```
searchType: table
searchTarget: examples/data/Tables\[0]\[0], examples/data/Tables\[0]\[1], examples/data/Tables\[0]\[2], examples/data/Tables\[0]\[3]
xDataset: 0
datasetName: null, Jeffrey, Lucas, Anne X 轴对应的名字就是 null，空。出现日历后点击日历的名字，则三个集合可切换展示**
month:
threshold: 0, 62.2, 20.8, 18.2 **X 轴自然门槛是 0，其他三个参数分别别有门槛**
```

### Pie 图的显示

```
searchType: **task.done, task.notdone**
searchTarget: Say I love you, Say I love you
datasetName: Done, NotDone
pie:
title: Manual Input Data
label: '{{2/30\*100}}%, {{4/30\*100}}%, {{6/30\*100}}%,{{8/30\*100}}%, {{10/30\*100}}%' **确定扇形上显示的文字是什么**
extLabel: 'DataA {{0.5/28.5*\100}}%, DataB, DataC, DataD, DataE' **长臂标注，可以和 label 同在**
hideLabelLessThan: 0.03 **如果扇形的比例小于某个值，则选择不在其表面标注文本**
showExtLabelOnlyIfNoLabel: true **如果 true,则当某个扇形的比例小于某值时，由于太小不便于显示文本，则启用长臂标注**
data: '2, 4, 6, 8, 10' **确定显示是扇形图形分割，直接输入数字，它就会自动划分好蛋糕，但是不会标注百分比上去，所以需要 label**
```

==or==

```
data: '{{sum(dataset(0))}},{{sum(dataset(1))}}' **这样可以把任务自动传递给 dataset 数据集，并利用 sum 进行统计。同样也可以在 sum()::i ,用个取整数，也对，不影响**
dataColor: '#4daf4a,#377eb8,#ff7f00,#984ea3,#e41a1c'
dataName: Data1, Data2, Data3, Data4, Data5
ratioInnerRadius: 0.5 **内部有圈说明是个甜甜圈图形**
showLegend: true
legendPosition: right
legendOrientation: vertical
```

### 追踪表格

examples/data 下文档 Tables 的第二个表格如下：

| Date | km @ min/km |
| - | - |
| 2021-05-01 | 5.32 @ 6.32 |
| 2021-05-02 | 5.0 @ 6.30
| 2021-05-03 | 5.22 @ 6.12
| 2021-05-04 | 5.10 @ 6.10 |
| 202105-05 | 5.35 @ 6.05
| 2021-05-06 | 5.45 @ 6.05 |
| 2021-05-07 | 5.73 @ 5.05 |
| 2021-05-08 | 6.25 @ 5.55 |
| 2021-05-09 | 6.25 @ 5.45 |
| 2021-05-10 | 6.35 @ 5.75 |

**第一个是指第二个表格的第一列为 X 轴的数据（因为下文未指定其为 Y 轴**，

```
searchType: table

searchTarget: examples/data/**Tables\[1]\[0]**, examples/data/Tables\[1]\[1]\[0], examples/data/Tables\[1]\[1]\[1]
xDataset: 0
separator: "@"
line:
yAxisLocation: none, left, right
lineColor: none, yellow, red
```

### 追踪任务

```
searchType: **task**==or== **task.all**,task.done, task.notdone
searchTarget: Say I love you, Say I love you, Say I love you
folder: examples/diary
summary:
template: " 总计:**{{sum(dataset(0))::i}}**\nHow many days I said love: {{sum(dataset(1))::i}}\nHow many days I didn't say love: {{sum(dataset(2))::i}}"
```

**这里如果不加::i 的话就是显示 31.0，加上就是 31.而至于 dataset(0),dataset(1),dataset(2) 以此往下传递就行，在这里就是起名，并不是从上面那里拿来用的 dataset.**

==or==

template: "Total count: {{sum()}}" **如果是单纯统计总任务，仅仅写 sum 即可。**

显示效果如下：

总计的任务:31

How many days I said love: 15

How many days I didn't say love: 16

### 追踪文本

* ==追踪文本格式如 "weightlifting: 10==".

```
searchType: text
searchTarget: 'weightlifting:\s+(?<\value>\[\-]?\[0-9]+\[\.]\[0-9]+|\[\-]?\[0-9]+)'
folder: examples/diary
startDate: 2021-01-01
endDate: 2021-01-31
line:
title: Weight Lifting
yAxisLabel: Count
lineColor: yellow
```

**会默认是统计文本出现的次数，但是如果你的里面有值的话，则需要利用（？<\value>XXXXXX）传入才会显示该数值的图** 同理 dvField 也是一种文本，只不过冒号改为双冒号，写法一样，你的追踪类型也可以写 text

* ==追踪格式如 dataviewTarget:: 76@23==

dataviewTarget2::\\s+(?<\value>\[\-]?\[0-9]+\[\.]\[0-9]+|\[\-]?\[0-9]+)==\\s+@\\s+==(\[\-]?\[0-9]+\[\.]\[0-9]+|\[\-]?\[0-9]+),

**中间就是一个@，两边是两个空格\\s+**

* ==追踪**文本中的链接**内的信息==

- 在一个名为 MTG-Deck-1 的文档中有四个链接文档
- MTG-Card-1 x1--- 链接文档点开后的内容：{R}{R}
- MTG-Card-2 x2--- 链接文档点开后的内容：{B}{B}{R}{2}
- MTG-Card-3 x2--- 链接文档点开后的内容：{G}{G}{G}{G}{G}{0}
- MTG-Card-4 x5--- 链接文档点开后的内容：{W}

则

```
searchType: fileMeta, **text**
searchTarget: 'cDate, **{W}, {R}, {G}, {B}, {(?\<value>\[0-9]+)}**'
fileContainsLinkedFiles: examples/data/MTG-Deck-1 **指定限定是搜索指定文档内的链接到的文件**
specifiedFilesOnly: true **意义不明，似乎是只限定在指定的文档中**
fileMultiplierAfterLink: 'x(?\<value>\[0-9]+)' **当从搜索目标返回时，再继续乘以某个参数，这里设定的是指定文档的后缀参数，也就是上文的 x1，x2，x5**
xDataset: 0
pie:
label: '{{sum(dataset(1))::i}},{{sum(dataset(2))::i}},{{sum(dataset(3))::i}}, {{sum(dataset(4))::i}},{{sum(dataset(5))::i}}'
data: '{{sum(dataset(1))}},{{sum(dataset(2))}}, {{sum(dataset(3))}}, {{sum(dataset(4))}},{{sum(dataset(5))}}'
dataColor: lightgray, firebrick, yellowgreen, lightblue, gray
```

W 在第四个链接里有,一个 W，并返回它前面的乘数 5，相乘，得到 w 对应数字 5.

R 在第一链接里有，2 个 R，返回并乘以前面的 1，等于 2.再加上，R 在第二个链接里，有 1 个，返回并乘以前面的 2，等于 2，2+2=4.诸如此类。这里**主要关注如果要在文档内的链接内搜索内容，应该如何写**

* ==追踪文本转换映射地图==，抬头上加一句如下。是原文的 emoji 表情转换为数字显示

textValueMap:

 😀: 5

 🙂: 4

 😐: 3

 🙁: 2

 😞: 1

### 追踪字数

```
searchType: **fileMeta**
searchTarget: **numWords, numChars** **字数，字符串**
folder: examples/diary
startDate: 2021-01-01
endDate: 2021-01-05
datasetName: words, chars
summary:
template: 'Total number of words: {{sum(dataset(0))}}\nTotal number of characters: {{sum(dataset(1))}}'
```

如果不限定文件夹的话，就会**统计全部字数**

```
searchType: fileMeta
searchTarget: cDate, numWords
xDataset: 0
folder: /
summary:
template: "Total word count: {{sum(dataset(1))}}"
```

## 更新内容

版本 1.10.0

- 为月视图添加注释模式（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestCalendar.md)）
- 为线图和柱状图添加参数 `xAxisTickInterval`、`yAxisTickInterval`、`xAxisTickLabelFormat` 和 `yAxisTickLabelFormat`（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestAxisIntervalAndFormat.md)）
- 允许在参数 `dateFormatPrefix` 和 `dateFormatSuffix` 中使用正则表达式（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestDateFormats.md)）
- 添加参数 `file`、`specifiedFilesOnly`、`fileContainsLinkedFiles` 和 `fileMultiplierAfterLink`，以从指定文件中获取数据（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestSpecifiedFiles.md)）
- 添加参数 `textValueMap`，将文本或表情符号转换为指定的值（[示例](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTextValueMap.md)）
- 修复了一些错误
- 增强了错误信息

版本 1.10.1

- 修复了 iOS 上的“加载插件失败”问题

版本 1.10.2

- 修复了某些 macOS 设备上插件无法渲染的问题

版本 1.10.3

- 允许在输出类型为 `month` 和 `pie` 时使用参数 `fitPanelWidth`
- 修复了图表工具提示的调整大小和定位问题

版本 1.10.4

- 允许在参数 `textValueMap` 的键中使用正则表达式
- 添加参数 `shiftOnlyValueLargerThan`，以确定何时进行 `valueShift`
- 修复了用户报告的错误
- 修复了插件设置中的拼写错误

版本 1.10.5

- 允许在月视图的 `initMonth` 中使用相对日期值

版本 1.10.6

- 修复了月视图中缺失数据的着色问题

版本 1.10.7

- 允许使用 HTML 图像标签作为表情符号输入

版本 1.10.8

- 修复了将 `startDat/endDate` 错误地解读为相对日期的问题

版本 1.10.9

- 将制表符替换为空格
- 在 `dvField` 中接受更多的 Unicode 字符
- 允许文件夹路径中包含表情符号
- 修复了一些错误

!!! 破坏性变更 !!!

从版本 1.9.0 开始，模板变量，例如 '{{sum}}'，已被弃用。相反，Tracker 提供了运算符（+，-，*，/，%）和函数（dataset()，sum()，maxStreak()，......等）来帮助我们进行数据处理。对于之前版本中存在代码块的用户，请将 '{{sum}}' 替换为 '{{sum()}}' 或将 '{{sum(1)}}' 替换为 '{{sum(dataset(1))}}'。有关新表达式的更多信息，请参见 [此处](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Expressions.md)。
---
uid: 2023120719243450
title: Obsidian 插件：【Readme】Charts View
tags: ['图表生成', 'obsidian插件', 'readme']
description: Obsidian中的数据可视化解决方案，支持图表和图形。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Charts View

> [!Note] 插件名片
> - 插件名称：Charts View
> - 插件作者：caronchen
> - 插件说明：Obsidian 中的数据可视化解决方案，支持图表和图形。
> - 插件分类：[' 图表生成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/caronchen/obsidian-chartsview-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chartsview-plugin)

## 概述

Obsidian 中的数据可视化解决方案，支持图表和图形。

![Charts View](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/caronchen/obsidian-chartsview-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-chartsview-plugin]] 插件的自述翻译

![GitHub标签（最新的SemVer）](https://img.shields.io/github/v/tag/caronchen/obsidian-chartsview-plugin) ![GitHub所有发布](https://img.shields.io/github/downloads/caronchen/obsidian-chartsview-plugin/total) ![GitHub发布日期](https://img.shields.io/github/release-date/caronchen/obsidian-chartsview-plugin) ![GitHub最后提交](https://img.shields.io/github/last-commit/caronchen/obsidian-chartsview-plugin)

# Obsidian 图表视图插件

这是一个基于 [Ant Design Charts](https://charts.ant.design/) 的数据可视化插件，适用于 [Obsidian](https://obsidian.md)。支持绘图和图表。

- [Obsidian图表视图插件](#obsidian-charts-view-plugin)
  - [图表模板](#chart-templates)
    - [字数统计](#word-count)
      - [多文件](#multi-files)
      - [所有文件](#all-files)
      - [文件夹](#folder)
    - [饼图](#pie)
    - [词云](#wordcloud)
    - [矩形树图](#treemap)
    - [双轴图](#dualaxes)
    - [混合图](#mix)
    - [柱状图](#bar)
    - [组织树图](#organizationtreegraph)
    - [雷达图](#radar)
    - [迷你折线图](#tinyline)
    - [Dataviewjs示例（柱状图）](#dataviewjs-example-column)
  - [图表向导](#chart-wizard)
  - [来自CSV文件的数据](#data-from-csv-file)
    - [从外部CSV文件导入数据（桌面版）](#import-data-from-external-csv-file-desktop)
    - [从内部CSV文件加载数据](#load-data-from-internal-csv-file)
      - [多个CSV文件](#multi-csv-files)
  - [Dataview插件集成](#dataview-plugin-integration)
    - [允许的方法](#allowed-methods)
  - [交互](#interaction)
    - [启用搜索交互](#enable-search-interaction)
  - [示例](#examples)
  - [手动安装插件](#manually-installing-the-plugin)
  - [Ant Design Charts演示](#ant-design-charts-demos)

图表模板

### 词频统计

使用命令 `插入模板`->`词频统计` 来插入代码块。

```chartsview
#-----------------#
#- 图表类型      -#
#-----------------#
type: 词云

#-----------------#
#- 图表数据      -#
#-----------------#
data: "wordcount:Words"

#-----------------#
#- 图表选项      -#
#-----------------#
options:
  wordField: "word"
  weightField: "count"
  colorField: "count"
  wordStyle:
    rotation: 30
```

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_4.png!pkmer)

#### 多个文件

```
数据: "wordcount:Words,PARA,@Inbox/"
```

#### 所有文件

```
数据："wordcount:/"
```

#### 文件夹

``` 
data: "wordcount:@Inbox/"
```

### 饼图

使用命令 `Charts View: Insert Template` -> `Pie` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_5.png!pkmer)

### 词云

使用命令 `Charts View: Insert Template` -> `WordCloud` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_6.png!pkmer)

### 矩形树图

使用命令 `Charts View: Insert Template` -> `Treemap` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_7.png!pkmer)

### DualAxes

使用命令 `Charts View: Insert Template` -> `DualAxes` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_8.png!pkmer)

### 混合

使用 `data.<任意名称>` 和 `options.<任意名称>` 来设置数据和选项。保持数据和选项的 `<任意名称>` 相同。

使用命令 `Charts View: Insert Template` -> `Mix` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_9.png!pkmer)

### 柱状图

使用命令 `Charts View: Insert Template` -> `Bar` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_10.png!pkmer)

### 组织树图

使用命令 `Charts View: Insert Template` -> `OrganizationTreeGraph` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_11.png!pkmer)

### 雷达图

使用命令 `Charts View: Insert Template` -> `Radar` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_12.png!pkmer)

### TinyLine

使用命令 `Charts View: Insert Template` -> `TinyLine` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_13.png!pkmer)

### Dataviewjs 示例（柱状图）

使用 dataviewjs 来展示图表数据。

使用命令 `Charts View: Insert Template` -> `Dataviewjs示例（柱状图）` 来插入代码块。

![image](https://cdn.pkmer.cn/covers/obsidian-chartsview-plugin_1_14.png!pkmer)

图表向导

使用命令 `Charts View: Wizard` 来插入代码块。

<img width="735" alt="image" src="https://user-images.githubusercontent.com/150803/208235339-87f12358-b276-43d5-bdb1-f6ce92cfdbae.png">

<img width="867" alt="image" src="https://user-images.githubusercontent.com/150803/208235398-8deeccff-33c7-42e0-9d9a-925a4b2bffa8.png">

<img width="868" alt="image" src="https://user-images.githubusercontent.com/150803/208235409-944cc2b1-1aac-4e0c-a0c8-7c4c54856f9f.png">

<img width="732" alt="image" src="https://user-images.githubusercontent.com/150803/208235436-f48bafef-7920-4922-b012-424c25de30c9.png">

## 来自 CSV 文件的数据

### 从外部 CSV 文件导入数据（桌面）

使用命令“Charts View: Import data from external CSV file”从 CSV 文件中插入数据。

### 从内部 CSV 文件加载数据

从数据路径加载 CSV 文件。

数据路径应在设置中指定。

```chartsview
#-----------------#
#- 图表类型      -#
#-----------------#
type: Mix

#-----------------#
#- 图表数据      -#
#-----------------#
data.area:
  - time: 1246406400000
    temperature: [14.3, 27.7]
  - time: 1246492800000
    temperature: [14.5, 27.8]
  - time: 1246579200000
    temperature: [15.5, 29.6]
  - time: 1246665600000
    temperature: [16.7, 30.7]
  - time: 1246752000000
    temperature: [16.5, 25.0]
  - time: 1246838400000
    temperature: [17.8, 25.7]

data.line: LineData.csv

#-----------------#
#- 图表选项      -#
#-----------------#
options:
  appendPadding: 8
  syncViewPadding: true
  tooltip:
    shared: true
    showMarkers: false
    showCrosshairs: true
    offsetY: -50

options.area:
  axes: {}
  meta:
    time:
      type: 'time'
      mask: 'MM-DD'
      nice: true
      tickInterval: 172800000
      range: [0, 1]
    temperature:
      nice: true
      sync: true
      alias: '温度范围'
  geometries:
    - type: 'area'
      xField: 'time'
      yField: 'temperature'
      mapping: {}

options.line:
  axes: false
  meta:
    time:
      type: 'time'
      mask: 'MM-DD'
      nice: true
      tickInterval: 172800000
      range: [0, 1]
    temperature:
      sync: 'temperature'
      alias: '温度'
  geometries:
    - type: 'line'
      xField: 'time'
      yField: 'temperature'
      mapping: {}
    - type: 'point'
      xField: 'time'
      yField: 'temperature'
      mapping:
        shape: 'circle'
        style:
          fillOpacity: 1
```

#### 多个 CSV 文件

```chartsview
#-----------------#
#- 图表类型      -#
#-----------------#
类型：DualAxes

#-----------------#
#- 图表数据      -#
#-----------------#
数据：DualAxesData.csv，DualAxesData.csv

#-----------------#
#- 图表选项      -#
#-----------------#
选项：
  x轴字段：'time'
  y轴字段：['value', 'count']
  y轴：
    value：
      最小值：0
      标签：
        格式化器：
          function formatter(val) {
            return ''.concat(val, '个');
          }
  几何选项：
    - 几何：'column'
    - 几何：'line'
      线条样式：
	    线宽：2
```

数据视图插件集成

### 允许的方法

* dv.current()
* dv.pages(source?)
* dv.pagePaths(source?)
* dv.page(path)
* dv.array(value)
* dv.isArray(value)
* dv.date(text)
* dv.fileLink(path, embed?, display-name?)
* dv.date(pathlike)
* dv.query(source, settings?)
* dv.io

参见 [Dataview代码块参考](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/)

## 互动

### 启用搜索交互

通过添加一个选项 `enableSearchInteraction`，在点击图表元素时启用 Obsidian 中的搜索交互。

使用默认值：

```
#-----------------#
#- chart options -#
#-----------------#
options:
  ...
  enableSearchInteraction: true
```

或自定义：

```
#-----------------#
#- chart options -#
#-----------------#
options:
  ...
  enableSearchInteraction:
    field: 'word'
    operator: 'path'
```

- `field` 指示搜索关键字的获取位置。
- `operator` 枚举自 [Obsidian搜索操作符](https://help.obsidian.md/Plugins/Search#Search+operators)：

| operator     | Obsidian 搜索操作符 |
| ------------ | ------------------------ |
| `default`    |                          |
| `tag`        | `tag:`                   |
| `path`       | `path:`                  |
| `file`       | `file:`                  |
| `task`       | `task:`                  |
| `taskTodo`   | `task-todo:`             |
| `taskDone`   | `task-done:`             |
| `matchCase`  | `match-case:`            |
| `ignoreCase` | `ignore-case:`           |
| `line`       | `line:`                  |
| `block`      | `block:`                 |
| `content`    | `content:`               |
| `section`    | `section:`               |
| `fileopen`   | 打开 Vault 内的文件 |

请参阅<https://github.com/caronchen/obsidian-chartsview-plugin/wiki/Chart-examples>

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-chartsview-plugin/` 中。

Ant Design Charts 演示

请参阅<https://charts.ant.design/en/examples/gallery>

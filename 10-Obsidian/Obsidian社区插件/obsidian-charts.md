---
uid: 20231027184032
title: Obsidian 插件：Obsidian Charts 为 Obsidian 中的笔记增加一个图表功能
tags: ['图表生成', '界面相关', 'obsidian插件', 'readme']
description: Obsidian 插件：Obsidian Charts 为 Obsidian 中的笔记增加一个图表功能
author: 永皓Yh,PKMer
type: readme
draft: false
editable: false
modified: 20240105105347
---

# Obsidian 插件：Obsidian Charts 为 Obsidian 中的笔记增加一个图表功能

## 概述

为 Obsidian 中的笔记增加一个图表功能，将表格快速转化为图表，包含折线图，柱状图，饼图等等多种形式，使用 chart.js 和 dataviewjs 可以实现更多数据的绘图。

> [!Note] 插件名片
> - 插件名称：Obsidian Charts
> - 插件作者：phibr0
> - 插件说明：此插件可让您使用 Chartist 作为后端创建图表！
> - 插件分类：[' 图表生成 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/phibr0/obsidian-charts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-charts)

## 使用

### 基础格式

这些内容是每个图表类型都需要的基本元素

```js chart //代码名
type:  //类型选择
labels: [] //内容项
series:    //数据项
- title: "" //数据标题
  data: []  //数据
- title: ""  //数据标题2
  data: []  //数据2
修饰符: xxx
```

### 不同图表类型

常见图表类型的基础语法

#### 柱状图

```chart
type: bar
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 70%
labelColors: true
```

#### 折线图

```chart
type: line
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 70%
labelColors: true
```

#### 饼图

```chart
type: pie
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 40%
labelColors: true
```

#### 圆环图

```chart
type: doughnut
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 40%
labelColors: true
```

#### 雷达图

```chart
type: radar
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 40%
labelColors: true
```

#### 极地图

```chart
type: polarArea
labels: [内容1,内容2,内容3]
series:
- title: 数据1
  data: [2,4,3]
width: 40%
labelColors: true
```

### 命令菜单

- Obsidian Charts: Create Chart from Table (Column orientedLayout)：将表格转化为图谱，按行
- Obsidian Charts: Create Chart from Table (Row orientedLayout)：按列
- Obsidian Charts: Create Image from Chart：将图表转化为图片插入
- Obsidian Charts: Insert new Chart：可视化插入一个图表。

### 设置菜单

- Show Button in Context Menu：在编辑器菜单增加一个插入图表的命令。
- Enable Theme Colors：使用主题或 css 的颜色
- lmage Format：插入图片的格式
- lmage Quality：插入图片的质量

### 修饰语

#### width

限制图表宽度大小，默认 100%

```chart
type: bar 
id: table-001  
width: 90%
```

#### fill

填充**折线图**下的轨迹，默认 false 不填充。（true/false）

```chart
type: line
id: table-001  
width: 80%
fill: true
```

#### bestFit

在**折线图**中用于生成最适合给定折线的线

- bestFit：true/false：是否生成最适合的折线。
- bestFitTitle：" 文本 " 指定最适合折线的标题
- bestFitNumber：行索引，从 0 开始。指定哪一行的数据

```chart
type: line
labels: [Monday,Tuesday,Wednesday,Thursday,Friday]
series:
- title: Title 1
  data: [1,2,1,4,5]
- title: Title 2
  data: [5,8,6,7,6]
- title: Title 3
  data: [8,6,5,3,4]
bestFit: true
bestFitTitle: "名称"
bestFitNumber: 1
width: 80%
```

#### spanGaps

跳过缺失的数据进行绘图

```chart
type: line
labels: [内容1,内容2,内容3,内容4,内容5]
series:
- title: 缺失数据
  data: [3,null,5,null,3]
- title: 正常数据
  data: [2,3,4,3,2]
width: 70%
spanGaps: true
```

#### tension

**折线图**的平滑度（0~1）

```chart
type: line
id: table-001  
width: 80%
tension: 0.8
```

#### beginAtZero

强制将图表设置为从 0 开始，否则将剪掉所有未使用的空间。

```chart
type: line
labels: [内容1,内容2,内容3,内容4,内容5]
series:
- title: 最小为2的数据
  data: [2,3,4,3,2]
width: 70%
beginAtZero: true
```

#### legend

图例修饰

- legend: false/true 是否显示图例
- legendPosition：top/left/bottom/right 图例的显示位置

```chart
type: line
id: table-001  
width: 80%
legendPosition: bottom
```

#### indexAxis

设定坐标轴（x/y）

```chart
type: bar
id: table-001  
width: 80%
indexAxis: y
```

#### stacked

堆叠展示数据。

```chart
type: bar
id: table-001  
width: 80%
stacked: true
```

#### Title

- x/yTitle：设置 x 轴/y 轴标题

```chart
type: bar
id: table-001  
width: 80%
xTitle: "x标题"
yTitle: "y标题"
```

#### Reverse

- x/yReverse：反转它所应用的轴，交换正负位置

```chart
type: bar
id: table-001  
width: 80%
yReverse: true
```

#### Min/Max

指定轴的最小值和最大值

- `xMax`
- `yMin`
- `Min`
- `rMax`

```chart
type: line
id: table-001  
width: 80%
yMax: 10
```

#### Display

- Display：轴是否可见
- TickDisplay：轴刻度是否可见

```chart
type: line
id: table-001  
width: 80%
yDisplay: false
xTickDisplay: false
```

#### time

将 X 轴上使用日期的按照时间长度进行组织。（`day`，`week`，`month`，`year`）

```chart
    type: line
    labels: [2023-01-01,2023-02-02,2023-02-15,2023-03-04,2023-04-05]
    series:
        - title: Title 1
          data: [4,2,3,4,5]
        - title: Title 2
          data: [5,4,3,2,2]
    time: week
```

#### transparency

覆盖图表元素的内部的不透明度（0~1）默认 0.25

```chart
type: line
id: table-001  
width: 80%
transparency: 0.9
```

## 美化

通过 css 代码 设置图表样式

```css
:root {
    --chart-color-1: #ff00ff; 
    --chart-color-x: rgb(255,255,255);
}
```

## 使用 Dataview 数据绘图

### 数据

呈现 3 个内容，每个内容包含 2 个值域

- 内容一:: 内容 1
	- 数据甲一:: 10
	- 数据乙一:: 13
- 内容二:: 内容 2
	- 数据甲二:: 14
	- 数据乙二:: 12
- 内容三:: 内容 3
	- 数据甲三:: 12
	- 数据乙三:: 15

### API 方法

使用标准的 [Chart.js中文网](https://chartjs.cn/docs/latest/charts/area.html) 数据和其中支持的所有内容。

```js dataview
const file = dv.current() //以当前文件数据为例子
const chartData = {  //定义chart的内容
    type: 'line',  //类型
    data: {  //数据参数 
        labels: [file.内容一,file.内容二,file.内容三],  //查找内容项
        datasets: [
            //数据1
            {  
            label: ["数据1"],  
            data: [file.数据甲一,file.数据甲二,file.数据甲三],
            borderColor: '#36A2EB',//边颜色
            backgroundColor: '#9BD0F5',//背景色
            borderWidth: 1 ,//边宽度
            },
            //数据2
            {  
            label: ["数据2"],
            data: [file.数据乙一,file.数据乙二,file.数据乙三],
            borderColor: '#fffddd',//边颜色
            backgroundColor: '#fffddd',//背景色
            borderWidth: 1 ,//边宽度
            }],
    },
        options: {  //其余chart.js控制
        maintainAspectRatio: false, // 不保持纵横比
        aspectRatio: 2, // 宽高比例为2:1
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom' // 图例显示在底部
            }
        }
    }
}
window.renderChart(chartData, this.container);//调取接口
```

### 代码块方法

```js dataview
const file = dv.current() //以当前文件数据为例子

dv.paragraph(`\`\`\`chart  //渲染一个代码块
    type: bar  
    labels: [${file.内容一},${file.内容二},${file.内容三}]
    series:
    - title: 数据1
      data: [${file.数据甲一},${file.数据甲二},${file.数据甲三}]
    - title: 数据2
      data: [${file.数据乙一},${file.数据乙二},${file.数据乙三}]
    width: 80%
\`\`\``)
```

### 表格数据绘图

#### 数据表格

| 数据 | 正常数据 | 含负数据 | 含空数据 |
| ---- | ---- | ---- | ---- |
| 数据 1 | 1 | 4 | 2 |
| 数据 2 | 2 | 3 |  |
| 数据 3 | 5 | -2 | 4 |
| 数据 4 | 3 | 5 |  |
| 数据 5 | 4 | 3 | 1 |
| 数据 6 | 5 | -1 | 3 |

假设这里引用成 `^table-001`

#### id 引用法

在表格下添加块 id`^table-001`，然后

```js chart 
type: bar //选择类型
id: table-001  //输入块id
file: 文件夹/路径/文化.md  //输入文件名或者路径使用其他文件下的块，默认当前文件
layout: rows/columns //选择内容是行或者列，默认为行
select: [内容1,内容3]  //选择指定内容，默认全部
```

### 命令法

鼠标选择表格后，运行 chart 命令进行替换为图表。

## 其他参考

- [Modifiers - Obsidian Charts](https://charts.phibr0.de/Meta/Charts/Modifiers)

---
uid: 2023120719460411
title: Obsidian 插件：【Readme】Vega Visualizations
tags: ['obsidian插件', 'readme']
description: 用于渲染 Vega 或 Vega-Lite 数据可视化图，如折线图和散点图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vega Visualizations

> [!Note] 插件名片
> - 插件名称：Vega Visualizations
> - 插件作者：Justin Kim
> - 插件说明：用于渲染 Vega 或 Vega-Lite 数据可视化图，如折线图和散点图。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Some-Regular-Person/obsidian-vega)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vega)

## 概述

用于渲染 Vega 或 Vega-Lite 数据可视化图，如折线图和散点图。

![Vega Visualizations](https://cdn.pkmer.cn/covers/obsidian-vega.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Justin-J-K/obsidian-vega/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-vega]] 插件的自述翻译

# Vega 可视化插件

在 [Obsidian笔记应用](https://obsidian.md) 中使用 JSON 格式的 Vega 或 Vega-Lite 规范创建高度可定制的数据可视化。有关格式化 [Vega规范](https://vega.github.io/vega/docs/) 和 [Vega-Lite规范](https://vega.github.io/vega-lite/docs/) 的更多文档可以在 Vega 网站上找到。

要添加图表或绘图，请创建一个代码块，语言设置为 `vega` 或 `vega-lite`，然后添加 JSON 规范。

## 例子

### 使用 Vega-Lite 的柱状图

~~~markdown
```vega-lite
{
  "width": 300,
  "data": {
    "values": [
      {"a": "A", "b": 39}, {"a": "B", "b": 98},
      {"a": "C", "b": 76}, {"a": "D", "b": 23}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": { "field": "a", "type": "nominal", "axis": { "labelAngle": 0 } },
    "y": { "field": "b", "type": "quantitative" }
  }
}
```
~~~

![柱状图示例](https://cdn.pkmer.cn/covers/obsidian-vega_2_0.png!pkmer)

### 使用 Vega 绘制折线图

~~~markdown
```vega
{
  "width": 400,
  "height": 200,
  "data": [
    {
      "name": "table",
      "values": [
        { "x": 0, "y": 50 }, { "x": 1, "y": 0 },
        { "x": 2, "y": 30 }, { "x": 3, "y": 40 },
        { "x": 4, "y": 60 }, { "x": 5, "y": 25 }
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "point",
      "range": "width",
      "domain": { "data": "table", "field": "x" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "domain": { "data": "table", "field": "y" }
    }
  ],
  "axes": [
    { "orient": "bottom", "scale": "x" },
    { "orient": "left", "scale": "y" }
  ],
  "marks": [
    {
      "type": "line",
      "from": { "data": "table" },
      "encode": {
        "enter": {
          "x": { "scale": "x", "field": "x" },
          "y": { "scale": "y", "field": "y" },
          "interpolate": { "value": "monotone" }
        }
      }
    }
  ]
}
```
~~~

![折线图示例](https://cdn.pkmer.cn/covers/obsidian-vega_2_1.png!pkmer)

致谢

Vega，Vega-Lite

BSD 3-Clause "New" or "Revised" License

版权所有（c）2015-2021，华盛顿大学交互数据实验室

---
uid: 2023080322244962
title: Obsidian 插件：【Readme】Plotly
tags: ['obsidian插件', 'readme']
description: 使用这个插件，你可以在笔记中嵌入Plotly图表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Plotly

> [!Note] 插件名片
> - 插件名称：Plotly
> - 插件作者：Dmitriy Shulha
> - 插件说明：使用这个插件，你可以在笔记中嵌入Plotly图表。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Dmitriy-Shulha/obsidian-plotly)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plotly)

## 概述

使用这个插件，你可以在笔记中嵌入Plotly图表。

![Plotly](https://cdn.pkmer.cn/covers/obsidian-plotly.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Dmytro-Shulha/obsidian-plotly/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-plotly]] 插件的自述翻译


# obsidian-plotly
Obsidian插件，允许用户将Plotly图表嵌入到Markdown笔记中。

# 用法

基本（使用plotly块）
使用命令面板（`Ctrl-P`）添加基本的plotly模板：
![命令示例](./media/plotly-command-demo.gif)

这种方法允许您在`plotly`块中创建JSON或YAML，其中包含数据、布局和配置对象的有效负载。
它不支持来自plotly.com网站的JavaScript示例 - 它只支持将静态有效负载转发到`Plotly.newPlot`函数。
要使用JavaScript支持，请使用DataViewJS的高级方法。

基本示例（这些YAML和JSON会生成相同的图形）：
```yaml
    ```plotly
    data:
    	- x: [0,1,2]
    	  y: [0,1,0]
    ```
```

```json
    ```plotly
    {
        "data": [{
            "x":[0, 1, 2],
            "y":[0, 1, 0]
        }]
    }
    ```
```

高级（使用dataviewjs块）

使用命令面板（`Ctrl-P`）添加plotly模板：
![命令示例](./media/plotly-dataviewjs-command-demo.gif)

这种方法支持plotly.com上的任何示例。
（我没有检查它们所有，如果有些不起作用，请随时创建问题）。
然而，这种方法需要DataView插件来处理JavaScript。
作为一个好处，您可以基于从您的笔记中检索的数据创建图表，这些数据可以通过DataView API检索！
（顺便说一句，这听起来与[obsidian-tracker](https://github.com/pyrochlore/obsidian-tracker)插件的功能类似）。

要使用它，只需添加带有Plotly命令的DataviewJS块，复制所需的示例并粘贴它。
注意：所有示例都使用`Plotly.newPlot(component, data, layout, config)`进行绘制，并且需要一些额外的代码才能在Obsidian中工作。
有一个包装函数可用作`window.renderPlotly(this.component, data, layout, config)`，它将在DataViewJS块内绘制图表。
（包装器参数应与示例中的参数相同）。

许多示例都在[Plotly](https://plotly.com/javascript/)官方网站上。

![如何从plotly.com复制示例](./media/plotly-copy-from-examples-demo.gif)

注意：有些示例还需要d3库。这是一个庞大的库，很少需要。这就是为什么我不想在插件中包含它的原因。
如果您需要此库，有一个解决方法：您可以从官方[网站](https://d3js.org/d3.v7.min.js)下载d3库（打开链接->右键单击->另存为...），将其放在您的vault中，并使用`require`导入；

```js
    ```dataviewjs
        //一些plotly示例需要d3库才能工作。
        //由于它很大且只有少数示例使用，
        //我提出了一个导入d3的解决方法；
        //您需要从https://d3js.org/d3.v7.min.js下载依赖项
        //并将其放在您的vault中。
        let path = app.vault.adapter.basePath;//您的vault的绝对路径
        var d3 = require(path+"\\utils\\d3.v7.min.js");

        //用plotly.com上的任何示例替换此块
        //注意：这里不能使用`Plotly.newPlot`，请改用`window.renderPlotly`
        var data = [
            {x:[0,1,2,3,4,5,6,7,8,9],y:[4,4,2,2,3,3,2,2,4,4]},
            {x:[0,1,2,3,4,5,6,7,8,9],y:[3,3,1,1,2,2,1,1,3,3]}
        ];
        var layout = {title:"DataViewJS示例"};
        var config = {displaylogo:false};

        window.renderPlotly(this.container, data, layout, config)
    ```
```

# 示例
此插件的更多黑曜石示例[在此](examples.md)

更多示例请参考[Plotly](https://plotly.com/javascript/)官方网站。




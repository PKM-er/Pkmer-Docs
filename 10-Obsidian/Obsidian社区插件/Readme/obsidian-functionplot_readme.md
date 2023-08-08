---
uid: 2023080322185748
title: Obsidian 插件：【Readme】Function Plot
tags: ['obsidian插件', 'readme']
description: 在 Markdown 代码块中渲染数学函数。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Function Plot

> [!Note] 插件名片
> - 插件名称：Function Plot
> - 插件作者：leonhma
> - 插件说明：在 Markdown 代码块中渲染数学函数。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/leonhma/obsidian-functionplot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-functionplot)

## 概述

在 Markdown 代码块中渲染数学函数。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/leonhma/obsidian-functionplot/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-functionplot]] 插件的自述翻译

# obsidian-functionplot

一个在 obsidian.md 中显示数学图形的插件。

> ⭐ _如果你喜欢这个插件，请在 [Github](https://github.com/leonhma/obsidian-functionplot) 上给它点个星星！_

_这个文件只包含了快速使用这个插件的基本说明。如果你想要更详细的文档，请查看 [wiki](https://github.com/leonhma/obsidian-functionplot/wiki)。_

---

🔮 如何使用

### 使用命令

自版本 `1.1.0` 起，您可以通过一个方便的 GUI 来创建具有实时预览功能的图表。

1. 打开命令面板并选择 `Obsidian Functionplot: Plot a Function`
2. 根据您的喜好调整图表。

    ![创建图表模态框](./images/create-modal/light.png#gh-light-mode-only)

    ![创建图表模态框](./images/create-modal//dark.png#gh-dark-mode-only)

3. 这将创建一个坐标系，范围为 `-10 < x < 10, -10 < y < 10` 并绘制函数 f 和 g。如果您没有禁用它，甚至可以拖动和缩放图形。

<!-- ![图形图像](./images/plot/light.png#gh-light-mode-only)
    ![图形图像](./images/plot/dark.png#gh-dark-mode-only) -->

### 使用 `functionplot` 块

````
```functionplot
---
title: string
xLabel: string
yLabel: string
bounds: array[min x, max x, min y, max y]
disableZoom: boolean
grid: boolean
---
<name>(variable)=<expression>
```
````

示例:

````
```functionplot
---
title: 随机图表
xLabel: 时间
yLabel: 成本
bounds: [0, 10, 0, 50]
disbaleZoom: 1
grid: true
---
g(x)=x^PI
f(x)=E+log(x)*2
```
````

## 🧮 支持的数学函数

要查看完整的支持的数学函数列表，请查看 [wiki](https://github.com/leonhma/obsidian-functionplot/wiki)。

## ⚙ 插件设置

自版本 `1.2.0` 起，该插件有一个专门的设置页面。在这里，您可以调整绘图的文本元素的字体大小、线条宽度和各种颜色。要访问此页面，请转到 Obsidian 设置并向下滚动列表，找到 'Community Plugins > Obsidian Functionplot'。

![设置页面](https://github.com/leonhma/obsidian-functionplot/blob/master/images/settings/dark.png)

> **注意**
> 要应用更改，需要 Obsidian 进行“重新渲染”图表。您可以重新启动 Obsidian，或在视图模式之间切换（例如，阅读模式 > 编辑模式 > 阅读模式）。

如果您对插件的使用有任何问题，请查看 [wiki](https://github.com/leonhma/obsidian-functionplot/wiki) 或在 [讨论区](https://github.com/leonhma/obsidian-functionplot/discussions) 中提问。

## 🐞 错误和问题

如果您在使用此插件时遇到任何错误，请向我们报告。要这样做，请点击 [此链接](https://github.com/leonhma/obsidian-functionplot/issues/new?assignees=leonhma&labels=bug&template=BUG_REPORT.yml)，尽可能填写表单并点击“提交新问题”。这些问题是公开可见的，请不要提交任何个人信息。

## 🤝 贡献

欢迎任何贡献！无论是提交问题、编辑维基页面还是创建拉取请求，像您这样的人的贡献有助于项目的发展。请遵守 [贡献指南](CONTRIBUTING.md)。

## ©️ 归属

该插件基于/使用了以下内容：

- [function-plot](https://github.com/mauriciopoppe/function-plot)：MIT 许可证，版权所有 (c) 2015 Mauricio Poppe




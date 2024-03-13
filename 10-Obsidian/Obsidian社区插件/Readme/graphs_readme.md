---
uid: 2024031219313136
title: Obsidian 插件：【Readme】Graphs
tags: ['obsidian插件', 'readme']
description: 通过编写YAML来创建交互式图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Graphs

> [!Note] 插件名片
> - 插件名称：Graphs
> - 插件作者：Dylan Hojnoski
> - 插件说明：通过编写 YAML 来创建交互式图表
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/DylanHojnoski/obsidian-graphs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graphs)

## 概述

通过编写 YAML 来创建交互式图表

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/DylanHojnoski/obsidian-graphs/master/README.md)

---

## Readme(翻译）

下面是 [[graphs]] 插件的自述翻译

【机翻】

# 图表

[Obsidian](https://obsidian.md/) 的插件，可以从 YAML 创建交互式图表。

这个文件只涵盖了如何使用这个插件的基础知识，更多信息请访问 [Graphs Wiki](https://github.com/DylanHojnoski/obsidian-graphs/wiki)。

## 如何使用

要创建一个图形，请创建一个语言设置为 graph 的代码块。

````
```graph
bounds: [Xmin, Ymax, Xmax, Ymin]
elements: [
	{type: "name", def: []}
]
```
````

### 例子

````
```graph
bounds: [-10, 10, 10, -10]
elements: [
	{type: "line", def: [[0,0],[4,1]]}
]
```
````

#### 正弦黎曼和

````
```graph
bounds: [-8,4,8,-4]
elements: [
	{type: "slider", def: [[1,3],[5,3],[1,10,50]], att: {name: "n"}},
	{type: "slider", def: [[1,2],[5,2],[-10,-3,0]], att: {name: "start"}},
	{type: "slider", def: [[1,1],[5,1],[1,6,10]], att: {name: "end"}},
	{type: "functiongraph", def: ["f:Math.sin(x)", "f:e1", "f:e2"]},
	{type: "riemannsum", def: ["f:Math.sin(x)","f:e0", "left", "f:e1", "f:e2"], att: {fillColor: "#ffff00", fillOpacity: 0.3}},
	{type: "text", def: [-4, 2, "'Sum = ' + f:e4.toFixed(4)"], att: {fillColor: "#ffff00", fillOpacity: 0.3}},
]

```
````

![Sin Riemannsm](https://cdn.pkmer.cn/covers/graphs_2_0.gif!pkmer)

## Bugs

如果您发现此插件中有任何错误，请创建一个新问题，以便可以解决它们。

## 贡献

如果您想要贡献，请创建一个问题或拉取请求。

## 归属

This plugin uses

- [JSXGraph](https://jsxgraph.org/wp/index.html)




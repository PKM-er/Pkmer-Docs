---
uid: 20230803231105
title: Obsidian 插件：Obsidian CircuitJS
tags: ['obsidian插件', 'readme']
description: 将CircuitJS电路仿真嵌入笔记中
author: AI
type: readme
draft: false
editable: false
modified: 20230803232530
---

# Obsidian 插件：Obsidian CircuitJS

> [!Note] 插件名片
> - 插件名称：Obsidian CircuitJS
> - 插件作者：Steven Gann
> - 插件说明：将 CircuitJS 电路仿真嵌入笔记中
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/StevenGann/obsidian-circuitjs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-circuitjs)

## 概述

将 CircuitJS 电路仿真嵌入笔记中

![Obsidian CircuitJS](https://cdn.pkmer.cn/covers/obsidian-circuitjs.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/StevenGann/obsidian-circuitjs/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-circuitjs]] 插件的自述翻译

Obsidian CircuitJS

一个 Obsidian.md 插件，可以将 [CircuitJS](https://falstad.com/circuit/circuitjs.html) 电路模拟嵌入到笔记中。

### 目的

我喜欢使用 CircuitJS 来勾勒电路设计，并且我希望有一个好的方法来组织和引用这些电路。通过这个插件，我能够将实际的电路设计与版本控制和备份一起保存在我的 Obsidian 保险库中。将电路嵌入到 Markdown 中意味着我还可以在电路上包含详细的注释、链接到其他信息等。

### 用法

在 CircuitJS 中使用 `文件 -> 另存为文本...`，然后将代码粘贴到标记为 `circuitjs` 的 markdown 代码块中，如下所示：

```circuitjs
$ 1 0.000005 10.20027730826997 50 5 43 5e-11
r 176 80 384 80 0 10
s 384 80 448 80 0 1 false
w 176 80 176 352 0
c 384 352 176 352 0 0.000015 -9.16123055990675 -10
l 384 80 384 352 0 1 -0.01424104005209455 0
v 448 352 448 80 0 0 40 5 0 0 0.5
r 384 352 448 352 0 100
o 4 64 0 4099 20 0.05 0 2 4 3
o 3 64 0 4099 20 0.05 1 2 3 3
o 0 64 0 4099 0.625 0.05 2 2 0 3
38 3 F1 0 0.000001 0.000101 -1 Capacitance
38 4 F1 0 0.01 1.01 -1 Inductance
38 0 F1 0 1 101 -1 Resistance
h 1 4 3
```

在 Obsidian 的阅读视图中，Obsidian 将用代码块替换为嵌入的 CircuitJS 实例，该实例中定义了代码中的电路，并提供了一个链接以在完整的浏览器中打开电路。

![CircuitJS视图](https://raw.githubusercontent.com/StevenGann/obsidian-circuitjs/master/docs/screenshot.png)

### 限制

嵌入式模拟是完全交互式的，但更改不会存储回代码中。如果您在模拟中进行了更改并希望保留这些更改，请在切换回编辑模式并粘贴更新的代码之前使用“文件 -> 导出为文本...”。

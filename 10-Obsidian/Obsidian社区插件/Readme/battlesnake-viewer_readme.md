---
uid: 20231220112631
title: Obsidian 插件：【Readme】BattleSnake Board Viewer
tags: ['obsidian插件', 'readme']
description: 在笔记预览中呈现BattleSnake位置图表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】BattleSnake Board Viewer

> [!Note] 插件名片
> - 插件名称：BattleSnake Board Viewer
> - 插件作者：EnderInvader
> - 插件说明：在笔记预览中呈现 BattleSnake 位置图表。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/EnderInvader/battlesnake-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?battlesnake-viewer)

## 概述

在笔记预览中呈现 BattleSnake 位置图表。

![BattleSnake Board Viewer](https://cdn.pkmer.cn/covers/battlesnake-viewer.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/EnderInvader/battlesnake-viewer/master/README.md)

---

## Readme(翻译）

下面是 [[battlesnake-viewer]] 插件的自述翻译

# Obsidian BattleSnake 插件

该插件增加了在预览模式下直接在 SVG 棋盘上可视化 BattleSnake JSON 棋盘位置的功能。

根据设计，该插件仅用于可视化。不要期望交互性或处理整个游戏的可能性。该插件只想渲染一个 SVG 图像，并且它经过了优化，适用于可视化和 HTML/PDF 导出。

如何使用它

安装插件后，只需将 JSON 板块复制到带有“battlesnake”语言的代码块中。

```
```battlesnake
{"game":{"id":"board-generator-362093","ruleset":{"name":"standard","version":"board-generator","settings":{"foodSpawnChance":20,"minimumFood":1,"hazardDamagePerTurn":14,"hazardMap":"","hazardMapAuthor":"","royale":{"shrinkEveryNTurns":25},"squad":{"allowBodyCollisions":false,"sharedElimination":false,"sharedHealth":false,"sharedLength":false}}},"map":"","timeout":500,"source":""},"turn":123,"board":{"height":8,"width":8,"snakes":[{"id":"you","name":"#3AE41B","latency":"0","health":100,"body":[{"x":1,"y":5},{"x":1,"y":6},{"x":2,"y":6}],"head":{"x":1,"y":5},"length":3,"shout":"","squad":"","customizations":{"color":"#3AE41B","head":"default","tail":"default"}},{"id":"Snake1","name":"#E4601B","latency":"0","health":100,"body":[{"x":5,"y":3},{"x":5,"y":4},{"x":5,"y":5}],"head":{"x":5,"y":3},"length":3,"shout":"","squad":"","customizations":{"color":"#E4601B","head":"default","tail":"default"}},{"id":"Snake2","name":"#C51BE4","latency":"0","health":100,"body":[{"x":4,"y":2},{"x":4,"y":1},{"x":3,"y":1}],"head":{"x":4,"y":2},"length":3,"shout":"","squad":"","customizations":{"color":"#C51BE4","head":"default","tail":"default"}},{"id":"Snake3","name":"#1B9FE4","latency":"0","health":100,"body":[{"x":4,"y":6},{"x":5,"y":6}],"head":{"x":4,"y":6},"length":2,"shout":"","squad":"","customizations":{"color":"#1B9FE4","head":"default","tail":"default"}}],"food":[{"x":3,"y":4}],"hazards":[]},"you":{"id":"you","name":"#3AE41B","latency":"0","health":100,"body":[{"x":1,"y":5},{"x":1,"y":6},{"x":2,"y":6}],"head":{"x":1,"y":5},"length":3,"shout":"","squad":"","customizations":{"color":"#3AE41B","head":"default","tail":"default"}}}
```

```

![Example](https://cdn.pkmer.cn/covers/battlesnake-viewer_2_0.png!pkmer)
```

如何编译插件

首先，使用以下命令安装依赖项：

```bash
npm i
```

然后，可以使用以下命令编译插件：

```bash
npm run build
```

这将在项目根目录中创建一个 `main.js` 文件，该文件是插件的入口点。

## 计划功能

目前没有任何计划功能。

## 归属

来自 [Obsidian Chess Plugin](https://github.com/THeK3nger/obsidian-chessboard) 的原始代码框架

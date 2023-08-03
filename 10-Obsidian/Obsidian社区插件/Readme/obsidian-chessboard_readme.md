---
uid: 2023080322155063
title: Obsidian 插件：【Readme】Chessboard Viewer
tags: ['游戏', '界面相关', '美化', 'obsidian插件', 'readme']
description: 在笔记中 渲染国际象棋的棋盘，并能显示棋盘中对应棋谱位置。这个绘制棋谱布局是基于 FEN 语法的。FEN 是Forsyth-Edwards Notation 的缩写，它是描述国际象棋游戏位置的标准符号。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chessboard Viewer

> [!Note] 插件名片
> - 插件名称：Chessboard Viewer
> - 插件作者：Davide Aversa
> - 插件说明：在笔记中 渲染国际象棋的棋盘，并能显示棋盘中对应棋谱位置。这个绘制棋谱布局是基于 FEN 语法的。FEN 是Forsyth-Edwards Notation 的缩写，它是描述国际象棋游戏位置的标准符号。
> - 插件分类：['游戏', '界面相关', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/THeK3nger/obsidian-chessboard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chessboard)

## 概述

在笔记中 渲染国际象棋的棋盘，并能显示棋盘中对应棋谱位置。这个绘制棋谱布局是基于 FEN 语法的。FEN 是Forsyth-Edwards Notation 的缩写，它是描述国际象棋游戏位置的标准符号。

![Chessboard Viewer](https://cdn.pkmer.cn/covers/obsidian-chessboard.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/THeK3nger/obsidian-chessboard/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-chessboard]] 插件的自述翻译


# 黑曜石国际象棋插件

该插件增加了在预览模式下直接在SVG国际象棋棋盘上可视化国际象棋[FEN](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)位置的功能。

根据设计，该插件仅用于可视化。不要期望有交互性或处理整个PGN格式游戏的可能性。该插件只想渲染一个SVG图像，并且它经过了优化，适用于可视化和HTML/PDF导出。

如果您想要一个更具交互性的插件，我推荐使用[Chesser](https://github.com/SilentVoid13/Chesser)。

如何使用它

安装插件后，只需在带有“chessboard”语言的代码块中编写FEN位置表示。

### 例子

````

```chessboard
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R
```
````

![例子](example.png)

### 更改棋盘方向

使用`orientation`命令。它可以是`white`（默认）或`black`。

```` 
```chessboard
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R
orientation: black
```
````

## 注释（测试版）

您可以使用箭头和高亮来注释您的模式。

````

```chessboard
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R
annotations: Af8-b4 Hf8
```
````

![示例注释](example2.png)

### 语法

- `A<square>-<square>`，从第一个方格绘制箭头到第二个方格。例如，`Af8-b4`。
- `H<square>`，高亮显示特定的方格。例如，`Hf8`。

如何编译插件

首先，使用以下命令安装依赖项：

```bash
npm i
```

然后，可以使用以下命令编译插件：

```bash
npm run build
```

这将在项目根目录中创建一个`main.js`文件，该文件是插件的入口点。

## 计划功能

- [ ] 棋盘颜色自定义。
- [x] 棋盘注释和高亮。

## 国际象棋棋子

这些SVG棋子由jurgenwesterhof制作（根据Cburnett的作品进行调整），CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>，通过[维基媒体共享资源](https://commons.wikimedia.org/wiki/File:Chess_Pieces_Sprite.svg)。




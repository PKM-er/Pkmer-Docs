---
uid: 20230803212111
title: Obsidian 插件：【Readme】Chesser
tags: ['游戏', '界面相关', '编辑工具', 'obsidian插件', 'readme']
description: 支持在OB中编辑国际象棋棋谱，提供棋盘的查看器/编辑器
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chesser

> [!Note] 插件名片
> - 插件名称：Chesser
> - 插件作者：SilentVoid
> - 插件说明：支持在OB中编辑国际象棋棋谱，提供棋盘的查看器/编辑器
> - 插件分类：['游戏', '界面相关', '编辑工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/SilentVoid13/Chesser)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chesser-obsidian)

## 概述

支持在OB中编辑国际象棋棋谱，提供棋盘的查看器/编辑器

![Chesser](https://cdn.pkmer.cn/covers/chesser-obsidian.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SilentVoid13/Chesser/master/README.md)
> 

---

## Readme(翻译）

下面是 [[chesser-obsidian]] 插件的自述翻译



# Chesser

一个用于[Obsidian](https://obsidian.md/)的国际象棋游戏查看器/编辑器。

## 演示

![chesser_demo](https://raw.githubusercontent.com/SilentVoid13/Chesser/master/imgs/chesser_demo.gif)

## 用法

要使用[Chesser](https://github.com/SilentVoid13/Chesser)，首先需要声明一个`chess`代码块，如下所示：

![chesser_block](imgs/chesser_block.png)

这将创建一个基本的起始位置的国际象棋棋盘。

您可以在`chess`代码块**内部**声明各种设置，例如使用[FEN](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)字符串来描述特定的棋盘位置。您可以在下面找到完整的设置列表。

## 设置

以下是`chesr`代码块的可用设置：

| 名称           | 可能的取值                                                   | 描述                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fen`          | 有效的FEN字符串                                             | 使用特定位置开始棋盘。                                       |
| `orientation`  | `white`/`black`                                              | 棋盘的方向。                                                 |
| `pieceStyle`   | 有效的棋子样式名称。<br />查看[这里](https://github.com/SilentVoid13/Chesser/tree/master/assets/piece-css)以查看可用的样式。 | 棋盘上棋子的样式。                                           |
| `boardStyle`   | 有效的棋盘样式名称。<br />查看[这里](https://github.com/SilentVoid13/Chesser/tree/master/assets/board-css)以查看可用的样式。 | 棋盘的样式。                                                 |
| `drawable`     | `true`/`false`                                               | 控制是否能在棋盘上绘制注释（箭头、圆圈）。                   |
| `viewOnly`     | `true`/`false`                                               | 如果启用，显示一个静态的棋盘（没有移动、注释等）。           |
| `free`         | `true`/`false`                                               | 如果启用，禁用棋盘逻辑，所有移动都是有效的。                 |

您可以在[Chesser](https://github.com/SilentVoid13/Chesser)的Obsidian插件设置中永久设置某些设置。

## 待办事项

- [ ] 添加[PGN](https://en.wikipedia.org/wiki/Portable_Game_Notation)格式支持

## 安装

在禁用安全模式后，您可以在“设置”>“社区插件”>“浏览”>“搜索”中找到第三方插件“Chesser”。

安装后，您可以在“设置”>“社区插件”下找到已安装的插件。它们需要启用才能生效。您也可以在此处卸载它们。

## 替代方案

- [THeK3nger/obsidian-chessboard](https://github.com/THeK3nger/obsidian-chessboard)

## 贡献

欢迎贡献。

您可以创建一个[问题](https://github.com/SilentVoid13/Chesser/issues)来报告错误，提出对该插件的改进建议等。

您可以创建一个[拉取请求](https://github.com/SilentVoid13/Chesser/pulls)来贡献该插件的开发。

## 许可证

[Chesser](https://github.com/SilentVoid13/Chesser) 使用 GNU AGPLv3 许可证。有关更多信息，请参阅 [LICENSE](https://github.com/SilentVoid13/Chesser/blob/master/LICENSE.TXT)。

## 支持

如果你想支持我和我的工作，你可以通过点击[**这里**](https://www.paypal.com/donate?hosted_button_id=U2SRGAFYXT32Q)给我捐赠一点点。




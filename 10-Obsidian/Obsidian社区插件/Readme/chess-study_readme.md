---
uid: 2023080322154977
title: Obsidian 插件：Chess Study
tags: ['obsidian插件', 'readme']
description: 一个国际象棋学习助手和PGN查看器/编辑器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chess Study

> [!Note] 插件名片
> - 插件名称：Chess Study
> - 插件作者：Christoph Lindstädt
> - 插件说明：一个国际象棋学习助手和 PGN 查看器/编辑器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrislicodes/obsidian-chess-study)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chess-study)

## 概述

一个国际象棋学习助手和 PGN 查看器/编辑器。

![Chess Study](https://cdn.pkmer.cn/covers/chess-study.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrislicodes/obsidian-chess-study/trunk/README.md)

---

## Readme(翻译）

下面是 [[chess-study]] 插件的自述翻译

<!-- 在目录中省略 -->

# 黑曜石国际象棋学习

> 一个为 [Obsidian](https://obsidian.md/) 设计的国际象棋学习助手和 PGN 查看器/编辑器。

通过这个插件，你可以导入 PGN 文件或者开始一局全新的游戏。它允许你为每一步添加评论和箭头，这些内容将保存在你的 vault 中的一个 JSON 文件中。虽然它不是一个完整的分析棋盘，但它是一个有价值的工具，可以支持你在 [Obsidian](https://obsidian.md/) 中进行国际象棋笔记。

## 目录

- [动机](#动机)
- [安装](#安装)
- [使用](#使用)
- [特性](#特性)
	- [1.0.0](#100)
	- [1.1.0](#110)
- [设置](#设置)
- [路线图](#路线图)
- [使用的工具](#使用的工具)
- [替代方案](#替代方案)
- [许可证](#许可证)

动机

我喜欢 Obsidian 及其工具，但管理国际象棋局面的截图变得难以控制，而且更新也很麻烦。在 Obsidian 中拥有类似 [lichess.org](https://lichess.org/) 或 [chess.com](https://chess.com/) 提供的 PGN 查看器将是很棒的。它应该能够让我们轻松地查看 PGN，添加箭头和评论，并将它们持久化在 Obsidian 存储库中。目前已存在的 [替代方案](#alternatives) 主要关注于可视化 FEN 快照，这就是为什么开始这个副项目的原因。

## 安装

一旦您禁用了安全模式，您可以通过导航到“设置”>“社区插件”>“浏览并搜索”来找到第三方插件“Chess Study”。安装完插件后，您可以在“设置”>“社区插件”下访问它。请注意，您必须启用插件才能使用它。您也可以从那里卸载插件。

使用方法

首先，将光标定位到您希望在笔记中放置 PGN 查看器/编辑器的位置。执行 Obsidian 命令“Chess Study: Insert PGN-Editor at cursor position”。

这个操作将触发一个模态窗口，在这里您可以选择粘贴您的 PGN 或将其留空以开始一局新的游戏。下面是它的样子：

![chess-study-modal](imgs/chess-study-modal.png)

点击“Submit”后，Obsidian Chess Study 将解析 PGN，生成一个新的 JSON 文件，位于您的 vault 中的 `.obsidian/plugins/obsidian-chess-study/storage/{id}.json`，并在光标位置插入一个 chessStudy 代码块。以下是 chessStudy 代码块的示例：

![chess-study-codeblock](imgs/chess-study-codeblock.png)

之后，PGN 查看器/编辑器将渲染，您可以开始使用（样式与您的主题和强调色相匹配）：

![chess-study-codeblock](imgs/chess-study-demo.gif)

## 特点

### 1.0.0

- [x] 导入 PGN 文件
- [x] 以 JSON 格式存储游戏状态
- [x] 添加自定义 PGN 查看器
- [x] 仅允许合法移动
- [x] 通过导航按钮和直接点击移动棋子
- [x] 绘制和同步形状
- [x] 添加并同步支持 Markdown 的评论

### 1.1.0

- [x] 添加对变体的支持（深度为 1）

![chess-study-variants](imgs/chess-study-variants.png)

## 设置

以下是 `chessStudy` 代码块的可用设置：

| 设置               | 可能的值           | 描述                                             |
| ------------------ | ------------------ | ------------------------------------------------ |
| `chessStudyId`     | 有效的 nanoid       | 存储在插件存储中的文件的有效 ID                    |
| `boardOrientation` | `white` \| `black` | 棋盘的方向                                       |
| `boardColor`       | `green` \| `brown` | 棋盘的颜色                                       |

您可以在 [Obsidian Chess Study](https://obsidian.md/) 的插件设置中永久设置某些设置。

## 路线图

- [ ] 添加导出当前 FEN 的选项
- [ ] 添加从特定位置（FEN）开始的选项
- [ ] 添加撤销按钮
- [ ] 添加管理存储游戏的视图
- [ ] 添加更多样式
- [ ] 添加更多设置

## 使用的工具

- 国际象棋的可视化由 [Chessground](https://github.com/lichess-org/chessground) 提供支持
- 国际象棋的逻辑由 [Chess.js](https://github.com/jhlywa/chess.js) 提供支持
- Markdown 编辑器由 [TipTap](https://github.com/ueberdosis/tiptap) 提供支持
- 图标由 [Lucide](https://github.com/lucide-icons/lucide) 提供
- 所有的组件都由 [React](https://github.com/facebook/react) 组合在一起

## 替代方案

如果你想查看 FENs，可以尝试这些替代的 Obsidian 插件：

- [SilentVoid13/Chesser](https://github.com/SilentVoid13/Chesser)
- [pmorim/obsidian-chess](https://github.com/pmorim/obsidian-chess)
- [THeK3nger/obsidian-chessboard](https://github.com/THeK3nger/obsidian-chessboard)

## 许可证

[Obsidian Chess Study](https://github.com/chrislicodes/obsidian-chess-study) 使用 GPL-3.0 许可证。有关更多信息，请参阅 [LICENSE](https://github.com/chrislicodes/obsidian-chess-study/blob/trunk/LICENSE)。

---
uid: 20230803204420
title: Obsidian 插件：【Readme】Obsidian Chess
tags: ['游戏', 'obsidian插件', 'readme']
description: 让你可以记录国际象棋的棋局
author: pmorim
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Chess

> [!Note] 插件名片
> - 插件名称：Obsidian Chess
> - 插件作者：pmorim
> - 插件说明：让你可以记录国际象棋的棋局
> - 插件分类：['游戏', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/pmorim/obsidian-chess)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chess)

## 概述

让你可以记录国际象棋的棋局

![Obsidian Chess](https://cdn.pkmer.cn/covers/obsidian-chess.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pmorim/obsidian-chess/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-chess]] 插件的自述翻译


# 黑曜石棋

> 一个用于所有与国际象棋相关的笔记的黑曜石插件。

解决方法

目前Obsidian在获取资源时存在问题。
一个简单的解决方法是从发布页面获取资源文件夹。
关于这个问题的更多信息可以在[Issue #3](https://github.com/pmorim/obsidian-chess/issues/3)中找到。

## 目录

- [使用方法](#usage)
- [文档](#documentation)
- [特点](#features)
- [问答](#qa)
- [灵感](#inspiration)
- [技术](#technology)
- [支持我](#support-me)

使用方法

只需创建一个语言设置为`chess`的代码块，然后以[YAML语法](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)传递参数。

这是一个显示卡罗-卡恩开局变化的简单棋盘：

````yaml
```chess
fen: rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR
flipBoard: true
lastMove: d7d5
```
````

![卡罗-卡恩局面](./assets/screenshots/Caro-Kann.png)

> **注意：** 您可以轻松地从您在线下棋的网站上获取该局面的FEN代码。例如：[Lichess的棋盘编辑器](https://lichess.org/editor?fen=rnbqkbnr%2Fpp2pppp%2F2p5%2F3p4%2F3PP3%2F8%2FPPP2PPP%2FRNBQKBNR+w+KQkq+-+0+2)。

## 文档

以下是可以传递给代码块的所有参数的列表：

| 参数       | 类型     | 描述                                                  | 默认值             |
| ---------- | ------- | ----------------------------------------------------- | ----------------- |
| fen        | string  | 位置的FEN代码                                         | "8/8/8/8/8/8/8/8" |
| flipBoard  | boolean | 是否将棋盘翻转为黑方的视角                            | false             |
| lastMove   | string  | 要突出显示的最后一步的两个方格                         | ""                |
| check      | string  | 要突出显示为检查的方格                                | ""                |

## 特点

以下是当前和未来插件功能的简要列表：

- [x] 通过传递其**FEN代码**来显示棋局位置。
- [x] 使用不同的**主题和棋子集**自定义棋盘。
- [x] 如果不喜欢内置主题，可以**创建自己的主题**。
- [x] **翻转棋盘**以从黑方的角度查看。
- [x] 高亮显示**上一步**或**将军**的方格。
- [x] 查看棋盘方格的**坐标**。
- [ ] 自定义用户定义的棋盘**主题**。
- [ ] 能够在方格之间显示**箭头**以显示位置的主要思路。
- [ ] 能够**标记方格**以显示它们在位置中的重要性。
- [ ] **棋盘编辑器**窗口，可自动生成代码块。

## 问答

**问：** 你为什么要制作这个插件？

- **答：** 当我尝试记录我正在学习的一种新的国际象棋开局时，我发现没有办法在Markdown文件中嵌入国际象棋局面，因为Lichess的`<iframe>`只允许显示完整的对局。所以我只能截取Lichess的棋盘编辑器的屏幕截图，并将该图像粘贴到Markdown文件中。当我听说[Obsidian October](https://publish.obsidian.md/hub/11+-+Events/Obsidian+October+2021)比赛时，我觉得这是一个制作国际象棋插件的好借口。

**问：** 你的等级是多少？

- **答：** 我在国际象棋方面很差；我还在学习，并且最近才开始认真对待这个游戏。写这篇文章时，我在快棋方面的等级大约在1400到1500之间。如果你感兴趣，你可以查看我的[lichess账号](https://lichess.org/@/frizd)。我从未参加过比赛，所以我没有官方的FIDE等级。

灵感来源

正如你可能已经注意到的那样，这个插件受到了[Lichess](https://lichess.org/)的很大启发。

- 主题是通过从他们的网站上使用一个取色器进行逆向工程得到的。
- 棋子集是从[Lichess的官方资产](https://github.com/ornicar/lila/tree/master/public/piece)中获取的。

## 技术

对于所有感兴趣的极客们，这个插件是使用[Svelte](https://svelte.dev/)构建的。请随意将这个插件用作您未来Svelte插件的模板。

如果您觉得这个插件有用，请考虑给我买杯咖啡☕（或一杯啤酒🍺），并留下一条感谢的留言。






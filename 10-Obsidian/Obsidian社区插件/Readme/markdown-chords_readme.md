---
uid: 2023082011355689
title: Obsidian 插件：【Readme】Markdown Chords
tags: ['obsidian插件', 'readme']
description: 在Markdown中添加弦乐器（例如吉他）的音乐和弦符号以及弦图。支持任何西方音阶/调式的和弦，包括扩展的爵士和弦。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown Chords

> [!Note] 插件名片
> - 插件名称：Markdown Chords
> - 插件作者：David Hunt
> - 插件说明：在 Markdown 中添加弦乐器（例如吉他）的音乐和弦符号以及弦图。支持任何西方音阶/调式的和弦，包括扩展的爵士和弦。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dnotes/obsidian-markdown-chords)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-chords)

## 概述

在 Markdown 中添加弦乐器（例如吉他）的音乐和弦符号以及弦图。支持任何西方音阶/调式的和弦，包括扩展的爵士和弦。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dnotes/obsidian-markdown-chords/main/README.md)
>

---

## Readme(翻译）

下面是 [[markdown-chords]] 插件的自述翻译

这是将 [markdown-it-chords] 作为 [Obsidian] 插件的一个非常简单的适配版本。

有关和弦语法的完整文档，请参阅 [markdown-it-chords 演示]。

[markdown-it-chords]: <https://github.com/dnotes/markdown-it-chords>
[Obsidian]: <https://obsidian.md>
[markdown-it-chords 演示]: <https://dnotes.github.io/markdown-it-chords/>

### 安装

您可以使用 [BRAT 社区插件] 将其添加到 Obsidian 安装中。

我计划将其提交审核并在社区插件中发布。

[BRAT 社区插件]: <https://github.com/TfTHacker/obsidian42-brat>

### 用法

目前，该插件仅提供了一个 Markdown 代码处理器，用于标记为 "song" 或 "lyrics" 的围栏代码，例如：

	```song
	[C]Do, a deer, a female deer
	[Dm]Ray, a drop of golden sun
	[Eb]May, a possi[D#]bility
	[D/F#]Fee, the price you pay to run

	_(half-time, bossanova guitar)_
	[CΔ913]So, — I'd [C6]like to see Bra[Fmaj9]zil . . . . .[F6(9)]
	[E-7b13]La, — I'd [CM7sus2]really like to [E9]go . . .[E7b9]
	[AmΔ7/9]Tea, — I [A-7]sit and sip so [D#ø7]slow . . .[D#o7]
	That will [Dm7|x57565]bring — [F6(9)|x87788]us —— [Em7|x79787]back — [G13|x,10,x,12,12,12]to —— [8xx987]Do . . . .[8,(10),10,9,10,x]
	```

将来，我可能会添加一个选项，将和弦格式应用于所有文本。

---
uid: 2023080322262233
title: Obsidian 插件：Scales and Chords
tags: ['图表生成', 'obsidian插件', 'readme']
description: 在你的Obsidian保险库中捕获音乐制表符号。和弦变成可点击的链接到模态图像（由scales-chords.com提供）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Scales and Chords

> [!Note] 插件名片
> - 插件名称：Scales and Chords
> - 插件作者：egradman
> - 插件说明：在你的 Obsidian 保险库中捕获音乐制表符号。和弦变成可点击的链接到模态图像（由 scales-chords.com 提供）。
> - 插件分类：[' 图表生成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/egradman/scales-chords)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scales-chords)

## 概述

在你的 Obsidian 保险库中捕获音乐制表符号。和弦变成可点击的链接到模态图像（由 scales-chords.com 提供）。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/egradman/scales-chords/master/README.md)
>

---

## Readme(翻译）

下面是 [[scales-chords]] 插件的自述翻译

## 音阶和和弦

这是一个插件，允许您在围栏块中捕获吉他和钢琴谱。预览时，该块会插入来自 [ScalesChords](https://www.scales-chords.com) 的和弦图像链接。

要使用此插件，请使用以下格式的围栏代码块：

<pre>
```tab
Verse
G Am G/B G %
Blackbird singing in the dead of night
C C#dim D D#dim Em D# %
Take these broken wings and learn to fly
D C#dim C Cm %
All your life
G/B A7 D7 G %
You were only waiting for this moment to arise
```
</pre>

行末尾的 `%` 表示该行包含和弦。在预览模式下，每个和弦都以粗体显示，并且可点击。点击和弦会弹出一个模态框，其中包含和弦的可视化呈现（由 [ScalesChords](https://www.scales-chords.com/) 提供）。

不以 `%` 结尾的行将保持原样呈现。

此外，插件捕获的每个和弦都将在谱块下方以大堆栈形式呈现。这样您就可以打开两个编辑视图，并将所有歌曲的和弦都保持在视野中。

您可以在设置中更改乐器。只需输入以下之一：

- `guitar`（吉他）
- `piano`（钢琴）
- `ukelele`（尤克里里）
- `mandolin`（曼陀林）
- `banjo`（班卓琴）

## 注意事项

- 这是我的第一个插件。
- 我不会弹钢琴或吉他。我正在学习，并且编写插件是我拖延练习的方式。

感谢 [ScalesChords](https://www.scales-chords.com/) 提供了一个用于生成这些图片的 API！

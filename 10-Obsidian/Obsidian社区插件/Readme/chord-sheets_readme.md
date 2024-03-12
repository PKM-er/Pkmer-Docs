---
uid: 20240312193744
title: Obsidian 插件：【Readme】Chord Sheets
tags: ['obsidian插件', 'readme']
description: 在您的保险库中使用和弦谱（和弦在歌词上方）：和弦图表、移调、自动滚动等。在实时预览和阅读模式下工作。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Chord Sheets

> [!Note] 插件名片
> - 插件名称：Chord Sheets
> - 插件作者：Marcel Schaeben
> - 插件说明：在您的保险库中使用和弦谱（和弦在歌词上方）：和弦图表、移调、自动滚动等。在实时预览和阅读模式下工作。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/olvidalo/obsidian-chord-sheets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chord-sheets)

## 概述

在您的保险库中使用和弦谱（和弦在歌词上方）：和弦图表、移调、自动滚动等。在实时预览和阅读模式下工作。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/olvidalo/obsidian-chord-sheets/master/README.md)

---

## Readme(翻译）

下面是 [[chord-sheets]] 插件的自述翻译

【机翻】

# 黑曜石和弦表

在您的保险库中呈现和处理和弦表（**歌词上的和弦**）。此插件将 UltimateGuitar 样式的功能带入 Obsidian，包括**和弦图**、**吉他**和**尤克里里**支持、**移调**和**自动滚动**。在**编辑/实时预览**和**阅读**模式下无缝运行。它与您的**主题颜色**集成，并可根据您的需求**自定义**。

## 特点

### ✨ 突出显示和弦符号

在标记为 ```` ```chords```` 的围栏代码块中检测和突出显示和弦符号。

![chord-blocks.png](https://cdn.pkmer.cn/covers/chord-sheets_2_0.png!pkmer)

*注意:* 从网站复制和粘贴和弦谱时，请粘贴为纯文本以保留格式（在 Mac 上默认为⌘ + ⇧ + V，在 Windows/Linux 上为 Ctrl + ⇧ + V，或右键单击 ➔ *粘贴为纯文本*）。

### 🎼 和弦图

在悬停或在和弦块的顶部显示和弦图。为每个和弦提供替代指法。图表在本地渲染，不需要调用外部服务的 API。

![diagram-popups.gif](https://cdn.pkmer.cn/covers/chord-sheets_2_1.gif!pkmer)

![chord-overview.gif](https://cdn.pkmer.cn/covers/chord-sheets_2_2.gif!pkmer)

### 🎸 选择您的乐器

支持吉他和尤克里里来渲染和弦图。乐器可以全局设置，也可以针对每个和弦块进行指定。

![change-instrument.gif](https://cdn.pkmer.cn/covers/chord-sheets_2_3.gif!pkmer)

### 📝 无缝编辑

在*实时预览/编辑*模式下，允许无缝编辑和歌词，同时保持和和弦符号高亮显示和和弦图渲染处于活动状态，无需切换到源代码视图。这是通过实现一个 CodeMirror 编辑器扩展来实现渲染，而不是一个代码块后处理器。

### 🔄 调整歌曲

通过点击或编辑命令向上或向下调整歌曲。

![transpose.gif](https://cdn.pkmer.cn/covers/chord-sheets_2_4.gif!pkmer)

### 📜 自动滚动

随着可配置速度玩耍时向下滚动。

![autoscroll.gif](https://cdn.pkmer.cn/covers/chord-sheets_2_5.gif!pkmer)

| 最小暗色                               | 最小亮色                                 | AnuPpuccin 亮色                                  |
|--------------------------------------------|------------------------------------------------|------------------------------------------------------|
| ![minimal-dark.png](docs/minimal-dark.png) | ![minimal-bright.png](docs/minimal-bright.png) | ![anuppuccin-bright.png](https://cdn.pkmer.cn/covers/chord-sheets_2_6.png!pkmer) |

### ⌨️ 编辑器命令

使用专用的编辑器命令访问所有功能，并支持键盘快捷键。

![editor-commands.png](https://cdn.pkmer.cn/covers/chord-sheets_2_7.png!pkmer)

*注意*：截图中的键盘快捷键仅用于说明。默认情况下，快捷键为空，需要在安装插件后在 Obsidian 设置中设置。

### 📱移动支持

在移动设备上运行良好。通过点击和弦符号来弹出和弦图表弹出窗口。

在 *编辑/实时预览* 模式下可能有点棘手，因为点击和弦会定位光标

这会弹出键盘。在移动设备上更喜欢 *阅读* 模式。

### ⚙️ 可配置性

* 在“编辑/实时预览”模式、“阅读”模式或两者中隐藏某些**UI 元素**（乐器和转位控件、和弦图、自动滚动按钮）。
* 调整**和弦图大小**和**默认乐器**
* 自定义块**“语言”指定符**（例如，用 ```` ```tab```` 代替 ```` ```chords```` 开始一个和弦块）

## 开发

- 克隆这个仓库。
- 运行 `npm i` 安装依赖
- 运行 `npm run dev` 以启动监视模式下的编译。

这个仓库包含了适用于 JetBrains IDE（如 WebStorm）的**运行/调试配置**。您需要将 *Run Obsidian* 配置适应到您的 Obsidian 安装路径，并将工作目录设置为您克隆此仓库的路径。

要开始一个支持断点等功能的开发和调试会话：

1. 在 **调试** 模式下运行 **Run Obsidian** 配置。这将使用 `--remote-debugging-port=9222` 参数启动 Obsidian，从而在端口 9222 上启用 Chrome 远程调试。
2. 运行 **Debug** 配置，将 IDE 连接到 Obsidian。
3. 在 **调试** 模式下运行 **dev** 配置，启动开发服务器。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到您的保险库 `VaultFolder/.obsidian/plugins/chord-sheets/` 中，并在 Obsidian 的设置中启用插件。

## 鸣谢

This plugin uses:

- [Vexchords](https://github.com/0xfe/vexchords) for rendering chord diagrams.
- [tonal](https://github.com/tonaljs/tonal) for parsing chord symbols, chord normalization and transposition.
- [chords-db](https://github.com/tombatossals/chords-db) for ukulele and guitar fingerings.

## 灵感/替代方案

- [音阶和和弦](https://github.com/egradman/scales-chords#readme)
	- 在围栏代码块中突出显示和弦符号在歌词上方
	- 点击显示通过外部网络服务获取的和弦图表
- [Obsidian Chord Lyrics](https://github.com/nevernotmove/obsidian-chordlyrics#readme)
	- 在围栏代码块中突出显示和弦符号在歌词上方
	- 当换行时保持和弦/歌词关系，适合在手机上阅读和弦谱
- [Obsidian Markdown Chords](https://github.com/dnotes/obsidian-markdown-chords)
	- 在围栏代码块中以 ChordPro 风格的 [*markdown-it-chords*](https://dnotes.github.io/markdown-it-chords/)（歌词中的括号和弦）格式呈现和弦
	- 可选在歌词上方呈现和弦图表
	- 需要明确指定指法作为和弦符号的一部分
- [Obsidian jTab](https://github.com/davfive/obsidian-jtab)
	- 在围栏代码块中以 [*jTab*](https://jtab.tardate.com/) 格式呈现标签和和弦图表




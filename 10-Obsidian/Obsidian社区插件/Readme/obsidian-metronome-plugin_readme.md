---
uid: 20230803231105
title: Obsidian 插件：Metronome
tags: ['obsidian插件', 'readme']
description: 在您的笔记中添加互动节拍器。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232502
---

# Obsidian 插件：Metronome

> [!Note] 插件名片
> - 插件名称：Metronome
> - 插件作者：Curt Grimes
> - 插件说明：在您的笔记中添加互动节拍器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/curtgrimes/obsidian-metronome-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-metronome-plugin)

## 概述

在您的笔记中添加互动节拍器。

![Metronome](https://cdn.pkmer.cn/covers/obsidian-metronome-plugin.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/curtgrimes/obsidian-metronome-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-metronome-plugin]] 插件的自述翻译

# 黑曜石节拍器 🎵

使用此插件在您的笔记中添加交互式节拍器。可以仅使用可视化节拍器，也可以打开点击或蜂鸣声。自定义节奏、拍子、乐器、大小等。与 [obsidian-plugin-abcjs](https://github.com/TilBlechschmidt/obsidian-plugin-abcjs) 搭配使用，让您的乐谱和节拍器在单个笔记中和谐共存！

在您的 Obsidian 笔记中使用以下 Markdown 代码：

````markdown

# 我的节拍器

```metronome
bpm: 120
meter: 3/4
size: medium
```

为什么？

我在Obsidian中使用[obsidian-plugin-abcjs](https://github.com/TilBlechschmidt/obsidian-plugin-abcjs)来编写音乐符号，有时在现场表演中，我需要知道以何种速度演奏一首歌曲。这个插件提供了一个可视化的节拍器，我可以将其放在我的音乐旁边，作为正确演奏速度的良好提醒。在练习时，我可以将其解除静音，并在节拍上进行练习。

## 安装

1. 在 Obsidian 中，转到“设置”>“社区插件”，如果启用了安全模式，请禁用它。
1. 选择**浏览**并搜索**Metronome**插件。
1. 安装插件。
1. 启用插件。

## 用法

打开一个笔记并在笔记中放置一个代码块，就像下面的例子一样。给它一个你的速度的 `bpm`（每分钟节拍）。在下面的例子中，我将 `bpm` 设置为 `120`。

````markdown

# 我的基本节拍器

```metronome
bpm: 120
```
````

这将在你的笔记中生成一个可视化的节拍器。默认情况下，它是静音的，但你可以按下取消静音按钮来听到它的点击声（或者更改 `muted` 选项，使其默认点击声&mdash; 有关更多选项，请参见下文）。

![Kiku](images/demo-2.gif)

你可以进一步自定义节拍器：

````markdown

# 我更加花哨的节拍器

```metronome
bpm: 120
meter: 12/8
size: large
instrument: beep
tickNotes: A5
tockNotes: A4
```

## 节拍器选项

这些是在创建节拍器时可以更改的所有选项。只有 `bpm` 选项是必需的。

| 选项         | 类型                                                                                                           | 描述                                                                                                                                                                                                                                                                                                                                                                                      | 默认值                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `bpm`        | 数字或字符串                                                                                                   | [每分钟节拍数](https://en.wikipedia.org/wiki/Tempo)。必须大于0。支持使用加法、减法、乘法和除法的简单数学表达式，因为有时您可能想要加倍节奏（`60*2`），减半节奏（`140/2`），或者增加或减少节奏但保持对以后参考的原始值的跟踪（`90+12`）。    | (必需)                                                    |
| `meter`      | 字符串                                                                                                         | 要播放的[拍子记号](https://en.wikipedia.org/wiki/Time_signature)（拍子记号）。底数必须为1、2、4、8、16、32或64。示例：`4/4`、`3/4`、`6/8`、`12/8`。                                                                                                                                                                                                           | `4/4`                                                         |
| `muted`      | `yes` 或 `no`                                                                                                  | 节拍器的音频是否开始静音。                                                                                                                                                                                                                                                                                                                                           | `yes`                                                         |
| `autoStart`  | `yes` 或 `no`                                                                                                  | 节拍器是否立即开始闪烁。如果 `autoStart` 是 `yes`，并且 `muted` 是 `no`，那么节拍器的声音也会立即开始播放。                                                                                                                                                                                                               | `yes`                                                         |
| `stopAfter`  | 类似于 `30s`、`1h`、`1h30m` 的持续时间                                                                             | 在给定的持续时间后自动停止节拍器。                                                                                                                                                                                                                                                                                                                                   | 无                                                          |
| `countdown`  | `always`，或类似于 `30s`、`1h`、`1h30m` 的持续时间                                                                | 当与 `stopAfter` 结合使用时，控制在节拍器自动停止之前“停止中...”倒计时按钮显示的时间。设置为 `always` 以始终显示倒计时。                                                                                                                                                                                  | `10s`，或 `stopAfter` 的值（如果小于10秒） |
| `size`       | `small`、`medium`、`large` 或 `xlarge`                                                                        | 控制音符中节拍器的大小。                                                                                                                                                                                                                                                                                                                                               | `small`                                                       |
| `style`      | `pulse`、`pendulum`、`line`、`dots`                                                                            | 控制节拍器的样式。`pulse` 使整个区域闪烁颜色。`pendulum` 显示一个摆动的摆锤节拍器的插图。`line` 显示一个左右移动的垂直线。`dots` 显示点。当 `size` 为 `small` 时，只有 `pulse` 可用。其他样式仅在 `size` = `medium` 及以上时可用。                                            | `pulse`                                                       |
| `instrument` | `click`、`beep`、`AMSynth`、`DuoSynth`、`FMSynth`、`MembraneSynth`、`MetalSynth`、`MonoSynth` 或 `PluckSynth` | 更改节拍器的乐器。                                                                                                                                                                                                                                                                                                                                                           | `click`                                                       |
| `tickNotes`  | 字符串                                                                                                         | 这确定在**下拍**上播放的音符，以[科学音高记号](https://en.wikipedia.org/wiki/Scientific_pitch_notation)指定。（例如，中央 C 是 C4。）通过提供逗号分隔的音符列表，可以同时播放多个音调。如果没有拍子记号，每个拍子都被视为下拍。当 `instrument` 为 `click` 时没有效果。 | `C6`<br/>`F5,A5,C5`                                           |
| `tockNotes`  | 字符串                                                                                                         | 这确定在**上拍**上播放的音符，以[科学音高记号](https://en.wikipedia.org/wiki/Scientific_pitch_notation)指定。（例如，中央 C 是 C4。）通过提供逗号分隔的音符列表，可以同时播放多个音调。如果没有拍子记号，每个拍子都被视为下拍。当 `instrument` 为 `click` 时没有效果。   | `C5`<br/>`F4,A4,C4 `                                          |

## 示例

在节拍器上设置`autoStart: no`

如果一个节拍器的`autoStart: no`，当你打开笔记时它不会开始闪烁。你也可以使用Obsidian的实时预览功能来直接编辑节拍器。

### 与音乐符号一起使用

当与[obsidian-plugin-abcjs](https://github.com/TilBlechschmidt/obsidian-plugin-abcjs)插件一起使用时，节拍器可以很好地放置在音乐符号旁边。

![](images/demo-5.gif)

### 同时播放多个音调

将 `tickNotes` 和 `tockNotes` 设置为以逗号分隔的音调列表，以在和弦中同时播放这些音调。

````markdown
```metronome
bpm: 80
meter: 4/4
instrument:beep
tickNotes: F4,A4,C4
tockNotes: D4,F4,A4
```
````

### 使用不同的乐器和音调

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: AMSynth
tickNotes: C5,E5
tockNotes: D5,F5
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: DuoSynth
muted: no
tickNotes: A3
tockNotes: B3
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: FMSynth
tickNotes: A4
tockNotes: C#5,E5
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: MembraneSynth
tickNotes: B6
tockNotes: B5
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: MetalSynth
tickNotes: G3
tockNotes: D0
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: MonoSynth
tickNotes: C5,E5,G5
tockNotes: F5,A6,C6
```
````

````markdown
```metronome
bpm: 90
meter: 4/4
instrument: PluckSynth
tickNotes: A4
tockNotes: E4
```
````

### `pulse` 样式（默认）

````markdown
```metronome
bpm: 125
size: large
style: pulse
```
````

![](images/demo-6.gif)

### `pendulum` 样式

在 `large` 和 `xlarge` 尺寸上效果最佳。

````markdown
```metronome
bpm: 125
size: large
style: pendulum
```
````

![](images/demo-7.gif)

### `line` 样式

最适合 `large` 和 `xlarge` 尺寸。

````markdown
```metronome
bpm: 125
size: large
style: line
```
````

![](images/demo-8.gif)

### `dots` 样式

````markdown
```metronome
bpm: 86
meter: 3/4
size: large
style: dots
```
````

![](images/demo-style-dots.gif)

### `stopAfter` 和 `countdown`

您可以在一段时间后停止节拍器：

````markdown
```metronome
bpm: 120
meter:4/4
stopAfter: 12s
```
````

![](images/demo-stop-after.gif)

默认情况下，倒计时按钮会在 `stopAfter` 持续时间的最后 10 秒出现，但您可以让它显示更长的时间：

````markdown
```metronome
bpm: 120
meter:4/4
stopAfter: 1m
countdown: 30s
```
````

或者您可以始终显示倒计时按钮：

````markdown
```metronome
bpm: 120
meter:4/4
stopAfter: 1m
countdown: always
```
````

### 与主题兼容

这个节拍器在 Obsidian 的明亮或暗黑模式下与社区主题完美兼容。

#### 主题：黑曜石默认（暗色模式）

![](images/demo-theme-obsidian-dark.gif)

#### 主题：[Minimal](https://github.com/kepano/obsidian-minimal)（浅色模式）

![](images/demo-theme-minimal-light.gif)

#### 主题：[Obsidian Atom](https://github.com/kognise/obsidian-atom)（暗黑模式）

![](images/demo-theme-atom-dark.gif)

#### 主题：[Cecilia May Primary](https://github.com/ceciliamay/obsidianmd-theme-primary)（浅色模式）

![](images/demo-theme-cecilia-may-primary-light.gif)

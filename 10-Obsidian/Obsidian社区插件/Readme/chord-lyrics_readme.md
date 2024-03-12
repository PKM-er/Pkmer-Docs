---
uid: 20231220112631
title: Obsidian 插件：【Readme】Chord Lyrics
tags: ['obsidian插件', 'readme']
description: 在歌词上显示和弦名称。支持自动换行、节标题和自动检测。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Chord Lyrics

> [!Note] 插件名片
> - 插件名称：Chord Lyrics
> - 插件作者：nevernotmove
> - 插件说明：在歌词上显示和弦名称。支持自动换行、节标题和自动检测。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nevernotmove/obsidian-chordlyrics)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chord-lyrics)

## 概述

在歌词上显示和弦名称。支持自动换行、节标题和自动检测。

![Chord Lyrics](https://cdn.pkmer.cn/covers/chord-lyrics.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nevernotmove/obsidian-chordlyrics/main/README.md)

---

## Readme(翻译）

下面是 [[chord-lyrics]] 插件的自述翻译

# Obsidian Chord 歌词插件

这个插件为 [Obsidian](https://obsidian.md) 添加了在歌词上显示和弦的功能。

## 特点

- 高亮和弦
- 在较小的屏幕上进行基本的换行，同时保持和弦/歌词的关系
- 自动检测大多数和弦/歌词行
- 能够显示节标题（例如*合唱*或*诗歌*）
- 可自定义颜色

这些小例子可以帮助您快速入门。

### 和弦

要添加和弦，只需在歌词上方的 `chordlyrics` 块中写入它们。

~~~
```chordlyrics
A     Cm      F     D7
这些是你的深情歌词
```
~~~

转换为

![chord-example](https://cdn.pkmer.cn/covers/chord-lyrics_2_0.png!pkmer)

### 标题

要添加一个节标题，只需在方括号中添加名称。

~~~
```chordlyrics
[我的诗句]
  A     G9      F-     D A D
这一行真的触动了我的灵魂
```
~~~

变成

![header-example](https://cdn.pkmer.cn/covers/chord-lyrics_2_1.png!pkmer)

### 标记行

如果自动检测无法识别，您可以在行尾使用 `%c` 标记和弦行，使用 `%t` 标记文本行。

~~~
```chordlyrics
Dm7 D  A  D  B  A Am   A C  Dm Dm7 Gadd9 %c
I'm a changed person after reading this %t
```
~~~

转换为

![notwrapped-example](https://cdn.pkmer.cn/covers/chord-lyrics_2_2.png!pkmer)

### 包装

和弦和歌词在保持它们之间的关系的同时，以较少的空间进行包装。

~~~
```chordlyrics
[Verse 1]
A     G7   D#   F-
和弦和歌词环绕
A     G7   D#   F-
你真的期望有韵脚吗

[Chorus]
A D A7 D        F- D   A7      D
感谢您查看这个插件
```
~~~

转化为

![wrapped-example](https://cdn.pkmer.cn/covers/chord-lyrics_2_3.png!pkmer)

在较少的可用空间中，一切都会被包装

![img.png](https://cdn.pkmer.cn/covers/chord-lyrics_2_4.png!pkmer)

---
uid: 2023080322212149
title: Obsidian 插件：【Readme】Lilypond
tags: ['obsidian插件', 'readme']
description: 渲染Lilypond模板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Lilypond

> [!Note] 插件名片
> - 插件名称：Lilypond
> - 插件作者：DOT-ASTERISK
> - 插件说明：渲染 Lilypond 模板。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dot-asterisk-nl/obsidian-lilypond)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lilypond)

## 概述

渲染 Lilypond 模板。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dot-asterisk-nl/obsidian-lilypond/main/README.md)
>

---

## Readme(翻译）

下面是 [[lilypond]] 插件的自述翻译

# Obsidian Lilypond 插件

由 Stardust ✨ 创建。我已获得完全授权来维护此项目，但不拥有完全的权利。全部权利归他们所有。

附加的软件许可可能不正确，请自行决定是否使用。

这是什么？

Obsidian Lilypond 插件有一个简单的功能，即允许在 Obsidian 中渲染 [lilypond](https://en.wikipedia.org/wiki/LilyPond)！🎵

设置

确保您已经安装了 [Lilypond](https://lilypond.org/)。在设置中有一个名为 "Lilypond Path" 的选项。这个选项必须设置为 `lilypond` 可执行文件的路径。Linux 的默认路径是 `/usr/bin/lilypond`，Windows 的默认路径是 `C:\Program Files (x86)\LilyPond\usr\bin\lilypond-windows.exe`。

如何使用

在您的 markdown 文件中编写一个代码块，如下所示：

	```lily
		\score{
			\relative c' {a}
			\layout {}
		}
	```

该插件允许在此时使用任何类型的 lilypond 代码。

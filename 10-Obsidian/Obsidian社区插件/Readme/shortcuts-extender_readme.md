---
uid: 2023080322264643
title: Obsidian 插件：【Readme】Shortcuts extender
tags: ['快捷键', 'obsidian插件', 'readme']
description: 使用快捷键输入特殊符号而无需切换语言
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Shortcuts extender

> [!Note] 插件名片
> - 插件名称：Shortcuts extender
> - 插件作者：kitchenrunner
> - 插件说明：使用快捷键输入特殊符号而无需切换语言
> - 插件分类：['快捷键', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ryjjin/Obsidian-shortcuts-extender)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?shortcuts-extender)

## 概述

使用快捷键输入特殊符号而无需切换语言



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryjjin/Obsidian-shortcuts-extender/master/README.md)
> 

---

## Readme(翻译）

下面是 [[shortcuts-extender]] 插件的自述翻译


# Obsidian快捷键扩展

到目前为止，该插件的三个主要功能是：
- 通过按下快捷键来更改文本的标题级别
- 清除所选文本的标记
- 分配快捷键以输入特殊字符 - 这样，如果您在非英语语言中编写笔记，您可以完全使用markdown标记。

更改标题级别

要更改文本的标题级别，只需将光标放在要更改标题级别的行上。
使用键盘快捷键指定标题级别：
- <`Ctrl` + `1`> 用于标题1
- <`Ctrl` + `2`> 用于标题2
- <...>
- <`Ctrl` + `6`> 用于标题6

清除所选文本的标记

使用`Ctrl` + `0`清除所选文本的标记：只清除行的初始字符，例如标题、编号和无编号列表、引用的标记字符。

通过这种方式，您可以清除指针当前所在位置的标记，并清除所选文本中所有行的标记。

使用``Ctrl + `（反引号）``来切换代码块。如果您选择一个代码块，您可以将该块替换为仅内部代码。如果您选择代码并按下``Ctrl + `（反引号）``，则可以创建一个代码块。

为输入特殊的标记符号，如果你在写非英语的笔记时，可能需要频繁切换布局。这个插件允许你为最常用的特殊字符分配键盘快捷键。

目前，已经分配了以下键盘快捷键：
- `Alt` + `1` - `7` 输入 `!`, `@`, `#`, `$`, `%`, `^`, `&` 符号
- `Alt` + cyrillic `х` 或 `ъ` (或 EN `[` 和 `]`) 输入 `[``]`
- `Alt` + `Shift` + cyrillic `х` 或 `ъ` (或 EN `{` 和 `}`) 输入 `{``}`
- `Alt` + cyrillic `б` 或 `ю` (或 EN `,` 和 `.`) 输入 `<``>`
- `Alt` + cyrillic `ё` 输入代码框
- `Alt` + `Shift` + cyrillic `ё` (或 EN `~`) 输入用于Python代码的代码框
- `Alt` + `Shift` + `\` 输入 `|` 符号

如果你在先前选择了文本的情况下输入括号、比较符号或代码框，则文本将被括起来（对于方括号，会立即放置一对）

> Mac用户的通知：
>
> 由于Mac键盘有很多带有`Alt`符号的内置快捷键，许多快捷键需要重新更改。但是Mac用户不需要此插件的部分快捷键以提高工作效率。

## 附加功能

如果您通过<`Alt` + `Shift` + `~`>输入Python代码的代码围栏-新的字符串将被添加，并且结果将如下所示：

```py
<您选择的Python代码>
```

此外，您还可以使用<`Alt` + `-`>从选定的文本创建列表。

如果选定的文本已经是一个列表，则列表级别将增加1，就好像您在每个列表项前面输入了一个制表符。

## 安装说明

您可以通过Obsidian中的Community Plugins选项卡安装插件。
对于手动安装，请将`manifest.json`和`main.js`文件放置在您的`<vault>/.obsidian/plugins/`文件夹中。

您可以在[GitHub页面上打开问题](https://github.com/ryjjin/Obsidian-shortcuts-extender/issues)或通过@kitchenrunner在[Obsidian Discord服务器](https://discord.com/?utm_source=Discord%20Widget&utm_medium=Logo)上与我联系。




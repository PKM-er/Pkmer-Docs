---
uid: 20230430194810
title: Obsidian 插件：Cmenu 添加一个类似 Word 的工具栏
tags: [Obsidian, 插件, 工具栏]
description: Obsidian 插件：cmenu 提供一个类似word工具栏，以获得更流畅的写作/编辑体验
author: cuman
type: other
draft: false
editable: false
modified: 20230825094003
---

# Obsidian 插件：Cmenu 添加一个类似 Word 的工具栏

> [!Note] 插件名片
> - 插件名称：Cmenu
> - 插件作者：chetachiezikeuzor
> - 插件说明：提供一个 mini 工具栏，以获得更流畅的写作/编辑体验✍🏽。
> - 插件分类：[' 编辑工具 ', ' 效率 ', ' 界面相关 ', 'obsidian 插件 ']
> - 插件项目地址：[chetachiezikeuzor/cMenu-Plugin](https://github.com/chetachiezikeuzor/cMenu-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cmenu-plugin)

## 概述

![image.png](https://cdn.pkmer.cn/images/202304301950795.png!pkmer)

cMenu 通过添加一个工具栏，并集成了一些常用的 md 语法命令，让用户无需记住快捷键即可在工具栏中选择 md 语法，从而获得更流畅的写作/编辑体验。

==注意：此插件已有替代品，基于 cmenu 二次开发的 [[editing-toolbar]]==

## 特性&效果

![image.png](https://cdn.pkmer.cn/images/202304302129195.png!pkmer)

 这是一款方便你编辑内容的浮动小工具，它针对笔记内容为了提供了加粗、斜体、删除线、下划线、上标、下标、代码、代码块、引用等功能，方便你对笔记进行操作。同时软件现在还支持自定义更多的菜单功能。

 其中 Cmenu 内置了几个命令分别是

 - toggle-bold 加粗
 - toggle-italics 斜体
 - toggle-strikethrough 删除线
 - underline 下划线
 - superscript 上标
 - subscript 下标
 - toggle-code 行内代码
 - codeblock 代码块
 - toggle-blockquote 引用

通过 cmenu 可以很方便的把 obsidian 的其它命令添加成按钮，减少记忆大量快捷键的不便。

![image.png](https://cdn.pkmer.cn/images/202304302306733.png!pkmer)

## 使用

 在插件商城安装即可使用，这里需要说明一点的是如果开启了堆叠模式，cmenu 工具栏的位置显示不正确，需要在设置中开启工具栏追加方法为 `body`

使用便捷性

该插件专为需要简单文本编辑器来帮助标记笔记的记笔记者而设计。cMenu 解决了需要记住众多热键和/或使用多次按键才能获得所需标记的问题。当您使用 cMenu 时，您只需要专注于写作！

如何工作

通过 cMenu 的最新更新，您可以将几乎任何 Obsidian 命令库中的命令添加到菜单栏中。默认情况下，菜单栏将包含以下命令：切换加粗、切换斜体、切换删除线、cMenu：切换下划线、cMenu：切换上标、cMenu：切换下标、切换代码、cMenu：切换代码块和切换引用。

正如您所看到的，cMenu 向 Obsidian 的命令库添加了四个新命令，并修改了 Obsidian 的十四个文本编辑命令。这些命令被添加到一个命令数组中，然后在生成 cMenu 模态框时读取。如果您想要删除和/或添加新的命令，可以在 cMenu 设置面板中进行操作。使用亮色按钮（您的强调颜色）将新命令添加到菜单中。使用灰色按钮将它们从菜单中删除。当您添加/删除新命令时，您将在控制台中看到一条消息，指示该命令的状态。在最新的更新 [1.1.2](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.2) 中，每次添加或删除命令时，cMenu 都会重新加载。无需关闭当前笔记。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu.gif)

强烈建议与 cMenu 一起使用插件和。例如：我有一个生成国际象棋开局“阿列欣防御”的模板。使用 Hotkeys for Templates，我可以选择将此模板添加到 Obsidian 的命令库中。现在它在命令库中，我可以选择将此命令附加到 cMenu 中。这意味着您现在可以将几乎任何内容添加到 cMenu 中，这使其更加强大！

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/chesser%20cMenu.gif)

cMenu 还有一些样式上的变化，也可以进行自定义。对于使用插件的用户，您现在可以将 cMenu 的附加方法更改为“body”。这样，cMenu 将不再附加到工作区域，而是附加到应用程序的主体。这是当前与存在的问题的一种解决方法，但我正在积极寻找更好的解决方案。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu-sliding-panes.gif)

使用 cMenu，您可以更改设计美学。玻璃拟态是一种相当流行的设计趋势，所以我想“为什么不将其添加到 cMenu 中呢？”您可以选择为 cMenu 使用“玻璃”样式，这使其具有独特的外观。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/glass-cMenu.gif)

## cMenu 状态栏菜单

通过新的 [1.1.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.0) 更新，您可以控制 cMenu 的底部值，以及切换隐藏 cMenu 和添加/删除新的命令项。删除按钮将删除最近添加的命令。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu%20status%20bar%20menu.gif)

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu.png)

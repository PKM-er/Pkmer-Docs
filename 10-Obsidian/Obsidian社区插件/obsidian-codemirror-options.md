---
uid: 20230608161514
title: Obsidian 插件：CodeMirror Options 强化输入和编辑体验
tags: [Obsidian, 插件, CodeMirror, 代码高亮, 美化, 编辑体验]
description: Obsidian 插件：CodeMirror Options 强化输入和编辑体验
author: OS
type: basic
draft: false
editable: false
modified: 20230608170256
---

# Obsidian 插件：CodeMirror Options 强化输入和编辑体验

## 概述

该编辑器提供了一个所见即所得的界面，似乎成为了现在面向用户最佳的体验方式，尤其是当你还不熟悉 Markdown 语法的时候。

Obsidian CodeMirror Options 是一种非常适合用来编辑和渲染 Markdown、LaTeX、HTML 和 CSS 等文本文件的编辑器，它有着出色的可视化、实时渲染和进一步增强编辑体验的功能。如果您需要在编辑文本时提高效率和质量，那么它是一个不错的选择。

> [!Note] 插件名片
> - 插件名称：CodeMirror Options
> - 插件版本：0.9.5
> - 插件作者：NothingIsLost
> - 插件描述：强化代码输入和编辑体验
> - 插件项目地址：[点我跳转](https://github.com/nothingislost/obsidian-codemirror-options)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-codemirror-options)

## 效果&特性

- WYSIWYG/Live Preview markdown 编辑体验【官方有类似支持了】
- 实时渲染部分代码块的编辑模式
- 实时渲染内联 HTML
- 将回链面板嵌入文档页脚【官方有类似支持了】
- 实时渲染块和内联 Latex
- 在编辑模式下增强的 CSS 选择器，类似于 Contextual Typography 插件对预览模式的处理
- 统一的语法高亮显示，支持完整的主题定制

## 使用

- 安装并开启插件后，即可生效。

### 强化代码域的体验

这个插件有很多奇妙的用途，这里介绍一种强化高亮配色的用法，如果你嫌弃安装插件麻烦，或者有其他，问题也可以参考 [[Obsidian样式-美化代码域对编程语言的样式展示]]

但是如果希望有多少样式可选，主流编程语言的配色方案不同该如何选择呢？

可以在 CodeMirror Options 插件的设置中，打开 `Use CodeMirror for syntax highlighting in preview mode` ，此设置通过使用 CodeMirror 在编辑模式和预览模式下高亮显示代码，从而创建了一致的高亮显示效果。

> [!Tip] 通俗理解
> - 因为 Obsidian 的编辑器是基于 CodeMirror 实现的，所以这个插件实际上帮助你支持了 CodeMirror 的配色方案

- 在预览模式下使用 CodeMirror 进行语法高亮显示
- 在预览模式下为代码块显示行号：此设置将在预览模式下的代码块中添加行号。【OB 官方已经支持此功能】
- 在预览模式下为代码块添加复制按钮：此设置将在代码块底部左侧添加复制按钮，并在代码块悬停时显示。【OB 官方已经支持此功能】
- 启用在预览模式下为所有 PRE 块添加复制按钮： 此设置将在任何 PRE 元素中添加复制按钮。这可能会对某些呈现 PRE 块的插件产生负面影响。

配色方案，支持和 [[obsidian-style-settings]] 联动，如果你打开了 `Use CodeMirror for syntax highlighting in preview mode` 选项，并同时安装了 style settings 插件，那么可以进入 style settings 插件中设置配色方案。

![image.png](https://cdn.pkmer.cn/images/20230608165225.png!pkmer)

- 可以选择一些默认的配色方案
- 也可以在配色方案下，基于编程语言中的，定义、变量、数字、符号、运算符等来自定义样式颜色

### 其他设置

- 启用编辑模式语法高亮主题
- 应用语法高亮主题到编辑模式下的代码块。默认主题是 Material Pale Night，但可以通过 Style Settings 插件获得其他主题。
- 启用预览模式语法高亮主题
- 应用语法高亮主题到预览模式下的代码块。默认主题是 Material Pale Night，但可以通过 Style Settings 插件获得其他主题。

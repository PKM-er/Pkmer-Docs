---
uid: 20240603103524
title: Obsidian 插件：Quick Latex for Obsidian
tags: ['数据处理', '编辑工具', '学习与教育', 'obsidian插件']
description: 一款简单的插件，用于简化和加速Latex数学输入。
author: Obsidianer,AI
type: auto
draft: false
editable: false
modified: 20240704232751
---

# Obsidian 插件：Quick Latex for Obsidian

> [!Note] 插件名片
> - 插件名称：Quick Latex for Obsidian
> - 插件作者：joeyuping
> - 插件说明：一款简单的插件，用于简化和加速 Latex 数学输入。
> - 插件分类：[' 数据处理 ', ' 编辑工具 ', ' 学习与教育 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/joeyuping/quick_latex_obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-latex)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/README.md)

![Quick Latex for Obsidian](https://cdn.pkmer.cn/covers/quick-latex.gif!pkmer)

## 概述

Obsidian 的 Quick Latex 插件是一个简单的插件，用于简化和加速 LaTeX 数学输入。它提供了多种快捷方式来加快 LaTeX 数学的输入速度。插件的功能包括自动关闭\$ 符号并在\$\$ 符号之间移动光标，自动关闭{}、[] 和 () 括号，自动在\sum 后添加\limits，自动放大包含\sum、\int 或\frac 的括号，自动在上标和下标后用{}括起表达式，用\$ 符号将选定的表达式括起来，用/代替\frac{}{}进行自动分数，快速插入对齐块和矩阵块，用 Tab 和 Shift-Tab 在括号之间进行快速跳转，以及自定义快捷方式。这个插件可以帮助用户更方便地输入 LaTeX 数学公式，提高工作效率。

## 基础快速键入

- 输入 `$` 将自动以 `$` 结尾并将光标移到 `$$` 符号之间
- 自动补全各种括号
	- - 输入“ \{ ”，“ \[ ”，和“ ( ”将补全结尾
- 在“ \\sum”后自动添加“\\limits”
- 自动放大包含 \\sum、\\int 或 \\frac 的括号
	- " 放大 " 指将小的闭包括号变成大的闭包括号
- 自动用{} 将上标和下标后的表达式括起来
- 用数学符号括起选定的表达式
	- 选中一个表达式并用括号括起来
- 自动分数 - 输入“/”而不是 \\frac{}{}。
- 对齐块的快捷方式
	- 使用 Alt+Shift+A
	- 选中多行表达式，并使用 Alt+Shift+A，但仍需手动分行排版整理
- 矩阵块的对齐方式

![Clip_2024-06-24_17-46-32.png](https://cdn.pkmer.cn/images/Clip_2024-06-24_17-46-32.png!pkmer)

- 矩阵块的快捷方式
	- 使用 Alt+Shift+M
	- Tab 插入&，横向
	- Enter 插入//，纵向
	- 可以更改参数，例如 matrix、bmatrix、Bmatrix、vmatrix、Vmatrix

![Clip_2024-06-24_18-09-06.png](https://cdn.pkmer.cn/images/Clip_2024-06-24_18-09-06.png!pkmer)

- Tab 和 Shift-Tab 在括号之间跳转

## 自定义键值对

- 该插件还提供了自定义键值对填写 Latex 功能，能相对简单地自定义公式填写
- 在代码片段中，如果包含多个参数，请使用“#tab”。例如，bi:\\binom{#cursor}{#tab}，键入 bi 和空格键后，简写将扩展为 \binom{|}{#tab}，光标位于第一个括号中。在键入第一个括号中的值后，按 tab 键跳转到 #tab 位置继续输入。

![Clip_2024-06-22_22-50-55.png](https://cdn.pkmer.cn/images/Clip_2024-06-22_22-50-55.png!pkmer)

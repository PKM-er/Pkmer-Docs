---
uid: 2023080322165778
title: Obsidian 插件：【Readme】Cycle through Panes
tags: ['界面相关', 'obsidian插件', 'readme']
description: 使用`ctrl + Tab`循环浏览你打开的窗格，就像在浏览器中浏览标签页一样！官方已经支持此功能
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Cycle through Panes

> [!Note] 插件名片
> - 插件名称：Cycle through Panes
> - 插件作者：Vinadon & phibr0
> - 插件说明：使用 `ctrl + Tab` 循环浏览你打开的窗格，就像在浏览器中浏览标签页一样！官方已经支持此功能
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/phibr0/cycle-through-panes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cycle-through-panes)

## 概述

使用 `ctrl + Tab` 循环浏览你打开的窗格，就像在浏览器中浏览标签页一样！官方已经支持此功能

![Cycle through Panes](https://cdn.pkmer.cn/covers/cycle-through-panes_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/phibr0/cycle-through-panes/master/README.md)
>

---

## Readme(翻译）

下面是 [[cycle-through-panes]] 插件的自述翻译

# 在面板之间循环切换 ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/phibr0/cycle-through-panes) ![](https://tokei.rs/b1/github/phibr0/cycle-through-panes) ![GitHub all releases](https://img.shields.io/github/downloads/phibr0/cycle-through-panes/total)

__此插件使用了 [Vinzent](https://github.com/Vinzent03) 的代码__

与 Mr. Jackphils 的 Jump to Link 插件和 Vim 按键绑定结合使用，此插件允许您完全不使用鼠标来控制 Obsidian！

如何使用

有两组不同的命令：

- 按照从左到右的标签顺序导航。与原生的 Obsidian 命令相比，它们忽略了窗格/标签组，并且在每个窗口中工作。
  - " 转到右侧标签 " 通常设置为 <kbd>Ctrl</kbd> + <kbd>Tab</kbd>
  - " 转到左侧标签 " 通常设置为 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>
- 按照它们上次使用的顺序导航。这些命令支持像浏览器一样按住 <kbd>Ctrl</kbd> 键。
  - " 转到上一个标签 " 通常设置为 <kbd>Ctrl</kbd> + <kbd>Tab</kbd>
  - " 转到下一个标签 " 通常设置为 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>

请注意，此插件不设置任何默认热键，因此您可以选择您喜欢的行为。

## 第二种模式的展示

![展示](https://raw.githubusercontent.com/phibr0/cycle-through-panes/master/showcase.gif)

### 重要

为了防止导航到不需要的视图类型，设置中有一个列表，您可以在其中指定应循环浏览的视图类型。还有其他命令可以自动将当前视图类型添加到列表中或从列表中删除。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/cycle-through-panes/` 中。

### API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>

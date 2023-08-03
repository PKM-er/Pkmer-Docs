---
uid: 2023080322174075
title: Obsidian 插件：Editor Commands Remap
tags: ['快捷键', 'obsidian插件', 'readme']
description: 将热键映射到编辑器命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Editor Commands Remap

> [!Note] 插件名片
> - 插件名称：Editor Commands Remap
> - 插件作者：cactus5
> - 插件说明：将热键映射到编辑器命令。
> - 插件分类：[' 快捷键 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/c4ctus5/editor-commands-remap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?editor-commands-remap)

## 概述

将热键映射到编辑器命令。

![Editor Commands Remap](https://cdn.pkmer.cn/covers/editor-commands-remap.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/c4ctus5/editor-commands-remap/master/README.md)
>

---

## Readme(翻译）

下面是 [[editor-commands-remap]] 插件的自述翻译

# 编辑器命令重映射：Obsidian 插件

这个插件为 [Obsidian](https://obsidian.md) 允许你将热键映射到 API 中可用的编辑器命令。

可用的命令有：

- `goUp`：向上移动光标一行
- `goDown`：向下移动光标一行
- `goLeft`：向左移动光标
- `goRight`：向右移动光标
- `goStart`：将光标移动到笔记的开头
- `goEnd`：将光标移动到笔记的末尾
- `indentMore`：缩进当前或选定的行
- `indentLess`：取消缩进当前或选定的行
- `newlineAndIndent`：创建一个新行并缩进光标
- `swapLineUp`：交换当前行和上面的行
- `swapLineDown`：交换当前行和下面的行
- `deleteLine`：删除当前行
- `toggleFold`：折叠或展开当前位置的项目
- `foldAll`：折叠所有内容
- `unfoldAll`：展开所有内容

**注意**：这些命令只在打开编辑器时可用。

**注意**：一些命令已经在 Obsidian 中可用，但为了完整起见，我仍然在这里添加了它们。

最初的想法是复制 [VSCode的Tabout扩展](https://github.com/albertromkes/tabout) 的行为，由 [Albert Romkes](https://github.com/albertromkes) 开发，但在 Obsidian 中无法将 `Tab` 映射为热键。

在研究 Obsidian API 时，我发现了编辑器命令，并认为能够为它们分配热键是一个好主意。

因此，为了*部分*复制 Tabout 的行为，只需将一个热键设置为 'goRight' 命令即可。

# 手动安装

您可以通过下载最新版本并将文件 `manifest.json` 和 `main.js` 复制到文件夹 `vaultFolder/.obsidian/plugins/editor-commands-remap` 中来手动安装此插件。

如何使用？

此插件不设置默认热键。

要设置热键，请转到“设置 > 热键”，然后搜索“编辑器命令重映射”。

![设置图像](./img/settings.png)

## 快捷键推荐

在移动光标时，按下 `Shift` 或 `Ctrl+Shift` 也会选择文本。因此，不建议使用 `Ctrl` 或 `Shift` 作为移动光标的热键修饰符。

推荐使用 `Alt` 作为修饰符。

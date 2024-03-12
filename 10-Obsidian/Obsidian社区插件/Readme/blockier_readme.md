---
uid: 20231220115812
title: Obsidian 插件：【Readme】Blockier
tags: ['obsidian插件', 'readme']
description: 额外的块编辑工具。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Blockier

> [!Note] 插件名片
> - 插件名称：Blockier
> - 插件作者：blorbb
> - 插件说明：额外的块编辑工具。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/blorbb/obsidian-blockier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blockier)

## 概述

额外的块编辑工具。

![Blockier](https://cdn.pkmer.cn/covers/blockier.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/blorbb/obsidian-blockier/master/README.md)

---

## Readme(翻译）

下面是 [[blockier]] 插件的自述翻译

# Obsidian Blockier

一个集合了多个小工具的插件，使得编辑区块（例如段落、项目符号、复选框等）更加便捷。

这个插件主要填补了其他插件中我没有找到的功能空缺。我强烈建议你也看看这些插件：

- [Code Editor Shortcuts](https://github.com/timhor/obsidian-editor-shortcuts)。
- 启用“向下移动行”和“向上移动行”的快捷键（内置）。
- 一个支持自定义复选框/引用框的主题，比如 [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin)。

## 特点

### 选择块

选择块命令（覆盖 <kbd>ctrl</kbd>/<kbd>cmd</kbd> <kbd>A</kbd>）会选择光标当前所在的块，但不包括块前缀，如项目符号 `-`、数字 `1.`、标题 `##`、引用 `>` 和复选框 `- [ ]`。

![select](https://cdn.pkmer.cn/covers/blockier_1_0.gif)

这也支持多个光标。如果光标选择跨越多行，块前缀将会被包括在内。

在块的开头（但在现有块前缀之后）输入其中一个块前缀将覆盖它。

![block-edit](https://cdn.pkmer.cn/covers/blockier_1_1.gif)

这仅适用于项目符号、编号列表和复选框。

自定义复选框和提示建议

一些主题（如 [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin)）具有自定义的复选框和提示。将光标放在复选框/提示位置上将显示一个建议列表。这些列表可以在设置中进行配置。

请注意，默认情况下禁用了复选框建议。在设置中启用它们。

![checkbox-suggest](https://cdn.pkmer.cn/covers/blockier_1_2.png!pkmer)

![callout-suggest](https://cdn.pkmer.cn/covers/blockier_1_3.png!pkmer)

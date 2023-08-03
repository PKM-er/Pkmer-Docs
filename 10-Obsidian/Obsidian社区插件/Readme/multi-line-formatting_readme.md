---
uid: 20230803231105
title: Obsidian 插件：Multi-line Formatting
tags: ['编辑工具', 'obsidian插件', 'readme']
description: 对所选文本应用格式，处理段落换行。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232541
---

# Obsidian 插件：Multi-line Formatting

> [!Note] 插件名片
> - 插件名称：Multi-line Formatting
> - 插件作者：nmady
> - 插件说明：对所选文本应用格式，处理段落换行。
> - 插件分类：[' 编辑工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nmady/obsidian-multi-line-formatting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multi-line-formatting)

## 概述

对所选文本应用格式，处理段落换行。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nmady/obsidian-multi-line-formatting/master/README.md)
>

---

## Readme(翻译）

下面是 [[multi-line-formatting]] 插件的自述翻译

## Obsidian 多行格式化插件

该插件旨在提供对整个选择区域的格式化，即使该选择区域中间有段落分隔符！然而，该插件是新的，并且只进行了有限的测试。我非常感谢您的耐心和错误报告！

## 使用方法

选择要格式化的文本，并使用命令**格式化，即使跨多行**（您可以在设置中更改此命令名称和要应用的格式）。请注意，不要在另一种类型的配对格式（例如粗体、斜体、高亮等）的中间开始但不结束选择，反之亦然。如果没有选择文本，该命令将“切换打开”格式化，以便您输入的内容将被格式化。

## 设置

默认情况下存在两种格式样式。要添加新的格式样式，请滚动到设置窗格底部（多行格式插件选项）并点击**添加格式样式**按钮。

对于每种格式样式，您可以输入要应用的**左侧**和**右侧**格式。您可以更改命令的**昵称**，以便命令面板中的名称更好地反映您选择的格式类型。

如果您希望能够选择大量文本，但不将格式样式应用于该选择中的标题，您可以切换**跳过标题**选项。

如果打开**如果选择为空，则对单词进行格式化**选项，这意味着如果没有选择文本，但光标接触或位于单词内（这里定义为非空白字符），则格式将出现在单词周围，而不仅仅是在光标周围，这是如果关闭此设置时发生的情况。（此切换是 0.4.0 版本的新功能。）

您可以通过点击任何样式的样式设置底部的**删除此样式**按钮来删除您不使用的格式样式。

### 快捷键

与其他 Obsidian 命令一样，您可以在**快捷键**选项中为多行格式插件生成的格式化样式命令分配快捷键（与插件选项分开），包括将通常的加粗（Ctrl + b）和斜体/强调（Ctrl + i）快捷键重新分配给它们的多行格式化命令。

限制

再次强调，这是一个经过有限测试的早期版本插件。请通过报告任何意外行为来帮助我改进它。

### Codeblocks

然而，该插件**不**设计用于与代码块一起使用。在大多数情况下，代码块部分将被跳过，但是应用于代码块和靠近代码块的任何部分的格式可能不正确，因为跳过依赖于 `MetadataCache`，该缓存可能不是最新的。此外，当选择包括嵌入在列表项或块引用中的代码块时，行为可能不如预期（实际上，处理嵌入的代码块尚未实现）。

欢迎报告错误和提出功能请求！

请告诉我如何改进这个插件。

### 致谢

非常感谢 **lynchjames**，他的 [Note Refactor Plugin](https://github.com/lynchjames/note-refactor-obsidian) 为本插件提供了基础，感谢 **THeK3nger** 提供的 [Obsidian Plugin Template](https://github.com/THeK3nger/obsidian-plugin-template)，感谢 [Lishid](https://github.com/lishid) 进行了有益的代码审查，以及感谢 [roshanshariff](https://github.com/roshanshariff) 提供的调试和重构帮助！

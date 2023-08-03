---
uid: 20230803231105
title: Obsidian 插件：RTL Support
tags: ['界面相关', '编辑器', 'obsidian插件', 'readme']
description: 为 Obsidian 添加了 RTL 支持。RTL 从右到左文本方向的语言，如阿拉伯语、希伯来语和波斯语。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232451
---

# Obsidian 插件：RTL Support

> [!Note] 插件名片
> - 插件名称：RTL Support
> - 插件作者：esm
> - 插件说明：为 Obsidian 添加了 RTL 支持。RTL 从右到左文本方向的语言，如阿拉伯语、希伯来语和波斯语。
> - 插件分类：[' 界面相关 ', ' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/esm7/obsidian-rtl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-rtl)

## 概述

为 Obsidian 添加了 RTL 支持。RTL 从右到左文本方向的语言，如阿拉伯语、希伯来语和波斯语。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/esm7/obsidian-rtl/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-rtl]] 插件的自述翻译

# Obsidian RTL 插件

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/esm7)

该插件为 [Obsidian](https://obsidian.md) 添加了可配置的 RTL（从右到左）支持。

它依赖于 [CodeMirror](https://codemirror.net/doc/manual.html) 的 RTL 支持，CodeMirror 是 Obsidian 使用的编辑器组件，并在其基础上包含了大量自定义代码，以提供在 Obsidian 中流畅的体验。

您可以为每个文件设置全局方向（LTR/RTL），或者使用自动模式，根据每行的第一个具有强方向性的字符来决定方向。

这是真正的功能：阿拉伯语、希伯来语和波斯语（波斯语）可以与 LTR 语言自由组合，并以您期望的方式呈现。

据我所知，这是目前任何 Markdown 编辑器提供的最全面的 RTL 支持。

许多编辑器提供的是全局设置而不是每个文档的设置 - 而该插件既支持每个文档的全局 LTR/RTL 设置，又支持自动模式，可以在同一笔记中混合多个方向。

## 使用方法

通过 Obsidian 的“第三方插件”窗格安装插件。

启用后，您将拥有一个“切换文本方向”命令（如果启用了命令面板插件，则可通过 Ctrl/Cmd+P 访问）。

**您可以将此命令映射到热键：**转到 Obsidian 的设置，点击热键，搜索“RTL”，然后设置您喜欢的键组合。

或者，您应该看到一个文本方向状态栏项，单击它将切换文档方向。

支持开发

如果您想支持此插件的开发，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/esm7)。

关于自动文本方向的说明

该插件的 1.0.0 版本引入了一种“自动”模式，它可以检测每行的方向，并在同一笔记中启用混合的 LTR/RTL。

这个机制基于几个月前添加的 CodeMirror 的“每行文本方向”支持，但它在很大程度上进行了调整，以达到最佳的用户体验（感谢@zoli 首先找出如何在编辑器插件中利用此功能！）

截至 2023 年 1 月，当引入此功能时，应将其视为实验性的；它可能在 100％的情况下无法完美工作。

## 设置

### 默认文本方向

这是在您没有设置显式文本方向的文件上使用的方向。

请注意，Obsidian 0.13.10 引入了基本的 RTL 支持。

对于严格的 RTL 模式，该插件使用与新支持相同的基本机制，但它添加了一些调整并通过文件覆盖设置。

为了使用户体验一致，该插件将 Obsidian 的编辑器窗格中的 RTL 设置与“默认文本方向”设置保持同步。

### 记住每个文件的文本方向

当启用时（默认情况下），当您更改文件的文本方向时，它将被保存。

每次打开该文件时，它都将使用相同的文本方向，而不管默认设置如何。

这在以下情况下非常有用：如果您的大多数笔记都是英文（因此您希望保持默认的 LTR），但您有一些阿拉伯语/希伯来语/波斯语（法尔西语）的笔记，并且您希望始终以 RTL 编辑它们。

如果禁用此设置，则所有笔记将以默认的文本方向加载。

如果您想忘记文件的文本方向并返回使用默认设置，请从 `VAULT_DIR/.obsidian/rtl.json` 中的映射中删除它。

### 前置事项方向

还可以使用 [前置事项](https://help.obsidian.md/Advanced+topics/YAML+front+matter) 来指定笔记的方向：

``` 
---
direction: rtl
---
```

前置事项方向会覆盖其他设置。

可以临时覆盖笔记的方向，而不考虑前置事项（例如，以不同的方式进行编辑或查看），但是下次加载笔记时，前置事项方向将始终被使用。

## 更新日志

### 1.0.0

**在 [@zoli](https://github.com/zoli) 的大力帮助下，并且遵循了几个月前在 CodeMirror 中添加的对此功能的支持，此版本引入了动态和自动的 RTL-LTR！**

据我所知，这种模式在没有任何伪影、光标问题或其他问题的情况下运行得非常好，但肯定还有一些我们没有测试过的边缘情况。

现在每个笔记都可以设置为 LTR、RTL 或 Auto，并且可以在插件设置中设置默认值。

而且，插件始终会记住每个文件的设置。

**其他改进：**

- 添加了一个带有当前方向（或“auto”）的状态栏项，并可以在设置中关闭。
- 对插件进行了一些常规维护工作，该插件最初是在 Obsidian 的 API 处于早期阶段时编写的，并包含了许多遗留代码。

### 0.3.0

**重要提示：此版本不再支持传统（CM5）的 Obsidian 编辑器。**

如果您仍在使用传统编辑器，直到 Obsidian 将其删除之前，您无法升级到此版本的插件。

**此版本对插件的工作方式进行了重大改进，修复了大部分已知的错误。**

- RTL / LTR 现在（再次）仅针对特定视图设置，而不是所有打开的窗格。
- 修复了与插件干扰 Obsidian 其他部分（例如 Community Plugin 视图）的所有已知错误。
- **插件现在可以在 Obsidian 移动版中使用**（仅在 Android 上进行了测试）。

### 0.2.2

- 修复了当默认设置为 RTL 时（由于 Obsidian 自己的样式）无法正确检测方向的问题。

### 0.2.1

- 修复了检测传统编辑器的问题。

### 0.2.0

- 完全支持 Obsidian 0.13.x 中引入的新编辑器（CM6）。

### 0.1.0

- 另一种处理 Home 和 End 键的方式，尝试使它们在 RTL 中的行为符合预期。
- 增加了通过前置元数据设置笔记方向的支持，如 [此处](https://github.com/esm7/obsidian-rtl/issues/24) 所请求的。
- 增加了一个可配置的选项，以右对齐 YAML 预览，如 [此处](https://github.com/esm7/obsidian-rtl/issues/25) 所请求的。

### 0.0.9

- 修复了与 Excalidraw 插件不兼容的问题，并改进了插件的技术行为（现在尝试不覆盖非 Markdown 视图）。

### 0.0.8

- 修复了上一个版本中的一个 bug，该 bug 会覆盖一些重要的 Obsidian 编辑行为（例如自动完成列表项目符号）。

### 0.0.7

- 改进了 RTL 中 Home 和 End 键（此时没有 Shift）的处理。它仍然不完美（CodeMirror 在这方面不擅长），但至少基本功能可以正常工作。
- 对最新的 Obsidian API 进行了一些适应。
- 现在可以配置笔记标题的方向（<https://github.com/esm7/obsidian-rtl/issues/15）。>

### 0.0.6

- 列表现在在 Markdown 和预览中正确地呈现为 RTL！
- RTL 笔记的标题现在也对齐到右边。
- 删除了调试日志。

### 0.0.5

支持从右到左的导出/打印：<https://github.com/esm7/obsidian-rtl/issues/8>

### 0.0.4

- 自动配对括号修补（<https://github.com/esm7/obsidian-rtl/issues/7）：在> CodeMirror 发布修复并 Obsidian 适应之前，插件在 RTL 模式下暂时禁用自动配对括号。
- 修复 Obsidian 在 RTL 模式下 Home/End 键的错误行为（<https://github.com/esm7/obsidian-rtl/issues/6）。>

### 0.0.3

- 预览模式中支持 RTL（从右到左）。

### 0.0.2

- 修复了 Windows 上的光标移动问题：<https://github.com/esm7/obsidian-rtl/issues/3>




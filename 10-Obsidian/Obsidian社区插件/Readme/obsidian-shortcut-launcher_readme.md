---
uid: 2023120719424398
title: Obsidian 插件：【Readme】Shortcut Launcher
tags: ['obsidian插件', 'readme']
description: 在Obsidian中使用自定义命令触发Apple Shortcuts应用中的快捷键。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Shortcut Launcher

> [!Note] 插件名片
> - 插件名称：Shortcut Launcher
> - 插件作者：MacStories
> - 插件说明：在 Obsidian 中使用自定义命令触发 Apple Shortcuts 应用中的快捷键。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/macstories/obsidian-shortcut-launcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-shortcut-launcher)

## 概述

在 Obsidian 中使用自定义命令触发 Apple Shortcuts 应用中的快捷键。

![Shortcut Launcher](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/macstories/obsidian-shortcut-launcher/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-shortcut-launcher]] 插件的自述翻译

# Obsidian 快捷方式启动器

![](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher_1_0.png!pkmer)

从 Obsidian 作为自定义命令触发 Apple 的快捷方式应用程序中的快捷方式。

Obsidian 快捷方式启动器（简称为 'OSL'）允许您触发快捷方式并将 Obsidian 中的值作为输入传递。在 iOS 和 iPadOS 上，使用 Apple 官方的快捷方式 URL 方案从 Obsidian 触发快捷方式；在 macOS 上，OSL 可以在后台运行快捷方式 - 而无需打开快捷方式应用程序。

![](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher_1_1.png!pkmer)

该插件**需要 iOS 15、iPadOS 15 或 macOS Monterey**。

安装 Obsidian 快捷启动器

您可以在 **Obsidian 的社区插件** 部分找到该插件。只需搜索“Obsidian 快捷启动器”，安装它，然后启用插件即可在 Obsidian 中使用它。

为快捷方式创建启动器

![在Obsidian中为快捷方式创建启动器。](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher_1_2.png!pkmer)

OSL 通过为您想要在 Shortcuts 应用程序中运行的快捷方式创建 " 启动器 " 来工作。这些启动器显示为 Obsidian 中的单独命令。

您可以通过点击 "New" 按钮在 OSL 的设置中为快捷方式创建新的启动器。创建新的启动器时，您需要配置三个主要字段：

* **命令名称**：启动器的名称。这将显示为 Obsidian 中的一个命令。这个名称可以是任何您想要的，不需要与快捷方式的名称匹配。
* **快捷方式名称**：您想要在 Shortcuts 应用程序中启动的快捷方式的确切名称。
* **输入类型**：您想要从 Obsidian 传递到 Shortcuts 应用程序的输入。有关更多详细信息，请参见下一节。

从 Obsidian 传递输入值

Obsidian 快捷启动器允许您通过 Obsidian 发送的输入文本运行快捷方式。您可以从 Obsidian 传递七种不同的输入类型到快捷方式：

* **选定的文本**：来自 Obsidian 的当前文本选择。
* **当前段落**：光标当前所在段落的文本。（在阅读模式下不可用。）
* **整个文档**：当前文档的全部文本。
* **文档链接**：当前文档的 Obsidian URL。
* **文档名称**：当前文档的名称，不包括文件扩展名。
* **文档路径**：Obsidian 保险库中当前文档的相对路径。
* **选定的链接/嵌入内容**：光标下的 [[内部链接]] 引用的文件的内容。如果内部链接指向一个笔记，将笔记的全部文本作为输入传递给快捷方式；如果内部链接指向一个附件（例如图像），文件将首先使用 base64 编码，然后作为 base64 编码的文本传递给快捷方式。（在阅读模式下不可用。）

以下是一个示例，其中 Obsidian 命令将当前文档的名称传递给了 Shortcuts 应用中的一个快捷方式：

![](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher_1_3.png!pkmer)

以下是您如何从 Obsidian 接收附件并在 Shortcuts 中使用 base64 解码它们的示例：

![](https://cdn.pkmer.cn/covers/obsidian-shortcut-launcher_1_4.png!pkmer)

使用自定义分隔符传递多个值

OSL 还提供了一个“多个”选项，可以一次将多个值传递给快捷方式。当您选择此选项时，可以选择多个输入类型，这些类型将一起使用分隔符一次性传递给快捷方式。

默认情况下，分隔符字符是 `,`（逗号），但您可以将其更改为任何您想要的字符。要在快捷方式中访问多个输入值，请使用“拆分文本”操作，并为自定义分隔符输入一个值。

在 Obsidian 中使用输入运行快捷方式

OSL 将文本传递给快捷方式，可以在快捷方式应用程序的默认“快捷方式输入”变量中使用。对于以 base64 编码的文本传递的文件，您需要首先使用快捷方式中的专用“解码 Base64”操作解码输入。

由于系统限制，在 iOS 和 iPadOS 15 上，OSL 需要离开 Obsidian 并打开快捷方式应用程序来运行快捷方式。这是因为在 iOS 和 iPadOS 15 上，只有其他应用程序可以通过 URL scheme 调用快捷方式。

在 macOS Monterey 上，OSL 可以在后台运行快捷方式 - 完全不需要打开快捷方式应用程序 - 这要归功于 shell 命令。在 Mac 上使用 OSL 时，您可以在不离开 Obsidian 的情况下将快捷方式触发为命令 - 这是一个完美补充该应用程序的强大体验。

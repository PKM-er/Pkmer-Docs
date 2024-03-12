---
uid: 20231220112631
title: Obsidian 插件：【Readme】Auto Anki
tags: ['obsidian插件', 'readme']
description: 使用人工智能来自动化Anki中的间隔重复卡片的创建。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Anki

> [!Note] 插件名片
> - 插件名称：Auto Anki
> - 插件作者：ad2969
> - 插件说明：使用人工智能来自动化 Anki 中的间隔重复卡片的创建。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ad2969/obsidian-auto-anki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-anki)

## 概述

使用人工智能来自动化 Anki 中的间隔重复卡片的创建。

![Auto Anki](https://cdn.pkmer.cn/covers/auto-anki.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ad2969/obsidian-auto-anki/master/README.md)

---

## Readme(翻译）

下面是 [[auto-anki]] 插件的自述翻译

# Obsidian 自动 Anki

这是一个为 [Obsidian.md](https://obsidian.md/) 设计的插件，使用 OpenAI 的 GPT LLM 自动生成 Anki 的闪卡。

> 该插件**仅适用于桌面版**。

该插件在 Obsidian 中引入了两个新的“命令”：

- _将当前文件导出到 Anki_
- _将选中的文本导出到 Anki_（仅在打开的 `可编辑` 窗口中可用 - 也就是说，您需要打开一个文档，并且它需要处于 `编辑` 模式）

可以通过以下热键（默认）在 Obsidian 中访问命令面板：`CMD` + `SHIFT` + `P`

![command-palette-hotkey](https://cdn.pkmer.cn/covers/auto-anki_2_0.png!pkmer)。

如果需要，您可以为这两个新命令设置自己的热键。

这两个新命令的样式如下：

![command-palette-new-commands](https://cdn.pkmer.cn/covers/auto-anki_2_1.png!pkmer)

## 插件要求

以下是插件工作所需的要求：

- [OpenAI](https://openai.com/) 账户和 [OpenAI API密钥](https://platform.openai.com/account/api-keys)
- 本地安装的 [Anki](https://apps.ankiweb.net/) 程序
- [Anki Connect](https://github.com/FooSoft/anki-connect)，用于为 Obsidian 暴露一个 Anki API，以便进行调用。

## 插件设置

1. 下载并安装插件（选项 > 社区插件）
2. 确保您具备 [插件要求](#插件要求) 中的所有要求
3. 转到插件设置（设置 > 社区插件 > Auto Anki），并确保适当设置以下字段：
    - Anki 端口（默认为 `8765`）
    - OpenAI API 密钥
4. 尽情使用！

功能细节

#### 将整个文件导出到 Anki（命令：_将当前文件导出到 Anki_）

此命令允许您使用当前打开的文件的内容发送到 GPT 并生成一系列问题和答案。

![prompt-1](https://cdn.pkmer.cn/covers/auto-anki_2_2.png!pkmer)

或者，您还可以指定要为每个问题生成的 _ 备选项数量 _。这样可以让 GPT 生成的“问题和答案”更加多样化，并且可以在更多的备选“问题和答案”中进行选择。选择备选项数量最适合较小的笔记。

![prompt-2](https://cdn.pkmer.cn/covers/auto-anki_2_3.png!pkmer)

从生成的“问题和答案”列表中，您可以选择您想要的问题。

在选择完毕后，您选择的“问题和答案”将根据插件设置中的详细信息自动导入所选问题到 Anki。

> 如果您正在生成大量的问题或大量的问题备选项，可能需要一些时间。
指示器将显示 `auto-anki` 当前是否正在生成您的闪卡。这将显示在屏幕底部的状态栏中，如下所示：

![status-bar-running](https://cdn.pkmer.cn/covers/auto-anki_2_4.png!pkmer)

#### 将高亮文本导出到 Anki（命令：_将高亮文本导出到 Anki_）

此命令类似于“将整个文件导出到 Anki”，但它允许您使用当前高亮显示的文本（而不是整个文件）发送到 GPT 并生成问题和答案列表。（重要提示：文件需要处于“编辑”模式才能使用该命令）。

动机

由于我每天阅读和观看的东西太多，最近我发现自己很难记住所消化的知识。因此，我一直在努力寻找新的方法来增强我的自我教育。我了解到了 [间隔重复](https://en.wikipedia.org/wiki/Spaced_repetition)，并希望尝试使用 [Anki](https://apps.ankiweb.net/) 来补充我的日常学习。作为长期使用和喜爱 [Obsidian.md](https://obsidian.md/) 作为我的 PKM（个人知识管理）的用户，我想看看是否有办法将间隔重复与我当前的 Obsidian vaults 自动化学习结合起来。

我查看了其他 [类似的插件](https://github.com/Pseudonium/Obsidian_to_Anki)，它们试图将 Obsidian 连接到 Anki，但很多都要求你改变在 Obsidian 中编写笔记的方式，或者看起来不够自动化。这个插件的作用是自动创建 ["闪卡式"问题和答案](https://en.wikipedia.org/wiki/Leitner_system)，而无需为此目的格式化你的笔记。

当涉及到间隔重复、Anki 或学习技巧的一般世界时，我认为自己是一个完全的初学者，所以我非常乐意听取建议、讨论或任何关于这个主题的评论！

问题、讨论等

我主要在 [问题](https://github.com/ad2969/obsidian-auto-anki/issues) 中跟踪与此插件相关的所有事项。请随时在那里报告错误和/或请求！

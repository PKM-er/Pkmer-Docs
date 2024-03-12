---
uid: 20240312193744
title: Obsidian 插件：【Readme】Augmented Canvas
tags: ['obsidian插件', 'readme']
description: Augment Canvas with AI features.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Augmented Canvas

> [!Note] 插件名片
> - 插件名称：Augmented Canvas
> - 插件作者：Léopold Szabatura
> - 插件说明：Augment Canvas with AI features.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MetaCorp/obsidian-augmented-canvas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?augmented-canvas)

## 概述

Augment Canvas with AI features.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MetaCorp/obsidian-augmented-canvas/main/README.md)

---

## Readme(翻译）

下面是 [[augmented-canvas]] 插件的自述翻译

【机翻】

# 黑曜石增强画布

一个用于 [Obsidian](https://obsidian.md) 的插件，通过人工智能功能“增强”Obsidian 画布。

您需要一个 OpenAI API 密钥来使用这个插件，您可以在设置中输入它。该插件仅适用于 OpenAI 的最新模型：`gpt-4-1106-preview`

## 主要特点

此插件将三个操作添加到 Canvas 视图中笔记的菜单中。

1. 在特定笔记上询问 GPT，笔记内容将被用作提示。该笔记可以是文本笔记、md 文件或 PDF 文件。在提示笔记下方将创建一个包含 AI 响应的新笔记。

![增强-Canvas-询问AI](https://cdn.pkmer.cn/covers/augmented-canvas_2_0.gif!pkmer)

1. 关于笔记提出问题。还使 GPT 生成一个新笔记，问题放置在两个笔记之间的链接上。

![增强-Canvas-询问问题与AI](https://cdn.pkmer.cn/covers/augmented-canvas_2_1.gif!pkmer)

1. 使用 GPT 在特定笔记上生成问题。生成的问题帮助您更轻松地深入了解笔记主题。

![增强-Canvas-AI生成的问题](https://cdn.pkmer.cn/covers/augmented-canvas_2_2.gif!pkmer)

笔记之间的链接用于创建发送给 GPT 的聊天历史记录。

## 附加功能

- 插件在画布中的笔记上下文菜单中添加了一个创建图像的操作。
- 插件添加了一个名为“在文件夹上运行系统提示”的命令。读取该文件夹及其子文件夹中存在的所有 md 和画布文件，并将响应插入到当前画布中。
- 插件添加了一个名为“插入系统提示”的命令。此命令将选择的系统提示插入到当前画布中。系统提示来自 [f/awesome-chatgpt-prompts (github.com)](https://github.com/f/awesome-chatgpt-prompts)。您还可以在设置中添加自己的系统提示。

![增强画布-插入系统提示](https://cdn.pkmer.cn/covers/augmented-canvas_2_3.gif!pkmer)

- 插件可以为您创建可以使用 [间隔重复插件](https://github.com/st3v3nmw/obsidian-spaced-repetition) 复习的抽认卡。右键单击一个笔记以创建抽认卡。然后等待 GPT 响应，将在设置中指定的文件夹内创建一个新文件。然后您可以复习这个特定的牌组。考虑在间隔重复插件的设置中激活“将文件夹转换为牌组和子牌组？”选项。

![增强画布-创建抽认卡](https://cdn.pkmer.cn/covers/augmented-canvas_2_4.gif!pkmer)

- 插件添加了一个名为“插入相关问题”的命令。此命令将 AI 生成的问题插入到当前画布中。插件会读取并发送您的历史活动到 GPT，读取最后修改的 X 个文件（在设置中可配置）。
- 插件在边缘上下文菜单中添加了一个重新生成 AI 响应的操作。

## 隐私

发送到 GPT 的内容可以通过切换“调试输出”设置来查看。然后消息会出现在控制台中。

## 安装

- 尚未准备好上市
- 可通过 [Brat](https://github.com/TfTHacker/obsidian42-brat) 插件安装
    您可以在 Ric Raftis 的文章中了解如何操作：<https://ricraftis.au/obsidian/installing-the-brat-plugin-in-obsidian-a-step-by-step-guide/>
- 手动安装

1. 在此 github 页面上找到发布页面并点击
2. 下载最新版本的 zip 文件
3. 解压缩，将解压后的文件夹复制到 obsidian 插件文件夹中，确保文件夹中有 main.js 和 manifest.json 文件
4. 重新启动 obsidian（不重新启动也可以，您必须刷新插件列表），在设置界面中启用插件
5. 完成！

## Credits

- [rpggio/obsidian-chat-stream: Obsidian canvas plugin for using AI completion with threads of canvas nodes (github.com)](https://github.com/rpggio/obsidian-chat-stream)
- [Quorafind/Obsidian-Collapse-Node: A node collapsing plugin for Canvas in Obsidian. (github.com)](https://github.com/quorafind/obsidian-collapse-node)

## 支持

如果您喜欢这个插件，请通过在 [https://www.buymeacoffee.com/metacorp](https://www.buymeacoffee.com/metacorp) 上给我买杯咖啡来支持我的工作和热情。

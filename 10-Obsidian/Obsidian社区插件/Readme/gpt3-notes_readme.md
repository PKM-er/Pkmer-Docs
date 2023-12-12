---
uid: 2023120719295863
title: Obsidian 插件：【Readme】GPT Notes
tags: ['obsidian插件', 'readme']
description: 使用OpenAI的GPT-3语言模型生成任何主题的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GPT Notes

> [!Note] 插件名片
> - 插件名称：GPT Notes
> - 插件作者：micahke
> - 插件说明：使用 OpenAI 的 GPT-3 语言模型生成任何主题的笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/micahke/obsidian-gpt3-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpt3-notes)

## 概述

使用 OpenAI 的 GPT-3 语言模型生成任何主题的笔记。

![GPT Notes](https://cdn.pkmer.cn/covers/gpt3-notes_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/micahke/obsidian-gpt3-notes/master/README.md)
>

---

## Readme(翻译）

下面是 [[gpt3-notes]] 插件的自述翻译

# Obsidian GPT-3 笔记

要下载 Obsidian：[点击这里](https://www.obsidian.md)

要查看插件页面：[点击这里](https://obsidian.md/plugins?id=gpt3-notes)

![build](https://github.com/micahke/obsidian-gpt3-notes/actions/workflows/build.yml/badge.svg)

该插件通过使用 OpenAI 的 GPT-3 语言模型来帮助您生成笔记，从而改进您的 Obsidian 工作流程。该插件还支持旧的语言模型。

## 设置

为了配置插件，您首先需要在插件设置中设置您的 OpenAI API 密钥。

1. 在此处生成 OpenAI API 密钥 [here](https://beta.openai.com/account/api-keys)。
2. 在 Obsidian 中，转到 `设置` 并从左侧菜单中的 `Community Plugins` 文件夹中选择 `GPT-3 Notes`。
3. 在 `OpenAI API Key` 字段中设置您的密钥。

## 使用方法

GPT-3 能够生成许多不同类型的笔记。目前来说，插入 Obsidian 文档后，输出可能需要进行一些小的重新格式化。可以通过 Obsidian 左侧的菜单栏访问插件。该插件也可以通过 Obsidian 命令“创建 GPT-3 笔记”来使用。这也可以映射到键盘快捷键上。一些有用的提示包括：

> 写关于...的要点

> 写 5-10 个虚线笔记关于...

> 写一篇关于...的文章，附带来源

> 写关于...的 3 段落

> 写一篇关于...的论文提纲

加载时间已经有所减少，这里是一个示例：

![usage](https://cdn.pkmer.cn/covers/gpt3-notes_1_1.gif)

## 贡献

我并不是很聪明，所以社区的帮助将在确保新的想法能够添加到插件中方面起到很大的作用。要开始，请将存储库克隆到 Obsidian 保险库中的插件文件夹中。您可以在 Obsidian 主要开发者页面上找到更多相关信息。要安装依赖项，请运行：

```zsh
npm install
```

目前就是这样。

---
uid: 2023080322182829
title: Obsidian 插件：【Readme】Flashcards LLM
tags: ['obsidian插件', 'readme']
description: 使用大型语言模型（如ChatGPT）从Obsidian笔记中自动生成闪卡。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Flashcards LLM

> [!Note] 插件名片
> - 插件名称：Flashcards LLM
> - 插件作者：Marco Pampaloni
> - 插件说明：使用大型语言模型（如 ChatGPT）从 Obsidian 笔记中自动生成闪卡。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/crybot/obsidian-flashcards-llm)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?flashcards-llm)

## 概述

使用大型语言模型（如 ChatGPT）从 Obsidian 笔记中自动生成闪卡。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/crybot/obsidian-flashcards-llm/master/README.md)
>

---

## Readme(翻译）

下面是 [[flashcards-llm]] 插件的自述翻译

# Obsidian 闪卡 LLM

该插件允许您在 Obsidian 内使用大型语言模型（如 OpenAI 的 GPT*）自动生成闪卡。

## 特点

- 通过官方 API，支持 OpenAI 的 `text-davinci-003` 和 `gpt-3.5-turbo` 集成。您可以在插件设置中添加您的 API 密钥，并选择要使用的语言模型。
- 通过从命令面板运行 `生成闪卡` 命令，可以从任何开放的笔记生成闪卡。生成的闪卡将附加到当前笔记下的一个新的 Markdown 标题下。
- 您可以选择要从文档的哪个部分生成闪卡，或者您可以使用整个笔记。
- 自定义用于生成内联闪卡的分隔符。

**注意**：该插件考虑了与 [obsidian-spaced-repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) 的兼容性。截至今天，它只能生成您选择的格式的内联闪卡。未来的更新将提供更多的自定义选项（包括多行闪卡、反向闪卡等）。

## 演示

<img src="https://github.com/crybot/obsidian-flashcards-llm/blob/master/docs/flashcards.gif">




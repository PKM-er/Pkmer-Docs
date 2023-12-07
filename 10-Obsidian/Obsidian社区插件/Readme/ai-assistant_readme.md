---
uid: 2023120719220899
title: Obsidian 插件：【Readme】AI Assistant
tags: ['obsidian插件', 'readme']
description: Obsidian的AI助手插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI Assistant

> [!Note] 插件名片
> - 插件名称：AI Assistant
> - 插件作者：Quentin Grail
> - 插件说明：Obsidian 的 AI 助手插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qgrail/obsidian-ai-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-assistant)

## 概述

Obsidian 的 AI 助手插件。

![AI Assistant](https://cdn.pkmer.cn/covers/ai-assistant_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qgrail/obsidian-ai-assistant/main/README.md)
>

---

## Readme(翻译）

下面是 [[ai-assistant]] 插件的自述翻译

# Obsidian AI 助手

这是一个简单的插件，可以直接从你的 [Obsidian](https://obsidian.md/) 笔记中与 AI 模型（如 [OpenAI ChatGPT](https://openai.com/blog/chatgpt)、[OpenAI DALL·E2](https://openai.com/product/dall-e-2)、[OpenAI Whisper](https://openai.com/research/whisper)）进行交互。

该插件目前提供以下功能：

- 🤖 使用 GPT-3.5 和 GPT-4 进行文本助手功能，
- 🖼 使用 DALL·E2 生成图像，
- 🗣 使用 Whisper 进行语音转文本。

如何使用

### 🤖 文本助手

您有两种命令与文本助手进行交互：

1. 聊天模式，
2. 提示模式。

| 聊天模式 |       提示模式 |

|:------------------------:|:-------------------------:|

| ![](gifs/chat_mode.gif) | ![](https://cdn.pkmer.cn/covers/ai-assistant_2_0.gif!pkmer) |

#### 聊天模式

与您的 Vault 中的 AI 助手聊天，为您的笔记生成内容。

从聊天中，您可以点击任何交互来直接复制到剪贴板。

您也可以复制整个对话。

#### 提示模式

提示模式允许您使用笔记中选择的文本作为助手的输入。

从这里，您可以要求助手进行翻译、总结、生成代码等操作。

### 🖼 图片助手

为您的笔记生成图片。\

在结果窗口中，选择您想要保留的图片。\

它们将自动下载到您的保险库，并将其路径复制到剪贴板中。\

然后，您可以将图片粘贴到笔记的任何位置。

<img src="gifs/image_generator.gif" alt= “” width="55%">

### 🗣 语音转文本

启动语音转文本命令并开始口述您的笔记。\

转录将立即添加到您的光标位置的笔记中。

## 设置

### 文本助手

- **模型选择**：选择文本模型。目前支持 `gpt-3.5-turbo` 和 `gpt-4`。（访问 GPT-4 仍然需要 [等待名单](https://openai.com/waitlist/gpt-4-api)。如果您没有收到邀请，GPT-4 将无法在此处使用。）
- **生成答案中的最大标记数**
- **替换或添加以下内容**：在提示模式下，选择您的笔记中的文本并输入提示后，您可以决定是否用助手的答案替换您的文本或将其粘贴在下方。

### 图像助手

- 使用的模型是**DALL·E2**，
- 更改生成图像的默认文件夹。

### 语音转文本

- 使用的模型是**Whisper**，
- 您可以更改默认的**语言**以提高模型的准确性和延迟。如果您将其留空，模型将自动检测语言。

如何安装

您可以直接从 Obsidian 社区插件中安装 [AI助手](https://obsidian.md/plugins?id=ai-assistant)。

#### 从 git 获取最新版本

1. `cd path/to/vault/.obsidian/plugins`
2. `git clone https://github.com/qgrail/obsidian-ai-assistant.git && cd obsidian-ai-assistant`
3. `npm install && npm run build`
4. 打开**Obsidian Preferences** -> **Community plugins**
5. 刷新已安装的插件并激活 AI 助手。

## 要求

要使用此插件，您需要从 [OpenAI](https://platform.openai.com/account/api-keys) 获得官方 API 密钥。

限制

目前该插件不兼容 iPadOS。

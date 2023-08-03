---
uid: 20230803203421
title: Obsidian 插件：【Readme】AI Commander
tags: ['obsidian插件', 'readme']
description: 使用OpenAI和Bing API，在PDF附件或Web搜索结果的上下文中生成音频转录、图像和文本。
author: Simon Yang
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AI Commander

> [!Note] 插件名片
> - 插件名称：AI Commander
> - 插件作者：Simon Yang
> - 插件说明：使用OpenAI和Bing API，在PDF附件或Web搜索结果的上下文中生成音频转录、图像和文本。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/yzh503/obsidian-aicommander-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-commander)

## 概述

使用OpenAI和Bing API，在PDF附件或Web搜索结果的上下文中生成音频转录、图像和文本。

![AI Commander](https://cdn.pkmer.cn/covers/ai-commander.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yzh503/obsidian-aicommander-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[ai-commander]] 插件的自述翻译


# Obsidian AI Commander 插件



**AI Commander** 是一个简单的 AI 连接器，它可以帮助您使用 OpenAI（ChatGPT）API 和必应搜索引擎的强大功能来编写笔记。

![演示](demo.gif)

使用此插件需要[OpenAI API 密钥](https://platform.openai.com/account/api-keys)。

## 当前功能

- 从提示、选定的行或当前行生成文本。
- 从提示、选定的行或当前行生成图像。
- 从上一行音频文件生成音频转录。
- 与搜索引擎结果一起生成文本。这允许文本模型与必应搜索引擎一起使用。使用此功能需要[Bing Web Search API](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)密钥。
- 在笔记中嵌入的**PDF**附件中生成文本。在此模式下，它不会包含搜索结果。
- 使用[Prompt Perfect](https://promptperfect.jina.ai/)自动改进提示。您的提示将被改进后的提示替换。
- 自定义选定文本和PDF的提示命令。例如，在插件设置中添加一个命令"Summarise the text"，它将显示为一个命令。**请注意，您需要重新加载插件并重新启动Obsidian以更新命令面板**。

## 支持的模型

- 在 https://platform.openai.com/docs/models/gpt-4 上列出的 GPT 模型
- Whisper v1
- DALL·E 图像生成模型

如何使用

调出命令面板并尝试以下命令：

- AI Commander：从提示生成文本
- AI Commander：从提示生成图像
- AI Commander：从当前行生成文本
- AI Commander：从当前行生成图像
- AI Commander：从选定的文本生成文本
- AI Commander：从选定的文本生成图像
- AI Commander：从上述音频生成转录
- AI Commander：从上述PDF的上下文中生成提示文本
- AI Commander：从上述PDF的上下文中生成当前行的文本
- AI Commander：从上述PDF的上下文中生成选定文本的文本

## 从Github安装

1. 从发布页面下载 `manifest.json` 和 `main.js` 到 `<vault>/.obsidian/plugins/obsidian-aicommander-plugin` 文件夹中
2. 刷新已安装的插件
3. 启用AI Commander插件




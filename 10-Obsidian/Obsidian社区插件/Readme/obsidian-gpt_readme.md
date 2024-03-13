---
uid: 2023080322192315
title: Obsidian 插件：GPT
tags: ['obsidian插件', 'readme']
description: Obsidian编辑器中通过API使用GPT和大型语言模型完成
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：GPT

> [!Note] 插件名片
> - 插件名称：GPT
> - 插件作者：Jonathan Miller
> - 插件说明：Obsidian 编辑器中通过 API 使用 GPT 和大型语言模型完成
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jmilldotdev/obsidian-gpt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-gpt)

## 概述

Obsidian 编辑器中通过 API 使用 GPT 和大型语言模型完成

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmilldotdev/obsidian-gpt/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-gpt]] 插件的自述翻译

# Obsidian GPT（及其伙伴）

通过大型语言模型进行文本补全。

目前支持的提供者有：

- [OpenAI](https://openai.com/api/)
- [AI21](https://studio.ai21.com/overview)
- [Cohere](https://cohere.ai/)

## 设置

从一个或多个支持的提供商那里获取一个 API 密钥。打开插件设置，并将您希望在相应提供商的字段中使用的 API 密钥粘贴进去。

## 用法

命令 `Get Completion` 将为当前选择的文本获取一个补全，如果没有选择文本，则为当前行获取补全。补全将被粘贴到光标所在的位置。

模型设置可以在右侧面板的设置面板中进行调整。命令 `Show Model Settings` 将在右侧侧边栏的一个叶子上打开模型设置面板。

使用警告

请注意，AI 文本补全是不可预测的，应该负责任地使用。通过 AI 文本补全生成的文本如果在任何地方发布，应该有一个免责声明说明它是由 AI 生成的。同时，无法保证生成的内容是否合适，因此请谨慎使用。

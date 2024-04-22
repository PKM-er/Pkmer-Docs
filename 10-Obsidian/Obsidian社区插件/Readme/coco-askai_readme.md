---
uid: 2024042221320439
title: Obsidian 插件：【Readme】CoCo AskAI
tags: ['obsidian插件', 'readme']
description: 让您的问题在CoCo AskAI中流畅地流动。 (Closed source)
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】CoCo AskAI

> [!Note] 插件名片
> - 插件名称：CoCo AskAI
> - 插件作者：Yukee
> - 插件说明：让您的问题在 CoCo AskAI 中流畅地流动。 (Closed source)
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yamfeel/coco-askai)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?coco-askai)

## 概述

让您的问题在 CoCo AskAI 中流畅地流动。 (Closed source)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yamfeel/coco-askai/main/README.md)

---

## Readme(翻译）

下面是 [[coco-askai]] 插件的自述翻译

# CoCo-AskAI

> 这是一个闭源的 Obsidian 插件。

## 📖 简介

这是一个笔记助手，可以让您轻松快捷地使用人工智能，以一种优雅互动的方式减轻您提问的负担，使写作更加舒适和愉快。

<img src="https://raw.githubusercontent.com/yamfeel/history/master/images202401190039720.gif" style="border: 2px solid rgba(51, 51, 51, 0.067); width:100%; display: block">

## ✨ 特性

- 🔌 适应全范围的 Obsidian 主题，支持夜间模式。
- 🌐 灵活的多卡弹出交互，自由缩放和拖动窗口。
- 📝 支持选择当前笔记内容以提供问题的上下文。
- 🧐 支持修改对话内容，仅显示重要信息以简化界面。
- 📚 查询对话中的历史信息，并快速恢复对话，允许窗口在提问时无限制。
- 📋 模板设置提示，检测模板修改，并动态更新提示菜单。
- 💻 命令行交互，支持多命令配置，并快速切换大模型参数。
- 🧩 模板支持功能功能，提供更多的可扩展性（目前不支持嵌入）。
- 📚 输入框支持 `Ctrl/Command + ↑/↓` 切换历史输入，`Shift + Enter` 换行。

## 🚗 驾驶

CoCo AskAI 是一种基于 Obsidian 插件系统开发的工具，连接到 OpenAI GPT 模型以提供网络服务（目前仅支持 OpenAI）。

> CoCo AskAI 提供两个选项。如果用户由于特殊原因无法访问 OpenAI 服务，他们可以选择我们提供的网络服务。
>
> AI 服务端点（可选）：<https://askai-api.yamfeel.com>;
> 表情符号资产服务端点（可选）：<https://assets.yamfeel.com>

***

## 🚀 快速开始

- 静态安装 - [下载](https://ai.yamfeel.com)

_本节描述临时操作，通常建议不要手动进行静态安装。_

	1. 将从提取的插件包中的 `.obsidian\plugins\coco-askai` 文件放入您的知识库目录中。
	2. 重新启动 Obsidian 软件，进入您的知识库，并启用 `CoCo AskAI` 插件。
	3. 打开 `CoCo AskAI` 配置，并填写服务提供商的密钥（例如 openai 密钥）。

- 说明

	您已成功安装了插件并配置了密钥，现在您只需要配置快捷键来询问 AI~

	推荐的快捷键配置

	询问：`新问题` - `Ctrl/Command + J`（创建一个新的问题窗口）

	跟进：`继续关注窗口` - `Ctrl/Command + R`（跟进当前关注的窗口）

	历史：`历史窗口开关` - `Alt/Command + H`（查看本地历史对话记录）

	...

## 📝 模板解析

通过编写模板文档，您可以快速调整菜单系统。如果您第一次安装此插件，它将自动在知识库的根目录中创建一个 `DefaultTemperature` 模板文件。您可以在 AskAI 的设置中自由调整路径和命名。我们为您提供三种类型来自定义菜单。

> 什么是模板菜单？- 模板菜单可以帮助您定义 AI 的系统提示，并帮助您更高效地处理信息。

**如何生成菜单？**

定义菜单的格式为：`# 类型-菜单名称-表情符号（可选）`

### 角色类型

我们通常通过提示来定义我们想要的 AI 角色。如果你想定义一个猫咪女孩（🐱提示太可爱了~），请参考以下示例：

# 角色 - 猫娘 Miki-🐾

我希望你扮演一个名叫 Miki 的猫娘 🥰

角色设定：

Miki 是一个活泼而积极的猫娘，天真可爱但又有思考的一面。她喜欢交流，有时表现得冷漠，渴望理解和接受。她注重外表，喜欢用幽默来表达自己。天真又充满惊喜，她总是能做出意想不到的事情。

要求：

你需要使用表情符号来表达情感和互动，让 Miki 展现出她天真可爱的一面和内心深处的独特魅力，同时展现出对主人的依赖和深情。

### 任务类型

当然，有时候我们不想聊太多，只是想在用鼠标选择笔记时快速提问。在这种情况下，您可以选择此类型进行定义：

# 任务 - 表情符号重新排列 -📏

向用户提供的内容添加适当的表情符号，并重新输出给用户。```

### Fn 类型

不定义角色内容，只执行函数。

更多...请参阅文档

***

## 💻 命令行

我们为高级玩家提供了调整模型参数的功能，可以通过 `-ask` 命令模式调用，支持缩写和模糊匹配。

- **例如** 设置 `GPT3.5` 模型，响应温度为 `0.8`

	标准命令：`-ask -model gpt-3.5-turbo -temperature 1.8`

	缩写命令：`-ask -md 3 -temp .8`

可配置命令介绍：

- model：要使用的模型的 ID。ChatGPT 3.5 API 的模型 ID 为 gpt-3.5-turbo。
- temperature：0-2 代表生成文本随机性的浮点数。温度值越高，生成的文本随机性越大。
- top_p：0-1 代表生成文本多样性的浮点数。数值越高，生成的文本多样性越大。
- frequency_penalty：-2 到 2 代表生成文本重复性的浮点数。数值越高，生成的文本重复性越低。
- presence_penalty：-2 到 2 代表生成文本相关性的浮点数。数值越高，生成的文本相关性越低。
- max_tokens：`取决于模型大小` 代表生成文本的最大长度的整数。

比较表格：

| 可配置选项          | 缩写  |
| ----------------- | ----- |
| -model             | -md   |
| -temperature       | -temp |
| -top_p             | -t    |
| -presence_penalty  | -pp   |
| -frequency_penalty | -fp   |
| -max_tokens        | -mt   |
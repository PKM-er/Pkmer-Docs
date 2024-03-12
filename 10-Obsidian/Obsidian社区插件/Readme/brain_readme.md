---
uid: 20230817224052
title: Obsidian 插件：brAIn
tags: ['obsidian插件', 'readme']
description: 一个由ChatGPT驱动的聊天机器人，专注于回答你在Obsidian vault笔记中的问题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：brAIn

> [!Note] 插件名片
> - 插件名称：brAIn
> - 插件作者：lusob
> - 插件说明：一个由 ChatGPT 驱动的聊天机器人，专注于回答你在 Obsidian vault 笔记中的问题。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lusob/obsidian-brain)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?brain)

## 概述

一个由 ChatGPT 驱动的聊天机器人，专注于回答你在 Obsidian vault 笔记中的问题。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lusob/obsidian-brain/master/README.md)

---

## Readme(翻译）

下面是 [[brain]] 插件的自述翻译

# 🧠 Obsidian brAIn 插件

该插件使用 ChatGPT 强力聊天机器人，专注于在 Obsidian vault 笔记（markdown 文件）上进行问题回答。

<https://user-images.githubusercontent.com/480507/236815106-2c38d137-9345-498e-8531-46494239d19a.mp4>

### 🧰 要求

- [Docker](https://docs.docker.com/get-docker/)

### 📖 如何使用

1. 在 Obsidian vault 中安装插件，方法是进入“设置 -> 社区插件 -> 浏览”并搜索“brAIn”。
2. 安装完成后，在插件的设置部分中，输入您的 OpenAI API 密钥，以使插件能够处理您的 vault 文档并使用聊天功能。
3. 运行“brAIn: Ingest vault docs”命令或按下“Ctrl/Cmd + P”键，将您的笔记提供给模型。
4. 从现在开始，您还可以通过点击工具栏中的大脑按钮或运行“brAIn: Open chat”命令或按下“Ctrl/Cmd + P”键与您的 brAIn 进行对话。

*如果您有新的笔记希望被 brAIn 索引，只需再次运行“brAIn: Ingest vault docs”命令即可*

### 🛠 工作原理

该插件使用一个运行 [brAIn](https://github.com/lusob/brAIn) 服务器的 [brAIn Docker容器](https://hub.docker.com/repository/docker/lusob04/brain) 来实现聊天机器人功能。brAIn 服务器读取您的 Obsidian 保险库文档，并使用 OpenAI GPT-3 API 来实现问答功能。一旦服务器运行起来，您就可以通过插件的界面与机器人进行聊天。

### 💬 支持

如果您有任何问题或功能请求，请在 [GitHub](https://github.com/) 上开启一个问题。

### 📓 许可证

该插件根据 [MIT许可证](https://github.com/lusob/obsidian-brain/blob/main/LICENSE) 获得许可。

### © 隐私

默认情况下，嵌入是在本地生成的，因此您的文档不会离开您的计算机。如果您在设置中勾选了 OpenAI 嵌入检查框，brAIn 将使用 OpenAI API 在摄取过程中生成向量存储，并回答聊天中的每个问题。但是，根据其 [API使用政策](https://openai.com/policies/api-data-usage-policies)，OpenAI 保证不会使用通过其 API 由客户提交的数据来训练或改进其模型，并且通过 API 提交的任何数据将在 30 天后被删除。

### ⚠️ 限制

如果您在本地生成嵌入向量，可能会消耗大量的时间和硬件资源（取决于您的机器和文档数量）。

如果您想在 OpenAI 中生成嵌入向量（嵌入生成）时，大量的笔记可能会导致高额费用（约 1000 个笔记=1 美元），请监控您的账户并设置 API 密钥限制以避免惊吓。

### 🐞 已知问题

根据用户的输入，brAIn 可能偶尔会生成不正确或不相关的内容。此外，如果 API 密钥无效或 OpenAI API 服务存在问题，它可能在调用 OpenAI API 时遇到错误。

### ⏭ 下一步

最终的想法是使用 LLM 创建一个完整的离线聊天机器人，但目前这些模型的硬件要求太高。

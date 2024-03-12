---
uid: 20231220115812
title: Obsidian 插件：【Readme】ZettelGPT
tags: ['obsidian插件', 'readme']
description: 毫不费力地在Obsidian中从ChatGPT生成与上下文相关的答案，同时保持视觉上清晰和有组织的对话历史。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】ZettelGPT

> [!Note] 插件名片
> - 插件名称：ZettelGPT
> - 插件作者：Overraddit
> - 插件说明：毫不费力地在 Obsidian 中从 ChatGPT 生成与上下文相关的答案，同时保持视觉上清晰和有组织的对话历史。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OverRaddit/ZettelGPT)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zettelgpt)

## 概述

毫不费力地在 Obsidian 中从 ChatGPT 生成与上下文相关的答案，同时保持视觉上清晰和有组织的对话历史。

![ZettelGPT](https://cdn.pkmer.cn/images/202308201222338.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OverRaddit/ZettelGPT/main/README.md)

---

## Readme(翻译）

下面是 [[zettelgpt]] 插件的自述翻译

# Obsidian ZettelGPT 插件

要下载 Obsidian：[点击这里](https://www.obsidian.md)

![ZettelGPTDemo](https://cdn.pkmer.cn/covers/zettelgpt_1_0.gif)

欢迎使用 Obsidian 的 ZettelGPT 插件！🎉 这个强大的插件可以帮助您根据问题从 ChatGPT 生成答案，同时保持对话历史的清晰和有序。节省 GPT 令牌，并享受与 ChatGPT 的流畅互动！🚀

## 特点 🌟

### 1. 上下文对话 📚

通过仅提供相关的对话历史，优化 GPT 令牌使用，并在独立问题之间保留上下文，高效地与 ChatGPT 进行交互。

### 2. 自包含环境 🏡

在自包含环境中提问问题，确保在同一环境中提问其他问题时保持先前问题的上下文。

### 3. 视觉清晰度 🔍

通过 Obsidian 的图形视图，轻松理解和导航与 ChatGPT 的对话，该视图通过可视化连接问题笔记和答案笔记，提供清晰有序的概览。

## 设置 ⚙️

为了配置插件，您首先需要在插件设置中设置您的 OpenAI API 密钥。请注意，使用 OpenAI API 可能需要付费。请在 [这里](https://openai.com/pricing) 查看 OpenAI 的定价详情。

在此处生成 OpenAI API 密钥 [here](https://beta.openai.com/signup)。

在 Obsidian 中，转到设置并从左侧菜单中的“社区插件”中选择 ZettelGPT。

输入您的 OpenAI API 密钥。

请注意，此插件会将笔记内容上传到 OpenAI 服务器。

目前，该插件使用 GPT-3.5 Turbo，但我们计划将来更新以支持其他模型。

## 如何使用 🎓

1. 创建一个新的笔记并点击“插入问题模板”按钮。✍️
2. 滚动到笔记底部，在指定的字段中输入您的问题。❓
3. 点击“生成答案”按钮以接收 ChatGPT 的回答。答案将实时显示在连接的答案笔记中。🤖
4. 要提出其他问题，请重复步骤 1-2，然后在进行步骤 3 之前将新的问题笔记链接到所需的答案笔记。🔄
在您的 ZettelGPT 插件中，用户可以创建问题笔记和答案笔记，其中答案笔记使用问题笔记中的问题和到目前为止的对话历史。通过仅提供相关的对话历史，您可以节省 GPT 令牌并优化插件的效率。

您的实现还允许在一个独立的环境中提问。例如，如果用户向 GPT 提问 10 个问题，在另外三个无关的问题之后再提问一个问题时，可能会丢失这些问题的上下文。然而，通过您的插件，您只传递从基本节点到当前叶节点的对话历史，使用户能够在同一环境中提出独立的问题而不丢失先前问题的上下文。

通过结合这些功能，您的 ZettelGPT 插件为在 Obsidian 中提问和生成答案提供了高效和上下文感知的解决方案，使用户能够与 ChatGPT 保持清晰和有组织的对话历史。

使用 Obsidian 的 ZettelGPT 插件与 ChatGPT 进行对话吧！

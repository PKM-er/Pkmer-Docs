---
uid: 2023080322151469
title: Obsidian 插件：【Readme】BMO Chatbot
tags: ['obsidian插件', 'readme']
description: 通过使用大型语言模型（LLM），提高您的知识管理能力，使聊天机器人能够理解上下文并检索相关信息。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：BMO Chatbot

> [!Note] 插件名片
> - 插件名称：BMO Chatbot
> - 插件作者：Longy2k
> - 插件说明：通过使用大型语言模型（LLM），提高您的知识管理能力，使聊天机器人能够理解上下文并检索相关信息。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/longy2k/obsidian-bmo-chatbot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bmo-chatbot)

## 概述

通过使用大型语言模型（LLM），提高您的知识管理能力，使聊天机器人能够理解上下文并检索相关信息。

![BMO Chatbot](https://cdn.pkmer.cn/covers/bmo-chatbot.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/longy2k/obsidian-bmo-chatbot/main/README.md)
>

---

## Readme(翻译）

下面是 [[bmo-chatbot]] 插件的自述翻译

# Obsidian 的 BMO 聊天机器人

通过使用大型语言模型（LLM），如 OpenAI 的 "gpt-3.5-turbo" 和 "gpt-4"，改进您的知识管理，以理解上下文并检索相关信息。

![屏幕截图-1](README_images/Screenshot-1.png)

<p align="center">
  <img src="README_images/Screenshot-2.png" alt="图像描述">
</p>

## 特点

- **在 Obsidian 中的任何地方聊天：** 无论你在哪里，都可以与你的机器人聊天！
- **聊天机器人以 Markdown 格式回复：** 以 Markdown 格式接收格式化的回复，以保持一致性。
- **可自定义机器人名称：** 个性化聊天机器人的名称。
- **系统角色提示：** 配置聊天机器人在回复消息之前提示用户角色。
- **设置最大标记和温度：** 使用最大标记和温度设置自定义聊天机器人回复的长度和随机性。
- **系统主题颜色强调：** 与你的系统颜色方案无缝匹配聊天机器人的界面。
- **与自托管的 API LLM(s) 模型交互：** 使用提供的 REST API URL 与自托管的 API LLM(s) 模型（如 [LocalAI](https://github.com/go-skynet/LocalAI)）进行交互。

## 要求

要使用此插件，您需要拥有具有 API 访问权限的 OpenAI 帐户。如果您还没有帐户，可以在 [OpenAI网站](https://platform.openai.com/overview) 上注册一个。

此外，如果您想与自托管的 API LLM(s) 模型（如 [`LocalAI`](https://github.com/go-skynet/LocalAI)）进行交互，您需要设置和运行自托管的 API。您可以按照自托管 API 提供者提供的说明进行设置和运行。一旦您获得了自托管 API 的 REST API URL，您就可以将其与此插件一起使用，与您的模型进行交互。

如何激活插件

三种方法：

Obsidian 社区插件（**推荐**）：

  1. 在 Obsidian 社区插件中搜索“BMO Chatbot”。
  2. 在设置中启用“BMO Chatbot”。

Beta Reviewers Auto-update Tester（[BRAT](https://github.com/TfTHacker/obsidian42-brat)）- [使用BRAT的快速指南](https://tfthacker.com/Obsidian+Plugins+by+TfTHacker/BRAT+-+Beta+Reviewer's+Auto-update+Tool/Quick+guide+for+using+BRAT)

1. 在 Obsidian 社区插件中搜索“Obsidian42 - BRAT”。
2. 打开命令面板，运行命令 BRAT: Add a beta plugin for testing（如果您希望插件版本被冻结，请使用命令 BRAT: Add a beta plugin with frozen version based on a release tag）。
3. 粘贴“https://github.com/longy2k/obsidian-bmo-chatbot”。
4. 点击“Add Plugin”。
5. BRAT 确认安装后，在设置中转到 Community plugins 选项卡。
6. 刷新插件列表。
7. 找到刚刚安装的 beta 插件并启用它。

要从此存储库激活插件，请按照以下步骤操作：

  1. 在终端中导航到插件的文件夹。
  2. 运行 `npm install` 以安装插件所需的任何依赖项。
  3. 一旦安装了依赖项，运行 `npm run build` 以构建插件。
  4. 插件构建完成后，应该可以激活。

开始使用插件，您需要在设置菜单中启用它并输入您的 OpenAPI 密钥。完成这些步骤后，您可以通过在左侧边栏中点击机器人图标来访问机器人面板。

如果您想清除聊天记录，只需再次在左侧功能区中点击机器人图标即可。

其他说明

"BMO" 是这个项目的标签名称，灵感来自于动画电视节目《冒险时间》中的角色 BMO。

## 贡献

随时欢迎创建 PR！

如果您有任何改进、问题或疑虑，请告诉我！

---
uid: 2024022117265596
title: Obsidian 插件：【Readme】ChatCBT
tags: ['obsidian插件', 'readme']
description: AI-powered journaling assistant for your notes, inspired by cognitive behavioral therapy (CBT)
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】ChatCBT

> [!Note] 插件名片
> - 插件名称：ChatCBT
> - 插件作者：Claire Froelich
> - 插件说明：AI-powered journaling assistant for your notes, inspired by cognitive behavioral therapy (CBT)
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/clairefro/obsidian-chat-cbt-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chat-cbt)

## 概述

AI-powered journaling assistant for your notes, inspired by cognitive behavioral therapy (CBT)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/clairefro/obsidian-chat-cbt-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[chat-cbt]] 插件的自述翻译

【机翻】

# ChatCBT

一款由人工智能驱动的日记助手，专为 [Obsidian](https://obsidian.md/) 设计，灵感来源于认知行为疗法（CBT）。

**[安装](https://obsidian.md/plugins?search=chatcbt)**

## 演示

ChatCBT 是一个日记助手，它督促您重新构建消极思维，并重塑对令人烦恼的情况的反应（[\*免责声明](https://github.com/clairefro/obsidian-chat-cbt-plugin#disclaimer)）。

### 在笔记中开始聊天

![chat-gif](https://cdn.pkmer.cn/covers/chat-cbt_1_0.gif!pkmer)

### 当你准备好时，总结你的发现

![summary-gif](https://cdn.pkmer.cn/covers/chat-cbt_1_1.gif!pkmer)

## 特点

- 白天或黑夜均可使用
- 获得友善客观的回应，帮助您发现消极思维模式，并从更健康的角度看待情况
- 对话会私密存储在您电脑上的本地文件中
- 自动总结您的重构思维，以表格形式激励肯定
- 选择数据处理方式：使用基于云的 AI 服务（OpenAI），或 100% 本地私密服务（Ollama）
- 如果使用 OpenAI，每次日志会话不到两美分，如果使用 Ollama 则免费

## 设置

要开始使用 ChatCBT，您需要从 ChatCBT 插件设置菜单中配置与 AI 平台的连接。

<img width="941" alt="image" src="https://github.com/clairefro/obsidian-chat-cbt-plugin/assets/9841162/bbe7a24a-be60-43c4-91ae-c90711ecc7d7">

您有两个选项：

- **OpenAI** - 一个付费的云服务
- **Ollama** - 一个免费的本地服务

**OpenAI** 推荐用于对话质量和速度，但需要注意它是一个付费服务，并且您的消息会被发送到 OpenAI。请参阅 [OpenAI的数据隐私政策](https://openai.com/policies/privacy-policy)。

### 选择模型

| 平台                     | 模型             | 成本         | 托管            | 速度    | 质量     |
| ------------------------ | --------------- | ------------ | --------------- | ------- | --------- |
| **OpenAI** (推荐)        | `gpt-3.5-turbo` | 付费 (便宜) | 云端            | 快速 ⚡ | 优秀     |
| **Ollama**               | `mistral`       | 免费         | 本地 (私人)     | 一般    | 良好     |

### OpenAI 设置

[OpenAI](https://openai.com/about) 提供基于云的人工智能解决方案，包括驱动 ChatGPT 的模型。

虽然使用 OpenAI 需要花钱，但价格便宜（截至 2023 年 11 月）。与 ChatCBT 的聊天会话成本不到 2-4 美分。

要在 ChatCBT 中使用 OpenAI：

1. [创建](https://auth0.openai.com/u/signup) 一个 OpenAI 账户
2. 向您的账户添加支付方式
3. 在 [这里](https://platform.openai.com/api-keys) 生成一个 API 密钥，并将其复制到剪贴板
4. 在 ChatCBT 插件设置中设置您的 OpenAI API 密钥
5. 确保在 ChatCBT 插件设置中禁用“Ollama 模式”

将您的 OpenAI API 密钥视为密码 - 不要公开分享。为了您的安全，在保存设置时，您的 OpenAI API 密钥已加密。

请注意，启用 OpenAI 选项后，您的消息将被发送到 OpenAI。请参阅 [OpenAI的数据隐私政策](https://openai.com/policies/privacy-policy)。为了最大程度地减少消息与您个人之间的关联可能性，我设计了回应“虚构客户”的提示。正如您所猜测的那样，这并非绝对安全。请尽量保持情绪稳定，并避免透露任何敏感个人信息，如真实姓名或家庭地址。

### Ollama 设置

[Ollama](https://ollama.ai/) 是一个客户端，允许您在本地免费轻松运行强大的开源 LLM 模型。

**系统要求**

- 适用于：
  - MacOS Big Sur 或更高版本
  - Linux
  - (即将推出 Windows 版本，请查看他们的网站)
- 需要 4.5GB 的存储空间
  - Ollama：500 MB
  - Mistral 模型：4GB
- 至少 8GB 的 RAM，最好是

1. [下载Ollama](https://ollama.ai/)
2. 下载 `mistral` 模型：在终端中运行 `ollama pull mistral`
3. 启动本地服务器：在终端中运行 `OLLAMA_ORIGINS="*" OLLAMA_HOST="0.0.0.0:11434" ollama serve`
4. 确保在 ChatCBT 设置中启用了“Ollama 模式”

这将启动一个本地服务器，从端口 `11434` 在您的计算机上本地托管您的 Ollama 实例。如果需要，您可以通过编辑步骤 3 中的 `OLLAMA_HOST` 属性来更改端口 - 只需确保还更新 ChatCBT 插件设置中的 `Ollama URL`。`OLLAMA_ORIGINS='*'` 允许 Obsidian 与 Ollama 进行通信。

## 用法

1. 开始一张新的笔记
2. 输入让你困扰的事情
3. 从 ChatCBT 中运行“Chat”
4. 您可以通过在文件底部添加额外的回复与 ChatGPT 交谈
5. 进行足够的来回对话，开始重新构建您的负面思维
6. 一旦您准备总结对话，运行“Summarize”以创建一个表格，概述您重新构建的思维。

### 运行命令

您可以从左侧功能菜单或命令面板中运行“Chat”和“Summarize”命令。

**功能菜单**

<img width="368" alt="image" src="https://github.com/clairefro/obsidian-chat-cbt-plugin/assets/9841162/1ab0126b-48de-48c4-b33d-45896334651c">

**命令面板（`cmd` + `p` > 搜索“chat...”）**

<img width="777" alt="image" src="https://github.com/clairefro/obsidian-chat-cbt-plugin/assets/9841162/ea32ec43-dd9e-4def-87f2-64ee59b9f849">

## 开发

您可以通过以下步骤在开发者模式下安装和启用 ChatCBT：

1. 在 Obsidian 中，确保您已经 [启用了社区插件]([url](https://help.obsidian.md/Extending+Obsidian/Plugin+security#Restricted+mode))
2. 在您的终端中，导航到您计算机上的 Obsidian vault（目录），您想要使用 ChatCBT 的地方
3. `cd .obsidian`
4. `cd plugins`（如果 `plugins` 目录不存在，请创建一个：`mkdir plugins`，然后 `cd plugins`）
5. `git clone git@github.com:clairefro/obsidian-chat-cbt-plugin.git`
6. 安装依赖：`npm i`
7. 运行插件 `npm run dev`
8. 返回到 Obsidian 设置，添加 ChatCBT 插件并启用它
9. 按照下面的设置说明进行操作

## 免责声明

ChatCBT 并不是真正治疗或人际互动的替代品。相反，ChatCBT 应被视为一种类似于互动工作表的日记助手。它是一个机器人，通过客观问题回应您的写作，帮助您走出自己的思维，并从其他角度看待问题。

虽然该机器人受到一般认知行为疗法方法的启发，但它并未经过持牌治疗师的审查或批准。尽管我个人发现 ChatCBT 在管理负面思维方面很有用，但重要的是要注意，这个机器人是由一个没有心理学领域专业知识的人构建的。还要注意，人工智能生成的回应是不可预测的。您有责任自行判断这个工具对您是否有用。考虑寻求专业治疗师的帮助。

您可以在这里查看机器人用于生成回应的确切提示：[chat](https://github.com/clairefro/obsidian-chat-cbt-plugin/blob/main/src/prompts/system.ts) 和 [summarize](https://github.com/clairefro/obsidian-chat-cbt-plugin/blob/main/src/prompts/summary.ts)。

我很乐意听取您在“问题”选项卡中遇到的任何问题，或通过 Twitter/X 上的 DM 发送给 `@clairefroe`。

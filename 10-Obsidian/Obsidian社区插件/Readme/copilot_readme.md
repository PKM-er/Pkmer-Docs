---
uid: 2023080322163312
title: Obsidian 插件：Copilot
tags: ['obsidian插件', 'readme']
description: 在Obsidian中使用ChatGPT Copilot。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Copilot

> [!Note] 插件名片
> - 插件名称：Copilot
> - 插件作者：Logan Yang
> - 插件说明：在 Obsidian 中使用 ChatGPT Copilot。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/logancyang/obsidian-copilot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copilot)

## 概述

在 Obsidian 中使用 ChatGPT Copilot。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/logancyang/obsidian-copilot/master/README.md)
>

---

## Readme(翻译）

下面是 [[copilot]] 插件的自述翻译

# 🔍 Obsidian 的 Copilot

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/logancyang/obsidian-copilot?style=for-the-badge&sort=semver) ![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22copilot%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=for-the-badge)

Copilot for Obsidian 是一个**免费**且**开源**的 ChatGPT 界面，直接嵌入 Obsidian 中。它具有极简设计，使用起来简单直观。

- 💬 在 Obsidian 中使用 ChatGPT 界面。
- 🛠️ 使用 Copilot 命令以您的写作来提示 AI，以获得快速结果。
- 🚀 用 AI 加速您的第二大脑。
- 🧠 与您过去的笔记对话以获取洞见。

我的目标是使这个 AI 助手成为**本地优先**和**注重隐私**。更多功能正在开发中。敬请期待！

<img src="./images/ui.png" alt="UI">

## 🛠️ 特性

- 在 Obsidian 的 Copilot 聊天窗口中与 ChatGPT 进行聊天。
- 无需重复登录。使用您自己的 API 密钥（本地存储）。
- 无需月费。只需支付您使用的费用。
- GPT-3.5、GPT-4、Azure OpenAI 模型等模型选择。
- 如果您有 API 访问权限，无需购买 ChatGPT Plus 即可使用 GPT-4。
- GPT-4 没有像 ChatGPT Plus 那样的使用限制。
- 一键将任何消息复制为 Markdown。
- 一键将整个对话保存为笔记。
- 使用活动笔记作为上下文，并通过在模式选择菜单中切换到“QA: Active Note”来开始围绕其进行讨论。
  - **v2.1.0 中的新功能**：与您的长笔记聊天时，无限制的上下文，不再出现“上下文长度超过限制”的错误！
  - 此功能由使用**本地**向量存储的检索增强功能提供支持。无需将您的数据发送到基于云的向量搜索服务！
- 简化、表情化、摘要、翻译、改变语气、修复语法、重写为推文/线程、计算标记数等的简单命令。
- 根据您的需求设置自己的参数，如 LLM 温度、最大标记数、对话上下文（请注意 API 成本）。
- **v2.2.0 中的新功能**：添加了用户自定义提示支持！现在您可以在本地 Obsidian 环境中*添加、应用、删除*您的自定义提示！

🎬 视频演示

#### 🎉 v2.3.0 新增内容：全新的 OpenAI 和 Azure 模型

#### 🤗 初学者快速指南：Copilot 是什么？

- 与 ChatGPT 聊天，将消息复制到笔记中，将整个对话保存为笔记
- 围绕过去的笔记进行问答
- 修正语法和拼写错误，总结，简化，添加表情符号，删除网址
- 生成词汇表，目录
- 翻译成您选择的语言
- 更改语气：专业、随意、直接、自信、友好
- 增加/减少长度
- 重写成推文/线程

#### 💬 用户自定义提示：创建任意数量的 Copilot 命令

您可以添加、应用、编辑和删除自己的自定义 Copilot 命令，所有这些都将保存在您的**本地** Obsidian 环境中！

请查看下面的演示视频！

#### 🔧 Copilot 设置

设置页面允许您根据需要设置自己的温度、最大标记数和对话上下文。

随着我获得访问权限，将添加新的模型。

您还可以使用自己的系统提示，选择不同的嵌入提供者，如 OpenAI、CohereAI（他们的试用 API 是免费且相当稳定！）和 Huggingface 推理 API（免费但有时会超时）。

## ⚙️ 安装

Copilot for Obsidian 现在可以在 **Obsidian Community Plugin** 中使用！

- 打开 Community Plugins 设置页面，点击浏览按钮。
- 在搜索栏中搜索 "Copilot" 并找到具有完全相同名称的插件。
- 点击安装按钮。
- 安装完成后，在 Community Plugins 设置页面中切换打开 Copilot 插件的开关以启用它。

现在你可以在左侧的功能栏中看到聊天图标，点击它将在右侧打开聊天面板！别忘了在命令面板中查看可用的 Copilot 命令！

#### ⛓️ 手动安装

- 前往最新版本发布页面
- 下载 `main.js`、`manifest.json` 和 `styles.css`，并将它们放置在你的 vault 下的 `.obsidian/plugins/obsidian-copilot/` 目录中
- 打开 Obsidian 设置 > 社区插件，并启用 `Copilot`。

## 🔔 注意

- 默认情况下，聊天记录不会被保存。请使用“**保存为笔记**”来保存聊天记录。笔记的标题将会是 `Chat-Year_Month_Day-Hour_Minute_Second`，您可以根据需要更改它的名称。
- “**新建聊天**”会清除所有先前的聊天记录。如果您想保存聊天记录，请再次使用“**保存为笔记**”。
- “**使用活动笔记作为上下文**”会为活动笔记创建一个本地向量索引，这样您就可以与超长笔记进行聊天！要开始问答，请在模式选择下拉菜单中从“对话”切换到“问答：活动笔记”。
- 如果需要，您可以在设置中将“**对话中的轮数**”设置为非常长的上下文。

#### 📣 再次强调，如果您在使用 GPT-4 时使用了长篇上下文，请始终注意 API 费用

## 🤔 常见问题（请在提交问题之前阅读）

<details>
  <summary>它没有使用我的笔记作为上下文</summary>

  - 请不要忘记在模式选择下拉菜单中切换到“**QA: Active Note**”以开始 QA。Copilot 在“Conversation”模式下没有您的笔记作为上下文。
    <img src="./images/faq-mode-switch.png" alt="Settings" width="500">
  - 实际上，在开始 QA 之前，您不必点击右侧的按钮。直接在下拉菜单中切换到 QA 模式就足够让 Copilot 将笔记作为上下文读取。右侧的按钮只用于手动重建活动笔记的索引，例如当您想要切换上下文到另一个笔记时，或者因为您切换了嵌入提供程序而导致当前索引损坏时。
  - 参考问题：<https://github.com/logancyang/obsidian-copilot/issues/51>
</details>
<details>
  <summary>使用Huggingface作为嵌入提供程序时QA无响应</summary>

  - Huggingface 推理 API 是免费使用的。由于其服务器存在问题，它可能会经常出现 503 或 504 等错误。如果这对您来说是个问题，请考虑使用 OpenAI 或 CohereAI 作为嵌入提供程序。只需记住，OpenAI 的成本更高，特别是对于非常长的笔记作为上下文的情况。
</details>
<details>
  <summary>"model_not_found"</summary>

  - 您需要访问一些模型，如 GPT-4 或 Azure 模型，才能使用它们。如果您没有访问权限，请在等待列表上注册！
  - 我看到的一个常见误解是，有些人认为他们在获得 ChatGPT Plus 订阅时就可以访问 GPT-4 API。这是不正确的。*您需要获得 GPT-4 API 的访问权限才能在此插件中使用 GPT-4 模型*。请先检查您是否可以在 OpenAI playground 中成功使用您的模型<<https://platform.openai.com/playground?mode=chat&model=gpt-4。如果不能，请在此处申请> GPT-4> API 访问权限<<https://openai.com/waitlist/gpt-4-api。一旦您获得> API 访问权限，您就可以在此插件中使用 GPT-4，而无需 ChatGPT> Plus 订阅！
  - 参考问题：<https://github.com/logancyang/obsidian-copilot/issues/3#issuecomment-1544583676>
</details>
<details>
  <summary>"insufficient_quota"</summary>

  - 这可能是因为您尚未为 OpenAI 帐户设置付款，或者您超过了每月的最大限制。OpenAI 对您可以使用其 API 的数量有限制，通常为个人用户为 120 美元。
  - 参考问题：<https://github.com/logancyang/obsidian-copilot/issues/11>
</details>
<details>
  <summary>"context_length_exceeded"</summary>

  - GPT-3.5 有 4096 个上下文令牌的限制，GPT-4 有 8K 个（OpenAI 即将向公众提供 32K 个）。**因此，如果您在 Copilot 设置中设置了很大的令牌限制，您可能会遇到此错误。**请注意，Copilot 命令背后的提示也会占用令牌，因此请限制您的消息长度和最大令牌数以避免此错误。（对于具有无限上下文的 QA，请在下拉菜单中使用“QA: Active Note”链！需要 Copilot v2.1.0。）
  - 参考问题：<https://github.com/logancyang/obsidian-copilot/issues/1#issuecomment-1542934569>
</details>
<details>
  <summary>Azure问题</summary>

  - 第一次正确设置所有 Azure 凭据有点棘手。我的建议是先在终端中使用 `curl` 进行测试，确保它能够收到响应，然后在 Copilot 设置中设置正确的参数。示例：

    ```
    curl https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/completions?api-version=VERSION\
      -H "Content-Type: application/json" \
      -H "api-key: YOUR_API_KEY" \
      -d "{
      \"prompt\": \"Once upon a time\",
      \"max_tokens\": 5
    }"
    ```

  - 参考问题：<https://github.com/logancyang/obsidian-copilot/issues/98>
</details>

在提交问题时，请包含相关的控制台日志。您可以转到 Copilot 的设置并在底部打开“调试模式”以获取更多的控制台消息！

## 📝 计划功能（基于反馈）

- 与更多的 LLM 集成，包括开源和本地的 LLM
- 提供更多可与命令一起使用的标准提示
- 为一组笔记提供无限上下文

🙏 感谢您

如果您喜欢 Copilot，请通过这里购买一杯咖啡来支持我的工作：<https://www.buymeacoffee.com/logancyang>

请也通过 Twitter、Reddit 或您使用的任何其他社交媒体平台分享关于 Copilot for Obsidian 插件的信息。

您可以在 Twitter 上找到我 [@logancyang](https://twitter.com/logancyang)。

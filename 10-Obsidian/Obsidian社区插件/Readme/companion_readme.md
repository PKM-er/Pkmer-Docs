---
uid: 2023120719251365
title: Obsidian 插件：【Readme】Companion
tags: ['obsidian插件', 'readme']
description: 通过类似合作伙伴的界面，使用人工智能进行自动补全，包括ChatGPT。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Companion

> [!Note] 插件名片
> - 插件名称：Companion
> - 插件作者：rizerphe
> - 插件说明：通过类似合作伙伴的界面，使用人工智能进行自动补全，包括 ChatGPT。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rizerphe/obsidian-companion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?companion)

## 概述

通过类似合作伙伴的界面，使用人工智能进行自动补全，包括 ChatGPT。

![Companion](https://cdn.pkmer.cn/covers/companion.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rizerphe/obsidian-companion/main/README.md)
>

---

## Readme(翻译）

下面是 [[companion]] 插件的自述翻译

# Obsidian Companion

Companion 是 Obsidian 的一个插件，为您的笔记和个人知识管理平台添加了**基于人工智能的自动完成**功能。通过 Companion，您可以根据您的写作上下文，接收到完善单词、短语甚至整个句子的建议，从而更快、更轻松地撰写笔记。自动完成功能使用 OpenAI 的最先进的**GPT-3 和 GPT-3.5 模型，包括 ChatGPT**等，生成智能建议，根据您特定的写作风格和偏好进行定制。还计划支持更多模型。

Companion 的自动完成功能设计得非常不显眼，以幽灵文本的形式提供建议，您可以根据需要接受或忽略，类似于 github copilot 的做法。通过 Companion，您可以更高效、更有效地撰写笔记，利用人工智能的力量提升您的生产力和创造力。无论您是学生、研究人员还是知识工作者，Companion 都可以帮助您将笔记和知识管理提升到一个新的水平。

使用了 [codemirror-companion-extension](https://www.npmjs.com/package/codemirror-companion-extension)，这是我自己修改的 saminzadeh 的出色的 [codemirror-extension-inline-suggestion](https://github.com/saminzadeh/codemirror-extension-inline-suggestion) 的分支。

# 演示

![演示](https://cdn.pkmer.cn/covers/companion_1_0.gif)

# 安装

Companion 现在可以在 [Obsidian社区插件目录](https://obsidian.md/plugins?id=companion) 中找到。以下是安装步骤：

1. 在 Obsidian 的**Community Plugins**设置页面中找到 [Companion](https://obsidian.md/plugins?id=companion)。
2. 点击 Companion 插件旁边的**安装**按钮。
3. 安装完成后，您将在 Obsidian 窗口的右上角看到确认消息。
4. 最后，在 Community Plugins 设置页面中，通过切换旁边的开关来启用 Companion 插件。

# 如何使用

要使用 Companion 与 OpenAI 的 ChatGPT 模型，您需要生成一个 API 密钥并配置插件设置。以下是具体步骤：

1. 前往 [OpenAI API Keys](https://platform.openai.com/account/api-keys) 页面并登录您的账户（如果您还没有账户，则需要创建一个新账户）。
2. 点击 "Create new secret Key" 按钮以生成一个新的 API 密钥。
3. 将 API 密钥复制到剪贴板。
4. 在 Obsidian 中，通过点击应用程序左下角的齿轮图标并查找 "Community plugins" 部分中的 "Companion" 选项卡，打开 Companion 插件设置。
5. 将您的 OpenAI API 密钥粘贴到 "API Key" 字段中。
6. 关闭 Companion 设置。
7. 要激活自动完成功能，按下 `Ctrl/Cmd + P` 打开命令面板，然后搜索 "Toggle Completion"。选择该命令并按 Enter 键。
8. 一旦出现建议，使用 `Tab` 键接受下一个单词。

完成这些步骤后，Companion 插件将准备好根据您的写作上下文提供建议的完成。您可以根据需要接受或忽略这些建议，并借助人工智能的强大功能更高效、更有效地继续撰写笔记。

如何在移动设备上使用（移动设备）

要在移动设备上使用 Companion 与 OpenAI 的 ChatGPT 模型，请按照以下步骤操作：

1. 在移动设备上启动 Obsidian 应用程序。
2. 点击应用程序左上角的三点图标，然后点击设置齿轮，访问设置菜单。
3. 从选项中选择“移动”。
4. 在移动设置中，找到“更多工具栏选项”部分。
5. 在可用命令列表中查找“Companion：接受完成”命令，并将其添加到工具栏中。
6. 在撰写笔记时，每当您想接受建议的完成时，请点击工具栏中新添加的按钮。

如果您在安装或使用过程中遇到任何问题，请随时在 [插件的GitHub存储库](https://github.com/rizerphe/obsidian-companion) 上提交问题。

# 预设

Companion 的“预设”功能允许您将当前设置保存为预设，为该预设启用“命令”开关，然后在命令面板中将预设用作全局编辑器命令。如果您经常使用某些设置并希望快速轻松地访问它们，这将非常有用。

要使用预设功能，请按照以下步骤操作：

1. 点击应用程序左下角的齿轮图标，打开 Companion 插件设置，并在“社区插件”部分中查找“Companion”选项卡。
2. 配置您要保存为预设的设置。
3. 输入预设的名称，然后单击设置页面底部的“保存预设”按钮。
4. 切换新预设的“命令”开关，将其作为全局编辑器命令启用。
5. 要使用预设，请按下 `Ctrl/Cmd + P` 打开命令面板，然后搜索您的预设名称。选择命令并按 Enter 键。

您可以创建具有不同设置的多个预设，并将它们作为全局编辑器命令启用，从而可以轻松切换不同的配置。通过预设功能，您可以根据自己的需求自定义 Companion 体验，并更高效地使用 AI 提供的自动完成建议。

# 自动完成提供者

该插件可以使用多个自动完成的数据源，并且还有更多的数据源正在开发中。目前它可以：

- 向 **ChatGPT** 请求“继续以下内容”
- 使用常规的 **GPT-3** 模型
- 使用 **AI21 的 Jurassic-2** 模型
- 使用托管在 **goose.ai** 上的模型

如果您有任何想要建议的数据源，请随时提出问题。

感谢所有使用我的插件的人！我制作这个项目是出于热情，我并不期望得到任何经济补偿。然而，如果你觉得我的工作有用并且想要支持我，可以随意

非常感谢您的支持，它将帮助我继续在这个项目和类似的项目上工作。但是如果你不能或不想在经济上做出贡献，不用担心，我只是很高兴我的工作对你有用！

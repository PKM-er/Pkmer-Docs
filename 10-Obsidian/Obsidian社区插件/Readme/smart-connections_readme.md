---
uid: 2023080322270444
title: Obsidian 插件：Smart Connections
tags: ['obsidian插件', 'readme']
description: 使用OpenAI的人工智能找到类似笔记的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Smart Connections

> [!Note] 插件名片
> - 插件名称：Smart Connections
> - 插件作者：Brian Petro
> - 插件说明：使用 OpenAI 的人工智能找到类似笔记的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/brianpetro/obsidian-smart-connections)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-connections)

## 概述

使用 OpenAI 的人工智能找到类似笔记的链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/brianpetro/obsidian-smart-connections/main/README.md)
>

---

## Readme(翻译）

下面是 [[smart-connections]] 插件的自述翻译

# 智能连接

[介绍智能连接](https://wfhbrian.com/introducing-obsidian-smart-connections/)，这是一款基于人工智能的插件，适用于 [Obsidian](https://obsidian.md/)，通过实时连接您与存储库中最相关的笔记，帮助您节省时间和保持组织。

受到 [Mem.ai的“相似记忆”功能](https://get.mem.ai/mem-x) 的启发，该插件使用人工智能在您的存储库中查找相似的笔记，并实时显示它们。

![](./smart-connections-demo-2.gif)

## 外部连接

即将推出：查看与外部内容的连接！

目前正在接受您希望连接的外部内容的请求。请在 [此问题](https://github.com/brianpetro/obsidian-smart-connections/issues/27) 上发表您的建议。

## 安装

1. 在 Obsidian 的社区插件选项卡中安装插件。
2. 在 [OpenAI](https://beta.openai.com/) 上创建一个账户，并从 [API Keys](https://beta.openai.com/account/api-keys) 页面获取你的 API 密钥。
3. 打开插件设置，并输入你的 API 密钥。

**注意：** 没有 OpenAI API 密钥，插件将无法工作。

## 工作原理

- 当您激活插件时，智能连接窗格将打开。您也可以使用“视图：打开智能连接窗格”命令从命令面板中打开它。
- 每次打开一个笔记时，插件将在您的存储库中搜索相似的笔记，并在智能连接窗格（侧边栏）中显示它们。智能连接窗格将使用笔记嵌入的余弦相似度来显示最相似的笔记。
- 插件只会在当前存储库中搜索相似的笔记。它不会在其他存储库中搜索相似的笔记。

### 初始处理

- 插件将处理您所有的笔记，并将嵌入存储在名为 `.smart-connections` 的隐藏文件夹中，该文件夹位于您的存储库中，文件名为 `embeddings.json`。该文件用于缓存您的笔记的嵌入，以便每次打开笔记时无需重新计算。使用 `file.mtime` 来确定自上次智能连接计算嵌入以来是否修改了笔记。`embeddings.json` 文件可能会变得相当大，因此建议您在同步设置中排除该文件夹。
- 初始处理的时间可能会很长，具体取决于存储库中的笔记数量。
- 插件只会处理当前存储库中的笔记，不会处理其他存储库中的笔记。
- 初始处理的成本与存储库中的笔记数量成正比。如果在设置中没有配置任何排除项，则初始处理中使用的标记数量约为整个存储库中“标记”的总数的 2 倍。对于这个粗略计算，可以将“存储库中的字符总数”除以 2。例如，如果您的存储库包含 10 万个字符，则初始处理的成本约为 5 万个标记。当前的标记成本为每 1,000 个标记 0.0004 美元（截至 [2021-08-01](https://openai.com/api/pricing/)），估计为 3,000 页约 1 美元（假设每页 800 个标记）。

## 特点

- 高亮以查找智能连接
	- 当您运行“查找智能连接”命令时，将使用高亮的文本来查找智能连接
- 智能连接视图
	- 您可以单击一个笔记以在当前窗格中打开它，或按住 `ctrl` 或 `cmd` 键在新窗格中打开它。
	- 要在智能连接窗格中预览笔记，您可以按住 `ctrl` 或 `cmd` 键，在悬停时预览笔记。
	- 您可以拖放链接从中成为笔记中的链接，或者将其作为新标签页打开。
- 区块匹配
	- 智能连接插件将使用您的笔记中的文本“区块”来查找最相关的连接。
	- 目前，“区块”是由标题分隔的文本部分。
		- 例如，如果您的笔记包含以下文本：`# 标题1\n这是一段文本。\n# 标题2\n这是另一段文本`，那么插件将搜索类似的文本块，并与类似的文件建立智能连接。
- 该插件目前仅适用于桌面设备。

## 设置

- `API Key` - 输入您的 OpenAI API 密钥。
- `File Exclusions` - 输入一个逗号分隔的文件或文件夹名称列表，完全排除在搜索中。例如，如果您想要排除所有文件名中包含单词“drawings”的文件，可以在字段中输入“drawings”。如果您想要排除所有文件名中包含单词“drawings”或“prompts”的文件，可以在字段中输入“drawings,prompts”。
- `Folder Exclusions` - 类似于 `File Exclusions`，但只匹配文件夹而不是文件路径中的任何内容。
- `Path Only` - 输入一个逗号分隔的文件或文件夹名称列表。与这些模式匹配的笔记将仅使用文件名和文件路径进行连接。
- `Heading Exclusions` - 输入一个逗号分隔的标题列表以进行排除。智能连接将从搜索中排除与 Heading Exclusions 匹配的带有标题的“块”。
	- 例如，如果您在许多文件中有一个常见的“存档”部分，并且不希望在进行智能连接时包含其内容，请使用此选项。
	- 这仅适用于“块”，不会更改用于匹配整个文件的内容。
- `Show Full Path` - 在智能连接窗格中显示文件的完整路径。如果关闭，只会显示文件名。

### 设置（高级）

- `日志渲染` - 这将打印包含有关嵌入过程详细信息的日志。
- `日志渲染文件` - 这将打印包含有关正在处理的文件详细信息的日志。
- `跳过部分` - 跳过与笔记中特定部分建立连接。不推荐使用此功能，但在某些情况下可能会有帮助，如调试。
- `先前失败的文件` - 这将显示先前失败的文件列表。您可以通过点击“重试”按钮来重试失败的文件。
- `强制刷新` - 这将强制插件重新计算您的存储库中所有文件的嵌入。该插件设计为您不应该需要使用此功能。

## 错误处理

- 如果遇到错误，请在 [GitHub存储库](https://github.com/brianpetro/obsidian-smart-connections/issues) 上开启一个问题。
- 由于速率限制而导致的请求失败将使用指数退避进行最多 3 次的重试，然后插件将停止尝试处理该文件。
- 在第 3 次失败的请求之后，插件将把失败的请求保存到名为 `failed-embeddings.txt` 的文件中，该文件位于您的 vault 中的 `.smart-connections` 文件夹中。
- 您可以在设置中使用 " 重试 " 按钮手动重试失败的文件。

## 在幕后

该插件集成了 [OpenAI Embeddings](https://beta.openai.com/docs/guides/embeddings)，这是 ChatGPT 背后的组织使用的一种技术，用于使用人工智能在笔记之间找到连接。AI 不是通过匹配关键词，而是将您的笔记解释为 1,536 维向量！

*注意：这意味着您的笔记将被发送到 OpenAI 的服务器进行处理，并受其 [服务条款](https://openai.com/terms) 的约束。*“文件排除”和“文件夹排除”设置旨在帮助您控制要处理的笔记。

## 开发插件（即将推出！）

- 该插件旨在管理您的保险库中笔记的向量解释（“嵌入”）。管理此功能的要求可能非常广泛。
- 虽然有很多方法可以解释向量关系并使其有用，但该插件专注于提供利用这种系统所需的核心功能。
- [ ] TODO：使插件 API 可供其他插件重复使用，以查找相关内容。




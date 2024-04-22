---
uid: 2024042221311020
title: Obsidian 插件：【Readme】Cloud Atlas
tags: ['obsidian插件', 'readme']
description: 在您的保险库中使用LLMs的最有效方法：添加您当前的笔记，参考后向链接，以及一个画布模式，以便将所有上下文组合成一个提示。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Cloud Atlas

> [!Note] 插件名片
> - 插件名称：Cloud Atlas
> - 插件作者：Cloud Atlas
> - 插件说明：在您的保险库中使用 LLMs 的最有效方法：添加您当前的笔记，参考后向链接，以及一个画布模式，以便将所有上下文组合成一个提示。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cloud-atlas-ai/obsidian-client)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloud-atlas)

## 概述

在您的保险库中使用 LLMs 的最有效方法：添加您当前的笔记，参考后向链接，以及一个画布模式，以便将所有上下文组合成一个提示。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cloud-atlas-ai/obsidian-client/master/README.md)

---

## Readme(翻译）

下面是 [[cloud-atlas]] 插件的自述翻译

<p xmlns:cc="http://creativecommons.org/ns#" >这项工作受许可。</p>

# 黑曜石云图插件

该插件将 Obsidian 与 Cloud Atlas 集成，通过自动处理笔记、提供上下文响应以及利用各种计算模型和外部系统的功能来简化信息收集，丰富您的笔记体验。

## 云图特点

- **画布流程**：使用交互式画布设置和运行包含输入、上下文和用户提示等组件的流程。
  - 将它们命名为 `<flow name>.flow.canvas`
  - 使用命令面板或云图视图执行它们。
- **Markdown 笔记模式**：直接在 Markdown 文件上运行流程，支持选择上下文或使用当前文件作为上下文。
  - 在 `CloudAtlas/<flow name>.flow.md` 中定义流程
  - 可选地，使用 `CloudAtlas/<flow name>.flowdata.md` 包含额外数据。

### LLM 选项

您可以使用插件与 Cloud Atlas 作为语言模型（LLM）提供商，或者使用自己的 OpenAI 密钥。

- 无需单独的 ChatGPT 账户；可以选择 OpenAI ChatGPT-4 或 AzureAI ChatGPT-4。
- Cloud Atlas 支持视觉任务和实体识别，可自动使用 wikilinks 增强笔记。
- 服务器端嵌入生成，为您的请求添加相关上下文。

## 云图订阅

由于需求量大，我们正在限制作为 LLM 提供商的云图的注册。如果您希望注册，请发送电子邮件至 `signmeup@cloud-atlas.ai`，并简要描述您的预期用途，并确认您愿意支付服务费用（如果服务被证明有价值的话）。

## 使用您自己的 OpenAI 密钥

您可以选择在插件中使用您自己的 OpenAI 密钥。但是，请注意，此模式具有以下限制：

- 实体识别和自动功能不可用。
- 视觉任务不受支持。
- 未包括用于改善上下文相关性的服务器端嵌入。

## 什么是 Flow？

在 Cloud Atlas 中，Flow 是一个强大的工具，可以简化和提升您的记笔记体验。它利用您保险库中已有的内容，让您可以：

1. **自动处理笔记**：将当前笔记的内容转化为丰富的信息或可操作的见解，无需手动干预。
2. **获取上下文响应**：接收针对您特定查询或笔记中提到的主题定制的响应，使您的笔记更具信息量和实用性。
3. **简化信息收集**：轻松汇编和总结笔记中的关键要点，提供快速访问重要信息的途径，帮助您保持组织有序。
4. **定制笔记处理**：个性化处理笔记的方式以及您收到的输出类型，使您的记笔记过程更符合您个人需求和工作流程。

每个 Flow 就像在 Obsidian 中拥有一个个人助手，帮助您高效地管理、分析和增强您的笔记。我们通过 Obsidian 插件和一个服务器组件的结合实现这一点，利用具有知识的系统（天气服务、地图、Wolfram 知识库、维基百科、IMDB 等）和计算模型（Wolfram Alpha、OpenAI ChatGPT 等）。

## 理解插件的功能性

- **指令和提示**：`vault>/CloudAtlas` 子目录中的 `<flow name>.flow.md` 文件。`system_instruction` 属性的值充当 API 的指令或上下文，文件的内容提供特定的提示或问题。
- **API 交互**：活动笔记的内容，以及系统指令、用户提示和其他上下文，会被发送到外部 API。API 会丰富和处理这些内容，然后返回一个响应。
- **追加 API 响应**：来自 API 的响应会自动追加到活动笔记的末尾，根据提供的指令和服务器端处理提供见解、答案或内容。

## 云图插件使用指南

This will walk you through creating, running, and customizing your personal flows. Let's get started.

### 步骤 1：创建一个新的流程

1. **创建一个新的流程**：使用命令面板（`Ctrl/Cmd + P`）并输入 `Create New Flow`。这将在 `CloudAtlas` 目录中创建一个新的 `.flow.md` 文件。
2. **命名您的流程**：遵循命名约定 `CloudAtlas/<flow name>.flow.md` 以进行标记笔记模式。
3. **设置您的流程**：根据需要填充您的新流程文件中所需的内容、上下文和说明。

    ```markdown
    ---
    system_instructions: You are a helpful assistant.
    resolveBacklinks: true
    resolveForwardLinks: true
    exclusionPattern: ["^Private/", ".*-confidential.*"]
    ---

    向用户打招呼。
    ```

    在前置事项（`---` 之间的部分）中，您可以设置各种选项：

    - `system_instructions`：Cloud Atlas 如何协助的说明。
    - `resolveBacklinks` 和 `resolveForwardLinks`：是否包含来自链接笔记的内容。
    - `exclusionPattern`：要排除的笔记模式，用于省略敏感数据。

4. **运行流程**：

### 步骤 2：运行您的流程

1. **打开任何笔记**：创建好您的流程后，在您想要运行流程的保险库中打开任何笔记。
2. **执行流程**：
   1. **从命令面板中**：创建或更新流程后，您可以将其注册为一个命令。转到设置并将其注册为一个命令。这将允许您从命令面板中运行流程。
   2. **从 Cloud Atlas 视图中**：您还可以通过单击流程名称旁边的播放按钮来从 Cloud Atlas 视图中运行流程。
3. **查看结果**：Cloud Atlas 处理笔记并根据您的流程设置追加或替换内容。Cloud Atlas 的响应将显示在您的笔记中。

### 步骤 3：自定义您的流程

1. **创建自定义文件**：在 `CloudAtlas` 目录中，创建一个 `demo.flowdata` 文件来自定义 `demo` 流程。
2. **添加自定义内容和设置**：这里是一个示例定制：

    ```markdown
    ---
    resolveBacklinks: false
    resolveForwardLinks: false
    ---

    我的名字是Muness。我是用户。
    ```

    这个文件允许您：

    - 在处理您的流程时，提供 Cloud Atlas 将考虑的额外内容。
    - 覆盖在 `demo.flow` 中定义的设置。

3. **重新运行您的流程**：在自定义后，返回到任何笔记并再次运行 `demo` 流程。您将看到定制如何影响流程的输出。

就是这样！您现在已经学会了如何使用 Cloud Atlas 插件在 Obsidian 中创建、运行和自定义自己的流程。尽情发挥吧！

## 手动安装插件

### 使用 [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat)

1. 安装 BRAT 插件
    1. 打开 `设置` -> `社区插件`
    2. 如果启用了安全模式，请禁用
    3. *浏览*，搜索 "BRAT"
    4. 安装最新版本的**Obsidian42 - BRAT**
2. 打开 BRAT 设置（`设置` -> `BRAT`）
    1. 滚动到 `Beta插件列表` 部分
    2. `添加Beta插件`
    3. 指定此存储库：`cloud-atlas-ai/obsidian-client`
3. 启用 `Cloud Atlas` 插件（`设置` -> `社区插件`）
4. 在插件设置中设置 API 密钥。您可以通过在 [Cloud Atlas网站](https://www.cloud-atlas.ai/) 注册来获取 API 密钥。




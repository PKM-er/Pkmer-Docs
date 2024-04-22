---
uid: 2024042221420021
title: Obsidian 插件：【Readme】Markpilot
tags: ['obsidian插件', 'readme']
description: Inline completions and chat view powered by OpenAI.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markpilot

> [!Note] 插件名片
> - 插件名称：Markpilot
> - 插件作者：Taichi Maeda
> - 插件说明：Inline completions and chat view powered by OpenAI.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/taichimaeda/markpilot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markpilot)

## 概述

Inline completions and chat view powered by OpenAI.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/taichimaeda/markpilot/main/README.md)

---

## Readme(翻译）

下面是 [[markpilot]] 插件的自述翻译

# 🤖 Markpilot：Obsidian 的 AI 驱动内联完成和聊天视图

![workflow](https://github.com/taichimaeda/markpilot/actions/workflows/ci.yaml/badge.svg)

![semver](https://img.shields.io/badge/semver-1.0.9-blue)

Markpilot 是一个 Obsidian 插件，提供内联完成功能和侧边栏中的聊天视图。它由 OpenAI API 驱动，旨在为 Obsidian 提供类似于 [GitHub Copilot](https://github.com/features/copilot) 的体验。

已知有一些提供类似功能的插件，例如 [Obsidian Companion](https://github.com/rizerphe/obsidian-companion) 提供 AI 驱动的自动完成，以及 [Obsidian Copilot](https://github.com/logancyang/obsidian-copilot) 提供聊天 UI。然而，Markpilot 旨在成为一个提供两种功能的 _GitHub Copilot 风格 _ 替代方案，具有更复杂的 UI/UX，包括：

- 上下文感知的完成
  - 检测 Markdown 代码块的语言。
  - 仅将代码块内的内容提供给生成相关的完成。
- 更好地处理内联完成
  - 通过两次按 `Tab` 键强制完成。
  - 通过按 `Esc` 键拒绝完成。
- 快速的内存缓存以节省成本。

Markpilot 还提供了类似于 [OpenAI API平台](https://platform.openai.com/usage) 的使用情况条形图可视化，而 Markpilot 在一个插件中提供了两种功能，使其成为用户更方便管理其 API 使用情况的选择。

正如前面提到的，Markpilot 的聊天视图 UI 受到 [GitHub Copilot for VSCode](https://code.visualstudio.com/docs/copilot/overview) 的启发。此外，我还从 [codemirror-copilot](https://github.com/asadm/codemirror-copilot) 中汲取了一些灵感，用于 Markpilot 内联完成所使用的 CodeMirror 扩展的实现。

## 演示

### 内联完成

[内联完成演示](https://github.com/taichimaeda/markpilot/assets/28210288/5659c12b-22d2-4427-ad98-c4376c7718d8)

### 聊天视图

[聊天视图演示](https://github.com/taichimaeda/markpilot/assets/28210288/a4ba56a9-9672-4560-a4a4-829a3cfeceed)

## 开始

Markpilot 需要一个 OpenAI API 密钥才能工作，您可以从 [OpenAI API](https://platform.openai.com/docs/guides/authentication) 获取。

1. 从 Obsidian 社区插件中安装插件。
2. 在插件设置中，转到**Community Plugins** > **Markpilot** > **OpenAI** > **OpenAI API Key**，并输入您的 OpenAI API 密钥。
3. 可选地根据您的喜好自定义插件设置，并在需要节省使用成本时启用缓存。
4. 您已经准备就绪 - 尽情使用 Markpilot 吧！

## 注意事项

此插件将您的内容发送到 OpenAI API 以生成完成内容。

您应该谨慎发送敏感信息到 API，并了解使用 API 所涉及的成本。该插件提供了使用限制功能，以帮助您管理成本，但监控您的使用和成本是您的责任。

## 特点

- 内联完成
  - 在您输入时提供上下文感知的完成。
  - 通过两次按下 `Tab` 键强制完成，无需等待时间。
  - 通过按下 `Esc` 键拒绝完成。
  - 从命令面板中启用/禁用完成。
- 聊天视图
  - 从侧边栏打开聊天视图。
  - 通过按下 `Enter` 键发送消息，通过按下 `Shift + Enter` 键添加新行。
  - 从命令面板中清除聊天历史记录。
- 缓存
  - 内存缓存以节省成本。
  - 重新加载插件或 Obsidian 后，完成将丢失。
- 用法
  - 设置每月使用限制，当达到限制时自动禁用功能。
  - 从设置选项卡中的图表监视成本。
  - 这些成本是根据用于完成的令牌数量估算的。

## 自定义

您可以从设置选项卡自定义大多数插件设置。

您可能希望自定义的一些设置包括：

- 模型
  - 将模型更改为 GPT-4 可能会给您更好的完成，但这将花费更多。
  - 您可以选择 [OpenAI的Node API](https://github.com/openai/openai-node) 提供的任何模型，但一些不太常见的模型可能无法按预期工作或给出不正确的成本估算。
- 温度
  - 温度越高，您获得的创意完成越多。
  - 温度越低，您获得的保守完成越多。
- 窗口大小
  - 窗口大小确定输入模型以生成内联完成的字符数。
  - 窗口大小越大，您获得的上下文感知完成越多，但生成完成的时间会更长，并且会更少地命中缓存。
- 等待时间
  - 发送内容到模型生成完成之前等待的毫秒数。

## 常见问题

### 我如何获得 OpenAI API 密钥？

您可以从 [OpenAI API](https://platform.openai.com/docs/guides/authentication) 获取 OpenAI API 密钥。

### 我无法通过按 `Tab` 键来接受完成

目前一些扩展如 [Obsidian Outliner](https://github.com/vslinko/obsidian-outliner) 使用 `Tab` 键来实现它们自己的功能，这将与 Markpilot 的完成功能发生冲突。

虽然我找不到关于这个的文档，但似乎按插件启用的顺序加载按键绑定，所以您可以尝试禁用冲突的插件，然后再次启用它以优先使用 Markpilot 的按键绑定。

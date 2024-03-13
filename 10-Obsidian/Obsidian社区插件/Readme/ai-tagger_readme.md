---
uid: 2024031219294338
title: Obsidian 插件：【Readme】AI Tagger
tags: ['obsidian插件', 'readme']
description: 简化标记。只需点击一下即可立即分析和标记您的文档，以便高效地组织笔记。需要OpenAI API密钥。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI Tagger

> [!Note] 插件名片
> - 插件名称：AI Tagger
> - 插件作者：Luca Grippa
> - 插件说明：简化标记。只需点击一下即可立即分析和标记您的文档，以便高效地组织笔记。需要 OpenAI API 密钥。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lucagrippa/obsidian-ai-tagger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-tagger)

## 概述

简化标记。只需点击一下即可立即分析和标记您的文档，以便高效地组织笔记。需要 OpenAI API 密钥。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucagrippa/obsidian-ai-tagger/master/README.md)

---

## Readme(翻译）

下面是 [[ai-tagger]] 插件的自述翻译

【机翻】

# AI 标签器

AI 标签器是一个 Obsidian（<https://obsidian.md>）插件，通过使用 OpenAI 的先进大型语言模型（LLMs）来分析并一键标记您的文档，从而简化标记过程！

该插件会分析您在编辑器中打开的当前文档以及您之前使用过的所有标签。AI 标签器将返回最多 5 个您先前使用过的相关标签，并生成最多 3 个全新的标签。

## 如何使用

### 设置 AI 标签器

- 在设置选项卡中输入您的 OpenAI API 密钥。（如果您没有 API 密钥，可以在 [OpenAI](https://platform.openai.com/account/api-keys) 上创建一个）
- 选择您想要使用的模型（LLM）`GPT-3.5-Turbo` 或 `GPT-4`

### 一键标记

- 使用插件最简单的方法是从位于左侧边栏上的功能区开始。
- 单击“魔杖”功能区图标，自动生成当前文档的标记。

    ![一键标记](https://cdn.pkmer.cn/covers/ai-tagger_2_0.gif!pkmer)

### 更精确的标记

- 另一种调用 AI 标记器的方法是从命令面板 (`Ctrl+P` 或 macOS 上的 `Cmd+P`)。
- 使用命令面板导航到“生成标记”命令以为当前文档添加标记。
- 要为文档的特定部分添加标记，请在使用命令面板之前突出显示文本。

    ![命令面板标记](https://cdn.pkmer.cn/covers/ai-tagger_2_1.gif!pkmer)

## 安装

导航到 Obsidian 设置中，在社区插件部分搜索 AI Tagger。您也可以手动从该存储库的 GitHub 发布中下载最新版本，将 ZIP 文件提取到 Obsidian 插件文件夹中。

## 支持

如果您在使用 AI Tagger 插件时遇到任何问题，或者有任何改进建议，请在此 GitHub 存储库上提交问题。我们也欢迎 Pull 请求。

## 许可证

[MIT 许可证](LICENSE)

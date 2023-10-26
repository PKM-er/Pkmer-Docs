---
uid: 2023102611072240
title: Obsidian 插件：【Readme】Auto Tag
tags: ['obsidian插件', 'readme']
description: 轻松为您的Obsidian笔记或选定的文本生成相关标签。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Tag

> [!Note] 插件名片
> - 插件名称：Auto Tag
> - 插件作者：Control Alt
> - 插件说明：轻松为您的 Obsidian 笔记或选定的文本生成相关标签。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/CtrlAltFocus/obsidian-plugin-auto-tag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-tag)

## 概述

轻松为您的 Obsidian 笔记或选定的文本生成相关标签。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/CtrlAltFocus/obsidian-plugin-auto-tag/main/README.md)
>

---

## Readme(翻译）

下面是 [[auto-tag]] 插件的自述翻译

# Obsidian.md 的自动标签插件

利用 OpenAI 的强大功能，轻松为您的 Obsidian 笔记生成相关标签。

## Beta 通知

该插件目前处于测试阶段，直到有更多用户进行测试。

您可能会遇到新的错误，并且插件可能无法按预期工作。请在 GitHub 上报告您遇到的任何问题，或通过 X（Twitter）@ctrl_alt_focus 与我联系。

## 概述

Obsidian 的 Auto Tag 插件可以帮助用户自动生成笔记的标签。无论您对使用哪些标签感到不确定，忘记添加它们，还是只是想增强笔记的元数据，这个插件都能满足您的需求。

## 特点

- **自动标签生成**：分析整个笔记或仅选定部分以生成相关标签。
- **Frontmatter 集成**：自动将标签插入笔记的 Frontmatter 中。如果 Frontmatter 不存在，插件将创建它。
- **OpenAI 驱动**：利用 OpenAI 的 API 确保准确和相关的标签建议。
- **演示模式**：无需 API 密钥即可尝试插件的功能和设置组合。

## 入门指南

- 安装：从 Obsidian 的社区插件列表中安装 Auto Tag 插件。
- 使用方法：
  - 在 Obsidian 中打开一个笔记。
  - 可选地，选择一部分文本。
  - 通过命令下拉菜单触发“Auto Tag”命令。
- OpenAI API 设置：
  - 在 [https://platform.openai.com](https://platform.openai.com) 上创建一个新的 API 密钥。
  - 设置您的计费方式并设置一个最大月度消费限额（例如从 1 美元开始）。
  - 打开插件设置并输入您的 API 密钥。
保持成本低廉

该插件默认启用**演示模式**，允许用户在决定设置 OpenAI API 密钥之前体验其功能。请注意，使用 OpenAI API 需要设置付款并产生费用，因此在启用完整模式之前，请先查看 OpenAI 的定价。

GPT 3.5 模型的使用成本非常低廉，而且效果也足够好。您可以先设置每月最高**1 或 2 美元**的成本限制，然后观察情况如何。

如果有比 OpenAI 更便宜且足够好的替代方案，您希望我尝试一下，请告诉我！

反馈与支持

如果您有建议、问题或只是想分享您对插件的体验，请在 GitHub 上创建一个问题。

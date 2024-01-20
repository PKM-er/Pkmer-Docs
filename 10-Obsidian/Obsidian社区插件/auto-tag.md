---
uid: 20231027184032
title: Obsidian 插件：Auto Tag 基于 AI 来为笔记生成标签
tags: ['obsidian插件', 'AI', '标签']
description: 轻松为您的Obsidian笔记或选定的文本生成相关标签。
author: OS
type: other
draft: false
editable: false
modified: 20240116112810
---

# Obsidian 插件：Auto Tag 基于 AI 来为笔记生成标签

## 概述

利用 OpenAI 的强大功能，轻松为您的 Obsidian 笔记生成相关标签。

> [!Note] 插件名片
> - 插件名称：Auto Tag
> - 插件作者：Control Alt
> - 插件说明：轻松为您的 Obsidian 笔记或选定的文本生成相关标签。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/CtrlAltFocus/obsidian-plugin-auto-tag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-tag)

> [!Note] Beta 通知
> - 该插件目前处于测试阶段，直到有更多用户进行测试。
> - 您可能会遇到新的错误，并且插件可能无法按预期工作。请在 GitHub 上报告您遇到的任何问题，或通过 X（Twitter）@ctrl_alt_focus 与我联系。

## 效果&特性

- **自动标签生成**：分析整个笔记或仅选定笔记部分以生成相关标签
- **Frontmatter 集成**：自动将标签插入笔记的 Frontmatter 中。如果 Frontmatter 不存在，插件将创建它
- **OpenAI 驱动**：利用 OpenAI 的 API 确保准确和相关的标签建议
- **演示模式**：无需 API 密钥即可尝试插件的功能和设置组合

![image.png](https://cdn.pkmer.cn/images/20240116112246.png!pkmer)

## 使用

### 入门指南

  - 在 Obsidian 中打开一个笔记。
  - 可选地，选择一部分文本，或针对整个笔记
  - 通过命令面板中点击“Auto Tag”命令。
  - 稍等片刻，插件回自动根据在 YAML 区域插入 tags 标签，如果有多条标签那么就以 list 模式插入

### 设置

- Prefix newly suggested tags with "#autotag/"：在生成的标签前面增加 autotag 标识，这样的设计有助于你是自己生成的，还是 AI 生成的。默认开启，当然你也可以关闭
- In front-matter insert under "autotags:"instead of "tags:"：是否使用 autotags 属性来代替 tags 属性。个人觉得自动生成的标签使用整个更好，而不是增加 "#autotag/"
- How to format tags?：标签的格式方式
- See estimated cost before taking action：生成前提示 API 消费情况
- Review and approve suggested tags before inserting them：在插入 AI 生成的标签前，需要你二次确认

### 关于 AI 成本

  - OpenAI API 设置：
	  - 在 [https://platform.openai.com](https://platform.openai.com) 上创建一个新的 API 密钥。
	  - 设置您的计费方式并设置一个最大月度消费限额（例如从 1 美元开始）。
	  - 打开插件设置并输入您的 API 密钥。

该插件默认启用**演示模式**，允许用户在决定设置 OpenAI API 密钥之前体验其功能。

> [!Warning] 请注意
> - 使用 OpenAI API 需要设置付款并产生费用，因此在启用完整模式之前，请先查看 OpenAI 的定价。
> - GPT 3.5 模型的使用成本非常低廉，而且效果也足够好。您可以先设置每月最高**1 或 2 美元**的成本限制，然后观察情况如何。

如果有比 OpenAI 更便宜且足够好的替代方案，您希望我尝试一下，请告诉我！

反馈与支持

如果您有建议、问题或只是想分享您对插件的体验，请在 GitHub 上创建一个问题。

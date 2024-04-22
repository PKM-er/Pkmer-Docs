---
uid: 2024042221313807
title: Obsidian 插件：【Readme】Dictionary translator
tags: ['obsidian插件', 'readme']
description: 帮助您快速划出单词翻译并在笔记中插入单词卡。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Dictionary translator

> [!Note] 插件名片
> - 插件名称：Dictionary translator
> - 插件作者：Grover
> - 插件说明：帮助您快速划出单词翻译并在笔记中插入单词卡。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/grover572/obsidian-Dictionary-translator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dictionary-translator)

## 概述

帮助您快速划出单词翻译并在笔记中插入单词卡。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/grover572/obsidian-Dictionary-translator/master/README.md)

---

## Readme(翻译）

下面是 [[dictionary-translator]] 插件的自述翻译

# Obsidian-Dictionary-translator

[Chinese Documentation](doc%2Freadme%28cn%29.md)

## 我能为您做什么？

这是一个简单的插件，旨在帮助您扩展知识库，同时快速翻译不熟悉的单词或句子，并生成可以插入笔记本的闪卡。此外，您还可以将翻译引擎的发音文件保存到您的保险库中，如果需要，还可以录制您自己的发音。

## 如何使用

1. 配置翻译引擎
	![setting.png](doc%2Fsetting.png)
2. 右键单击要翻译的单词（您可以记录自己的发音）
   ![translator.gif](doc%2Ftranslator.gif)

## 支持的翻译引擎

- [x] 有道翻译
- [ ] 谷歌翻译
- [ ] 微软翻译

#### 自定义翻译引擎

1. 创建一个自定义策略类：实现抽象类 `TranslationStrategy`。
2. 将您的自定义策略类添加到 `TranslateEngines` 中：
    1. 向您的自定义翻译引擎发出请求。
    2. 解析响应并封装为 `TranslateResponse` 类型的响应。
3. 在 `setting.ts` 中为您的翻译引擎添加一个唯一的配置项。

通过本指南，您可以清晰简洁地了解如何利用插件进行翻译和学习。按照这些步骤，您可以轻松地将翻译引擎集成到您的工作流程中，提高您理解和保留新信息的能力。

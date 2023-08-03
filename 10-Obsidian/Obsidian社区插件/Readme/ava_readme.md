---
uid: 2023080322144277
title: Obsidian 插件：【Readme】Ava
tags: ['obsidian插件', 'readme']
description: 使用ChatGPT快速格式化您的笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Ava

> [!Note] 插件名片
> - 插件名称：Ava
> - 插件作者：louis030195
> - 插件说明：使用ChatGPT快速格式化您的笔记
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/louis030195/obsidian-ava)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ava)

## 概述

使用ChatGPT快速格式化您的笔记

![Ava](https://cdn.pkmer.cn/covers/ava_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/different-ai/obsidian-ava/main/README.md)
> 

---

## Readme(翻译）

下面是 [[ava]] 插件的自述翻译


❗️不再维护
# AVA - Obsidian的AI助手

> 发挥Obsidian笔记的全部潜力，将您的生产力提升到一个新的水平。

### 栈

- [Embedbase（OpenAI嵌入+Supabase）](https://github.com/different-ai/embedbase)用于链接
- FastAPI

你可以用AVA做什么？

- [生成博客文章](https://github.com/louis030195/obsidian-ava/blob/main/README.md#generate-meaningful-text-from-your-notes)
- [自动格式化段落](https://github.com/louis030195/obsidian-ava/blob/main/README.md#write-rewrite)
- [链接相关笔记](https://github.com/louis030195/obsidian-ava/blob/main/README.md#connect-the-dots-leverage-your-knowledge)
- [生成令人惊叹的可视化效果](https://github.com/louis030195/obsidian-ava/blob/main/README.md#create-images-from-selected-text)
- [向你的第二大脑提问](https://github.com/louis030195/obsidian-ava/blob/main/README.md#ask-questions)

https://user-images.githubusercontent.com/25003283/210828303-793c3331-f9e3-4059-9c23-7f6d97252edb.mp4

### 从您的笔记中生成有意义的文本。

> **摆脱写作低谷。AVA帮助您为下一篇文章生成内容。无论是一个小段落还是整篇博客文章 - 我们都能满足您的需求。**

1. 按下：<img  alt="cmd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Looped_square_on_white_background.svg/560px-Looped_square_on_white_background.svg.png?20071209071920" width="16" height="16"> + P
2. 输入：写段落

![段落](https://user-images.githubusercontent.com/11430621/207849826-aa59103a-3e60-47ec-85bd-45076ebf8960.gif)

### 写作。重写。

> **将你的未经过滤的想法写在纸上，并在适应你的受众之前使用我们的重写工具。**

1. 按下：<img  alt="cmd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Looped_square_on_white_background.svg/560px-Looped_square_on_white_background.svg.png?20071209071920" width="16" height="16"> + P
2. 输入：重写所选内容

![rewrite](https://user-images.githubusercontent.com/25003283/213139728-23ad27fa-1c05-4e58-8bad-5ec41768d1e5.gif)

### 连接各个要点。充分利用你的知识。

> **在几秒钟内自动链接你的笔记。使用“链接”快捷方式自动连接一条笔记到现有内容。**

#### 安装

1. 进入设置并勾选“使用链接”

#### 用法

1. 按下：<img  alt="cmd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Looped_square_on_white_background.svg/560px-Looped_square_on_white_background.svg.png?20071209071920" width="16" height="16"> + P
2. 输入：链接注释

![New Recording Mar 19 2023 1003 AM (1)](https://user-images.githubusercontent.com/25003283/226165955-87a59a7c-a8bc-45f9-9e14-c92fec429861.gif)

### 从选定的文本创建图像

> **创建图像和可视化以说明您的想法，并帮助您和读者理解您所说的内容。**

1. 按下：<img  alt="cmd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Looped_square_on_white_background.svg/560px-Looped_square_on_white_background.svg.png?20071209071920" width="16" height="16"> + P
2. 输入：生成图像

![images](https://user-images.githubusercontent.com/25003283/208254052-136f3fac-3ef6-46d5-85eb-73a4d249ffdf.gif)

### 提问问题

> **向一个比你自己更了解你的ChatGPT提问。**

1. 按下：<img  alt="cmd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Looped_square_on_white_background.svg/560px-Looped_square_on_white_background.svg.png?20071209071920" width="16" height="16"> + P
2. 输入：提问

> 它是如何工作的？我们将你的问题通过你的保险库搜索的上下文提供给ChatGPT，并要求它回答。

## 入门指南

1. 从Obsidian的社区插件列表中安装Ava

我们建议您尝试一下Ava的教程，您可以在这里找到：

![image](https://user-images.githubusercontent.com/25003283/213156343-c44c0e64-8c22-47f2-81b3-2faad460a717.png)

**不起作用怎么办！**

> 请联系ben@prologe.io。我们将亲自帮助您安装。

它是如何工作的？

Ava由[Embedbase提供支持，Embedbase是一个开源的API，用于轻松创建、存储和检索嵌入](https://github.com/another-ai/embedbase-ava)。

### 数据隐私

您的笔记内容**不会存储在我们的数据库中**。该代码是[开源的](https://github.com/different-ai/embedbase-ava)。

## 技术限制

- [链接功能](https://github.com/louis030195/obsidian-ava/blob/main/README.md#connect-the-dots-leverage-your-knowledge) 尚未对非常大的笔记进行索引

> 不要落后于人群。立即利用人工智能增强您的学习能力。




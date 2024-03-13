---
uid: 2024031219330462
title: Obsidian 插件：【Readme】Prompt ChatGPT
tags: ['obsidian插件', 'readme']
description: 将模板提示发送给ChatGPT，当您打开一个文件时。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Prompt ChatGPT

> [!Note] 插件名片
> - 插件名称：Prompt ChatGPT
> - 插件作者：Coduhuey
> - 插件说明：将模板提示发送给 ChatGPT，当您打开一个文件时。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Coduhuey/ChatGPT-Prompt-Plugin-For-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chatgpt-prompt)

## 概述

将模板提示发送给 ChatGPT，当您打开一个文件时。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Coduhuey/ChatGPT-Prompt-Plugin-For-Obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[chatgpt-prompt]] 插件的自述翻译

【机翻】

# ChatGPT 模板提示

为了最大限度地提高 ChatGPT 的效率，您需要一个好的提示。

这么重要，以至于有关于如何编写好的 ChatGPT 提示的指南：<https://www.coursera.org/articles/how-to-write-chatgpt-prompts>

这个插件的作用：

- 通过在创建/打开笔记时创建并发送提示到 ChatGPT 来消除工作流程摩擦

您所需要做的就是在您的笔记中创建一个模板，分配一个标签，这个插件将使用您的模板向 ChatGPT 发送一个提示。

您可以使用的一个示例提示：

~~~
我想深入了解{{title}}？你能：
1. 提供一个快速摘要
2. 提供一个我可以了解更多的YouTube视频
3. 给我展示更多信息的文章或链接

 这是我目前的内容： 
 {{context}}
~~~

或者

~~~
我想开始{{title}}。你能：
1. 提供一个关于如何开始的路线图或逐步说明
2. 关于这个主题的快速摘要
3. 提供一个我可以了解更多的YouTube视频
~~~

- {{title}} 将被替换为笔记的标题（必需）
- {{context}} 将被替换为您当前在笔记中写的内容（最多 5000 个字符），这是可选的

![TemplateExample](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_0.png!pkmer)

然后在设置中分配一个标签和一个模板：

![SettingsExample](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_1.png!pkmer)

您可以通过用逗号分隔每个来分配多个（标签 + 模板对）。只需确保您想要关联在一起的标签和模板是按照相同的顺序排列的（并且逗号之间没有空格！）：

![MultipleTags](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_2.png!pkmer)

然后当您打开一个带有该标签的文件时，您将收到来自 ChatGPT 的响应与您的提示：

![ResponseExample](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_3.png!pkmer)

## 如何使用

- 从 Obsidian 社区插件中安装此插件
- 启用插件
- 从以下网址获取您的 API 密钥：<https://platform.openai.com/api-keys>
- 创建一个类似上面示例的模板，确保使用{{title}}（可选地使用{{context}}）
- 打开“Prompt ChatGPT”设置
- 添加 API 密钥
- 添加模板的路径和相关标签
- 打开一个文件并观察它的工作情况

## 附加功能

### 用于询问 ChatGPT 更多问题的聊天框

如果您无法直接与 ChatGPT 通信，那将是一个糟糕的 ChatGPT 插件。

这是一个有用的功能，用户可以在提示后继续提问。

### 每个笔记一个对话

侧边栏的视图会根据光标所在的笔记更新。因此，如果您在不同的笔记之间切换，ChatGPT 不会有重叠的上下文。

光标在左侧笔记上：

![CursorLeft](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_4.png!pkmer)

光标在右侧笔记上：

![CursorRight](https://cdn.pkmer.cn/covers/chatgpt-prompt_2_5.png!pkmer)

### 会话保留

ChatGPT 的 API 对免费用户发送的响应数量有限制：<https://medium.com/apis-with-valentine/chatgpt-openai-api-error-you-exceeded-your-current-quota-please-check-your-plan-and-billing-327ecca7144e>

理想情况下，每次使用此 API 都会与 ChatGPT 创建新的对话，但这样做将使此插件只适用于向 ChatGPT 付费订阅的用户。

存储每次对话都是昂贵的，特别是如果用户有许多带有与 ChatGPT 对话的笔记。

因此，此插件会将您从 ChatGPT 获取的最新对话存储在您在设置中指定的天数内。您设置的时间越长，就越不容易达到配额。但设置得太高会影响您的性能（上限为 30 天）。

### 自定义 ChatGPT 行为

在设置中，您可以更改 ChatGPT 的行为。默认设置是“您是一个乐于助人的助手。”但如果您愿意，您也可以使其变得古怪。

这只是一个有趣的功能，但它在 ChatGPT 的 api 中，所以我想为用户也做成可定制的。

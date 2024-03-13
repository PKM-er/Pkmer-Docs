---
uid: 2024022117284822
title: Obsidian 插件：【Readme】Intelligence
tags: ['obsidian插件', 'readme']
description: OpenAI GPT 助手功能
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Intelligence

> [!Note] 插件名片
> - 插件名称：Intelligence
> - 插件作者：John Mavrick
> - 插件说明：OpenAI GPT 助手功能
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ransurf/obsidian-intelligence)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?intelligence)

## 概述

OpenAI GPT 助手功能

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ransurf/obsidian-intelligence/master/README.md)

---

## Readme(翻译）

下面是 [[intelligence]] 插件的自述翻译

# 情报

## 免责声明

在使用类似 GPT-4 这样的大型语言模型时，请自行了解相关价格，网址为<https://openai.com/pricing>。该模型使用助手 API，包括以下费用：

- 代码解释器 - $0.03/会话（直到 2023 年 12 月 13 日免费）
- 检索 - $0.20/GB/助手/天（直到 2024 年 1 月 12 日免费）
- gpt-4-1106-preview - $0.01/1K标记（输入），$0.03/1K 标记（输出）

如有反馈和问题，请随时加入我的 [discord](https://discord.com/invite/aQgbyj522e) 并查看插件上的笔记。

如有错误，请创建 Github 问题。

要使此页面上的链接有效，请查看我 [发布的保险库](https://publish.obsidian.md/johnmavrick/My+Areas/%E2%9B%B0%EF%B8%8F+Obsidian+Intelligence) 上的文档。

## 特点

这个插件将 [OpenAI助手API](https://platform.openai.com/docs/assistants/overview) 与 Obsidian 集成。

目前功能处于测试阶段，所以它的功能还不如我希望的那样强大，但随着 OpenAI 改进助手功能，其工具可以用于更加细致的工作流程，助手将需要更少的手把手指导。

### 助手

在 Obsidian 中创建和个性化您的 GPT 助手：

- 提供自定义指令以供遵循，在不同对话中重复使用相同的助手
- 从您的笔记中上传特定文件到助手
- 代码解释器 - 使助手能够编写和运行代码。此工具可以处理具有不同数据和格式的文件，并生成诸如图形之类的文件
- 检索 - 使助手具有您或您的用户上传的文件中的知识。一旦上传文件，助手会根据用户请求自动决定何时检索内容。

### 线程

在 Obsidian 中与助手开始对话：

- 在一个对话中使用不同的助手
- 可点击的脚注显示助手回复的来源

### 从笔记中创建助手

运行命令 `Obsidian Intelligence: Create Assistant from Active Note`，将当前文件以及通过外链和反向链接相关的笔记自动包含到助手文件中（由于 OpenAI 的限制，您最多只能有 20 个）。

### 未来功能

- 利用智能连接嵌入存储来建议相关笔记或将其包含在搜索中
- 允许自定义微命令

## 安装步骤

### 通过 BRAT

跟随 [TfTHacker的指南](https://tfthacker.com/Obsidian+Plugins+by+TfTHacker/BRAT+-+Beta+Reviewer's+Auto-update+Tool/Quick+guide+for+using+BRAT)，使用这个 github 存储库的链接，<https://github.com/ransurf/obsidian-intelligence>

## 使用案例示例

### Dataview 助手

如果您正在我的保险库上阅读此内容，请转到 [[使用AI创建Dataview助手]]

如果您在 Github 的自述文件上，请访问<https://publish.obsidian.md/johnmavrick/Create+a+Dataview+Assistant+with+AI>

### 更精确的嵌入

- [[GPT Retrieval]] 可以帮助您总结书籍笔记

```
根据[[我的个人品牌语调]]，使用[[PARA方法]]中的内容，按照我的[[博客文章大纲]]结构创建一篇博客文章。
```

根据 PARA 方法和品牌语调指南中的笔记信息，这里是博客文章的草稿，符合所需的结构：

# 用 PARA 方法升级你的生活游戏

嘿，玩家们，你们有没有觉得自己的任务日志里塞满了未分类的任务？你们是否在努力保持你的库存有序——我是说，你的生活工作和激情有序？那么，现在是时候用 PARA 方法来升级了。

## 带着目的开始任务

项目是 PARA 框架中的主要任务，将其视为那些高风险任务，最终会有甜蜜奖励。但在这里，战利品是实现你的现实生活目标。每个项目都是一系列旨在实现特定目标的任务，设有截止日期以保持你的警觉。

## 掌握终身领域

现在让我们来谈谈你角色的核心属性。在 PARA 中，“领域”是那些你需要维持和提高的长期、基本属性，比如力量或智力。它们涵盖了你扮演的所有角色，从战略性的团队领袖到家庭中支持性的公会成员。

## 收集史诗资源

曾经有没有在你的包里放着一样你知道总有一天会派上用场的物品？这就是你生活清单中的“资源”。这些是你关心的主题上的笔记、链接和想法的集合。将知识储存在你的个人“Zettelkasten”中，看着这些资源在你甚至还没有遇到的任务中赋予你力量。

## 存档：您的任务日志记忆

最后但并非最不重要的是，“已存档”是您的积压任务——一旦完成，任务就会进入这里。这是您存储所有过去胜利（和学习时刻）以供回顾的地方。清理当前任务以进行存档可以使您的任务列表保持新鲜和可管理。

## 结论：通往胜利的道路

像每个经验丰富的玩家一样，您知道拥有清晰的游戏计划的重要性。PARA 就像您的终极策略指南，帮助整理混乱。因此，在您组织史诗般的人生旅程时，拥抱成长、学习和发现的快乐。准备好升级了吗？

---

我将帖子控制在 500 字以内，以满足标准，并包含了与游戏相关的隐喻、希望和积极的语气，以及 Markdown 格式和项目列表【12†source】【14†source】【23†source】。如果您希望进行任何调整或添加更多细节，请随时告诉我！

### 项目管理

### 从您的笔记中学习

使用 [[#从笔记创建助手]] 功能，您可以借助 [[GPT检索]] 功能将内容转化为更具体的嵌入。

## 免责声明

### 访问限制

需要付费才能获得完整访问权限，因为您需要使用自己的 API 密钥。

未来可能还需要额外付费以获取功能和账户注册，以便将信息存储在云端，但目前尚未实施。

### 网络服务

为了允许 AI 相关功能，插件使用 OpenAI API 来创建/修改/删除助手、线程和消息。

### 推广

可能会涉及到如何使用插件的教程和资源，以及对个人品牌的自我推广。

### 与 AI 相关的免责声明

**您正在使用哪个 LLM？它是在本地运行还是在线运行？**

在插件发布时，GPT 助手功能只能通过 OpenAI 的 gpt-4-1106-preview 模型访问。

**您发送给 LLM 的是什么上下文？整个存储库，几个笔记，当前笔记，笔记片段？如何知道？**

目前它发送您传入的笔记内容，您创建的助手/线程的配置（标题，说明），以及您发送给它的消息。

将来可能会使用嵌入来查找相关笔记，这将需要您将所有笔记发送给 OpenAI 以生成嵌入。

**您是否主动删除输入/输出数据？如果是，您会保留多长时间？**

存储遵循 OpenAI 政策。在未来。

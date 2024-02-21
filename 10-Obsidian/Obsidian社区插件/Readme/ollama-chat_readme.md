---
uid: 2024022121204165
title: Obsidian 插件：【Readme】Ollama Chat
tags: ['obsidian插件', 'readme']
description: 一个为Obsidian设计的插件，可以借助Ollama和LlamaIndex与您的笔记进行聊天。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ollama Chat

> [!Note] 插件名片
> - 插件名称：Ollama Chat
> - 插件作者：Brumik
> - 插件说明：一个为 Obsidian 设计的插件，可以借助 Ollama 和 LlamaIndex 与您的笔记进行聊天。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/brumik/obsidian-ollama-chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ollama-chat)

## 概述

一个为 Obsidian 设计的插件，可以借助 Ollama 和 LlamaIndex 与您的笔记进行聊天。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/brumik/obsidian-ollama-chat/main/README.md)
>

---

## Readme(翻译）

下面是 [[ollama-chat]] 插件的自述翻译

# 🦙 黑曜石奥拉玛聊天

这个插件允许你向你的本地奥拉玛询问关于你自己笔记的信息。

## 要求

索引在 JS 中是缓慢且难以实现的。因此，您需要在您的 ollama 旁边运行一个轻量级的 python 服务器来为您进行索引。

有关进展和安装的更多信息，请参见：<https://github.com/brumik/ollama-obsidian-indexer>

## 特点

- 在本地运行您自己的模型。设置该模型的 URL 并开始运行
- 在启动时和文件修改时索引您的文件
- 通过快捷键或命令打开一个模态框来提问您的问题

## 未来计划

- 查询 LLM 时进行文本流式传输
- 聊天窗口用于聊天式通信，而不是查询
- 添加用于快速查询的有用查询命令，例如：
	- 总结笔记
	- 总结主题

欢迎任何功能建议。

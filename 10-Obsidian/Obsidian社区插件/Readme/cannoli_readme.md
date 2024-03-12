---
uid: 20231220112631
title: Obsidian 插件：【Readme】Cannoli
tags: ['obsidian插件', 'readme']
description: 在Obsidian画布上创建和运行LLM脚本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Cannoli

> [!Note] 插件名片
> - 插件名称：Cannoli
> - 插件作者：blindmansion
> - 插件说明：在 Obsidian 画布上创建和运行 LLM 脚本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/DeabLabs/cannoli)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cannoli)

## 概述

在 Obsidian 画布上创建和运行 LLM 脚本。

![Cannoli](https://cdn.pkmer.cn/covers/cannoli.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/DeabLabs/cannoli/main/README.md)

---

## Readme(翻译）

下面是 [[cannoli]] 插件的自述翻译

# Cannoli

Cannoli 允许您使用 Obsidian Canvas 编辑器构建和运行无代码 LLM 脚本。

什么是 Cannoli？

Cannoli 是利用 Openai API 来读取/写入您的保险库，并使用 HTTP 请求执行操作的脚本。Cannoli 是在 Obsidian Canvas 编辑器中创建的，使用卡片和箭头来定义变量和逻辑。它们可以在 Obsidian 中使用控制栏按钮或命令面板运行。

使用颜色或前缀，您可以创建不同类型的节点和箭头，以定义基本的逻辑功能，如变量、字段、循环和分支选择。如果一个 Canvas 是有向无环图，并遵循 Cannoli 模式，它可以作为一个 cannoli 运行。

Cannoli 还可以用于制作具有自定义逻辑和功能的 llm-chatbot。具备流式传输和可自定义格式。

## 文档

您可以在插件设置中访问一个包含示例 cannolis 的演示文件夹（完整文档网站即将推出）。

![Cannoli College](https://cdn.pkmer.cn/covers/cannoli_2_0.png!pkmer)

运行 Cannolis 有几种方式：

![Icon](https://cdn.pkmer.cn/covers/cannoli_2_1.png!pkmer)

- 点击 Cannoli 的功能区图标
    - 如果你在一个画布文件上，它将作为一个 cannoli 运行
    - 如果你在一个带有 "cannoli" 属性的笔记上，该属性中的画布文件将作为一个 cannoli 运行
- 在命令面板中运行 " 启动/停止 cannoli" 命令（与功能区图标的功能相同）
- 如果画布文件的名称以 ".cno" 结尾，它将在命令面板中有自己的运行命令
- 在带有 "cannoli" 属性的笔记上进行音频录制
    - 该录音将（1）使用 Whisper 进行转录，（2）替换引用，并（3）触发属性中定义的 cannoli。

## 网络使用

- Cannoli 根据正在运行的 cannoli 的设置调用 OpenAI API 的聊天完成端点。
- Cannoli 可以发送您预先定义的 HTTP 请求。




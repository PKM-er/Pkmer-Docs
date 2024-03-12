---
uid: 20230817224052
title: Obsidian 插件：Chat Stream
tags: ['obsidian插件', 'readme']
description: 使用画布笔记创建分支式GPT聊天。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chat Stream

> [!Note] 插件名片
> - 插件名称：Chat Stream
> - 插件作者：Ryan P Smith
> - 插件说明：使用画布笔记创建分支式 GPT 聊天。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rpggio/obsidian-chat-stream)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chat-stream)

## 概述

使用画布笔记创建分支式 GPT 聊天。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rpggio/obsidian-chat-stream/master/README.md)

---

## Readme(翻译）

下面是 [[chat-stream]] 插件的自述翻译

# 聊天流

一个通过画布笔记与 GPT AI 进行对话的 Obsidian 插件。祖先笔记/文件包含在聊天上下文中。您可以快速创建聊天流，并控制发送给 AI 的其他笔记。

## 安装

安装为 [社区插件](https://obsidian.md/plugins?search=chat%20stream#)

或者，在 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 中添加 `rpggio/obsidian-chat-stream`。

Chat Stream 仅支持桌面版。

设置

在 Chat Stream 设置中添加一个 [OpenAI API密钥](https://platform.openai.com/account/api-keys)。

## 使用方法

1. 在画布中选择一个笔记
2. 按下 Alt+Shift+G，使用当前笔记 + 祖先生成新的笔记
3. 要创建下一个用于回复的笔记，请按下 Alt+Shift+N。

AI 笔记以紫色标记，并在画布数据文件中标记为 `chat_role=assistant`。

## 开发

1. 下载源代码并安装依赖项

   ```
	pnpm install
	```

2. 在 Obsidian 中安装并启用 [热重载插件](https://github.com/pjeby/hot-reload)
3. 创建从此项目目录到 Obsidian 存储的符号链接

   ```
	ln -s . your-obsidian-store/.obsidian/plugins/chat-stream
	```

4. 启动开发服务器

	```
	pnpm run dev
	```

5. 在 Obsidian 中启用 Chat Stream 插件，并在插件设置中添加 OpenAI 密钥。

对代码的更改应自动加载到 Obsidian 中。

## 归属

* 来自 [Canvas MindMap](https://github.com/Quorafind/Obsidian-Canvas-MindMap) 的画布插件代码

如果你喜欢它，你可以给我发送一个 [咖啡点赞](https://bmc.link/ryanp)，这样我就知道大家觉得它有用。

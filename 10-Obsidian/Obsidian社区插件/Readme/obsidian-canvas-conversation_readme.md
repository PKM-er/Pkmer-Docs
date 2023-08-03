---
uid: 20230803231105
title: Obsidian 插件：Canvas Conversation
tags: ['白板相关', 'obsidian插件', 'readme']
description: Obsidian的一个插件，允许您使用ChatGPT创建画布对话。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232531
---

# Obsidian 插件：Canvas Conversation

> [!Note] 插件名片
> - 插件名称：Canvas Conversation
> - 插件作者：André Baltazar
> - 插件说明：Obsidian 的一个插件，允许您使用 ChatGPT 创建画布对话。
> - 插件分类：[' 白板相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AndreBaltazar8/obsidian-canvas-conversation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-canvas-conversation)

## 概述

Obsidian 的一个插件，允许您使用 ChatGPT 创建画布对话。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AndreBaltazar8/obsidian-canvas-conversation/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-canvas-conversation]] 插件的自述翻译

# Obsidian 画布对话

这是一个用于 Obsidian 的插件，可以使用 ChatGPT 创建画布对话。

它适用于画布节点。右键点击一个节点，选择“Prompt ChatGPT”。

需要使用 ChatGPT 的用户代理、会话令牌和清除令牌进行配置，可能需要每 2 小时刷新一次。

代码大部分没有文档，而且比较混乱。

需要进行一些改进：

- 适当使用流式机制进行对话
- 刷新令牌
- 清理未记录的 API/猴子补丁（如果有的话）
- 更好的错误提示
- 在节点之间添加边缘（目前没有简单的方法来实现）

# 安装

- 打开设置 -> 社区插件
- 搜索 "Canvas Conversation" 并安装。
- 从 Obsidian Community Plugins 安装 BRAT（如果您没有安装它）
- 将此存储库（AndreBaltazar8/obsidian-canvas-conversation）添加为新插件。

## 来自发布

- 下载最新版本。将 `main.js` 和 `manifest.json` 文件放入文件夹：`{{your_vault}}/.obsidian/plugins/obsidian-canvas-conversation`
- 将此存储库克隆到您的保险库插件文件夹中。
- 运行 `pnpm install`，然后运行 `pnpm build`。

# 致谢

从以下链接中获取了一些 ChatGPT 的代码：<https://github.com/transitive-bullshit/chatgpt-api>

# 许可证

MIT（见 LICENSE）

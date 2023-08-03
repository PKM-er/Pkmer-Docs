---
uid: 20230803212254
title: Obsidian 插件：【Readme】Discord Rich Presence
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 更新你的Discord状态，让你的朋友们知道你正在Obsidian中做什么。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Discord Rich Presence

> [!Note] 插件名片
> - 插件名称：Discord Rich Presence
> - 插件作者：Luke Leppan
> - 插件说明：更新你的Discord状态，让你的朋友们知道你正在Obsidian中做什么。
> - 插件分类：['第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lukeleppan/obsidian-discordrpc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-discordrpc)

## 概述

更新你的Discord状态，让你的朋友们知道你正在Obsidian中做什么。

![Discord Rich Presence](https://cdn.pkmer.cn/covers/obsidian-discordrpc.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lukeleppan/obsidian-discordrpc/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-discordrpc]] 插件的自述翻译



## Obsidian Discord Rich Presence 插件

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lukeleppan/obsidian-discordrpc/Build%20Release?logo=github&style=for-the-badge) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/lukeleppan/obsidian-discordrpc?style=for-the-badge) ![GitHub All Releases](https://img.shields.io/github/downloads/lukeleppan/obsidian-discordrpc/total?style=for-the-badge)

通过 Discord Rich Presence 更新你的 Discord 状态，向朋友展示你在 Obsidian 上正在工作的内容。

![Rich Presence Preview](https://raw.githubusercontent.com/lukeleppan/obsidian-discordrpc/master/assets/presence.gif)

### 使用方法

在设置中启用插件后，你的Discord状态应该显示你正在使用Obsidian.md。

如果Discord没有打开，那么你会在屏幕底部看到“重新连接到Discord”。你可以点击它尝试重新连接。只有当Discord打开时，它才会连接。

你还可以通过命令面板中的“重新连接到Discord”命令重新连接到Discord富文本。如果有问题的话。

### 特点

- 使用 Obsidian 信息更新您的 Discord 状态，包括**Vault 名称**和/或**当前文件名称**。
- 允许您自定义显示的信息。

### 设置

#### 保险库名称设置

- 切换是否显示**保险库名称**
- 设置一个自定义的**保险库名称**以公开显示

#### 文件名设置

- 切换是否显示**当前文件名**
- 切换是否显示当前文件的**扩展名**

#### 时间设置

- 切换是否使用您使用 Obsidian 的总时间，而不是编辑单个文件的时间。

#### 通知设置

- 切换是否显示**连接通知**

### 贡献者

- 添加了断开连接功能
- 使插件更加用户友好

### 问题

如果您有任何问题或建议，请创建一个**问题**或**拉取请求**。

### 兼容性

此插件目前需要 Obsidian v0.9.10+。

### 安装

您可以通过Obsidian中的Community Plugins选项卡安装插件。

#### 手动安装插件

- 将 `main.js` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。




---
uid: 2023080322234601
title: Obsidian 插件：Obsidian Things3 Sync
tags: ['obsidian插件', 'readme']
description: 一个用于同步Obsidian和Things3的插件，支持多语言，标签和日期。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Things3 Sync

> [!Note] 插件名片
> - 插件名称：Obsidian Things3 Sync
> - 插件作者：royx
> - 插件说明：一个用于同步 Obsidian 和 Things3 的插件，支持多语言，标签和日期。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/royxue/obsidian-things3-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-things3-sync)

## 概述

一个用于同步 Obsidian 和 Things3 的插件，支持多语言，标签和日期。

![Obsidian Things3 Sync](https://cdn.pkmer.cn/covers/obsidian-things3-sync.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/royxue/obsidian-things3-sync/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-things3-sync]] 插件的自述翻译

# Obsidian Things3 同步

一个用于在 Obsidian 和 Things3 之间同步的插件。支持多语言、标签和日期、跨平台。

## 特点

* 支持 Mac OS 和 iOS。
* 在创建待办事项时支持**多语言**。
* 支持**待办事项标签**。您可以在待办事项后添加标签，或在设置中添加默认标签。
* 支持**捕获日期**，如果文件中有日期，它将在创建待办事项时捕获日期。

使用方法

### 创建待办事项

![create](./misc/create.png)

* 选择待办事项的行
* 使用 `cmd + p` 并运行 `Things3 Sync: 创建待办事项`
* ***标签***：目前，标签仅支持 Things 中已存在的标签。因此，请先在 Things3 中添加标签，然后再使用此插件。

### 切换待办事项

* 选择待办事项的行
* 使用 `cmd + P` 并运行 `Things3 Sync: Toggle Todo`
* 待办事项将在 Obsidian 和 Things3 中切换

***注意：*** 如果你想方便地使用该命令，最好为其设置一个热键。

### 从 Obsidian 笔记中创建待办事项

直接从 Obsidian 笔记中创建一个待办事项，并在 Things3 中添加一个反向链接。

## 路线图

- [x] 支持多个 Markdown 元素。
- [x] 支持永久 URL。
- [x] 改进标签支持。
- [ ] ~~改进切换触发方法。~~ 由于 Things API 的限制
- [ ] ~~支持多行。~~ 由于 Things x Obsidian 通信的限制
- [x] 将 Obsidian 笔记转换为 Things3 待办事项

## 安全性

此插件需要您的 Things 3 身份验证令牌来同步待办事项的状态。该令牌将在您的保险库 obsidian 文件夹（./obsidian/plugins）中本地保存。因此，请小心不要直接与他人共享该文件夹，以防他们获取到您的令牌。

反馈和请求

任何反馈或请求，请在此处提交问题；）

非常感谢。

## 归属

在开发过程中，以下仓库提供了很大的帮助：

* [Todoist Text](https://github.com/wesmoncrief/obsidian-todoist-text)
* [Things Link](https://github.com/gavinmn/obsidian-things-link)

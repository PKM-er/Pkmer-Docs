---
uid: 2023080322230603
title: Obsidian 插件：Notion Video Embed
tags: ['obsidian插件', 'readme']
description: 在Obsidian中嵌入您的Notion视频
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Notion Video Embed

> [!Note] 插件名片
> - 插件名称：Notion Video Embed
> - 插件作者：lastknightcoder
> - 插件说明：在 Obsidian 中嵌入您的 Notion 视频
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/LastKnightCoder/obsidian-notion-video)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-notion-video)

## 概述

在 Obsidian 中嵌入您的 Notion 视频

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LastKnightCoder/obsidian-notion-video/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-notion-video]] 插件的自述翻译

## 简介

该插件可以通过 Notion API 在 Obsidian 中嵌入您的 Notion 视频。您需要在设置中提供 Notion 集成密钥，并输入相应的 block_id 以获取块的内容。

## 使用方法

首先，您需要进入插件的设置页面，并在此处输入密钥，如果您不知道密钥是什么，可以参考 [此页面](https://developers.notion.com/docs)。

返回到编辑器页面，按下快捷键<Ctrl>Ctrl + P</kbd>打开命令面板，然后输入**Notion API**，您将看到所有相关的命令。

然后，您将看到一个提示框，要求您输入 block_id。通过此 block_id，您可以获取 Notion 上的内容，并将其插入到页面中。

注意：为了获取内容，您需要将包含内容的页面（或其父页面）与您创建的集成共享。

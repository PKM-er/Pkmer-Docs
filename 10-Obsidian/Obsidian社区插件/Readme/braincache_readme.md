---
uid: 20230817224052
title: Obsidian 插件：braincache
tags: ['obsidian插件', 'readme']
description: 从Obsidian创建Braincache闪存卡
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：braincache

> [!Note] 插件名片
> - 插件名称：braincache
> - 插件作者：XSPGMike
> - 插件说明：从 Obsidian 创建 Braincache 闪存卡
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/XSPGMike/braincache_obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?braincache)

## 概述

从 Obsidian 创建 Braincache 闪存卡

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/XSPGMike/braincache_obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[braincache]] 插件的自述翻译

## braincache-obsidian 插件

<img src="https://braincache.co/android-chrome-192x192.baef1f58.png" width=100/>

直接从 Obsidian 创建 braincache 闪卡。

这是 [braincache](https://braincache.co) 的附属插件。

### 安装

您可以从 Obsidian 的社区部分安装此插件。

或者，您可以下载最新版本并将其放入您的 vault 的插件文件夹中：

`your-vault/.obsidian/plugins`

安装完插件后，您应该登录：

1. 点击 braincache 的带带按钮
2. 转到 [braincache设置](https://braincache.co/settings) 并复制您的 Obsidian 令牌
3. 粘贴您的令牌，就可以使用了！

它是如何工作的？

可以使用以下语法在任何 markdown 文件中定义卡片：

```md

  	#deck deckname

  	q:

  	this is a question?

  	a:
	
	this is an answer.

```

也可以包含图片，它们将被上传到 braincache 的服务器上

```md
	
	#deck deckname
	
	q:
	
	this is a question with an image?
	![[image.png]]
	
	a:
	
	this is an answer.

```

按下丝带按钮或使用 " 同步 " 命令将会将本地卡片与您的 braincache 账户同步。

该插件目前处于极早期的开发阶段，您**将**遇到错误，请提交问题。

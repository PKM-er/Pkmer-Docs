---
uid: 20230803213102
title: Obsidian 插件：【Readme】QuickShare
tags: ['obsidian插件', 'readme']
description: 一键安全共享您的Obsidian笔记。笔记经过端到端加密。无需API密钥或配置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：QuickShare

> [!Note] 插件名片
> - 插件名称：QuickShare
> - 插件作者：Maxime Cannoodt (@mcndt)
> - 插件说明：一键安全共享您的Obsidian笔记。笔记经过端到端加密。无需API密钥或配置。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mcndt/obsidian-quickshare)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-quickshare)

## 概述

一键安全共享您的Obsidian笔记。笔记经过端到端加密。无需API密钥或配置。

![QuickShare](https://cdn.pkmer.cn/covers/obsidian-quickshare.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mcndt/obsidian-quickshare/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-quickshare]] 插件的自述翻译



[![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/mcndt/obsidian-quickshare)](https://github.com/mcndt/obsidian-quickshare/releases) ![GitHub所有发布](https://img.shields.io/github/downloads/mcndt/obsidian-quickshare/total)
Obsidian QuickShare - 一键安全共享您的Obsidian笔记

使用端到端加密在互联网上托管Obsidian笔记。无需任何配置和账户。

我主要是为了自己使用而构建了这项服务，因为我厌倦了寻找第三方服务来快速共享我在Obsidian中编写的一些Markdown笔记。因为我相信其他人也可能会觉得这个有用，所以我决定将其发布为公共服务。

## 工作原理

您的笔记使用强大的AES-256-CBC加密算法进行安全存储。解密密钥从未发送到服务器，因此即使服务器也无法打开您的笔记。

默认情况下，笔记存储在我的伴侣项目[Noteshare.space](https://noteshare.space/)上。它是一个简单的存储服务，可以缓存您的加密笔记31天，并提供一个用于查看笔记的Web应用程序。服务器和前端都是根据MIT许可证的[开源](https://github.com/mcndt/noteshare.space)。用户可以自由地在自己的域名上托管存储服务的实例。

![说明图](img/explainer-img.png)

## 功能

- 使用单次加密密钥进行AES-256-CBC加密
- 不需要账户或外部API密钥
- 使用[Noteshare.space](https://noteshare.space)免费分享笔记，或者[托管自己的实例](https://github.com/mcndt/noteshare.space#deployment)以获得完全控制。

## 安装

插件和Noteshare.space目前都处于测试阶段。要进行测试，您可以使用BRAT安装插件（有关详细说明，请参见[BRAT > 添加测试版插件](https://github.com/TfTHacker/obsidian42-brat#adding-a-beta-plugin)）。

## 反馈

报告网页应用程序或Obsidian插件的错误或请求新功能的首选方式是通过[GitHub问题页面](https://github.com/mcndt/obsidian-quickshare/issues/new/choose)。

如果您希望以更互动的方式讨论错误或功能，可以加入[Discord服务器](https://discord.gg/y3HqyGeABK)。

## 支持
如果你喜欢这个插件并想支持我，你可以通过[Buy me a Coffee](https://www.buymeacoffee.com/mcndt)来做到：






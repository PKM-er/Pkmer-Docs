---
uid: 20230817224054
title: Obsidian 插件：Local REST API
tags: ['obsidian插件', 'readme']
description: 通过安全的REST API与您的笔记进行交互，解锁您的自动化需求。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Local REST API

> [!Note] 插件名片
> - 插件名称：Local REST API
> - 插件作者：Adam Coddington
> - 插件说明：通过安全的 REST API 与您的笔记进行交互，解锁您的自动化需求。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/coddingtonbear/obsidian-local-rest-api)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-local-rest-api)

## 概述

通过安全的 REST API 与您的笔记进行交互，解锁您的自动化需求。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/coddingtonbear/obsidian-local-rest-api/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-local-rest-api]] 插件的自述翻译

# Obsidian 的本地 REST API

请查看我们的交互式文档：<https://coddingtonbear.github.io/obsidian-local-rest-api/>

您是否曾经需要自动化与您的笔记进行交互？此插件为 Obsidian 提供了一个 REST API，您可以使用其他工具与您的笔记进行交互，以便自动化您需要自动化的内容。

该插件提供了一个安全的 HTTPS 接口，通过 API 密钥身份验证进行保护，允许您：

- 读取、创建、更新或删除现有的笔记。甚至还有一个 `PATCH` HTTP 方法，用于将内容插入到笔记的特定部分。
- 列出存储在您的保险库中的笔记。
- 创建和获取周期性笔记。
- 执行命令并列出可用的命令。

如果您需要从浏览器扩展程序（如 [Obsidian Web](https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad)）与 Obsidian 进行交互，这将特别有用。

## 鸣谢

这个灵感来自 [Vinzent03](https://github.com/Vinzent03) 的 [advanced-uri插件](https://github.com/Vinzent03/obsidian-advanced-uri)，希望能够在自定义 URL 方案的限制之外扩展自动化选项。

---
uid: 2023080322290420
title: Obsidian 插件：URL Namer
tags: ['obsidian插件', 'readme']
description: 检索 HTML 原标题来命名原始URL链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：URL Namer

> [!Note] 插件名片
> - 插件名称：URL Namer
> - 插件作者：zfei
> - 插件说明：检索 HTML 原标题来命名原始 URL 链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zfei/obsidian-url-namer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?url-namer)

## 概述

检索 HTML 原标题来命名原始 URL 链接。

![URL Namer](https://cdn.pkmer.cn/covers/url-namer.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zfei/obsidian-url-namer/master/README.md)
>

---

## Readme(翻译）

下面是 [[url-namer]] 插件的自述翻译

# Obsidian URL Namer

这是一个为 Obsidian（<https://obsidian.md）开发的插件，它通过获取> HTML 标题来为原始 URL 链接命名。

## 使用方法

选择包含要命名的 URL 的文本，执行命令*在选定的文本中命名 URL 链接*。

建议一次命名少量 URL。在 URL 请求需要一些时间的情况下，请**不要**在命令完成之前更改文本选择或内容本身。否则，最终结果将会混乱。

将命令绑定到键盘快捷键可以更方便地使用。

![演示](demo/url-namer-demo.gif)

## 编译

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run build` 进行编译，或者运行 `npm run dev` 以监视模式开始编译。

## 安装

- 编译完成后，将 `dist` 目录重命名为 `obsidian-url-namer`，并将其移动到 Vault 的插件目录 `VaultFolder/.obsidian/plugins/` 中。

# 定制化

目前，URL 匹配的正则表达式在 `main.ts/UrlTagger.rawUrlPattern` 中是硬编码的。内置的 URL 正则表达式模式可以在此处进行测试：<https://regexr.com/6rr0c。>

默认情况下，标题是从 URL 的 HTML 源代码中的 `<title>` 标签中获取的。然而，通常情况下，页面的内容是延迟加载的，标题必须从页面加载参数中推断出来。在这种情况下，需要有特定于网站的标题正则表达式来处理这个问题。

# 未来发展

- 将 URL 正则表达式模式参数化为插件设置。
- 将特定于网站的标题正则表达式参数化为插件设置。




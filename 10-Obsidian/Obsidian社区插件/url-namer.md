---
uid: 20231213114110
title: Obsidian 插件：URL Namer 快速格式化链接文本到外链模式
tags: ['obsidian插件']
description: 检索 HTML 原标题来命名原始URL链接。
author: OS
type: other
draft: false
editable: false
modified: 20240108110138
---

# Obsidian 插件：URL Namer 快速格式化链接文本到外链模式

## 概述

检索 URL 链接将其变为外链模式。

> [!Note] 插件名片
> - 插件名称：URL Namer
> - 插件作者：zfei
> - 插件说明：检索 HTML 原标题来命名原始 URL 链接。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/zfei/obsidian-url-namer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?url-namer)

![URL Namer|600](https://cdn.pkmer.cn/covers/url-namer.gif)

## 使用

- 选择包含要命名的 URL 的文本，执行命令*在选定的文本中命名 URL 链接*。

> [!Warning] 建议
> - 建议一次命名少量 URL。在 URL 请求需要一些时间的情况下，请**不要**在命令完成之前更改文本选择或文本内容本身。这可能回到至修改插入光标的操作错位，最终导致执行结果混乱。

- 将命令绑定到键盘快捷键可以更方便地使用。

## 定制化

目前，URL 匹配的正则表达式在 `main.ts/UrlTagger.rawUrlPattern` 中是硬编码的。内置的 URL 正则表达式模式可以在此处进行测试：<https://regexr.com/6rr0c。>

默认情况下，标题是从 URL 的 HTML 源代码中的 `<title>` 标签中获取的。然而，通常情况下，页面的内容是延迟加载的，标题必须从页面加载参数中推断出来。在这种情况下，需要有特定于网站的标题正则表达式来处理这个问题。
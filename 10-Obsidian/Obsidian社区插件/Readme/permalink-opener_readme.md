---
uid: 2023120719401970
title: Obsidian 插件：【Readme】Permalink Opener
tags: ['obsidian插件', 'readme']
description: 根据笔记属性中的永久链接或短链接打开URL。与静态网站生成器（如Jekyll、Hugo、Eleventy等）一起使用非常有用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Permalink Opener

> [!Note] 插件名片
> - 插件名称：Permalink Opener
> - 插件作者：@kepano
> - 插件说明：根据笔记属性中的永久链接或短链接打开 URL。与静态网站生成器（如 Jekyll、Hugo、Eleventy 等）一起使用非常有用。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kepano/obsidian-permalink-opener)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?permalink-opener)

## 概述

根据笔记属性中的永久链接或短链接打开 URL。与静态网站生成器（如 Jekyll、Hugo、Eleventy 等）一起使用非常有用。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kepano/obsidian-permalink-opener/master/README.md)
>

---

## Readme(翻译）

下面是 [[permalink-opener]] 插件的自述翻译

简单的 Obsidian 插件，根据笔记属性中的永久链接或短链接打开 URL。如果您使用静态网站生成器或发布平台，如 Jekyll、Hugo、Eleventy、Astro、Obsidian Publish 等，这将非常有用。

这是一个非常简单的插件，有三个设置选项：

- 永久链接属性名称，定义您使用的前置属性。默认为 `permalink`，但您可以将其设置为 `slug` 或其他内容。
- 线上站点基础 URL，例如 `https://yourdomain.com`
- 开发站点基础 URL，对于 Jekyll，您可能会使用 `http://127.0.0.1:4000`

使用命令面板或热键打开当前页面。如果没有设置永久链接，则使用 kebab case 将标题转换为短链接。

![Permalink Opener](https://cdn.pkmer.cn/covers/permalink-opener_2_0.png!pkmer)

---
uid: 2023082011360019
title: Obsidian 插件：【Readme】Micro templates
tags: ['obsidian插件', 'readme']
description: 由JavaScript函数驱动的灵活嵌入式微模板
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Micro templates

> [!Note] 插件名片
> - 插件名称：Micro templates
> - 插件作者：epszaw
> - 插件说明：由 JavaScript 函数驱动的灵活嵌入式微模板
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/epszaw/obsidian-micro-templates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?micro-templates)

## 概述

由 JavaScript 函数驱动的灵活嵌入式微模板

![Micro templates](https://cdn.pkmer.cn/covers/micro-templates_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/epszaw/obsidian-micro-templates/master/README.md)
>

---

## Readme(翻译）

下面是 [[micro-templates]] 插件的自述翻译

# 黑曜石微模板

## 工作原理

该插件允许将存储在您的保险库中的模板作为文本片段使用。

![](./static/demo.gif)

## 使用方法

1. 在您的存储库中创建一个包含模板的文件夹，或选择一个现有的文件夹。
2. 使用 `Ctrl/Cmd + P` 打开命令面板，然后选择 `Micro temlates: select source folder`（或在插件设置中手动设置）。
3. 然后，使用 `Ctrl/Cmd + P` 打开命令面板，选择 `Micro temlates: insert template` 并在任何您想要的地方插入模板。

## 特点

该插件使用 [ejs](https://ejs.co/) 模板引擎来编译模板。这意味着您可以在模板中使用任何 JavaScript 代码。

此外，它还提供了 [dayjs](https://day.js.org/)，可以直接在模板中使用它：

```md
<%= d().format("YYYY-MM-DD") %>
```

使用 `$cur` 标记字符串来标记模板插入后光标应该放置的位置：

```md
这是一个模板，光标应该在这些[ $cur ]括号之间。
```
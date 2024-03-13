---
uid: 2023080322231921
title: Obsidian 插件：Obsidian Clipper
tags: ['obsidian插件', 'readme']
description: 这个插件可以帮助你从网络上捕捉精彩瞬间。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Clipper

> [!Note] 插件名片
> - 插件名称：Obsidian Clipper
> - 插件作者：John Christopher
> - 插件说明：这个插件可以帮助你从网络上捕捉精彩瞬间。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jgchristopher/obsidian-clipper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-clipper)

## 概述

这个插件可以帮助你从网络上捕捉精彩瞬间。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jgchristopher/obsidian-clipper/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-clipper]] 插件的自述翻译

# Obsidian 剪贴板

该插件允许您将来自网络的高亮内容以 Markdown 条目的形式捕获到 Obsidian 中。

## 需求

Obsidian Clipper 可以配置为写入每日笔记、每周笔记或两者兼备。我计划允许其他位置。

如果您安装了 [Advanced Tables]() 插件，则 HTML 表格应该被捕获为 Markdown 表格。

如何使用

![默认行为](./gifs/default.gif)

## 网络使用通知

该插件具有调用外部服务的能力，该服务会为您的保险库或笔记生成一个基于 Chrome 的浏览器扩展包装器的书签工具。基于 Chrome 的扩展是在像 [Arc](https://arc.net/) 这样的浏览器中与 Obsidian Clipper 交互的唯一方式。该外部服务的代码由我维护，并可在 [Github](https://github.com/jgchristopher/obsidian_clipper_extension_maker) 上找到。

基于 Chrome 的浏览器扩展

Obsidian Clipper 提供了一个选项，可以下载一个基于 Chrome 的浏览器扩展来替代书签工具。这对于不支持书签工具的浏览器（如 Arc）非常有用。以下是下载后如何使用该扩展的说明。

**下载 obsidian-clipper-extention.zip 文件后，请按照以下说明操作。**

1. 解压 obsidian-clipper-extention.zip 文件。
2. 打开一个基于 Chromium 的浏览器，并导航到“管理扩展...”视图。
3. 您需要启用开发者模式。
4. 一旦开发者模式启用，将会出现一个“加载已解压的扩展”按钮。
5. 点击“加载已解压的扩展”按钮，然后导航到解压后的 obsidian-clipper-extention 目录并选择它。

有想法/请求/错误吗？

请随意创建一个 [问题](https://github.com/jgchristopher/obsidian-clipper/issues/new/choose)

或者

开始一个新的 [讨论](https://github.com/jgchristopher/obsidian-clipper/discussions/new)

先前的工作和灵感

我最初是从修改这个 [Obisdian论坛帖子](https://forum.obsidian.md/t/obsidian-web-clipper-bookmarklet-with-full-markdown-support-for-images-headings-and-code-blocks/22068) 中找到的 Gist 中得到这个想法的。

我使用了以下 Obsidian 插件仓库作为实现我的目标的示例。

- [Obsidian Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri)
- [Obisidan Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)
- [Turndown Ext](https://github.com/jtreml/turndown) 用于管理 HTML 表格

#### 开发中使用的依赖项

- [Obsidian Periodic Note Interface](https://github.com/liamcain/obsidian-daily-notes-interface)
- [Turndown](https://github.com/mixmark-io/turndown) 在书签代码中用于解析高亮的 HTML 并将其转换为 Markdown

如果您喜欢这个插件并想要支持它的开发？

---
uid: 2023080322140413
title: Obsidian 插件：【Readme】Antidote Grammar Checker Integration
tags: ['obsidian插件', 'readme']
description: 非官方集成Antidote，一款强大的英语和法语语法检查器
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Antidote Grammar Checker Integration

> [!Note] 插件名片
> - 插件名称：Antidote Grammar Checker Integration
> - 插件作者：Heziode
> - 插件说明：非官方集成 Antidote，一款强大的英语和法语语法检查器
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Heziode/obsidian-antidote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?antidote-grammar-checker-integration)

## 概述

非官方集成 Antidote，一款强大的英语和法语语法检查器

![Antidote Grammar Checker Integration](https://cdn.pkmer.cn/covers/antidote-grammar-checker-integration.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Heziode/obsidian-antidote/main/README.md)
>

---

## Readme(翻译）

下面是 [[antidote-grammar-checker-integration]] 插件的自述翻译

# Antidote 语法检查器集成

这个 Obsidian 插件是 [Antidote](https://www.antidote.info/) 的非官方集成，它是一个功能强大的语法检查器。

Antidote 支持以下语言：

- 英语
- 法语

该插件适用于 Antidote 10（使用 Connectix 版本 11 或更高版本）及更高版本，以及 Antidote Web，在 macOS（11 及更高版本）、Linux 和 Windows 上运行。

**该插件不适用于智能手机。**

![](./assets/obsidian.png)

![](./assets/antidote.png)

如何安装

### 来自 Obsidian

该插件可以在 Obsidian 的社区插件库中找到，路径为 `设置 > 社区插件 > 浏览`：[antidote-grammar-checker-integration](https://obsidian.md/plugins?id=antidote-grammar-checker-integration)

### 手动安装

从 [最新版本](https://github.com/heziode/obsidian-antidote/releases/latest) 下载 `main.js`、`manifest.json` 和 `styles.css`，并将它们放入 `<vault>/.obsidian/plugins/antidote-grammar-checker-integration` 文件夹中。

如何使用

该插件在状态栏中添加了 4 个图标：

- 带有圆圈的勾号，对应 Antidote 校对器，将检查整个文档
- 对应 Antidote 校对器的勾号
- 对应 Antidote 字典的绿色书籍
- 对应 Antidote 指南的橙色书籍

![](./assets/obsidian-statusbar.png)

您可以从设置中显示或隐藏每个图标。

它还添加了校对器、字典和指南的命令。

“全部更正”功能会将整个文档或所选内容发送到 Antidote，而“简单更正”功能则根据光标位置和所选内容发送文本。与其他软件（如 VS Code、Word 等）中的官方集成相比，“简单更正”功能具有相同的行为。

### Linux 用户的附加说明

Antidote 10 是此操作系统上支持的最新版本的 Antidote。因此，与此版本一起安装的 Connectix 版本 10 不受支持。

为了使用此插件与 Antidote 10（或 web）一起使用，您需要安装最新版本的 Connectix（版本 11 或更高版本）。Connectix 是 Obsidian 和 Antidote（10、11+、web）之间的桥梁，因此通过将 Antidote 10 与 Connectix 11 配对，您将能够使用此插件。

您可以从您的 [客户门户](https://services.druide.com/client/) 下载 Connectix 11，在“有用链接”部分下找到：“Antidote Web 的 Connectix 实用程序”。

## 支持这个插件
---
uid: 2023080322243857
title: Obsidian 插件：Pending notes
tags: ['obsidian插件', 'readme']
description: Obsidian插件可以在你的保险库中搜索没有笔记的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pending notes

> [!Note] 插件名片
> - 插件名称：Pending notes
> - 插件作者：Ulises Santana
> - 插件说明：Obsidian 插件可以在你的保险库中搜索没有笔记的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ulisesantana/obsidian-pending-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-pending-notes)

## 概述

Obsidian 插件可以在你的保险库中搜索没有笔记的链接。

![Pending notes](https://cdn.pkmer.cn/covers/obsidian-pending-notes_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ulisesantana/obsidian-pending-notes/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-pending-notes]] 插件的自述翻译

# Obsidian 待处理笔记插件

[![GitHub发布](https://img.shields.io/github/release/ulisesantana/obsidian-pending-notes.svg)](https://GitHub.com/ulisesantana/obsidian-pending-notes/releases/)

![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-pending-notes%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[![codecov](https://codecov.io/github/ulisesantana/obsidian-pending-notes/branch/master/graph/badge.svg?token=XXwfgoPhoY)](https://codecov.io/github/ulisesantana/obsidian-pending-notes)

这是一个为 [Obsidian](https://obsidian.md) 设计的插件。

待处理笔记旨在将您在写作过程中创建的所有链接收集到一个地方，但这些链接尚未指向任何地方。通过此插件，您可以轻松创建这些笔记。

![展示插件的使用方式](docs/preview.gif)

您可以从左侧边栏或通过命令面板使用它：

![命令预览](docs/command.png)

## 如何安装

这个插件是一个 Obsidian 社区插件，所以你可以**直接从 Obsidian 设置中安装它**。然而，如果你愿意，你也可以通过两种方式手动安装它：

### 手动安装：下载发布版本

前往 [最新发布版本](https://github.com/ulisesantana/obsidian-pending-notes/releases/latest) 并下载类似于 `obsidian-pending-notes-X.X.X.zip` 的压缩文件。

下载完成后，您可以将其解压缩到 `.obsidian/plugins/` 目录下的您的存储库中。如果您不是通过终端或控制台进行此操作，则可能需要启用文件浏览器以显示*隐藏文件*。

之后，您可以在 Obsidian 设置中激活它。如果插件未显示，请尝试重新启动 Obsidian。

### 手动安装：构建插件

进入 `.obsidian/plugins/` 目录并运行：

```shell
$ git clone https://github.com/ulisesantana/obsidian-pending-notes.git
$ cd obsidian-pending-notes
$ npm run deploy
```

之后，您可以在 Obsidian 设置中激活它。如果插件没有显示，请尝试重新启动 Obsidian。

**注意**：构建插件需要已安装 git 和 [Node.js](https://nodejs.org/en/) 的 LTS 版本。

## 支持

如果您觉得这个插件有用，您可以通过 [给我买杯咖啡](https://www.buymeacoffee.com/ulisesantana) 来支持我。

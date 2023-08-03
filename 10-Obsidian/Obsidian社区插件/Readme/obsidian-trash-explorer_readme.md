---
uid: 2023080322284591
title: Obsidian 插件：Trash Explorer
tags: ['文件管理', '效率', 'obsidian插件', 'readme']
description: 在Obsidian 文件管理中，可以看到 .trash 文件夹。并操作恢复或者删除。这个关联你的设置将文件删除放到软件回收站。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Trash Explorer

> [!Note] 插件名片
> - 插件名称：Trash Explorer
> - 插件作者：Per Mortensen
> - 插件说明：在 Obsidian 文件管理中，可以看到 .trash 文件夹。并操作恢复或者删除。这个关联你的设置将文件删除放到软件回收站。
> - 插件分类：[' 文件管理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/proog/obsidian-trash-explorer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-trash-explorer)

## 概述

在 Obsidian 文件管理中，可以看到 .trash 文件夹。并操作恢复或者删除。这个关联你的设置将文件删除放到软件回收站。

![Trash Explorer](https://cdn.pkmer.cn/covers/obsidian-trash-explorer.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/proog/obsidian-trash-explorer/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-trash-explorer]] 插件的自述翻译

# Obsidian 垃圾文件夹浏览器

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以列出、恢复和删除 Obsidian 保险库中 _.trash_ 文件夹中的文件。如果您无法访问隐藏文件夹（例如在 iOS 上），这将非常有用。

[从Obsidian社区插件中安装垃圾文件夹浏览器。](https://obsidian.md/plugins?id=obsidian-trash-explorer)

![垃圾文件夹浏览器视图的截图](https://github.com/proog/obsidian-trash-explorer/raw/main/screenshot.png)

## 使用方法

> **重要提示：**此插件仅适用于 Obsidian 自己的 _.trash_ 文件夹。它不适用于系统垃圾箱。
>
> 要启用此功能，请打开设置，然后转到“文件和链接”，然后将“已删除的文件”设置为“移动到 Obsidian 垃圾箱”。

在功能区中单击垃圾箱资源管理器图标，或者使用命令面板中的“显示垃圾箱资源管理器”。然后，您可以使用垃圾箱资源管理器视图中的按钮恢复或删除文件和文件夹。还可以使用“清空垃圾箱”命令删除所有已删除的文件。

项目将被恢复到与垃圾箱中的位置相匹配的存储库位置。例如，`.trash/Recipes/Belgian waffles.md` 将被恢复为 `Recipes/Belgian waffles.md`，如果不存在中间文件夹，则会创建它们。如果存储库中已存在恢复路径，则不会恢复该项目；您需要首先将现有文件重命名为其他名称。

限制

该插件受到 Obsidian 放置垃圾项的限制，因为它无法访问它们的原始位置。特别是，无论父文件夹结构如何，Obsidian 始终将项目移动到 `.trash` 文件夹的根目录，因此在恢复时不会保留任何父文件夹。例如，将文件 `Recipes/Belgian waffles.md` 放入垃圾箱将把它移动到 `.trash/Belgian waffles.md`，并在恢复时将其移动到存储库的根目录下的 `Belgian waffles.md`。

---
uid: 2023080322292021
title: Obsidian 插件：Vim Toggle
tags: ['obsidian插件', 'readme']
description: （它切换vim的开/关）允许在设置中切换和自定义该切换。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vim Toggle

> [!Note] 插件名片
> - 插件名称：Vim Toggle
> - 插件作者：Conner Ohnesorge
> - 插件说明：（它切换 vim 的开/关）允许在设置中切换和自定义该切换。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/conneroisu/vim-toggle)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-toggle)

## 概述

（它切换 vim 的开/关）允许在设置中切换和自定义该切换。

![Vim Toggle](https://cdn.pkmer.cn/covers/vim-toggle.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/conneroisu/vim-toggle/master/README.md)
>

---

## Readme(翻译）

下面是 [[vim-toggle]] 插件的自述翻译

[![构建 obsidian 插件](https://github.com/conneroisu/vim-toggle/actions/workflows/main.yml/badge.svg)](https://github.com/conneroisu/vim-toggle/actions/workflows/main.yml)

[![codebeat 徽章](https://codebeat.co/badges/34efe3ca-2340-4b5c-bc9e-655ae5ffcd93)](https://codebeat.co/projects/github-com-conneroisu-vim-toggle-master)

# Vim 切换插件 Obsidian

由 Conner Ohnesorge 制作 🤍

>> 在 Obsidian 中切换 Vim 的状态，以响应 Obsidian Canvas 核心插件功能。
![一个展示插件基本功能的 gif](docs/legendary.gif)
新的 Canvas 插件促使我制作了一个小插件，用于在 Obsidian 中切换使用 vim 编辑器的状态。

想知道什么是 vi/vim 吗？

[    ### Vim in 100 Seconds - YouTube  https://www.youtube.com › watch  ](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjM4-3Es6v8AhW1KX0KHYH4Bs8QtwJ6BAgOEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-txKSRn0qeA&usg=AOvVaw0opUAcd4wCUwrJmBWm0zox)

[    ### Understanding Vi and Vim (Vi IMproved) in 10 Minutes  https://www.youtube.com › watch  ](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjM4-3Es6v8AhW1KX0KHYH4Bs8QtwJ6BAgQEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dnbph7RYWhwM&usg=AOvVaw0WsJDH24HqQHumDJS09xYX)

# 基础功能

这个插件是一个简单的插件，允许通过可配置的热键在 Obsidian 中切换 vim 模式。您还可以打开或关闭插件的通知功能。这基本上就是基本功能。

> [!important]+ 主要功能
>- 切换 vim 模式
>- 切换时可选择是否通知
>- 社区可用性

# 用法

通过一个可访问的布尔变量和一个命令来使用此插件，该命令可以在 Obsidian 中切换和取消切换 vim。可以将该命令绑定到热键上，以便更快更高效地使用。

要访问插件设置，请点击 Obsidian 右上角的设置齿轮图标，或使用热键<kbd>Ctrl<kbd>+</kbd>,</kbd>。然后，在那里找到 Vim 模式设置，并将其切换为“开启”。这将在当前的 Obsidian 实例中启用 Vim 切换。

基本用法

安装完成后，您可以使用命令切换 vim 模式的开启和关闭。您可以在设置中将此命令配置为您选择的热键。您还可以关闭或打开 vim 模式开启或关闭时的通知。

### 正常安装

要正常安装此插件，您可以在 Obsidian 应用程序中导航到社区插件，查看并安装此插件，而无需退出应用程序！希望您自己能找到一些用途！（您很快就可以这样做）。

### 手动安装

要手动安装此插件，您需要从 [GitHub存储库](https://github.com/nkomarn/obsidian-vim-mode) 下载源代码，并将其放置在 Obsidian 数据目录中的 `plugins` 文件夹中。完成后，重新启动 Obsidian，您就可以使用了。

## 支持

如果您对此插件有任何问题或问题，可以通过 github 问题来解决问题、更新、功能和错误报告。我们还有一个支持页面，其中包含有关插件及如何在 github 的维基百科部分中使用它的信息。

该项目使用 Typescript 提供类型检查和文档。该存储库依赖于 Typescript 定义格式中的最新插件 API（obsidian.d.ts），其中包含描述其功能的 TSDoc 注释。

请随意捐赠给我的 kofi 和/或分享这个项目！

kofi: conneroisu

用例

在 obsidian 画布模式下使用 vim 模式写作可能会有些繁琐，因为需要不断插入文本，这个插件允许用户通过暂时切换到常规输入来避免这些困难。

# 贡献

| Conner Ohnesorge |
| ---------------- |
| ![conner.jpeg](docs%2Fconner.jpeg)          |
| github 用户名: conneroisu |
| 电子邮件: conneroisu@outlook.com                            |
---
uid: 20230803231105
title: Obsidian 插件：Create Note in Folder
tags: ['obsidian插件', 'readme']
description: 在特定文件夹中添加命令以创建一个笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232606
---

# Obsidian 插件：Create Note in Folder

> [!Note] 插件名片
> - 插件名称：Create Note in Folder
> - 插件作者：Mara-Li
> - 插件说明：在特定文件夹中添加命令以创建一个笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-create-note-in-folder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?create-note-in-folder)

## 概述

在特定文件夹中添加命令以创建一个笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-create-note-in-folder/master/README.md)
>

---

## Readme(翻译）

下面是 [[create-note-in-folder]] 插件的自述翻译

# 命令：在文件夹中创建笔记

该插件添加了一个新的命令，可以在指定路径中创建一个新的笔记。

要添加路径，请使用设置选项卡。它会要求您选择一个路径。然后，插件将在此路径中创建一个新的笔记。

您可以选择每个文件夹的方式：

- 笔记的命名方式，包括文件名和可能的模板。
- 笔记的创建方式（在当前标签页、在新标签页、在窗口中或在分割视图中）
- 创建后是否要将焦点放在笔记上

添加路径后，您可以使用命令“在文件夹{path}中创建新笔记”来在此路径中创建一个新的笔记。

关于文件名和模板

您可以选择设置文件名和模板。模板可以是：

- 文件夹名称
- 日期，格式基于 [moment.js](https://momentjs.com/docs/#/displaying/)。

如果您选择使用模板，则不需要设置文件名。此外，您可以选择模板的添加方式：

- 在文件名之前（如果有的话）
- 在文件名之后。
并且您可以设置一个分隔符。

如果已经存在具有相同名称的文件，则标题将递增。

> **注意**
> 如果您已经为路径设置了模板，则新的笔记将使用该模板创建。

## 安装

- [ ] 从 Obsidian 的社区插件中安装
- [x] 使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat#adding-a-beta-plugin)，使用 `https://github.com/Lisandra-dev/create-note-in-folder`
- [x] 从发布页面安装：
  - 下载最新的发布版本
  - 将 create-note-in-path.zip 解压到 `.obsidian/plugins/` 路径中
  - 在 Obsidian 设置中重新加载插件
  - 启用插件

## 翻译

- [x] 英语
- [x] 法语

添加翻译的步骤：

- Fork 该仓库
- 在 `plugin/i18n/locales` 目录下添加一个以语言命名的新文件（例如：`de.ts`）
- 将 [`plugin/i18n/locales/en.ts`](plugin/i18n/locales/en.ts) 的内容复制到新文件中
- 翻译文件的内容
- 创建一个 pull request

## 鸣谢

非常感谢@SilentVoid13 和@RafaelGB 提供的 [Templater](https://github.com/SilentVoid13/Templater) 和 [dbFolder](https://github.com/RafaelGB/obsidian-db-folder)，其中部分代码被使用。

---






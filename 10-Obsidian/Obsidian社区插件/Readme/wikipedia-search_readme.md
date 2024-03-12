---
uid: 20230817224056
title: Obsidian 插件：Wikipedia Search
tags: ['obsidian插件', 'readme']
description: 搜索维基百科文章并链接它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Wikipedia Search

> [!Note] 插件名片
> - 插件名称：Wikipedia Search
> - 插件作者：StrangeGirlMurph
> - 插件说明：搜索维基百科文章并链接它们。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wikipedia-search)

## 概述

搜索维基百科文章并链接它们。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/StrangeGirlMurph/obsidian-wikipedia-search/master/README.md)

---

## Readme(翻译）

下面是 [[wikipedia-search]] 插件的自述翻译

# Obsidian Wikipedia 搜索插件

一个 [Obsidian.md](https://obsidian.md/) 插件，可以在 Obsidian 中快速搜索、链接和打开维基百科文章以及你的笔记。

* 不要担心这个项目是“不活跃”的。它并不是不活跃的。它已经完成了 :)

（至少在没有新的功能请求之前是这样的）*

<img src="https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/assets/62220780/c7179deb-4e3b-437d-acfc-ecc3707ffc1a" width=600 />

## 关键 [特点](#特点)

- 在所有语言中链接维基百科文章。
- 直接在 Obsidian 中打开文章和链接。
- 对选定的文本进行超链接。
- 粘贴文章的简介。
- 使用不同的模板进行插入。

### [演示视频](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/assets/62220780/0cbd610e-d824-4eb3-99e6-5ab53eb7fe1d)

<https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/assets/62220780/0cbd610e-d824-4eb3-99e6-5ab53eb7fe1d>

## 目录

- [安装](#installation)
  - [从社区插件列表中安装](#from-the-community-plugins-list)
  - [手动安装](#manual-installation)
- [使用](#usage)
  - [入门](#getting-started)
  - [命令](#commands)
  - [功能](#features)
- [设置](#settings)
- [问题和贡献](#questions--contributions)
- [许可证](#license)

安装

### 来自社区插件列表

1. 在设置中的社区插件下搜索并点击安装。
2. 启用插件（从已安装插件列表中）。
   <img src="https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/assets/62220780/c99cc357-a4cd-41fb-8dbb-58a37b9e32b4" width=600 />

### 手动安装

1. 创建目录 `[path-to-vault]/.obsidian/plugins/wikipedia-search`。
2. 从 [最新版本](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/releases) 下载 `main.js` 和 `mainfest.json`，并将它们放入创建的目录中。
3. 启用插件。

使用方法

### 入门指南

1. 安装并启用插件。
2. 在设置中设置您的语言和插入的模板（如果需要，还可以设置其他设置）。
3. 开始搜索/链接/阅读 :)

### 命令

该插件带有 2 个命令：

- `链接文章`
- `打开文章`

您可以通过命令面板访问这些命令。`打开文章` 还在功能区菜单中有自己的小按钮（维基百科标志）。当然，您也可以在设置中为这些命令设置自定义热键。

### 特点

- **基本链接**
   只需在文件中的某个位置使用“Link Article”命令（在编辑模式下）。
- **打开文章**
   该插件允许您直接在 Obsidian 中打开维基百科文章！只需使用“Open Article”命令（可以通过命令面板或功能区菜单中的按钮）。
   注意：打开大型文章可能需要一些时间。请耐心等待 :)
- **超链接**
   选择一些文本并使用“Link Article”。所选文本将成为模板中的“{title}”参数（如果您没有在设置中更改该行为）。
- **搜索不同的语言**
   在搜索栏中，您可以以有效的维基百科语言代码开头，后跟一个分号（例如“da:albert einstein”）。这将让您搜索各种语言的文章。（空格无关紧要）
- **包含文章简介**（第一段）
   在设置的模板中的某个位置添加“{intro}”。这将被文章的简介替换。（注意：它可能相当长！）
- **直接在 Obsidian 中打开指向维基百科文章的链接**
   如果您点击文件中指向维基百科文章的任何链接，它将直接在 Obsidian 中打开。
- **多个模板**
   在设置中添加多个模板选项，并动态选择您想要的特定用例的模板。
- **小型工作流程优化设置**
   浏览设置以优化插件以适应您的特定工作流程。

## 设置

可用的设置及其默认值：

<img src="https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/assets/62220780/aba3a56c-10a3-4da3-be49-d79cd4226593" width=600 />

## 问题和贡献

如果您有任何问题，请随时在 [讨论标签页](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search/discussions) 中向我和社区提问。

我很乐意听取您的功能请求！如果您有好的想法，请创建一个问题。

如果您想要贡献，您可以通过创建问题和拉取请求来实现 :)

## 许可证

本项目根据 [人道软件许可证](https://github.com/StrangeGirlMurph/The-Humane-Software-License) 进行许可，详见 [LICENSE](LICENSE)。

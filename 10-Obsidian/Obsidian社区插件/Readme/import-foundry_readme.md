---
uid: 20230803204147
title: Obsidian 插件：【Readme】Import Foundry VTT journal entries
tags: ['obsidian插件', 'readme']
description: 从你选择的Foundry VTT世界导入你的日志条目到你的Obsidian Vault文件夹中。
author: farling42
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Import Foundry VTT journal entries

> [!Note] 插件名片
> - 插件名称：Import Foundry VTT journal entries
> - 插件作者：farling42
> - 插件说明：从你选择的Foundry VTT世界导入你的日志条目到你的Obsidian Vault文件夹中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/farling42/obsidian-import-foundry)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?import-foundry)

## 概述

从你选择的Foundry VTT世界导入你的日志条目到你的Obsidian Vault文件夹中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/farling42/obsidian-import-foundry/master/README.md)
> 

---

## Readme(翻译）

下面是 [[import-foundry]] 插件的自述翻译


[![ko-fi](https://img.shields.io/badge/Ko--Fi-farling-success)](https://ko-fi.com/farling)
[![patreon](https://img.shields.io/badge/Patreon-amusingtime-success)](https://patreon.com/amusingtime)
[![paypal](https://img.shields.io/badge/Paypal-farling-success)](https://paypal.me/farling)
![GitHub License](https://img.shields.io/github/license/farling42/obsidian-import-foundry)
![Latest Release Download Count](https://img.shields.io/github/downloads/farling42/obsidian-import-foundry/latest/main.js)
铸造厂日志导入器

这是一个简单的插件，将Foundry VTT的journal.db文件转换为Obsidian Vault中的单独笔记。

启用此插件后，左侧栏会出现一个额外的放大镜图标。

选择该图标将弹出一个简单的弹窗，在弹窗中可以选择要导入的journal.db文件。该文件可以在Foundry用户数据区域的/worlds/<yourworld>/data/journal.db下找到。

您还可以指定您的Vault中的文件夹，所有的日志条目都将被创建在该文件夹中。如果该文件夹不存在，则会被创建。任何与日志条目同名的现有笔记将被删除。

点击“导入”按钮开始导入。

您的日志条目的文件夹结构将从与所选journal.db文件相同的文件夹中的folders.db文件中读取，并用于存储创建的笔记。

如果您的日志条目引用了任何图像和其他文件，并且这些文件可以在Foundry用户数据区域中找到，它们将被放置在一个名为“zz_asset-files”的子文件夹中。如果任何图像未被复制，那么在Obsidian开发日志中将出现一份报告（在MS Windows上使用ctrl+shift+i打开）。

[zombiecalypse](https://github.com/zombiecalypse)提供了支持，可以分配一个热键来打开导入对话框，并且可以选择在左侧图标栏中显示控制图标。




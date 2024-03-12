---
uid: 20230817224055
title: Obsidian 插件：Testing Vault
tags: ['obsidian插件', 'readme']
description: 具有笔记、前言、标签、孤立和叶子笔记之间链接的随机化保险库生成器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Testing Vault

> [!Note] 插件名片
> - 插件名称：Testing Vault
> - 插件作者：Michael Pedersen
> - 插件说明：具有笔记、前言、标签、孤立和叶子笔记之间链接的随机化保险库生成器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pedersen/obsidian-testing-vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?testing-vault)

## 概述

具有笔记、前言、标签、孤立和叶子笔记之间链接的随机化保险库生成器。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pedersen/obsidian-testing-vault/master/README.md)

---

## Readme(翻译）

下面是 [[testing-vault]] 插件的自述翻译

# Obsidian 测试保险库插件

该插件用于创建随机测试保险库，特别是在插件开发过程中。它的所有功能都没有绑定热键或菜单项，这是有意为之的选择。这里提供的功能是危险的，甚至可能破坏您现有的保险库。

随机笔记命令都会生成 [Lorem Ipsum](https://www.lipsum.com/) 文本。这使您能够知道您不关心内容。您仍然可以使用它以多种方式测试您的插件，例如如果您正在构建一个替代的渲染系统、统计数据或任何需要在笔记中有数据（即使这些数据是无意义的）的情况下。

提供了三个命令，可以通过 Mod-P 命令面板访问。

在您的保险库中创建一个随机的单个笔记。

该命令只是创建一个随机的单个笔记。由于它不会扫描您现有的保险库，因此它不会提供到其他笔记的链接，也不会有其他笔记链接到它。但是，您可以使用此命令来检查输出并查看是否对此插件生成的输出感到满意。

在您的保险库中创建一组随机笔记

此命令将显示一个对话框，允许您在生成一组相互连接的笔记之前调整设置。这可能需要一些时间，因此一次只能生成 10,000 个笔记。

摧毁这个保险库中的一切

正如其所说：保险库中的一切都将被删除。*不会*要求确认。不要在你关心的保险库中运行此命令，因为你将会失去*一切*。

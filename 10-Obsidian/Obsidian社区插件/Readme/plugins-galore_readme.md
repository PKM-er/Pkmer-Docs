---
uid: 20230803213030
title: Obsidian 插件：【Readme】Plugins Galore
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 允许你加载和使用那些不在官方插件列表的插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Plugins Galore

> [!Note] 插件名片
> - 插件名称：Plugins Galore
> - 插件作者：dylanpizzo
> - 插件说明：允许你加载和使用那些不在官方插件列表的插件
> - 插件分类：['第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dylanpizzo/obsidian-plugins-galore)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugins-galore)

## 概述

允许你加载和使用那些不在官方插件列表的插件



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/plugins-galore/obsidian-plugins-galore/main/README.md)
> 

---

## Readme(翻译）

下面是 [[plugins-galore]] 插件的自述翻译



# 插件丰富

这是一个[Obsidian](https://obsidian.md/)插件，可以轻松地加载其他插件。

为什么要侧载插件？

并不是每个插件都会在[官方插件目录](https://obsidian.md/plugins)中。如果你想要的插件不在那里，你就需要手动下载文件并将它们放在你的vault下的`.obsidian/plugins`目录中。多么麻烦啊！Plugins Galore允许你只需粘贴存储库的URL，它就会自动为你安装插件。由于Obsidian可能不知道如何检查这些插件的更新，Plugins Galore还会在你要求时检查更新。

**免责声明：不建议安装来自不信任的开发者的插件，请确保在使用此功能之前了解侧载插件的安全风险**

如何使用

### 添加插件

粘贴插件仓库的URL（例如 `https://github.com/plugins-galore/obsidian-plugins-galore`），然后点击“安装”。就这么简单。之后，插件会像其他插件一样被安装，你可以在Obsidian设置的常规“社区插件”选项卡中启用/禁用/删除它。该仓库可以从[GitHub](https://github.com/)或任何[Gitea](https://gitea.io/)实例（未经测试）中安装。

更新插件

要更新通过Plugins Galore安装的插件，请点击“检查更新”按钮，然后如果有任何可以更新的插件，您可以决定是否更新其中的某些插件。

相关插件

另请参阅[Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)，它同样允许侧加载插件，但更针对测试人员，而此插件旨在为插件开发人员提供一种简便的方式来分发其插件的实际发布版本，如果他们不想成为官方插件目录的一部分。

## 未来功能

暂定路线图：
- 允许用户通过插件宝库查看他们安装的插件，并查看 README 文件
- 创建一个插件浏览器，以搜索非官方插件目录以找到更多插件
- 给用户更多控制权和透明度，让他们了解安装的插件
- 允许用户选择下载插件的源代码并自行转译插件

它是如何工作的（内部原理）

我们几乎与Obsidian自己处理方式完全相同地检查git服务器上的发布。我现在懒得写更多的信息，但如果你有问题或需要帮助，请随时[提出问题](https://github.com/plugins-galore/obsidian-plugins-galore/issues)，让我知道更新自述文件的这一部分。




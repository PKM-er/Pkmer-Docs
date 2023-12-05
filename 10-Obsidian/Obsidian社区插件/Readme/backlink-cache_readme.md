---
uid: 2023120522242463
title: Obsidian 插件：【Readme】Backlink Cache
tags: ['obsidian插件', 'readme']
description: 将反向链接缓存存储以加快`app.metadataCache.getBacklinksForFile`的速度。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Backlink Cache

> [!Note] 插件名片
> - 插件名称：Backlink Cache
> - 插件作者：mnaoumov
> - 插件说明：将反向链接缓存存储以加快`app.metadataCache.getBacklinksForFile`的速度。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-backlink-cache)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?backlink-cache)

## 概述

将反向链接缓存存储以加快`app.metadataCache.getBacklinksForFile`的速度。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-backlink-cache/master/README.md)
> 

---

## Readme(翻译）

下面是 [[backlink-cache]] 插件的自述翻译


# Backlink Cache

这是一个为 [Obsidian](https://obsidian.md/) 设计的插件，用于维护反向链接缓存，以加速未记录的 `app.metadataCache.getBacklinksForFile` 函数。

对于拥有大型存储库的用户来说，这个插件非常有用。对于较小的存储库，可能不会有明显的差异。

它可以加速“反向链接面板”的性能以及处理反向链接的插件。

这个插件最有可能对其他处理反向链接的插件开发者有用。

它的想法来自于[论坛](https://forum.obsidian.md/t/store-backlinks-in-metadatacache/67000)。

如果您需要调用原始版本，可以使用 `app.metadataCache.getBacklinksForFile.originalFunc` 函数。
## 安装


- `Backlink Cache` 现在可以在[官方的社区插件仓库](https://obsidian.md/plugins)中找到。
- Beta 版本可以通过[BRAT](https://github.com/TfTHacker/obsidian42-brat)进行安装。




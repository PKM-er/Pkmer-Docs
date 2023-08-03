---
uid: 20230803231105
title: Obsidian 插件：Canvas Random Note
tags: ['白板相关', 'obsidian插件', 'readme']
description: 从你的保险库中添加随机笔记到Obsidian画布上
author: AI
type: readme
draft: false
editable: false
modified: 20230803232611
---

# Obsidian 插件：Canvas Random Note

> [!Note] 插件名片
> - 插件名称：Canvas Random Note
> - 插件作者：jmilldotdev
> - 插件说明：从你的保险库中添加随机笔记到 Obsidian 画布上
> - 插件分类：[' 白板相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jmilldotdev/obsidian-canvas-randomnote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-randomnote)

## 概述

从你的保险库中添加随机笔记到 Obsidian 画布上

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmilldotdev/obsidian-canvas-randomnote/master/README.md)
>

---

## Readme(翻译）

下面是 [[canvas-randomnote]] 插件的自述翻译

# Obsidian 画布随机笔记

该插件可用于将笔记添加到 Obsidian 画布视图中。

有两个可用的命令：

- `添加笔记` 将从您的存储库中的所有 Markdown 文件中进行选择
- `从搜索中添加笔记` 将从活动搜索中随机选择笔记

所选的笔记将以文件节点的网格形式添加到活动画布中。在运行命令时，可以设置与笔记数量和位置相关的几个设置。

<img width="507" alt="image" src="https://user-images.githubusercontent.com/33093632/206282118-f7a2e70c-5fbb-448e-950c-e0a56654bfe8.png">

## 警告

由于 Obsidian 开发者 API 中尚未提供官方的 Canvas API，因此该插件直接修改 Canvas 的底层数据。因此，不应快速连续运行多个命令，否则 Canvas 消耗的数据可能与您在 Obsidian 中看到的数据不同步。

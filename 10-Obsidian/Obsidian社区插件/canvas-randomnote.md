---
uid: 2024052908502745
title: Obsidian 插件：Canvas Random Note
tags: ['编辑工具', '白板', 'obsidian插件']
description: 从你的保险库中添加随机笔记到Obsidian画布上
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Random Note

> [!Note] 插件名片
> - 插件名称：Canvas Random Note
> - 插件作者：jmilldotdev
> - 插件说明：从你的保险库中添加随机笔记到 Obsidian 画布上
> - 插件分类：[' 编辑工具 ', ' 白板 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jmilldotdev/obsidian-canvas-randomnote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-randomnote)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmilldotdev/obsidian-canvas-randomnote/master/README.md)

## 概述

Obsidian Canvas RandomNote 是一个用于在 Obsidian 画布视图中添加随机笔记的插件。它提供两个命令：“添加笔记”将从存储库中的所有 Markdown 文件中选择笔记，“从搜索中添加笔记”将从活动搜索中随机选择笔记。所选笔记将以文件节点网格的形式添加到活动画布中。在运行命令时，可以设置与笔记数量和它们位置相关的几个设置。然而，需要注意的是，由于 Obsidian 开发者 API 中尚未提供官方的 Canvas API，因此该插件是直接修改 Canvas 的底层数据。因此，不应快速连续运行多个命令，否则可能导致 Canvas 消耗的数据与 Obsidian 中所见的数据不同步。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




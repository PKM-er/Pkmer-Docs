---
uid: 2024052908483346
title: Obsidian 插件：Filename Heading Sync
tags: ['文件管理', '文字处理', '数据处理', 'obsidian插件']
description: 黑曜石插件，用于保持文件名与文件的第一个标题同步
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Filename Heading Sync

> [!Note] 插件名片
> - 插件名称：Filename Heading Sync
> - 插件作者：dvcrn
> - 插件说明：黑曜石插件，用于保持文件名与文件的第一个标题同步
> - 插件分类：[' 文件管理 ', ' 文字处理 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/dvcrn/obsidian-filename-heading-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-filename-heading-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dvcrn/obsidian-filename-heading-sync/master/README.md)

![Filename Heading Sync](https://cdn.pkmer.cn/covers/obsidian-filename-heading-sync.gif!pkmer)

## 概述

Obsidian 文件名和文件第一个标题的同步插件可以在打开文件时自动同步文件名和第一个标题，解决了手动同步的问题。插件的功能包括：重命名当前文件时会更新标题，打开没有标题的文件会插入一个标题，打开文件时如果标题与文件名不同会更新标题，更新文件标题时会重命名文件。如果不喜欢自动重命名，可以在设置中禁用“文件保存钩子”和“文件打开钩子”，使用手动同步命令。插件可以通过添加正则表达式规则来解决与其他插件的冲突，如果问题仍然存在可以在 GitHub 上提交问题。插件的当前限制是重命名不是当前文件的文件时，下次以编辑模式打开文件时才会更新标题，Obsidian 无法处理的特殊字符会自动删除。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---




---
uid: 2024052908482730
title: Obsidian 插件：File Index
tags: ['数据处理', '文件管理', 'obsidian插件']
description: 在Vault中创建一个关于文件的元数据文件。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：File Index

> [!Note] 插件名片
> - 插件名称：File Index
> - 插件作者：Steffo
> - 插件说明：在 Vault 中创建一个关于文件的元数据文件。
> - 插件分类：[' 数据处理 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Steffo99/obsidian-file-index)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-index)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Steffo99/obsidian-file-index/master/README.md)

## 概述

Obsidian 文件索引是一个插件，用于创建和更新一个名为 `file-index.json` 的元数据文件，其中包含了所有文件路径的列表以及所有基本文件名到文件路径的映射。这对于在不了解存储库文件结构的情况下外部渲染 Wikilinks 非常有用，例如在 [Obsiview] 中。用户还可以通过在存储库的根目录添加一个名为 `file-index-ignore.json` 的文件来排除文件，该文件包含了一个正则表达式的 JSON 数组，将阻止匹配的文件被添加到列表中。已知问题是可能在区分具有相同基本文件名但位于不同文件夹中的文件时出现问题。

[Obsidian]: <https://obsidian.md/>
[Obsiview]: <https://github.com/Steffo99/obsiview>

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



